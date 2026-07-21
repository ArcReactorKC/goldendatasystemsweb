import { NextRequest } from "next/server";

/**
 * Thin proxy between the "Ask Our AI" chat UI and an n8n webhook.
 *
 * All retrieval/generation logic (embedding search over the Golden Data
 * Systems knowledge base, prompting the local LLM, etc.) lives in the n8n
 * workflow itself; this route only forwards the conversation and relays
 * the response, so the model/knowledge base can be swapped without
 * redeploying the site.
 *
 * Expected request body:  { messages: { role: "user" | "assistant"; content: string }[] }
 *
 * Expected webhook response (either shape is supported):
 *   - A streamed body (text/plain or text/event-stream) of the answer text, OR
 *   - A single JSON object: { "reply": "..." } or { "text": "..." }. The
 *     latter matches n8n's default output field (e.g. a Basic LLM Chain /
 *     Respond to Webhook node set to "Respond With: First Incoming Item").
 *
 * To swap this for a direct Anthropic API call instead of n8n, replace the
 * body of the try block below with a `client.messages.create(...)` call;
 * the request/response contract with the frontend does not need to change.
 */

// How long to wait for the n8n webhook to respond before giving up.
// Also caps this route's own execution time on platforms that enforce one
// (e.g. Vercel serverless functions); see the `maxDuration` export below.
const UPSTREAM_TIMEOUT_MS = 300_000; // 5 minutes

// Next.js route segment config: raises the max execution time for this
// function on platforms that impose one (Vercel Pro/Enterprise support up
// to 300s; Hobby is capped at 10s regardless of this value). No effect on
// self-hosted/standalone deployments (Docker, Unraid). Those are only
// bound by UPSTREAM_TIMEOUT_MS above and any reverse proxy in front of them.
export const maxDuration = 300;

export async function POST(req: NextRequest) {
  const webhookUrl = process.env.CHAT_WEBHOOK_URL;

  if (!webhookUrl) {
    return Response.json(
      {
        error: "not_configured",
        message:
          "CHAT_WEBHOOK_URL is not set. Configure the n8n webhook URL as an environment variable to enable Ask Our AI.",
      },
      { status: 503 },
    );
  }

  let body: { messages?: { role: string; content: string }[] };
  try {
    body = await req.json();
  } catch {
    return Response.json({ error: "invalid_request", message: "Request body must be JSON." }, { status: 400 });
  }

  const messages = Array.isArray(body.messages) ? body.messages : [];
  if (messages.length === 0) {
    return Response.json({ error: "invalid_request", message: "messages array is required." }, { status: 400 });
  }

  const latestMessage = messages[messages.length - 1];

  let upstream: Response;
  try {
    upstream = await fetch(webhookUrl, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        message: latestMessage.content,
        history: messages.slice(0, -1),
      }),
      signal: AbortSignal.timeout(UPSTREAM_TIMEOUT_MS),
    });
  } catch {
    return Response.json(
      {
        error: "unreachable",
        message: "The AI assistant backend could not be reached. Please try again shortly.",
      },
      { status: 502 },
    );
  }

  if (!upstream.ok || !upstream.body) {
    return Response.json(
      {
        error: "upstream_error",
        message: "The AI assistant backend returned an error.",
      },
      { status: 502 },
    );
  }

  const contentType = upstream.headers.get("content-type") ?? "text/plain; charset=utf-8";

  return new Response(upstream.body, {
    status: 200,
    headers: {
      "Content-Type": contentType,
      "Cache-Control": "no-store",
    },
  });
}

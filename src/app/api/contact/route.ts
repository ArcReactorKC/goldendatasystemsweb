import { NextRequest } from "next/server";

/**
 * Stub contact-form handler. Validates the submission and logs it.
 *
 * To go live, wire this up to a transactional email provider (Resend,
 * Postmark, SendGrid, etc.) using CONTACT_EMAIL_API_KEY / CONTACT_EMAIL_TO
 * from the environment, or forward the payload to a CRM webhook instead.
 */
export async function POST(req: NextRequest) {
  let body: Record<string, unknown>;
  try {
    body = await req.json();
  } catch {
    return Response.json({ error: "invalid_request" }, { status: 400 });
  }

  const { name, email, company, interest, message } = body as Record<string, string>;

  if (!name || !email || !message) {
    return Response.json(
      { error: "invalid_request", message: "name, email, and message are required." },
      { status: 400 },
    );
  }

  const emailApiKey = process.env.CONTACT_EMAIL_API_KEY;

  if (!emailApiKey) {
    console.info("[contact] New inquiry (email delivery not configured):", {
      name,
      email,
      company,
      interest,
      message,
    });
    return Response.json({ ok: true, delivered: false });
  }

  // TODO: replace with a real email provider call, e.g.:
  // await fetch("https://api.resend.com/emails", {
  //   method: "POST",
  //   headers: { Authorization: `Bearer ${emailApiKey}`, "Content-Type": "application/json" },
  //   body: JSON.stringify({
  //     to: process.env.CONTACT_EMAIL_TO,
  //     subject: `New inquiry from ${name}`,
  //     text: message,
  //   }),
  // });

  return Response.json({ ok: true, delivered: false });
}

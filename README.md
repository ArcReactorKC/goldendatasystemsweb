# Golden Data Systems — Marketing Website

The public marketing site for **Golden Data Systems**, a managed technology and
intelligent infrastructure partner for small and midsized businesses. Built
with Next.js (App Router) + TypeScript + Tailwind CSS, and packaged to run
either on Vercel or as a self-hosted Docker container (including on Unraid).

## Tech stack

- **Next.js 14** (App Router), TypeScript, Tailwind CSS
- Content lives in structured TypeScript files under `src/content/` — no CMS
  required for v1
- `output: "standalone"` in `next.config.js` so the app runs as a lightweight
  Node server, either via `next start` or the Docker image below

## Project structure

```
src/
  app/                 Route segments (one folder per page) + API routes
    api/chat/route.ts     Proxies "Ask Our AI" to an n8n webhook
    api/contact/route.ts  Stub contact-form handler
  components/          UI building blocks, organized by page/feature
  content/             Editable site copy: services, industries, AI
                        capabilities, engagement models, nav, stats
  lib/                 Small helpers (metadata builder, classnames)
  types/               Shared TypeScript types for content models
```

To edit site copy — service descriptions, industries served, stats, nav
links, contact placeholders — edit the files in `src/content/`. No page code
needs to change for most content updates.

## Local development

Requires Node.js 20+.

```bash
npm install
npm run dev
```

Visit `http://localhost:3000`. Copy `.env.example` to `.env.local` and fill in
values as needed (all optional for basic local browsing):

```bash
cp .env.example .env.local
```

Other useful scripts:

```bash
npm run build       # production build (also used by Docker)
npm run start       # run the production build locally
npm run lint        # ESLint
npm run typecheck   # tsc --noEmit
```

## Ask Our AI backend

The `/ask-ai` page is a chat UI backed by `src/app/api/chat/route.ts`, which is
intentionally a **thin proxy** — it forwards the conversation to an external
webhook and streams the response back. All retrieval and generation logic
(embedding search over a Golden Data Systems knowledge base, prompting a local
LLM, etc.) is expected to live in that external system so the model and
knowledge base can change without redeploying the site.

**Default architecture:** an n8n workflow.

1. Set `CHAT_WEBHOOK_URL` to your n8n webhook endpoint.
2. The route POSTs `{ message: string, history: {role, content}[] }` to that
   URL.
3. Your n8n workflow should perform retrieval over a small knowledge base
   seeded from this site's own content (services, industries, engagement
   models, mission — see `src/content/`), call your LLM, and respond with
   either:
   - a streamed body (`text/plain` or `text/event-stream`) of the answer, or
   - a single JSON object: `{ "reply": "..." }`.

If `CHAT_WEBHOOK_URL` is unset, or the webhook is unreachable, the API route
returns a clear error and the chat UI falls back to a friendly message
pointing visitors to the Contact page — the page never looks broken.

**Alternative architecture:** if you'd rather not depend on n8n/Ollama uptime
for a public page, swap the body of `src/app/api/chat/route.ts` for a direct
call to the Anthropic API (or another provider) with the knowledge base
injected as context. The request/response contract with the frontend
(`src/components/chat/ChatInterface.tsx`) does not need to change — this is a
one-file swap.

## Contact form

`src/app/api/contact/route.ts` validates submissions and currently logs them
to the console. Wire up `CONTACT_EMAIL_API_KEY` / `CONTACT_EMAIL_TO` to a real
transactional email provider (Resend, Postmark, SendGrid, etc.) when ready —
see the `TODO` comment in that file.

## Placeholders to replace before launch

Search the codebase for these before going live:

- `src/content/site.ts` — sales/support email, social links
- `src/content/site.ts` — `trustStats` and `credibilityNote` (real
  certifications, client logos, stats)
- `.env.local` / deployment environment — `CHAT_WEBHOOK_URL`,
  `NEXT_PUBLIC_SITE_URL`, `CONTACT_EMAIL_API_KEY`, `CONTACT_EMAIL_TO`

## Docker

### Build and run locally

```bash
docker compose up --build
```

This builds the multi-stage `Dockerfile` (deps → build → slim
`node:20-alpine` runtime, non-root user, `next build` with
`output: "standalone"`) and serves the site on `http://localhost:3000`.

Environment variables (`CHAT_WEBHOOK_URL`, `NEXT_PUBLIC_SITE_URL`,
`CONTACT_EMAIL_API_KEY`, `CONTACT_EMAIL_TO`) can be set in a `.env` file next
to `docker-compose.yml` (same keys as `.env.example`), or exported in your
shell before running `docker compose up`.

To build the image manually:

```bash
docker build -t golden-data-systems:local .
docker run --rm -p 3000:3000 \
  -e CHAT_WEBHOOK_URL=https://your-n8n-instance/webhook/golden-data-chat \
  -e NEXT_PUBLIC_SITE_URL=https://www.goldendatasystems.com \
  golden-data-systems:local
```

### CI/CD — GitHub Actions

`.github/workflows/docker-publish.yml` builds and publishes the image to
GHCR on every push to `main` and on version tags (`v*.*.*`):

- `ghcr.io/<owner>/golden-data-systems:latest` (on `main`)
- `ghcr.io/<owner>/golden-data-systems:sha-<short-sha>` (every build)
- `ghcr.io/<owner>/golden-data-systems:<version>` (on a `vX.Y.Z` tag)

No extra secrets are required — it authenticates with the automatically
provided `GITHUB_TOKEN`, scoped to `packages: write`. If your GHCR packages
are private, make sure the repository (or org) is configured to allow the
Unraid host to pull them, or make the package public.

## Unraid deployment

You can add this app to Unraid's Community Applications either by pointing at
this repo's template directly, or by adding the template manually.

**Option A — Add via template URL:**

1. In Unraid, go to **Docker → Add Container**.
2. Click the template dropdown at the top and choose **"Template"**, then
   paste the raw URL to `unraid-template.xml` in this repo, e.g.:
   `https://raw.githubusercontent.com/arcreactorkc/goldendatasystemsweb/main/unraid-template.xml`
3. Unraid will populate the fields (repository, port, env vars) — review and
   click **Apply**.

**Option B — Manual template add:**

1. Copy `unraid-template.xml` from this repo to
   `/boot/config/plugins/dockerMan/templates-user/` on your Unraid box.
2. In Unraid, go to **Docker → Add Container**, and select
   **golden-data-systems** from the template dropdown.
3. Fill in the exposed fields:
   - **WebUI Port** — host port to map to the container's `3000` (default
     `3000`)
   - **Chat Webhook URL** — your n8n webhook for Ask Our AI
   - **Public Site URL** — your production domain
   - **Contact Email API Key** / **Contact Email To** — optional, for the
     contact form
4. Click **Apply**. The app is stateless in v1 — no volume mappings are
   required.

Once running, the WebUI button in Unraid's Docker tab opens
`http://<unraid-ip>:<port>`.

## Accessibility & performance notes

- Semantic HTML throughout, keyboard-navigable nav (including the mobile
  slide-out menu) and chat interface
- All interactive targets are at least 44×44px
- Images should use `next/image` with responsive `sizes` as real photography
  is added (v1 ships with no binary image assets — only inline SVG/icon
  components — to keep the repo lightweight)
- Tested layouts at 375px, 768px, 1024px, and 1440px breakpoints

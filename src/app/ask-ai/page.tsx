import { Container } from "@/components/ui/Container";
import { ChatInterface } from "@/components/chat/ChatInterface";
import { pageMetadata } from "@/lib/metadata";

export const metadata = pageMetadata({
  title: "Ask Our AI",
  description:
    "Ask our AI assistant questions about Golden Data Systems' services, industries served, engagement models, and mission — grounded only in our own content.",
  path: "/ask-ai",
});

export default function AskAiPage() {
  return (
    <div className="flex flex-col">
      <div className="flex h-[calc(100dvh-4rem)] flex-col sm:h-[calc(100dvh-5rem)] lg:h-auto">
        <div className="shrink-0 border-b border-navy-900/10 bg-slate-50 py-4 sm:py-8 lg:py-6">
          <Container>
            <p className="text-sm font-semibold uppercase tracking-widest text-gold-600">Ask Our AI</p>
            <h1 className="mt-2 text-xl font-bold tracking-tight text-navy-900 sm:text-2xl lg:text-3xl">
              Get answers about Golden Data Systems, instantly
            </h1>
            <p className="mt-2 hidden max-w-2xl text-sm text-slate-600 sm:block sm:text-base">
              This assistant answers questions using only our own site content — services, industries,
              engagement models, and mission. It won&apos;t speculate beyond what we&apos;ve published.
            </p>
          </Container>
        </div>

        <div className="min-h-0 flex-1 lg:flex-none lg:py-6">
          <Container className="h-full px-0 sm:px-6 lg:px-8">
            <ChatInterface />
          </Container>
        </div>
      </div>

      <Container className="py-6 sm:py-8">
        <p className="mx-auto max-w-3xl text-center text-xs leading-relaxed text-slate-500 sm:text-sm">
          This assistant answers questions about Golden Data Systems using our own information. For
          account-specific or technical support, please{" "}
          <a href="/contact" className="font-semibold text-gold-600 underline">
            contact us directly
          </a>
          .
        </p>
      </Container>
    </div>
  );
}

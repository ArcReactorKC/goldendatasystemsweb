import Link from "next/link";
import { Container } from "@/components/ui/Container";

export function ClosingCta() {
  return (
    <section className="relative overflow-hidden bg-gold-500 py-16 sm:py-20">
      <div className="absolute inset-0 bg-circuit-grid bg-grid opacity-10" aria-hidden="true" />
      <Container className="relative flex flex-col items-center gap-6 text-center">
        <h2 className="max-w-2xl text-3xl font-bold tracking-tight text-navy-950 sm:text-4xl">
          Ready for technology that works as hard as you do?
        </h2>
        <p className="max-w-xl text-base text-navy-900/80 sm:text-lg">
          Tell us about your environment and we&apos;ll show you exactly where a senior technology partner
          can save your team time, risk, and money.
        </p>
        <div className="flex flex-col gap-4 sm:flex-row">
          <Link
            href="/contact"
            className="inline-flex min-h-[44px] items-center justify-center rounded-md bg-navy-950 px-7 py-3.5 text-base font-semibold text-white transition-colors hover:bg-navy-900"
          >
            Schedule a Consultation
          </Link>
          <Link
            href="/ask-ai"
            className="inline-flex min-h-[44px] items-center justify-center rounded-md border border-navy-950/30 px-7 py-3.5 text-base font-semibold text-navy-950 transition-colors hover:bg-navy-950/10"
          >
            Ask Our AI a Question
          </Link>
        </div>
      </Container>
    </section>
  );
}

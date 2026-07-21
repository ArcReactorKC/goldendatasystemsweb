import { Container } from "@/components/ui/Container";
import { DarkCard } from "@/components/ui/Card";
import { Icon } from "@/components/ui/Icon";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { Section, SectionHeading } from "@/components/ui/Section";
import { ClosingCta } from "@/components/home/ClosingCta";
import { automationCapabilities } from "@/content/automation";
import { pageMetadata } from "@/lib/metadata";

export const metadata = pageMetadata({
  title: "AI & Automation",
  description:
    "Workflow automation, private AI assistants, document processing, reporting dashboards, and custom tools, built around how your operation actually runs.",
  path: "/ai-automation",
});

export default function AiAutomationPage() {
  return (
    <>
      <section className="relative overflow-hidden bg-navy-950 py-20 text-white sm:py-28">
        <div className="absolute inset-0 bg-circuit-grid bg-grid opacity-30" aria-hidden="true" />
        <Container className="relative">
          <p className="text-sm font-semibold uppercase tracking-widest text-gold-400">
            AI &amp; Automation
          </p>
          <h1 className="mt-3 max-w-3xl text-4xl font-bold tracking-tight sm:text-5xl">
            Practical automation, built by the team that already runs your infrastructure
          </h1>
          <p className="mt-5 max-w-2xl text-lg text-slate-300">
            This is where Golden Data Systems differs from a traditional MSP. We don&apos;t sell AI as a
            product; we build automation, private assistants, and custom tools that solve specific,
            expensive problems inside your operation, and we keep them running.
          </p>
        </Container>
      </section>

      <Section tone="default">
        <Container>
          <SectionHeading
            eyebrow="What we build"
            title="Seven ways automation removes work from your team's plate"
            description="Each capability below starts with a real operational problem, not a feature list."
          />

          <div className="mt-12 grid grid-cols-1 gap-6 lg:grid-cols-2">
            {automationCapabilities.map((cap, i) => (
              <ScrollReveal key={cap.slug} delay={(i % 2) * 80}>
                <div
                  id={cap.slug}
                  className="scroll-mt-24 rounded-xl border border-navy-900/10 bg-white p-6 shadow-sm sm:p-8"
                >
                  <div className="flex items-center gap-3">
                    <span className="flex h-11 w-11 items-center justify-center rounded-lg bg-navy-900/5 text-navy-800">
                      <Icon name={cap.icon} className="h-6 w-6" />
                    </span>
                    <h3 className="text-xl font-bold text-navy-900">{cap.name}</h3>
                  </div>

                  <div className="mt-5 space-y-4">
                    <div>
                      <p className="text-xs font-semibold uppercase tracking-wide text-slate-400">
                        The problem
                      </p>
                      <p className="mt-1 text-sm leading-relaxed text-slate-600">{cap.problem}</p>
                    </div>
                    <div>
                      <p className="text-xs font-semibold uppercase tracking-wide text-gold-600">
                        Our solution
                      </p>
                      <p className="mt-1 text-sm leading-relaxed text-slate-700">{cap.solution}</p>
                    </div>
                    <div className="rounded-lg bg-navy-950 px-4 py-3">
                      <p className="text-xs font-semibold uppercase tracking-wide text-gold-400">
                        The outcome
                      </p>
                      <p className="mt-1 text-sm leading-relaxed text-slate-200">{cap.outcome}</p>
                    </div>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </Container>
      </Section>

      <Section tone="darker" className="relative overflow-hidden">
        <div className="absolute inset-0 bg-circuit-grid bg-grid opacity-20" aria-hidden="true" />
        <Container className="relative">
          <SectionHeading
            eyebrow="See it in action"
            title="Curious what this looks like in practice?"
            description="Our own “Ask Our AI” assistant on this site runs on the same architecture we build for clients: a private knowledge base, retrieval-grounded answers, and no hallucinated claims about services we don't offer."
            light
          />
          <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-3">
            {[
              { icon: "assistant" as const, label: "Grounded in company content only" },
              { icon: "lock" as const, label: "Private, access-controlled deployment" },
              { icon: "integration" as const, label: "Swappable model and knowledge base" },
            ].map((item) => (
              <DarkCard key={item.label} className="flex items-center gap-3">
                <Icon name={item.icon} className="h-6 w-6 shrink-0 text-gold-400" />
                <span className="text-sm text-slate-200">{item.label}</span>
              </DarkCard>
            ))}
          </div>
        </Container>
      </Section>

      <ClosingCta />
    </>
  );
}

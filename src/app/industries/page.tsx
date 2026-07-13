import { Container } from "@/components/ui/Container";
import { Icon } from "@/components/ui/Icon";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { Section } from "@/components/ui/Section";
import { ClosingCta } from "@/components/home/ClosingCta";
import { industries } from "@/content/industries";
import { cn } from "@/lib/utils";
import { pageMetadata } from "@/lib/metadata";

export const metadata = pageMetadata({
  title: "Industries We Serve",
  description:
    "Technology built for professional services, contractors, manufacturers, energy companies, agricultural operations, and field-service organizations with distributed teams and remote sites.",
  path: "/industries",
});

export default function IndustriesPage() {
  return (
    <>
      <section className="bg-navy-950 py-16 text-white sm:py-20">
        <Container>
          <p className="text-sm font-semibold uppercase tracking-widest text-gold-400">Industries</p>
          <h1 className="mt-3 max-w-3xl text-4xl font-bold tracking-tight sm:text-5xl">
            Built for operations that don&apos;t happen in one building
          </h1>
          <p className="mt-5 max-w-2xl text-lg text-slate-300">
            Distributed teams, remote sites, and specialized operations need technology support that
            assumes distance and complexity from day one — not a generic help desk retrofitted for it.
          </p>
        </Container>
      </section>

      <Section tone="default">
        <Container>
          <div className="space-y-14">
            {industries.map((industry, i) => (
              <ScrollReveal key={industry.slug} delay={Math.min(i, 4) * 40}>
                <div
                  id={industry.slug}
                  className={cn(
                    "scroll-mt-24 grid grid-cols-1 items-start gap-8 rounded-2xl border border-navy-900/10 p-6 sm:p-8 lg:grid-cols-5",
                    i % 2 === 0 ? "bg-white" : "bg-slate-50",
                  )}
                >
                  <div className="lg:col-span-2">
                    <span className="flex h-12 w-12 items-center justify-center rounded-lg bg-gold-500/10 text-gold-600">
                      <Icon name={industry.icon} className="h-7 w-7" />
                    </span>
                    <h2 className="mt-4 text-2xl font-bold text-navy-900">{industry.name}</h2>
                    <p className="mt-2 text-sm font-semibold text-gold-600">{industry.painPoint}</p>
                  </div>
                  <div className="lg:col-span-3">
                    <p className="text-base leading-relaxed text-slate-600">{industry.description}</p>
                    <ul className="mt-5 grid grid-cols-1 gap-3 sm:grid-cols-2">
                      {industry.bullets.map((bullet) => (
                        <li key={bullet} className="flex items-start gap-3 text-sm text-slate-700">
                          <Icon name="check" className="mt-0.5 h-4 w-4 shrink-0 text-gold-500" />
                          <span>{bullet}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </Container>
      </Section>

      <ClosingCta />
    </>
  );
}

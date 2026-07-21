import { Container } from "@/components/ui/Container";
import { Icon } from "@/components/ui/Icon";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { Section, SectionHeading } from "@/components/ui/Section";
import { DarkCard } from "@/components/ui/Card";
import { ClosingCta } from "@/components/home/ClosingCta";
import { trustStats } from "@/content/site";
import { pageMetadata } from "@/lib/metadata";

export const metadata = pageMetadata({
  title: "About & Mission",
  description:
    "Golden Data Systems is a long-term technology partner for small and midsized businesses, built on critical-infrastructure experience, not just help-desk ticketing.",
  path: "/about",
});

const values = [
  {
    icon: "handshake" as const,
    title: "Partner, not vendor",
    description:
      "We measure success in your business outcomes, not in tickets closed or hours billed. A good partner tells you what you need to hear, not just what's easiest to sell.",
  },
  {
    icon: "shield" as const,
    title: "Reliability first",
    description:
      "Infrastructure that touches production floors, remote field sites, and client-facing systems doesn't get a second chance at uptime. We build and support accordingly.",
  },
  {
    icon: "chip" as const,
    title: "Practical technology, not hype",
    description:
      "We adopt automation and AI where it solves a real, measurable problem, never as a feature checkbox. If it doesn't save you time or reduce risk, we won't recommend it.",
  },
];

export default function AboutPage() {
  return (
    <>
      <section className="bg-navy-950 py-16 text-white sm:py-20">
        <Container>
          <p className="text-sm font-semibold uppercase tracking-widest text-gold-400">
            About Golden Data Systems
          </p>
          <h1 className="mt-3 max-w-3xl text-4xl font-bold tracking-tight sm:text-5xl">
            A long-term technology partner, built on infrastructure experience
          </h1>
        </Container>
      </section>

      <Section tone="default">
        <Container className="max-w-3xl">
          <p className="text-lg leading-relaxed text-slate-700">
            Golden Data Systems was built on a simple observation: small and midsized businesses are
            expected to run on enterprise-grade technology, but are rarely offered enterprise-grade
            support. Most managed service providers optimize for ticket volume. We optimized for
            something else: becoming the kind of technology partner our own backgrounds in critical
            infrastructure taught us to expect.
          </p>
          <p className="mt-6 text-lg leading-relaxed text-slate-700">
            Our team&apos;s experience spans traditional corporate IT and hands-on operational technology:
            the networks, control systems, and remote assets that don&apos;t tolerate downtime. That
            background shapes how we approach every engagement: security and reliability aren&apos;t add-ons,
            they&apos;re the starting point.
          </p>
          <p className="mt-6 text-lg leading-relaxed text-slate-700">
            As automation and practical AI became genuinely useful tools rather than buzzwords, we built
            that capability in-house rather than bolting it on. Today, Golden Data Systems sits at the
            intersection of managed IT, industrial-grade infrastructure discipline, and applied
            automation, a combination most MSPs simply don&apos;t offer.
          </p>
        </Container>
      </Section>

      <Section tone="darker" className="relative overflow-hidden">
        <div className="absolute inset-0 bg-circuit-grid bg-grid opacity-20" aria-hidden="true" />
        <Container className="relative">
          <SectionHeading eyebrow="Our Mission" title="Be the technology partner our clients would choose to keep" light />
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-slate-300">
            We exist to give growing businesses access to the kind of technology leadership,
            infrastructure discipline, and automation capability that&apos;s normally reserved for large
            enterprises, delivered as a long-term partnership, not a transactional vendor relationship.
          </p>

          <div className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-3">
            {values.map((value) => (
              <DarkCard key={value.title}>
                <Icon name={value.icon} className="h-7 w-7 text-gold-400" />
                <h3 className="mt-4 text-lg font-bold text-white">{value.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-300">{value.description}</p>
              </DarkCard>
            ))}
          </div>
        </Container>
      </Section>

      <Section tone="default" className="bg-slate-50">
        <Container>
          <div className="grid grid-cols-2 gap-8 sm:gap-10 lg:grid-cols-4">
            {trustStats.map((stat) => (
              <ScrollReveal key={stat.label}>
                <div className="text-center">
                  <p className="text-4xl font-bold text-gold-600 sm:text-5xl">{stat.value}</p>
                  <p className="mt-2 text-sm text-slate-600 sm:text-base">{stat.label}</p>
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

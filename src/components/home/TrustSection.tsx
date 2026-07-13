import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { StatCounter } from "@/components/ui/StatCounter";
import { credibilityNote, trustStats } from "@/content/site";

export function TrustSection() {
  return (
    <Section tone="dark">
      <Container>
        <div className="grid grid-cols-2 gap-8 sm:gap-10 lg:grid-cols-4">
          {trustStats.map((stat) => (
            <StatCounter key={stat.label} stat={stat} />
          ))}
        </div>
        <p className="mt-12 text-center text-sm italic text-slate-500">{credibilityNote}</p>
      </Container>
    </Section>
  );
}

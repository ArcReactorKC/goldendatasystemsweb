import { Container } from "@/components/ui/Container";
import { DarkCard } from "@/components/ui/Card";
import { Icon } from "@/components/ui/Icon";
import { Section, SectionHeading } from "@/components/ui/Section";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { Button } from "@/components/ui/Button";
import { differentiators } from "@/content/home";

export function Differentiators() {
  return (
    <Section tone="darker" className="relative overflow-hidden">
      <div className="absolute inset-0 bg-circuit-grid bg-grid opacity-20" aria-hidden="true" />
      <Container className="relative">
        <SectionHeading
          eyebrow="Why Golden Data Systems"
          title="Built for businesses that need more than a help desk"
          description="Most MSPs manage laptops and licenses. We do that too, and then we go further into automation, industrial systems, and AI that most providers don't touch."
          light
        />

        <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2">
          {differentiators.map((item, i) => (
            <ScrollReveal key={item.title} delay={i * 80}>
              <DarkCard className="flex h-full gap-4">
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-gold-500/10 text-gold-400">
                  <Icon name={item.icon} className="h-6 w-6" />
                </span>
                <div>
                  <h3 className="text-lg font-bold text-white">{item.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-slate-300">{item.description}</p>
                </div>
              </DarkCard>
            </ScrollReveal>
          ))}
        </div>

        <div className="mt-10">
          <Button href="/ai-automation" size="lg">
            See AI &amp; Automation in action &rarr;
          </Button>
        </div>
      </Container>
    </Section>
  );
}

import { Container } from "@/components/ui/Container";
import { Card } from "@/components/ui/Card";
import { Icon } from "@/components/ui/Icon";
import { Section, SectionHeading } from "@/components/ui/Section";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { Button } from "@/components/ui/Button";
import { engagementModels } from "@/content/engagement";

export function EngagementTeaser() {
  return (
    <Section tone="default" className="bg-slate-50">
      <Container>
        <SectionHeading
          eyebrow="How We Work"
          title="Flexible engagement models, not one-size-fits-all contracts"
          description="Whether you need full-time managed support or a single project delivered on budget, we structure the engagement around your goals."
        />

        <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {engagementModels.map((model, i) => (
            <ScrollReveal key={model.name} delay={i * 80}>
              <Card className="h-full">
                <Icon name={model.icon} className="h-7 w-7 text-gold-600" />
                <h3 className="mt-4 text-base font-bold text-navy-900">{model.name}</h3>
                <p className="mt-1 text-xs font-semibold uppercase tracking-wide text-gold-600">
                  {model.tagline}
                </p>
                <p className="mt-3 text-sm leading-relaxed text-slate-600">{model.description}</p>
              </Card>
            </ScrollReveal>
          ))}
        </div>

        <div className="mt-10 flex justify-center">
          <Button href="/how-we-work" variant="ghost" size="lg">
            See how engagements work &rarr;
          </Button>
        </div>
      </Container>
    </Section>
  );
}

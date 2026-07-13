import { Container } from "@/components/ui/Container";
import { Card } from "@/components/ui/Card";
import { Icon } from "@/components/ui/Icon";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { Section, SectionHeading } from "@/components/ui/Section";
import { ClosingCta } from "@/components/home/ClosingCta";
import { engagementModels, onboardingSteps } from "@/content/engagement";
import { pageMetadata } from "@/lib/metadata";

export const metadata = pageMetadata({
  title: "How We Work",
  description:
    "Recurring managed plans, fixed-price implementation projects, consulting engagements, and managed cloud/software solutions — plus what onboarding with Golden Data Systems looks like.",
  path: "/how-we-work",
});

export default function HowWeWorkPage() {
  return (
    <>
      <section className="bg-navy-950 py-16 text-white sm:py-20">
        <Container>
          <p className="text-sm font-semibold uppercase tracking-widest text-gold-400">How We Work</p>
          <h1 className="mt-3 max-w-3xl text-4xl font-bold tracking-tight sm:text-5xl">
            Engagement models built around your goals, not our contract templates
          </h1>
          <p className="mt-5 max-w-2xl text-lg text-slate-300">
            Some clients need us full-time. Others need a single project done right. We structure the
            relationship to match — plainly, with no hidden scope.
          </p>
        </Container>
      </section>

      <Section tone="default">
        <Container>
          <SectionHeading eyebrow="Engagement Models" title="Four ways to work with us" />
          <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2">
            {engagementModels.map((model, i) => (
              <ScrollReveal key={model.name} delay={i * 80}>
                <Card className="h-full">
                  <div className="flex items-center gap-3">
                    <span className="flex h-11 w-11 items-center justify-center rounded-lg bg-navy-900/5 text-navy-800">
                      <Icon name={model.icon} className="h-6 w-6" />
                    </span>
                    <h3 className="text-lg font-bold text-navy-900">{model.name}</h3>
                  </div>
                  <p className="mt-3 text-sm font-semibold uppercase tracking-wide text-gold-600">
                    {model.tagline}
                  </p>
                  <p className="mt-3 text-sm leading-relaxed text-slate-600">{model.description}</p>
                  <p className="mt-4 border-t border-slate-100 pt-4 text-sm text-slate-500">
                    <span className="font-semibold text-navy-800">Best for: </span>
                    {model.bestFor}
                  </p>
                </Card>
              </ScrollReveal>
            ))}
          </div>
        </Container>
      </Section>

      <Section tone="default" className="bg-slate-50">
        <Container>
          <SectionHeading
            eyebrow="Onboarding"
            title="What getting started looks like"
            description="A straightforward path from first call to ongoing partnership — typically 2 to 6 weeks depending on environment complexity."
          />

          <div className="mt-14">
            <ol className="relative grid grid-cols-1 gap-10 sm:grid-cols-5 sm:gap-4">
              <div
                className="absolute left-0 right-0 top-6 hidden h-0.5 bg-navy-900/10 sm:block"
                aria-hidden="true"
              />
              {onboardingSteps.map((step) => (
                <li key={step.step} className="relative flex flex-col items-start sm:items-center sm:text-center">
                  <span className="relative z-10 flex h-12 w-12 shrink-0 items-center justify-center rounded-full border-2 border-gold-500 bg-white text-lg font-bold text-gold-600">
                    {step.step}
                  </span>
                  <h3 className="mt-4 text-base font-bold text-navy-900">{step.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-slate-600">{step.description}</p>
                </li>
              ))}
            </ol>
          </div>
        </Container>
      </Section>

      <ClosingCta />
    </>
  );
}

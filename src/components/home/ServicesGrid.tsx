import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { Card } from "@/components/ui/Card";
import { Icon } from "@/components/ui/Icon";
import { SectionHeading, Section } from "@/components/ui/Section";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { Button } from "@/components/ui/Button";
import { services } from "@/content/services";

export function ServicesGrid() {
  return (
    <Section tone="default">
      <Container>
        <SectionHeading
          eyebrow="Core Services"
          title="Everything a modern IT department handles — managed as one program"
          description="Eight interconnected disciplines, delivered by one team that already knows your environment."
        />

        <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service, i) => (
            <ScrollReveal key={service.slug} delay={(i % 3) * 80}>
              <Card className="flex h-full flex-col">
                <span className="flex h-11 w-11 items-center justify-center rounded-lg bg-navy-900/5 text-navy-800">
                  <Icon name={service.icon} className="h-6 w-6" />
                </span>
                <h3 className="mt-4 text-lg font-bold text-navy-900">{service.name}</h3>
                <p className="mt-2 flex-1 text-sm leading-relaxed text-slate-600">{service.summary}</p>
                <Link
                  href={`/services#${service.slug}`}
                  className="mt-4 inline-flex min-h-[44px] items-center text-sm font-semibold text-gold-600 hover:text-gold-700"
                >
                  Learn more &rarr;
                </Link>
              </Card>
            </ScrollReveal>
          ))}
        </div>

        <div className="mt-10 flex justify-center">
          <Button href="/services" variant="ghost" size="lg">
            View all services &rarr;
          </Button>
        </div>
      </Container>
    </Section>
  );
}

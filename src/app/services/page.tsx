import { Container } from "@/components/ui/Container";
import { Icon } from "@/components/ui/Icon";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { Section } from "@/components/ui/Section";
import { ClosingCta } from "@/components/home/ClosingCta";
import { services } from "@/content/services";
import { pageMetadata } from "@/lib/metadata";

export const metadata = pageMetadata({
  title: "IT Services",
  description:
    "Managed IT support, Microsoft 365 & Google Workspace administration, cloud infrastructure, cybersecurity monitoring, network management, and strategic consulting for growing businesses.",
  path: "/services",
});

export default function ServicesPage() {
  return (
    <>
      <section className="bg-navy-950 py-16 text-white sm:py-20">
        <Container>
          <p className="text-sm font-semibold uppercase tracking-widest text-gold-400">Services</p>
          <h1 className="mt-3 max-w-3xl text-4xl font-bold tracking-tight sm:text-5xl">
            A full technology department, managed as one program
          </h1>
          <p className="mt-5 max-w-2xl text-lg text-slate-300">
            Every discipline below is delivered by the same accountable team, with no hand-offs between
            vendors, no gaps in coverage between your help desk and your infrastructure.
          </p>
        </Container>
      </section>

      <Section tone="default">
        <Container>
          <div className="space-y-16">
            {services.map((service, i) => (
              <ScrollReveal key={service.slug} delay={Math.min(i, 4) * 40}>
                <div
                  id={service.slug}
                  className="grid scroll-mt-24 grid-cols-1 gap-8 border-b border-slate-100 pb-16 last:border-0 lg:grid-cols-3"
                >
                  <div className="lg:col-span-1">
                    <span className="flex h-12 w-12 items-center justify-center rounded-lg bg-navy-900/5 text-navy-800">
                      <Icon name={service.icon} className="h-7 w-7" />
                    </span>
                    <h2 className="mt-4 text-2xl font-bold text-navy-900">{service.name}</h2>
                    <p className="mt-3 text-base leading-relaxed text-slate-600">{service.description}</p>
                  </div>
                  <div className="lg:col-span-2">
                    <p className="text-sm font-semibold uppercase tracking-wide text-gold-600">
                      What&apos;s included
                    </p>
                    <ul className="mt-4 grid grid-cols-1 gap-3 sm:grid-cols-2">
                      {service.included.map((item) => (
                        <li key={item} className="flex items-start gap-3 text-sm text-slate-700">
                          <Icon name="check" className="mt-0.5 h-4 w-4 shrink-0 text-gold-500" />
                          <span>{item}</span>
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

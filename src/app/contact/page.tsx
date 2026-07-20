import { Container } from "@/components/ui/Container";
import { Icon } from "@/components/ui/Icon";
import { Section } from "@/components/ui/Section";
import { ContactForm } from "@/components/contact/ContactForm";
import { site } from "@/content/site";
import { pageMetadata } from "@/lib/metadata";

export const metadata = pageMetadata({
  title: "Contact",
  description:
    "Schedule a consultation or send Golden Data Systems a message — we'll follow up within one business day.",
  path: "/contact",
});

export default function ContactPage() {
  return (
    <>
      <section className="bg-navy-950 py-16 text-white sm:py-20">
        <Container>
          <p className="text-sm font-semibold uppercase tracking-widest text-gold-400">Contact</p>
          <h1 className="mt-3 max-w-3xl text-4xl font-bold tracking-tight sm:text-5xl">
            Let&apos;s talk about your environment
          </h1>
          <p className="mt-5 max-w-2xl text-lg text-slate-300">
            Whether you&apos;re ready to schedule a consultation or just have a question, we usually reply
            within one business day.
          </p>
        </Container>
      </section>

      <Section tone="default">
        <Container>
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-5">
            <div className="lg:col-span-3">
              <h2 className="text-xl font-bold text-navy-900">Send us a message</h2>
              <div className="mt-6">
                <ContactForm />
              </div>
            </div>

            <div className="space-y-8 lg:col-span-2">
              <div className="rounded-xl border border-navy-900/10 bg-slate-50 p-6">
                <h2 className="text-lg font-bold text-navy-900">Direct Contact</h2>
                <ul className="mt-4 space-y-4 text-sm text-slate-700">
                  <li className="flex items-center gap-3">
                    <Icon name="document" className="h-5 w-5 text-gold-600" />
                    <span>
                      <a href={`mailto:${site.salesEmail}`} className="hover:text-gold-600">
                        {site.salesEmail}
                      </a>{" "}
                      <span className="text-slate-400">— new business &amp; sales inquiries</span>
                    </span>
                  </li>
                  <li className="flex items-center gap-3">
                    <Icon name="document" className="h-5 w-5 text-gold-600" />
                    <span>
                      <a href={`mailto:${site.supportEmail}`} className="hover:text-gold-600">
                        {site.supportEmail}
                      </a>{" "}
                      <span className="text-slate-400">— existing clients &amp; support</span>
                    </span>
                  </li>
                  <li className="flex items-center gap-3">
                    <Icon name="network" className="h-5 w-5 text-gold-600" />
                    <span>{site.address}</span>
                  </li>
                </ul>
              </div>

              <div className="rounded-xl border border-navy-900/10 p-6">
                <h2 className="text-lg font-bold text-navy-900">Schedule a Consultation</h2>
                <p className="mt-2 text-sm text-slate-600">
                  Pick a time directly on our calendar — no back-and-forth email required.
                </p>
                <div className="mt-4 aspect-[4/5] w-full overflow-hidden rounded-lg border border-navy-900/10 bg-slate-100 sm:aspect-square">
                  {site.calendlyUrl && site.calendlyUrl.startsWith("http") ? (
                    <iframe
                      src={site.calendlyUrl}
                      title="Schedule a consultation"
                      className="h-full w-full"
                      loading="lazy"
                    />
                  ) : (
                    <div className="flex h-full w-full flex-col items-center justify-center gap-2 p-6 text-center">
                      <Icon name="clock" className="h-8 w-8 text-slate-400" />
                      <p className="text-sm font-medium text-slate-500">
                        [CALENDAR EMBED PLACEHOLDER]
                      </p>
                      <p className="text-xs text-slate-400">
                        Replace <code>site.calendlyUrl</code> in <code>src/content/site.ts</code> with a
                        Calendly (or similar) embed URL.
                      </p>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </Container>
      </Section>
    </>
  );
}

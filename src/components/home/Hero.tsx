import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { Icon } from "@/components/ui/Icon";

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-navy-950 text-white">
      <div className="absolute inset-0 bg-circuit-grid bg-grid opacity-40" aria-hidden="true" />
      <div
        className="absolute -right-32 -top-32 h-96 w-96 rounded-full bg-gold-500/10 blur-3xl"
        aria-hidden="true"
      />
      <div
        className="absolute -bottom-32 left-1/3 h-80 w-80 rounded-full bg-gold-500/5 blur-3xl"
        aria-hidden="true"
      />

      <Container className="relative flex flex-col gap-12 py-20 sm:py-24 lg:flex-row lg:items-center lg:py-32">
        <div className="max-w-2xl animate-fade-up">
          <p className="inline-flex items-center gap-2 rounded-full border border-gold-500/30 bg-gold-500/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-gold-400">
            Managed Technology &amp; Intelligent Infrastructure
          </p>
          <h1 className="mt-6 text-4xl font-bold leading-tight tracking-tight sm:text-5xl lg:text-6xl">
            The outsourced technology partner for businesses that have outgrown{" "}
            <span className="text-gold-400">break/fix IT.</span>
          </h1>
          <p className="mt-6 text-lg leading-relaxed text-slate-300 sm:text-xl">
            Golden Data Systems combines managed IT, industrial-grade infrastructure experience, and
            practical AI automation into a single, accountable partnership, so your technology drives
            the business instead of interrupting it.
          </p>
          <div className="mt-10 flex flex-col gap-4 sm:flex-row">
            <Button href="/contact" size="lg">
              Schedule a Consultation
            </Button>
            <Button href="/services" variant="secondary" size="lg">
              Explore Services
            </Button>
          </div>
        </div>

        <div className="relative mx-auto w-full max-w-md lg:mx-0 lg:max-w-lg">
          <div className="rounded-2xl border border-white/10 bg-navy-900/80 p-6 shadow-2xl backdrop-blur">
            <div className="flex items-center justify-between border-b border-white/10 pb-4">
              <span className="text-sm font-semibold text-slate-300">Environment Status</span>
              <span className="flex items-center gap-1.5 text-xs font-semibold text-emerald-400">
                <span className="h-2 w-2 rounded-full bg-emerald-400" /> All Systems Nominal
              </span>
            </div>
            <ul className="mt-4 space-y-3">
              {[
                { icon: "shield" as const, label: "Endpoint Security", value: "Monitored" },
                { icon: "cloud" as const, label: "Cloud Infrastructure", value: "Healthy" },
                { icon: "network" as const, label: "Distributed Sites", value: "6 Online" },
                { icon: "automation" as const, label: "Active Automations", value: "14 Running" },
              ].map((row) => (
                <li
                  key={row.label}
                  className="flex items-center justify-between rounded-lg bg-white/5 px-4 py-3"
                >
                  <span className="flex items-center gap-3 text-sm text-slate-200">
                    <Icon name={row.icon} className="h-4 w-4 text-gold-400" />
                    {row.label}
                  </span>
                  <span className="text-xs font-semibold text-slate-400">{row.value}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Container>
    </section>
  );
}

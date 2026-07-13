import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { Icon } from "@/components/ui/Icon";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { whoWeServe } from "@/content/home";

export function WhoWeServe() {
  return (
    <section className="border-y border-navy-900/5 bg-slate-50 py-12 sm:py-16">
      <Container>
        <p className="text-center text-sm font-semibold uppercase tracking-widest text-navy-500">
          Trusted by distributed, operations-heavy businesses
        </p>
        <div className="mt-8 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-6">
          {whoWeServe.map((item, i) => (
            <ScrollReveal key={item.name} delay={i * 60}>
              <Link
                href={item.href}
                className="flex min-h-[44px] flex-col items-center gap-2 rounded-lg px-3 py-4 text-center transition-colors hover:bg-white"
              >
                <Icon name={item.icon} className="h-7 w-7 text-navy-700" />
                <span className="text-xs font-medium text-navy-700 sm:text-sm">{item.name}</span>
              </Link>
            </ScrollReveal>
          ))}
        </div>
      </Container>
    </section>
  );
}

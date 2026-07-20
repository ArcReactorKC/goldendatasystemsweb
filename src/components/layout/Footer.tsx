import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { Icon } from "@/components/ui/Icon";
import { footerServiceLinks, primaryNav, site } from "@/content/site";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-white/10 bg-navy-950 text-slate-300">
      <Container className="grid grid-cols-1 gap-10 py-12 sm:grid-cols-2 sm:py-16 lg:grid-cols-4">
        <div>
          <Link href="/" className="flex items-center gap-2 font-bold text-white">
            <span className="flex h-9 w-9 items-center justify-center rounded-md bg-gold-500 text-navy-950">
              <Icon name="chip" className="h-5 w-5" />
            </span>
            <span>
              Golden Data <span className="text-gold-400">Systems</span>
            </span>
          </Link>
          <p className="mt-4 max-w-xs text-sm leading-relaxed text-slate-400">
            Managed technology and intelligent infrastructure for growing businesses — traditional IT,
            industrial OT experience, and practical AI, from one accountable partner.
          </p>
        </div>

        <div>
          <h3 className="text-sm font-semibold uppercase tracking-wider text-white">Navigate</h3>
          <ul className="mt-4 space-y-3">
            {primaryNav.map((link) => (
              <li key={link.href}>
                <Link href={link.href} className="text-sm text-slate-400 hover:text-gold-400">
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="text-sm font-semibold uppercase tracking-wider text-white">Services</h3>
          <ul className="mt-4 space-y-3">
            {footerServiceLinks.map((link) => (
              <li key={link.href}>
                <Link href={link.href} className="text-sm text-slate-400 hover:text-gold-400">
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="text-sm font-semibold uppercase tracking-wider text-white">Contact</h3>
          <ul className="mt-4 space-y-3 text-sm text-slate-400">
            <li>
              <a href={`mailto:${site.salesEmail}`} className="hover:text-gold-400">
                {site.salesEmail}
              </a>
            </li>
            <li>
              <a href={`mailto:${site.supportEmail}`} className="hover:text-gold-400">
                {site.supportEmail}
              </a>
            </li>
          </ul>
          <Link
            href="/contact"
            className="mt-5 inline-flex min-h-[44px] items-center justify-center rounded-md border border-gold-500/40 px-4 py-2 text-sm font-semibold text-gold-400 hover:bg-gold-500/10"
          >
            Schedule a Consultation
          </Link>
        </div>
      </Container>

      <div className="border-t border-white/10 py-6">
        <Container className="text-center text-xs text-slate-500">
          <p>&copy; {year} Golden Data Systems. All rights reserved.</p>
        </Container>
      </div>
    </footer>
  );
}

"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { Container } from "@/components/ui/Container";
import { Icon } from "@/components/ui/Icon";
import { primaryNav, site } from "@/content/site";
import { cn } from "@/lib/utils";

export function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-navy-950/95 backdrop-blur">
      <Container className="flex h-16 items-center justify-between sm:h-20">
        <Link href="/" className="flex min-h-[44px] items-center gap-2 font-bold text-white">
          <span className="flex h-9 w-9 items-center justify-center rounded-md bg-gold-500 text-navy-950">
            <Icon name="chip" className="h-5 w-5" />
          </span>
          <span className="text-base sm:text-lg">
            Golden Data <span className="text-gold-400">Systems</span>
          </span>
        </Link>

        <nav className="hidden items-center gap-0.5 xl:flex" aria-label="Primary">
          {primaryNav.map((link) => {
            const active = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                aria-current={active ? "page" : undefined}
                className={cn(
                  "min-h-[44px] rounded-md px-2.5 py-2 text-sm font-medium transition-colors",
                  active ? "text-gold-400" : "text-slate-200 hover:text-gold-400",
                )}
              >
                {link.label}
              </Link>
            );
          })}
        </nav>

        <div className="hidden xl:block">
          <Link
            href="/contact"
            className="inline-flex min-h-[44px] items-center justify-center rounded-md bg-gold-500 px-5 py-2.5 text-sm font-semibold text-navy-950 transition-colors hover:bg-gold-400"
          >
            Schedule a Consultation
          </Link>
        </div>

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          aria-expanded={open}
          aria-controls="mobile-menu"
          aria-label={open ? "Close menu" : "Open menu"}
          className="flex h-11 w-11 items-center justify-center rounded-md text-white xl:hidden"
        >
          {open ? (
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} className="h-6 w-6">
              <path strokeLinecap="round" d="M6 6l12 12M18 6 6 18" />
            </svg>
          ) : (
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} className="h-6 w-6">
              <path strokeLinecap="round" d="M4 7h16M4 12h16M4 17h16" />
            </svg>
          )}
        </button>
      </Container>

      <div
        id="mobile-menu"
        className={cn(
          "fixed inset-x-0 top-16 z-40 h-[calc(100vh-4rem)] overflow-y-auto bg-navy-950 transition-transform duration-300 ease-out sm:top-20 sm:h-[calc(100vh-5rem)] xl:hidden",
          open ? "translate-x-0" : "translate-x-full",
        )}
      >
        <nav className="flex flex-col px-4 py-6" aria-label="Mobile">
          {primaryNav.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="min-h-[44px] border-b border-white/5 py-3 text-lg font-medium text-slate-200 hover:text-gold-400"
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="/contact"
            className="mt-6 inline-flex min-h-[44px] items-center justify-center rounded-md bg-gold-500 px-5 py-3 text-base font-semibold text-navy-950"
          >
            Schedule a Consultation
          </Link>
          <p className="mt-8 text-sm text-slate-400">
            {site.phone} &middot; {site.email}
          </p>
        </nav>
      </div>
    </header>
  );
}

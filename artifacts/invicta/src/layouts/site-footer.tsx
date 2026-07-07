import { Link } from "wouter";

import { FOOTER } from "@/content/home";
import { Container } from "@/layouts/container";
import { Reveal } from "@/components/reveal";
import { Logo } from "@/components/logo";
import { cn } from "@/lib/utils";

/**
 * Premium footer — four sections stacked:
 * 1. Pre-footer CTA strip with headline + button
 * 2. Trust-metrics bar (4 KPIs)
 * 3. Five-column sitemap (Industries / Support Services / Trust & Ops / Company / Connect)
 * 4. Brand sign-off — large wordmark, tagline, legal bar
 */
export function SiteFooter() {
  const year = 2026;

  return (
    <footer className="dark relative overflow-hidden bg-background text-foreground">

      {/* ── 1. PRE-FOOTER CTA ─────────────────────────────────────────── */}
      <div className="relative border-t border-foreground/10 overflow-hidden">
        {/* City-at-night background */}
        <img
          src="/assets/footer/cta-bg.png"
          alt=""
          aria-hidden
          className="pointer-events-none absolute inset-0 h-full w-full object-cover object-center opacity-25"
        />
        <div aria-hidden className="pointer-events-none absolute inset-0 bg-gradient-to-r from-background/95 via-background/70 to-background/40" />
        <Container className="relative z-10 py-20 md:py-28">
          <div className="flex flex-col gap-8 md:flex-row md:items-end md:justify-between">
            <div className="flex flex-col gap-3">
              <p className="font-mono text-xs tracking-[0.2em] text-brand uppercase">
                {FOOTER.cta.kicker}
              </p>
              <h2 className="font-display max-w-xl text-3xl leading-tight md:text-4xl lg:text-5xl">
                {FOOTER.cta.headline}
              </h2>
            </div>
            <Link
              href={FOOTER.cta.href}
              className={cn(
                "inline-flex shrink-0 items-center gap-2 rounded-full",
                "bg-brand px-8 py-4 text-sm font-semibold tracking-wide text-white",
                "transition-all duration-200 hover:bg-brand/90 hover:scale-[1.02]",
                "self-start md:self-auto",
              )}
            >
              {FOOTER.cta.label}
              <svg
                width="14"
                height="14"
                viewBox="0 0 14 14"
                fill="none"
                className="translate-x-0 transition-transform duration-200 group-hover:translate-x-1"
              >
                <path
                  d="M1 7h12M8 2l5 5-5 5"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </Link>
          </div>
        </Container>
      </div>

      {/* ── 2. TRUST METRICS BAR ──────────────────────────────────────── */}
      <div className="border-t border-foreground/10 bg-foreground/[0.03]">
        <Container className="py-10">
          <div className="grid grid-cols-2 gap-6 md:grid-cols-4">
            {FOOTER.metrics.map((m) => (
              <div key={m.label} className="flex flex-col gap-1">
                <span className="font-display text-3xl md:text-4xl">{m.value}</span>
                <span className="font-mono text-xs tracking-[0.15em] text-foreground/40 uppercase">
                  {m.label}
                </span>
              </div>
            ))}
          </div>
        </Container>
      </div>

      {/* ── 3. SITEMAP ────────────────────────────────────────────────── */}
      <div className="border-t border-foreground/10">
        <Container className="py-16 md:py-20">
          <div className="grid grid-cols-2 gap-x-6 gap-y-12 sm:grid-cols-3 md:grid-cols-5 md:gap-x-8">
            {FOOTER.columns.map((column) => (
              <div key={column.heading} className="flex flex-col gap-5">
                <h3 className="font-mono text-[10px] tracking-[0.22em] text-foreground/40 uppercase">
                  {column.heading}
                </h3>
                <ul className="flex flex-col gap-2.5">
                  {column.links.map((link) => (
                    <li key={link.label}>
                      <Link
                        href={link.href}
                        className="text-[13px] text-foreground/60 transition-colors duration-150 hover:text-foreground"
                      >
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </Container>
      </div>

      {/* ── 4. BRAND SIGN-OFF ─────────────────────────────────────────── */}
      <div className="relative border-t border-foreground/10 overflow-hidden">
        {/* Multi-industry business background */}
        <img
          src="/assets/footer/signoff-bg.png"
          alt=""
          aria-hidden
          className="pointer-events-none absolute inset-0 h-full w-full object-cover"
          style={{ objectPosition: "60% center", opacity: 0.22 }}
        />
        {/* Dark gradient: solid black left (logo + text readable), eases right */}
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0"
          style={{
            background:
              "linear-gradient(to right, rgba(0,0,0,0.98) 0%, rgba(0,0,0,0.88) 35%, rgba(0,0,0,0.65) 60%, rgba(0,0,0,0.35) 100%)",
          }}
        />
        {/* Top blend with sitemap section */}
        <div
          aria-hidden
          className="pointer-events-none absolute inset-x-0 top-0 h-20"
          style={{ background: "linear-gradient(to bottom, #0a0a0a 0%, transparent 100%)" }}
        />

        <Container className="relative z-10 pt-16 pb-10 md:pt-20 md:pb-12">
          <Reveal>
            {/* Tagline */}
            <p className="max-w-sm text-base text-foreground/50">{FOOTER.tagline}</p>

            {/* Large wordmark */}
            <div className="mt-8 mb-10">
              <Logo className="h-20 md:h-32 opacity-95" />
            </div>

            {/* Legal bar */}
            <div className="flex flex-wrap items-center justify-between gap-4 border-t border-foreground/10 pt-6">
              <p className="text-xs text-foreground/30">
                © {year} Invicta e Solutions. All rights reserved.
              </p>
              <div className="flex items-center gap-6">
                <Link
                  href="/privacy"
                  className="text-xs text-foreground/30 transition-colors hover:text-foreground/60"
                >
                  Privacy
                </Link>
                <Link
                  href="/terms"
                  className="text-xs text-foreground/30 transition-colors hover:text-foreground/60"
                >
                  Terms
                </Link>
                <span className="font-display text-base text-brand italic">
                  {FOOTER.endline}
                </span>
              </div>
            </div>
          </Reveal>
        </Container>
      </div>

    </footer>
  );
}

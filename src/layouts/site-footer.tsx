import Link from "next/link";

import { FOOTER } from "@/content/home";
import { Container } from "@/layouts/container";
import { Reveal } from "@/components/reveal";
import { Logo } from "@/components/logo";

/**
 * Premium footer in the dark (immersive) register — a confident brand sign-off.
 * A large wordmark reveals on scroll (GSAP), above the sitemap and the
 * "Unconquered" endline.
 */
export function SiteFooter() {
  const year = 2026;

  return (
    <footer className="dark relative overflow-hidden bg-background text-foreground">
      <Container className="py-20 md:py-28">
        {/* Sitemap */}
        <div className="grid grid-cols-2 gap-10 md:grid-cols-4 md:gap-8">
          {FOOTER.columns.map((column) => (
            <div key={column.heading} className="flex flex-col gap-4">
              <h2 className="font-mono text-xs tracking-[0.2em] text-muted-foreground uppercase">
                {column.heading}
              </h2>
              <ul className="flex flex-col gap-3">
                {column.links.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="text-sm text-foreground/70 transition-colors hover:text-foreground"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Brand sign-off — official logo */}
        <Reveal className="mt-20 md:mt-28">
          <p className="max-w-md text-lg text-balance text-foreground/50">{FOOTER.tagline}</p>
          <div className="mt-10 flex items-end">
            <Logo className="h-28 md:h-44" />
          </div>
          <div className="mt-8 flex flex-wrap items-center justify-between gap-4 border-t border-foreground/15 pt-6">
            <p className="text-sm text-foreground/50">
              © {year} Invicta e Solutions. All rights reserved.
            </p>
            <p className="font-display text-lg text-brand italic">{FOOTER.endline}</p>
          </div>
        </Reveal>
      </Container>
    </footer>
  );
}

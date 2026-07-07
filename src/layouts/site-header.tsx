"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion } from "motion/react";
import { ArrowUpRight, Menu } from "lucide-react";

import { cn } from "@/lib/utils";
import { ease } from "@/constants/animation";
import { NAV_LINKS } from "@/content/home";
import { Button } from "@/components/ui/button";
import { Sheet, SheetClose, SheetContent, SheetTitle, SheetTrigger } from "@/components/ui/sheet";
import { AnimatedUnderline } from "@/components/animated-underline";
import { MagneticButton } from "@/components/magnetic-button";
import { Logo } from "@/components/logo";

function Wordmark({ logoClass }: { logoClass?: string }) {
  return (
    <Link
      href="/"
      aria-label="Invicta — home"
      className="group/logo -m-2 inline-flex items-center p-2 transition-opacity hover:opacity-80"
    >
      {/* `data-header-logo` is the FLIP target the intro loader hands off to. */}
      <span data-header-logo className="inline-flex">
        <Logo
          priority
          className={cn("w-auto transition-[height] duration-500 ease-out-expo", logoClass)}
        />
      </span>
    </Link>
  );
}

/**
 * Does this route open on a full-bleed dark hero? The homepage, and every
 * Industry / Service detail page (cinematic hero) do — so the header sits as
 * light-text-over-dark at the top there. Index/listing and article pages have a
 * light hero, so the top state uses dark text. Either way it flips to glass on
 * scroll.
 */
const hasDarkHero = (pathname: string) =>
  pathname === "/" || pathname.startsWith("/industries/") || pathname.startsWith("/services/");

const isActive = (pathname: string, href: string) =>
  href === "/" ? pathname === "/" : pathname === href || pathname.startsWith(`${href}/`);

/** Stagger for the full-screen mobile menu. */
const overlayList = {
  hidden: {},
  show: { transition: { staggerChildren: 0.055, delayChildren: 0.08 } },
};
const overlayItem = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: ease("out") } },
};

/**
 * One responsive navigation system. Laptop/desktop (lg+) get the full horizontal
 * nav with a magnetic pill CTA and active-state indicators; below lg, a single
 * hamburger opens a premium full-screen overlay (staggered editorial links). The
 * bar is tall and airy over the hero and eases into a glass bar on scroll.
 */
export function SiteHeader() {
  const pathname = usePathname();
  const darkHero = hasDarkHero(pathname);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    // Over a dark hero, switch to glass past most of the cold open; over a light
    // hero, flip to glass almost immediately so the chrome reads cleanly.
    const threshold = darkHero ? window.innerHeight * 0.7 : 24;
    const onScroll = () => setScrolled(window.scrollY > threshold);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [darkHero]);

  return (
    <>
      <a
        href="#main"
        className="sr-only rounded-md bg-brand px-4 py-2 text-sm font-medium text-brand-foreground focus-visible:not-sr-only focus-visible:fixed focus-visible:top-4 focus-visible:left-4 focus-visible:z-[60] focus-visible:ring-2 focus-visible:ring-ring"
      >
        Skip to content
      </a>
      <header
        className={cn(
          "fixed inset-x-0 top-0 z-50 transition-all duration-500 ease-out-expo",
          scrolled
            ? "border-b border-border/60 bg-background/75 shadow-sm backdrop-blur-xl"
            : darkHero
              ? "dark border-b border-transparent"
              : "border-b border-transparent",
        )}
      >
        <div
          className={cn(
            "mx-auto flex w-full max-w-[var(--container-editorial)] items-center justify-between px-[var(--gutter)] transition-all duration-500 ease-out-expo",
            scrolled ? "h-16 md:h-[4.5rem]" : "h-20 md:h-24",
          )}
        >
          <Wordmark logoClass={scrolled ? "h-9 md:h-10" : "h-11 md:h-[3.25rem]"} />

          <nav aria-label="Primary" className="hidden items-center gap-9 lg:flex xl:gap-11">
            {NAV_LINKS.map((link) => {
              const active = isActive(pathname, link.href);
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  aria-current={active ? "page" : undefined}
                  className={cn(
                    "text-[0.95rem] font-medium tracking-tight transition-colors",
                    active ? "text-foreground" : "text-foreground/70 hover:text-foreground",
                  )}
                >
                  <span className="inline-flex items-center gap-1.5">
                    <AnimatedUnderline>{link.label}</AnimatedUnderline>
                    {active ? <span aria-hidden className="size-1 rounded-full bg-brand" /> : null}
                  </span>
                </Link>
              );
            })}
          </nav>

          <div className="hidden lg:block">
            <MagneticButton
              asChild
              variant="brand"
              strength={0.4}
              className="h-11 gap-1.5 rounded-full px-6 text-[0.95rem] font-medium"
            >
              <Link href="/contact">
                Talk to an Expert
                <ArrowUpRight className="size-4 transition-transform duration-300 group-hover/button:translate-x-0.5 group-hover/button:-translate-y-0.5" />
              </Link>
            </MagneticButton>
          </div>

          {/* Mobile + tablet — full-screen overlay */}
          <Sheet>
            <SheetTrigger asChild className="lg:hidden">
              <Button variant="ghost" size="icon-lg" aria-label="Open menu">
                <Menu className="size-6" />
              </Button>
            </SheetTrigger>
            <SheetContent
              side="right"
              className="flex w-full! max-w-none! flex-col border-0 bg-background p-0"
            >
              <SheetTitle className="sr-only">Navigation</SheetTitle>
              <div className="flex items-center border-b border-border/60 px-5 py-5 sm:px-6">
                <Logo className="h-10 w-auto" />
              </div>

              <motion.nav
                aria-label="Mobile"
                variants={overlayList}
                initial="hidden"
                animate="show"
                className="mx-auto flex w-full max-w-3xl flex-1 flex-col justify-center gap-1 px-5 sm:px-6"
              >
                {NAV_LINKS.map((link, i) => {
                  const active = isActive(pathname, link.href);
                  return (
                    <motion.div key={link.href} variants={overlayItem}>
                      <SheetClose asChild>
                        <Link
                          href={link.href}
                          aria-current={active ? "page" : undefined}
                          className="group flex items-baseline justify-between gap-4 border-b border-border/40 py-4 transition-colors sm:py-5"
                        >
                          <span
                            className={cn(
                              "font-display text-4xl font-medium transition-transform duration-300 group-hover:translate-x-1 sm:text-5xl",
                              active ? "text-brand" : "group-hover:text-brand",
                            )}
                          >
                            {link.label}
                          </span>
                          <span className="font-mono text-xs text-muted-foreground tabular-nums">
                            0{i + 1}
                          </span>
                        </Link>
                      </SheetClose>
                    </motion.div>
                  );
                })}
              </motion.nav>

              <div className="mx-auto w-full max-w-3xl border-t border-border/60 px-5 py-6 sm:px-6">
                <SheetClose asChild>
                  <Button asChild variant="brand" size="xl" className="w-full rounded-full">
                    <Link href="/contact">Talk to an Expert</Link>
                  </Button>
                </SheetClose>
                <p className="mt-4 text-center font-mono text-xs tracking-[0.16em] text-muted-foreground uppercase">
                  Human support · Every timezone
                </p>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </header>
    </>
  );
}

"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { Menu } from "lucide-react";

import { cn } from "@/lib/utils";
import { NAV_LINKS } from "@/content/home";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { AnimatedUnderline } from "@/components/animated-underline";
import { MagneticButton } from "@/components/magnetic-button";
import { Logo } from "@/components/logo";

function Wordmark({ className }: { className?: string }) {
  return (
    <Link
      href="/"
      aria-label="Invicta — home"
      className={cn(
        "group/logo inline-flex items-center transition-opacity hover:opacity-80",
        className,
      )}
    >
      <Logo className="h-9" priority />
    </Link>
  );
}

/**
 * Slim, editorial site header. Transparent over the hero, then glass-on-scroll.
 * Desktop nav uses Motion underlines; the primary CTA is magnetic; mobile opens
 * a Radix sheet. GSAP is reserved for scroll storytelling — the header's
 * interactions are all Motion / CSS.
 */
export function SiteHeader() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    // Switch from transparent-over-hero to glass once past most of the cold open.
    const onScroll = () => setScrolled(window.scrollY > window.innerHeight * 0.7);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <a
        href="#main"
        className="sr-only rounded-md bg-brand px-4 py-2 text-sm font-medium text-brand-foreground focus-visible:not-sr-only focus-visible:fixed focus-visible:top-3 focus-visible:left-3 focus-visible:z-[60] focus-visible:ring-2 focus-visible:ring-ring"
      >
        Skip to content
      </a>
      <header
        className={cn(
          "fixed inset-x-0 top-0 z-50 transition-all duration-300",
          scrolled
            ? "border-b border-border/60 bg-background/80 backdrop-blur-md"
            : "dark border-b border-transparent",
        )}
      >
        <div className="mx-auto flex h-16 w-full max-w-7xl items-center justify-between px-6 md:px-8">
          <Wordmark />

          <nav aria-label="Primary" className="hidden items-center gap-8 md:flex">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-sm text-foreground/80 transition-colors hover:text-foreground"
              >
                <AnimatedUnderline>{link.label}</AnimatedUnderline>
              </Link>
            ))}
          </nav>

          <div className="hidden md:block">
            <MagneticButton asChild variant="brand" size="sm" strength={0.4}>
              <Link href="/contact">Talk to an Expert</Link>
            </MagneticButton>
          </div>

          {/* Mobile */}
          <Sheet>
            <SheetTrigger asChild className="md:hidden">
              <Button variant="ghost" size="icon" aria-label="Open menu">
                <Menu />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-full max-w-sm">
              <SheetHeader>
                <SheetTitle className="sr-only">Navigation</SheetTitle>
              </SheetHeader>
              <nav aria-label="Mobile" className="mt-8 flex flex-col gap-1 px-4">
                {NAV_LINKS.map((link) => (
                  <SheetClose asChild key={link.href}>
                    <Link
                      href={link.href}
                      className="border-b border-border/60 py-4 font-display text-2xl font-medium"
                    >
                      {link.label}
                    </Link>
                  </SheetClose>
                ))}
                <SheetClose asChild>
                  <Button asChild variant="brand" size="xl" className="mt-6 w-full">
                    <Link href="/contact">Talk to an Expert</Link>
                  </Button>
                </SheetClose>
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </header>
    </>
  );
}

"use client";

import { useRef } from "react";
import { Link } from "wouter";
import { Check } from "lucide-react";

import { useGSAP } from "@/lib/gsap";
import { heroReveal } from "@/animations/hero";
import { Container } from "@/layouts/container";
import { Eyebrow } from "@/components/eyebrow";
import { AnimatedGrid } from "@/components/effects/animated-grid";
import { ImagePlaceholder } from "@/components/media/image-placeholder";
import { MagneticButton } from "@/components/magnetic-button";
import { Button } from "@/components/ui/button";
import { GAMING_HERO } from "@/content/gaming";

/**
 * Gaming hero — the flagship's cinematic open. Darker and deeper than the
 * homepage: an ink canvas with a faint grid, a masked headline, and a live
 * operations frame. GSAP `heroReveal` sequences the entrance on load.
 */
export function GamingHero() {
  const scope = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      if (scope.current) heroReveal(scope.current, { delay: 0.15 });
    },
    { scope },
  );

  return (
    <section
      ref={scope}
      className="dark relative overflow-hidden bg-background pt-28 pb-16 text-foreground md:pt-36 md:pb-20"
    >
      <AnimatedGrid animate={false} className="opacity-[0.4]" />
      <Container>
        <div className="grid items-center gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:gap-16">
          <div className="flex flex-col items-start gap-7">
            <span data-hero-item>
              <Eyebrow>{GAMING_HERO.eyebrow}</Eyebrow>
            </span>

            <h1
              data-hero-title
              className="max-w-[15ch] font-display text-fluid-3xl font-medium text-balance"
            >
              The human operation behind the games players{" "}
              <span className="text-brand">{GAMING_HERO.emphasis}</span>.
            </h1>

            <p data-hero-item className="max-w-xl text-lg text-pretty text-muted-foreground">
              {GAMING_HERO.lead}
            </p>

            <ul data-hero-item className="grid grid-cols-2 gap-x-6 gap-y-2.5">
              {GAMING_HERO.signals.map((signal) => (
                <li key={signal} className="flex items-center gap-2 text-sm">
                  <Check className="size-4 shrink-0 text-brand" />
                  <span className="text-foreground/85">{signal}</span>
                </li>
              ))}
            </ul>

            <div data-hero-item className="flex flex-wrap items-center gap-3 pt-1">
              <MagneticButton asChild variant="brand" size="xl">
                <Link href={GAMING_HERO.primaryCta.href}>{GAMING_HERO.primaryCta.label}</Link>
              </MagneticButton>
              <Button asChild variant="brandOutline" size="xl">
                <Link href={GAMING_HERO.secondaryCta.href}>{GAMING_HERO.secondaryCta.label}</Link>
              </Button>
            </div>
          </div>

          <div data-hero-item className="relative">
            <ImagePlaceholder
              tone="crimson"
              ratio="4 / 5"
              label={GAMING_HERO.imageLabel}
              src="/assets/industries/gaming/hero/hero.png"
              className="shadow-xl"
            />
          </div>
        </div>
      </Container>
    </section>
  );
}

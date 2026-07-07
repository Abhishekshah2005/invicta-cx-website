"use client";

import { useRef } from "react";
import { Link } from "wouter";

import { cn } from "@/lib/utils";
import { gsap, useGSAP } from "@/lib/gsap";
import { prefersReducedMotion } from "@/utils/dom";
import { Container } from "@/layouts/container";
import { Eyebrow } from "@/components/eyebrow";
import { Reveal, TextReveal } from "@/components/reveal";
import { MagneticButton } from "@/components/magnetic-button";
import { Button } from "@/components/ui/button";
import { Breadcrumbs, type Crumb } from "@/components/page/breadcrumbs";
import type { TemplateHero as TemplateHeroData } from "@/types/templates";

interface CinematicHeroProps {
  crumbs: Crumb[];
  hero: TemplateHeroData;
}

/**
 * The immersive opening scene for Industry & Service pages. A full-bleed dark
 * canvas with layered depth — a parallax backdrop (crimson glow + grain), a
 * legibility gradient, bottom-anchored editorial typography, a glass "live"
 * foreground chip, and a scroll cue. Real photography drops into the backdrop
 * later (see `hero.imageLabel`); until then the composition reads as intentional
 * cinema, not a placeholder. The fixed header runs in its dark register here.
 */
export function CinematicHero({ crumbs, hero }: CinematicHeroProps) {
  const scope = useRef<HTMLElement>(null);
  const media = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      if (prefersReducedMotion() || !media.current) return;
      gsap.to(media.current, {
        yPercent: 16,
        ease: "none",
        scrollTrigger: {
          trigger: scope.current,
          start: "top top",
          end: "bottom top",
          scrub: true,
        },
      });
    },
    { scope },
  );

  return (
    <section
      ref={scope}
      className="dark relative flex min-h-[82svh] items-end overflow-hidden bg-background text-foreground"
    >
      {/* Background — parallax layer (over-sized so the scrub never exposes edges). */}
      <div ref={media} aria-hidden className="absolute inset-x-0 -top-[14%] h-[128%]">
        {hero.image ? (
          <img
            src={hero.image}
            alt=""
            className="absolute inset-0 h-full w-full object-cover"
            style={{ objectPosition: hero.imageFocus ?? "center" }}
          />
        ) : null}
        {/* Ink veil — full when no photo; a dark grade over the photo when present. */}
        <div className={cn("absolute inset-0 bg-background", hero.image && "opacity-[0.62]")} />
        <div
          className="absolute inset-0"
          style={{
            backgroundImage:
              "radial-gradient(115% 90% at 78% 12%, color-mix(in oklab, var(--color-brand) 34%, transparent), transparent 55%)",
          }}
        />
        <div
          className="absolute inset-0"
          style={{
            backgroundImage:
              "radial-gradient(70% 55% at 12% 88%, color-mix(in oklab, var(--color-foreground) 9%, transparent), transparent 60%)",
          }}
        />
        <div className="absolute inset-0 noise-overlay opacity-[0.05]" />
      </div>

      {/* Legibility gradient — grounds the copy at the bottom. */}
      <div
        aria-hidden
        className="absolute inset-0 bg-gradient-to-t from-background via-background/45 to-background/10"
      />

      {/* Art-direction note for the intended photograph (subtle, corner). */}
      {hero.imageLabel ? (
        <span className="absolute top-28 right-6 z-10 hidden max-w-[15rem] text-right font-mono text-[0.6rem] leading-relaxed tracking-[0.18em] text-foreground/25 uppercase lg:block">
          {hero.imageLabel}
        </span>
      ) : null}

      <Container className="relative z-10 w-full pt-36 pb-16 md:pt-40 md:pb-20">
        <Breadcrumbs items={crumbs} />
        <div className="mt-6 flex max-w-4xl flex-col gap-5">
          {hero.eyebrow ? (
            <Reveal>
              <Eyebrow>{hero.eyebrow}</Eyebrow>
            </Reveal>
          ) : null}
          <TextReveal as="h1" start={null} className="font-display text-fluid-3xl font-medium">
            {hero.title}
          </TextReveal>
          {hero.lead ? (
            <Reveal>
              <p className="max-w-2xl text-lg text-pretty text-foreground/70">{hero.lead}</p>
            </Reveal>
          ) : null}
          {hero.cta || hero.secondaryCta ? (
            <Reveal className="mt-3 flex flex-wrap items-center gap-3">
              {hero.cta ? (
                <MagneticButton asChild variant="brand" size="lg">
                  <Link href={hero.cta.href}>{hero.cta.label}</Link>
                </MagneticButton>
              ) : null}
              {hero.secondaryCta ? (
                <Button asChild variant="brandOutline" size="lg">
                  <Link href={hero.secondaryCta.href}>{hero.secondaryCta.label}</Link>
                </Button>
              ) : null}
            </Reveal>
          ) : null}

          {/* Glass foreground chip — a quiet "live" signal for depth. */}
          <Reveal className="mt-4">
            <span className="inline-flex items-center gap-2.5 rounded-full border border-foreground/15 bg-foreground/[0.06] px-4 py-2 backdrop-blur-md">
              <span className="relative flex size-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-brand opacity-70" />
                <span className="relative inline-flex size-2 rounded-full bg-brand" />
              </span>
              <span className="font-mono text-xs tracking-wide text-foreground/70">
                Support live — every timezone
              </span>
            </span>
          </Reveal>
        </div>
      </Container>

      {/* Scroll cue */}
      <div aria-hidden className="absolute inset-x-0 bottom-5 flex justify-center md:bottom-7">
        <span className="flex flex-col items-center gap-1.5 font-mono text-[0.6rem] tracking-[0.22em] text-foreground/45 uppercase">
          Scroll
          <span className="animate-bounce text-sm">↓</span>
        </span>
      </div>
    </section>
  );
}

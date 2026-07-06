"use client";

import { useRef } from "react";

import { gsap, useGSAP } from "@/lib/gsap";
import { GSAP_EASE } from "@/constants/animation";
import { prefersReducedMotion } from "@/utils/dom";
import { Container } from "@/layouts/container";
import { SectionHeading } from "@/components/section-heading";
import { Reveal } from "@/components/reveal";
import { JOURNEY } from "@/content/gaming";

/**
 * The Player Lifecycle — a scroll-driven timeline. A crimson progress line fills
 * as you move through the seven stages, each revealing in turn. The support
 * lifecycle, animated. Dark register.
 */
export function GamingJourney() {
  const scope = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      const root = scope.current;
      if (!root) return;
      const fill = root.querySelector<HTMLElement>(".journey-fill");
      const stages = gsap.utils.toArray<HTMLElement>(".journey-stage", root);

      if (prefersReducedMotion()) {
        if (fill) gsap.set(fill, { scaleY: 1 });
        gsap.set(stages, { autoAlpha: 1, y: 0 });
        return;
      }

      if (fill) {
        gsap.set(fill, { scaleY: 0 });
        gsap.to(fill, {
          scaleY: 1,
          ease: "none",
          scrollTrigger: {
            trigger: ".journey-list",
            start: "top 65%",
            end: "bottom 80%",
            scrub: true,
          },
        });
      }

      gsap.from(stages, {
        autoAlpha: 0,
        y: 24,
        duration: 0.6,
        stagger: 0.12,
        ease: GSAP_EASE.out,
        scrollTrigger: { trigger: ".journey-list", start: "top 78%", once: true },
      });
    },
    { scope },
  );

  return (
    <section
      id="journey"
      ref={scope}
      className="dark bg-background py-20 text-foreground md:py-28 lg:py-32"
    >
      <Container className="flex flex-col gap-16">
        <Reveal>
          <SectionHeading
            eyebrow={JOURNEY.eyebrow}
            title={JOURNEY.title}
            lead={JOURNEY.lead}
            as="h2"
          />
        </Reveal>

        <div className="journey-list relative">
          {/* Progress rail */}
          <div className="absolute top-3 bottom-3 left-4 w-px bg-foreground/12" aria-hidden />
          <div
            className="journey-fill absolute top-3 left-4 w-px origin-top bg-brand"
            style={{ height: "calc(100% - 1.5rem)" }}
            aria-hidden
          />

          <ol className="flex flex-col gap-12 md:gap-16">
            {JOURNEY.stages.map((stage) => (
              <li key={stage.no} className="journey-stage relative pl-14">
                <span
                  className="absolute top-1.5 left-2 size-4 rounded-full border-2 border-brand bg-background"
                  aria-hidden
                />
                <div className="flex flex-col gap-2">
                  <span className="font-mono text-xs text-brand">{stage.no}</span>
                  <h3 className="font-display text-xl font-medium md:text-2xl">{stage.title}</h3>
                  <p className="max-w-xl text-pretty text-muted-foreground">{stage.body}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </Container>
    </section>
  );
}

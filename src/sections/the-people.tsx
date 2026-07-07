"use client";

import { useRef } from "react";

import { gsap, ScrollTrigger, useGSAP } from "@/lib/gsap";
import { cn } from "@/lib/utils";
import { prefersReducedMotion } from "@/utils/dom";
import { Container } from "@/layouts/container";
import { Eyebrow } from "@/components/eyebrow";
import { TextReveal, Reveal } from "@/components/reveal";
import { ImagePlaceholder } from "@/components/media/image-placeholder";
import { PEOPLE } from "@/content/home";

/**
 * Chapter II — The People. A sticky editorial portrait holds on one side while
 * the truths advance on the other; the portrait cross-fades to match the active
 * truth. Image-led, not a card grid.
 */
export function ThePeople() {
  const scope = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      const root = scope.current;
      if (!root) return;
      const images = gsap.utils.toArray<HTMLElement>(".people-img", root);
      const beats = gsap.utils.toArray<HTMLElement>(".people-beat", root);

      const setActive = (index: number) => {
        images.forEach((img, i) => gsap.to(img, { opacity: i === index ? 1 : 0, duration: 0.6 }));
      };

      gsap.set(images, { opacity: 0 });
      if (images[0]) gsap.set(images[0], { opacity: 1 });

      if (prefersReducedMotion()) return;

      const triggers = beats.map((beat, i) =>
        ScrollTrigger.create({
          trigger: beat,
          start: "top 60%",
          end: "bottom 60%",
          onToggle: (self) => {
            if (self.isActive) setActive(i);
          },
        }),
      );

      return () => triggers.forEach((t) => t.kill());
    },
    { scope },
  );

  return (
    <section id="people" ref={scope} className="relative section-y">
      <Container>
        <Reveal className="mb-10 flex flex-col gap-4 md:mb-12">
          <Eyebrow>{PEOPLE.chapter}</Eyebrow>
          <TextReveal as="h2" className="max-w-[20ch] font-display text-fluid-2xl font-medium">
            {PEOPLE.title}
          </TextReveal>
          <p className="max-w-2xl text-lg text-pretty text-muted-foreground">{PEOPLE.lead}</p>
        </Reveal>

        <div className="mx-auto grid max-w-[104rem] gap-10 lg:grid-cols-2 lg:gap-16">
          {/* Sticky portrait — capped by viewport height (max-w derived from svh)
              so the 4/5 frame never grows taller than the pinned area and spills
              over the intro above it. */}
          <div className="hidden lg:block">
            <div className="sticky top-28">
              <div className="relative mx-auto aspect-4/5 w-full max-w-[62svh]">
                {PEOPLE.beats.map((beat, i) => (
                  <div key={i} className="people-img absolute inset-0">
                    <ImagePlaceholder
                      tone={i % 2 === 0 ? "ink" : "crimson"}
                      ratio="4 / 5"
                      label={beat.imageLabel}
                      className="size-full"
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Advancing truths */}
          <div className="flex flex-col">
            {PEOPLE.beats.map((beat, i) => (
              <div
                key={beat.line}
                className={cn(
                  "people-beat flex flex-col justify-center gap-5 lg:min-h-[42svh]",
                  i > 0 && "mt-12 lg:mt-0",
                )}
              >
                <span className="font-mono text-sm text-brand">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <h3 className="max-w-[16ch] font-display text-fluid-xl font-medium text-balance">
                  {beat.line}
                </h3>
                <p className="max-w-md text-lg text-pretty text-muted-foreground">{beat.body}</p>
                <div className="mt-2 lg:hidden">
                  <ImagePlaceholder tone="ink" ratio="4 / 3" label={beat.imageLabel} />
                </div>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}

"use client";

import { useRef } from "react";

import { gsap, ScrollTrigger, useGSAP } from "@/lib/gsap";
import { prefersReducedMotion } from "@/utils/dom";
import { MOMENT } from "@/content/home";

/**
 * Chapter I — The Moment. A pinned, scrubbed text choreography: the thought
 * builds line by line, then the punch lands in crimson. Deliberate pacing and
 * negative space carry the emotion; no cards, no grid.
 */
export function TheMoment() {
  const scope = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      const root = scope.current;
      if (!root) return;
      const lines = gsap.utils.toArray<HTMLElement>(".moment-line", root);
      const punch = root.querySelector<HTMLElement>(".moment-punch");

      if (prefersReducedMotion()) {
        gsap.set([...lines, punch], { opacity: 1, y: 0, filter: "blur(0px)" });
        return;
      }

      gsap.set(lines, { opacity: 0.12, y: 24, filter: "blur(6px)" });
      gsap.set(punch, { opacity: 0, y: 30, scale: 0.96 });

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: root,
          start: "top top",
          end: "+=280%",
          pin: ".moment-pin",
          scrub: 1,
          anticipatePin: 1,
        },
      });

      lines.forEach((line) => {
        tl.to(line, { opacity: 1, y: 0, filter: "blur(0px)", duration: 1 }).to(
          {},
          { duration: 0.5 },
        );
      });
      tl.to({}, { duration: 0.4 });
      tl.to(punch, { opacity: 1, y: 0, scale: 1, duration: 1.2, ease: "power4.out" });
      tl.to({}, { duration: 0.6 });

      return () => {
        ScrollTrigger.getAll().forEach((t) => {
          if (t.trigger === root) t.kill();
        });
      };
    },
    { scope },
  );

  return (
    <section id="moment" ref={scope} className="relative">
      <div className="moment-pin flex min-h-svh items-center justify-center overflow-hidden">
        <div className="mx-auto flex max-w-4xl flex-col gap-3 px-6 text-center">
          <span className="mb-4 font-mono text-xs tracking-[0.25em] text-muted-foreground uppercase">
            {MOMENT.chapter}
          </span>
          {MOMENT.lines.map((line) => (
            <p
              key={line}
              className="moment-line font-display text-fluid-2xl leading-tight font-medium"
            >
              {line}
            </p>
          ))}
          <p className="moment-punch mt-6 font-display text-fluid-3xl font-medium text-brand">
            {MOMENT.punch}
          </p>
        </div>
      </div>
    </section>
  );
}

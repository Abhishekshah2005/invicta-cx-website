/**
 * Scroll-scrubbed progress recipes — the shared motion signature for template
 * "process / workflow / implementation" sections. A vertical rail fills as the
 * section scrolls through the viewport, tying step reveals to scroll position.
 * Pure GSAP; reduced-motion aware.
 */
import { gsap } from "@/lib/gsap";
import { prefersReducedMotion } from "@/utils/dom";
import type { AnimTarget, Revertible, ScrollOptions } from "./types";

export interface ProgressLineOptions extends ScrollOptions {
  /** Element whose scroll span drives the fill (defaults to the line itself). */
  trigger?: gsap.DOMTarget;
}

/**
 * Scrub a vertical rail's fill (`scaleY` 0 → 1, top origin) to the scroll
 * position of its container. Returns a disposer. Under reduced motion the rail
 * is simply shown filled.
 */
export function progressLine(target: AnimTarget, options: ProgressLineOptions = {}): Revertible {
  if (prefersReducedMotion()) {
    gsap.set(target, { scaleY: 1, transformOrigin: "top" });
    return { revert: () => gsap.set(target, { clearProps: "all" }) };
  }

  const tween = gsap.fromTo(
    target,
    { scaleY: 0, transformOrigin: "top" },
    {
      scaleY: 1,
      ease: "none",
      scrollTrigger: {
        trigger: options.trigger ?? (target as gsap.DOMTarget),
        start: options.start ?? "top 65%",
        end: options.end ?? "bottom 75%",
        scrub: options.scrub ?? true,
      },
    },
  );

  return {
    revert: () => {
      tween.scrollTrigger?.kill();
      tween.kill();
    },
  };
}

/**
 * Scroll-linked parallax — translate an element proportionally to scroll,
 * scrubbed 1:1 to the scrollbar.
 */
import { gsap } from "@/lib/gsap";
import { prefersReducedMotion } from "@/utils/dom";
import type { Revertible } from "./types";

export interface ParallaxOptions {
  /** Fraction of the element's size to travel across the scroll range. */
  speed?: number;
  /** Movement axis. */
  axis?: "x" | "y";
  /** ScrollTrigger start / end. */
  start?: string;
  end?: string;
}

/**
 * Apply parallax to `element`. Returns a disposer that kills the tween and its
 * ScrollTrigger.
 */
export function parallax(element: HTMLElement, options: ParallaxOptions = {}): Revertible {
  if (prefersReducedMotion()) return { revert: () => {} };

  const speed = options.speed ?? 0.3;
  const prop = (options.axis ?? "y") === "y" ? "yPercent" : "xPercent";

  const tween = gsap.fromTo(
    element,
    { [prop]: -speed * 50 },
    {
      [prop]: speed * 50,
      ease: "none",
      scrollTrigger: {
        trigger: element,
        start: options.start ?? "top bottom",
        end: options.end ?? "bottom top",
        scrub: true,
      },
    },
  );

  return { revert: () => tween.scrollTrigger?.kill() };
}

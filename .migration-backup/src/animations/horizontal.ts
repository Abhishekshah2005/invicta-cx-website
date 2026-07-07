/**
 * Pinned horizontal scroll — pin a section and translate its track sideways as
 * the user scrolls vertically. Recomputes on resize (`invalidateOnRefresh`).
 */
import { gsap, ScrollTrigger } from "@/lib/gsap";
import { prefersReducedMotion } from "@/utils/dom";
import { isBrowser } from "@/utils/dom";
import type { Revertible } from "./types";

export interface HorizontalScrollOptions {
  /** Scrub smoothing (seconds) or `true` for 1:1. */
  scrub?: boolean | number;
}

/**
 * Pin `container` and scroll `track` horizontally by its overflow width.
 * Returns a disposer that kills the tween + trigger. On reduced motion the track
 * is left as a normal (natively scrollable) element.
 */
export function horizontalScroll(
  container: HTMLElement,
  track: HTMLElement,
  options: HorizontalScrollOptions = {},
): Revertible {
  if (prefersReducedMotion() || !isBrowser) return { revert: () => {} };

  const distance = () => track.scrollWidth - window.innerWidth;

  const tween = gsap.to(track, {
    x: () => -distance(),
    ease: "none",
  });

  const trigger = ScrollTrigger.create({
    trigger: container,
    start: "top top",
    end: () => `+=${distance()}`,
    pin: true,
    scrub: options.scrub ?? 1,
    anticipatePin: 1,
    invalidateOnRefresh: true,
    animation: tween,
  });

  return {
    revert: () => {
      trigger.kill();
      tween.kill();
    },
  };
}

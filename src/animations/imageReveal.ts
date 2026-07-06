/**
 * Clip-path mask reveal for media — an editorial "wipe" that opens the frame
 * while the inner element eases from a slight zoom. The caller sets the initial
 * clip inline (per direction) to avoid a flash before this runs.
 */
import { gsap } from "@/lib/gsap";
import { DURATION, GSAP_EASE } from "@/constants/animation";
import { prefersReducedMotion } from "@/utils/dom";
import type { Revertible, ScrollOptions } from "./types";

export type RevealDirection = "up" | "down" | "left" | "right";

/** Initial `clip-path` per wipe direction (set this inline on the element). */
export const CLIP_FROM: Record<RevealDirection, string> = {
  up: "inset(100% 0% 0% 0%)",
  down: "inset(0% 0% 100% 0%)",
  left: "inset(0% 100% 0% 0%)",
  right: "inset(0% 0% 0% 100%)",
};

export interface ImageRevealOptions extends ScrollOptions {
  duration?: number;
  ease?: string;
  /** Zoom factor the inner element eases from (1 = none). */
  zoom?: number;
}

/**
 * Open `element` (an `overflow-hidden` wrapper) with a clip-path wipe, and ease
 * its first child from a zoom. Returns a disposer that kills both tweens.
 */
export function imageReveal(element: HTMLElement, options: ImageRevealOptions = {}): Revertible {
  if (prefersReducedMotion()) {
    gsap.set(element, { clipPath: "inset(0%)" });
    const inner = element.firstElementChild;
    if (inner) gsap.set(inner, { scale: 1 });
    return { revert: () => {} };
  }

  const trigger = {
    trigger: element,
    start: options.start ?? "top 82%",
    once: options.once ?? true,
  } as const;

  const wipe = gsap.to(element, {
    clipPath: "inset(0%)",
    duration: options.duration ?? DURATION.slow,
    ease: options.ease ?? GSAP_EASE.expo,
    scrollTrigger: options.start === null ? undefined : trigger,
  });

  const inner = element.firstElementChild;
  const zoomTween = inner
    ? gsap.fromTo(
        inner,
        { scale: options.zoom ?? 1.2 },
        {
          scale: 1,
          duration: (options.duration ?? DURATION.slow) * 1.4,
          ease: options.ease ?? GSAP_EASE.expo,
          scrollTrigger: options.start === null ? undefined : trigger,
        },
      )
    : null;

  return {
    revert: () => {
      wipe.kill();
      zoomTween?.kill();
    },
  };
}

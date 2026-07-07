/**
 * Card grid reveal. Uses ScrollTrigger.batch so cards animate in as batches
 * enter the viewport — smoother and cheaper than one trigger per card for large
 * grids.
 */
import { gsap, ScrollTrigger } from "@/lib/gsap";
import { DISTANCE, DURATION, GSAP_EASE, STAGGER } from "@/constants/animation";
import { prefersReducedMotion } from "@/utils/dom";
import type { AnimTarget, Revertible } from "./types";

export interface CardsRevealOptions {
  distance?: number;
  duration?: number;
  stagger?: number;
  start?: string;
}

/**
 * Reveal a set of cards with a batched, staggered fade + rise. Returns a
 * disposer that kills the created triggers.
 */
export function cardsReveal(targets: AnimTarget, options: CardsRevealOptions = {}): Revertible {
  const cards = gsap.utils.toArray<HTMLElement>(targets);
  if (cards.length === 0) return { revert: () => {} };

  if (prefersReducedMotion()) {
    gsap.set(cards, { autoAlpha: 1, y: 0 });
    return { revert: () => {} };
  }

  gsap.set(cards, { autoAlpha: 0, y: options.distance ?? DISTANCE.md });

  const triggers = ScrollTrigger.batch(cards, {
    start: options.start ?? "top 88%",
    onEnter: (batch) =>
      gsap.to(batch, {
        autoAlpha: 1,
        y: 0,
        duration: options.duration ?? DURATION.base,
        ease: GSAP_EASE.out,
        stagger: options.stagger ?? STAGGER.base,
        overwrite: true,
      }),
  });

  return { revert: () => triggers.forEach((trigger) => trigger.kill()) };
}

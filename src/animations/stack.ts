/**
 * Stacked-cards scroll effect — each card pins in place and scales down slightly
 * as the following cards rise over it, creating a layered "deck" as you scroll.
 */
import { gsap, ScrollTrigger } from "@/lib/gsap";
import { prefersReducedMotion } from "@/utils/dom";
import type { Revertible } from "./types";

export interface StackCardsOptions {
  /** Scale each card settles to as it is covered. */
  scaleEnd?: number;
  /** Distance from the top the cards pin at (CSS length or %). */
  pinStart?: string;
}

/**
 * Pin and scale a sequence of cards into a stack. Returns a disposer that kills
 * every created trigger.
 */
export function stackCards(cards: HTMLElement[], options: StackCardsOptions = {}): Revertible {
  const last = cards[cards.length - 1];
  if (prefersReducedMotion() || !last) return { revert: () => {} };

  const scaleEnd = options.scaleEnd ?? 0.9;
  const pinStart = options.pinStart ?? "top 12%";
  const triggers: ScrollTrigger[] = [];

  cards.forEach((card, index) => {
    triggers.push(
      ScrollTrigger.create({
        trigger: card,
        start: pinStart,
        endTrigger: last,
        end: pinStart,
        pin: true,
        pinSpacing: false,
      }),
    );

    if (index < cards.length - 1) {
      const tween = gsap.to(card, {
        scale: scaleEnd,
        ease: "none",
        scrollTrigger: {
          trigger: card,
          start: pinStart,
          endTrigger: last,
          end: pinStart,
          scrub: true,
        },
      });
      if (tween.scrollTrigger) triggers.push(tween.scrollTrigger);
    }
  });

  return { revert: () => triggers.forEach((trigger) => trigger.kill()) };
}

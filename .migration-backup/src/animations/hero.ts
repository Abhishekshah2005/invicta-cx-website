/**
 * Hero entrance orchestration. Sequences a masked title reveal with staggered
 * supporting elements into one timeline. Convention-driven via data attributes
 * so any hero markup can opt in without bespoke code:
 *   [data-hero-title] — headline (masked line reveal)
 *   [data-hero-item]  — eyebrow, subhead, CTAs, media (staggered)
 */
import { gsap } from "@/lib/gsap";
import { DISTANCE, DURATION, GSAP_EASE, STAGGER } from "@/constants/animation";
import { prefersReducedMotion } from "@/utils/dom";
import { textReveal, type TextRevealHandle } from "./textReveal";
import type { Revertible } from "./types";

export interface HeroRevealOptions {
  titleSelector?: string;
  itemSelector?: string;
  delay?: number;
}

/**
 * Build the hero entrance timeline for a scope element. Returns the timeline and
 * a disposer that also reverts the title split.
 */
export function heroReveal(
  scope: HTMLElement,
  options: HeroRevealOptions = {},
): Revertible & { timeline: gsap.core.Timeline } {
  const title = scope.querySelector<HTMLElement>(options.titleSelector ?? "[data-hero-title]");
  const items = scope.querySelectorAll<HTMLElement>(options.itemSelector ?? "[data-hero-item]");

  if (prefersReducedMotion()) {
    if (title) gsap.set(title, { autoAlpha: 1 });
    if (items.length) gsap.set(items, { autoAlpha: 1, y: 0 });
    return { timeline: gsap.timeline(), revert: () => {} };
  }

  const timeline = gsap.timeline({ delay: options.delay ?? 0, defaults: { ease: GSAP_EASE.out } });
  let titleHandle: TextRevealHandle | null = null;

  if (title) {
    titleHandle = textReveal(title, { start: null, splitBy: "lines" });
    if (titleHandle.timeline) timeline.add(titleHandle.timeline, 0);
  }

  if (items.length) {
    timeline.from(
      items,
      { autoAlpha: 0, y: DISTANCE.md, duration: DURATION.base, stagger: STAGGER.base },
      title ? "-=0.45" : 0,
    );
  }

  return {
    timeline,
    revert: () => {
      timeline.kill();
      titleHandle?.revert();
    },
  };
}

/**
 * Fade / translate reveal recipes — the base vocabulary every other reveal
 * builds on. Pure GSAP; reduced-motion aware.
 */
import { gsap } from "@/lib/gsap";
import { DISTANCE, DURATION, GSAP_EASE, STAGGER } from "@/constants/animation";
import { prefersReducedMotion } from "@/utils/dom";
import type { AnimTarget, ScrollOptions, TimingOptions } from "./types";

export interface FadeOptions extends TimingOptions, ScrollOptions {
  /** Translate distance in px (direction set per recipe). */
  distance?: number;
}

function scrollTriggerVars(target: AnimTarget, options: FadeOptions) {
  if (options.start === null) return {};
  return {
    scrollTrigger: {
      trigger: target as gsap.DOMTarget,
      start: options.start ?? "top 85%",
      once: options.once ?? true,
    },
  };
}

/** Fade in (opacity only). */
export function fadeIn(target: AnimTarget, options: FadeOptions = {}): gsap.core.Tween {
  if (prefersReducedMotion()) return gsap.set(target, { autoAlpha: 1 });
  return gsap.from(target, {
    autoAlpha: 0,
    duration: options.duration ?? DURATION.base,
    ease: options.ease ?? GSAP_EASE.out,
    delay: options.delay ?? 0,
    ...scrollTriggerVars(target, options),
  });
}

/** Fade + slide up — the canonical entrance. */
export function fadeInUp(target: AnimTarget, options: FadeOptions = {}): gsap.core.Tween {
  if (prefersReducedMotion()) return gsap.set(target, { autoAlpha: 1, y: 0 });
  return gsap.from(target, {
    autoAlpha: 0,
    y: options.distance ?? DISTANCE.md,
    duration: options.duration ?? DURATION.base,
    ease: options.ease ?? GSAP_EASE.out,
    delay: options.delay ?? 0,
    ...scrollTriggerVars(target, options),
  });
}

/** Staggered fade + slide up for a group (list items, nav links). */
export function fadeInStagger(targets: AnimTarget, options: FadeOptions = {}): gsap.core.Tween {
  if (prefersReducedMotion()) return gsap.set(targets, { autoAlpha: 1, y: 0 });
  return gsap.from(targets, {
    autoAlpha: 0,
    y: options.distance ?? DISTANCE.sm,
    duration: options.duration ?? DURATION.base,
    ease: options.ease ?? GSAP_EASE.out,
    stagger: options.stagger ?? STAGGER.base,
    delay: options.delay ?? 0,
    ...scrollTriggerVars(targets, options),
  });
}

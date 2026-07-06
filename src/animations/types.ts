/**
 * Shared types for the GSAP animation recipes in this folder.
 *
 * Recipes are pure, framework-agnostic factory functions: they take DOM
 * target(s) + options and return a GSAP tween/timeline (and, where relevant, a
 * disposer). React consumes them through the hooks in `@/hooks`. Every recipe
 * is reduced-motion aware — it checks `prefersReducedMotion()` and degrades to
 * an instant, visible end-state.
 */
import type { gsap } from "@/lib/gsap";

/** A GSAP-addressable target (element, selector, or array). */
export type AnimTarget = gsap.TweenTarget;

/** Common timing options accepted by most recipes. */
export interface TimingOptions {
  /** Duration in seconds. */
  duration?: number;
  /** GSAP ease string. */
  ease?: string;
  /** Start delay in seconds. */
  delay?: number;
  /** Per-item stagger in seconds (grouped recipes). */
  stagger?: number;
}

/** Options for scroll-linked recipes. */
export interface ScrollOptions {
  /** ScrollTrigger `start`. Pass `null` to play immediately (no trigger). */
  start?: string | null;
  /** ScrollTrigger `end`. */
  end?: string;
  /** Scrub to the scrollbar (number = smoothing seconds). */
  scrub?: boolean | number;
  /** Only play once. */
  once?: boolean;
}

/** A recipe that owns resources returns a disposer to revert them. */
export interface Revertible {
  revert: () => void;
}

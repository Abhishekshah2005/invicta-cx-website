/**
 * Centralized animation design tokens. Every animation in the app should pull
 * its easing, duration, and stagger values from here so motion stays coherent.
 */

/** A cubic-bezier easing definition: `[x1, y1, x2, y2]`. */
export type Bezier = [number, number, number, number];

/**
 * Cubic-bezier easing tuples for Motion (motion.dev / framer) `transition.ease`.
 * Typed as fixed-length tuples so they satisfy Motion's `Easing` type.
 */
export const EASE = {
  /** Smooth deceleration — the default for entrances. */
  out: [0.16, 1, 0.3, 1],
  /** Balanced in/out for looping or reversible motion. */
  inOut: [0.83, 0, 0.17, 1],
  /** Strong, expressive deceleration for hero moments. */
  expo: [0.19, 1, 0.22, 1],
  /** Subtle overshoot for playful UI. */
  backOut: [0.34, 1.56, 0.64, 1],
} as const satisfies Record<string, Bezier>;

/**
 * Return a fresh, mutable bezier tuple for a named ease. Use this when passing
 * an ease to Motion, whose `Easing` type requires a mutable `[n,n,n,n]` tuple
 * (the `EASE` tokens are readonly).
 */
export function ease(key: EaseKey): Bezier {
  return [...EASE[key]] as Bezier;
}

/**
 * Equivalent GSAP ease strings. GSAP parses these at runtime.
 */
export const GSAP_EASE = {
  out: "power3.out",
  inOut: "power3.inOut",
  expo: "expo.out",
  backOut: "back.out(1.7)",
  none: "none",
} as const;

/** Durations in seconds (GSAP + Motion both use seconds). */
export const DURATION = {
  fast: 0.4,
  base: 0.7,
  slow: 1.1,
  slower: 1.6,
} as const;

/** Per-item stagger amounts in seconds. */
export const STAGGER = {
  tight: 0.04,
  base: 0.08,
  loose: 0.14,
} as const;

/** Reusable Motion spring presets. */
export const SPRING = {
  soft: { type: "spring", stiffness: 120, damping: 20, mass: 1 },
  snappy: { type: "spring", stiffness: 300, damping: 30, mass: 0.8 },
  gentle: { type: "spring", stiffness: 80, damping: 18, mass: 1 },
} as const;

/** Default pixel distances for translate-based reveals. */
export const DISTANCE = {
  sm: 24,
  md: 48,
  lg: 80,
} as const;

export type EaseKey = keyof typeof EASE;
export type GsapEaseKey = keyof typeof GSAP_EASE;
export type DurationKey = keyof typeof DURATION;

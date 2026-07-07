import type { Variants } from "motion/react";

import { DISTANCE, DURATION, STAGGER, ease } from "@/constants/animation";

/**
 * Shared Motion variants. Compose these with `<motion.* variants={...}>` or the
 * ready-made components in `./components`. Global reduced-motion handling is
 * provided by `<MotionConfig reducedMotion="user">` in the app providers.
 */

export const fadeIn: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { duration: DURATION.base, ease: ease("out") },
  },
};

export const fadeInUp: Variants = {
  hidden: { opacity: 0, y: DISTANCE.md },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: DURATION.base, ease: ease("out") },
  },
};

export const fadeInDown: Variants = {
  hidden: { opacity: 0, y: -DISTANCE.md },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: DURATION.base, ease: ease("out") },
  },
};

export const scaleIn: Variants = {
  hidden: { opacity: 0, scale: 0.92 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: DURATION.slow, ease: ease("expo") },
  },
};

/** Parent that orchestrates staggered children reveals. */
export const staggerContainer: Variants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: STAGGER.base, delayChildren: 0.1 },
  },
};

/** Child of `staggerContainer`. */
export const staggerItem: Variants = fadeInUp;

/** Named lookup for the `<Reveal variant="...">` component. */
export const REVEAL_VARIANTS = {
  fade: fadeIn,
  "fade-up": fadeInUp,
  "fade-down": fadeInDown,
  scale: scaleIn,
} as const satisfies Record<string, Variants>;

export type RevealVariant = keyof typeof REVEAL_VARIANTS;

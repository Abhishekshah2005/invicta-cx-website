/**
 * GSAP animation architecture — pure, reusable, reduced-motion-aware recipes.
 *
 * These are framework-agnostic factories (target + options → GSAP tween/
 * timeline). React consumes them via the hooks in `@/hooks` and the components
 * in `@/components/reveal`. Motion (motion.dev) is used only for small component
 * interactions (see `@/motion`); GSAP owns scroll storytelling.
 */
export * from "./types";
export * from "./fade";
export * from "./textReveal";
export * from "./imageReveal";
export * from "./parallax";
export * from "./progress";
export * from "./hero";
export * from "./cards";
export * from "./horizontal";
export * from "./stack";
export * from "./loader";
export * from "./pageTransition";

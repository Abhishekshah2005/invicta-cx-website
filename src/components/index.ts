/**
 * Component public API. `ui/*` (shadcn primitives) are intentionally NOT
 * re-exported here — import them directly from `@/components/ui/*` so the CLI
 * can keep managing them.
 *
 * Grouped modules (effects, reveal, media, analytics, utility) + brand
 * components (below).
 */
export * from "./effects";
export * from "./reveal";
export * from "./media";
export * from "./analytics";
export * from "./utility";

// Brand components
export { Pill } from "./pill";
export { Eyebrow } from "./eyebrow";
export { SectionHeading } from "./section-heading";
export { Stat } from "./stat";
export { Card } from "./card";
export { Faq, type FaqItem } from "./faq";
export { AnimatedUnderline } from "./animated-underline";
export { MagneticButton } from "./magnetic-button";

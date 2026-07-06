/**
 * Low-level GSAP helpers. The registered GSAP instance + plugins live in
 * `@/lib/gsap`; reusable animation recipes live in `@/animations`. This module
 * only exposes the SplitText helpers and a convenience re-export of the
 * registered instance.
 */
export * from "./split-text";
export { gsap, ScrollTrigger, ScrollSmoother, SplitText, Observer, Flip } from "@/lib/gsap";

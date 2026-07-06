/**
 * Central GSAP entry point. Import GSAP and its plugins from HERE, never
 * directly from "gsap", so plugin registration happens exactly once and stays
 * consistent across the app.
 *
 * As of GSAP 3.13+ every plugin (including the formerly "Club-only" SplitText
 * and ScrollSmoother) ships free in the public package.
 */
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ScrollSmoother } from "gsap/ScrollSmoother";
import { SplitText } from "gsap/SplitText";
import { Observer } from "gsap/Observer";
import { Flip } from "gsap/Flip";

// Register plugins once, on the client only. GSAP's registry is idempotent, so
// re-registration (e.g. Fast Refresh) is harmless.
if (typeof window !== "undefined") {
  gsap.registerPlugin(useGSAP, ScrollTrigger, ScrollSmoother, SplitText, Observer, Flip);
  gsap.config({ nullTargetWarn: false });
}

export { gsap, useGSAP, ScrollTrigger, ScrollSmoother, SplitText, Observer, Flip };

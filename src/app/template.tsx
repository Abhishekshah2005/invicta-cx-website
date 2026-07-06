"use client";

import { useRef } from "react";

import { gsap, useGSAP } from "@/lib/gsap";
import { prefersReducedMotion } from "@/utils/dom";

// Module-level flag: true only for the very first client render. `template.tsx`
// remounts on every navigation, so this persists the "have we navigated yet?"
// state across those remounts.
let isFirstRender = true;

/**
 * Route-transition wrapper. On client-side navigation the incoming page cross-
 * fades in (GSAP). We use opacity only — a transform on this wrapper would break
 * the fixed header's positioning. The initial load is skipped so this never
 * competes with the intro loader.
 */
export default function Template({ children }: { children: React.ReactNode }) {
  const ref = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      const el = ref.current;
      if (!el) return;

      if (isFirstRender) {
        isFirstRender = false;
        return;
      }
      if (prefersReducedMotion()) return;

      gsap.fromTo(el, { autoAlpha: 0 }, { autoAlpha: 1, duration: 0.45, ease: "power2.out" });
    },
    { dependencies: [] },
  );

  return <div ref={ref}>{children}</div>;
}

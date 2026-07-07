"use client";

import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import Lenis from "lenis";

import { gsap, ScrollTrigger } from "@/lib/gsap";
import { useIsomorphicLayoutEffect } from "@/hooks/use-isomorphic-layout-effect";
import { useReducedMotion } from "@/hooks/use-reduced-motion";
import { LenisContext } from "./lenis-context";

interface SmoothScrollProviderProps {
  children: React.ReactNode;
}

/**
 * Smooth scrolling powered by Lenis, driven by GSAP's ticker so Lenis,
 * ScrollTrigger, and every GSAP tween share a single RAF loop (no competing
 * animation frames, no jitter).
 *
 * Architecture notes:
 * - Lenis is the active engine. GSAP ScrollSmoother is registered in
 *   `@/lib/gsap` and can replace Lenis later without touching consumer code.
 * - When the user prefers reduced motion, Lenis is not created and native
 *   scrolling is used; `useLenis()` returns `null`, which effects must handle.
 */
export function SmoothScrollProvider({ children }: SmoothScrollProviderProps) {
  const [lenis, setLenis] = useState<Lenis | null>(null);
  const reducedMotion = useReducedMotion();
  const pathname = usePathname();

  useIsomorphicLayoutEffect(() => {
    if (reducedMotion) {
      setLenis(null);
      return;
    }

    const instance = new Lenis({
      lerp: 0.1,
      smoothWheel: true,
      wheelMultiplier: 1,
      touchMultiplier: 1.5,
      // Native touch scrolling feels better on mobile; smooth only the wheel.
      syncTouch: false,
      autoRaf: false,
    });

    // Keep ScrollTrigger's cached positions in sync with Lenis' virtual scroll.
    instance.on("scroll", ScrollTrigger.update);

    // Single RAF: GSAP ticker advances Lenis (ticker time is in seconds).
    const update = (time: number) => instance.raf(time * 1000);
    gsap.ticker.add(update);
    gsap.ticker.lagSmoothing(0);

    setLenis(instance);
    ScrollTrigger.refresh();

    return () => {
      instance.off("scroll", ScrollTrigger.update);
      gsap.ticker.remove(update);
      instance.destroy();
      setLenis(null);
    };
  }, [reducedMotion]);

  // Scroll restoration: reset to the top instantly on client-side navigation.
  useEffect(() => {
    if (lenis) {
      lenis.scrollTo(0, { immediate: true });
    } else if (typeof window !== "undefined") {
      window.scrollTo(0, 0);
    }
    // Recalculate trigger positions after the new route paints.
    ScrollTrigger.refresh();
  }, [pathname, lenis]);

  return <LenisContext.Provider value={lenis}>{children}</LenisContext.Provider>;
}

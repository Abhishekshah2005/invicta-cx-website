"use client";

import { useRef } from "react";

import { gsap, useGSAP } from "@/lib/gsap";
import { useReducedMotion } from "./use-reduced-motion";

interface UseMagneticOptions {
  /** How strongly the element follows the pointer (0–1). */
  strength?: number;
  /** Ease-back duration in seconds. */
  duration?: number;
}

/**
 * Magnetic hover — the element eases toward the pointer while hovered and
 * springs back on leave. Ideal for buttons, logos, and CTAs. Uses `quickTo`
 * for GC-free, frame-perfect updates.
 */
export function useMagnetic<T extends HTMLElement = HTMLButtonElement>({
  strength = 0.35,
  duration = 0.5,
}: UseMagneticOptions = {}) {
  const ref = useRef<T>(null);
  const reducedMotion = useReducedMotion();

  useGSAP(
    () => {
      const el = ref.current;
      if (!el || reducedMotion) return;

      const xTo = gsap.quickTo(el, "x", { duration, ease: "power3.out" });
      const yTo = gsap.quickTo(el, "y", { duration, ease: "power3.out" });

      const onMove = (event: PointerEvent) => {
        const rect = el.getBoundingClientRect();
        const relX = event.clientX - (rect.left + rect.width / 2);
        const relY = event.clientY - (rect.top + rect.height / 2);
        xTo(relX * strength);
        yTo(relY * strength);
      };

      const onLeave = () => {
        xTo(0);
        yTo(0);
      };

      el.addEventListener("pointermove", onMove);
      el.addEventListener("pointerleave", onLeave);
      return () => {
        el.removeEventListener("pointermove", onMove);
        el.removeEventListener("pointerleave", onLeave);
      };
    },
    { dependencies: [reducedMotion, strength, duration], scope: ref },
  );

  return ref;
}

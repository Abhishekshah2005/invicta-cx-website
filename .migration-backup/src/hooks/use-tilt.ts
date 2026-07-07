"use client";

import { useRef } from "react";

import { gsap, useGSAP } from "@/lib/gsap";
import { useReducedMotion } from "./use-reduced-motion";

interface UseTiltOptions {
  /** Maximum tilt in degrees at the card edges. */
  max?: number;
  /** CSS perspective in px — lower is more dramatic. */
  perspective?: number;
  /** Scale applied while hovering. */
  scale?: number;
}

/**
 * 3D tilt-on-hover. The element rotates toward the pointer in perspective and
 * scales slightly, easing back to rest on leave.
 */
export function useTilt<T extends HTMLElement = HTMLDivElement>({
  max = 12,
  perspective = 1000,
  scale = 1.02,
}: UseTiltOptions = {}) {
  const ref = useRef<T>(null);
  const reducedMotion = useReducedMotion();

  useGSAP(
    () => {
      const el = ref.current;
      if (!el || reducedMotion) return;

      gsap.set(el, { transformPerspective: perspective, transformStyle: "preserve-3d" });

      const rotX = gsap.quickTo(el, "rotationX", { duration: 0.4, ease: "power3.out" });
      const rotY = gsap.quickTo(el, "rotationY", { duration: 0.4, ease: "power3.out" });
      const scaleTo = gsap.quickTo(el, "scale", { duration: 0.4, ease: "power3.out" });

      const onMove = (event: PointerEvent) => {
        const rect = el.getBoundingClientRect();
        const px = (event.clientX - rect.left) / rect.width - 0.5;
        const py = (event.clientY - rect.top) / rect.height - 0.5;
        rotY(px * max * 2);
        rotX(-py * max * 2);
      };

      const onEnter = () => scaleTo(scale);
      const onLeave = () => {
        rotX(0);
        rotY(0);
        scaleTo(1);
      };

      el.addEventListener("pointerenter", onEnter);
      el.addEventListener("pointermove", onMove);
      el.addEventListener("pointerleave", onLeave);
      return () => {
        el.removeEventListener("pointerenter", onEnter);
        el.removeEventListener("pointermove", onMove);
        el.removeEventListener("pointerleave", onLeave);
      };
    },
    { dependencies: [reducedMotion, max, perspective, scale], scope: ref },
  );

  return ref;
}

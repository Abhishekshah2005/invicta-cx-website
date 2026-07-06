"use client";

import { useRef } from "react";

import { gsap, useGSAP } from "@/lib/gsap";
import { cn } from "@/lib/utils";
import { isTouchDevice } from "@/utils/dom";
import { useReducedMotion } from "@/hooks/use-reduced-motion";

interface CustomCursorProps {
  /** Dot diameter in px. */
  size?: number;
  className?: string;
}

/**
 * A GPU-smoothed custom cursor. Mount once near the root. The dot trails the
 * pointer via `quickTo` and scales up over links/buttons or any element marked
 * `data-cursor="hover"`. Disabled on touch devices and under reduced motion.
 */
export function CustomCursor({ size = 14, className }: CustomCursorProps) {
  const dotRef = useRef<HTMLDivElement>(null);
  const reducedMotion = useReducedMotion();

  useGSAP(
    () => {
      const dot = dotRef.current;
      if (!dot || reducedMotion || isTouchDevice()) return;

      gsap.set(dot, { xPercent: -50, yPercent: -50 });
      const xTo = gsap.quickTo(dot, "x", { duration: 0.35, ease: "power3.out" });
      const yTo = gsap.quickTo(dot, "y", { duration: 0.35, ease: "power3.out" });

      const onMove = (event: PointerEvent) => {
        xTo(event.clientX);
        yTo(event.clientY);
        gsap.to(dot, { opacity: 1, duration: 0.2, overwrite: "auto" });
      };
      const onLeaveWindow = () => gsap.to(dot, { opacity: 0, duration: 0.2, overwrite: "auto" });
      const onEnterHover = () => gsap.to(dot, { scale: 2.6, duration: 0.3, ease: "power3.out" });
      const onLeaveHover = () => gsap.to(dot, { scale: 1, duration: 0.3, ease: "power3.out" });

      window.addEventListener("pointermove", onMove);
      document.documentElement.addEventListener("pointerleave", onLeaveWindow);

      const interactive = Array.from(
        document.querySelectorAll<HTMLElement>('a, button, [data-cursor="hover"]'),
      );
      for (const el of interactive) {
        el.addEventListener("pointerenter", onEnterHover);
        el.addEventListener("pointerleave", onLeaveHover);
      }

      return () => {
        window.removeEventListener("pointermove", onMove);
        document.documentElement.removeEventListener("pointerleave", onLeaveWindow);
        for (const el of interactive) {
          el.removeEventListener("pointerenter", onEnterHover);
          el.removeEventListener("pointerleave", onLeaveHover);
        }
      };
    },
    { dependencies: [reducedMotion] },
  );

  return (
    <div
      ref={dotRef}
      aria-hidden
      className={cn(
        "pointer-events-none fixed top-0 left-0 z-9999 rounded-full bg-foreground mix-blend-difference",
        className,
      )}
      style={{ width: size, height: size, opacity: 0 }}
    />
  );
}

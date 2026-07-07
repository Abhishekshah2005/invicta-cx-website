"use client";

import { useRef } from "react";

import { useGSAP } from "@/lib/gsap";
import { parallax, type ParallaxOptions } from "@/animations/parallax";

/**
 * React binding for the `parallax` recipe. Attach the returned ref to any
 * element to translate it proportionally to scroll, scrubbed to the scrollbar.
 */
export function useParallax<T extends HTMLElement = HTMLDivElement>(options: ParallaxOptions = {}) {
  const ref = useRef<T>(null);

  useGSAP(
    () => {
      const el = ref.current;
      if (!el) return;
      const handle = parallax(el, options);
      return () => handle.revert();
    },
    { dependencies: [options.speed, options.axis, options.start, options.end], scope: ref },
  );

  return ref;
}

"use client";

import { useRef, useState } from "react";

import { gsap, ScrollTrigger, useGSAP } from "@/lib/gsap";

interface UseScrollProgressOptions {
  /** ScrollTrigger start position. */
  start?: string;
  /** ScrollTrigger end position. */
  end?: string;
}

/**
 * Track an element's scroll progress as a 0–1 value. Attach the returned `ref`
 * to the element you want measured; `progress` updates as it moves through the
 * viewport. Useful for progress bars, pinned scenes, and scroll-driven UI.
 */
export function useScrollProgress<T extends HTMLElement = HTMLDivElement>({
  start = "top bottom",
  end = "bottom top",
}: UseScrollProgressOptions = {}) {
  const ref = useRef<T>(null);
  const [progress, setProgress] = useState(0);

  useGSAP(
    () => {
      const el = ref.current;
      if (!el) return;

      const trigger = ScrollTrigger.create({
        trigger: el,
        start,
        end,
        onUpdate: (self) => setProgress(gsap.utils.clamp(0, 1, self.progress)),
      });

      return () => trigger.kill();
    },
    { dependencies: [start, end], scope: ref },
  );

  return { ref, progress } as const;
}

"use client";

import { useRef } from "react";

import { useGSAP } from "@/lib/gsap";
import { textReveal, type TextRevealOptions } from "@/animations/textReveal";

/**
 * React binding for the `textReveal` recipe. Attach the returned ref to a text
 * element; it splits and reveals on scroll (or on mount when `start` is `null`),
 * reverting the split — restoring accessible, selectable text — on cleanup.
 */
export function useTextReveal<T extends HTMLElement = HTMLDivElement>(
  options: TextRevealOptions = {},
) {
  const ref = useRef<T>(null);

  useGSAP(
    () => {
      const el = ref.current;
      if (!el) return;
      const handle = textReveal(el, options);
      return () => handle.revert();
    },
    {
      dependencies: [options.splitBy, options.stagger, options.delay, options.start],
      scope: ref,
    },
  );

  return ref;
}

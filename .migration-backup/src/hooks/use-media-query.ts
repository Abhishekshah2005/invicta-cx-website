"use client";

import { useEffect, useState } from "react";

import type { Breakpoint } from "@/constants/breakpoints";
import { up } from "@/constants/breakpoints";

/**
 * Subscribe to a CSS media query. Returns `false` during SSR and the first
 * client render, then updates once mounted to avoid hydration mismatches.
 */
export function useMediaQuery(query: string): boolean {
  const [matches, setMatches] = useState(false);

  useEffect(() => {
    const mql = window.matchMedia(query);
    const onChange = () => setMatches(mql.matches);
    onChange();
    mql.addEventListener("change", onChange);
    return () => mql.removeEventListener("change", onChange);
  }, [query]);

  return matches;
}

/** Convenience: true when the viewport is at least the given breakpoint wide. */
export function useBreakpoint(breakpoint: Breakpoint): boolean {
  return useMediaQuery(up(breakpoint));
}

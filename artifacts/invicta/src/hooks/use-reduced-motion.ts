"use client";

import { useMediaQuery } from "./use-media-query";

/**
 * True when the user has requested reduced motion. Every animation entry point
 * should consult this and degrade to instant / opacity-only transitions.
 */
export function useReducedMotion(): boolean {
  return useMediaQuery("(prefers-reduced-motion: reduce)");
}

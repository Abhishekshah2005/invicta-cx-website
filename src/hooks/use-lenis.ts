"use client";

import { useContext, useEffect } from "react";
import type Lenis from "lenis";

import { LenisContext } from "@/providers/lenis-context";

/**
 * Access the active Lenis instance and optionally subscribe to scroll events.
 *
 * @param onScroll Called on every Lenis scroll frame with the instance.
 * @returns The Lenis instance, or `null` when smooth scrolling is disabled.
 */
export function useLenis(onScroll?: (lenis: Lenis) => void, deps: unknown[] = []): Lenis | null {
  const lenis = useContext(LenisContext);

  useEffect(() => {
    if (!lenis || !onScroll) return;
    const handler = () => onScroll(lenis);
    lenis.on("scroll", handler);
    return () => lenis.off("scroll", handler);
    // `deps` is intentionally spread so callers control re-subscription.
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [lenis, ...deps]);

  return lenis;
}

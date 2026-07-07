"use client";

import { useEffect, useRef, useState } from "react";

export interface MousePosition {
  x: number;
  y: number;
}

interface UseMousePositionOptions {
  /**
   * When `false`, the position is written to a ref only (no re-renders) and can
   * be read imperatively via the returned `ref`. Prefer this for RAF-driven
   * effects; leave `true` for simple reactive UI. Defaults to `true`.
   */
  reactive?: boolean;
}

/**
 * Track the pointer position. Returns both a reactive value and a live ref so
 * consumers can choose between re-rendering and reading imperatively inside a
 * RAF loop (the performant path for cursor / parallax effects).
 */
export function useMousePosition({ reactive = true }: UseMousePositionOptions = {}) {
  const ref = useRef<MousePosition>({ x: 0, y: 0 });
  const [position, setPosition] = useState<MousePosition>({ x: 0, y: 0 });

  useEffect(() => {
    const onMove = (event: PointerEvent) => {
      ref.current = { x: event.clientX, y: event.clientY };
      if (reactive) setPosition(ref.current);
    };
    window.addEventListener("pointermove", onMove, { passive: true });
    return () => window.removeEventListener("pointermove", onMove);
  }, [reactive]);

  return { position, ref } as const;
}

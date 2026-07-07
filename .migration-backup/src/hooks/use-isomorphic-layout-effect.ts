import { useEffect, useLayoutEffect } from "react";

import { isBrowser } from "@/utils/dom";

/**
 * `useLayoutEffect` on the client, `useEffect` on the server — avoids React's
 * SSR warning while still running layout-critical effects (GSAP setup, measuring
 * the DOM) synchronously before paint on the client.
 */
export const useIsomorphicLayoutEffect = isBrowser ? useLayoutEffect : useEffect;

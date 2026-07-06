/**
 * DOM / environment helpers. Guarded so they are safe to import in SSR code;
 * the browser-only branches short-circuit when `window` is undefined.
 */

/** True only in a browser environment (has `window`). */
export const isBrowser = typeof window !== "undefined";

/** Whether the user has requested reduced motion at this moment. */
export function prefersReducedMotion(): boolean {
  if (!isBrowser || typeof window.matchMedia !== "function") return false;
  return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
}

/** Whether the current device is likely a touch device. */
export function isTouchDevice(): boolean {
  if (!isBrowser) return false;
  return "ontouchstart" in window || navigator.maxTouchPoints > 0;
}

/** Width in px of the browser's native scrollbar (0 on overlay scrollbars). */
export function getScrollbarWidth(): number {
  if (!isBrowser) return 0;
  return window.innerWidth - document.documentElement.clientWidth;
}

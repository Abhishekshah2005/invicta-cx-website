/**
 * Breakpoint tokens. Kept in sync with Tailwind's default screens so JS-driven
 * logic (media-query hooks, ScrollTrigger matchMedia) matches CSS breakpoints.
 */
export const BREAKPOINTS = {
  sm: 640,
  md: 768,
  lg: 1024,
  xl: 1280,
  "2xl": 1536,
} as const;

export type Breakpoint = keyof typeof BREAKPOINTS;

/** `min-width` media query string for a breakpoint. */
export function up(bp: Breakpoint): string {
  return `(min-width: ${BREAKPOINTS[bp]}px)`;
}

/** `max-width` media query string (one px below the breakpoint). */
export function down(bp: Breakpoint): string {
  return `(max-width: ${BREAKPOINTS[bp] - 1}px)`;
}

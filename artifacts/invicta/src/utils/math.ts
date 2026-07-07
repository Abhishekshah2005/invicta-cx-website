/**
 * Framework-agnostic math helpers for animation & interaction work.
 * Pure functions, no side effects, safe to use on server or client.
 */

/** Clamp `value` to the inclusive `[min, max]` range. */
export function clamp(value: number, min = 0, max = 1): number {
  return Math.min(Math.max(value, min), max);
}

/** Linear interpolation between `start` and `end` by factor `t` (0–1). */
export function lerp(start: number, end: number, t: number): number {
  return start + (end - start) * t;
}

/**
 * Frame-rate independent damping (exponential smoothing). Use in RAF loops:
 * `current = damp(current, target, 0.1, dt)`.
 */
export function damp(
  current: number,
  target: number,
  smoothing: number,
  deltaTime: number,
): number {
  return lerp(current, target, 1 - Math.pow(smoothing, deltaTime));
}

/** Re-map `value` from the `[inMin, inMax]` range to `[outMin, outMax]`. */
export function mapRange(
  value: number,
  inMin: number,
  inMax: number,
  outMin: number,
  outMax: number,
): number {
  const t = inMax - inMin === 0 ? 0 : (value - inMin) / (inMax - inMin);
  return outMin + t * (outMax - outMin);
}

/** Normalize `value` within `[min, max]` to a 0–1 range. */
export function normalize(value: number, min: number, max: number): number {
  return mapRange(value, min, max, 0, 1);
}

/** Round to a fixed number of decimal places. */
export function roundTo(value: number, decimals = 2): number {
  const factor = 10 ** decimals;
  return Math.round(value * factor) / factor;
}

/** Convert degrees to radians. */
export function degToRad(degrees: number): number {
  return (degrees * Math.PI) / 180;
}

/** Convert radians to degrees. */
export function radToDeg(radians: number): number {
  return (radians * 180) / Math.PI;
}

/**
 * Reusable camera presets for `<Scene camera={...}>` / `<PerspectiveCamera>`.
 * Positions are `[x, y, z]`. Keep scene-specific tuning in the scene itself.
 */
export const CAMERA_PRESETS = {
  /** Straight-on hero framing. */
  hero: { fov: 45, position: [0, 0, 6] as [number, number, number], near: 0.1, far: 100 },
  /** Slightly elevated product/showcase framing. */
  product: { fov: 35, position: [0, 1, 5] as [number, number, number], near: 0.1, far: 100 },
  /** Wide, cinematic framing. */
  cinematic: { fov: 28, position: [0, 0.5, 9] as [number, number, number], near: 0.1, far: 200 },
} as const;

export type CameraPreset = keyof typeof CAMERA_PRESETS;

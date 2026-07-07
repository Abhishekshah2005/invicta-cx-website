"use client";

interface StudioLightsProps {
  /** Master intensity multiplier. */
  intensity?: number;
}

/**
 * A reusable three-point lighting rig (key, fill, rim) plus soft ambient.
 * Render inside a `<Scene>` / `<Canvas>`. Tune `intensity` per scene.
 */
export function StudioLights({ intensity = 1 }: StudioLightsProps) {
  return (
    <>
      <ambientLight intensity={0.4 * intensity} />
      <directionalLight position={[5, 5, 5]} intensity={1.2 * intensity} />
      <directionalLight position={[-5, 2, -5]} intensity={0.5 * intensity} />
      <pointLight position={[0, -4, 2]} intensity={0.4 * intensity} />
    </>
  );
}

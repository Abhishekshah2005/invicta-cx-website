"use client";

import { Canvas } from "@react-three/fiber";

import { PlayerEcosystem } from "./player-ecosystem";

/**
 * Canvas host for the player-ecosystem globe. Separated so it can be dynamically
 * imported with `ssr: false`. Transparent, capped DPR, gentle auto-rotation.
 */
export function PlayerEcosystemCanvas() {
  return (
    <Canvas
      className="!absolute inset-0"
      camera={{ position: [0, 0, 7], fov: 42 }}
      dpr={[1, 1.5]}
      gl={{ antialias: true, alpha: true, powerPreference: "high-performance" }}
    >
      <PlayerEcosystem />
    </Canvas>
  );
}

"use client";

import { Canvas } from "@react-three/fiber";

import { SupportNetwork } from "./support-network";

/**
 * Canvas host for the support-network scene. Kept separate so it can be
 * dynamically imported with `ssr: false`. Transparent, capped DPR, low-cost.
 */
export function SupportNetworkCanvas() {
  return (
    <Canvas
      className="!absolute inset-0"
      camera={{ position: [0, 0, 9], fov: 45 }}
      dpr={[1, 1.5]}
      gl={{ antialias: true, alpha: true, powerPreference: "high-performance" }}
    >
      <SupportNetwork />
    </Canvas>
  );
}

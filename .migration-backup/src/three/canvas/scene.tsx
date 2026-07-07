"use client";

import { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { Preload } from "@react-three/drei";

import { StudioLights } from "../lights/studio-lights";

type SceneProps = Omit<React.ComponentProps<typeof Canvas>, "children"> & {
  children: React.ReactNode;
  /** Include the default `StudioLights` rig. */
  lights?: boolean;
};

/**
 * Opinionated R3F `<Canvas>` wrapper with production-friendly defaults:
 * capped DPR, high-performance context, a sensible camera, a Suspense boundary,
 * and asset preloading. Compose scene contents as children.
 */
export function Scene({ children, lights = true, ...props }: SceneProps) {
  return (
    <Canvas
      dpr={[1, 2]}
      gl={{ antialias: true, alpha: true, powerPreference: "high-performance" }}
      camera={{ fov: 45, position: [0, 0, 6], near: 0.1, far: 100 }}
      {...props}
    >
      <Suspense fallback={null}>
        {lights ? <StudioLights /> : null}
        {children}
        <Preload all />
      </Suspense>
    </Canvas>
  );
}

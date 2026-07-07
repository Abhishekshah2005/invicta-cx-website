"use client";

import { useGLTF } from "@react-three/drei";
import { type ThreeElements } from "@react-three/fiber";

type ModelProps = { url: string } & Omit<ThreeElements["group"], "children">;

/**
 * Load and render a glTF/GLB model. Wraps the loaded scene in a `<group>` so you
 * can position/scale/rotate it via standard props. Call `preloadModel(url)` at
 * module scope to warm the cache before first paint.
 */
export function Model({ url, ...props }: ModelProps) {
  const { scene } = useGLTF(url);
  return (
    <group {...props}>
      <primitive object={scene} />
    </group>
  );
}

/** Preload a model so it is ready before the component mounts. */
export function preloadModel(url: string): void {
  useGLTF.preload(url);
}

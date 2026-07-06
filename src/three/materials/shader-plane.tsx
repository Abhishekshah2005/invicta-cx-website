"use client";

import { useMemo, useRef } from "react";
import { useFrame, type ThreeElements } from "@react-three/fiber";
import { Color, type ShaderMaterial } from "three";

import { gradientFragmentShader, gradientVertexShader } from "../shaders/gradient";

type ShaderPlaneProps = ThreeElements["mesh"] & {
  colorA?: string;
  colorB?: string;
  size?: [number, number];
};

/**
 * A plane driven by the animated gradient shader — a ready template for custom
 * shader work. Copy it and swap in your own GLSL / uniforms.
 */
export function ShaderPlane({
  colorA = "#6366f1",
  colorB = "#0ea5e9",
  size = [4, 4],
  ...props
}: ShaderPlaneProps) {
  const materialRef = useRef<ShaderMaterial>(null);

  const uniforms = useMemo(
    () => ({
      uTime: { value: 0 },
      uColorA: { value: new Color(colorA) },
      uColorB: { value: new Color(colorB) },
    }),
    [colorA, colorB],
  );

  useFrame((_state, delta) => {
    const uTime = materialRef.current?.uniforms.uTime;
    if (uTime) uTime.value += delta;
  });

  return (
    <mesh {...props}>
      <planeGeometry args={[size[0], size[1], 32, 32]} />
      <shaderMaterial
        ref={materialRef}
        vertexShader={gradientVertexShader}
        fragmentShader={gradientFragmentShader}
        uniforms={uniforms}
      />
    </mesh>
  );
}

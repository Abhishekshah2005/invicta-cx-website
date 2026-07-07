"use client";

import { useEffect, useMemo, useRef } from "react";
import { useFrame } from "@react-three/fiber";
import { BufferGeometry, Float32BufferAttribute, type Group, Vector3 } from "three";

import { prefersReducedMotion } from "@/utils/dom";

interface SupportNetworkProps {
  count?: number;
  /** Half-extent of the point cloud. */
  radius?: number;
  /** Max distance between two points to draw a connecting line. */
  connectDistance?: number;
  color?: string;
}

/**
 * A subtle "support network": crimson nodes connected where near, drifting
 * slowly. A metaphor for connected, always-on human coverage — the homepage's
 * single (restrained) 3D moment. Rotation halts under reduced motion.
 *
 * Renders inside a `<Canvas>` only.
 */
export function SupportNetwork({
  count = 80,
  radius = 3.6,
  connectDistance = 2,
  color = "#B4121B",
}: SupportNetworkProps) {
  const group = useRef<Group>(null);
  const reduced = prefersReducedMotion();

  const { points, lines } = useMemo(() => {
    // Deterministic pseudo-random (pure — no Math.random) so the layout is
    // stable across renders and satisfies the render-purity rule.
    const rand = (seed: number) => {
      const value = Math.sin(seed * 127.1 + 311.7) * 43758.5453;
      return (value - Math.floor(value)) * 2 - 1; // -1..1
    };

    const positions: Vector3[] = [];
    for (let i = 0; i < count; i++) {
      positions.push(
        new Vector3(rand(i * 3 + 1) * radius, rand(i * 3 + 2) * radius, rand(i * 3 + 3) * radius),
      );
    }

    const pointsGeom = new BufferGeometry().setFromPoints(positions);

    const segments: number[] = [];
    for (let i = 0; i < positions.length; i++) {
      const a = positions[i];
      if (!a) continue;
      for (let j = i + 1; j < positions.length; j++) {
        const b = positions[j];
        if (!b) continue;
        if (a.distanceTo(b) < connectDistance) {
          segments.push(a.x, a.y, a.z, b.x, b.y, b.z);
        }
      }
    }
    const linesGeom = new BufferGeometry();
    linesGeom.setAttribute("position", new Float32BufferAttribute(segments, 3));

    return { points: pointsGeom, lines: linesGeom };
  }, [count, radius, connectDistance]);

  useEffect(() => {
    return () => {
      points.dispose();
      lines.dispose();
    };
  }, [points, lines]);

  useFrame((_state, delta) => {
    if (!reduced && group.current) {
      group.current.rotation.y += delta * 0.04;
      group.current.rotation.x += delta * 0.012;
    }
  });

  return (
    <group ref={group}>
      <points geometry={points}>
        <pointsMaterial color={color} size={0.06} sizeAttenuation transparent opacity={0.85} />
      </points>
      <lineSegments geometry={lines}>
        <lineBasicMaterial color={color} transparent opacity={0.14} />
      </lineSegments>
    </group>
  );
}

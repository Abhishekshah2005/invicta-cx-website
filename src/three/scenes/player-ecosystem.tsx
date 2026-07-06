"use client";

import { useEffect, useMemo, useRef } from "react";
import { useFrame } from "@react-three/fiber";
import { BufferGeometry, Float32BufferAttribute, type Group, Vector3 } from "three";

import { prefersReducedMotion } from "@/utils/dom";

interface PlayerEcosystemProps {
  count?: number;
  radius?: number;
  /** Nearest neighbours each node links to. */
  neighbors?: number;
  color?: string;
}

/**
 * The living player-support ecosystem — points distributed evenly across a globe
 * (Fibonacci sphere), linked to their nearest neighbours, rotating slowly. A
 * quiet metaphor for global, connected, always-on human coverage. Not a flashy
 * gaming effect: crimson on ink, restrained. Static under reduced motion.
 *
 * Renders inside a `<Canvas>` only.
 */
export function PlayerEcosystem({
  count = 150,
  radius = 2.6,
  neighbors = 2,
  color = "#B4121B",
}: PlayerEcosystemProps) {
  const group = useRef<Group>(null);
  const reduced = prefersReducedMotion();

  const { points, lines } = useMemo(() => {
    const pts: Vector3[] = [];
    const golden = Math.PI * (3 - Math.sqrt(5));
    for (let i = 0; i < count; i++) {
      const y = 1 - (i / (count - 1)) * 2;
      const r = Math.sqrt(Math.max(0, 1 - y * y));
      const theta = i * golden;
      pts.push(new Vector3(Math.cos(theta) * r, y, Math.sin(theta) * r).multiplyScalar(radius));
    }

    const pointsGeom = new BufferGeometry().setFromPoints(pts);

    const segments: number[] = [];
    for (let i = 0; i < pts.length; i++) {
      const a = pts[i];
      if (!a) continue;
      const dists: Array<[number, number]> = [];
      for (let j = 0; j < pts.length; j++) {
        if (i === j) continue;
        const b = pts[j];
        if (!b) continue;
        dists.push([a.distanceTo(b), j]);
      }
      dists.sort((x, z) => x[0] - z[0]);
      for (let k = 0; k < neighbors && k < dists.length; k++) {
        const pair = dists[k];
        if (!pair) continue;
        const b = pts[pair[1]];
        if (b) segments.push(a.x, a.y, a.z, b.x, b.y, b.z);
      }
    }
    const linesGeom = new BufferGeometry();
    linesGeom.setAttribute("position", new Float32BufferAttribute(segments, 3));

    return { points: pointsGeom, lines: linesGeom };
  }, [count, radius, neighbors]);

  useEffect(() => {
    return () => {
      points.dispose();
      lines.dispose();
    };
  }, [points, lines]);

  useFrame((_state, delta) => {
    if (!reduced && group.current) {
      group.current.rotation.y += delta * 0.06;
    }
  });

  return (
    <group ref={group} rotation={[0.32, 0, 0.12]}>
      <points geometry={points}>
        <pointsMaterial color={color} size={0.045} sizeAttenuation transparent opacity={0.9} />
      </points>
      <lineSegments geometry={lines}>
        <lineBasicMaterial color={color} transparent opacity={0.13} />
      </lineSegments>
    </group>
  );
}

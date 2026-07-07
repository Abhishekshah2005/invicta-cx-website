"use client";

import { Component, useRef, useMemo, useState, useEffect } from "react";
import type { ReactNode } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import * as THREE from "three";

/* ── Error boundary for WebGL failures ──────────────────────────── */

interface EBState { failed: boolean }
class GlobeErrorBoundary extends Component<{ children: ReactNode; fallback: ReactNode }, EBState> {
  state: EBState = { failed: false };
  static getDerivedStateFromError() { return { failed: true }; }
  render() { return this.state.failed ? this.props.fallback : this.props.children; }
}

/* ── Country data (exported so the section can use it) ──────────── */

export interface Country {
  name: string;
  flag: string;
  lat: number;
  lng: number;
}

export const GLOBE_COUNTRIES: Country[] = [
  { name: "India",          flag: "🇮🇳", lat:  20.59, lng:  78.96 },
  { name: "UAE",            flag: "🇦🇪", lat:  23.42, lng:  53.85 },
  { name: "United Kingdom", flag: "🇬🇧", lat:  55.38, lng:  -3.44 },
  { name: "United States",  flag: "🇺🇸", lat:  38.00, lng: -97.00 },
  { name: "Canada",         flag: "🇨🇦", lat:  56.13, lng:-106.35 },
  { name: "Australia",      flag: "🇦🇺", lat: -25.27, lng: 133.78 },
];

/** Arc sequence: [fromIndex, toIndex] pairs */
const ARC_PAIRS: [number, number][] = [
  [0, 2], // India       → UK
  [2, 3], // UK          → USA
  [3, 4], // USA         → Canada
  [4, 5], // Canada      → Australia
  [5, 1], // Australia   → UAE
  [1, 0], // UAE         → India
  [0, 3], // India       → USA
  [2, 5], // UK          → Australia
  [3, 1], // USA         → UAE
  [5, 2], // Australia   → UK
];

/* ── Helpers ─────────────────────────────────────────────────────── */

function latLngToVec3(lat: number, lng: number, r = 1): THREE.Vector3 {
  const phi   = (90 - lat) * (Math.PI / 180);
  const theta = (lng + 180) * (Math.PI / 180);
  return new THREE.Vector3(
    -r * Math.sin(phi) * Math.cos(theta),
     r * Math.cos(phi),
     r * Math.sin(phi) * Math.sin(theta),
  );
}

function buildArcPoints(a: THREE.Vector3, b: THREE.Vector3, steps = 90): THREE.Vector3[] {
  // Lift control point above the sphere for a natural arc
  const ctrl = a.clone().add(b).normalize().multiplyScalar(1.7);
  return new THREE.QuadraticBezierCurve3(a, ctrl, b).getPoints(steps);
}

/* ── Country marker — core dot + pulsing brand ring ─────────────── */

function CountryMarker({ lat, lng }: { lat: number; lng: number }) {
  const ringRef = useRef<THREE.Mesh>(null!);
  const phase   = useMemo(() => Math.random() * Math.PI * 2, []);
  const pos     = useMemo(() => latLngToVec3(lat, lng, 1.034), [lat, lng]);

  useFrame(({ clock }) => {
    if (!ringRef.current) return;
    const t = clock.getElapsedTime() * 1.4 + phase;
    const s = 1 + 0.7 * Math.abs(Math.sin(t));
    ringRef.current.scale.setScalar(s);
    (ringRef.current.material as THREE.MeshBasicMaterial).opacity =
      0.75 - 0.55 * Math.abs(Math.sin(t));
  });

  return (
    <group position={pos}>
      {/* White core dot */}
      <mesh>
        <sphereGeometry args={[0.017, 10, 10]} />
        <meshBasicMaterial color="#ffffff" />
      </mesh>
      {/* Pulsing brand ring */}
      <mesh ref={ringRef}>
        <torusGeometry args={[0.036, 0.004, 6, 28]} />
        <meshBasicMaterial color="#cc2233" transparent opacity={0.7} />
      </mesh>
    </group>
  );
}

/* ── Animated flight arc ─────────────────────────────────────────── */

function FlightArc({
  fromIdx,
  toIdx,
  onComplete,
}: {
  fromIdx: number;
  toIdx: number;
  onComplete: () => void;
}) {
  const completed = useRef(false);
  const progress  = useRef(0);

  const from   = useMemo(
    () => latLngToVec3(GLOBE_COUNTRIES[fromIdx].lat, GLOBE_COUNTRIES[fromIdx].lng, 1.034),
    [fromIdx],
  );
  const to     = useMemo(
    () => latLngToVec3(GLOBE_COUNTRIES[toIdx].lat,   GLOBE_COUNTRIES[toIdx].lng,   1.034),
    [toIdx],
  );
  const points = useMemo(() => buildArcPoints(from, to, 90), [from, to]);

  // Three.js objects created once per mount
  const geom    = useMemo(() => new THREE.BufferGeometry(), []);
  const mat     = useMemo(
    () => new THREE.LineBasicMaterial({ color: 0xdd2233, linewidth: 1 }),
    [],
  );
  const lineObj = useMemo(() => new THREE.Line(geom, mat), [geom, mat]);

  // Tail-fade geometry (dimmer, slightly behind the head)
  const tailGeom = useMemo(() => new THREE.BufferGeometry(), []);
  const tailMat  = useMemo(
    () => new THREE.LineBasicMaterial({ color: 0x882222, linewidth: 1, transparent: true, opacity: 0.35 }),
    [],
  );
  const tailObj  = useMemo(() => new THREE.Line(tailGeom, tailMat), [tailGeom, tailMat]);

  const headRef = useRef<THREE.Mesh>(null!);

  useEffect(() => {
    return () => {
      geom.dispose();
      mat.dispose();
      tailGeom.dispose();
      tailMat.dispose();
    };
  }, [geom, mat, tailGeom, tailMat]);

  useFrame((_, delta) => {
    if (completed.current) return;

    progress.current = Math.min(1, progress.current + delta / 2.2);
    const p     = progress.current;
    const count = Math.max(2, Math.floor(p * points.length));

    // Main arc (from start to head)
    geom.setFromPoints(points.slice(0, count));
    geom.computeBoundingSphere();

    // Tail (last 30% of drawn arc, fades behind head)
    const tailStart = Math.max(0, count - Math.floor(points.length * 0.3));
    tailGeom.setFromPoints(points.slice(tailStart, count));
    tailGeom.computeBoundingSphere();

    // Head sphere position
    if (headRef.current) {
      headRef.current.position.copy(points[count - 1]);
    }

    if (p >= 1 && !completed.current) {
      completed.current = true;
      onComplete();
    }
  });

  return (
    <group>
      <primitive object={lineObj} />
      <primitive object={tailObj} />
      {/* Glowing head */}
      <mesh ref={headRef} position={points[0]}>
        <sphereGeometry args={[0.02, 8, 8]} />
        <meshBasicMaterial color="#ff6644" />
      </mesh>
    </group>
  );
}

/* ── Globe scene (rotates as one unit) ──────────────────────────── */

function GlobeScene() {
  const groupRef         = useRef<THREE.Group>(null!);
  const [arcIdx, setArcIdx] = useState(0);

  // Slow auto-rotation
  useFrame((_, delta) => {
    if (groupRef.current) groupRef.current.rotation.y += delta * 0.1;
  });

  const [fromIdx, toIdx] = ARC_PAIRS[arcIdx % ARC_PAIRS.length];

  return (
    <group ref={groupRef}>
      {/* ── Core sphere ── */}
      <mesh>
        <sphereGeometry args={[1, 64, 64]} />
        <meshPhongMaterial
          color={new THREE.Color("#06060f")}
          emissive={new THREE.Color("#08082a")}
          shininess={60}
          specular={new THREE.Color("#222244")}
        />
      </mesh>

      {/* ── Latitude / longitude wireframe ── */}
      <mesh>
        <sphereGeometry args={[1.004, 40, 40]} />
        <meshBasicMaterial
          color={new THREE.Color("#1a2860")}
          wireframe
          transparent
          opacity={0.13}
        />
      </mesh>

      {/* ── Icosahedron wireframe (hi-tech triangulated look) ── */}
      <mesh>
        <icosahedronGeometry args={[1.007, 4]} />
        <meshBasicMaterial
          color={new THREE.Color("#101040")}
          wireframe
          transparent
          opacity={0.06}
        />
      </mesh>

      {/* ── Atmospheric glow (backside, larger sphere) ── */}
      <mesh>
        <sphereGeometry args={[1.16, 32, 32]} />
        <meshBasicMaterial
          color={new THREE.Color("#1a3a9f")}
          transparent
          opacity={0.05}
          side={THREE.BackSide}
        />
      </mesh>

      {/* ── Rim glow ── */}
      <mesh>
        <sphereGeometry args={[1.08, 32, 32]} />
        <meshBasicMaterial
          color={new THREE.Color("#cc2233")}
          transparent
          opacity={0.025}
          side={THREE.BackSide}
        />
      </mesh>

      {/* ── Country markers ── */}
      {GLOBE_COUNTRIES.map((c, i) => (
        <CountryMarker key={i} lat={c.lat} lng={c.lng} />
      ))}

      {/* ── Active flight arc (remounts on each new arc) ── */}
      <FlightArc
        key={arcIdx}
        fromIdx={fromIdx}
        toIdx={toIdx}
        onComplete={() => setArcIdx((n) => n + 1)}
      />
    </group>
  );
}

/* ── WebGL capability probe (runs once, client-side) ─────────────── */

function useWebGLSupported(): boolean | null {
  const [ok, setOk] = useState<boolean | null>(null);
  useEffect(() => {
    try {
      const c = document.createElement("canvas");
      const ctx = c.getContext("webgl2") || c.getContext("webgl");
      setOk(!!ctx);
    } catch {
      setOk(false);
    }
  }, []);
  return ok;
}

/* ── Public canvas component ─────────────────────────────────────── */

const GlobeFallback = () => (
  <div className="flex aspect-square w-full items-center justify-center rounded-full border border-foreground/10 bg-foreground/[0.03]">
    <div className="flex flex-col items-center gap-3 text-foreground/30">
      <svg viewBox="0 0 100 100" className="h-24 w-24 opacity-40" fill="none" stroke="currentColor" strokeWidth="1">
        <circle cx="50" cy="50" r="44" />
        <ellipse cx="50" cy="50" rx="20" ry="44" />
        <line x1="6" y1="50" x2="94" y2="50" />
        <ellipse cx="50" cy="50" rx="44" ry="14" />
      </svg>
      <span className="font-mono text-xs tracking-widest uppercase">Globe unavailable</span>
    </div>
  </div>
);

export function GlobeCanvas() {
  const webglOk = useWebGLSupported();

  // Still probing — render nothing (ClientOnly fallback already shown)
  if (webglOk === null) return null;

  // No GPU/WebGL — show static fallback
  if (!webglOk) return <GlobeFallback />;

  // WebGL confirmed — render the 3D globe
  return (
    <GlobeErrorBoundary fallback={<GlobeFallback />}>
      <Canvas
        camera={{ position: [0, 0, 2.55], fov: 42 }}
        dpr={[1, 2]}
        gl={{ antialias: true, alpha: true }}
        style={{ background: "transparent" }}
      >
        <ambientLight intensity={0.5} />
        <pointLight position={[5, 5, 5]}  intensity={1.4} color="#ffffff" />
        <pointLight position={[-4, 2, -4]} intensity={0.5} color="#3355ff" />
        <pointLight position={[0, -5, 2]}  intensity={0.3} color="#220011" />
        <GlobeScene />
      </Canvas>
    </GlobeErrorBoundary>
  );
}

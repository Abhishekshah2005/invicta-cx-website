"use client";

import { Component, useRef, useState, useEffect, useCallback } from "react";
import type { ReactNode } from "react";

/* ── Error boundary ──────────────────────────────────────────────── */

interface EBState { failed: boolean }
class GlobeErrorBoundary extends Component<
  { children: ReactNode; fallback: ReactNode },
  EBState
> {
  state: EBState = { failed: false };
  static getDerivedStateFromError() { return { failed: true }; }
  render() { return this.state.failed ? this.props.fallback : this.props.children; }
}

/* ── Country data ────────────────────────────────────────────────── */

export interface Country {
  name: string;
  flag: string;
  iso: string;
  lat: number;
  lng: number;
}

export const GLOBE_COUNTRIES: Country[] = [
  { name: "India",          flag: "🇮🇳", iso: "in", lat:  20.59, lng:  78.96 },
  { name: "UAE",            flag: "🇦🇪", iso: "ae", lat:  23.42, lng:  53.85 },
  { name: "United Kingdom", flag: "🇬🇧", iso: "gb", lat:  55.38, lng:  -3.44 },
  { name: "United States",  flag: "🇺🇸", iso: "us", lat:  38.00, lng: -97.00 },
  { name: "Canada",         flag: "🇨🇦", iso: "ca", lat:  56.13, lng:-106.35 },
  { name: "Australia",      flag: "🇦🇺", iso: "au", lat: -25.27, lng: 133.78 },
];

/* ── Flight arcs (all pairs within our 6 markets) ──────────────── */

const ARCS = [
  // Primary circuit
  { startLat:  20.59, startLng:  78.96, endLat:  55.38, endLng:  -3.44 }, // India   → UK
  { startLat:  55.38, startLng:  -3.44, endLat:  38.00, endLng: -97.00 }, // UK      → USA
  { startLat:  38.00, startLng: -97.00, endLat:  56.13, endLng:-106.35 }, // USA     → Canada
  { startLat:  56.13, startLng:-106.35, endLat: -25.27, endLng: 133.78 }, // Canada  → Australia
  { startLat: -25.27, startLng: 133.78, endLat:  23.42, endLng:  53.85 }, // Aus     → UAE
  { startLat:  23.42, startLng:  53.85, endLat:  20.59, endLng:  78.96 }, // UAE     → India
  // Cross connections
  { startLat:  20.59, startLng:  78.96, endLat:  38.00, endLng: -97.00 }, // India   → USA
  { startLat:  55.38, startLng:  -3.44, endLat: -25.27, endLng: 133.78 }, // UK      → Australia
  { startLat:  23.42, startLng:  53.85, endLat:  55.38, endLng:  -3.44 }, // UAE     → UK
  { startLat:  38.00, startLng: -97.00, endLat:  23.42, endLng:  53.85 }, // USA     → UAE
];

/* ── WebGL probe ─────────────────────────────────────────────────── */

function useWebGLSupported(): boolean | null {
  const [ok, setOk] = useState<boolean | null>(null);
  useEffect(() => {
    try {
      const c = document.createElement("canvas");
      const ctx = c.getContext("webgl2") || c.getContext("webgl");
      setOk(!!ctx);
    } catch { setOk(false); }
  }, []);
  return ok;
}

/* ── Globe implementation ────────────────────────────────────────── */

function GlobeImpl() {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const globeRef = useRef<any>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [size, setSize] = useState(600);
  const [GlobeComponent, setGlobeComponent] = useState<
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    React.ComponentType<any> | null
  >(null);

  // Dynamically import react-globe.gl (avoids SSR issues)
  useEffect(() => {
    import("react-globe.gl").then((mod) => {
      setGlobeComponent(() => mod.default);
    });
  }, []);

  // Responsive container sizing
  useEffect(() => {
    if (!containerRef.current) return;
    const ro = new ResizeObserver((entries) => {
      for (const entry of entries) {
        setSize(entry.contentRect.width);
      }
    });
    ro.observe(containerRef.current);
    // Initial size
    setSize(containerRef.current.getBoundingClientRect().width);
    return () => ro.disconnect();
  }, []);

  // Setup controls once globe is ready
  const handleGlobeReady = useCallback(() => {
    if (!globeRef.current) return;
    const controls = globeRef.current.controls();
    controls.autoRotate      = true;
    controls.autoRotateSpeed = 0.6;
    controls.enableZoom      = false;
    controls.enablePan       = false;
    // Start over Atlantic so both Americas & Europe/Africa are visible
    globeRef.current.pointOfView({ lat: 20, lng: -20, altitude: 2.2 }, 0);
  }, []);

  if (!GlobeComponent) return null;

  return (
    <div ref={containerRef} style={{ width: "100%", aspectRatio: "1 / 1" }}>
      <GlobeComponent
        ref={globeRef}
        width={size}
        height={size}
        onGlobeReady={handleGlobeReady}
        backgroundColor="rgba(0,0,0,0)"

        /* Globe surface — night Earth with city lights */
        globeImageUrl="//unpkg.com/three-globe/example/img/earth-night.jpg"
        bumpImageUrl="//unpkg.com/three-globe/example/img/earth-topology.png"

        /* Atmosphere */
        showAtmosphere
        atmosphereColor="#cc2233"
        atmosphereAltitude={0.25}

        /* Animated flight arcs */
        arcsData={ARCS}
        arcColor={() => ["rgba(220, 40, 50, 0.9)", "rgba(255, 130, 60, 0.9)"]}
        arcDashLength={0.35}
        arcDashGap={0.15}
        arcDashAnimateTime={2800}
        arcStroke={0.6}
        arcAltitudeAutoScale={0.35}

        /* Country markers */
        pointsData={GLOBE_COUNTRIES}
        pointLat="lat"
        pointLng="lng"
        pointColor={() => "#ffffff"}
        pointAltitude={0.015}
        pointRadius={0.45}

        /* Country name labels */
        labelsData={GLOBE_COUNTRIES}
        labelLat="lat"
        labelLng="lng"
        labelText="name"
        labelSize={1.6}
        labelDotRadius={0.45}
        labelColor={() => "rgba(255, 255, 255, 0.95)"}
        labelResolution={2}
        labelAltitude={0.02}

        /* Disable user interactions (pure display) */
        enablePointerInteraction={false}
      />
    </div>
  );
}

/* ── Fallback ────────────────────────────────────────────────────── */

const GlobeFallback = () => (
  <div className="flex aspect-square w-full items-center justify-center rounded-full border border-foreground/10 bg-foreground/[0.03]">
    <div className="flex flex-col items-center gap-3 text-foreground/30">
      <svg
        viewBox="0 0 100 100"
        className="h-24 w-24 opacity-40"
        fill="none"
        stroke="currentColor"
        strokeWidth="1"
      >
        <circle cx="50" cy="50" r="44" />
        <ellipse cx="50" cy="50" rx="20" ry="44" />
        <line x1="6" y1="50" x2="94" y2="50" />
        <ellipse cx="50" cy="50" rx="44" ry="14" />
      </svg>
      <span className="font-mono text-xs tracking-widest uppercase">
        Globe unavailable
      </span>
    </div>
  </div>
);

/* ── Public export ───────────────────────────────────────────────── */

export function GlobeCanvas() {
  const webglOk = useWebGLSupported();

  if (webglOk === null) return null;
  if (!webglOk) return <GlobeFallback />;

  return (
    <GlobeErrorBoundary fallback={<GlobeFallback />}>
      <GlobeImpl />
    </GlobeErrorBoundary>
  );
}

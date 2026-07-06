"use client";

import dynamic from "next/dynamic";

import { cn } from "@/lib/utils";
import { LazyMount } from "@/components/utility";

// Code-split the WebGL globe so it never ships with the initial bundle and only
// mounts as it nears the viewport — protecting LCP and Lighthouse.
const PlayerEcosystemCanvas = dynamic(
  () => import("./player-ecosystem-canvas").then((mod) => mod.PlayerEcosystemCanvas),
  { ssr: false },
);

interface PlayerEcosystemBackdropProps {
  className?: string;
}

/** Decorative, non-interactive ecosystem globe for the 24/7 Operations chapter. */
export function PlayerEcosystemBackdrop({ className }: PlayerEcosystemBackdropProps) {
  return (
    <div
      aria-hidden
      className={cn(
        "pointer-events-none absolute inset-0 opacity-80",
        "[mask-image:radial-gradient(ellipse_at_center,black_35%,transparent_80%)]",
        className,
      )}
    >
      <LazyMount rootMargin="400px" className="absolute inset-0">
        <PlayerEcosystemCanvas />
      </LazyMount>
    </div>
  );
}

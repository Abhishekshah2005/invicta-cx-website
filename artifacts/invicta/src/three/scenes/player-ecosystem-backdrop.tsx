"use client";

import { lazy, Suspense } from "react";

import { cn } from "@/lib/utils";
import { LazyMount } from "@/components/utility";

const PlayerEcosystemCanvas = lazy(
  () => import("./player-ecosystem-canvas").then((mod) => ({ default: mod.PlayerEcosystemCanvas })),
);

interface PlayerEcosystemBackdropProps {
  className?: string;
}

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
        <Suspense fallback={null}>
          <PlayerEcosystemCanvas />
        </Suspense>
      </LazyMount>
    </div>
  );
}

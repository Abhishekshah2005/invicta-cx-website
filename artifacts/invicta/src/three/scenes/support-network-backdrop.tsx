"use client";

import { lazy, Suspense } from "react";

import { cn } from "@/lib/utils";
import { LazyMount } from "@/components/utility";

const SupportNetworkCanvas = lazy(
  () => import("./support-network-canvas").then((mod) => ({ default: mod.SupportNetworkCanvas })),
);

interface SupportNetworkBackdropProps {
  className?: string;
}

export function SupportNetworkBackdrop({ className }: SupportNetworkBackdropProps) {
  return (
    <div
      aria-hidden
      className={cn(
        "pointer-events-none absolute inset-0 opacity-70",
        "[mask-image:radial-gradient(ellipse_at_center,black_30%,transparent_78%)]",
        className,
      )}
    >
      <LazyMount rootMargin="300px" className="absolute inset-0">
        <Suspense fallback={null}>
          <SupportNetworkCanvas />
        </Suspense>
      </LazyMount>
    </div>
  );
}

"use client";

import dynamic from "next/dynamic";

import { cn } from "@/lib/utils";
import { LazyMount } from "@/components/utility";

// Code-split the WebGL canvas (three/R3F) so it never ships with the initial
// bundle and only mounts when it nears the viewport.
const SupportNetworkCanvas = dynamic(
  () => import("./support-network-canvas").then((mod) => mod.SupportNetworkCanvas),
  { ssr: false },
);

interface SupportNetworkBackdropProps {
  className?: string;
}

/**
 * Decorative, non-interactive support-network backdrop for the closing CTA.
 * Lazy-mounted and masked to fade at the edges so text stays legible.
 */
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
        <SupportNetworkCanvas />
      </LazyMount>
    </div>
  );
}

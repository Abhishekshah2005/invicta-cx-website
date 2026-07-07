"use client";

import { useRef } from "react";

import { cn } from "@/lib/utils";

interface SpotlightProps extends React.HTMLAttributes<HTMLDivElement> {
  /** Diameter of the spotlight glow in px. */
  size?: number;
  /** Glow color (any CSS color). Defaults to a soft white. */
  color?: string;
}

/**
 * A container with a cursor-following radial glow. The pointer position is
 * written to CSS custom properties (no React re-renders), so it stays smooth.
 * Place interactive content as children.
 */
export function Spotlight({
  size = 400,
  color = "rgba(255,255,255,0.12)",
  className,
  children,
  style,
  ...props
}: SpotlightProps) {
  const ref = useRef<HTMLDivElement>(null);

  const handlePointerMove = (event: React.PointerEvent<HTMLDivElement>) => {
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    el.style.setProperty("--spot-x", `${event.clientX - rect.left}px`);
    el.style.setProperty("--spot-y", `${event.clientY - rect.top}px`);
    el.style.setProperty("--spot-opacity", "1");
  };

  const handlePointerLeave = () => {
    ref.current?.style.setProperty("--spot-opacity", "0");
  };

  return (
    <div
      ref={ref}
      onPointerMove={handlePointerMove}
      onPointerLeave={handlePointerLeave}
      className={cn("relative overflow-hidden", className)}
      style={
        {
          ...style,
          "--spot-opacity": "0",
        } as React.CSSProperties
      }
      {...props}
    >
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 z-0 transition-opacity duration-300"
        style={{
          opacity: "var(--spot-opacity)",
          background: `radial-gradient(${size}px circle at var(--spot-x) var(--spot-y), ${color}, transparent 70%)`,
        }}
      />
      <div className="relative z-10">{children}</div>
    </div>
  );
}

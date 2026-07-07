"use client";

import { cn } from "@/lib/utils";
import { useParallax } from "@/hooks/use-parallax";

interface ParallaxProps extends React.HTMLAttributes<HTMLDivElement> {
  /** Fraction of height to translate across the scroll range. */
  speed?: number;
  /** Movement axis. */
  axis?: "x" | "y";
}

/** Wrap content to move it at a parallax speed relative to scroll. */
export function Parallax({ speed, axis, className, children, ...props }: ParallaxProps) {
  const ref = useParallax<HTMLDivElement>({ speed, axis });

  return (
    <div ref={ref} className={cn("will-change-transform", className)} {...props}>
      {children}
    </div>
  );
}

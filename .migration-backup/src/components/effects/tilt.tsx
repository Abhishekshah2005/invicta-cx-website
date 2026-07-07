"use client";

import { cn } from "@/lib/utils";
import { useTilt } from "@/hooks/use-tilt";

interface TiltProps extends React.HTMLAttributes<HTMLDivElement> {
  /** Max tilt in degrees. */
  max?: number;
  /** CSS perspective in px. */
  perspective?: number;
  /** Hover scale. */
  scale?: number;
}

/** Wrap content to give it a 3D tilt-on-hover response. */
export function Tilt({ max, perspective, scale, className, children, ...props }: TiltProps) {
  const ref = useTilt<HTMLDivElement>({ max, perspective, scale });

  return (
    <div ref={ref} className={cn("will-change-transform", className)} {...props}>
      {children}
    </div>
  );
}

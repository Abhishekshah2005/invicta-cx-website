"use client";

import { cn } from "@/lib/utils";
import { useMagnetic } from "@/hooks/use-magnetic";

interface MagneticProps extends React.HTMLAttributes<HTMLDivElement> {
  /** Follow strength (0–1). */
  strength?: number;
  /** Ease-back duration in seconds. */
  duration?: number;
}

/**
 * Wrap any element to give it a magnetic hover pull. Renders an inline-block
 * wrapper so it hugs its content (ideal around buttons and links).
 */
export function Magnetic({ strength, duration, className, children, ...props }: MagneticProps) {
  const ref = useMagnetic<HTMLDivElement>({ strength, duration });

  return (
    <div ref={ref} className={cn("inline-block will-change-transform", className)} {...props}>
      {children}
    </div>
  );
}

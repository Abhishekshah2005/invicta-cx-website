import { cn } from "@/lib/utils";

interface AnimatedGridProps {
  /** Slowly pan the grid. Automatically disabled under reduced motion. */
  animate?: boolean;
  /** Fade the grid toward the edges with a radial mask. */
  fade?: boolean;
  className?: string;
}

/**
 * A subtle line grid backdrop with an optional slow pan and edge fade. Server
 * component; place as an absolutely-positioned backdrop behind content.
 */
export function AnimatedGrid({ animate = true, fade = true, className }: AnimatedGridProps) {
  return (
    <div
      aria-hidden
      className={cn(
        "absolute inset-0 -z-10 grid-lines",
        animate && "motion-safe:animate-grid-pan",
        fade && "[mask-image:radial-gradient(ellipse_at_center,black_40%,transparent_75%)]",
        className,
      )}
    />
  );
}

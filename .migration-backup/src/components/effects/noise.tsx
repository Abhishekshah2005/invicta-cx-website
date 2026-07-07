import { cn } from "@/lib/utils";

interface NoiseProps {
  /** Overlay opacity (0–1). Keep it subtle. */
  opacity?: number;
  /** Constrain to the nearest positioned ancestor instead of the viewport. */
  absolute?: boolean;
  className?: string;
}

/**
 * A tileable film-grain overlay for depth and texture. Server component — pure
 * presentation, no interactivity. Defaults to a fixed, full-viewport layer.
 */
export function Noise({ opacity = 0.05, absolute = false, className }: NoiseProps) {
  return (
    <div
      aria-hidden
      className={cn(
        "pointer-events-none inset-0 z-100 noise-overlay mix-blend-overlay",
        absolute ? "absolute" : "fixed",
        className,
      )}
      style={{ opacity }}
    />
  );
}

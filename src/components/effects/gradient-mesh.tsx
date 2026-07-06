import { cn } from "@/lib/utils";

interface GradientMeshProps {
  /** Blur the mesh for a soft, atmospheric backdrop. */
  blur?: boolean;
  className?: string;
}

/**
 * A multi-point radial gradient "mesh" background built from theme colors.
 * Server component — drop it behind a section as an absolutely-positioned
 * backdrop (`class="absolute inset-0 -z-10"` is applied by default).
 */
export function GradientMesh({ blur = true, className }: GradientMeshProps) {
  return (
    <div
      aria-hidden
      className={cn(
        "absolute inset-0 -z-10 gradient-mesh",
        blur && "[filter:blur(64px)]",
        className,
      )}
    />
  );
}

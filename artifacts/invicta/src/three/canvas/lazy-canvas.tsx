"use client";

import { Canvas } from "@react-three/fiber";

import { cn } from "@/lib/utils";
import { ClientOnly, LazyMount } from "@/components/utility";

type LazyCanvasProps = React.ComponentProps<typeof Canvas> & {
  /** Viewport pre-load margin before mounting the WebGL context. */
  rootMargin?: string;
  wrapperClassName?: string;
};

/**
 * Reusable lazy R3F canvas provider for future pages. Defers WebGL until the
 * canvas nears the viewport (LazyMount) and never renders it on the server
 * (ClientOnly) — protecting LCP and avoiding hydration cost. Drop any scene in
 * as children:
 *
 * ```tsx
 * <LazyCanvas camera={{ position: [0, 0, 6] }}>
 *   <MyScene />
 * </LazyCanvas>
 * ```
 */
export function LazyCanvas({
  children,
  rootMargin = "300px",
  wrapperClassName,
  className,
  ...canvasProps
}: LazyCanvasProps) {
  return (
    <ClientOnly>
      <LazyMount rootMargin={rootMargin} className={cn("absolute inset-0", wrapperClassName)}>
        <Canvas
          className={cn("!absolute inset-0", className)}
          dpr={[1, 1.5]}
          gl={{ antialias: true, alpha: true, powerPreference: "high-performance" }}
          {...canvasProps}
        >
          {children}
        </Canvas>
      </LazyMount>
    </ClientOnly>
  );
}

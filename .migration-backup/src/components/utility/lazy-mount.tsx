"use client";

import { useInView } from "react-intersection-observer";

import { cn } from "@/lib/utils";

interface LazyMountProps {
  children: React.ReactNode;
  /** Pre-load margin around the viewport before mounting. */
  rootMargin?: string;
  /** Keep mounted once revealed. */
  once?: boolean;
  /** Placeholder shown until in view (reserve space to avoid layout shift). */
  fallback?: React.ReactNode;
  className?: string;
}

/**
 * Defer rendering of expensive children (3D canvases, heavy media, below-fold
 * sections) until they approach the viewport. Pair with `next/dynamic` for
 * code-splitting:
 *
 * ```tsx
 * const Heavy = dynamic(() => import("./heavy"), { ssr: false });
 * <LazyMount><Heavy /></LazyMount>
 * ```
 */
export function LazyMount({
  children,
  rootMargin = "200px",
  once = true,
  fallback = null,
  className,
}: LazyMountProps) {
  const { ref, inView } = useInView({ rootMargin, triggerOnce: once });

  return (
    <div ref={ref} className={cn(className)}>
      {inView ? children : fallback}
    </div>
  );
}

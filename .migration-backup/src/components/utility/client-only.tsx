"use client";

import { useSyncExternalStore } from "react";

interface ClientOnlyProps {
  children: React.ReactNode;
  /** Rendered on the server and before hydration. */
  fallback?: React.ReactNode;
}

// A no-op store: the snapshot is `true` on the client and `false` on the server,
// so this flips to `true` exactly once after hydration — without setState.
const emptySubscribe = () => () => {};

/**
 * Render children only on the client (post-hydration). Use for widgets that must
 * not run on the server (things reading `window`, WebGL, etc.) without disabling
 * SSR for the whole route.
 */
export function ClientOnly({ children, fallback = null }: ClientOnlyProps) {
  const isClient = useSyncExternalStore(
    emptySubscribe,
    () => true,
    () => false,
  );

  return <>{isClient ? children : fallback}</>;
}

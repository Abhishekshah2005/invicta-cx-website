/**
 * Minimal, on-brand loading state — the Suspense fallback for route segments.
 * A quiet pulsing crimson mark; never a jarring spinner.
 */
export function PageLoading() {
  return (
    <div className="flex min-h-svh items-center justify-center bg-background">
      <div className="flex flex-col items-center gap-4">
        <span className="size-3 animate-pulse rounded-full bg-brand" />
        <span className="font-mono text-xs tracking-[0.2em] text-muted-foreground uppercase">
          Loading
        </span>
      </div>
    </div>
  );
}

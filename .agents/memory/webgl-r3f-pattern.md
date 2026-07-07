---
name: WebGL + React Three Fiber safe mounting
description: How to prevent WebGL context errors from crashing the page in R3F
---

# WebGL + React Three Fiber safe mounting

## The rule
Always probe WebGL availability **before** mounting an R3F `<Canvas>`. Wrapping Canvas in a React ErrorBoundary is insufficient because Three.js's `WebGLRenderer` constructor throws inside a `useLayoutEffect`, not during React render — so ErrorBoundary never catches it.

## Why
The Vite runtime-error overlay and uncaught error handlers see the throw before React's reconciler, crashing the whole page in dev and potentially in production on low-end/sandboxed devices.

## How to apply
```tsx
function useWebGLSupported(): boolean | null {
  const [ok, setOk] = useState<boolean | null>(null);
  useEffect(() => {
    try {
      const c = document.createElement("canvas");
      const ctx = c.getContext("webgl2") || c.getContext("webgl");
      setOk(!!ctx);
    } catch { setOk(false); }
  }, []);
  return ok;
}

export function GlobeCanvas() {
  const webglOk = useWebGLSupported();
  if (webglOk === null) return null;      // still probing
  if (!webglOk) return <GlobeFallback />; // no GPU
  return (
    <GlobeErrorBoundary fallback={<GlobeFallback />}>
      <Canvas ...><GlobeScene /></Canvas>
    </GlobeErrorBoundary>
  );
}
```

Keep the ErrorBoundary as defence-in-depth for unexpected mid-session context loss, but the probe is the primary guard.

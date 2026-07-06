# Local fonts

Drop self-hosted variable font files (`.woff2` preferred) here, then register
them in [`src/lib/fonts.ts`](../../lib/fonts.ts) with `next/font/local`:

```ts
import localFont from "next/font/local";

export const fontDisplay = localFont({
  src: "../assets/fonts/display-variable.woff2",
  variable: "--font-display",
  display: "swap",
  weight: "400 800",
  preload: true,
});
```

Then add `fontDisplay.variable` to `fontVariables` and use `font-display` in
Tailwind (mapped via `--font-display` in `styles/fluid.css`).

`next/font` self-hosts and preloads automatically — no external requests, no CLS.

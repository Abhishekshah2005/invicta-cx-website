# Invicta — Premium Website Foundation

A production-grade foundation for a highly-animated, award-quality marketing
site. **No pages are built yet** — this repo contains the fully-wired stack,
architecture, and reusable animation/effects/3D systems to build on.

## Stack

| Area      | Choice                                                                         |
| --------- | ------------------------------------------------------------------------------ |
| Framework | Next.js 16 (App Router, Turbopack) · React 19 · TypeScript (strict)            |
| Styling   | Tailwind CSS v4 (CSS-first) · shadcn/ui (Radix base) · CVA · tailwind-merge    |
| Animation | GSAP 3.15 (+ ScrollTrigger, **SplitText**, **ScrollSmoother**, Flip, Observer) |
| Motion    | Motion (motion.dev) · Lenis smooth scroll · `@gsap/react`                      |
| 3D        | three · @react-three/fiber v9 · drei · leva · meshline                         |
| Media     | next/image · sharp · SVGR (SVG-as-component) · blur placeholders               |
| Tooling   | ESLint 9 · Prettier · Husky · lint-staged · zod env validation                 |

> **GSAP licensing:** as of GSAP 3.13 all plugins (SplitText, ScrollSmoother,
> MorphSVG, etc.) are free. They're registered in `src/lib/gsap.ts`.

## Scripts

```bash
npm run dev           # start dev server (Turbopack)
npm run build         # production build
npm run start         # serve production build
npm run typecheck     # tsc --noEmit
npm run lint          # eslint
npm run format        # prettier --write
```

## Architecture (`src/`)

```
app/          Next.js App Router (layout, page, globals.css)
components/    UI components
  ├─ ui/        shadcn primitives (CLI-managed — don't hand-edit)
  ├─ effects/   Magnetic, Tilt, Parallax, Marquee, Spotlight, CustomCursor,
  │             Noise, GradientMesh, AnimatedGrid
  ├─ media/     BlurImage (progressive next/image)
  ├─ analytics/ WebVitals
  └─ utility/   ClientOnly, LazyMount
animations/   Unified reveal API — TextReveal, ImageReveal + re-exported Motion
motion/       Motion (motion.dev) variants & components (Reveal, Stagger, …)
gsap/         GSAP timeline factories + SplitText helpers
three/        3D system — canvas/ lights/ materials/ controls/ loaders/ shaders/ hooks/
hooks/        useParallax, useMagnetic, useTilt, useTextReveal, useLenis, useMediaQuery, …
providers/    AppProviders → MotionConfig + SmoothScrollProvider (Lenis ⇄ GSAP)
lib/          gsap, fonts, seo, image, utils (cn)
constants/    animation tokens (EASE/DURATION/STAGGER), breakpoints, site
utils/        pure helpers (math, dom, string)
layouts/      Container, Section primitives
sections/     page sections (empty — build here)
styles/       fluid.css (fluid type scale), effects.css (glass/noise/grid/keyframes)
assets/       icons/ images/ videos/ fonts/ (importable assets)
env.ts        validated environment variables
```

## Conventions

- **Import GSAP from `@/lib/gsap`** (never `gsap` directly) — plugins are
  registered there once.
- **Animation tokens** live in `@/constants/animation`. Pull easing/duration
  from there so motion stays coherent; use `ease(key)` for Motion tuples.
- **Reduced motion** is respected everywhere (hooks bail out; `MotionConfig
reducedMotion="user"`; CSS `motion-safe:` / `prefers-reduced-motion`).
- **Smooth scroll:** Lenis is the active engine, synced to the single GSAP RAF
  ticker and `ScrollTrigger`. ScrollSmoother is registered and ready to swap in.
- **SVGs** imported from `src` become React components (SVGR); SVGs in `/public`
  stay URL-served.
- **Env:** access via `import { env } from "@/env"`, not `process.env`.

## Adding shadcn components

```bash
npx shadcn@latest add dialog dropdown-menu ...
```

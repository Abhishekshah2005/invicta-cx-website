# Invicta Design System (Phase 2)

The single reference for tokens, type, and components. Language: **"Editorial
Precision"** — crimson · ink · ivory, warm neutrals, serif display + grotesk body.
Token architecture is three-layer: **primitive → semantic → component**
(`src/app/globals.css`).

## Color

**Primitives** (utilities like `bg-crimson-600`, `text-ink`, `bg-ivory`):

- `crimson-50…950` — brand scale; **`crimson-600` ≈ #B4121B** is the brand.
- `ink` (warm near-black), `ivory` (warm off-white).

**Semantic** (theme-switchable; light default, `.dark` = immersive register):

| Token                                   | Light                     | Use                          |
| --------------------------------------- | ------------------------- | ---------------------------- |
| `background` / `foreground`             | ivory / ink               | page canvas & text           |
| `primary`                               | crimson-600               | primary buttons              |
| `brand` / `brand-strong` / `brand-soft` | crimson-600 / -700 / -100 | brand accents, hovers, tints |
| `muted` / `muted-foreground`            | warm neutral              | secondary surfaces & text    |
| `border` / `input` / `ring`             | warm neutral / crimson    | outlines, focus              |
| `card` / `popover`                      | white                     | raised surfaces              |

**Rule:** red is a scalpel — mostly ink-on-ivory with crimson as the signature
accent. Contrast is AA-aware; full validation is a Phase 7 audit gate.

## Typography

- `font-display` — **Fraunces** (variable serif, opsz axis). Headings default to
  it globally. Editorial warmth + heritage.
- `font-sans` — **Geist** (body/UI).
- `font-mono` — **Geist Mono** (KPIs, eyebrows, labels).

**Fluid scale** (`text-fluid-*`): `sm · base · lg · xl · 2xl · 3xl · display`
(all `clamp()`-based). Helpers: `text-balance`, `text-pretty`.

## Space · Radius · Elevation · Motion tokens

- **Radius:** `rounded-sm…4xl` from `--radius` (0.625rem base).
- **Shadow:** `shadow-xs…xl` (warm, soft) + `shadow-crimson` (brand glow).
- **Easing utilities:** `ease-out-expo`, `ease-out-quint`, `ease-in-out-quint`.
- **Animation tokens** (`@/constants/animation`): `EASE`, `GSAP_EASE`,
  `DURATION`, `STAGGER`, `SPRING`, `DISTANCE`, + `ease(key)` for Motion.
- **Breakpoints** (`@/constants/breakpoints`): sm 640 · md 768 · lg 1024 · xl
  1280 · 2xl 1536, with `up()` / `down()` + `useBreakpoint()`.

## Animation architecture (`@/animations`) — GSAP recipes

Pure, reduced-motion-aware factories (target + options → tween/timeline):
`fade` (fadeIn/Up/Stagger) · `textReveal` · `imageReveal` · `parallax` · `hero` ·
`cards` · `horizontal` · `stack` · `loader` · `pageTransition`.

Consumed by hooks (`@/hooks`: `useTextReveal`, `useParallax`, `useMagnetic`,
`useTilt`, `useScrollProgress`, `useLenis`, …) and reveal components. **GSAP owns
scroll storytelling; Motion (`@/motion`) owns component micro-interactions.**

## Component library (`@/components`)

- **Brand:** `Eyebrow`, `SectionHeading`, `Stat` (GSAP count-up), `Card` (Motion
  hover), `Faq` (Radix accordion), `AnimatedUnderline` (Motion), `MagneticButton`.
- **Reveal:** `TextReveal`, `ImageReveal`.
- **Effects:** `Magnetic`, `Tilt`, `Parallax`, `Marquee`, `Spotlight`,
  `CustomCursor`, `Noise`, `GradientMesh`, `AnimatedGrid`.
- **Media/Utility:** `BlurImage`, `LazyMount`, `ClientOnly`, `WebVitals`.
- **shadcn primitives** (`@/components/ui`, Radix base, crimson-tokened): button
  (+ `brand`/`brandOutline` variants, `xl` size), accordion, navigation-menu,
  dropdown-menu, tooltip, sheet, separator, input, label, textarea.
- **Layout:** `Container`, `Section`.

## 3D (`@/three`) — architecture only

`canvas` (`Scene`) · `scenes` · `lights` (`StudioLights`) · `materials`
(`ShaderPlane`, presets) · `camera` (`CAMERA_PRESETS`) · `controls`
(`CameraControls`) · `loaders` (`Model`) · `shaders` · `effects` · `hooks` ·
`utils` (`disposeObject`). Reserved for the Gaming flagship.

## Accessibility & responsive standards

- WCAG 2.2 AA target; visible `:focus-visible` ring; semantic headings.
- `prefers-reduced-motion` honored in every recipe/hook **and** as a CSS safety
  net in `globals.css`.
- Mobile-first; fluid type; touch-friendly sizing.

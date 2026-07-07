# IND-FIN-01 — FinTech Industry Hero

**Phase D · FinTech · Hero · Image · HERO-STILL (16:9) · NOT STARTED**

## Purpose

"In finance, trust is the product." Emotion: composure, security, gravity —
handling money and identity with precision. Conversion: makes a regulated buyer
feel their trust is safe in Invicta's hands.

## Nano Banana Prompt

> A cinematic full-bleed photograph of a financial-operations specialist at a
> secure workstation — focused and composed, the gravity of handling money and
> identity. Soft daylight with controlled shadow (chiaroscuro-lite), cool-warm
> monitor glow, shallow depth of field, a soft-focus secure operation behind, one
> restrained crimson accent. Muted charcoal wardrobe. Real, precise micro-
> expression. Shot on ARRI Alexa, 50–85mm prime, f/2; warm-editorial grade with
> cooler precise midtones and controlled shadow for a dark full-bleed hero (warm
> ink shadows, ivory highlights, one crimson accent); documentary candor, negative
> space lower-left; fine film grain, soft roll-off; photorealistic 4K, ultra-
> detailed skin texture.

**Negative Prompt**

> stock photo, posing, fake smile, thumbs up, cubicle grid, RGB neon, teal-orange,
> HDR, plastic skin, readable data/dashboards, logos, watermark, text, 3d render,
> extra fingers.

## Flow Prompt

NOT REQUIRED.

## Technical Specifications

- 16:9 · D 2400×1350 · M 1080×1350 (4:5) · Safe area subject central-right, lower-left dark for type
- Crops D 16:9 · T 3:2 · M 4:5 (`60% center`) · AVIF 55 / WebP 72 / JPG 82 · AVIF+WebP+JPG

## Filename & Folder

`public/assets/industries/fintech/hero/hero.jpg`

## Website Integration

- **Page:** `/industries/fintech` · **Component:** `cinematic-hero.tsx` via `content/industries/fintech.ts` hero. · **Placeholder:** CinematicHero backdrop.
- **GSAP:** CinematicHero `PARALLAX-BED` + masked headline. · **Priority:** true (LCP) · **Preload:** eager · **Lazy:** no.

## Accessibility

- **Alt:** "A fintech operations specialist at a secure workstation, composed and precise." · **SEO:** `invicta-fintech-hero.jpg`.

## Optimization

LCP priority · CLS reserved · `fill` + `sizes="100vw"` · blurDataURL · srcset auto.

## Review Checklist

- [ ] Grade in dark hero - [ ] Headline legible - [ ] Cropping - [ ] Parallax - [ ] Desktop - [ ] Laptop - [ ] Tablet - [ ] Mobile

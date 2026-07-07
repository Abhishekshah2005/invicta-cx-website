# IND-TEC-01 — Technology Industry Hero

**Phase D · Technology · Hero · Image · HERO-STILL (16:9) · NOT STARTED**

## Purpose

"Complex products deserve support that understands them." Emotion: precise,
expert, cool-calm depth + platform safety. Conversion: proves technical fluency
to technology buyers.

## Nano Banana Prompt

> A cinematic full-bleed photograph of a technology support specialist
> troubleshooting across multiple monitors in cool daylight — composed and expert,
> methodical, diagnostics glowing (abstract, unreadable). Cool-warm mixed light,
> shallow depth of field, a soft-focus platform operation behind, one restrained
> crimson accent. Muted charcoal wardrobe. Real focused micro-expression. Shot on
> ARRI Alexa, 35–50mm prime, f/2; warm-editorial grade with cooler midtones and
> controlled shadow for a dark full-bleed hero (warm ink shadows, ivory highlights,
> one crimson accent); documentary candor, negative space lower-left; fine film
> grain, soft roll-off; photorealistic 4K, ultra-detailed texture.

**Negative Prompt**

> stock photo, posing, fake smile, thumbs up, cubicle grid, RGB neon, teal-orange,
> HDR, plastic skin, readable logs/dashboards, logos, watermark, text, 3d render,
> extra fingers.

## Flow Prompt

NOT REQUIRED.

## Technical Specifications

- 16:9 · D 2400×1350 · M 1080×1350 · Safe area subject central-right, lower-left dark for type
- Crops D 16:9 · T 3:2 · M 4:5 (`60% center`) · AVIF 55 / WebP 72 / JPG 82 · AVIF+WebP+JPG

## Filename & Folder

`public/assets/industries/technology/hero/hero.jpg`

## Website Integration

- **Page:** `/industries/technology` · **Component:** `cinematic-hero.tsx` via `content/industries/technology.ts` hero. · **Placeholder:** CinematicHero backdrop.
- **GSAP:** CinematicHero `PARALLAX-BED` + masked headline. · **Priority:** true (LCP) · **Preload:** eager · **Lazy:** no.

## Accessibility

- **Alt:** "A technology support specialist troubleshooting across monitors, composed and expert." · **SEO:** `invicta-technology-hero.jpg`.

## Optimization

LCP priority · CLS reserved · `fill` + `sizes="100vw"` · blurDataURL · srcset auto.

## Review Checklist

- [ ] Grade in dark hero - [ ] Headline legible - [ ] Cropping - [ ] Parallax - [ ] Desktop - [ ] Laptop - [ ] Tablet - [ ] Mobile

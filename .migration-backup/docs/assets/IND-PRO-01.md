# IND-PRO-01 — Professional Services Industry Hero

**Phase D · Professional Services · Hero · Image · HERO-STILL (16:9) · NOT STARTED** — _most luxury-editorial industry frame._

## Purpose

"Your reputation is the product." Emotion: refined, discreet, white-glove.
Conversion: signals the polish and discretion a professional firm demands.

## Nano Banana Prompt

> A cinematic full-bleed photograph of a client-services professional in a refined
> office — composed and attentive, discreet white-glove energy, warm directional
> light with elegant shadow, premium materials, shallow depth of field, one
> restrained crimson accent. Muted charcoal/ink tailored-casual wardrobe. Real,
> considered micro-expression. The most luxury-magazine frame in the set. Shot on
> ARRI Alexa, 85mm prime, f/1.8; rich warm-editorial grade with controlled shadow
> for a dark full-bleed hero (warm ink shadows, ivory highlights, one crimson
> accent); refined documentary composition, negative space lower-left; fine film
> grain, soft roll-off; photorealistic 4K, ultra-detailed skin and material texture.

**Negative Prompt**

> stock photo, posing, fake smile, thumbs up, handshake, boardroom cliché, cubicle
> grid, RGB neon, teal-orange, HDR, plastic skin, readable screens, logos,
> watermark, text, 3d render, extra fingers.

## Flow Prompt

NOT REQUIRED.

## Technical Specifications

- 16:9 · D 2400×1350 · M 1080×1350 · Safe area subject central-right, lower-left dark for type
- Crops D 16:9 · T 3:2 · M 4:5 (`60% center`) · AVIF 55 / WebP 72 / JPG 82 · AVIF+WebP+JPG

## Filename & Folder

`public/assets/industries/professional-services/hero/hero.jpg`

## Website Integration

- **Page:** `/industries/professional-services` · **Component:** `cinematic-hero.tsx` via `content/industries/professional-services.ts` hero. · **Placeholder:** CinematicHero backdrop.
- **GSAP:** CinematicHero `PARALLAX-BED` + masked headline. · **Priority:** true (LCP) · **Preload:** eager · **Lazy:** no.

## Accessibility

- **Alt:** "A client-services professional in a refined office, composed and attentive." · **SEO:** `invicta-professional-services-hero.jpg`.

## Optimization

LCP priority · CLS reserved · `fill` + `sizes="100vw"` · blurDataURL · srcset auto.

## Review Checklist

- [ ] Grade in dark hero - [ ] Headline legible - [ ] Cropping - [ ] Parallax - [ ] Desktop - [ ] Laptop - [ ] Tablet - [ ] Mobile

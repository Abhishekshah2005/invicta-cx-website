# IND-ECO-01 — E-commerce & Retail Industry Hero

**Phase D · E-commerce · Hero · Image · HERO-STILL (16:9) · NOT STARTED**

## Purpose

"Every question is a sale about to happen — or about to be lost." Emotion:
warmth + urgency, revenue on the line. Conversion: frames support as a revenue
channel for retail buyers.

## Nano Banana Prompt

> A cinematic full-bleed photograph of an e-commerce support specialist helping a
> shopper over live chat — warm and quick, present at the point of purchase intent.
> Bright modern light with cool-warm monitor glow, shallow depth of field, a soft-
> focus retail-support operation behind, one restrained crimson accent. Muted
> charcoal wardrobe. Screens show abstract soft commerce UI. Real, engaged micro-
> expression. Shot on ARRI Alexa, 50mm prime, f/2; warm-editorial grade with
> controlled shadow for a dark full-bleed hero (warm ink shadows, ivory highlights,
> one crimson accent); documentary candor, negative space lower-left; fine film
> grain, soft roll-off; photorealistic 4K, ultra-detailed texture.

**Negative Prompt**

> stock photo, posing, fake smile, thumbs up, cubicle grid, RGB neon, teal-orange,
> HDR, plastic skin, readable storefront/screens, logos, brand names, watermark,
> text, 3d render, extra fingers.

## Flow Prompt

NOT REQUIRED.

## Technical Specifications

- 16:9 · D 2400×1350 · M 1080×1350 · Safe area subject central-right, lower-left dark for type
- Crops D 16:9 · T 3:2 · M 4:5 (`60% center`) · AVIF 55 / WebP 72 / JPG 82 · AVIF+WebP+JPG

## Filename & Folder

`public/assets/industries/ecommerce/hero/hero.jpg`

## Website Integration

- **Page:** `/industries/ecommerce` · **Component:** `cinematic-hero.tsx` via `content/industries/ecommerce.ts` hero. · **Placeholder:** CinematicHero backdrop.
- **GSAP:** CinematicHero `PARALLAX-BED` + masked headline. · **Priority:** true (LCP) · **Preload:** eager · **Lazy:** no.

## Accessibility

- **Alt:** "An e-commerce support specialist helping a shopper over live chat." · **SEO:** `invicta-ecommerce-hero.jpg`.

## Optimization

LCP priority · CLS reserved · `fill` + `sizes="100vw"` · blurDataURL · srcset auto.

## Review Checklist

- [ ] Grade in dark hero - [ ] Headline legible - [ ] Cropping - [ ] Parallax - [ ] Desktop - [ ] Laptop - [ ] Tablet - [ ] Mobile

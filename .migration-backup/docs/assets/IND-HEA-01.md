# IND-HEA-01 — Healthcare Industry Hero

**Phase D · Healthcare · Hero · Image · HERO-STILL (16:9) · NOT STARTED**

## Purpose

"Patients want to be cared for." Emotion: compassion, calm, safety. Conversion:
reassures healthcare buyers that patients meet empathy, not a queue.

## Nano Banana Prompt

> A cinematic full-bleed photograph of a healthcare patient-support specialist
> mid-call in a calm, warmly lit room — attentive, genuinely caring, soft daylight,
> a soft-focus calm environment behind, one restrained crimson accent. Higher-key,
> ivory-forward but graded to sit in a dark full-bleed hero. Muted oat/stone
> wardrobe. Real reassuring micro-expression. Shot on ARRI Alexa, 50–85mm prime,
> f/1.8; warm-editorial grade (warm ink shadows, ivory highlights, muted midtones,
> one crimson accent); tender documentary intimacy, negative space lower-left;
> fine film grain, soft roll-off; photorealistic 4K, ultra-detailed skin texture.

**Negative Prompt**

> stock photo, posing, fake smile, thumbs up, clinical stock, cubicle grid, RGB
> neon, teal-orange, HDR, plastic skin, readable EHR/screens, logos, watermark,
> text, 3d render, extra fingers.

## Flow Prompt

NOT REQUIRED.

## Technical Specifications

- 16:9 · D 2400×1350 · M 1080×1350 · Safe area face central-right, lower-left dark for type
- Crops D 16:9 · T 3:2 · M 4:5 (`60% center`, face safe) · AVIF 55 / WebP 72 / JPG 82 · AVIF+WebP+JPG

## Filename & Folder

`public/assets/industries/healthcare/hero/hero.jpg`

## Website Integration

- **Page:** `/industries/healthcare` · **Component:** `cinematic-hero.tsx` via `content/industries/healthcare.ts` hero. · **Placeholder:** CinematicHero backdrop.
- **GSAP:** CinematicHero `PARALLAX-BED` + masked headline. · **Priority:** true (LCP) · **Preload:** eager · **Lazy:** no.

## Accessibility

- **Alt:** "A healthcare patient-support specialist on a call, attentive and caring." · **SEO:** `invicta-healthcare-hero.jpg`.

## Optimization

LCP priority · CLS reserved · `fill` + `sizes="100vw"` · blurDataURL · srcset auto.

## Review Checklist

- [ ] Grade in dark hero - [ ] Headline legible - [ ] Cropping (face safe) - [ ] Parallax - [ ] Desktop - [ ] Laptop - [ ] Tablet - [ ] Mobile

# SVC-PH-01 — Phone Support Hero

**Phase C · Phone Support · Hero · Image · HERO-STILL (16:9) · NOT STARTED**

## Purpose

For the moments that need a human voice. Emotion: reassurance, calm ownership,
empathy under pressure. Conversion: sells the highest-empathy channel for urgent,
high-value moments.

## Nano Banana Prompt

> A cinematic full-bleed photograph of a phone-support specialist on a headset
> listening intently — calm, reassuring, taking ownership of a high-stakes moment.
> Soft warm key + gentle screen glow, shallow depth of field, a soft-focus
> operation behind, one restrained crimson accent. Muted charcoal wardrobe. A real
> micro-expression of steady empathy — leaning in, listening, not posing. Shot on
> ARRI Alexa, 85mm prime, f/1.8; warm-editorial grade with controlled shadow for a
> dark full-bleed hero (ink shadows, ivory highlights, muted midtones, one crimson
> accent); cinematic documentary intimacy, negative space lower-left; fine film
> grain, soft roll-off; photorealistic 4K, ultra-detailed skin texture.

**Negative Prompt**

> stock photo, posing, fake smile, thumbs up, headset thumbs-up, cubicle grid, RGB
> neon, teal-orange, HDR, plastic skin, readable screens, logos, watermark, text,
> 3d render, extra fingers.

## Flow Prompt

NOT REQUIRED.

## Technical Specifications

- **Aspect:** 16:9 · D 2400×1350 · M 1080×1350 · **Safe area:** face central-right; lower-left dark for type
- Crops D 16:9 · T 3:2 · M 4:5 (`60% center`, face safe) · Compression AVIF 55 / WebP 72 / JPG 82 · Formats AVIF+WebP+JPG

## Filename & Folder

`public/assets/services/phone-support/hero/hero.jpg`

## Website Integration

- **Page:** `/services/phone-support` · **Component:** `cinematic-hero.tsx` via `content/services/phone-support.ts` hero. · **Placeholder:** CinematicHero backdrop.
- **GSAP:** CinematicHero `PARALLAX-BED` + masked headline. · **Priority:** true (LCP) · **Preload:** eager · **Lazy:** no.

## Accessibility

- **Alt:** "A phone-support specialist on a headset, listening with calm empathy." · **SEO filename:** `invicta-phone-support-hero.jpg`.

## Optimization

LCP priority · CLS reserved · `fill` + `sizes="100vw"` · blurDataURL · srcset auto.

## Review Checklist

- [ ] Grade in dark hero - [ ] Headline legible - [ ] Cropping (face safe) - [ ] Parallax - [ ] Desktop - [ ] Laptop - [ ] Tablet - [ ] Mobile

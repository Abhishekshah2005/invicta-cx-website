# IND-REC-01 — Recruitment Industry Hero

**Phase D · Recruitment · Hero · Image · HERO-STILL (16:9) · NOT STARTED**

## Purpose

"Every candidate is a customer — and a review of your brand." Emotion: hopeful,
human, momentum. Conversion: sells candidate-experience as employer-brand
protection.

## Nano Banana Prompt

> A cinematic full-bleed photograph of a recruitment coordinator mid-conversation
> in a bright modern office — warm, optimistic, focused, a sense of someone being
> looked after. Soft natural light, shallow depth of field, a soft-focus modern
> workspace behind, one restrained crimson accent. Elevated-casual muted wardrobe.
> Real, hopeful micro-expression (not a toothpaste grin). Shot on ARRI Alexa, 50mm
> prime, f/2; warm-editorial higher-key grade with controlled shadow for a dark
> full-bleed hero (warm ink shadows, ivory highlights, one crimson accent);
> documentary candor, negative space lower-left; fine film grain, soft roll-off;
> photorealistic 4K, ultra-detailed skin texture.

**Negative Prompt**

> stock photo, posing, fake smile, toothpaste grin, thumbs up, handshake, cubicle
> grid, RGB neon, teal-orange, HDR, plastic skin, readable ATS/screens, logos,
> watermark, text, 3d render, extra fingers.

## Flow Prompt

NOT REQUIRED.

## Technical Specifications

- 16:9 · D 2400×1350 · M 1080×1350 · Safe area subject central-right, lower-left dark for type
- Crops D 16:9 · T 3:2 · M 4:5 (`60% center`, face safe) · AVIF 55 / WebP 72 / JPG 82 · AVIF+WebP+JPG

## Filename & Folder

`public/assets/industries/recruitment/hero/hero.jpg`

## Website Integration

- **Page:** `/industries/recruitment` · **Component:** `cinematic-hero.tsx` via `content/industries/recruitment.ts` hero. · **Placeholder:** CinematicHero backdrop.
- **GSAP:** CinematicHero `PARALLAX-BED` + masked headline. · **Priority:** true (LCP) · **Preload:** eager · **Lazy:** no.

## Accessibility

- **Alt:** "A recruitment coordinator mid-conversation, warm and optimistic." · **SEO:** `invicta-recruitment-hero.jpg`.

## Optimization

LCP priority · CLS reserved · `fill` + `sizes="100vw"` · blurDataURL · srcset auto.

## Review Checklist

- [ ] Grade in dark hero - [ ] Headline legible - [ ] Cropping (face safe) - [ ] Parallax - [ ] Desktop - [ ] Laptop - [ ] Tablet - [ ] Mobile

# SVC-EM-01 — Email Support Hero

**Phase C · Email Support · Hero · Image · HERO-STILL (16:9) · NOT STARTED**

## Purpose

Where thoroughness becomes trust — the considered written reply. Emotion:
literate calm, craft. Conversion: reassures that complex, sensitive cases are
handled completely, not deflected.

## Nano Banana Prompt

> A cinematic full-bleed photograph of a support specialist composing a careful
> written reply at a warmly lit desk — calm, deliberate, a quiet literate
> workspace with paper and a screen (abstract UI). Warm desk lamp + soft window,
> shallow depth of field, layered soft background, one restrained crimson accent.
> Muted oat/ink wardrobe. Real, thoughtful micro-expression. Shot on ARRI Alexa,
> 50–85mm prime, f/1.8; warm-editorial low-contrast grade with controlled shadow
> for a dark full-bleed hero (ink shadows, ivory highlights, muted midtones, one
> crimson accent); documentary candor, negative space lower-left; fine film grain,
> soft roll-off; photorealistic 4K, ultra-detailed texture.

**Negative Prompt**

> stock photo, posing, fake smile, thumbs up, cubicle grid, RGB neon, teal-orange,
> HDR, plastic skin, readable email text, logos, watermark, text, 3d render, extra
> fingers.

## Flow Prompt

NOT REQUIRED.

## Technical Specifications

- **Aspect:** 16:9 · D 2400×1350 · M 1080×1350 · **Safe area:** subject central-right; lower-left dark for type
- Crops D 16:9 · T 3:2 · M 4:5 (`60% center`) · Compression AVIF 55 / WebP 72 / JPG 82 · Formats AVIF+WebP+JPG

## Filename & Folder

`public/assets/services/email-support/hero/hero.jpg`

## Website Integration

- **Page:** `/services/email-support` · **Component:** `cinematic-hero.tsx` via `content/services/email-support.ts` hero. · **Placeholder:** CinematicHero backdrop.
- **GSAP:** CinematicHero `PARALLAX-BED` + masked headline. · **Priority:** true (LCP) · **Preload:** eager · **Lazy:** no.

## Accessibility

- **Alt:** "A specialist composing a careful written reply at a warm desk." · **SEO filename:** `invicta-email-support-hero.jpg`.

## Optimization

LCP priority · CLS reserved · `fill` + `sizes="100vw"` · blurDataURL · srcset auto.

## Review Checklist

- [ ] Grade in dark hero - [ ] Headline legible - [ ] Cropping - [ ] Parallax - [ ] Desktop - [ ] Laptop - [ ] Tablet - [ ] Mobile

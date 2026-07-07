# SVC-LC-01 — Live Chat Hero

**Phase C · Live Chat · Hero · Image · HERO-STILL (16:9) · NOT STARTED**

## Purpose

Speed at the point of intent. Emotion: sharp, present, fast-but-calm. Conversion:
signals the real-time competence that turns browsers into buyers.

## Nano Banana Prompt

> A cinematic full-bleed photograph of a live-chat support specialist typing
> quickly and precisely at a bright modern desk, sharp and present, a chat
> interface glowing on screen (abstract, unreadable) — kinetic yet calm. Bright
> daylight with cool-warm monitor fill, shallow depth of field, layered soft
> background, one restrained crimson accent. Muted charcoal wardrobe. Shot on ARRI
> Alexa, 50mm prime, f/2; warm-editorial grade with controlled shadow for a dark
> full-bleed hero (ink shadows, ivory highlights, muted midtones, one crimson
> accent); documentary candor, negative space lower-left; fine film grain, soft
> roll-off; photorealistic 4K, ultra-detailed hands and skin texture.

**Negative Prompt**

> stock photo, posing, fake smile, thumbs up, cubicle grid, RGB keyboard LEDs,
> teal-orange, HDR, plastic skin, readable chat text, logos, watermark, text, 3d
> render, extra fingers, distorted hands.

## Flow Prompt

NOT REQUIRED.

## Technical Specifications

- **Aspect:** 16:9 · D 2400×1350 · M 1080×1350 · **Safe area:** subject + hands in frame; lower-left dark for type
- Crops D 16:9 · T 3:2 · M 4:5 (`60% center`) · Compression AVIF 55 / WebP 72 / JPG 82 · Formats AVIF+WebP+JPG

## Filename & Folder

`public/assets/services/live-chat/hero/hero.jpg`

## Website Integration

- **Page:** `/services/live-chat` · **Component:** `cinematic-hero.tsx` via `content/services/live-chat.ts` hero. · **Placeholder:** CinematicHero backdrop.
- **GSAP:** CinematicHero `PARALLAX-BED` + masked headline. · **Priority:** true (LCP) · **Preload:** eager · **Lazy:** no.

## Accessibility

- **Alt:** "A live-chat specialist typing quickly at a bright modern desk." · **SEO filename:** `invicta-live-chat-hero.jpg`.

## Optimization

LCP priority · CLS reserved · `fill` + `sizes="100vw"` · blurDataURL · srcset auto.

## Review Checklist

- [ ] Grade in dark hero - [ ] Headline legible - [ ] Cropping (hands) - [ ] Parallax - [ ] Desktop - [ ] Laptop - [ ] Tablet - [ ] Mobile

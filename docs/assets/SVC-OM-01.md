# SVC-OM-01 — Omnichannel Support Hero

**Phase C · Omnichannel Support · Hero · Image · HERO-STILL (16:9) · NOT STARTED**

## Purpose

One seamless conversation across every channel. Emotion: fluency, connectedness,
"nothing gets dropped." Conversion: sells the unified-experience promise at a
glance.

## Nano Banana Prompt

> A cinematic full-bleed photograph of a support specialist moving fluidly between
> chat, email, and voice on one clean multi-screen setup — calm and connected,
> mid-flow, a light headset. Soft daylight + cool-warm monitor glow, layered
> soft-focus operation behind, one restrained crimson accent. Muted stone/ink
> wardrobe. Screens show only abstract soft UI. Shot on ARRI Alexa, 35mm prime,
> f/2; warm-editorial grade with controlled shadow for a dark full-bleed hero (ink
> shadows, ivory highlights, muted midtones, one crimson accent); documentary
> candor, luxury-magazine composition, negative space lower-left; fine film grain,
> soft roll-off; photorealistic 4K, ultra-detailed texture.

**Negative Prompt**

> stock photo, posing, fake smile, thumbs up, cubicle grid, RGB neon, teal-orange,
> HDR, plastic skin, readable dashboards, logos, watermark, text, 3d render, extra
> fingers.

## Flow Prompt

NOT REQUIRED.

## Technical Specifications

- **Aspect:** 16:9 · D 2400×1350 · M 1080×1350 · **Safe area:** subject central-right; lower-left dark for type
- Crops D 16:9 · T 3:2 · M 4:5 (`60% center`) · Compression AVIF 55 / WebP 72 / JPG 82 · Formats AVIF+WebP+JPG

## Filename & Folder

`public/assets/services/omnichannel-support/hero/hero.jpg`

## Website Integration

- **Page:** `/services/omnichannel-support` · **Component:** `cinematic-hero.tsx` via `content/services/omnichannel-support.ts` hero. · **Placeholder:** CinematicHero backdrop.
- **GSAP:** CinematicHero `PARALLAX-BED` + masked headline. · **Priority:** true (LCP) · **Preload:** eager · **Lazy:** no.

## Accessibility

- **Alt:** "A specialist handling chat, email, and voice from one unified workspace." · **SEO filename:** `invicta-omnichannel-support-hero.jpg`.

## Optimization

LCP priority · CLS reserved · `fill` + `sizes="100vw"` · blurDataURL · srcset auto.

## Review Checklist

- [ ] Grade in dark hero - [ ] Headline legible - [ ] Cropping - [ ] Parallax - [ ] Desktop - [ ] Laptop - [ ] Tablet - [ ] Mobile

# IND-TRA-01 — Travel & Hospitality Industry Hero

**Phase D · Travel · Hero · Image · HERO-STILL (16:9) · NOT STARTED**

## Purpose

"When plans fall apart, a calm human is the whole experience." Emotion:
composure-in-the-storm, global, reassuring at 2am. Conversion: sells 24/7
multilingual ownership through disruption.

## Nano Banana Prompt

> A cinematic full-bleed photograph of a travel-support specialist on a headset at
> a darkened night desk — calm and composed, a softly glowing out-of-focus
> departure board and world map behind, a sense of quiet control at 2am. Low warm
> key + screen glow, shallow depth of field, one crimson practical in the bokeh.
> Muted charcoal wardrobe. Real steady micro-expression of ownership. Shot on ARRI
> Alexa, 35–85mm prime, f/1.8; nocturnal warm-editorial grade (warm ink shadows,
> ivory speculars, one crimson accent); cinematic documentary, negative space
> lower-left; fine film grain, soft roll-off; photorealistic 4K, ultra-detailed
> skin texture.

**Negative Prompt**

> stock photo, posing, fake smile, thumbs up, cubicle grid, RGB neon, teal-orange,
> HDR, plastic skin, readable screens/maps text, logos, watermark, text, 3d
> render, extra fingers.

## Flow Prompt

NOT REQUIRED.

## Technical Specifications

- 16:9 · D 2400×1350 · M 1080×1350 · Safe area subject lower-left/centre, keep dark zone for type
- Crops D 16:9 · T 3:2 · M 4:5 (`center`, face safe) · AVIF 55 / WebP 72 / JPG 82 · AVIF+WebP+JPG

## Filename & Folder

`public/assets/industries/travel/hero/hero.jpg`

## Website Integration

- **Page:** `/industries/travel` · **Component:** `cinematic-hero.tsx` via `content/industries/travel.ts` hero. · **Placeholder:** CinematicHero backdrop.
- **GSAP:** CinematicHero `PARALLAX-BED` + masked headline. · **Priority:** true (LCP) · **Preload:** eager · **Lazy:** no.

## Accessibility

- **Alt:** "A travel-support specialist on a headset at night, calm and in control." · **SEO:** `invicta-travel-hero.jpg`.

## Optimization

LCP priority · CLS reserved · `fill` + `sizes="100vw"` · blurDataURL · srcset auto.

## Review Checklist

- [ ] Grade in dark hero - [ ] Headline legible - [ ] Cropping - [ ] Parallax - [ ] Desktop - [ ] Laptop - [ ] Tablet - [ ] Mobile

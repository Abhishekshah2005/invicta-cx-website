# SVC-CS-01 — Customer Support Hero

**Phase C · Customer Support · Hero · Image · HERO-STILL (16:9) · NOT STARTED**

## Purpose

The frontline that keeps people — the human default of the whole company.
Emotion: warm, dependable competence. Conversion: the opening scene that makes a
support-buyer feel "this is the operation I want answering my customers."

## Nano Banana Prompt

> A cinematic full-bleed photograph of a customer-support specialist mid-
> conversation on a headset in a warm modern operations space, soft daylight plus
> cool-warm monitor glow, focused and genuinely engaged — a calm dependable
> presence. Layered soft-focus operation behind (real pods, not a cubicle grid),
> one restrained crimson accent deep in frame. Muted charcoal knit. Shot on ARRI
> Alexa, 50mm prime, f/2; warm-editorial grade with controlled shadow so it sits
> in a dark full-bleed hero (ink shadows, ivory highlights, muted midtones, one
> crimson accent); documentary candor, real micro-expression, luxury-magazine
> composition, generous negative space lower-left for the headline; fine film
> grain, soft roll-off; photorealistic 4K, ultra-detailed skin texture.

**Negative Prompt**

> stock photo, posing, fake smile, thumbs up, headset thumbs-up, cubicle grid,
> call-center rows, RGB neon, teal-orange, HDR, plastic skin, readable screens,
> logos, watermark, text, 3d render, extra fingers, distorted hands.

## Flow Prompt

NOT REQUIRED. _(Hero is a still behind the CinematicHero parallax + gradient.)_

## Technical Specifications

- **Aspect:** 16:9 · D 2400×1350 · M 1080×1350 (4:5) · **Safe area:** subject right/centre; keep lower-left dark zone for headline + CTAs
- **Crops:** D 16:9 · T 3:2 · M 4:5 (`object-position: 60% center`) · **Compression:** AVIF 55 / WebP 72 / JPG 82 · **Formats:** AVIF+WebP+JPG

## Filename & Folder

`public/assets/services/customer-support/hero/hero.jpg`

## Website Integration

- **Page:** `/services/customer-support` · **Component:** `src/components/template/cinematic-hero.tsx` (backdrop) driven by `hero` in `src/content/services/customer-support.ts`.
- **Placeholder:** replaces the CinematicHero's art-directed CSS backdrop with the photo (add `hero.image`; CinematicHero renders it under its gradient + grain).
- **GSAP/ScrollTrigger:** existing CinematicHero `PARALLAX-BED` (yPercent 16, scrub) + masked headline. · **Priority:** **true** (hero poster = LCP) · **Preload:** eager · **Lazy:** no.

## Accessibility

- **Alt:** "An Invicta customer-support specialist mid-conversation on a headset." · **SEO filename:** `invicta-customer-support-hero.jpg`.

## Optimization

- **LCP:** hero image priority + preload · **CLS:** hero box reserved · **Responsive:** `fill` + `sizes="100vw"` · **Blur:** blurDataURL · srcset auto.

## Review Checklist

- [ ] Grade sits in dark hero - [ ] Headline legible lower-left - [ ] Cropping (mobile subject safe) - [ ] Parallax feel - [ ] Desktop - [ ] Laptop - [ ] Tablet - [ ] Mobile

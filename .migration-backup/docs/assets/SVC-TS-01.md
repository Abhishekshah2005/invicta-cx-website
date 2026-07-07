# SVC-TS-01 — Technical Support Hero (tier-2 / escalation)

**Phase C · Technical Support · Hero · Image · HERO-STILL (16:9) · NOT STARTED**

## Purpose

Resolve, don't reroute — tier-2 depth that actually fixes it. Emotion: precise,
capable, methodical. Conversion: proves the escalation competence that protects a
buyer's engineers and users.

## Nano Banana Prompt

> A cinematic full-bleed photograph of a tier-2 technical support engineer
> diagnosing an issue across multiple monitors in cool daylight — methodical,
> expert, composed, logs and diagnostics glowing on screen (abstract, unreadable).
> Cool-warm mixed light, shallow depth of field, layered soft background, one
> restrained crimson accent deep in frame. Muted charcoal wardrobe. Real focused
> micro-expression of problem-solving. Shot on ARRI Alexa, 35–50mm prime, f/2;
> warm-editorial grade with cooler midtones and controlled shadow for a dark
> full-bleed hero (warm ink shadows, ivory highlights, one crimson accent);
> documentary candor, negative space lower-left; fine film grain, soft roll-off;
> photorealistic 4K, ultra-detailed texture.

**Negative Prompt**

> stock photo, posing, fake smile, thumbs up, cubicle grid, RGB neon, teal-orange,
> HDR, plastic skin, readable logs/dashboards, logos, watermark, text, 3d render,
> extra fingers.

## Flow Prompt

NOT REQUIRED.

## Technical Specifications

- **Aspect:** 16:9 · D 2400×1350 · M 1080×1350 · **Safe area:** subject central-right; lower-left dark for type
- Crops D 16:9 · T 3:2 · M 4:5 (`60% center`) · Compression AVIF 55 / WebP 72 / JPG 82 · Formats AVIF+WebP+JPG

## Filename & Folder

`public/assets/services/technical-support/hero/hero.jpg`

## Website Integration

- **Page:** `/services/technical-support` · **Component:** `cinematic-hero.tsx` via `content/services/technical-support.ts` hero. · **Placeholder:** CinematicHero backdrop.
- **GSAP:** CinematicHero `PARALLAX-BED` + masked headline. · **Priority:** true (LCP) · **Preload:** eager · **Lazy:** no.

## Accessibility

- **Alt:** "A tier-2 technical support engineer diagnosing an issue across monitors." · **SEO filename:** `invicta-technical-support-hero.jpg`.

## Optimization

LCP priority · CLS reserved · `fill` + `sizes="100vw"` · blurDataURL · srcset auto.

## Review Checklist

- [ ] Grade in dark hero - [ ] Headline legible - [ ] Cropping - [ ] Parallax - [ ] Desktop - [ ] Laptop - [ ] Tablet - [ ] Mobile

# IND-SAA-01 — SaaS Industry Hero

**Phase D · SaaS · Hero · Image · HERO-STILL (16:9) · NOT STARTED**

## Purpose

"Support isn't a cost centre — it's your retention engine." Emotion: clean,
capable, contemporary. Conversion: reframes support as growth for software buyers.

## Nano Banana Prompt

> A cinematic full-bleed photograph of a SaaS customer-support specialist at a
> clean modern multi-monitor desk in bright daylight — calm and product-fluent,
> shallow depth of field, a contemporary soft-focus workspace behind, one
> restrained crimson accent. Muted stone/charcoal wardrobe. Screens show abstract
> soft UI. Real, competent micro-expression. Shot on ARRI Alexa, 50mm prime, f/2;
> warm-editorial neutral-warm grade with controlled shadow for a dark full-bleed
> hero (ink shadows, ivory highlights, muted midtones, one crimson accent);
> documentary candor, negative space lower-left; fine film grain, soft roll-off;
> photorealistic 4K, ultra-detailed texture.

**Negative Prompt**

> stock photo, posing, fake smile, thumbs up, cubicle grid, RGB neon, teal-orange,
> HDR, plastic skin, readable dashboards, logos, watermark, text, 3d render, extra
> fingers.

## Flow Prompt

NOT REQUIRED.

## Technical Specifications

- 16:9 · D 2400×1350 · M 1080×1350 · Safe area subject central-right, lower-left dark for type
- Crops D 16:9 · T 3:2 · M 4:5 (`60% center`) · AVIF 55 / WebP 72 / JPG 82 · AVIF+WebP+JPG

## Filename & Folder

`public/assets/industries/saas/hero/hero.jpg`

## Website Integration

- **Page:** `/industries/saas` · **Component:** `cinematic-hero.tsx` via `content/industries/saas.ts` hero. · **Placeholder:** CinematicHero backdrop.
- **GSAP:** CinematicHero `PARALLAX-BED` + masked headline. · **Priority:** true (LCP) · **Preload:** eager · **Lazy:** no.

## Accessibility

- **Alt:** "A SaaS support specialist at a clean multi-monitor desk, calm and product-fluent." · **SEO:** `invicta-saas-hero.jpg`.

## Optimization

LCP priority · CLS reserved · `fill` + `sizes="100vw"` · blurDataURL · srcset auto.

## Review Checklist

- [ ] Grade in dark hero - [ ] Headline legible - [ ] Cropping - [ ] Parallax - [ ] Desktop - [ ] Laptop - [ ] Tablet - [ ] Mobile

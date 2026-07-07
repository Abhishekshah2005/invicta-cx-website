# GM-SEC — Gaming Trust & Safety (review still)

**Phase B · Gaming · Trust & Safety · Image · MEDIA (4:3) · NOT STARTED** — _also serves the Fraud & Moderation sections via reuse._

## Purpose

The judgement work behind a safe platform — a specialist reviewing a case.
Emotion: vigilance, fairness, control. Conversion: substantiates trust-&-safety,
fraud, and moderation claims with a credible human-in-the-loop image.

## Nano Banana Prompt

> An editorial night photograph of a trust-&-safety specialist reviewing a case on
> screen — focused, vigilant, reading patterns automation would miss. Screen glow
> on a composed face, a single crimson alert reflected, warm dark surroundings,
> shallow depth of field. Screens show abstract, unreadable review UI (no real
> data). Muted charcoal wardrobe. Shot on ARRI Alexa, 50mm prime, f/2; nocturnal
> warm-editorial grade (deep ink shadows, ivory speculars, one crimson accent);
> cinematic chiaroscuro, documentary candor, fine film grain, soft roll-off;
> photorealistic 4K, ultra-detailed skin texture.

**Negative Prompt**

> neon, rainbow RGB, esports, stock photo, posing, thumbs up, cubicle grid,
> teal-orange, HDR, plastic skin, **readable data, real names, account numbers,
> fake dashboards**, logos, watermark, text, 3d render, extra fingers.

## Flow Prompt

NOT REQUIRED.

## Technical Specifications

- **Aspect:** 4:3 · D 1600×1200 · M 1080×1350 · **Safe area:** face + screen edge safe; no readable data
- Crops D/T 4:3 · M 4:5 (`center`) · Compression AVIF 55 / WebP 72 / JPG 80 · Formats AVIF+WebP+JPG

## Filename & Folder

`public/assets/gaming/trust/trust.jpg`

## Website Integration

- **Page:** `/industries/gaming` · **Component:** `src/sections/gaming/trust.tsx` (also referenced by the fraud/moderation sections). · **Placeholder:** trust `ImagePlaceholder`.
- **GSAP:** `Reveal` / `IMAGE-SCALE`. · **Priority:** false · **Lazy:** yes.

## Accessibility

- **Alt:** "A trust-and-safety specialist reviewing a case at night." · **SEO filename:** `invicta-gaming-trust-safety-review.jpg`.

## Optimization

LCP no · CLS reserve 4:3 · `fill` + `sizes` per host · blurDataURL · srcset auto.

## Review Checklist

- [ ] Grade - [ ] No readable data - [ ] Cropping - [ ] Animation fit - [ ] Desktop - [ ] Laptop - [ ] Tablet - [ ] Mobile

# HP-SEC — Homepage Secondary Editorial (flexible supporting still)

**Phase A · Homepage · Supporting Editorial · Image · MEDIA (4:3) · NOT STARTED**

## Purpose

A reserve supporting frame to enrich the homepage's editorial rhythm where a
second human image strengthens a chapter (e.g., alongside The Index or The
Invitation). Emotion: continued human warmth, texture between the big beats.
Conversion: sustains emotional engagement across the long scroll.

## Nano Banana Prompt

> An editorial supporting photograph of the Invicta operation — a candid,
> in-context human moment that complements the homepage's hero and chapter images:
> a specialist mid-task or a small genuine two-person exchange in a warm modern
> operations space, natural window + monitor light, shallow depth of field,
> layered soft background. Muted charcoal/stone/oat wardrobe, one whisper of
> crimson. Real unposed micro-expression. Shot on ARRI Alexa, 50mm prime, f/2;
> warm-editorial grade (ink shadows, ivory highlights, muted midtones, one crimson
> accent); documentary candor, generous negative space, fine film grain, soft
> roll-off; photorealistic 4K, ultra-detailed texture. Match the site's recurring
> visual language and cast.

**Negative Prompt**

> stock photo, posing, fake smile, thumbs up, handshake, cubicle grid, RGB neon,
> teal-orange, HDR, plastic skin, readable screens, logos, watermark, text, 3d
> render, cartoon, extra fingers.

## Flow Prompt

NOT REQUIRED.

## Technical Specifications

- **Aspect:** 4:3 · D 1600×1200 · M 1080×810 · **Safe area:** subject central
- Crops D/T 4:3 · M 4:5 (`center`) · Compression AVIF 55 / WebP 72 / JPG 80 · Formats AVIF+WebP+JPG

## Filename & Folder

`public/assets/homepage/chapters/secondary.jpg`

## Website Integration

- **Page:** Homepage · **Component:** flexible — recommend `src/sections/the-index.tsx` or `the-invitation.tsx` as a supporting visual (no fixed placeholder today). Confirm slot at integration.
- **GSAP:** `Reveal`/`IMAGE-SCALE` per host section. · Priority false · Lazy yes.

## Accessibility

- **Alt:** "Invicta specialists at work in a warm operations environment."
- **SEO filename:** `invicta-operations-supporting.jpg` · **Caption:** _(optional, host-dependent)_

## Optimization

LCP no · CLS reserve 4:3 · `fill` + `sizes` per host · blurDataURL · srcset auto.

## Review Checklist

- [ ] Lighting - [ ] Cropping - [ ] Type fit - [ ] Animation fit - [ ] Desktop - [ ] Laptop - [ ] Tablet - [ ] Mobile

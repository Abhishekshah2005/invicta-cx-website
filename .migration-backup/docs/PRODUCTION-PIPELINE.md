# Invicta — Master Production Pipeline

**The single source of truth for every visual asset until launch.**
Derived from [`PRODUCTION-GUIDE.md`](./PRODUCTION-GUIDE.md) (art direction) — this
file is the _operations_ layer: asset database, dashboard, queue, roadmap.
Prompts are generated one at a time when an asset reaches the top of the queue
(`NEXT`).

> **Production strategy (v2 — reordered):** assets are produced in the order a
> visitor _experiences_ the site, page by page — **not** as a photo library.
> The recurring cast is produced **last** (Phase G) so it is informed by the
> final visual language, once the major pages exist. No assets were removed in
> the reorder; only their sequence and dependencies changed.
>
> **Media strategy (v3 — Phase 15, execution):** keep the site **light**.
> _Videos:_ max two — the Homepage hero (done) + an optional Gaming hero.
> _Custom AI (Nano Banana):_ reserved for the branded, hero-level frames only —
> Homepage editorial (HP-06…HP-12), Gaming hero/editorial, Customer Support hero,
> About leadership, Case-study heroes, and any unique Invicta-branded visual.
> _Everything else:_ royalty-free **editorial/documentary photography** (Unsplash;
> Pexels/Pixabay CDNs are blocked in this env) — real operations, specialists,
> ops centres — used as production assets **or temporary placeholders** until a
> Nano Banana frame replaces them. Strictly no cheesy stock: no direct-to-camera,
> no handshakes, no posed teams, no smiling-agent BPO clichés, no cartoons.
> _Statics are brought to life with GSAP/Motion/Lenis_ (parallax, Ken-Burns slow
> zoom, mask reveals, scroll fades, clip reveals) — motion instead of more video.

---

## 0. How this pipeline runs

**I am the Production Manager. You drive with two commands.**

| You say                                | I do                                                                                                                                                                                                                                              |
| -------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **`NEXT`**                             | Take the on-deck (highest-priority unfinished) asset → write its production-ready **Nano Banana** (image) prompt + **Flow** (video) prompt if it's a film → give the exact file path + code integration point → set status `PROMPT READY` → wait. |
| **`Asset completed`** (or `<ID> done`) | Advance that asset one stage, recompute the dashboard, surface the next on-deck asset.                                                                                                                                                            |

Rules: never skip an asset · never reorder the queue unless you tell me to ·
prompts are written **only** at the queue top.

### Status pipeline (every asset starts `NOT STARTED`)

```
NOT STARTED → PROMPT READY → GENERATING → IMAGE APPROVED
   → FLOW READY → VIDEO COMPLETE        (video assets only)
   → INTEGRATED → RESPONSIVE → OPTIMIZED → QA PASSED → FINAL
```

The single **Status** column encodes the guide's separate _Integration /
Responsive / Optimization / QA / Approval_ states (the last five stages).

### Record schema (every row)

`ID · Phase · Page · Section · Asset Name · Type · Aspect(D/M) · Res(D) · Res(M) ·
Filename · Folder · Status · Dependencies · Nano Banana Prompt · Flow Prompt · Notes`
— aspect+resolution via **Spec code** (§3); prompts show `⏳` until the queue top.

---

## 1. Production Dashboard

> **Synced 12.2** — Homepage Hero (`HP-01` film + `HP-03` poster) and Human
> Conversation (`HP-04` film + `HP-05` poster) are `FINAL` (already wired in code:
> `/hero-video.mp4`, `/hero-poster.jpg`, `/human-conversation.mp4`,
> `/human-conversation-poster.jpg`). The dedicated vertical hero (`HP-02`) is
> **deferred** — mobile is served by the HP-01 centre-crop. Everything else
> `NOT STARTED`.

| Metric                    |   Value |
| ------------------------- | ------: |
| **Total assets**          | **106** |
| Completed (`FINAL`)       |   **4** |
| Deferred (optional)       |       1 |
| Remaining (active)        |     101 |
| — Images remaining        |      93 |
| — Videos remaining        |       4 |
| — Line diagrams remaining |       4 |
| **Overall completion**    | **~4%** |

**Completion by PHASE (new primary lens)**

| Phase | Scope                                                          |     Assets\* | Complete |   % |
| ----- | -------------------------------------------------------------- | -----------: | -------: | --: |
| **A** | Homepage                                                       |           16 |        4 | 25% |
| **B** | Gaming                                                         |            4 |        0 |  0% |
| **C** | Customer Support cluster                                       |            6 |        0 |  0% |
| **D** | Industries                                                     |   8 (+8 sec) |        0 |  0% |
| **E** | Services (remaining 14)                                        | 14 (+14 sec) |        0 |  0% |
| **F** | Company (About · Careers · Insights · Case Studies · diagrams) |  18 (+3 sec) |        0 |  0% |
| **G** | Recurring Cast Library                                         |            8 |        0 |  0% |

\*Primary assets per phase. **Secondary supporting stills (34 total)** sit with
their page: homepage (A7) and gaming (B) are in-phase; the other 32 are produced
inside Phases C–F right after each page's hero reaches `FINAL`. Phase totals
including secondary: A 16 · B 4 · C 12 · D 16 · E 28 · F 22 · G 8 = **106**.

**Completion by area (unchanged totals):** Homepage 16 · Gaming 4 · Industries 17\*\* ·
Services 40 · About 4 · Careers 3 · Insights 7 · Case Studies 3 · Shared/diagrams 4 ·
Cast 8. (\*\*8 heroes + 8 secondary + the case-study-cross-listed frame.)

---

## 2. Folder structure

Target home for finished assets. Current stand-ins wired in code live at
`/public/*` (`hero-video.mp4`, `hero-poster.jpg`, `human-conversation.mp4`,
`human-conversation-poster.jpg`); final delivery adopts the tree below and code
paths get repointed in a later, separate step.

```
public/assets/
├── homepage/{hero-video,hero-poster,conversation,operations,chapters,ambient}/
├── gaming/{hero,operations,vip,trust}/
├── services/<slug>/{hero,secondary}/        # 20 service pages
├── industries/<slug>/{hero,secondary}/      # 8 industry pages
├── about/{hero,leadership,culture}/
├── careers/{hero,culture}/
├── insights/{covers,authors,diagrams}/
├── case-studies/{hero,operations,results}/
├── shared/{diagrams,overlays}/
└── cast/                                     # 8 recurring portraits (LAST)
```

Optimised web exports (AVIF/WebP + fallback, responsive 640/1024/1600/2400) land
beside their masters at the Optimize stage.

---

## 3. Spec reference (aspect + resolution codes)

| Spec           | Aspect (D / M) | Res — Desktop   | Res — Mobile | Format                                     |
| -------------- | -------------- | --------------- | ------------ | ------------------------------------------ |
| **VID-HERO**   | 16:9 / 9:16    | 1920×1080       | 1080×1920    | mp4(H.265)+webm, muted loop 8–14s + poster |
| **VID-LOOP**   | 16:9 / 4:5     | 1920×1080       | 1080×1350    | mp4+webm, muted loop + poster              |
| **HERO-STILL** | 16:9 / 4:5     | 2400×1350       | 1080×1350    | AVIF+WebP+JPG                              |
| **PORTRAIT**   | 4:5            | 1600×2000       | 1080×1350    | AVIF+WebP+JPG                              |
| **MEDIA**      | 4:3            | 1600×1200       | 1080×810     | AVIF+WebP+JPG                              |
| **AVATAR**     | 1:1            | 800×800         | 800×800      | AVIF+WebP+JPG                              |
| **POSTER**     | inherits video | ≤1600 long edge | —            | JPG (LCP)                                  |
| **DIAGRAM**    | vector         | SVG             | SVG          | SVG (ink line, 1 crimson accent)           |

---

## 4. Master Asset Database — by production phase

`⏳` = prompt pending (written on `NEXT`). All statuses **NOT STARTED**.

### PHASE A — Homepage (16 · 4 FINAL · 1 deferred)

| ID     | Section                  | Asset                                 | Type  | Spec       | Filename                                     | Status                              |
| ------ | ------------------------ | ------------------------------------- | ----- | ---------- | -------------------------------------------- | ----------------------------------- |
| HP-01  | 1 · Hero                 | Hero film (landscape)                 | Video | VID-HERO   | homepage/hero-video/hero.mp4                 | ✅ **FINAL**                        |
| HP-02  | 1 · Hero                 | Hero film (vertical, mobile)          | Video | VID-HERO   | homepage/hero-video/hero-vertical.mp4        | ⏸ DEFERRED — mobile uses HP-01 crop |
| HP-03  | 1 · Hero                 | Hero poster                           | Image | POSTER     | homepage/hero-poster/hero.jpg                | ✅ **FINAL**                        |
| HP-04  | 2 · Human Conversation   | Conversation film                     | Video | VID-LOOP   | homepage/conversation/human-conversation.mp4 | ✅ **FINAL**                        |
| HP-05  | 2 · Human Conversation   | Conversation poster                   | Image | POSTER     | homepage/conversation/poster.jpg             | ✅ **FINAL**                        |
| HP-06  | 3 · Operations           | Operations establishing still         | Image | HERO-STILL | homepage/operations/floor.jpg                | 🎯 **ON DECK**                      |
| HP-07  | 4 · Why Humans Matter    | Beat 1 — trust in hard moments        | Image | MEDIA      | homepage/chapters/people-1.jpg               | NOT STARTED                         |
| HP-08  | 4 · Why Humans Matter    | Beat 2 — specialist at work           | Image | MEDIA      | homepage/chapters/people-2.jpg               | NOT STARTED                         |
| HP-09  | 4 · Why Humans Matter    | Beat 3 — team lead / QA               | Image | MEDIA      | homepage/chapters/people-3.jpg               | NOT STARTED                         |
| HP-10  | 4 · Why Humans Matter    | Beat 4 — genuine smile mid-call       | Image | MEDIA      | homepage/chapters/people-4.jpg               | NOT STARTED                         |
| HP-12  | 5 · Proof / Results      | Case-study proof frame                | Image | MEDIA      | homepage/chapters/proof.jpg                  | NOT STARTED · dep GM-01             |
| HP-11  | 7 · Supporting Editorial | The Arena — gaming chapter frame      | Image | HERO-STILL | homepage/chapters/arena.jpg                  | NOT STARTED · dep GM-01             |
| HP-13  | 7 · Supporting Editorial | Ambient loop — hands over keyboard    | Video | VID-LOOP   | homepage/ambient/keyboard.mp4                | NOT STARTED                         |
| HP-14  | 7 · Supporting Editorial | Ambient loop — rack-focus screen→face | Video | VID-LOOP   | homepage/ambient/rackfocus.mp4               | NOT STARTED                         |
| HP-15  | 7 · Supporting Editorial | Ambient loop — night ops floor        | Video | VID-LOOP   | homepage/ambient/nightfloor.mp4              | NOT STARTED                         |
| HP-SEC | 7 · Supporting Editorial | Secondary editorial still             | Image | MEDIA      | homepage/chapters/secondary.jpg              | NOT STARTED                         |

> **6 · CTA** uses the coded `ConversationNetwork` canvas — **no photographic
> asset required.** (Flag me if you want a still/loop behind it and I'll add one.)

### PHASE B — Gaming (4)

| ID     | Section        | Asset                             | Type  | Spec       | Filename                    | Dependencies |
| ------ | -------------- | --------------------------------- | ----- | ---------- | --------------------------- | ------------ |
| GM-01  | Hero           | Gaming hero film (night T&S desk) | Video | VID-HERO   | gaming/hero/hero.mp4        | —            |
| GM-02  | Operations     | Night ops floor still             | Image | HERO-STILL | gaming/operations/floor.jpg | —            |
| GM-SEC | Trust & Safety | Trust-&-safety review still       | Image | MEDIA      | gaming/trust/trust.jpg      | —            |
| GM-03  | VIP Management | VIP moment still                  | Image | MEDIA      | gaming/vip/vip.jpg          | —            |

> **Fraud Prevention** & **Moderation** on the Gaming page currently reuse the
> Trust-&-Safety frame (`GM-SEC`) plus the service assets `SVC-FRD-01` /
> `SVC-CM-01` shown via cross-link — no separate gaming assets, to avoid
> inflating the library. Say the word and I'll split them into dedicated gaming
> frames (`GM-04` Fraud, `GM-05` Moderation; +2 → 108 total).

### PHASE C — Customer Support cluster (6)

| ID        | Section     | Asset                                        | Type  | Spec       | Filename                                   | Dependencies |
| --------- | ----------- | -------------------------------------------- | ----- | ---------- | ------------------------------------------ | ------------ |
| SVC-CS-01 | Hero        | Customer Support hero                        | Image | HERO-STILL | services/customer-support/hero/hero.jpg    | —            |
| SVC-OM-01 | Omnichannel | Omnichannel hero                             | Image | HERO-STILL | services/omnichannel-support/hero/hero.jpg | —            |
| SVC-LC-01 | Live Chat   | Live Chat hero                               | Image | HERO-STILL | services/live-chat/hero/hero.jpg           | —            |
| SVC-EM-01 | Email       | Email Support hero                           | Image | HERO-STILL | services/email-support/hero/hero.jpg       | —            |
| SVC-PH-01 | Phone       | Phone Support hero                           | Image | HERO-STILL | services/phone-support/hero/hero.jpg       | —            |
| SVC-TS-01 | Escalation  | Technical Support (tier-2 / escalation) hero | Image | HERO-STILL | services/technical-support/hero/hero.jpg   | —            |

### PHASE D — Industries (8)

| ID         | Order                     | Asset      | Type  | Spec       | Filename                                       | Dependencies |
| ---------- | ------------------------- | ---------- | ----- | ---------- | ---------------------------------------------- | ------------ |
| IND-FIN-01 | 1 · FinTech               | Hero still | Image | HERO-STILL | industries/fintech/hero/hero.jpg               | —            |
| IND-HEA-01 | 2 · Healthcare            | Hero still | Image | HERO-STILL | industries/healthcare/hero/hero.jpg            | —            |
| IND-TRA-01 | 3 · Travel                | Hero still | Image | HERO-STILL | industries/travel/hero/hero.jpg                | —            |
| IND-SAA-01 | 4 · SaaS                  | Hero still | Image | HERO-STILL | industries/saas/hero/hero.jpg                  | —            |
| IND-TEC-01 | 5 · Technology            | Hero still | Image | HERO-STILL | industries/technology/hero/hero.jpg            | —            |
| IND-REC-01 | 6 · Recruitment           | Hero still | Image | HERO-STILL | industries/recruitment/hero/hero.jpg           | —            |
| IND-ECO-01 | 7 · E-commerce            | Hero still | Image | HERO-STILL | industries/ecommerce/hero/hero.jpg             | —            |
| IND-PRO-01 | 8 · Professional Services | Hero still | Image | HERO-STILL | industries/professional-services/hero/hero.jpg | —            |

### PHASE E — Services, remaining (14)

| ID         | Service              | Type  | Spec       | Filename                                         | Dependencies |
| ---------- | -------------------- | ----- | ---------- | ------------------------------------------------ | ------------ |
| SVC-CM-01  | Community Moderation | Image | HERO-STILL | services/community-moderation/hero/hero.jpg      | —            |
| SVC-VIP-01 | VIP Management       | Image | HERO-STILL | services/vip-management/hero/hero.jpg            | —            |
| SVC-KYC-01 | KYC                  | Image | HERO-STILL | services/kyc/hero/hero.jpg                       | —            |
| SVC-FRD-01 | Fraud Prevention     | Image | HERO-STILL | services/fraud-prevention/hero/hero.jpg          | —            |
| SVC-QA-01  | Quality Assurance    | Image | HERO-STILL | services/quality-assurance/hero/hero.jpg         | —            |
| SVC-LG-01  | Lead Generation      | Image | HERO-STILL | services/lead-generation/hero/hero.jpg           | —            |
| SVC-AS-01  | Appointment Setting  | Image | HERO-STILL | services/appointment-setting/hero/hero.jpg       | —            |
| SVC-PAY-01 | Payment Support      | Image | HERO-STILL | services/payment-support/hero/hero.jpg           | —            |
| SVC-BO-01  | Back Office          | Image | HERO-STILL | services/back-office/hero/hero.jpg               | —            |
| SVC-WFM-01 | Workforce Management | Image | HERO-STILL | services/workforce-management/hero/hero.jpg      | —            |
| SVC-VA-01  | Virtual Assistance   | Image | HERO-STILL | services/virtual-assistance/hero/hero.jpg        | —            |
| SVC-SM-01  | Social Media Support | Image | HERO-STILL | services/social-media-support/hero/hero.jpg      | —            |
| SVC-KB-01  | Knowledge Base       | Image | HERO-STILL | services/knowledge-base-management/hero/hero.jpg | —            |
| SVC-RET-01 | Customer Retention   | Image | HERO-STILL | services/customer-retention/hero/hero.jpg        | —            |

### PHASE F — Company: About · Careers · Insights · Case Studies · Diagrams (18)

| ID      | Page · Section            | Asset                             | Type    | Spec       | Filename                            | Dependencies |
| ------- | ------------------------- | --------------------------------- | ------- | ---------- | ----------------------------------- | ------------ |
| ABT-01  | About · Hero              | About hero (operation/leadership) | Image   | HERO-STILL | about/hero/hero.jpg                 | —            |
| ABT-02  | About · Leadership        | Leadership portraits (×3)         | Image   | PORTRAIT   | about/leadership/*.jpg              | —            |
| ABT-03  | About · Culture           | Culture / operations still        | Image   | HERO-STILL | about/culture/culture.jpg           | —            |
| CAR-01  | Careers · Hero            | Careers hero (training moment)    | Image   | HERO-STILL | careers/hero/hero.jpg               | —            |
| CAR-02  | Careers · Culture         | Mentor / academy still            | Image   | MEDIA      | careers/culture/academy.jpg         | —            |
| INS-00  | Insights · Index          | Editorial index cover             | Image   | HERO-STILL | insights/covers/index.jpg           | —            |
| INS-01  | Insights · Article        | Cover — cost of a churned VIP     | Image   | MEDIA      | insights/covers/churned-vip.jpg     | —            |
| INS-02  | Insights · Article        | Cover — KYC without friction      | Image   | MEDIA      | insights/covers/kyc-friction.jpg    | —            |
| INS-03  | Insights · Article        | Cover — sixty seconds of loyalty  | Image   | MEDIA      | insights/covers/sixty-seconds.jpg   | —            |
| INS-A1  | Insights · Author         | Author portrait 1                 | Image   | AVATAR     | insights/authors/author-1.jpg       | —            |
| INS-A2  | Insights · Author         | Author portrait 2                 | Image   | AVATAR     | insights/authors/author-2.jpg       | —            |
| INS-A3  | Insights · Author         | Author portrait 3                 | Image   | AVATAR     | insights/authors/author-3.jpg       | —            |
| CS-01   | Case Studies · Hero       | Lunaland hero (gaming grade)      | Image   | HERO-STILL | case-studies/hero/lunaland.jpg      | GM-01        |
| CS-02   | Case Studies · Operations | Engagement operations still       | Image   | MEDIA      | case-studies/operations/ops.jpg     | —            |
| DIAG-01 | Shared · Diagram          | Tech integration + escalation     | Diagram | DIAGRAM    | shared/diagrams/tech-escalation.svg | —            |
| DIAG-02 | Shared · Diagram          | QA calibration / rubric           | Diagram | DIAGRAM    | shared/diagrams/qa-rubric.svg       | —            |
| DIAG-03 | Shared · Diagram          | Knowledge-base taxonomy           | Diagram | DIAGRAM    | shared/diagrams/kb-taxonomy.svg     | —            |
| DIAG-04 | Shared · Diagram          | Operations ecosystem              | Diagram | DIAGRAM    | shared/diagrams/ops-ecosystem.svg   | —            |

### PHASE G — Recurring Cast Library (8) — produced LAST

> **Dependency (new):** each cast portrait depends on **Phases A–F being `FINAL`**
> — the cast is styled, lit, and graded to match the visual language the major
> pages have already established.

| ID      | Asset                                    | Type  | Spec     | Filename             | Dependencies     |
| ------- | ---------------------------------------- | ----- | -------- | -------------------- | ---------------- |
| CAST-01 | Gaming specialist portrait               | Image | PORTRAIT | cast/gaming.jpg      | Phases A–F FINAL |
| CAST-02 | FinTech specialist portrait              | Image | PORTRAIT | cast/fintech.jpg     | Phases A–F FINAL |
| CAST-03 | Healthcare specialist portrait           | Image | PORTRAIT | cast/healthcare.jpg  | Phases A–F FINAL |
| CAST-04 | Travel specialist portrait               | Image | PORTRAIT | cast/travel.jpg      | Phases A–F FINAL |
| CAST-05 | SaaS specialist portrait                 | Image | PORTRAIT | cast/saas.jpg        | Phases A–F FINAL |
| CAST-06 | Recruitment specialist portrait          | Image | PORTRAIT | cast/recruitment.jpg | Phases A–F FINAL |
| CAST-07 | E-commerce specialist portrait           | Image | PORTRAIT | cast/ecommerce.jpg   | Phases A–F FINAL |
| CAST-08 | Technology/Community specialist portrait | Image | PORTRAIT | cast/technology.jpg  | Phases A–F FINAL |

### Secondary supporting stills (34) — distributed, on-demand

One per hero page (Guide §3), Spec `MEDIA`, all `NOT STARTED`, produced **right
after that page's hero reaches `FINAL`** (so they ride inside each phase, not a
separate block): homepage `HP-SEC` (in A) · gaming `GM-SEC` (in B, doubling as
Trust & Safety) · industries `<IND>-SEC-01` ×8 (Phase D) · services `<SVC>-SEC-01`
×20 (Phases C & E) · about `ABT-SEC` · careers `CAR-SEC` · case-study results
`CS-RES` (Phase F).

---

## 5. Asset Queue (revised production order)

**On deck →** `HP-06` — Homepage Operations (establishing still).

```
PHASE A · Homepage
  ✅ HP-01  Hero film ..................... FINAL
  ⏸  HP-02  Hero film — vertical .......... DEFERRED (mobile = HP-01 crop)
  ✅ HP-03  Hero poster ................... FINAL
  ✅ HP-04  Human Conversation film ....... FINAL
  ✅ HP-05  Human Conversation poster ..... FINAL
  →  HP-06  Operations .................... ON DECK
     HP-07 HP-08 HP-09 HP-10   Why Humans Matter (4 beats)
     HP-12  Proof / Results
     (CTA — coded network, no asset)
     HP-11 HP-13 HP-14 HP-15 HP-SEC   Supporting editorial + ambient

PHASE B · Gaming
  GM-01 Hero → GM-02 Operations → GM-SEC Trust & Safety → GM-03 VIP

PHASE C · Customer Support cluster
  SVC-CS-01 Hero → SVC-OM-01 Omnichannel → SVC-LC-01 Live Chat
  → SVC-EM-01 Email → SVC-PH-01 Phone → SVC-TS-01 Escalation

PHASE D · Industries
  FinTech → Healthcare → Travel → SaaS → Technology → Recruitment
  → E-commerce → Professional Services   (+ each page's secondary)

PHASE E · Services (remaining 14)
  Community Moderation, VIP, KYC, Fraud, QA, Lead Gen, Appointment Setting,
  Payment, Back Office, WFM, Virtual Assistance, Social, Knowledge Base,
  Retention   (+ each page's secondary)

PHASE F · Company
  About (Hero → Leadership → Culture) → Careers (Hero → Culture)
  → Insights (Index → 3 covers → 3 authors) → Case Studies (Lunaland → Ops)
  → Line diagrams ×4

PHASE G · Recurring Cast Library
  CAST-01 … CAST-08   (only after A–F are FINAL)
```

Send `NEXT` → I generate prompts for the on-deck asset and advance.

---

## 6. Priority Roadmap (phase milestones)

| Milestone                    | Phase | Delivers                                                                                                           | Assets\* |
| ---------------------------- | ----- | ------------------------------------------------------------------------------------------------------------------ | -------: |
| **M1 — Homepage complete**   | A     | The whole first impression: hero, human conversation, operations, "why humans matter," proof, supporting editorial |       16 |
| **M2 — Flagship**            | B     | Gaming page fully art-directed (hero, ops, trust, VIP)                                                             |        4 |
| **M3 — Frontline**           | C     | Customer-support cluster real media (support, omnichannel, chat, email, phone, escalation)                         |        6 |
| **M4 — Industries**          | D     | Every industry page opens on real photography (+secondary)                                                         |       16 |
| **M5 — Services**            | E     | All remaining service pages have heroes (+secondary)                                                               |       28 |
| **M6 — Company & editorial** | F     | About, Careers, Insights, Case Studies, line diagrams                                                              |       22 |
| **M7 — Cast library**        | G     | 8 recurring portraits, informed by the finished look → launch-ready                                                |        8 |

\*Including distributed secondary where applicable. Sum = 100 + 6 shared = **106**.

---

## 7. Command reference

**`NEXT`** → pick on-deck asset · write its **Nano Banana** image prompt (Global
Style Suffix + page brief, page-specific negatives) · if a film, its **Flow**
prompt (image-to-video, one slow motivated move) · state exact file path + the
code file/component to integrate into · set `PROMPT READY` · wait.

**`Asset completed`** → advance that asset's status one stage · recompute
dashboard · surface next on-deck asset with a one-line reason.

---

_v2 (reorder): production order is now visitor-experience order (A → G); the
recurring **cast moved from first to last**; every hero's `CAST` dependency was
**removed**; the cast now depends on **Phases A–F FINAL**._

_v2.1 (sync 12.2): `HP-01`, `HP-03`, `HP-04`, `HP-05` → **FINAL** (already in
code). Dependency check — the only assets that depended on these were `HP-02`
(unlocked, but **deferred**), `HP-03`, and `HP-05` (already delivered); nothing
downstream was blocked, so no further unlocks were needed. Progress **4/106
(~4%)**, Phase A **25%**. On deck → **`HP-06`**. Total assets unchanged (**106**).
Standing by for approval of the updated queue._

# Master Asset Index

Complete manifest of every remaining asset. Source of truth:
[`PRODUCTION-PIPELINE.md`](./PRODUCTION-PIPELINE.md) +
[`PRODUCTION-GUIDE.md`](./PRODUCTION-GUIDE.md). Per-asset prompt docs live in
[`docs/assets/`](./assets/) as `<ID>.md`.

**Legend** — Status: `NOT STARTED` · `PROMPT READY` · `GENERATING` · `FINAL` etc.
Integration: `NOT INTEGRATED` until wired. Prompt file `✅` = written · `⏳` = to
be written (archetype known). Ready-Nano / Ready-Flow: is the asset ready to hand
to Google Nano Banana (image) / Flow (video).

**Progress:** 4 `FINAL` (HP-01, HP-03, HP-04, HP-05) · 1 deferred (HP-02) ·
**101 remaining** · overall ~4%.

---

## Phase A — Homepage

| ID     | Status      | Page · Section                  | Filename                               | Prompt file  | Dep   | Nano | Flow |
| ------ | ----------- | ------------------------------- | -------------------------------------- | ------------ | ----- | :--: | :--: |
| HP-06  | NOT STARTED | Homepage · Operations           | assets/homepage/operations/floor.jpg   | HP-06.md ✅  | —     |  ✅  | opt  |
| HP-07  | NOT STARTED | Homepage · Why Humans Matter #1 | assets/homepage/chapters/people-1.jpg  | HP-07.md ✅  | —     |  No  |
| HP-08  | NOT STARTED | Homepage · Why Humans Matter #2 | assets/homepage/chapters/people-2.jpg  | HP-08.md ✅  | —     |  No  |
| HP-09  | NOT STARTED | Homepage · Why Humans Matter #3 | assets/homepage/chapters/people-3.jpg  | HP-09.md ✅  | —     |  No  |
| HP-10  | NOT STARTED | Homepage · Why Humans Matter #4 | assets/homepage/chapters/people-4.jpg  | HP-10.md ✅  | —     |  No  |
| HP-12  | NOT STARTED | Homepage · Proof / Results      | assets/homepage/chapters/proof.jpg     | HP-12.md ✅  | GM-01 |  No  |
| HP-11  | NOT STARTED | Homepage · Supporting (Arena)   | assets/homepage/chapters/arena.jpg     | HP-11.md ✅  | GM-01 |  No  |
| HP-13  | NOT STARTED | Homepage · Ambient loop 1       | assets/homepage/ambient/keyboard.mp4   | HP-13.md ✅  | —     |  ✅  |
| HP-14  | NOT STARTED | Homepage · Ambient loop 2       | assets/homepage/ambient/rackfocus.mp4  | HP-14.md ✅  | —     |  ✅  |
| HP-15  | NOT STARTED | Homepage · Ambient loop 3       | assets/homepage/ambient/nightfloor.mp4 | HP-15.md ✅  | —     |  ✅  |
| HP-SEC | NOT STARTED | Homepage · Secondary editorial  | assets/homepage/chapters/secondary.jpg | HP-SEC.md ✅ | —     |  No  |

## Phase B — Gaming

| ID     | Status      | Page · Section          | Filename                           | Prompt file  | Dep | Nano | Flow |
| ------ | ----------- | ----------------------- | ---------------------------------- | ------------ | --- | :--: | :--: |
| GM-01  | NOT STARTED | Gaming · Hero           | assets/gaming/hero/hero.mp4        | GM-01.md ✅  | —   |  ✅  |
| GM-02  | NOT STARTED | Gaming · Operations     | assets/gaming/operations/floor.jpg | GM-02.md ✅  | —   |  No  |
| GM-SEC | NOT STARTED | Gaming · Trust & Safety | assets/gaming/trust/trust.jpg      | GM-SEC.md ✅ | —   |  No  |
| GM-03  | NOT STARTED | Gaming · VIP            | assets/gaming/vip/vip.jpg          | GM-03.md ✅  | —   |  No  |

## Phase C — Customer Support cluster

| ID        | Status      | Page · Section           | Filename                                          | Prompt file     | Dep | Nano | Flow |
| --------- | ----------- | ------------------------ | ------------------------------------------------- | --------------- | --- | :--: | :--: |
| SVC-CS-01 | NOT STARTED | Customer Support · Hero  | assets/services/customer-support/hero/hero.jpg    | SVC-CS-01.md ✅ | —   |  No  |
| SVC-OM-01 | NOT STARTED | Omnichannel · Hero       | assets/services/omnichannel-support/hero/hero.jpg | SVC-OM-01.md ✅ | —   |  No  |
| SVC-LC-01 | NOT STARTED | Live Chat · Hero         | assets/services/live-chat/hero/hero.jpg           | SVC-LC-01.md ✅ | —   |  No  |
| SVC-EM-01 | NOT STARTED | Email Support · Hero     | assets/services/email-support/hero/hero.jpg       | SVC-EM-01.md ✅ | —   |  No  |
| SVC-PH-01 | NOT STARTED | Phone Support · Hero     | assets/services/phone-support/hero/hero.jpg       | SVC-PH-01.md ✅ | —   |  No  |
| SVC-TS-01 | NOT STARTED | Technical Support · Hero | assets/services/technical-support/hero/hero.jpg   | SVC-TS-01.md ✅ | —   |  No  |

## Phase D — Industries

| ID         | Status      | Page · Section               | Filename                                              | Prompt file      | Dep | Nano | Flow |
| ---------- | ----------- | ---------------------------- | ----------------------------------------------------- | ---------------- | --- | :--: | :--: |
| IND-FIN-01 | NOT STARTED | FinTech · Hero               | assets/industries/fintech/hero/hero.jpg               | IND-FIN-01.md ⏳ | —   |  No  |
| IND-HEA-01 | NOT STARTED | Healthcare · Hero            | assets/industries/healthcare/hero/hero.jpg            | IND-HEA-01.md ⏳ | —   |  No  |
| IND-TRA-01 | NOT STARTED | Travel · Hero                | assets/industries/travel/hero/hero.jpg                | IND-TRA-01.md ⏳ | —   |  No  |
| IND-SAA-01 | NOT STARTED | SaaS · Hero                  | assets/industries/saas/hero/hero.jpg                  | IND-SAA-01.md ⏳ | —   |  No  |
| IND-TEC-01 | NOT STARTED | Technology · Hero            | assets/industries/technology/hero/hero.jpg            | IND-TEC-01.md ⏳ | —   |  No  |
| IND-REC-01 | NOT STARTED | Recruitment · Hero           | assets/industries/recruitment/hero/hero.jpg           | IND-REC-01.md ⏳ | —   |  No  |
| IND-ECO-01 | NOT STARTED | E-commerce · Hero            | assets/industries/ecommerce/hero/hero.jpg             | IND-ECO-01.md ⏳ | —   |  No  |
| IND-PRO-01 | NOT STARTED | Professional Services · Hero | assets/industries/professional-services/hero/hero.jpg | IND-PRO-01.md ⏳ | —   |  No  |

## Phase E — Services (remaining 14)

| ID         | Status      | Page                 | Filename                                                | Prompt file      | Nano | Flow |
| ---------- | ----------- | -------------------- | ------------------------------------------------------- | ---------------- | :--: | :--: |
| SVC-CM-01  | NOT STARTED | Community Moderation | assets/services/community-moderation/hero/hero.jpg      | SVC-CM-01.md ⏳  |  ✅  |  No  |
| SVC-VIP-01 | NOT STARTED | VIP Management       | assets/services/vip-management/hero/hero.jpg            | SVC-VIP-01.md ⏳ |  ✅  |  No  |
| SVC-KYC-01 | NOT STARTED | KYC                  | assets/services/kyc/hero/hero.jpg                       | SVC-KYC-01.md ⏳ |  ✅  |  No  |
| SVC-FRD-01 | NOT STARTED | Fraud Prevention     | assets/services/fraud-prevention/hero/hero.jpg          | SVC-FRD-01.md ⏳ |  ✅  |  No  |
| SVC-QA-01  | NOT STARTED | Quality Assurance    | assets/services/quality-assurance/hero/hero.jpg         | SVC-QA-01.md ⏳  |  ✅  |  No  |
| SVC-LG-01  | NOT STARTED | Lead Generation      | assets/services/lead-generation/hero/hero.jpg           | SVC-LG-01.md ⏳  |  ✅  |  No  |
| SVC-AS-01  | NOT STARTED | Appointment Setting  | assets/services/appointment-setting/hero/hero.jpg       | SVC-AS-01.md ⏳  |  ✅  |  No  |
| SVC-PAY-01 | NOT STARTED | Payment Support      | assets/services/payment-support/hero/hero.jpg           | SVC-PAY-01.md ⏳ |  ✅  |  No  |
| SVC-BO-01  | NOT STARTED | Back Office          | assets/services/back-office/hero/hero.jpg               | SVC-BO-01.md ⏳  |  ✅  |  No  |
| SVC-WFM-01 | NOT STARTED | Workforce Management | assets/services/workforce-management/hero/hero.jpg      | SVC-WFM-01.md ⏳ |  ✅  |  No  |
| SVC-VA-01  | NOT STARTED | Virtual Assistance   | assets/services/virtual-assistance/hero/hero.jpg        | SVC-VA-01.md ⏳  |  ✅  |  No  |
| SVC-SM-01  | NOT STARTED | Social Media Support | assets/services/social-media-support/hero/hero.jpg      | SVC-SM-01.md ⏳  |  ✅  |  No  |
| SVC-KB-01  | NOT STARTED | Knowledge Base       | assets/services/knowledge-base-management/hero/hero.jpg | SVC-KB-01.md ⏳  |  ✅  |  No  |
| SVC-RET-01 | NOT STARTED | Customer Retention   | assets/services/customer-retention/hero/hero.jpg        | SVC-RET-01.md ⏳ |  ✅  |  No  |

## Phase F — Company (About · Careers · Insights · Case Studies · Diagrams)

| ID      | Status      | Page · Section                   | Filename                                   | Prompt file   | Dep   | Nano | Flow |
| ------- | ----------- | -------------------------------- | ------------------------------------------ | ------------- | ----- | :--: | :--: |
| ABT-01  | NOT STARTED | About · Hero                     | assets/about/hero/hero.jpg                 | ABT-01.md ⏳  | —     |  No  |
| ABT-02  | NOT STARTED | About · Leadership (×3)          | assets/about/leadership/*.jpg              | ABT-02.md ⏳  | —     |  No  |
| ABT-03  | NOT STARTED | About · Culture                  | assets/about/culture/culture.jpg           | ABT-03.md ⏳  | —     |  No  |
| CAR-01  | NOT STARTED | Careers · Hero                   | assets/careers/hero/hero.jpg               | CAR-01.md ⏳  | —     |  No  |
| CAR-02  | NOT STARTED | Careers · Culture                | assets/careers/culture/academy.jpg         | CAR-02.md ⏳  | —     |  No  |
| INS-00  | NOT STARTED | Insights · Index cover           | assets/insights/covers/index.jpg           | INS-00.md ⏳  | —     |  No  |
| INS-01  | NOT STARTED | Insights · Cover (churned VIP)   | assets/insights/covers/churned-vip.jpg     | INS-01.md ⏳  | —     |  No  |
| INS-02  | NOT STARTED | Insights · Cover (KYC friction)  | assets/insights/covers/kyc-friction.jpg    | INS-02.md ⏳  | —     |  No  |
| INS-03  | NOT STARTED | Insights · Cover (sixty seconds) | assets/insights/covers/sixty-seconds.jpg   | INS-03.md ⏳  | —     |  No  |
| INS-A1  | NOT STARTED | Insights · Author 1              | assets/insights/authors/author-1.jpg       | INS-A1.md ⏳  | —     |  No  |
| INS-A2  | NOT STARTED | Insights · Author 2              | assets/insights/authors/author-2.jpg       | INS-A2.md ⏳  | —     |  No  |
| INS-A3  | NOT STARTED | Insights · Author 3              | assets/insights/authors/author-3.jpg       | INS-A3.md ⏳  | —     |  No  |
| CS-01   | NOT STARTED | Case Studies · Lunaland hero     | assets/case-studies/hero/lunaland.jpg      | CS-01.md ⏳   | GM-01 |  No  |
| CS-02   | NOT STARTED | Case Studies · Operations        | assets/case-studies/operations/ops.jpg     | CS-02.md ⏳   | —     |  No  |
| DIAG-01 | NOT STARTED | Shared · Tech escalation diagram | assets/shared/diagrams/tech-escalation.svg | DIAG-01.md ⏳ | —     |  No  |
| DIAG-02 | NOT STARTED | Shared · QA rubric diagram       | assets/shared/diagrams/qa-rubric.svg       | DIAG-02.md ⏳ | —     |  No  |
| DIAG-03 | NOT STARTED | Shared · KB taxonomy diagram     | assets/shared/diagrams/kb-taxonomy.svg     | DIAG-03.md ⏳ | —     |  No  |
| DIAG-04 | NOT STARTED | Shared · Ops ecosystem diagram   | assets/shared/diagrams/ops-ecosystem.svg   | DIAG-04.md ⏳ | —     |  No  |

## Phase G — Recurring Cast Library (produced LAST — dep: Phases A–F FINAL)

| ID      | Status      | Portrait                        | Filename                    | Prompt file   | Nano | Flow |
| ------- | ----------- | ------------------------------- | --------------------------- | ------------- | :--: | :--: |
| CAST-01 | NOT STARTED | Gaming specialist               | assets/cast/gaming.jpg      | CAST-01.md ⏳ |  ✅  |  No  |
| CAST-02 | NOT STARTED | FinTech specialist              | assets/cast/fintech.jpg     | CAST-02.md ⏳ |  ✅  |  No  |
| CAST-03 | NOT STARTED | Healthcare specialist           | assets/cast/healthcare.jpg  | CAST-03.md ⏳ |  ✅  |  No  |
| CAST-04 | NOT STARTED | Travel specialist               | assets/cast/travel.jpg      | CAST-04.md ⏳ |  ✅  |  No  |
| CAST-05 | NOT STARTED | SaaS specialist                 | assets/cast/saas.jpg        | CAST-05.md ⏳ |  ✅  |  No  |
| CAST-06 | NOT STARTED | Recruitment specialist          | assets/cast/recruitment.jpg | CAST-06.md ⏳ |  ✅  |  No  |
| CAST-07 | NOT STARTED | E-commerce specialist           | assets/cast/ecommerce.jpg   | CAST-07.md ⏳ |  ✅  |  No  |
| CAST-08 | NOT STARTED | Technology/Community specialist | assets/cast/technology.jpg  | CAST-08.md ⏳ |  ✅  |  No  |

## Secondary supporting stills (32 — on-demand after each hero is FINAL)

Spec `MEDIA`, all `NOT STARTED`, `NOT INTEGRATED`, Nano ✅ / Flow No. Prompt files
generated when the parent hero reaches `FINAL`.

| Group          | IDs                                                                                                             | Folder pattern               |
| -------------- | --------------------------------------------------------------------------------------------------------------- | ---------------------------- |
| Industries (8) | `IND-FIN-SEC` `IND-HEA-SEC` `IND-TRA-SEC` `IND-SAA-SEC` `IND-TEC-SEC` `IND-REC-SEC` `IND-ECO-SEC` `IND-PRO-SEC` | industries/<slug>/secondary/ |
| Services (20)  | `SVC-<slug>-SEC` ×20                                                                                            | services/<slug>/secondary/   |
| About (1)      | `ABT-SEC`                                                                                                       | about/culture/               |
| Careers (1)    | `CAR-SEC`                                                                                                       | careers/culture/             |
| Case study (1) | `CS-RES` (results treatment, may be typographic)                                                                | case-studies/results/        |

---

**Totals:** 69 primary + 32 secondary = **101 remaining**. Integration status:
all `NOT INTEGRATED`. Every asset above is **Ready for Nano Banana** once its
prompt file exists (Phases A–C written; D–G use the per-page archetype from
`PRODUCTION-GUIDE.md §3` and are written on demand).

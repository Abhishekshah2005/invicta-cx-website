/**
 * Central route registry — the single source of truth for the site's IA.
 * Drives navigation, breadcrumbs, the sitemap, and per-page metadata. Adding a
 * page means adding it here; templates and SEO pick it up automatically.
 *
 * Content is intentionally scaffold-level (labels + short descriptions) — real
 * production copy lands in later phases.
 */

export interface RouteMeta {
  slug: string;
  /** Path segment label, used in nav + breadcrumbs + page title. */
  label: string;
  /** Short description for page hero + metadata. Placeholder-grade for now. */
  description: string;
}

/** Top-level static routes. */
export const ROUTES = {
  home: "/",
  industries: "/industries",
  services: "/services",
  method: "/method",
  caseStudies: "/case-studies",
  insights: "/insights",
  about: "/about",
  careers: "/careers",
  contact: "/contact",
  privacy: "/privacy",
  terms: "/terms",
} as const;

/** Industry detail pages (`/industries/[slug]`). Gaming has a bespoke page. */
export const INDUSTRIES: RouteMeta[] = [
  {
    slug: "gaming",
    label: "Gaming & iGaming",
    description:
      "End-to-end player support, trust & safety, and VIP operations for iGaming and sweepstakes platforms.",
  },
  {
    slug: "fintech",
    label: "FinTech",
    description:
      "KYC, AML, fraud defense, and human support for financial platforms where trust is the product.",
  },
  {
    slug: "saas",
    label: "SaaS",
    description: "Scalable, on-brand customer support and retention for software companies.",
  },
  {
    slug: "technology",
    label: "Technology",
    description: "Tier-2 technical support and trust operations for technology businesses.",
  },
  {
    slug: "healthcare",
    label: "Healthcare",
    description: "Compassionate, compliant patient and member support.",
  },
  {
    slug: "travel",
    label: "Travel & Hospitality",
    description: "24/7 traveler support for a category that never sleeps.",
  },
  {
    slug: "ecommerce",
    label: "E-commerce & Retail",
    description:
      "Pre-sale, post-purchase, and peak-season support that protects revenue and repeat rate.",
  },
  {
    slug: "recruitment",
    label: "Recruitment",
    description: "Candidate care and coordination that protects your employer brand.",
  },
  {
    slug: "professional-services",
    label: "Professional Services",
    description: "White-glove client support for professional and B2B services.",
  },
];

/** Service detail pages (`/services/[slug]`). */
export const SERVICES: RouteMeta[] = [
  {
    slug: "customer-support",
    label: "Customer Support",
    description: "Omnichannel human support with sub-60-second first response.",
  },
  {
    slug: "live-chat",
    label: "Live Chat",
    description: "Real-time, on-brand conversations at scale.",
  },
  {
    slug: "email-support",
    label: "Email Support",
    description: "Thorough, on-tone written resolutions.",
  },
  {
    slug: "technical-support",
    label: "Technical Support",
    description: "Tier-2 troubleshooting that actually resolves.",
  },
  {
    slug: "phone-support",
    label: "Phone Support",
    description: "A human voice for the moments that need one.",
  },
  {
    slug: "community-moderation",
    label: "Community Moderation",
    description: "Safe, healthy communities and platforms.",
  },
  {
    slug: "vip-management",
    label: "VIP Management",
    description: "Dedicated account managers who grow lifetime value.",
  },
  {
    slug: "kyc",
    label: "KYC",
    description: "Fast, rigorous identity, age, and document verification.",
  },
  {
    slug: "fraud-prevention",
    label: "Fraud Prevention",
    description: "AML review, multi-accounting, and chargeback defense.",
  },
  {
    slug: "quality-assurance",
    label: "Quality Assurance",
    description: "Weekly audits that keep service elite.",
  },
  {
    slug: "lead-generation",
    label: "Lead Generation",
    description: "Qualified, human-verified pipeline.",
  },
  {
    slug: "appointment-setting",
    label: "Appointment Setting",
    description: "Booked meetings, not busywork.",
  },
  {
    slug: "payment-support",
    label: "Payment Support",
    description: "Billing, refunds, disputes, and failed-payment recovery, handled with care.",
  },
  {
    slug: "back-office",
    label: "Back Office Support",
    description: "Data, order processing, and administrative work that keeps operations running.",
  },
  {
    slug: "workforce-management",
    label: "Workforce Management",
    description: "Forecasting, scheduling, and real-time management that keeps SLAs on target.",
  },
  {
    slug: "virtual-assistance",
    label: "Virtual Assistance",
    description: "Dedicated remote assistants for admin, coordination, and executive support.",
  },
  {
    slug: "social-media-support",
    label: "Social Media Support",
    description: "On-brand response and community care across every social channel.",
  },
  {
    slug: "omnichannel-support",
    label: "Omnichannel Support",
    description: "One seamless conversation across chat, email, phone, and social.",
  },
  {
    slug: "knowledge-base-management",
    label: "Knowledge Base Management",
    description: "Help centres and internal knowledge kept accurate, findable, and current.",
  },
  {
    slug: "customer-retention",
    label: "Customer Retention",
    description: "Proactive save, win-back, and loyalty programs that protect revenue.",
  },
];

/** Case study detail pages (`/case-studies/[slug]`). */
export const CASE_STUDIES: RouteMeta[] = [
  {
    slug: "lunaland-casino",
    label: "Lunaland Casino",
    description: "How we protected 700+ titles and a sustained 4.5-star reputation.",
  },
];

/** Insight/article pages (`/insights/[slug]`). */
export const INSIGHTS: RouteMeta[] = [
  {
    slug: "cost-of-a-churned-vip",
    label: "The true cost of a churned VIP player",
    description: "Why retention is the highest-leverage number in your operation.",
  },
  {
    slug: "kyc-without-friction",
    label: "KYC without friction: the operator's playbook",
    description: "Clearing real players fast without opening the door to the rest.",
  },
  {
    slug: "sixty-seconds-loyalty",
    label: "Why sixty seconds decides customer loyalty",
    description: "The first-response window that quietly determines lifetime value.",
  },
];

/** Metadata for the top-level static pages (used by their `page.tsx`). */
export const PAGE_META: Record<string, { title: string; description: string }> = {
  industries: {
    title: "Industries",
    description:
      "One human operating standard, applied to every industry where customer trust is the business.",
  },
  services: {
    title: "Services",
    description:
      "A complete customer operation, staffed by specialists — deploy one capability or an entire team.",
  },
  method: {
    title: "The Invicta Method",
    description:
      "How we recruit, train, measure, and schedule the human layer behind great customer experience.",
  },
  "case-studies": {
    title: "Case Studies",
    description: "Proof from the operations we run — measurable outcomes, not marketing.",
  },
  insights: {
    title: "Insights",
    description: "Perspectives on the business of customer trust, retention, and human support.",
  },
  about: {
    title: "About Invicta",
    description: "The human customer experience partner — who we are and what we stand for.",
  },
  careers: {
    title: "Careers",
    description: "Join the people who become an extension of the world's most demanding brands.",
  },
  contact: {
    title: "Talk to an Expert",
    description: "Start a conversation with a specialist who already speaks your world.",
  },
  privacy: { title: "Privacy Policy", description: "How Invicta handles data and privacy." },
  terms: {
    title: "Terms of Service",
    description: "The terms governing use of the Invicta website.",
  },
};

/** Every URL path on the site — consumed by the sitemap. */
export function allPaths(): string[] {
  return [
    ROUTES.home,
    ROUTES.industries,
    ...INDUSTRIES.map((i) => `${ROUTES.industries}/${i.slug}`),
    ROUTES.services,
    ...SERVICES.map((s) => `${ROUTES.services}/${s.slug}`),
    ROUTES.method,
    ROUTES.caseStudies,
    ...CASE_STUDIES.map((c) => `${ROUTES.caseStudies}/${c.slug}`),
    ROUTES.insights,
    ...INSIGHTS.map((a) => `${ROUTES.insights}/${a.slug}`),
    ROUTES.about,
    ROUTES.careers,
    ROUTES.contact,
    ROUTES.privacy,
    ROUTES.terms,
  ];
}

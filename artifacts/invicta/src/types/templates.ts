/**
 * Content contracts for the four master page templates.
 *
 * These interfaces are the data model every future page fills in — the template
 * components are pure presentation and render whatever conforms to these shapes.
 * No copy lives here; this only defines *what* a page must supply, never *what*
 * it says. Optional sections may be omitted and the template skips them.
 */

/* ── Shared building blocks ─────────────────────────────────────────────── */

/** A labelled link (button / inline). */
export interface LinkAction {
  label: string;
  href: string;
}

/** The masked hero at the top of every template. */
export interface TemplateHero {
  eyebrow?: string;
  title: string;
  lead?: string;
  /** Art-direction note for the intended photograph (until real assets land). */
  imageLabel?: string;
  /** Real backdrop photo (public path). Rendered under the cinematic gradient. */
  image?: string;
  /** CSS object-position for the backdrop (e.g. "center", "60% center"). */
  imageFocus?: string;
  /** Primary hero call-to-action (magnetic button). */
  cta?: LinkAction;
  /** Optional secondary hero call-to-action (outline button). */
  secondaryCta?: LinkAction;
}

/** Standard section header: eyebrow → serif title → lead. */
export interface SectionIntro {
  eyebrow?: string;
  title: string;
  lead?: string;
}

/** A title + body pair — the atom of challenge/value/benefit lists. */
export interface TitledPoint {
  title: string;
  body: string;
  /** Optional image path shown on the front face of a flip card. */
  image?: string;
}

/** An ordered step in a process / workflow / implementation section. */
export interface ProcessStep {
  title: string;
  body: string;
  /** Optional short label (e.g. "Week 1", "Phase 01"). */
  marker?: string;
}

/** A count-up proof metric (feeds the `Stat` primitive). */
export interface Metric {
  value: number;
  prefix?: string;
  suffix?: string;
  decimals?: number;
  label: string;
}

/** A capability/integration cluster. Integrations named generally, never as
 *  claimed partnerships. */
export interface TechGroup {
  name: string;
  items: string[];
}

/** A question/answer pair — rendered as an accordion AND as FAQPage JSON-LD. */
export interface FaqEntry {
  question: string;
  answer: string;
}

/** A card linking to a related page (industry, service, article). */
export interface RelatedItem {
  href: string;
  label: string;
  description: string;
  meta?: string;
}

/** Optional override for the shared closing CTA. */
export interface CtaOverride {
  title?: string;
  lead?: string;
  primary?: { label: string; href: string };
  secondary?: { label: string; href: string };
}

/** A compact case-study callout embedded inside an industry page. */
export interface CaseStudyTeaser {
  eyebrow?: string;
  client: string;
  title: string;
  summary: string;
  href: string;
  /** Link text — defaults to "Read the full story". Set for representative
   *  (non-client) engagements that link to /contact or /method instead. */
  linkLabel?: string;
  metrics?: Metric[];
}

/* ── Master Industry template ───────────────────────────────────────────── */

export interface IndustryContent {
  slug: string;
  hero: TemplateHero;
  overview: { intro: SectionIntro; paragraphs: string[] };
  challenges: { intro: SectionIntro; items: TitledPoint[] };
  whyInvicta: { intro: SectionIntro; points: TitledPoint[] };
  servicesUsed: { intro: SectionIntro; items: RelatedItem[] };
  technology: { intro: SectionIntro; groups: TechGroup[] };
  process: { intro: SectionIntro; steps: ProcessStep[] };
  kpis: { intro?: SectionIntro; metrics: Metric[] };
  caseStudy?: CaseStudyTeaser;
  faqs: FaqEntry[];
  related: { intro: SectionIntro; items: RelatedItem[] };
  cta?: CtaOverride;
}

/* ── Master Service template ────────────────────────────────────────────── */

export interface ServiceContent {
  slug: string;
  hero: TemplateHero;
  /** "Why this service matters" — the overview. */
  overview: { intro: SectionIntro; paragraphs: string[] };
  challenges: { intro: SectionIntro; items: TitledPoint[] };
  /** "How Invicta solves them" — the approach. */
  approach: { intro: SectionIntro; points: TitledPoint[] };
  workflow: { intro: SectionIntro; steps: ProcessStep[] };
  technology: { intro: SectionIntro; groups: TechGroup[] };
  benefits: { intro: SectionIntro; items: TitledPoint[] };
  /** Optional large-typography beat between benefits and the industries grid. */
  statement?: { statement: string; context?: string };
  /** "Industries using this service" — cross-links to industry pages. */
  industriesUsing: { intro: SectionIntro; items: RelatedItem[] };
  kpis: { intro?: SectionIntro; metrics: Metric[] };
  related: { intro: SectionIntro; items: RelatedItem[] };
  faqs: FaqEntry[];
  cta?: CtaOverride;
}

/* ── Master Case Study template ─────────────────────────────────────────── */

export interface CaseStudyContent {
  slug: string;
  hero: TemplateHero;
  client: {
    name: string;
    /** Short descriptor list (industry, region, size) — factual only. */
    facts: { label: string; value: string }[];
    summary: string;
  };
  challenge: { intro: SectionIntro; paragraphs: string[] };
  objectives: { intro: SectionIntro; items: string[] };
  discovery: { intro: SectionIntro; paragraphs: string[] };
  implementation: { intro: SectionIntro; steps: ProcessStep[] };
  technology: { intro: SectionIntro; groups: TechGroup[] };
  results: { intro: SectionIntro; metrics: Metric[]; paragraphs?: string[] };
  lessons: { intro: SectionIntro; quote: string; attribution?: string };
  relatedServices: { intro: SectionIntro; items: RelatedItem[] };
  cta?: CtaOverride;
}

/* ── Master Insight (article) template ──────────────────────────────────── */

/** A structured article body block — the renderer maps each to an element. */
export type ArticleBlock =
  | { type: "paragraph"; text: string }
  | { type: "heading"; text: string }
  | { type: "quote"; text: string; attribution?: string }
  | { type: "list"; items: string[] }
  | { type: "image"; imageLabel: string; caption?: string };

export interface Author {
  name: string;
  role: string;
  /** Art-direction note for the author portrait. */
  imageLabel?: string;
  bio?: string;
}

export interface InsightContent {
  slug: string;
  hero: TemplateHero & {
    /** ISO date string; rendered + used for article schema. */
    date: string;
    readingTime?: string;
    category?: string;
  };
  body: ArticleBlock[];
  author: Author;
  related: { intro: SectionIntro; items: RelatedItem[] };
  cta?: CtaOverride;
}

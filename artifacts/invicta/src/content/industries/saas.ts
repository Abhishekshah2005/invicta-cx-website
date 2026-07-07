import type { IndustryContent } from "@/types/templates";
import { serviceItem, industryItem } from "./_shared";

/**
 * SaaS industry page content. Register: support as a retention engine — churn is
 * the enemy, and human support is how you beat it.
 */
export const saas: IndustryContent = {
  slug: "saas",
  hero: {
    eyebrow: "Industries — SaaS",
    title: "In SaaS, support isn't a cost centre. It's your retention engine.",
    lead: "Invicta runs on-brand, technically fluent support that turns tickets into renewals — resolving fast, scaling with you, and protecting the revenue you've already won.",
    imageLabel:
      "A SaaS support specialist at a clean multi-monitor desk, focused and calm, modern daylight — editorial, shallow depth of field.",
    image: "/assets/industries/saas/hero/hero.png",
    cta: { label: "Talk to an Expert", href: "/contact" },
    secondaryCta: { label: "See how we operate", href: "/method" },
  },
  overview: {
    intro: {
      eyebrow: "Overview",
      title: "The cheapest revenue you'll ever earn is the customer you keep",
      lead: "Acquisition gets the headlines; retention pays the bills. Support is where retention is won or lost.",
    },
    paragraphs: [
      "Software customers churn quietly. A confusing onboarding, an unanswered question, or a bug that lingers doesn't always generate a complaint — it generates a non-renewal you never saw coming.",
      "We staff support with specialists who actually understand your product, so customers get real resolutions, not deflection. Fast, competent help early in the lifecycle is the strongest predictor of the customer still being here next year.",
      "The outcome is an operation that lowers churn, lifts expansion, and lets your engineers build instead of firefighting the same tickets over and over.",
    ],
  },
  challenges: {
    intro: {
      eyebrow: "The problem",
      title: "What SaaS companies struggle with",
      lead: "Growth multiplies support demand faster than teams can hire for it.",
    },
    items: [
      {
        title: "Churn hides inside support quality",
        body: "Customers rarely announce they're leaving. Slow or shallow help is the leading indicator you can actually control.",
        image: "/assets/industries/saas/challenges/01.png",
      },
      {
        title: "Tier-2 questions overwhelm generalists",
        body: "Real product issues need people who understand the software. Untrained agents just escalate everything to engineering.",
        image: "/assets/industries/saas/challenges/02.png",
      },
      {
        title: "Engineers become a support queue",
        body: "When frontline support can't resolve, your most expensive people get pulled off the roadmap to answer tickets.",
        image: "/assets/industries/saas/challenges/03.png",
      },
      {
        title: "Scaling support lags scaling users",
        body: "Every growth spurt, launch, or enterprise deal spikes volume, and hiring and training in-house never keeps pace.",
        image: "/assets/industries/saas/challenges/04.png",
      },
      {
        title: "Brand voice slips under pressure",
        body: "As volume climbs, tone and consistency are the first casualties — right when customer perception matters most.",
        image: "/assets/industries/saas/challenges/05.png",
      },
    ],
  },
  whyInvicta: {
    intro: {
      eyebrow: "How Invicta solves it",
      title: "Support that resolves, retains, and sounds like you",
      lead: "Technically fluent specialists who protect both the customer and the roadmap.",
    },
    points: [
      {
        title: "Product experts, not ticket-deflectors",
        body: "We train agents deep on your software so they resolve tier-2 issues that generalist teams simply escalate.",
      },
      {
        title: "Engineering stays on the roadmap",
        body: "By resolving the repeatable and the technical, we keep your engineers building instead of answering the same question twice a day.",
      },
      {
        title: "Retention measured, not assumed",
        body: "We watch renewal-adjacent signals — resolution quality, effort, sentiment — and coach toward keeping customers, not just closing tickets.",
      },
      {
        title: "Your voice at any volume",
        body: "Tone discipline and QA keep every reply on-brand whether you're doing a hundred tickets a day or ten thousand.",
      },
      {
        title: "Capacity that scales with ARR",
        body: "Workforce planning ramps cover for launches, seasonal peaks, and enterprise onboarding without a hiring scramble.",
      },
    ],
  },
  servicesUsed: {
    intro: {
      eyebrow: "Relevant services",
      title: "The capabilities SaaS teams deploy with us",
      lead: "Frontline to tier-2, staffed by specialists who know your product.",
    },
    items: [
      serviceItem(
        "customer-support",
        "Omnichannel product support that resolves and retains.",
        "Core",
      ),
      serviceItem(
        "technical-support",
        "Tier-2 troubleshooting for integrations, APIs, and bugs.",
        "Tier-2",
      ),
      serviceItem("live-chat", "In-app, real-time help at the moment of friction.", "Real-time"),
      serviceItem(
        "email-support",
        "Thorough written resolutions with an on-brand voice.",
        "Written",
      ),
      serviceItem(
        "vip-management",
        "Dedicated attention for enterprise and high-value accounts.",
        "Retention",
      ),
      serviceItem(
        "quality-assurance",
        "Weekly audits that keep resolution quality and tone high.",
        "Excellence",
      ),
    ],
  },
  technology: {
    intro: {
      eyebrow: "Technology",
      title: "We live in your product and your stack",
      lead: "Our specialists operate inside the tools you already run, and learn your software to real depth.",
    },
    groups: [
      { name: "CRM & success", items: ["Salesforce", "HubSpot", "Gainsight-class success tools"] },
      {
        name: "Ticketing & workflow",
        items: ["Zendesk", "Freshdesk", "Intercom", "Jira Service Management"],
      },
      {
        name: "Knowledge base",
        items: ["Guru", "Notion", "Confluence", "In-product help centres"],
      },
      { name: "In-app & live chat", items: ["Intercom", "Zendesk Messaging", "In-app widgets"] },
      {
        name: "Engineering handoff",
        items: ["Jira", "Linear", "GitHub issues", "Structured bug reports"],
      },
      {
        name: "Analytics & QA",
        items: ["CSAT / CES", "Resolution & escalation rates", "Sentiment tracking"],
      },
    ],
  },
  process: {
    intro: {
      eyebrow: "Our operating model",
      title: "How the operation actually runs",
      lead: "The engine behind support that lowers churn instead of just closing tickets.",
    },
    steps: [
      {
        marker: "01",
        title: "Training & certification",
        body: "Agents go deep on your product, common issues, and escalation criteria, then certify on real tickets before going live.",
      },
      {
        marker: "02",
        title: "Quality assurance",
        body: "QA scores real interactions weekly on resolution quality, accuracy, and tone — not just speed — to protect retention.",
      },
      {
        marker: "03",
        title: "Escalation management",
        body: "Clear criteria and clean, reproducible bug reports get genuine engineering issues to your team fast, with everything else resolved by us.",
      },
      {
        marker: "04",
        title: "Workforce management",
        body: "Forecasting ramps cover for launches, seasonal peaks, and enterprise onboarding so SLAs hold as you grow.",
      },
      {
        marker: "05",
        title: "Leadership & coaching",
        body: "Team leads own a tight span of agents and coach toward the retention and quality metrics that matter.",
      },
      {
        marker: "06",
        title: "SLAs & reporting",
        body: "Response, resolution, CSAT, and escalation rates are contracted and reported transparently.",
      },
      {
        marker: "07",
        title: "24/7 coverage",
        body: "Global software has global users — follow-the-sun staffing keeps support live around the clock.",
      },
    ],
  },
  kpis: {
    intro: {
      eyebrow: "The standard we operate to",
      title: "Targets we hold ourselves to",
      lead: "The operating standard behind every SaaS engagement.",
    },
    metrics: [
      { value: 60, prefix: "<", suffix: "s", label: "First response target" },
      { value: 80, suffix: "%", label: "First-contact resolution target" },
      { value: 95, suffix: "%+", label: "QA score standard" },
      { value: 24, suffix: "/7", label: "Coverage" },
    ],
  },
  caseStudy: {
    eyebrow: "Representative engagement",
    client: "A B2B SaaS scale-up",
    title: "Cutting escalations to engineering while lifting CSAT.",
    summary:
      "A composite of the SaaS operations we run: a product-trained support pod resolved the tier-2 tickets that used to land on engineers, drove first-contact resolution up, and kept the brand voice intact through a period of fast growth.",
    href: "/contact",
    linkLabel: "Discuss a similar engagement",
    metrics: [
      { value: 80, suffix: "%", label: "First-contact resolution" },
      { value: 4.7, suffix: "★", decimals: 1, label: "CSAT, sustained" },
      { value: 60, prefix: "<", suffix: "s", label: "First response" },
    ],
  },
  faqs: [
    {
      question: "Can your agents handle technical, tier-2 tickets?",
      answer:
        "Yes. We train agents deep on your product so they resolve integration, API, and bug-adjacent issues that generalist teams simply escalate.",
    },
    {
      question: "Will this reduce the load on our engineers?",
      answer:
        "That's a primary goal. By resolving the repeatable and the technical — and sending only genuine, well-documented bugs onward — we keep engineering on the roadmap.",
    },
    {
      question: "How do you help with retention?",
      answer:
        "We measure resolution quality, effort, and sentiment, not just ticket volume, and coach toward the interactions that keep customers renewing and expanding.",
    },
    {
      question: "Can you keep our brand voice?",
      answer:
        "Yes. Tone is trained and enforced through QA, so every reply sounds like your company whether you're at a hundred or ten thousand tickets a day.",
    },
    {
      question: "How fast can you scale for a launch?",
      answer:
        "Workforce planning ramps trained cover for launches, seasonal peaks, and enterprise onboarding without the in-house hiring scramble.",
    },
    {
      question: "Which tools do you work in?",
      answer:
        "We operate inside your existing CRM, ticketing, and in-app support tools, and hand off to your engineering tracker with clean, reproducible reports.",
    },
    {
      question: "Do you support in-app and live chat?",
      answer:
        "Yes. Real-time, in-product help at the moment of friction is one of the highest-leverage channels for retention, and a core capability.",
    },
    {
      question: "How is quality measured?",
      answer:
        "A dedicated QA team scores real interactions weekly on resolution quality, accuracy, and tone, feeding coaching and transparent reporting.",
    },
    {
      question: "What does onboarding an engagement look like?",
      answer:
        "We learn your product, map your escalation criteria, build the playbooks and QA rubric, train and certify the pod, then ramp in stages with your team watching the metrics.",
    },
    {
      question: "Do you handle enterprise and VIP accounts differently?",
      answer:
        "Yes. High-value accounts can get dedicated attention and tighter SLAs through our VIP management capability, protecting the revenue that matters most.",
    },
  ],
  related: {
    intro: {
      eyebrow: "Related industries",
      title: "Where the same standard applies",
      lead: "Software-adjacent operations that live on retention.",
    },
    items: [
      industryItem("technology", "Tier-2 technical support and trust operations."),
      industryItem("fintech", "Regulated support where trust is the product."),
      industryItem("ecommerce", "Revenue-protecting support across the buying journey."),
    ],
  },
  cta: {
    title: "Turn support into the reason customers stay.",
    lead: "Let's build the retention engine behind your product — starting with a conversation, not a contract.",
  },
};

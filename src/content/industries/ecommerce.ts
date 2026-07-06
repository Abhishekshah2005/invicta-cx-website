import type { IndustryContent } from "@/types/templates";
import { serviceItem, industryItem } from "./_shared";

/**
 * E-commerce & Retail industry page content. Register: support as revenue —
 * pre-sale conversion, post-purchase loyalty, and peak-season resilience.
 */
export const ecommerce: IndustryContent = {
  slug: "ecommerce",
  hero: {
    eyebrow: "Industries — E-commerce & Retail",
    title: "Every question is a sale about to happen — or about to be lost.",
    lead: "Invicta runs the pre-sale, post-purchase, and peak-season support behind e-commerce brands — protecting conversion, revenue, and the repeat rate that actually makes the numbers work.",
    imageLabel:
      "An e-commerce support specialist helping a shopper over live chat, warm and quick, bright modern light — editorial, human.",
    image: "/assets/industries/ecommerce/hero/hero.jpg",
    cta: { label: "Talk to an Expert", href: "/contact" },
    secondaryCta: { label: "See how we operate", href: "/method" },
  },
  overview: {
    intro: {
      eyebrow: "Overview",
      title: "Support is the storefront's most underrated revenue channel",
      lead: "A hesitant shopper answered in seconds buys. Left waiting, they close the tab.",
    },
    paragraphs: [
      "In e-commerce, support sits directly on the money. A pre-sale question answered fast converts; a post-purchase problem handled well protects the repeat customer who makes the unit economics work.",
      "We staff both ends of that journey with specialists trained on your catalogue, policies, and brand voice — resolving quickly, recommending confidently, and turning returns and complaints into reasons to come back.",
      "The result is measurable: higher conversion on chat, lower refund leakage, protected reviews, and support that scales cleanly through Black Friday and every other peak.",
    ],
  },
  challenges: {
    intro: {
      eyebrow: "The problem",
      title: "What e-commerce brands struggle with",
      lead: "Thin margins, high volume, and a customer one click from a competitor.",
    },
    items: [
      {
        title: "Slow answers are lost sales",
        body: "A pre-sale question that waits is a cart that empties. Speed at the point of intent is revenue you can see or watch leave.",
      },
      {
        title: "Post-purchase problems decide loyalty",
        body: "Returns, delays, and mix-ups are where repeat customers are made or lost — and repeat rate is what makes the model profitable.",
      },
      {
        title: "Peak season breaks fragile operations",
        body: "Black Friday and holidays multiply volume overnight, and understaffed support turns a sales peak into a review crisis.",
      },
      {
        title: "Reviews and ratings are ruthless",
        body: "One mishandled order becomes a public one-star that quietly suppresses conversion for everyone who reads it.",
      },
      {
        title: "Brand voice is hard to hold at scale",
        body: "As volume climbs, consistency slips, and generic support erodes the brand you spent so much to build.",
      },
    ],
  },
  whyInvicta: {
    intro: {
      eyebrow: "How Invicta solves it",
      title: "A support operation that defends the revenue line",
      lead: "Fast, on-brand, and built to convert and retain — not just deflect.",
    },
    points: [
      {
        title: "Pre-sale support that converts",
        body: "Fast, knowledgeable answers at the moment of intent turn browsers into buyers on chat, email, and phone.",
      },
      {
        title: "Post-purchase care that retains",
        body: "Returns, delays, and issues handled generously protect the repeat customer your margins depend on.",
      },
      {
        title: "Peak season, absorbed",
        body: "Workforce planning scales trained cover for Black Friday and holidays so service holds when sales are highest.",
      },
      {
        title: "Your brand, in every reply",
        body: "Agents are trained on your voice and catalogue, so support sounds like your brand at any volume.",
      },
      {
        title: "Reviews actively protected",
        body: "Resolving problems well — before they become public — keeps ratings high and conversion healthy.",
      },
    ],
  },
  servicesUsed: {
    intro: {
      eyebrow: "Relevant services",
      title: "The capabilities e-commerce teams deploy with us",
      lead: "Across the whole buying journey, staffed by trained specialists.",
    },
    items: [
      serviceItem(
        "customer-support",
        "Omnichannel pre-sale and post-purchase support that protects revenue.",
        "Core",
      ),
      serviceItem("live-chat", "Real-time help at the moment of purchase intent.", "Convert"),
      serviceItem(
        "email-support",
        "On-brand written resolutions for orders, returns, and claims.",
        "Written",
      ),
      serviceItem("phone-support", "A human voice for high-value and high-stress orders.", "Voice"),
      serviceItem(
        "community-moderation",
        "Reviews and UGC kept healthy and on-policy.",
        "Trust & safety",
      ),
      serviceItem(
        "quality-assurance",
        "Audits that keep speed, tone, and accuracy consistently high.",
        "Excellence",
      ),
    ],
  },
  technology: {
    intro: {
      eyebrow: "Technology",
      title: "We operate inside your commerce stack",
      lead: "Our specialists work in your storefront, helpdesk, and post-purchase tools, integrating cleanly across channels.",
    },
    groups: [
      { name: "Commerce & CRM", items: ["Shopify", "Salesforce Commerce", "Custom storefronts"] },
      { name: "Helpdesk & ticketing", items: ["Gorgias", "Zendesk", "Freshdesk", "Intercom"] },
      {
        name: "Knowledge base",
        items: ["Catalogue & policy playbooks", "Returns scripts", "Guru / Notion"],
      },
      {
        name: "Live chat & channels",
        items: ["Live chat", "WhatsApp & social DMs", "Email & voice"],
      },
      {
        name: "Post-purchase & logistics",
        items: ["Order & tracking tools", "Returns platforms", "Carrier lookups"],
      },
      {
        name: "Analytics & QA",
        items: ["Chat-to-conversion", "Refund & CSAT tracking", "Interaction scoring"],
      },
    ],
  },
  process: {
    intro: {
      eyebrow: "Our operating model",
      title: "How the operation actually runs",
      lead: "The engine behind support that protects conversion and repeat rate.",
    },
    steps: [
      {
        marker: "01",
        title: "Training & certification",
        body: "Agents learn your catalogue, policies, and brand voice, and certify on real pre-sale and post-purchase scenarios before going live.",
      },
      {
        marker: "02",
        title: "Quality assurance",
        body: "QA scores real interactions weekly on speed, accuracy, and tone — including whether the reply actually helped convert or retain.",
      },
      {
        marker: "03",
        title: "Escalation management",
        body: "High-value orders, disputes, and exceptions route to the right specialist fast, so revenue-critical cases never wait in a general queue.",
      },
      {
        marker: "04",
        title: "Workforce management",
        body: "Forecasting scales cover for Black Friday, holidays, and campaigns so response times hold at peak.",
      },
      {
        marker: "05",
        title: "Leadership & coaching",
        body: "Team leads own a tight span of agents and coach toward the conversion and retention metrics that move revenue.",
      },
      {
        marker: "06",
        title: "SLAs & reporting",
        body: "Response, resolution, chat-conversion, and CSAT are contracted and reported transparently.",
      },
      {
        marker: "07",
        title: "24/7 coverage",
        body: "Shoppers buy at all hours across regions — follow-the-sun staffing keeps support live around the clock.",
      },
    ],
  },
  kpis: {
    intro: {
      eyebrow: "The standard we operate to",
      title: "Targets we hold ourselves to",
      lead: "The operating standard behind every e-commerce engagement.",
    },
    metrics: [
      { value: 60, prefix: "<", suffix: "s", label: "First response target" },
      { value: 24, suffix: "/7", label: "Coverage" },
      { value: 95, suffix: "%+", label: "QA score standard" },
      { value: 80, suffix: "%", label: "First-contact resolution target" },
    ],
  },
  caseStudy: {
    eyebrow: "Representative engagement",
    client: "A direct-to-consumer retail brand",
    title: "Protecting revenue through a Black Friday surge.",
    summary:
      "A composite of the e-commerce operations we run: a brand-trained pod scaled for peak, converted more pre-sale chats, handled returns generously enough to keep customers coming back, and held satisfaction high through the busiest week of the year.",
    href: "/contact",
    linkLabel: "Discuss a similar engagement",
    metrics: [
      { value: 4.7, suffix: "★", decimals: 1, label: "CSAT, sustained" },
      { value: 80, suffix: "%", label: "First-contact resolution" },
      { value: 24, suffix: "/7", label: "Peak coverage" },
    ],
  },
  faqs: [
    {
      question: "Can support actually increase our conversion?",
      answer:
        "Yes. Fast, knowledgeable pre-sale answers on chat and phone turn hesitant browsers into buyers at the exact moment of intent — a channel most brands under-use.",
    },
    {
      question: "Do you handle returns and post-purchase issues?",
      answer:
        "Yes. Returns, delays, and order problems are handled generously and on-policy, because that's where the repeat customer your margins depend on is won or lost.",
    },
    {
      question: "How do you handle Black Friday and peak season?",
      answer:
        "Workforce planning scales trained cover for peaks and campaigns, so speed and quality hold when volume — and revenue — are highest.",
    },
    {
      question: "Can you keep our brand voice?",
      answer:
        "Yes. Agents train on your catalogue and tone, and QA enforces it, so support sounds like your brand whether it's a quiet Tuesday or peak week.",
    },
    {
      question: "Which platforms do you work in?",
      answer:
        "We operate inside your existing commerce, helpdesk, and post-purchase tools rather than forcing a migration, and integrate across your channels.",
    },
    {
      question: "Do you support chat, social, and messaging?",
      answer:
        "Yes. We meet shoppers where they are — live chat, social DMs, messaging apps, email, and voice — matched to your customers' habits.",
    },
    {
      question: "Can you moderate reviews and user content?",
      answer:
        "Yes. Keeping reviews and UGC healthy and on-policy protects both trust and conversion, and runs alongside your support.",
    },
    {
      question: "How is quality measured?",
      answer:
        "A dedicated QA team scores real interactions weekly on speed, accuracy, tone, and whether the reply actually helped convert or retain — with transparent reporting.",
    },
    {
      question: "How quickly can you launch before a peak?",
      answer:
        "We map your catalogue and policies, build the playbooks, train and certify the pod, and ramp ahead of your peak with the team watching the metrics.",
    },
    {
      question: "Do you offer multilingual support?",
      answer:
        "Yes. We staff coverage across the languages and regions your customers span, so international shoppers get the same fast, on-brand help.",
    },
  ],
  related: {
    intro: {
      eyebrow: "Related industries",
      title: "Where the same standard applies",
      lead: "Consumer-facing, revenue-critical operations adjacent to retail.",
    },
    items: [
      industryItem("travel", "Around-the-clock, multilingual support through disruption."),
      industryItem("technology", "Technically fluent support and platform trust."),
      industryItem("fintech", "Support for payments where trust is the product."),
    ],
  },
  cta: {
    title: "Turn every conversation into revenue and repeat business.",
    lead: "Let's build the support operation behind your storefront — starting with a conversation, not a contract.",
  },
};

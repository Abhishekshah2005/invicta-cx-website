import type { ServiceContent } from "@/types/templates";
import { industryItem, serviceItem } from "./_shared";

export const vipManagement: ServiceContent = {
  slug: "vip-management",
  hero: {
    eyebrow: "Services — VIP Management",
    title: "Your best customers deserve their own operation.",
    lead: "Invicta runs dedicated VIP and high-value account management — personal, proactive relationships that grow lifetime value and keep your most important customers loyal.",
    imageLabel:
      "A VIP account manager in a considered conversation, refined and attentive, warm light — premium.",
    image: "/assets/services/vip-management/hero/hero.png",
    cta: { label: "Talk to an Expert", href: "/contact" },
    secondaryCta: { label: "See how we operate", href: "/method" },
  },
  overview: {
    intro: {
      eyebrow: "Why it matters",
      title: "A small share of customers drives most of the value",
      lead: "Treat your top tier like everyone else and you'll lose them like everyone else.",
    },
    paragraphs: [
      "In most businesses, a minority of customers generate the majority of revenue. They expect — and deserve — a different level of attention than a standard support queue provides.",
      "We staff dedicated VIP managers who build real relationships: proactive contact, fast personal resolution, and the anticipation that makes high-value customers feel genuinely valued.",
      "The result is measurable: higher retention and lifetime value among the customers who matter most, and reactivation of those who'd started to drift.",
    ],
  },
  challenges: {
    intro: {
      eyebrow: "The problem",
      title: "Why VIP programs underdeliver",
      lead: "High-value relationships need dedication a shared queue can't give.",
    },
    items: [
      {
        title: "Top customers get generic service",
        body: "Lost in a standard queue, your most valuable customers feel like a number.",
        image: "/assets/services/vip-management/challenges/01.png",
      },
      {
        title: "Support is reactive, not proactive",
        body: "Waiting for VIPs to complain misses the chance to deepen the relationship.",
        image: "/assets/services/vip-management/challenges/02.png",
      },
      {
        title: "Churn among VIPs is expensive",
        body: "Losing a high-value customer costs far more than losing an average one.",
        image: "/assets/services/vip-management/challenges/03.png",
      },
      {
        title: "Personal attention is hard to scale",
        body: "Dedicated managers are costly to hire and hard to staff consistently.",
        image: "/assets/services/vip-management/challenges/04.png",
      },
    ],
  },
  approach: {
    intro: {
      eyebrow: "How Invicta solves it",
      title: "Dedicated managers who grow value",
      lead: "Real relationships, proactively managed.",
    },
    points: [
      {
        title: "A named person, not a queue",
        body: "VIPs get dedicated managers who know them, their history, and their preferences.",
      },
      {
        title: "Proactive, not just reactive",
        body: "Managers reach out, anticipate needs, and act before problems surface.",
      },
      {
        title: "Fast, personal resolution",
        body: "Issues are handled directly and quickly, with authority to make it right.",
      },
      {
        title: "Retention and reactivation focus",
        body: "Managers are measured on lifetime value, loyalty, and winning back drifting VIPs.",
      },
    ],
  },
  workflow: {
    intro: {
      eyebrow: "Workflow",
      title: "How a VIP relationship is run",
      lead: "From onboarding to lifetime loyalty.",
    },
    steps: [
      {
        marker: "01",
        title: "Identify & segment",
        body: "We define VIP tiers with you and assign dedicated managers to each relationship.",
      },
      {
        marker: "02",
        title: "Onboard personally",
        body: "Managers introduce themselves, learn preferences, and set the tone for the relationship.",
      },
      {
        marker: "03",
        title: "Engage proactively",
        body: "Regular, relevant contact keeps VIPs valued and surfaces needs early.",
      },
      {
        marker: "04",
        title: "Resolve with authority",
        body: "Issues are handled fast and personally, with the latitude to make things right.",
      },
      {
        marker: "05",
        title: "Grow & retain",
        body: "Managers deepen the relationship, lift lifetime value, and win back those who drift.",
      },
    ],
  },
  technology: {
    intro: {
      eyebrow: "Technology",
      title: "We work in your CRM",
      lead: "Our managers operate in your customer and loyalty systems.",
    },
    groups: [
      { name: "CRM & accounts", items: ["Salesforce", "HubSpot", "Custom account tools"] },
      { name: "Loyalty & rewards", items: ["Loyalty platforms", "Rewards & perks tracking"] },
      { name: "Channels", items: ["Personal email", "Phone", "Chat", "Messaging"] },
      { name: "Knowledge base", items: ["VIP playbooks", "Preference profiles", "Guru / Notion"] },
      {
        name: "Analytics & QA",
        items: ["Retention & LTV", "Reactivation rate", "Relationship scoring"],
      },
    ],
  },
  benefits: {
    intro: {
      eyebrow: "Benefits",
      title: "What you get",
      lead: "More value from the customers who matter most.",
    },
    items: [
      {
        title: "Higher lifetime value",
        body: "Deeper relationships grow spend and tenure among your top tier.",
      },
      {
        title: "Lower VIP churn",
        body: "Proactive, personal management keeps valuable customers loyal.",
      },
      {
        title: "Reactivated accounts",
        body: "Managers win back VIPs who'd started to drift away.",
      },
      { title: "A premium experience", body: "Your best customers feel genuinely valued." },
    ],
  },
  statement: {
    statement: "Loyalty is built by the person who remembers you, not the queue that forgets.",
    context: "Relationships, proactively managed",
  },
  industriesUsing: {
    intro: {
      eyebrow: "Industries",
      title: "Where this service delivers",
      lead: "Wherever a few customers drive the value.",
    },
    items: [
      industryItem("gaming", "VIP player management that grows LTV.", "Flagship"),
      industryItem("fintech", "High-value account relationships."),
      industryItem("professional-services", "White-glove client care."),
    ],
  },
  kpis: {
    intro: {
      eyebrow: "The standard we operate to",
      title: "Targets we hold ourselves to",
      lead: "Commitments behind every VIP-management engagement.",
    },
    metrics: [
      { value: 24, suffix: "/7", label: "VIP availability" },
      { value: 95, suffix: "%+", label: "QA score standard" },
      { value: 15, prefix: "<", suffix: "m", label: "VIP response target" },
      { value: 4.8, suffix: "★", decimals: 1, label: "VIP satisfaction target" },
    ],
  },
  related: {
    intro: {
      eyebrow: "Related services",
      title: "Pairs well with",
      lead: "Capabilities teams deploy alongside VIP management.",
    },
    items: [
      serviceItem("customer-retention", "Save and win-back programs at scale."),
      serviceItem("customer-support", "The frontline behind the VIP layer."),
      serviceItem("phone-support", "A personal voice for key moments."),
    ],
  },
  faqs: [
    {
      question: "How do you define who's a VIP?",
      answer:
        "We work with you to set the tiers — by spend, tenure, potential, or your own criteria — and assign dedicated managers accordingly.",
    },
    {
      question: "Do VIPs get a dedicated person?",
      answer: "Yes. The point is a named manager who knows the customer, not a rotating queue.",
    },
    {
      question: "Is the service proactive?",
      answer:
        "Yes. Managers reach out, anticipate needs, and act early, rather than only responding to complaints.",
    },
    {
      question: "Can you help reactivate lapsed VIPs?",
      answer:
        "Yes. Winning back high-value customers who've drifted is a core part of the mandate and a measured outcome.",
    },
    {
      question: "How do you measure success?",
      answer:
        "On lifetime value, retention, reactivation, and VIP satisfaction — not just tickets closed.",
    },
    {
      question: "Do you work in our CRM and loyalty tools?",
      answer: "Yes. Managers operate in your existing account and loyalty systems.",
    },
    {
      question: "What channels do VIP managers use?",
      answer: "Whatever suits the relationship — personal email, phone, chat, and messaging.",
    },
    {
      question: "How quickly can you launch?",
      answer:
        "We define tiers and playbooks with you, assign and train managers, then ramp relationships in stages.",
    },
  ],
  cta: {
    title: "Give your best customers a reason to stay for life.",
    lead: "Let's build the VIP operation behind your top tier — starting with a conversation, not a contract.",
  },
};

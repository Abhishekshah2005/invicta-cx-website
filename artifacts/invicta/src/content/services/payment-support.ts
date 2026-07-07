import type { ServiceContent } from "@/types/templates";
import { industryItem, serviceItem } from "./_shared";

export const paymentSupport: ServiceContent = {
  slug: "payment-support",
  hero: {
    eyebrow: "Services — Payment Support",
    title: "When it's about their money, tone is everything.",
    lead: "Invicta handles billing, refunds, disputes, and failed-payment recovery with the accuracy and calm those conversations demand — protecting revenue and trust at once.",
    imageLabel:
      "A payments specialist resolving a billing query, calm and precise, secure workspace — documentary.",
    image: "/assets/services/payment-support/hero/hero.jpg",
    cta: { label: "Talk to an Expert", href: "/contact" },
    secondaryCta: { label: "See how we operate", href: "/method" },
  },
  overview: {
    intro: {
      eyebrow: "Why it matters",
      title: "Payment problems are trust problems",
      lead: "A billing issue handled badly doesn't just cost a refund — it costs the relationship.",
    },
    paragraphs: [
      "Anything touching a customer's money is emotionally charged. A confusing charge, a stuck refund, or a failed payment turns quickly into frustration — and often into churn or a chargeback.",
      "We handle payment support with specialists trained for accuracy and calm: resolving billing queries, processing refunds correctly, managing disputes, and recovering failed payments without alienating the customer.",
      "The result is recovered revenue, fewer chargebacks, and customers who trust you even when something went wrong with a payment.",
    ],
  },
  challenges: {
    intro: {
      eyebrow: "The problem",
      title: "Where payment support goes wrong",
      lead: "Accuracy and empathy both have to be perfect.",
    },
    items: [
      {
        title: "Errors erode trust instantly",
        body: "A wrong charge or mishandled refund is the fastest way to lose a customer's confidence.",
      },
      {
        title: "Failed payments quietly churn customers",
        body: "Involuntary churn from expired cards and failed renewals leaks revenue you could recover.",
      },
      {
        title: "Disputes and chargebacks pile up",
        body: "Handling them properly is detailed, deadline-driven work that's easy to fall behind on.",
      },
      {
        title: "Emotion runs high",
        body: "Money conversations need calm and clarity, not a defensive script.",
      },
    ],
  },
  approach: {
    intro: {
      eyebrow: "How Invicta solves it",
      title: "Accurate, calm, revenue-protecting",
      lead: "Specialists who resolve money matters right the first time.",
    },
    points: [
      {
        title: "Accuracy first",
        body: "Billing, refunds, and adjustments are handled correctly and clearly, so trust isn't dented by errors.",
      },
      {
        title: "Failed-payment recovery",
        body: "Proactive dunning and outreach recover involuntary churn before it becomes lost revenue.",
      },
      {
        title: "Dispute management",
        body: "Chargebacks and disputes are worked with evidence and to deadline.",
      },
      {
        title: "Calm under money pressure",
        body: "Agents are trained to de-escalate and reassure on the most sensitive conversations.",
      },
    ],
  },
  workflow: {
    intro: {
      eyebrow: "Workflow",
      title: "How a payment issue is handled",
      lead: "From query to resolved and recorded.",
    },
    steps: [
      {
        marker: "01",
        title: "Understand & verify",
        body: "The issue and the account are checked carefully before any action on money.",
      },
      {
        marker: "02",
        title: "Resolve accurately",
        body: "Billing, refunds, or adjustments are processed correctly and explained clearly.",
      },
      {
        marker: "03",
        title: "Recover failed payments",
        body: "Expired cards and failed renewals are chased with tactful, timely outreach.",
      },
      {
        marker: "04",
        title: "Manage disputes",
        body: "Chargebacks are reviewed and contested with evidence, on deadline.",
      },
      {
        marker: "05",
        title: "Document",
        body: "Every money action is logged for reconciliation, audit, and dispute defence.",
      },
    ],
  },
  technology: {
    intro: {
      eyebrow: "Technology",
      title: "We work in your payments stack",
      lead: "Our specialists operate in your billing and support tools.",
    },
    groups: [
      { name: "Billing & payments", items: ["Stripe", "Billing platforms", "Payment gateways"] },
      { name: "Helpdesk & CRM", items: ["Zendesk", "Salesforce", "Intercom"] },
      {
        name: "Disputes & dunning",
        items: ["Chargeback tools", "Dunning workflows", "Dispute portals"],
      },
      { name: "Knowledge base", items: ["Billing playbooks", "Refund policy", "Guru / Notion"] },
      {
        name: "Analytics & QA",
        items: ["Recovery rate", "Dispute win rate", "Interaction scoring"],
      },
    ],
  },
  benefits: {
    intro: { eyebrow: "Benefits", title: "What you get", lead: "Revenue protected, trust intact." },
    items: [
      {
        title: "Recovered revenue",
        body: "Failed payments and involuntary churn chased and won back.",
      },
      {
        title: "Fewer chargebacks",
        body: "Issues resolved before they escalate, disputes contested well.",
      },
      { title: "Accurate billing support", body: "Money matters handled correctly and clearly." },
      { title: "Preserved trust", body: "Customers stay even when a payment went wrong." },
    ],
  },
  statement: {
    statement: "Handle someone's money carelessly once, and no feature wins them back.",
    context: "Accuracy and calm on payments",
  },
  industriesUsing: {
    intro: {
      eyebrow: "Industries",
      title: "Where this service delivers",
      lead: "Wherever payments meet customers.",
    },
    items: [
      industryItem("ecommerce", "Billing, refunds, and payment recovery."),
      industryItem("fintech", "Sensitive money conversations, handled right."),
      industryItem("saas", "Subscription billing and involuntary-churn recovery."),
    ],
  },
  kpis: {
    intro: {
      eyebrow: "The standard we operate to",
      title: "Targets we hold ourselves to",
      lead: "Commitments behind every payment-support engagement.",
    },
    metrics: [
      { value: 60, prefix: "<", suffix: "s", label: "First response target" },
      { value: 95, suffix: "%+", label: "QA score standard" },
      { value: 24, suffix: "/7", label: "Coverage" },
      { value: 100, suffix: "%", label: "Money actions logged" },
    ],
  },
  related: {
    intro: {
      eyebrow: "Related services",
      title: "Pairs well with",
      lead: "Capabilities teams deploy alongside payment support.",
    },
    items: [
      serviceItem("fraud-prevention", "Defend against payment fraud and chargebacks."),
      serviceItem("customer-support", "The full omnichannel frontline."),
      serviceItem("back-office", "Process reconciliation and adjustments."),
    ],
  },
  faqs: [
    {
      question: "Do you handle refunds and billing adjustments?",
      answer:
        "Yes. Billing queries, refunds, and adjustments are processed accurately and explained clearly, with every action logged.",
    },
    {
      question: "Can you recover failed payments?",
      answer:
        "Yes. Proactive dunning and tactful outreach recover involuntary churn from expired cards and failed renewals before it becomes lost revenue.",
    },
    {
      question: "Do you manage chargebacks and disputes?",
      answer:
        "Yes. Disputes are reviewed and contested with evidence, on deadline, to protect your revenue.",
    },
    {
      question: "How do you keep these conversations calm?",
      answer:
        "Agents are trained to de-escalate and reassure, because money conversations need clarity and empathy, not a defensive script.",
    },
    {
      question: "Do you work in our billing tools?",
      answer: "Yes. Specialists operate in your existing billing, payments, and helpdesk systems.",
    },
    {
      question: "Is everything documented?",
      answer: "Yes. Every money action is logged for reconciliation, audit, and dispute defence.",
    },
    {
      question: "How is quality measured?",
      answer: "On recovery and dispute-win rates, accuracy, and tone, reported transparently.",
    },
    {
      question: "How quickly can you launch?",
      answer: "We learn your billing systems and policies, certify the team, and ramp in stages.",
    },
  ],
  cta: {
    title: "Protect the revenue and the relationship.",
    lead: "Let's take payment support off your plate — starting with a conversation, not a contract.",
  },
};

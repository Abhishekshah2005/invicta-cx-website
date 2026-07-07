import type { ServiceContent } from "@/types/templates";
import { industryItem, serviceItem } from "./_shared";

export const fraudPrevention: ServiceContent = {
  slug: "fraud-prevention",
  hero: {
    eyebrow: "Services — Fraud Prevention",
    title: "Stop the fraud without punishing the customers.",
    lead: "Invicta runs human-led fraud defence — transaction monitoring, multi-accounting and chargeback review, and AML support that catches bad actors while letting good customers through.",
    imageLabel:
      "A risk analyst studying flagged transactions with focus, secure workspace, cool light — documentary.",
    image: "/assets/services/fraud-prevention/hero/hero.png",
    cta: { label: "Talk to an Expert", href: "/contact" },
    secondaryCta: { label: "See how we operate", href: "/method" },
  },
  overview: {
    intro: {
      eyebrow: "Why it matters",
      title: "Fraud defence is a judgement problem, not just a rules problem",
      lead: "Block too much and you lose real customers; block too little and losses mount.",
    },
    paragraphs: [
      "Fraud evolves constantly — account takeover, synthetic identities, mule networks, chargeback abuse. Static rules age fast, and every false positive is a good customer wrongly turned away.",
      "We run fraud operations with trained analysts who read the patterns in real time, review the edge cases automation can't judge, and act decisively — catching more fraud with fewer false positives.",
      "The result is lower fraud losses, fewer legitimate customers caught in the net, and defensible decisions your risk and compliance teams can stand behind.",
    ],
  },
  challenges: {
    intro: {
      eyebrow: "The problem",
      title: "Why fraud is hard to fight",
      lead: "It adapts, and the cost of overreacting is real.",
    },
    items: [
      {
        title: "Fraud mutates weekly",
        body: "New tactics outrun static rules; you need people reading the signals as they shift.",
      },
      {
        title: "False positives cost customers",
        body: "Every legitimate transaction wrongly blocked is revenue and trust lost.",
      },
      {
        title: "Chargebacks and disputes pile up",
        body: "Reviewing and contesting them is labour-intensive and easy to fall behind on.",
      },
      {
        title: "Compliance adds weight",
        body: "AML obligations mean fraud work has to be documented and defensible.",
      },
    ],
  },
  approach: {
    intro: {
      eyebrow: "How Invicta solves it",
      title: "Human-led defence that adapts",
      lead: "Analysts who catch more and block less that's legitimate.",
    },
    points: [
      {
        title: "Pattern-reading in real time",
        body: "Analysts spot emerging tactics automation hasn't learned yet and adapt fast.",
      },
      {
        title: "Fewer false positives",
        body: "Human review clears legitimate customers automation would wrongly reject.",
      },
      {
        title: "Chargeback and dispute defence",
        body: "We review, contest, and manage disputes so they don't overwhelm you.",
      },
      {
        title: "Documented and compliant",
        body: "Every action is logged and defensible against AML obligations.",
      },
    ],
  },
  workflow: {
    intro: {
      eyebrow: "Workflow",
      title: "How a fraud signal is handled",
      lead: "From flag to decision.",
    },
    steps: [
      {
        marker: "01",
        title: "Monitor & flag",
        body: "Transactions and behaviour run through your rules; anomalies flow to analyst review.",
      },
      {
        marker: "02",
        title: "Investigate",
        body: "Analysts assess the signal in context — history, patterns, and linked accounts.",
      },
      {
        marker: "03",
        title: "Decide & act",
        body: "Approve, hold, block, or escalate — with the reasoning documented.",
      },
      {
        marker: "04",
        title: "Manage disputes",
        body: "Chargebacks and disputes are reviewed and contested with evidence.",
      },
      {
        marker: "05",
        title: "Feed back",
        body: "New tactics inform your rules and thresholds so defence keeps improving.",
      },
    ],
  },
  technology: {
    intro: {
      eyebrow: "Technology",
      title: "We work in your risk stack",
      lead: "Our analysts operate in your fraud and case tools.",
    },
    groups: [
      {
        name: "Fraud & risk platforms",
        items: ["Transaction-monitoring tools", "Risk scoring", "Device & behaviour signals"],
      },
      { name: "Case management", items: ["Review queues", "Salesforce", "Custom tools"] },
      {
        name: "Payments & disputes",
        items: ["Chargeback tools", "Dispute portals", "Payment gateways"],
      },
      { name: "Screening", items: ["AML & sanctions screening", "Watchlists"] },
      {
        name: "Analytics & QA",
        items: ["Fraud & false-positive rates", "Dispute win rate", "Audit trails"],
      },
    ],
  },
  benefits: {
    intro: {
      eyebrow: "Benefits",
      title: "What you get",
      lead: "Less fraud, fewer false positives, defensible decisions.",
    },
    items: [
      { title: "Lower fraud losses", body: "More bad actors caught before they cost you." },
      {
        title: "Fewer false positives",
        body: "Legitimate customers aren't punished for fraudsters.",
      },
      { title: "Recovered chargebacks", body: "Disputes reviewed and contested with evidence." },
      { title: "Audit-ready decisions", body: "Every action documented and defensible." },
    ],
  },
  statement: {
    statement: "The goal isn't to block more — it's to block only what deserves it.",
    context: "Catch fraud, keep customers",
  },
  industriesUsing: {
    intro: {
      eyebrow: "Industries",
      title: "Where this service delivers",
      lead: "Wherever money and identity meet.",
    },
    items: [
      industryItem("fintech", "Fraud and AML defence for financial platforms."),
      industryItem("gaming", "Multi-accounting and payout fraud defence.", "Flagship"),
      industryItem("ecommerce", "Payment fraud and chargeback defence."),
    ],
  },
  kpis: {
    intro: {
      eyebrow: "The standard we operate to",
      title: "Targets we hold ourselves to",
      lead: "Commitments behind every fraud-prevention engagement.",
    },
    metrics: [
      { value: 24, suffix: "/7", label: "Monitoring cover" },
      { value: 95, suffix: "%+", label: "QA score standard" },
      { value: 15, prefix: "<", suffix: "m", label: "High-risk review target" },
      { value: 100, suffix: "%", label: "Actions documented" },
    ],
  },
  related: {
    intro: {
      eyebrow: "Related services",
      title: "Pairs well with",
      lead: "Capabilities teams deploy alongside fraud prevention.",
    },
    items: [
      serviceItem("kyc", "Stop bad actors at onboarding."),
      serviceItem("payment-support", "Handle the payment issues behind disputes."),
      serviceItem("back-office", "Process the case work behind reviews."),
    ],
  },
  faqs: [
    {
      question: "Why use human analysts instead of just rules?",
      answer:
        "Rules handle the known; analysts catch emerging tactics and clear the false positives automation gets wrong. The two together beat either alone.",
    },
    {
      question: "Can you reduce our false-positive rate?",
      answer:
        "Yes. Human review of borderline cases clears legitimate customers automated rules would wrongly reject — protecting revenue and trust.",
    },
    {
      question: "Do you handle chargebacks and disputes?",
      answer:
        "Yes. We review, contest with evidence, and manage disputes so they don't overwhelm your team.",
    },
    {
      question: "Do you support AML obligations?",
      answer:
        "Yes. Screening and documentation align to your AML requirements, with concerns escalated to your risk team.",
    },
    {
      question: "Do you provide 24/7 monitoring?",
      answer: "Yes. Fraud doesn't keep hours, so review cover runs around the clock.",
    },
    {
      question: "Do you work in our fraud tools?",
      answer: "Yes. Analysts operate in your existing monitoring, case, and dispute systems.",
    },
    {
      question: "How is quality measured?",
      answer:
        "QA tracks fraud-catch and false-positive rates, dispute win rates, and decision accuracy, with transparent reporting.",
    },
    {
      question: "How quickly can you launch?",
      answer:
        "We learn your rules, thresholds, and escalation paths, certify analysts, and ramp in stages with your risk team.",
    },
  ],
  cta: {
    title: "Beat the fraud. Keep the customers.",
    lead: "Let's build the human-led fraud defence behind your platform — starting with a conversation, not a contract.",
  },
};

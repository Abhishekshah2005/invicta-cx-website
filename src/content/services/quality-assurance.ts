import type { ServiceContent } from "@/types/templates";
import { industryItem, serviceItem } from "./_shared";

export const qualityAssurance: ServiceContent = {
  slug: "quality-assurance",
  hero: {
    eyebrow: "Services — Quality Assurance",
    title: "What gets measured gets better.",
    lead: "Invicta runs rigorous support QA — scoring real interactions, coaching to the gaps, and turning quality from a hope into a managed, improving number.",
    imageLabel:
      "A QA lead reviewing a scored interaction on a tablet, focused and precise, calm light — documentary.",
    cta: { label: "Talk to an Expert", href: "/contact" },
    secondaryCta: { label: "See how we operate", href: "/method" },
  },
  overview: {
    intro: {
      eyebrow: "Why it matters",
      title: "Consistency is what customers actually feel",
      lead: "One great interaction is luck. Every interaction being good is a system.",
    },
    paragraphs: [
      "Support quality drifts without measurement. Tone slips, accuracy varies, and the experience becomes a lottery — which is exactly what erodes trust over time.",
      "We run QA as a discipline: scoring real interactions against clear rubrics, surfacing where quality breaks, and feeding structured coaching that actually moves the numbers.",
      "The result is consistent, measurably improving service — whether the QA covers your own team or an outsourced one.",
    ],
  },
  challenges: {
    intro: {
      eyebrow: "The problem",
      title: "Why quality slips",
      lead: "Without a system, standards decay quietly.",
    },
    items: [
      {
        title: "Quality is assumed, not measured",
        body: "Teams trust that service is good until a spike in complaints proves otherwise.",
      },
      {
        title: "Coaching lacks evidence",
        body: "Feedback without scored examples is opinion, and it rarely changes behaviour.",
      },
      {
        title: "Standards drift as teams grow",
        body: "The more people answer, the more tone and accuracy diverge.",
      },
      {
        title: "Sampling misses the real picture",
        body: "Reviewing a handful of interactions by gut feel doesn't reflect the whole operation.",
      },
    ],
  },
  approach: {
    intro: {
      eyebrow: "How Invicta solves it",
      title: "QA as a managed discipline",
      lead: "Scored, calibrated, and tied to coaching.",
    },
    points: [
      {
        title: "Clear, calibrated rubrics",
        body: "Interactions are scored against rubrics built with you, calibrated so scores mean the same thing every time.",
      },
      {
        title: "Real interactions, real coverage",
        body: "We score a meaningful sample of actual interactions weekly, not a token few.",
      },
      {
        title: "Coaching that changes behaviour",
        body: "Scores feed specific, evidence-based coaching that moves the metrics.",
      },
      {
        title: "Trends you can act on",
        body: "Reporting surfaces systemic gaps — training, process, or knowledge — not just individual scores.",
      },
    ],
  },
  workflow: {
    intro: {
      eyebrow: "Workflow",
      title: "How QA runs",
      lead: "From sample to sustained improvement.",
    },
    steps: [
      {
        marker: "01",
        title: "Define the rubric",
        body: "We build scoring criteria with you — accuracy, tone, resolution, compliance — and calibrate them.",
      },
      {
        marker: "02",
        title: "Score real interactions",
        body: "A representative weekly sample is reviewed and scored consistently.",
      },
      {
        marker: "03",
        title: "Coach the gaps",
        body: "Findings turn into specific coaching, with examples, for each agent and team.",
      },
      {
        marker: "04",
        title: "Report the trends",
        body: "Systemic issues are surfaced so process, training, or knowledge can be fixed at the root.",
      },
      {
        marker: "05",
        title: "Recalibrate",
        body: "Rubrics evolve as your product and standards change, keeping QA relevant.",
      },
    ],
  },
  technology: {
    intro: {
      eyebrow: "Technology",
      title: "We work in your quality stack",
      lead: "Our QA team operates in your interaction and reporting tools.",
    },
    groups: [
      {
        name: "Interaction sources",
        items: ["Zendesk", "Salesforce", "Call recordings", "Chat logs"],
      },
      { name: "QA tooling", items: ["Scorecard platforms", "Calibration tools", "Custom rubrics"] },
      { name: "Coaching", items: ["1:1 frameworks", "Example libraries", "Coaching logs"] },
      { name: "Knowledge base", items: ["Standards library", "Guru", "Notion"] },
      {
        name: "Analytics & reporting",
        items: ["QA scores", "Trend dashboards", "Root-cause tracking"],
      },
    ],
  },
  benefits: {
    intro: {
      eyebrow: "Benefits",
      title: "What you get",
      lead: "Quality you can see, manage, and improve.",
    },
    items: [
      { title: "Consistent service", body: "Every interaction held to the same standard." },
      { title: "Evidence-based coaching", body: "Feedback that actually changes behaviour." },
      { title: "Systemic issues surfaced", body: "Root causes fixed, not just symptoms scored." },
      { title: "Quality as a number", body: "A managed metric that trends up, not a hope." },
    ],
  },
  statement: {
    statement: "Great service isn't an accident you hope for — it's a standard you manage.",
    context: "Quality, made measurable",
  },
  industriesUsing: {
    intro: {
      eyebrow: "Industries",
      title: "Where this service delivers",
      lead: "Wherever service standards matter.",
    },
    items: [
      industryItem("gaming", "Elite standards on high-stakes support.", "Flagship"),
      industryItem("fintech", "Accuracy and compliance held high."),
      industryItem("saas", "Resolution quality that protects retention."),
    ],
  },
  kpis: {
    intro: {
      eyebrow: "The standard we operate to",
      title: "Targets we hold ourselves to",
      lead: "Commitments behind every QA engagement.",
    },
    metrics: [
      { value: 95, suffix: "%+", label: "Target QA score" },
      { value: 100, suffix: "%", label: "Agents coached weekly" },
      { value: 5, suffix: "%", label: "Interactions sampled" },
      { value: 24, suffix: "/7", label: "Coverage available" },
    ],
  },
  related: {
    intro: {
      eyebrow: "Related services",
      title: "Pairs well with",
      lead: "Capabilities teams deploy alongside QA.",
    },
    items: [
      serviceItem("workforce-management", "Right people, right time, right standard."),
      serviceItem("customer-support", "The frontline QA keeps sharp."),
      serviceItem("knowledge-base-management", "Fix the content behind the errors."),
    ],
  },
  faqs: [
    {
      question: "Can you QA our own in-house team?",
      answer:
        "Yes. We provide QA as a standalone service for internal teams, not only for support we staff.",
    },
    {
      question: "How do you keep scoring fair?",
      answer:
        "Rubrics are calibrated so a score means the same thing across reviewers and over time — consistency is the whole point.",
    },
    {
      question: "How much do you sample?",
      answer:
        "A representative weekly sample — enough to reflect the real operation, not a token handful reviewed by gut feel.",
    },
    {
      question: "Does QA actually improve service?",
      answer:
        "When tied to evidence-based coaching and root-cause reporting, yes — that's the difference between scoring quality and improving it.",
    },
    {
      question: "Do you surface systemic issues?",
      answer:
        "Yes. Reporting distinguishes individual gaps from process, training, and knowledge problems so you fix root causes.",
    },
    {
      question: "Do you work in our tools?",
      answer: "Yes. We operate in your interaction sources and reporting stack.",
    },
    {
      question: "What do you score on?",
      answer:
        "Whatever matters to you — accuracy, tone, resolution, compliance — defined together and calibrated.",
    },
    {
      question: "How quickly can you launch?",
      answer:
        "We build and calibrate the rubric with you, start scoring, and stand up coaching and reporting in stages.",
    },
  ],
  cta: {
    title: "Make quality a number you manage.",
    lead: "Let's turn your service quality into a measured, improving metric — starting with a conversation, not a contract.",
  },
};

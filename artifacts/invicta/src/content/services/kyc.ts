import type { ServiceContent } from "@/types/templates";
import { industryItem, serviceItem } from "./_shared";

export const kyc: ServiceContent = {
  slug: "kyc",
  hero: {
    eyebrow: "Services — KYC Verification",
    title: "Clear real customers fast. Stop the rest at the door.",
    lead: "Invicta runs rigorous, human-reviewed identity, age, and document verification that speeds legitimate customers through onboarding while keeping fraud and regulators satisfied.",
    imageLabel:
      "A verification specialist reviewing documents on a secure screen, careful and precise, cool light — documentary.",
    image: "/assets/services/kyc/hero/hero.png",
    cta: { label: "Talk to an Expert", href: "/contact" },
    secondaryCta: { label: "See how we operate", href: "/method" },
  },
  overview: {
    intro: {
      eyebrow: "Why it matters",
      title: "Onboarding is where trust and friction collide",
      lead: "Every extra check costs you good customers; every missing one invites fraud and regulators.",
    },
    paragraphs: [
      "Identity verification sits at the front door of regulated products. Too strict and you leak legitimate customers at signup; too loose and fraud and compliance failures follow.",
      "We run KYC with trained reviewers who clear genuine customers quickly and catch the ones who shouldn't get through — combining speed with the judgement automated checks can't provide.",
      "The result is faster onboarding, tighter fraud control, and a verification operation your compliance team can defend to any regulator.",
    ],
  },
  challenges: {
    intro: {
      eyebrow: "The problem",
      title: "Why KYC is hard to get right",
      lead: "Speed, accuracy, and compliance pull against each other.",
    },
    items: [
      {
        title: "Friction kills conversion",
        body: "Every extra verification step at signup leaks legitimate, revenue-generating customers.",
      },
      {
        title: "Automation misses the edge cases",
        body: "Poor document quality, mismatches, and clever fraud need human review, not just OCR.",
      },
      {
        title: "Compliance is unforgiving",
        body: "Age, identity, and AML obligations must be met and documented, every time.",
      },
      {
        title: "Volume is spiky",
        body: "Campaigns and launches surge signups, and slow verification stalls the whole funnel.",
      },
    ],
  },
  approach: {
    intro: {
      eyebrow: "How Invicta solves it",
      title: "Fast, rigorous, human-reviewed verification",
      lead: "Speed for the genuine, scrutiny for the suspicious.",
    },
    points: [
      {
        title: "Quick clears for real customers",
        body: "Legitimate applicants are verified fast so onboarding doesn't stall.",
      },
      {
        title: "Human judgement on the hard cases",
        body: "Reviewers catch what automation misses — mismatches, poor scans, and manipulation.",
      },
      {
        title: "Compliant and documented",
        body: "Every decision is logged and defensible against your AML and age obligations.",
      },
      {
        title: "Scales with your surges",
        body: "Workforce planning absorbs campaign and launch spikes without a backlog.",
      },
    ],
  },
  workflow: {
    intro: {
      eyebrow: "Workflow",
      title: "How a verification is handled",
      lead: "From submission to cleared — or stopped.",
    },
    steps: [
      {
        marker: "01",
        title: "Intake & auto-check",
        body: "Submissions run through your automated checks first; edge cases flow to human review.",
      },
      {
        marker: "02",
        title: "Human review",
        body: "Reviewers verify identity, age, and documents against your thresholds and watchlists.",
      },
      {
        marker: "03",
        title: "Decide & document",
        body: "Clear, reject, or request more — with the reasoning logged for audit.",
      },
      {
        marker: "04",
        title: "Escalate risk",
        body: "Suspected fraud or AML concerns route to the right specialists immediately.",
      },
      {
        marker: "05",
        title: "Report & refine",
        body: "Trends feed your risk team and sharpen thresholds over time.",
      },
    ],
  },
  technology: {
    intro: {
      eyebrow: "Technology",
      title: "We work in your verification stack",
      lead: "Our reviewers operate in your KYC and case tools.",
    },
    groups: [
      {
        name: "Verification providers",
        items: ["ID & document verification platforms", "Biometric checks"],
      },
      { name: "Case management", items: ["Review queues", "Salesforce", "Custom tools"] },
      { name: "Screening", items: ["Sanctions & PEP lists", "AML screening", "Watchlists"] },
      { name: "Knowledge base", items: ["Review playbooks", "Decision criteria", "Guru / Notion"] },
      {
        name: "Analytics & QA",
        items: ["Clear time", "Accuracy & false-positive rates", "Audit trails"],
      },
    ],
  },
  benefits: {
    intro: {
      eyebrow: "Benefits",
      title: "What you get",
      lead: "Faster onboarding without opening the door to fraud.",
    },
    items: [
      {
        title: "Higher onboarding conversion",
        body: "Genuine customers clear fast and don't drop off at signup.",
      },
      {
        title: "Stronger fraud control",
        body: "Human review catches what automation lets through.",
      },
      { title: "Audit-ready compliance", body: "Every decision is documented and defensible." },
      { title: "Elastic capacity", body: "Surges are absorbed without a verification backlog." },
    ],
  },
  statement: {
    statement: "Good verification is invisible to the honest and impassable to the rest.",
    context: "Speed with scrutiny",
  },
  industriesUsing: {
    intro: {
      eyebrow: "Industries",
      title: "Where this service delivers",
      lead: "Wherever identity must be proven.",
    },
    items: [
      industryItem("fintech", "KYC/AML at the front door of finance."),
      industryItem("gaming", "Age and identity checks for real-money play.", "Flagship"),
    ],
  },
  kpis: {
    intro: {
      eyebrow: "The standard we operate to",
      title: "Targets we hold ourselves to",
      lead: "Commitments behind every KYC engagement.",
    },
    metrics: [
      { value: 5, prefix: "<", suffix: "m", label: "Clear time target" },
      { value: 99, suffix: "%+", label: "Decision accuracy target" },
      { value: 24, suffix: "/7", label: "Coverage" },
      { value: 100, suffix: "%", label: "Decisions documented" },
    ],
  },
  related: {
    intro: {
      eyebrow: "Related services",
      title: "Pairs well with",
      lead: "Capabilities teams deploy alongside KYC.",
    },
    items: [
      serviceItem("fraud-prevention", "Defend against fraud beyond onboarding."),
      serviceItem("back-office", "Process the paperwork behind verification."),
      serviceItem("customer-support", "Support customers through verification."),
    ],
  },
  faqs: [
    {
      question: "How fast do you clear legitimate customers?",
      answer:
        "We operate to a sub-5-minute clear-time target for straightforward cases, so genuine customers don't stall at onboarding.",
    },
    {
      question: "Why use humans when we have automated KYC?",
      answer:
        "Automation handles the easy cases; human review catches the edge cases — poor scans, mismatches, and manipulation — that automation lets through or wrongly rejects.",
    },
    {
      question: "Are decisions compliant and documented?",
      answer:
        "Yes. Every decision is made against your thresholds and logged with its reasoning, so it's defensible to auditors and regulators.",
    },
    {
      question: "Do you handle AML and sanctions screening?",
      answer:
        "Yes. Screening against sanctions, PEP, and watchlists is part of the review, with concerns escalated to your risk team.",
    },
    {
      question: "Can you handle signup surges?",
      answer:
        "Yes. Workforce planning absorbs campaign and launch spikes so verification doesn't become a bottleneck.",
    },
    {
      question: "Do you work in our verification tools?",
      answer: "Yes. Reviewers operate in your existing KYC providers and case-management systems.",
    },
    {
      question: "How is quality measured?",
      answer:
        "QA tracks decision accuracy, false-positive rates, and clear times, feeding coaching and transparent reporting.",
    },
    {
      question: "How quickly can you launch?",
      answer:
        "We learn your thresholds and playbooks, certify reviewers, and ramp in stages with your risk team watching the metrics.",
    },
  ],
  cta: {
    title: "Open the door to real customers. Keep it shut to the rest.",
    lead: "Let's build the verification operation behind your onboarding — starting with a conversation, not a contract.",
  },
};

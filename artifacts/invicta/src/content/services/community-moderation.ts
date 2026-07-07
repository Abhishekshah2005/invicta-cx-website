import type { ServiceContent } from "@/types/templates";
import { industryItem, serviceItem } from "./_shared";

export const communityModeration: ServiceContent = {
  slug: "community-moderation",
  hero: {
    eyebrow: "Services — Community Moderation",
    title: "Healthy communities don't happen by accident.",
    lead: "Invicta provides trust-and-safety moderation that keeps your platform, community, and user-generated content safe, on-policy, and welcoming — around the clock.",
    imageLabel:
      "A moderator reviewing a community feed with focus and care, calm workspace, cool light — documentary.",
    image: "/assets/services/community-moderation/hero/hero.jpg",
    cta: { label: "Talk to an Expert", href: "/contact" },
    secondaryCta: { label: "See how we operate", href: "/method" },
  },
  overview: {
    intro: {
      eyebrow: "Why it matters",
      title: "Every platform with users attracts bad actors",
      lead: "Growth and safety move together — or the experience degrades for everyone.",
    },
    paragraphs: [
      "Any product with content, community, or interaction draws spam, abuse, and harmful behaviour. Left unchecked, it drives good users away and puts your brand and users at risk.",
      "We provide trained moderators who enforce your policies consistently and humanely — reviewing content, actioning abuse, and protecting the tone that makes your community worth being part of.",
      "The result is a safer platform, a healthier community, and growth that doesn't come at the cost of the experience.",
    ],
  },
  challenges: {
    intro: {
      eyebrow: "The problem",
      title: "Why moderation is hard",
      lead: "Scale, nuance, and human cost all compound.",
    },
    items: [
      {
        title: "Volume outpaces in-house teams",
        body: "User content and reports scale faster than a small internal team can review.",
      },
      {
        title: "Policy nuance defeats automation",
        body: "Context, sarcasm, and edge cases need human judgement that filters alone miss.",
      },
      {
        title: "Bad content spreads fast",
        body: "Harmful posts left up for minutes can reach thousands and damage trust.",
      },
      {
        title: "Moderation is emotionally demanding",
        body: "Reviewing difficult content sustainably requires trained, supported people.",
      },
    ],
  },
  approach: {
    intro: {
      eyebrow: "How Invicta solves it",
      title: "Consistent, humane enforcement at scale",
      lead: "Trained moderators applying your policy with judgement.",
    },
    points: [
      {
        title: "Policy applied consistently",
        body: "Moderators are trained and calibrated on your guidelines so decisions are fair and predictable.",
      },
      {
        title: "Human judgement on the edge cases",
        body: "Where automation fails on nuance, trained people make the call correctly.",
      },
      {
        title: "Fast action on harm",
        body: "Priority queues get harmful content reviewed and actioned quickly.",
      },
      {
        title: "Sustainable, supported teams",
        body: "Wellbeing practices keep moderators effective on demanding work.",
      },
    ],
  },
  workflow: {
    intro: {
      eyebrow: "Workflow",
      title: "How content gets moderated",
      lead: "From report to resolution.",
    },
    steps: [
      {
        marker: "01",
        title: "Detect & queue",
        body: "Reports and flagged content enter prioritised queues by severity and risk.",
      },
      {
        marker: "02",
        title: "Review with context",
        body: "Moderators assess against your policy, weighing nuance and intent.",
      },
      {
        marker: "03",
        title: "Action & document",
        body: "Content is removed, escalated, or cleared, with the reason logged for appeal and audit.",
      },
      {
        marker: "04",
        title: "Escalate the serious",
        body: "Safety-critical cases route to the right responders immediately.",
      },
      {
        marker: "05",
        title: "Refine the policy",
        body: "Patterns feed back into guidelines so grey areas get clearer over time.",
      },
    ],
  },
  technology: {
    intro: {
      eyebrow: "Technology",
      title: "We work in your trust-and-safety stack",
      lead: "Our moderators operate in your moderation and reporting tools.",
    },
    groups: [
      {
        name: "Moderation platforms",
        items: ["Moderation queues", "Custom review tools", "Reporting systems"],
      },
      {
        name: "Policy & guidelines",
        items: ["Policy playbooks", "Decision trees", "Calibration sets"],
      },
      {
        name: "Escalation",
        items: ["Safety escalation paths", "Legal & law-enforcement referral"],
      },
      { name: "Knowledge base", items: ["Guideline library", "Case precedents", "Guru / Notion"] },
      { name: "Analytics & QA", items: ["Decision accuracy", "Turnaround time", "Audit trails"] },
    ],
  },
  benefits: {
    intro: {
      eyebrow: "Benefits",
      title: "What you get",
      lead: "Safety and health, without slowing growth.",
    },
    items: [
      { title: "A safer platform", body: "Harmful content is caught and actioned fast." },
      {
        title: "Consistent decisions",
        body: "Calibrated moderators apply your policy fairly and predictably.",
      },
      {
        title: "Protected brand and users",
        body: "A healthy community keeps good users and reputation intact.",
      },
      { title: "Scalable coverage", body: "Cover ramps with your volume, around the clock." },
    ],
  },
  statement: {
    statement: "A community is only as welcoming as its worst unmoderated corner.",
    context: "Trust and safety at scale",
  },
  industriesUsing: {
    intro: {
      eyebrow: "Industries",
      title: "Where this service delivers",
      lead: "Wherever users create content or interact.",
    },
    items: [
      industryItem("gaming", "Safe player communities and platforms.", "Flagship"),
      industryItem("technology", "Trust and safety for platforms."),
      industryItem("ecommerce", "Healthy reviews and user content."),
    ],
  },
  kpis: {
    intro: {
      eyebrow: "The standard we operate to",
      title: "Targets we hold ourselves to",
      lead: "Commitments behind every moderation engagement.",
    },
    metrics: [
      { value: 95, suffix: "%+", label: "Decision accuracy target" },
      { value: 15, prefix: "<", suffix: "m", label: "High-severity action target" },
      { value: 24, suffix: "/7", label: "Coverage" },
      { value: 100, suffix: "%", label: "Actions audited" },
    ],
  },
  related: {
    intro: {
      eyebrow: "Related services",
      title: "Pairs well with",
      lead: "Capabilities teams deploy alongside moderation.",
    },
    items: [
      serviceItem("social-media-support", "Respond as well as moderate across social."),
      serviceItem("customer-support", "Support users beyond safety issues."),
      serviceItem("quality-assurance", "Keep decision quality calibrated."),
    ],
  },
  faqs: [
    {
      question: "Do you moderate to our policies?",
      answer:
        "Yes. Moderators are trained and calibrated on your specific guidelines, so decisions are consistent with how you want your platform run.",
    },
    {
      question: "How fast is harmful content actioned?",
      answer:
        "High-severity content is prioritised and actioned quickly — we operate to a sub-15-minute target for the most serious cases.",
    },
    {
      question: "Can you handle nuanced, contextual cases?",
      answer:
        "Yes. Human judgement is exactly where we add value over automated filters that miss context, sarcasm, and intent.",
    },
    {
      question: "Do you cover 24/7?",
      answer: "Yes. Harmful behaviour doesn't keep hours, so moderation runs around the clock.",
    },
    {
      question: "How do you support moderator wellbeing?",
      answer:
        "We build wellbeing practices and rotation into the operation, because sustainable teams make better, more consistent decisions.",
    },
    {
      question: "Do you keep an audit trail?",
      answer:
        "Yes. Every action is logged with its reason, supporting appeals, audits, and policy refinement.",
    },
    {
      question: "Do you work in our tools?",
      answer: "Yes. We operate in your existing moderation and reporting systems.",
    },
    {
      question: "How quickly can you launch?",
      answer:
        "We learn your policy, build calibration sets and escalation paths, certify moderators, and ramp in stages.",
    },
  ],
  cta: {
    title: "Keep your community worth being part of.",
    lead: "Let's build the trust-and-safety layer behind your platform — starting with a conversation, not a contract.",
  },
};

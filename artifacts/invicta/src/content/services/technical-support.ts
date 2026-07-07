import type { ServiceContent } from "@/types/templates";
import { industryItem, serviceItem } from "./_shared";

export const technicalSupport: ServiceContent = {
  slug: "technical-support",
  hero: {
    eyebrow: "Services — Technical Support",
    title: "Tier-2 support that resolves — not just reroutes.",
    lead: "Invicta staffs technically fluent specialists who fix the hard problems, protect your engineers' focus, and keep users confident in your product.",
    imageLabel:
      "A technical specialist troubleshooting across multiple screens, expert and composed, cool light — documentary.",
    image: "/assets/services/technical-support/hero/hero.png",
    cta: { label: "Talk to an Expert", href: "/contact" },
    secondaryCta: { label: "See how we operate", href: "/method" },
  },
  overview: {
    intro: {
      eyebrow: "Why it matters",
      title: "Users forgive bugs — not helplessness",
      lead: "When something breaks, competence is the whole experience.",
    },
    paragraphs: [
      "Technical problems test faith in the product itself. A user who hits a wall of 'have you tried restarting?' loses confidence fast; one who reaches someone who actually understands the system stays.",
      "We staff tier-2 support with specialists trained to real depth on your product, so they resolve integration, configuration, and edge-case issues instead of escalating everything to engineering.",
      "The result is higher first-contact resolution, fewer tickets on your engineers' desks, and users who trust your product because the people behind it clearly do.",
    ],
  },
  challenges: {
    intro: {
      eyebrow: "The problem",
      title: "Where technical support breaks down",
      lead: "Depth is expensive, and generalists can't fake it.",
    },
    items: [
      {
        title: "Generalists escalate everything",
        body: "Without real product knowledge, agents become a routing layer that dumps load on engineering.",
      },
      {
        title: "Engineers get pulled off the roadmap",
        body: "Every unresolved ticket that reaches your best people is roadmap time lost.",
      },
      {
        title: "Reproductions are messy",
        body: "Vague bug reports waste engineering hours chasing issues they can't recreate.",
      },
      {
        title: "Expertise is slow to scale",
        body: "Technical talent is hard to hire and train, so cover never keeps up with growth.",
      },
    ],
  },
  approach: {
    intro: {
      eyebrow: "How Invicta solves it",
      title: "Real depth at the frontline",
      lead: "Specialists who resolve tier-2 and protect your engineers.",
    },
    points: [
      {
        title: "Trained on your architecture",
        body: "Agents learn your product, integrations, and common failure modes to the depth resolution demands.",
      },
      {
        title: "Resolve before escalating",
        body: "We fix what we can at the frontline, so only genuine engineering issues move on.",
      },
      {
        title: "Clean, reproducible reports",
        body: "When something does need engineering, it arrives with steps, logs, and context — not a shrug.",
      },
      {
        title: "Scalable technical cover",
        body: "Workforce planning ramps trained specialists for launches and growth.",
      },
    ],
  },
  workflow: {
    intro: {
      eyebrow: "Workflow",
      title: "How a technical issue gets resolved",
      lead: "From symptom to fix — or a clean hand-off.",
    },
    steps: [
      {
        marker: "01",
        title: "Diagnose",
        body: "Agents gather logs, reproduce the issue, and isolate the cause using your diagnostics.",
      },
      {
        marker: "02",
        title: "Resolve at tier-2",
        body: "Configuration, integration, and known issues are fixed directly with the customer.",
      },
      {
        marker: "03",
        title: "Document for engineering",
        body: "Genuine bugs are escalated with reproducible steps, logs, and impact — ready to action.",
      },
      {
        marker: "04",
        title: "Close the loop",
        body: "The customer gets a clear resolution or status, never silence.",
      },
      {
        marker: "05",
        title: "Feed the knowledge base",
        body: "Fixes become articles and runbooks so the next case resolves faster.",
      },
    ],
  },
  technology: {
    intro: {
      eyebrow: "Technology",
      title: "We work in your stack",
      lead: "Our specialists operate in your support and engineering tools.",
    },
    groups: [
      { name: "Support desk", items: ["Zendesk", "Intercom", "Salesforce", "Custom tools"] },
      { name: "Engineering handoff", items: ["Jira", "Linear", "GitHub issues"] },
      { name: "Diagnostics", items: ["Log tools", "Runbooks", "Reproduction environments"] },
      { name: "Knowledge base", items: ["Guru", "Confluence", "Technical articles"] },
      {
        name: "Analytics & QA",
        items: ["First-contact resolution", "Escalation rate", "Interaction scoring"],
      },
    ],
  },
  benefits: {
    intro: {
      eyebrow: "Benefits",
      title: "What you get",
      lead: "Resolution at the frontline, focus for your engineers.",
    },
    items: [
      {
        title: "Higher first-contact resolution",
        body: "Trained specialists fix more without escalating.",
      },
      {
        title: "Protected engineering time",
        body: "Only genuine, documented bugs reach your team.",
      },
      { title: "Cleaner bug reports", body: "Reproducible escalations save engineering hours." },
      { title: "Confident users", body: "Competent help keeps faith in the product itself." },
    ],
  },
  statement: {
    statement: "The best technical support fixes the problem and prevents the next one.",
    context: "Resolve, don't reroute",
  },
  industriesUsing: {
    intro: {
      eyebrow: "Industries",
      title: "Where this service delivers",
      lead: "Wherever the product is complex.",
    },
    items: [
      industryItem("saas", "Tier-2 support that lowers churn."),
      industryItem("technology", "Depth for platforms and devices."),
      industryItem("gaming", "Fast fixes for live-platform issues.", "Flagship"),
    ],
  },
  kpis: {
    intro: {
      eyebrow: "The standard we operate to",
      title: "Targets we hold ourselves to",
      lead: "Commitments behind every technical-support engagement.",
    },
    metrics: [
      { value: 80, suffix: "%", label: "First-contact resolution target" },
      { value: 95, suffix: "%+", label: "QA score standard" },
      { value: 60, prefix: "<", suffix: "s", label: "First response target" },
      { value: 24, suffix: "/7", label: "Coverage" },
    ],
  },
  related: {
    intro: {
      eyebrow: "Related services",
      title: "Pairs well with",
      lead: "Capabilities teams deploy alongside technical support.",
    },
    items: [
      serviceItem("customer-support", "The full omnichannel frontline."),
      serviceItem("knowledge-base-management", "Turn fixes into self-serve content."),
      serviceItem("quality-assurance", "Keep technical accuracy high."),
    ],
  },
  faqs: [
    {
      question: "Can your agents handle genuinely technical issues?",
      answer:
        "Yes. We train specialists on your architecture and failure modes so they resolve tier-2 problems rather than routing everything to engineering.",
    },
    {
      question: "Will this reduce load on our engineers?",
      answer:
        "That's the goal. By resolving at the frontline and escalating only genuine, documented bugs, we protect your roadmap time.",
    },
    {
      question: "How do you handle bug escalations?",
      answer:
        "With reproducible steps, logs, and impact, so engineering can action them without chasing a vague report.",
    },
    {
      question: "Do you work in our tools?",
      answer:
        "Yes. We operate in your support desk and hand off to your engineering tracker with clean reports.",
    },
    {
      question: "Can you scale technical cover?",
      answer:
        "Yes. Workforce planning ramps trained specialists for launches and growth without an in-house hiring bottleneck.",
    },
    {
      question: "What channels do you cover?",
      answer:
        "Chat, email, and where relevant voice and in-product support — matched to where technical friction happens.",
    },
    {
      question: "How is quality measured?",
      answer:
        "QA scores real interactions on technical accuracy, resolution, and tone, feeding coaching and transparent reporting.",
    },
    {
      question: "How quickly can you launch?",
      answer:
        "We learn your architecture, build diagnostics and runbooks, certify the team, and ramp in stages.",
    },
  ],
  cta: {
    title: "Resolve more. Escalate less.",
    lead: "Let's build the tier-2 layer that protects your engineers — starting with a conversation, not a contract.",
  },
};

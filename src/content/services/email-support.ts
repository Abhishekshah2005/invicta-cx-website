import type { ServiceContent } from "@/types/templates";
import { industryItem, serviceItem } from "./_shared";

export const emailSupport: ServiceContent = {
  slug: "email-support",
  hero: {
    eyebrow: "Services — Email Support",
    title: "The channel where thoroughness becomes trust.",
    lead: "Invicta handles your email and ticket queue with accurate, on-tone written resolutions — the considered replies that settle complex and sensitive issues for good.",
    imageLabel:
      "A specialist composing a careful written reply, focused and calm, warm desk light — editorial.",
    image: "/assets/services/email-support/hero/hero.jpg",
    cta: { label: "Talk to an Expert", href: "/contact" },
    secondaryCta: { label: "See how we operate", href: "/method" },
  },
  overview: {
    intro: {
      eyebrow: "Why it matters",
      title: "Email is where the hard cases get solved",
      lead: "The issues too complex for a quick chat land in your inbox — and get remembered.",
    },
    paragraphs: [
      "Email and tickets carry your most detailed, highest-stakes conversations: disputes, complex problems, sensitive matters. A vague or slow reply compounds the frustration; a thorough, well-written one restores confidence.",
      "We handle that queue with specialists who write clearly, resolve completely, and match your tone — closing issues in one reply where others need three.",
      "The result is a queue that stays under control, resolutions that actually stick, and a written record that reflects well on your brand.",
    ],
  },
  challenges: {
    intro: {
      eyebrow: "The problem",
      title: "What clogs the inbox",
      lead: "Written support fails quietly — in backlog and in tone.",
    },
    items: [
      {
        title: "Backlogs erode trust",
        body: "A queue that grows faster than it clears means slow replies and rising frustration.",
      },
      {
        title: "Shallow replies create rework",
        body: "Answers that don't fully resolve generate reopened tickets and repeat contacts.",
      },
      {
        title: "Tone is hard to hold in writing",
        body: "Without a voice, written replies drift into cold or robotic, exactly when empathy matters.",
      },
      {
        title: "Complex cases need real ownership",
        body: "Multi-step and sensitive issues stall when no one takes them end to end.",
      },
    ],
  },
  approach: {
    intro: {
      eyebrow: "How Invicta solves it",
      title: "Written resolutions that close the loop",
      lead: "Specialists who resolve completely and write like your brand.",
    },
    points: [
      {
        title: "One-reply resolution",
        body: "Agents anticipate the follow-up and answer it up front, cutting back-and-forth and reopens.",
      },
      {
        title: "Your voice, in writing",
        body: "Tone guides and QA keep every email on-brand — warm, clear, and professional.",
      },
      {
        title: "Ownership of complex cases",
        body: "Multi-step and sensitive issues are owned end to end, not bounced around a queue.",
      },
      {
        title: "Backlog kept under control",
        body: "Staffing and prioritisation keep response times steady even when volume spikes.",
      },
    ],
  },
  workflow: {
    intro: {
      eyebrow: "Workflow",
      title: "How a ticket gets resolved",
      lead: "From inbox to closed — completely.",
    },
    steps: [
      {
        marker: "01",
        title: "Triage & prioritise",
        body: "Every email is categorised and prioritised so urgent and sensitive cases move first.",
      },
      {
        marker: "02",
        title: "Investigate fully",
        body: "Agents gather the full context before replying, so the answer is right the first time.",
      },
      {
        marker: "03",
        title: "Resolve in one reply",
        body: "The response resolves the issue and pre-empts the obvious follow-up.",
      },
      {
        marker: "04",
        title: "Confirm & close",
        body: "We confirm the outcome landed before closing, and reopen fast if needed.",
      },
      {
        marker: "05",
        title: "Feed the knowledge base",
        body: "Recurring questions become macros and articles so the queue shrinks over time.",
      },
    ],
  },
  technology: {
    intro: {
      eyebrow: "Technology",
      title: "We work in your helpdesk",
      lead: "Our specialists operate inside your existing ticketing tools.",
    },
    groups: [
      { name: "Helpdesk & ticketing", items: ["Zendesk", "Freshdesk", "Front", "Help Scout"] },
      { name: "CRM & context", items: ["Salesforce", "HubSpot", "Customer profiles"] },
      { name: "Knowledge base", items: ["Macros & templates", "Guru", "Notion"] },
      { name: "Collaboration", items: ["Internal notes", "Escalation channels", "Shared inboxes"] },
      {
        name: "Analytics & QA",
        items: ["Response & resolution time", "Reopen rate", "Interaction scoring"],
      },
    ],
  },
  benefits: {
    intro: {
      eyebrow: "Benefits",
      title: "What you get",
      lead: "A queue that clears and resolutions that stick.",
    },
    items: [
      {
        title: "Faster response times",
        body: "Steady staffing and prioritisation keep the queue under control.",
      },
      {
        title: "Fewer reopens",
        body: "Complete, one-reply resolutions cut repeat contacts and rework.",
      },
      { title: "On-brand correspondence", body: "Every email reflects your voice and standard." },
      {
        title: "A shrinking backlog",
        body: "Knowledge-base feedback designs recurring issues out of existence.",
      },
    ],
  },
  statement: {
    statement: "A thorough reply today saves three tomorrow.",
    context: "Resolution over deflection",
  },
  industriesUsing: {
    intro: {
      eyebrow: "Industries",
      title: "Where this service delivers",
      lead: "Wherever the written record matters.",
    },
    items: [
      industryItem("ecommerce", "Orders, returns, and claims resolved in writing."),
      industryItem("professional-services", "Considered, discreet client correspondence."),
      industryItem("healthcare", "Careful, private written responses."),
    ],
  },
  kpis: {
    intro: {
      eyebrow: "The standard we operate to",
      title: "Targets we hold ourselves to",
      lead: "Commitments behind every email-support engagement.",
    },
    metrics: [
      { value: 4, suffix: "h", label: "First response target" },
      { value: 90, suffix: "%", label: "One-reply resolution target" },
      { value: 95, suffix: "%+", label: "QA score standard" },
      { value: 24, suffix: "/7", label: "Coverage" },
    ],
  },
  related: {
    intro: {
      eyebrow: "Related services",
      title: "Pairs well with",
      lead: "Capabilities teams deploy alongside email support.",
    },
    items: [
      serviceItem("customer-support", "The full omnichannel frontline."),
      serviceItem("live-chat", "Real-time help for the quick questions."),
      serviceItem("knowledge-base-management", "Turn resolutions into self-serve content."),
    ],
  },
  faqs: [
    {
      question: "How fast will emails be answered?",
      answer:
        "We operate to first-response targets you set — typically within a few hours — with urgent and sensitive cases prioritised ahead of the rest.",
    },
    {
      question: "How do you keep our tone?",
      answer:
        "Agents write to your voice guide, and QA scores tone alongside accuracy, so every reply reads like your brand.",
    },
    {
      question: "Can you reduce reopened tickets?",
      answer:
        "Yes. Resolving completely and pre-empting the obvious follow-up in one reply is a core practice, and it measurably cuts reopens.",
    },
    {
      question: "Do you work in our helpdesk?",
      answer:
        "Yes. We operate inside your existing ticketing tool rather than introducing a new one.",
    },
    {
      question: "Can you handle complex, multi-step cases?",
      answer:
        "Yes. Complex and sensitive issues are owned end to end rather than bounced around the queue.",
    },
    {
      question: "How do you handle backlogs?",
      answer:
        "Steady staffing, prioritisation, and — where useful — a focused clear-down bring queues back under control and keep them there.",
    },
    {
      question: "How is quality measured?",
      answer:
        "QA scores real emails weekly on accuracy, completeness, and tone, feeding coaching and transparent reporting.",
    },
    {
      question: "How quickly can you launch?",
      answer:
        "We learn your product, tone, and policies, build macros and playbooks, certify the team, and ramp in stages.",
    },
  ],
  cta: {
    title: "Clear the queue. Keep the trust.",
    lead: "Let's take your inbox off your plate — starting with a conversation, not a contract.",
  },
};

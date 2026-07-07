import type { ServiceContent } from "@/types/templates";
import { industryItem, serviceItem } from "./_shared";

export const omnichannelSupport: ServiceContent = {
  slug: "omnichannel-support",
  hero: {
    eyebrow: "Services — Omnichannel Support",
    title: "One conversation, wherever your customer starts it.",
    lead: "Invicta unifies chat, email, phone, and social into a single, context-aware experience — so customers never repeat themselves and your brand feels seamless everywhere.",
    imageLabel:
      "A specialist moving fluidly between chat, email, and voice on one screen, calm and connected — editorial.",
    image: "/assets/services/omnichannel-support/hero/hero.jpg",
    cta: { label: "Talk to an Expert", href: "/contact" },
    secondaryCta: { label: "See how we operate", href: "/method" },
  },
  overview: {
    intro: {
      eyebrow: "Why it matters",
      title: "Customers don't think in channels — they think in problems",
      lead: "Making someone repeat their issue because they switched channels is a small betrayal they remember.",
    },
    paragraphs: [
      "Your customers move between chat, email, phone, and social without a second thought. When those channels are siloed, they're forced to re-explain themselves each time — and the experience feels broken.",
      "We run support as one operation with shared context, so a conversation that starts on chat can continue on email or phone without losing a beat, and your brand feels consistent everywhere.",
      "The result is a seamless experience, faster resolution, and consistency that no single-channel team can match.",
    ],
  },
  challenges: {
    intro: {
      eyebrow: "The problem",
      title: "Why channels fragment the experience",
      lead: "Silos cost context, consistency, and trust.",
    },
    items: [
      {
        title: "Customers repeat themselves",
        body: "Switching channels means re-explaining the issue, which feels like being ignored.",
      },
      {
        title: "Context gets lost",
        body: "Without shared history, each channel starts from zero and quality suffers.",
      },
      {
        title: "Tone varies by channel",
        body: "Separate teams for chat, email, and social drift apart in voice and standards.",
      },
      {
        title: "Coverage gaps by channel",
        body: "One channel staffed while another goes dark sends customers in circles.",
      },
    ],
  },
  approach: {
    intro: {
      eyebrow: "How Invicta solves it",
      title: "One operation, shared context",
      lead: "Channels unified, not just co-located.",
    },
    points: [
      {
        title: "Shared context across channels",
        body: "History follows the customer, so a conversation continues seamlessly wherever it moves.",
      },
      {
        title: "One consistent voice",
        body: "A single trained operation keeps tone and standards identical on every channel.",
      },
      {
        title: "Route to the right channel",
        body: "We move conversations to the best channel for the issue without dropping context.",
      },
      {
        title: "Balanced coverage",
        body: "Staffing spans channels so none goes dark while another queues.",
      },
    ],
  },
  workflow: {
    intro: {
      eyebrow: "Workflow",
      title: "How a cross-channel conversation flows",
      lead: "One thread, many channels.",
    },
    steps: [
      {
        marker: "01",
        title: "Capture with context",
        body: "Every contact carries the customer's full history, whatever channel it arrives on.",
      },
      {
        marker: "02",
        title: "Resolve in place",
        body: "Agents resolve on the channel the customer chose wherever possible.",
      },
      {
        marker: "03",
        title: "Shift channels cleanly",
        body: "When a different channel suits better, the conversation moves with its context intact.",
      },
      {
        marker: "04",
        title: "Keep one voice",
        body: "Tone and standards stay identical across every touchpoint.",
      },
      {
        marker: "05",
        title: "Unify the reporting",
        body: "One view of the customer journey across channels informs improvement.",
      },
    ],
  },
  technology: {
    intro: {
      eyebrow: "Technology",
      title: "We unify your channel stack",
      lead: "Our specialists operate across your tools with shared context.",
    },
    groups: [
      { name: "Unified helpdesk", items: ["Zendesk", "Intercom", "Salesforce Service"] },
      { name: "Channels", items: ["Live chat", "Email", "Voice", "Social & messaging"] },
      {
        name: "Customer context",
        items: ["CRM profiles", "Conversation history", "Order & account data"],
      },
      { name: "Knowledge base", items: ["Unified playbooks", "Voice guide", "Guru / Notion"] },
      {
        name: "Analytics & QA",
        items: ["Cross-channel journeys", "CSAT", "Resolution & consistency"],
      },
    ],
  },
  benefits: {
    intro: {
      eyebrow: "Benefits",
      title: "What you get",
      lead: "A seamless brand, whatever the channel.",
    },
    items: [
      { title: "No repeated explanations", body: "Context follows the customer everywhere." },
      { title: "Consistent voice", body: "One standard across every channel." },
      {
        title: "Faster resolution",
        body: "Shared history means less time re-establishing context.",
      },
      { title: "A unified view", body: "One picture of the customer journey to act on." },
    ],
  },
  statement: {
    statement: "Seamless isn't a channel — it's the absence of seams between them.",
    context: "One conversation, everywhere",
  },
  industriesUsing: {
    intro: {
      eyebrow: "Industries",
      title: "Where this service delivers",
      lead: "Wherever customers move between channels.",
    },
    items: [
      industryItem("ecommerce", "One experience across the buying journey."),
      industryItem("saas", "Unified in-app, email, and chat support."),
      industryItem("travel", "Seamless help across every touchpoint."),
    ],
  },
  kpis: {
    intro: {
      eyebrow: "The standard we operate to",
      title: "Targets we hold ourselves to",
      lead: "Commitments behind every omnichannel engagement.",
    },
    metrics: [
      { value: 60, prefix: "<", suffix: "s", label: "First response target" },
      { value: 95, suffix: "%+", label: "QA score standard" },
      { value: 24, suffix: "/7", label: "Coverage across channels" },
      { value: 80, suffix: "%", label: "First-contact resolution target" },
    ],
  },
  related: {
    intro: {
      eyebrow: "Related services",
      title: "Pairs well with",
      lead: "Capabilities teams deploy alongside omnichannel support.",
    },
    items: [
      serviceItem("customer-support", "The frontline this unifies."),
      serviceItem("live-chat", "Real-time as one channel of many."),
      serviceItem("social-media-support", "Social folded into one experience."),
    ],
  },
  faqs: [
    {
      question: "What makes this different from multichannel support?",
      answer:
        "Multichannel means the channels exist; omnichannel means they share context. A conversation continues seamlessly across chat, email, phone, and social without the customer repeating themselves.",
    },
    {
      question: "Will customers stop having to repeat themselves?",
      answer:
        "Yes. History follows the customer across channels, so agents pick up where the last touchpoint left off.",
    },
    {
      question: "How do you keep tone consistent across channels?",
      answer:
        "A single trained operation, one voice guide, and unified QA keep standards identical whether it's chat, email, phone, or social.",
    },
    {
      question: "Can you route to the best channel for an issue?",
      answer:
        "Yes. We move conversations to the channel that suits the issue — without dropping the context.",
    },
    {
      question: "Do you work in our existing tools?",
      answer:
        "Yes. We operate across your helpdesk, channels, and CRM to unify context rather than replacing your stack.",
    },
    {
      question: "Do you cover all channels 24/7?",
      answer: "Yes. Staffing spans channels and timezones so none goes dark while another queues.",
    },
    {
      question: "How is quality measured?",
      answer:
        "On cross-channel resolution, consistency, and CSAT, with a unified view of the customer journey.",
    },
    {
      question: "How quickly can you launch?",
      answer:
        "We connect your channels and context, build unified playbooks, certify the team, and ramp in stages.",
    },
  ],
  cta: {
    title: "Make every channel feel like one conversation.",
    lead: "Let's unify your support experience — starting with a conversation, not a contract.",
  },
};

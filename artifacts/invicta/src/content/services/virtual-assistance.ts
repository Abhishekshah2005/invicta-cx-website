import type { ServiceContent } from "@/types/templates";
import { industryItem, serviceItem } from "./_shared";

export const virtualAssistance: ServiceContent = {
  slug: "virtual-assistance",
  hero: {
    eyebrow: "Services — Virtual Assistance",
    title: "A dedicated right hand, without the headcount.",
    lead: "Invicta provides trained virtual assistants for admin, coordination, inbox, and executive support — capable, reliable people who give your team its time back.",
    imageLabel:
      "A virtual assistant organising a busy schedule with calm focus, tidy workspace, warm light — editorial.",
    image: "/assets/services/virtual-assistance/hero/hero.png",
    cta: { label: "Talk to an Expert", href: "/contact" },
    secondaryCta: { label: "See how we operate", href: "/method" },
  },
  overview: {
    intro: {
      eyebrow: "Why it matters",
      title: "Your team's time is the scarcest resource you have",
      lead: "Every hour spent on admin is an hour not spent on the work only they can do.",
    },
    paragraphs: [
      "Founders, executives, and busy teams lose enormous time to scheduling, inbox triage, research, and coordination — necessary work that doesn't need their seniority.",
      "We provide dedicated virtual assistants trained on your preferences and tools, handling that work reliably so your people get their focus back.",
      "The result is reclaimed hours, smoother coordination, and a capable right hand without the cost and commitment of another hire.",
    ],
  },
  challenges: {
    intro: {
      eyebrow: "The problem",
      title: "Why admin eats your best people",
      lead: "The small stuff adds up fast.",
    },
    items: [
      {
        title: "Senior time lost to low-value tasks",
        body: "Scheduling and inbox triage drain hours from people who should be doing more.",
      },
      {
        title: "Coordination falls through cracks",
        body: "Without someone owning it, follow-ups, bookings, and details get dropped.",
      },
      {
        title: "Hiring in-house is slow and costly",
        body: "A full-time assistant is a big commitment for variable, part-time needs.",
      },
      {
        title: "Consistency is hard with ad-hoc help",
        body: "Occasional or rotating support never learns your preferences well enough.",
      },
    ],
  },
  approach: {
    intro: {
      eyebrow: "How Invicta solves it",
      title: "A dedicated, trained assistant",
      lead: "Reliable support that learns how you work.",
    },
    points: [
      {
        title: "Dedicated, not rotating",
        body: "You get a consistent assistant who learns your preferences, tools, and rhythm.",
      },
      {
        title: "Trained on your world",
        body: "Assistants ramp on your systems and standards so they work the way you do.",
      },
      {
        title: "Broad, capable support",
        body: "Scheduling, inbox, research, coordination, and admin — handled end to end.",
      },
      {
        title: "Flexible capacity",
        body: "Scale hours up or down without the commitment of a full-time hire.",
      },
    ],
  },
  workflow: {
    intro: {
      eyebrow: "Workflow",
      title: "How support gets delivered",
      lead: "From onboarding to trusted right hand.",
    },
    steps: [
      {
        marker: "01",
        title: "Match & onboard",
        body: "We match you with an assistant and onboard them on your tools, preferences, and priorities.",
      },
      {
        marker: "02",
        title: "Establish the rhythm",
        body: "Recurring tasks, boundaries, and communication cadence are set up front.",
      },
      {
        marker: "03",
        title: "Own the work",
        body: "The assistant takes real ownership of coordination, inbox, and admin.",
      },
      {
        marker: "04",
        title: "Anticipate",
        body: "As they learn your patterns, they get ahead of needs rather than just reacting.",
      },
      {
        marker: "05",
        title: "Review & adjust",
        body: "Regular check-ins tune scope and priorities as your needs change.",
      },
    ],
  },
  technology: {
    intro: {
      eyebrow: "Technology",
      title: "We work in your tools",
      lead: "Your assistant operates in the software you already use.",
    },
    groups: [
      { name: "Calendar & email", items: ["Google Workspace", "Microsoft 365", "Calendar tools"] },
      { name: "Collaboration", items: ["Slack", "Notion", "Asana", "Trello"] },
      { name: "CRM & docs", items: ["HubSpot", "Salesforce", "Document tools"] },
      { name: "Knowledge base", items: ["Preference profiles", "SOPs", "Guru / Notion"] },
      { name: "Analytics & QA", items: ["Responsiveness", "Task completion", "Satisfaction"] },
    ],
  },
  benefits: {
    intro: {
      eyebrow: "Benefits",
      title: "What you get",
      lead: "Your time back, and nothing dropped.",
    },
    items: [
      { title: "Reclaimed hours", body: "Low-value tasks off your plate, focus restored." },
      { title: "Nothing falls through", body: "Coordination and follow-ups reliably owned." },
      { title: "A consistent partner", body: "One assistant who learns how you work." },
      { title: "Flexible cost", body: "Support that scales without a full-time hire." },
    ],
  },
  statement: {
    statement: "The best assistant gives you back the one thing you can't buy more of.",
    context: "Time, reclaimed",
  },
  industriesUsing: {
    intro: {
      eyebrow: "Industries",
      title: "Where this service delivers",
      lead: "Wherever busy people need their time back.",
    },
    items: [
      industryItem("professional-services", "Executive and client-coordination support."),
      industryItem("recruitment", "Coordination and candidate admin."),
      industryItem("saas", "Founder and team support that scales."),
    ],
  },
  kpis: {
    intro: {
      eyebrow: "The standard we operate to",
      title: "Targets we hold ourselves to",
      lead: "Commitments behind every virtual-assistance engagement.",
    },
    metrics: [
      { value: 1, prefix: "<", suffix: "h", label: "Responsiveness target" },
      { value: 95, suffix: "%+", label: "Task completion target" },
      { value: 1, suffix: ":1", label: "Dedicated assistant" },
      { value: 4.8, suffix: "★", decimals: 1, label: "Satisfaction target" },
    ],
  },
  related: {
    intro: {
      eyebrow: "Related services",
      title: "Pairs well with",
      lead: "Capabilities teams deploy alongside virtual assistance.",
    },
    items: [
      serviceItem("appointment-setting", "Dedicated booking and coordination."),
      serviceItem("back-office", "Broader administrative processing."),
      serviceItem("email-support", "Inbox and correspondence at scale."),
    ],
  },
  faqs: [
    {
      question: "Do I get a dedicated assistant?",
      answer:
        "Yes. You get a consistent assistant who learns your preferences, tools, and rhythm — not a rotating pool.",
    },
    {
      question: "What can a virtual assistant handle?",
      answer:
        "Scheduling, inbox triage, research, coordination, travel, and general admin — trained on your systems and standards.",
    },
    {
      question: "Can I scale hours up or down?",
      answer:
        "Yes. Support flexes to your needs without the commitment and cost of a full-time hire.",
    },
    {
      question: "Do they work in my tools?",
      answer:
        "Yes. Your assistant operates in the calendar, email, and collaboration software you already use.",
    },
    {
      question: "How do you keep it consistent?",
      answer:
        "A dedicated assistant plus documented preferences and SOPs means the support stays consistent and improves over time.",
    },
    {
      question: "How responsive are they?",
      answer:
        "We operate to a sub-hour responsiveness target during agreed hours, so nothing waits long.",
    },
    {
      question: "How is quality measured?",
      answer:
        "On responsiveness, task completion, and your satisfaction, with regular check-ins to tune scope.",
    },
    {
      question: "How quickly can you launch?",
      answer:
        "We match and onboard your assistant on your tools and priorities, then establish the working rhythm in the first days.",
    },
  ],
  cta: {
    title: "Get your time back.",
    lead: "Let's put a capable right hand behind your team — starting with a conversation, not a contract.",
  },
};

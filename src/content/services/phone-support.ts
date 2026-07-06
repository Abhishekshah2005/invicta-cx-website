import type { ServiceContent } from "@/types/templates";
import { industryItem, serviceItem } from "./_shared";

export const phoneSupport: ServiceContent = {
  slug: "phone-support",
  hero: {
    eyebrow: "Services — Phone Support",
    title: "For the moments that need a human voice.",
    lead: "Invicta staffs warm, capable voice support for the calls that matter most — urgent, sensitive, and high-value moments where a real person changes everything.",
    imageLabel:
      "A specialist on a headset listening intently, calm and reassuring, soft light — human, cinematic.",
    cta: { label: "Talk to an Expert", href: "/contact" },
    secondaryCta: { label: "See how we operate", href: "/method" },
  },
  overview: {
    intro: {
      eyebrow: "Why it matters",
      title: "Some problems only a voice can solve",
      lead: "When someone is stressed, confused, or high-value, a phone call carries what text can't.",
    },
    paragraphs: [
      "Voice is the highest-empathy channel. For urgent problems, sensitive matters, and important customers, the reassurance of a real person on the line resolves what a chatbot never could.",
      "We staff phone support with specialists trained to listen, de-escalate, and take ownership — turning the hardest calls into the moments customers remember you for.",
      "The result is fewer escalations that fester, higher satisfaction on your toughest interactions, and a voice channel that protects your most valuable relationships.",
    ],
  },
  challenges: {
    intro: {
      eyebrow: "The problem",
      title: "Why phone support is hard",
      lead: "Voice is unforgiving — there's nowhere to hide.",
    },
    items: [
      {
        title: "Every call is live and unscripted",
        body: "There's no draft, no undo. Composure and judgement have to be real-time.",
      },
      {
        title: "Emotion runs highest here",
        body: "People call when they're stressed or frustrated; de-escalation is a skill, not a script.",
      },
      {
        title: "Coverage is expensive to staff",
        body: "Peaks, after-hours, and multilingual needs make in-house voice cover costly and rigid.",
      },
      {
        title: "Wait times destroy goodwill",
        body: "Nothing erodes trust faster than a long hold for an urgent problem.",
      },
    ],
  },
  approach: {
    intro: {
      eyebrow: "How Invicta solves it",
      title: "A voice that takes ownership",
      lead: "Specialists trained for empathy, composure, and resolution.",
    },
    points: [
      {
        title: "Hired and trained for composure",
        body: "We select for calm and empathy, then train on your product and de-escalation before agents take live calls.",
      },
      {
        title: "Ownership, not transfers",
        body: "Agents are equipped to resolve, so callers aren't bounced around or asked to call back.",
      },
      {
        title: "Short waits, real coverage",
        body: "Workforce planning staffs your peaks and off-hours so urgent calls are answered fast.",
      },
      {
        title: "Multilingual where you need it",
        body: "Coverage spans the languages your customers speak, so no one is stranded by a language gap.",
      },
    ],
  },
  workflow: {
    intro: {
      eyebrow: "Workflow",
      title: "How a call gets handled",
      lead: "From ring to resolved.",
    },
    steps: [
      {
        marker: "01",
        title: "Answer fast",
        body: "Calls are answered quickly, with context pulled from your systems before the greeting ends.",
      },
      {
        marker: "02",
        title: "Listen & de-escalate",
        body: "Agents lead with empathy, understand the real issue, and steady the moment.",
      },
      {
        marker: "03",
        title: "Resolve or own",
        body: "The agent resolves directly or takes ownership of the follow-through, with no cold transfers.",
      },
      {
        marker: "04",
        title: "Confirm & document",
        body: "The outcome is confirmed with the caller and logged for a complete record.",
      },
      {
        marker: "05",
        title: "Coach from the call",
        body: "Recordings feed QA and coaching so difficult calls get easier to handle.",
      },
    ],
  },
  technology: {
    intro: {
      eyebrow: "Technology",
      title: "We work with your telephony",
      lead: "Our specialists operate in your voice and CRM systems.",
    },
    groups: [
      {
        name: "Telephony & contact centre",
        items: ["Cloud contact-centre platforms", "IVR", "Call routing"],
      },
      { name: "CRM & context", items: ["Salesforce", "Zendesk", "Customer profiles"] },
      { name: "Knowledge base", items: ["Call scripts & playbooks", "Guru", "Notion"] },
      {
        name: "Coverage",
        items: ["Multilingual staffing", "Peak & after-hours", "Overflow support"],
      },
      { name: "Analytics & QA", items: ["Answer & handle time", "CSAT", "Call scoring"] },
    ],
  },
  benefits: {
    intro: {
      eyebrow: "Benefits",
      title: "What you get",
      lead: "Your hardest interactions, handled well.",
    },
    items: [
      {
        title: "Higher satisfaction on tough calls",
        body: "Empathy and ownership turn stressful moments into loyalty.",
      },
      { title: "Shorter wait times", body: "Right-sized staffing answers urgent calls fast." },
      {
        title: "Fewer festering escalations",
        body: "Resolving on the call stops problems from growing.",
      },
      {
        title: "Protected key relationships",
        body: "High-value customers get the human attention they expect.",
      },
    ],
  },
  statement: {
    statement: "When it really matters, people still want a person.",
    context: "The highest-empathy channel",
  },
  industriesUsing: {
    intro: {
      eyebrow: "Industries",
      title: "Where this service delivers",
      lead: "Wherever a voice defuses the moment.",
    },
    items: [
      industryItem("travel", "Calm ownership when plans fall apart."),
      industryItem("healthcare", "A reassuring voice for anxious patients."),
      industryItem("fintech", "Steady help when money is on the line."),
    ],
  },
  kpis: {
    intro: {
      eyebrow: "The standard we operate to",
      title: "Targets we hold ourselves to",
      lead: "Commitments behind every phone-support engagement.",
    },
    metrics: [
      { value: 30, prefix: "<", suffix: "s", label: "Answer time target" },
      { value: 95, suffix: "%+", label: "QA score standard" },
      { value: 24, suffix: "/7", label: "Coverage" },
      { value: 85, suffix: "%", label: "First-call resolution target" },
    ],
  },
  related: {
    intro: {
      eyebrow: "Related services",
      title: "Pairs well with",
      lead: "Capabilities teams deploy alongside voice.",
    },
    items: [
      serviceItem("customer-support", "The full omnichannel frontline."),
      serviceItem("omnichannel-support", "Voice unified with every other channel."),
      serviceItem("virtual-assistance", "Dedicated support for coordination and admin."),
    ],
  },
  faqs: [
    {
      question: "How quickly are calls answered?",
      answer: "We staff to a sub-30-second answer-time target so urgent calls don't sit on hold.",
    },
    {
      question: "Are agents trained to de-escalate?",
      answer:
        "Yes. We hire for composure and empathy and train de-escalation explicitly, because voice is where emotion runs highest.",
    },
    {
      question: "Do you offer multilingual voice support?",
      answer:
        "Yes. Coverage spans the languages your customers speak, so no caller is stranded by a language gap.",
    },
    {
      question: "Can you cover after-hours and overflow?",
      answer:
        "Yes. Workforce planning covers peaks, off-hours, and overflow so urgent calls are always answered.",
    },
    {
      question: "Do agents resolve or just transfer?",
      answer:
        "Agents are equipped to resolve and to own the follow-through — no cold transfers or call-backs where we can avoid them.",
    },
    {
      question: "Do you work with our phone system?",
      answer: "Yes. We operate within your telephony and CRM rather than replacing them.",
    },
    {
      question: "How is quality measured?",
      answer:
        "QA scores real calls on empathy, resolution, and accuracy, feeding coaching and transparent reporting.",
    },
    {
      question: "How quickly can you launch?",
      answer:
        "We learn your product, scripts, and escalation paths, certify the team on live scenarios, and ramp in stages.",
    },
  ],
  cta: {
    title: "Be the voice customers remember.",
    lead: "Let's staff the calls that matter most — starting with a conversation, not a contract.",
  },
};

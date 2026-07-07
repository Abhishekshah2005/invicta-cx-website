import type { ServiceContent } from "@/types/templates";
import { industryItem, serviceItem } from "./_shared";

export const customerSupport: ServiceContent = {
  slug: "customer-support",
  hero: {
    eyebrow: "Services — Customer Support",
    title: "Omnichannel support that resolves — and makes people stay.",
    lead: "Invicta staffs and runs your frontline: trained specialists resolving fast across chat, email, phone, and social, in your voice and to your standard.",
    imageLabel:
      "A support specialist mid-conversation on a headset, warm and focused, soft daylight — human, editorial.",
    image: "/assets/services/customer-support/hero/hero.png",
    cta: { label: "Talk to an Expert", href: "/contact" },
    secondaryCta: { label: "See how we operate", href: "/method" },
  },
  overview: {
    intro: {
      eyebrow: "Why it matters",
      title: "Support is where your brand keeps its promises",
      lead: "Every interaction either confirms a customer's decision to trust you — or quietly unwinds it.",
    },
    paragraphs: [
      "Customers judge you on the moments something goes wrong. A fast, competent, human response turns a problem into proof you're worth staying with; a slow or robotic one does the opposite.",
      "We run that frontline as a trained extension of your team — specialists who know your product, resolve on first contact wherever possible, and sound like your brand across every channel.",
      "The result is measurable: higher satisfaction, better retention, and a support operation that scales cleanly as you grow.",
    ],
  },
  challenges: {
    intro: {
      eyebrow: "The problem",
      title: "What breaks frontline support",
      lead: "Volume, consistency, and cost all pull in different directions.",
    },
    items: [
      {
        title: "Speed and quality feel like a trade-off",
        body: "Push for faster and quality drops; push for thorough and queues build. Most teams never solve both at once.",
      },
      {
        title: "Consistency slips as you scale",
        body: "The more people answer, the more tone and accuracy vary — and inconsistency erodes trust fast.",
      },
      {
        title: "Hiring never keeps up with demand",
        body: "Growth, launches, and seasonality spike volume faster than in-house recruiting and training can react.",
      },
      {
        title: "Channels fragment the experience",
        body: "Chat, email, phone, and social in separate silos means customers repeat themselves and context gets lost.",
      },
    ],
  },
  approach: {
    intro: {
      eyebrow: "How Invicta solves it",
      title: "A trained frontline, run to a standard",
      lead: "Specialists, not seat-fillers — measured on resolution and retention, not just handle time.",
    },
    points: [
      {
        title: "Hired for judgement, trained on your world",
        body: "We select for empathy and problem-solving, then certify agents on your product, tone, and policies before they go live.",
      },
      {
        title: "First-contact resolution as the goal",
        body: "We resolve wherever possible on the first touch, cutting repeat contacts and the frustration they cause.",
      },
      {
        title: "One voice across every channel",
        body: "Tone discipline and QA keep replies consistent whether they arrive by chat, email, phone, or social.",
      },
      {
        title: "Capacity that flexes with you",
        body: "Workforce planning ramps trained cover for peaks so speed and quality hold under pressure.",
      },
    ],
  },
  workflow: {
    intro: {
      eyebrow: "Workflow",
      title: "How a conversation gets handled",
      lead: "The path from first message to resolved — and what we learn from it.",
    },
    steps: [
      {
        marker: "01",
        title: "Intake & routing",
        body: "Every contact is captured, categorised, and routed to the right specialist with full context, on any channel.",
      },
      {
        marker: "02",
        title: "Resolve on first contact",
        body: "Trained agents resolve directly wherever possible, using playbooks and your knowledge base.",
      },
      {
        marker: "03",
        title: "Escalate cleanly",
        body: "Genuine edge cases route to the right tier or your team with a documented summary, never a cold hand-off.",
      },
      {
        marker: "04",
        title: "Follow through",
        body: "We close the loop with the customer and confirm the outcome actually landed.",
      },
      {
        marker: "05",
        title: "Learn & improve",
        body: "Trends feed QA, coaching, and knowledge-base updates so recurring issues get designed out.",
      },
    ],
  },
  technology: {
    intro: {
      eyebrow: "Technology",
      title: "We work inside your stack",
      lead: "No migration — our specialists operate in the tools you already run.",
    },
    groups: [
      { name: "Helpdesk & CRM", items: ["Zendesk", "Salesforce", "HubSpot", "Intercom"] },
      { name: "Ticketing & workflow", items: ["Zendesk", "Freshdesk", "Jira Service Management"] },
      { name: "Knowledge base", items: ["Guru", "Notion", "Confluence"] },
      { name: "Channels", items: ["Live chat", "Email", "Voice", "Social & messaging"] },
      { name: "Analytics & QA", items: ["CSAT / FRT", "Resolution rates", "Interaction scoring"] },
    ],
  },
  benefits: {
    intro: {
      eyebrow: "Benefits",
      title: "What you get",
      lead: "Outcomes that show up in retention, not just response time.",
    },
    items: [
      {
        title: "Higher satisfaction",
        body: "Fast, competent, human help lifts CSAT and the loyalty that follows it.",
      },
      {
        title: "Lower cost to serve",
        body: "First-contact resolution and efficient staffing reduce repeat contacts and total cost.",
      },
      {
        title: "Consistent brand voice",
        body: "Every reply sounds like you, at any volume, on any channel.",
      },
      {
        title: "Effortless scaling",
        body: "Add capacity for peaks and growth without the in-house hiring scramble.",
      },
    ],
  },
  statement: {
    statement: "The interaction ends. The relationship is what you keep.",
    context: "Support, run as retention",
  },
  industriesUsing: {
    intro: {
      eyebrow: "Industries",
      title: "Where this service delivers",
      lead: "Teams that live or die on frontline experience.",
    },
    items: [
      industryItem("gaming", "High-intensity player support that never sleeps.", "Flagship"),
      industryItem("ecommerce", "Pre-sale and post-purchase support that protects revenue."),
      industryItem("saas", "Support as the retention engine for software."),
    ],
  },
  kpis: {
    intro: {
      eyebrow: "The standard we operate to",
      title: "Targets we hold ourselves to",
      lead: "Commitments behind every customer-support engagement.",
    },
    metrics: [
      { value: 60, prefix: "<", suffix: "s", label: "First response target" },
      { value: 80, suffix: "%", label: "First-contact resolution target" },
      { value: 95, suffix: "%+", label: "QA score standard" },
      { value: 24, suffix: "/7", label: "Coverage" },
    ],
  },
  related: {
    intro: {
      eyebrow: "Related services",
      title: "Pairs well with",
      lead: "Capabilities teams commonly deploy alongside frontline support.",
    },
    items: [
      serviceItem("live-chat", "Real-time help at the moment of friction."),
      serviceItem("omnichannel-support", "One conversation across every channel."),
      serviceItem("customer-retention", "Turn resolved tickets into renewals."),
    ],
  },
  faqs: [
    {
      question: "Which channels do you cover?",
      answer:
        "Live chat, email, phone, and social/messaging — as a unified operation so customers never repeat themselves across channels.",
    },
    {
      question: "Will agents sound like our brand?",
      answer:
        "Yes. Agents are trained on your tone and voice, and QA enforces it, so every reply reads like your own team wrote it.",
    },
    {
      question: "How do you measure quality?",
      answer:
        "A dedicated QA team scores real interactions weekly on resolution, accuracy, and tone, feeding coaching and transparent reporting.",
    },
    {
      question: "How fast can you scale for a peak?",
      answer:
        "Workforce planning ramps trained cover for launches and seasonal peaks so speed and quality hold under load.",
    },
    {
      question: "Do you work in our existing tools?",
      answer:
        "Yes. We operate inside your current helpdesk, CRM, and channels rather than forcing a migration.",
    },
    {
      question: "How do you handle escalations?",
      answer:
        "Clear criteria route genuine edge cases to the right tier or your team with a documented summary — never a cold hand-off.",
    },
    {
      question: "Can you provide 24/7 coverage?",
      answer:
        "Yes. Follow-the-sun staffing keeps support live around the clock across the timezones your customers live in.",
    },
    {
      question: "How quickly can you launch?",
      answer:
        "We map your product, tone, and policies, build the playbooks and QA rubric, certify the team, then ramp in stages with you watching the metrics.",
    },
  ],
  cta: {
    title: "Give your customers a reason to stay.",
    lead: "Let's build the frontline behind your brand — starting with a conversation, not a contract.",
  },
};

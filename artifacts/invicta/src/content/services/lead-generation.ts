import type { ServiceContent } from "@/types/templates";
import { industryItem, serviceItem } from "./_shared";

export const leadGeneration: ServiceContent = {
  slug: "lead-generation",
  hero: {
    eyebrow: "Services — Lead Generation",
    title: "Pipeline you can trust, not a list you can't.",
    lead: "Invicta runs human-verified outbound and qualification — research, outreach, and conversations that put genuinely interested, sales-ready prospects in front of your team.",
    imageLabel:
      "An outbound specialist mid-conversation, energetic and sharp, modern office light — editorial.",
    image: "/assets/services/lead-generation/hero/hero.png",
    cta: { label: "Talk to an Expert", href: "/contact" },
    secondaryCta: { label: "See how we operate", href: "/method" },
  },
  overview: {
    intro: {
      eyebrow: "Why it matters",
      title: "Your closers should be closing, not prospecting",
      lead: "Sales time spent chasing unqualified leads is the most expensive time you have.",
    },
    paragraphs: [
      "Most pipeline problems aren't a shortage of names — they're a shortage of qualified conversations. Bad lists and spray-and-pray outreach burn your team's time and your brand's goodwill.",
      "We run lead generation with specialists who research, personalise, and actually talk to prospects — qualifying real interest so your salespeople inherit conversations, not cold lists.",
      "The result is a fuller top of funnel with better-fit prospects, and closers who spend their time closing.",
    ],
  },
  challenges: {
    intro: {
      eyebrow: "The problem",
      title: "Why pipeline efforts fail",
      lead: "Volume without quality wastes everyone's time.",
    },
    items: [
      {
        title: "Unqualified leads waste sales time",
        body: "Handing closers cold, ill-fit names burns your most valuable hours.",
      },
      {
        title: "Generic outreach gets ignored",
        body: "Untargeted, impersonal messages train prospects to tune you out.",
      },
      {
        title: "Prospecting distracts your closers",
        body: "Salespeople doing their own research spend less time actually selling.",
      },
      {
        title: "Inconsistent effort, inconsistent pipeline",
        body: "Outreach that starts and stops produces a lumpy, unreliable funnel.",
      },
    ],
  },
  approach: {
    intro: {
      eyebrow: "How Invicta solves it",
      title: "Human-verified pipeline",
      lead: "Researched, personalised, and qualified before it reaches sales.",
    },
    points: [
      {
        title: "Targeted research",
        body: "We build and enrich lists that fit your ideal customer, not just any name we can find.",
      },
      {
        title: "Personalised outreach",
        body: "Messages are tailored and on-brand, so prospects engage instead of tuning out.",
      },
      {
        title: "Real qualification",
        body: "Specialists have the conversations that confirm genuine interest and fit before hand-off.",
      },
      {
        title: "Consistent, measured effort",
        body: "Steady activity produces a reliable funnel, tracked against clear targets.",
      },
    ],
  },
  workflow: {
    intro: {
      eyebrow: "Workflow",
      title: "How a lead becomes sales-ready",
      lead: "From target to qualified hand-off.",
    },
    steps: [
      {
        marker: "01",
        title: "Define & research",
        body: "We agree your ideal profile and build targeted, enriched prospect lists.",
      },
      {
        marker: "02",
        title: "Personalise outreach",
        body: "Tailored, multi-touch outreach opens conversations on the right channels.",
      },
      {
        marker: "03",
        title: "Qualify",
        body: "Specialists confirm fit, interest, and timing through real conversation.",
      },
      {
        marker: "04",
        title: "Hand off warm",
        body: "Sales-ready prospects pass to your team with full context and notes.",
      },
      {
        marker: "05",
        title: "Measure & tune",
        body: "Response and conversion data refine targeting and messaging over time.",
      },
    ],
  },
  technology: {
    intro: {
      eyebrow: "Technology",
      title: "We work in your sales stack",
      lead: "Our specialists operate in your CRM and outreach tools.",
    },
    groups: [
      { name: "CRM", items: ["Salesforce", "HubSpot", "Pipedrive"] },
      { name: "Outreach & sequencing", items: ["Outreach", "Salesloft", "Email & LinkedIn tools"] },
      {
        name: "Data & enrichment",
        items: ["Prospecting databases", "Enrichment tools", "List building"],
      },
      {
        name: "Knowledge base",
        items: ["ICP & messaging playbooks", "Objection handling", "Guru / Notion"],
      },
      {
        name: "Analytics & QA",
        items: ["Response & conversion rates", "Meeting quality", "Activity tracking"],
      },
    ],
  },
  benefits: {
    intro: {
      eyebrow: "Benefits",
      title: "What you get",
      lead: "A funnel your sales team actually wants.",
    },
    items: [
      { title: "Better-fit pipeline", body: "Qualified prospects that match your ideal customer." },
      { title: "More selling time", body: "Closers freed from research and prospecting." },
      { title: "Higher engagement", body: "Personalised outreach that prospects respond to." },
      { title: "A reliable funnel", body: "Consistent effort producing predictable pipeline." },
    ],
  },
  statement: {
    statement: "A qualified conversation beats a thousand cold names.",
    context: "Pipeline, human-verified",
  },
  industriesUsing: {
    intro: {
      eyebrow: "Industries",
      title: "Where this service delivers",
      lead: "Wherever growth depends on quality pipeline.",
    },
    items: [
      industryItem("saas", "Fill the funnel for software sales."),
      industryItem("professional-services", "Qualified leads for B2B firms."),
      industryItem("technology", "Pipeline for technology businesses."),
    ],
  },
  kpis: {
    intro: {
      eyebrow: "The standard we operate to",
      title: "Targets we hold ourselves to",
      lead: "Commitments behind every lead-generation engagement.",
    },
    metrics: [
      { value: 100, suffix: "%", label: "Leads human-verified" },
      { value: 95, suffix: "%+", label: "QA score standard" },
      { value: 24, suffix: "h", label: "Speed-to-lead target" },
      { value: 5, suffix: "x", label: "Outreach touches, typical" },
    ],
  },
  related: {
    intro: {
      eyebrow: "Related services",
      title: "Pairs well with",
      lead: "Capabilities teams deploy alongside lead generation.",
    },
    items: [
      serviceItem("appointment-setting", "Turn qualified leads into booked meetings."),
      serviceItem("customer-support", "Support prospects who become customers."),
      serviceItem("social-media-support", "Engage prospects across social."),
    ],
  },
  faqs: [
    {
      question: "Are your leads actually qualified?",
      answer:
        "Yes. Specialists confirm fit, interest, and timing through real conversation before hand-off — you inherit conversations, not cold names.",
    },
    {
      question: "Do you build the lists too?",
      answer:
        "Yes. We define your ideal profile with you and build enriched, targeted lists rather than working from whatever you already have.",
    },
    {
      question: "How do you keep outreach on-brand?",
      answer:
        "Messaging is tailored to your voice and value proposition, and QA reviews it, so outreach represents you well.",
    },
    {
      question: "Do you work in our CRM?",
      answer:
        "Yes. We operate in your existing CRM and outreach tools so pipeline and activity stay visible to your team.",
    },
    {
      question: "How do you hand off leads?",
      answer:
        "Warm, with full context and notes, so your closers can pick up the conversation immediately.",
    },
    {
      question: "Which channels do you use?",
      answer:
        "Email, phone, and LinkedIn as fits your market, in coordinated multi-touch sequences.",
    },
    {
      question: "How is quality measured?",
      answer:
        "On lead fit, response and conversion rates, and the quality of meetings booked — reported transparently.",
    },
    {
      question: "How quickly can you launch?",
      answer:
        "We agree your ICP and messaging, build the lists, certify the team, and ramp outreach in stages.",
    },
  ],
  cta: {
    title: "Give your closers something worth closing.",
    lead: "Let's build a pipeline your sales team trusts — starting with a conversation, not a contract.",
  },
};

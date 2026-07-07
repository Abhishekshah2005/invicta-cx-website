import type { ServiceContent } from "@/types/templates";
import { industryItem, serviceItem } from "./_shared";

export const knowledgeBaseManagement: ServiceContent = {
  slug: "knowledge-base-management",
  hero: {
    eyebrow: "Services — Knowledge Base Management",
    title: "The best support ticket is the one nobody has to raise.",
    lead: "Invicta builds and maintains help centres and internal knowledge that stay accurate, findable, and current — deflecting tickets and making every agent faster.",
    imageLabel:
      "A knowledge specialist structuring help articles on screen, methodical and clear, calm light — editorial.",
    image: "/assets/services/knowledge-base-management/hero/hero.jpg",
    cta: { label: "Talk to an Expert", href: "/contact" },
    secondaryCta: { label: "See how we operate", href: "/method" },
  },
  overview: {
    intro: {
      eyebrow: "Why it matters",
      title: "Knowledge is the cheapest support you'll ever run",
      lead: "Every question a customer answers themselves is a ticket you never pay to handle.",
    },
    paragraphs: [
      "A good help centre deflects volume, speeds up agents, and lets customers self-serve at 3am. A stale one does the opposite — sending people into tickets and eroding trust with wrong answers.",
      "We build and maintain your knowledge base as a living system: writing clear articles, structuring them to be found, and keeping them current as your product changes.",
      "The result is lower ticket volume, faster resolutions, and a self-serve experience customers actually use.",
    ],
  },
  challenges: {
    intro: {
      eyebrow: "The problem",
      title: "Why knowledge bases decay",
      lead: "They're everyone's job and no one's, so they rot.",
    },
    items: [
      {
        title: "Content goes stale fast",
        body: "Products change; articles don't. Wrong answers are worse than none.",
      },
      {
        title: "Customers can't find answers",
        body: "Poor structure and search mean people give up and raise a ticket anyway.",
      },
      {
        title: "Agents reinvent answers",
        body: "Without a trusted internal knowledge base, agents improvise and consistency suffers.",
      },
      {
        title: "No one owns it",
        body: "Knowledge work is always someone's side project, so it never gets done well.",
      },
    ],
  },
  approach: {
    intro: {
      eyebrow: "How Invicta solves it",
      title: "Knowledge as a living system",
      lead: "Owned, structured, and continuously maintained.",
    },
    points: [
      {
        title: "Clear, accurate articles",
        body: "We write and edit content that answers the real question, in plain language.",
      },
      {
        title: "Structured to be found",
        body: "Information architecture and search optimisation get customers to the answer fast.",
      },
      {
        title: "Kept current",
        body: "Content is reviewed and updated as your product and policies change.",
      },
      {
        title: "Ticket-driven gaps closed",
        body: "Support trends reveal missing articles, so the knowledge base grows where it's needed.",
      },
    ],
  },
  workflow: {
    intro: {
      eyebrow: "Workflow",
      title: "How knowledge gets managed",
      lead: "From gap to published to maintained.",
    },
    steps: [
      {
        marker: "01",
        title: "Audit & structure",
        body: "We assess existing content, fix the information architecture, and set standards.",
      },
      {
        marker: "02",
        title: "Write & edit",
        body: "Clear, accurate articles are created for the questions customers actually ask.",
      },
      {
        marker: "03",
        title: "Optimise for search",
        body: "Content is tagged and structured so customers and agents find it instantly.",
      },
      {
        marker: "04",
        title: "Maintain",
        body: "Articles are reviewed on a cadence and updated as the product changes.",
      },
      {
        marker: "05",
        title: "Close the loop",
        body: "Ticket trends surface gaps, driving new content where it deflects the most volume.",
      },
    ],
  },
  technology: {
    intro: {
      eyebrow: "Technology",
      title: "We work in your knowledge stack",
      lead: "Our specialists operate in your help-centre and docs tools.",
    },
    groups: [
      { name: "Help centre", items: ["Zendesk Guide", "Intercom Articles", "Help Scout Docs"] },
      { name: "Internal knowledge", items: ["Guru", "Notion", "Confluence"] },
      {
        name: "Search & structure",
        items: ["Taxonomy & tagging", "Search optimisation", "Content templates"],
      },
      { name: "Insight", items: ["Ticket-deflection analytics", "Search-gap reports"] },
      {
        name: "Analytics & QA",
        items: ["Article performance", "Deflection rate", "Freshness tracking"],
      },
    ],
  },
  benefits: {
    intro: {
      eyebrow: "Benefits",
      title: "What you get",
      lead: "Fewer tickets, faster everything.",
    },
    items: [
      { title: "Lower ticket volume", body: "Customers self-serve instead of contacting support." },
      {
        title: "Faster agents",
        body: "A trusted internal knowledge base speeds every resolution.",
      },
      {
        title: "Consistent answers",
        body: "One source of truth, so everyone says the same thing.",
      },
      { title: "Always current", body: "Content that keeps pace with your product." },
    ],
  },
  statement: {
    statement: "A great help centre answers the question before it becomes a ticket.",
    context: "Knowledge, kept alive",
  },
  industriesUsing: {
    intro: {
      eyebrow: "Industries",
      title: "Where this service delivers",
      lead: "Wherever self-serve scales support.",
    },
    items: [
      industryItem("saas", "Help centres that deflect and speed resolution."),
      industryItem("technology", "Documentation for complex products."),
      industryItem("ecommerce", "Self-serve for orders, returns, and FAQs."),
    ],
  },
  kpis: {
    intro: {
      eyebrow: "The standard we operate to",
      title: "Targets we hold ourselves to",
      lead: "Commitments behind every knowledge-base engagement.",
    },
    metrics: [
      { value: 30, suffix: "%", label: "Ticket-deflection target" },
      { value: 95, suffix: "%+", label: "Content-accuracy standard" },
      { value: 30, suffix: "d", label: "Review cadence" },
      { value: 100, suffix: "%", label: "Articles owned" },
    ],
  },
  related: {
    intro: {
      eyebrow: "Related services",
      title: "Pairs well with",
      lead: "Capabilities teams deploy alongside knowledge management.",
    },
    items: [
      serviceItem("technical-support", "Turn fixes into documented answers."),
      serviceItem("customer-support", "Deflect volume off the frontline."),
      serviceItem("quality-assurance", "Fix the content behind recurring errors."),
    ],
  },
  faqs: [
    {
      question: "Can you build our help centre from scratch?",
      answer:
        "Yes. We audit what exists, fix the structure, and write clear, accurate articles for the questions customers actually ask.",
    },
    {
      question: "How does this reduce tickets?",
      answer:
        "Findable, accurate self-serve content lets customers answer their own questions — we target a meaningful deflection rate as a core outcome.",
    },
    {
      question: "How do you keep content current?",
      answer:
        "Articles are reviewed on a cadence and updated as your product and policies change, so answers never go stale.",
    },
    {
      question: "Do you manage internal knowledge too?",
      answer:
        "Yes. A trusted internal knowledge base makes every agent faster and keeps answers consistent, alongside the customer-facing help centre.",
    },
    {
      question: "How do you decide what to write?",
      answer:
        "Support and search trends reveal the gaps, so content grows where it deflects the most volume rather than where it's easiest.",
    },
    {
      question: "Do you work in our tools?",
      answer: "Yes. We operate in your existing help-centre and internal-knowledge platforms.",
    },
    {
      question: "How is impact measured?",
      answer:
        "On deflection rate, article performance, accuracy, and freshness, reported transparently.",
    },
    {
      question: "How quickly can you launch?",
      answer:
        "We audit and structure first, then write and optimise in priority order, standing up maintenance from the start.",
    },
  ],
  cta: {
    title: "Let customers help themselves — well.",
    lead: "Let's build the knowledge layer behind your support — starting with a conversation, not a contract.",
  },
};

import type { ServiceContent } from "@/types/templates";
import { industryItem, serviceItem } from "./_shared";

export const backOffice: ServiceContent = {
  slug: "back-office",
  hero: {
    eyebrow: "Services — Back Office Support",
    title: "The invisible work that keeps everything running.",
    lead: "Invicta handles the data, processing, and administrative work behind your operation — accurate, timely, and off your team's plate so the front office can focus on customers.",
    imageLabel:
      "A back-office specialist processing records with precision, organised workspace, calm light — documentary.",
    image: "/assets/services/back-office/hero/hero.png",
    cta: { label: "Talk to an Expert", href: "/contact" },
    secondaryCta: { label: "See how we operate", href: "/method" },
  },
  overview: {
    intro: {
      eyebrow: "Why it matters",
      title: "Front-office excellence depends on back-office order",
      lead: "The admin no customer ever sees is what lets every customer moment go smoothly.",
    },
    paragraphs: [
      "Order processing, data entry, reconciliation, document handling — the back office is unglamorous and utterly essential. When it falls behind, the front office feels it immediately.",
      "We run that work with specialists trained on your processes, delivering accuracy and turnaround so nothing stalls and your own team isn't buried in administration.",
      "The result is a smoother operation, cleaner data, and front-office people freed to do the work that actually needs them.",
    ],
  },
  challenges: {
    intro: {
      eyebrow: "The problem",
      title: "Why the back office bottlenecks",
      lead: "It's essential, high-volume, and easy to under-resource.",
    },
    items: [
      {
        title: "Admin buries skilled people",
        body: "Expensive front-office staff lose hours to processing that doesn't need their expertise.",
        image: "/assets/services/back-office/challenges/01.png",
      },
      {
        title: "Backlogs stall the front office",
        body: "When back-office work falls behind, customer-facing processes stall with it.",
        image: "/assets/services/back-office/challenges/02.png",
      },
      {
        title: "Errors compound downstream",
        body: "A data mistake early on becomes a customer problem — or a compliance one — later.",
        image: "/assets/services/back-office/challenges/03.png",
      },
      {
        title: "Volume is relentless and spiky",
        body: "Steady work punctuated by peaks is hard to staff efficiently in-house.",
        image: "/assets/services/back-office/challenges/04.png",
      },
    ],
  },
  approach: {
    intro: {
      eyebrow: "How Invicta solves it",
      title: "Accurate, timely, off your plate",
      lead: "Trained specialists who treat process work as a discipline.",
    },
    points: [
      {
        title: "Trained on your processes",
        body: "Specialists learn your workflows and rules so work is done right, not just fast.",
      },
      {
        title: "Accuracy as the standard",
        body: "Checks and QA keep error rates low, because downstream problems are expensive.",
      },
      {
        title: "Reliable turnaround",
        body: "Work is completed to agreed SLAs so nothing bottlenecks the front office.",
      },
      {
        title: "Scales with volume",
        body: "Workforce planning absorbs peaks so backlogs don't build.",
      },
    ],
  },
  workflow: {
    intro: {
      eyebrow: "Workflow",
      title: "How work gets processed",
      lead: "From queue to completed, accurately.",
    },
    steps: [
      {
        marker: "01",
        title: "Receive & prioritise",
        body: "Work enters structured queues, prioritised by SLA and impact.",
      },
      {
        marker: "02",
        title: "Process to standard",
        body: "Specialists complete the task against your documented process and rules.",
      },
      {
        marker: "03",
        title: "Check accuracy",
        body: "Verification steps and QA catch errors before they move downstream.",
      },
      {
        marker: "04",
        title: "Escalate exceptions",
        body: "Anything outside the standard routes to the right owner with context.",
      },
      {
        marker: "05",
        title: "Report & improve",
        body: "Volume, turnaround, and error data drive process improvement over time.",
      },
    ],
  },
  technology: {
    intro: {
      eyebrow: "Technology",
      title: "We work in your systems",
      lead: "Our specialists operate in your operational and data tools.",
    },
    groups: [
      { name: "Operational systems", items: ["ERP", "Order management", "Custom internal tools"] },
      { name: "Data & documents", items: ["Spreadsheets", "Databases", "Document management"] },
      { name: "Workflow", items: ["Ticketing", "Process automation", "Queues"] },
      { name: "Knowledge base", items: ["Process playbooks", "SOPs", "Guru / Notion"] },
      { name: "Analytics & QA", items: ["Turnaround time", "Error rate", "Volume tracking"] },
    ],
  },
  benefits: {
    intro: {
      eyebrow: "Benefits",
      title: "What you get",
      lead: "A smoother operation and cleaner data.",
    },
    items: [
      { title: "Freed-up front office", body: "Skilled people focus on customers, not admin." },
      { title: "No bottlenecks", body: "Reliable turnaround keeps processes flowing." },
      { title: "Cleaner data", body: "Accuracy prevents downstream problems." },
      { title: "Elastic capacity", body: "Peaks absorbed without backlogs." },
    ],
  },
  statement: {
    statement: "The best back office is the one no customer ever has to think about.",
    context: "Accuracy behind the scenes",
  },
  industriesUsing: {
    intro: {
      eyebrow: "Industries",
      title: "Where this service delivers",
      lead: "Wherever process volume runs deep.",
    },
    items: [
      industryItem("fintech", "Case processing and reconciliation."),
      industryItem("ecommerce", "Order and returns processing."),
      industryItem("healthcare", "Records and administrative workflows."),
    ],
  },
  kpis: {
    intro: {
      eyebrow: "The standard we operate to",
      title: "Targets we hold ourselves to",
      lead: "Commitments behind every back-office engagement.",
    },
    metrics: [
      { value: 99, suffix: "%+", label: "Accuracy target" },
      { value: 24, suffix: "h", label: "Turnaround target" },
      { value: 95, suffix: "%+", label: "QA score standard" },
      { value: 24, suffix: "/7", label: "Coverage available" },
    ],
  },
  related: {
    intro: {
      eyebrow: "Related services",
      title: "Pairs well with",
      lead: "Capabilities teams deploy alongside back office.",
    },
    items: [
      serviceItem("kyc", "Verification that feeds processing."),
      serviceItem("payment-support", "Reconciliation and adjustments."),
      serviceItem("workforce-management", "Plan capacity across the operation."),
    ],
  },
  faqs: [
    {
      question: "What kinds of work do you handle?",
      answer:
        "Order processing, data entry, reconciliation, document handling, and other rules-based administrative work, trained on your specific processes.",
    },
    {
      question: "How do you keep accuracy high?",
      answer:
        "Verification steps and QA catch errors before they move downstream, because a small mistake early becomes an expensive problem later.",
    },
    {
      question: "Will you meet our turnaround SLAs?",
      answer:
        "Yes. Work is prioritised and staffed to agreed SLAs so nothing bottlenecks the front office.",
    },
    {
      question: "Do you work in our systems?",
      answer: "Yes. Specialists operate in your existing ERP, order-management, and data tools.",
    },
    {
      question: "How do you handle exceptions?",
      answer:
        "Anything outside the standard process routes to the right owner with full context, rather than being guessed at.",
    },
    {
      question: "Can you scale for peaks?",
      answer: "Yes. Workforce planning absorbs volume spikes so backlogs don't build.",
    },
    {
      question: "How is quality measured?",
      answer: "On accuracy, turnaround, and volume, with QA and transparent reporting.",
    },
    {
      question: "How quickly can you launch?",
      answer:
        "We document your processes, certify the team, and ramp in stages with accuracy watched closely.",
    },
  ],
  cta: {
    title: "Take the admin off your team's plate.",
    lead: "Let's run the back office behind your operation — starting with a conversation, not a contract.",
  },
};

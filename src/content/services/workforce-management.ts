import type { ServiceContent } from "@/types/templates";
import { industryItem, serviceItem } from "./_shared";

export const workforceManagement: ServiceContent = {
  slug: "workforce-management",
  hero: {
    eyebrow: "Services — Workforce Management",
    title: "The right people, in the right seats, at the right moment.",
    lead: "Invicta's workforce management forecasts demand, builds schedules, and steers coverage in real time — so SLAs hold through every peak without overstaffing the quiet hours.",
    imageLabel:
      "A WFM analyst reading live queue dashboards, sharp and calm, cool control-room light — documentary.",
    cta: { label: "Talk to an Expert", href: "/contact" },
    secondaryCta: { label: "See how we operate", href: "/method" },
  },
  overview: {
    intro: {
      eyebrow: "Why it matters",
      title: "Great support is a staffing problem in disguise",
      lead: "The best agents in the world can't hold an SLA if there aren't enough of them at 2am.",
    },
    paragraphs: [
      "Service levels live and die on coverage. Understaff a peak and queues explode; overstaff the quiet hours and cost balloons. The margin between them is forecasting and real-time management.",
      "We run workforce management as a discipline: forecasting demand from your patterns, building schedules that match it, and steering intraday so the operation flexes with reality.",
      "The result is SLAs that hold, costs that stay controlled, and an operation that absorbs spikes instead of buckling under them.",
    ],
  },
  challenges: {
    intro: {
      eyebrow: "The problem",
      title: "Why coverage goes wrong",
      lead: "Demand is variable; staffing is rigid.",
    },
    items: [
      {
        title: "Peaks blow up SLAs",
        body: "Under-forecast a surge and queues, wait times, and CSAT all collapse at once.",
      },
      {
        title: "Overstaffing burns budget",
        body: "Cover sized for the peak sits idle in the quiet hours, wasting money.",
      },
      {
        title: "Schedules drift from reality",
        body: "A plan built weeks ago rarely matches the day that actually shows up.",
      },
      {
        title: "Shrinkage is invisible until it hurts",
        body: "Absence, breaks, and admin quietly erode the coverage you thought you had.",
      },
    ],
  },
  approach: {
    intro: {
      eyebrow: "How Invicta solves it",
      title: "Forecast, schedule, and steer",
      lead: "Coverage matched to demand, managed in real time.",
    },
    points: [
      {
        title: "Demand forecasting",
        body: "We model your volume patterns — daily, seasonal, event-driven — to predict what's coming.",
      },
      {
        title: "Schedules that fit",
        body: "Rosters match forecast demand, balancing service levels against cost.",
      },
      {
        title: "Real-time steering",
        body: "Intraday management reacts to the day as it unfolds, reallocating cover as needed.",
      },
      {
        title: "Shrinkage managed",
        body: "Absence, breaks, and off-phone time are planned for, not discovered too late.",
      },
    ],
  },
  workflow: {
    intro: {
      eyebrow: "Workflow",
      title: "How coverage is managed",
      lead: "From forecast to real-time control.",
    },
    steps: [
      {
        marker: "01",
        title: "Forecast demand",
        body: "Historical and event data model expected volume across intervals.",
      },
      {
        marker: "02",
        title: "Build the schedule",
        body: "Rosters are built to meet forecast service levels at controlled cost.",
      },
      {
        marker: "03",
        title: "Steer intraday",
        body: "Real-time monitoring reallocates cover as the day diverges from plan.",
      },
      {
        marker: "04",
        title: "Manage exceptions",
        body: "Absences, spikes, and outages are handled with contingency cover.",
      },
      {
        marker: "05",
        title: "Review & refine",
        body: "Forecast accuracy and adherence are reviewed so the model keeps improving.",
      },
    ],
  },
  technology: {
    intro: {
      eyebrow: "Technology",
      title: "We work in your WFM stack",
      lead: "Our analysts operate in your workforce and contact-centre tools.",
    },
    groups: [
      { name: "WFM platforms", items: ["Forecasting & scheduling tools", "Adherence tracking"] },
      { name: "Contact centre", items: ["ACD / queue data", "Cloud contact-centre platforms"] },
      { name: "Reporting", items: ["Real-time dashboards", "Interval reporting"] },
      { name: "Knowledge base", items: ["Staffing models", "Contingency plans", "Guru / Notion"] },
      {
        name: "Analytics & QA",
        items: ["Forecast accuracy", "Service level & adherence", "Shrinkage"],
      },
    ],
  },
  benefits: {
    intro: {
      eyebrow: "Benefits",
      title: "What you get",
      lead: "Service levels held, costs controlled.",
    },
    items: [
      { title: "SLAs that hold", body: "Coverage matched to demand keeps wait times in check." },
      { title: "Controlled cost", body: "No overstaffing the quiet hours." },
      { title: "Absorbed peaks", body: "Surges met with planned contingency, not chaos." },
      { title: "Better forecasts over time", body: "Each cycle sharpens the model." },
    ],
  },
  statement: {
    statement: "Service level is a promise you keep with a schedule.",
    context: "Coverage, matched to demand",
  },
  industriesUsing: {
    intro: {
      eyebrow: "Industries",
      title: "Where this service delivers",
      lead: "Wherever demand swings hard.",
    },
    items: [
      industryItem("gaming", "Round-the-clock cover across every timezone.", "Flagship"),
      industryItem("ecommerce", "Peak-season staffing that holds."),
      industryItem("travel", "Coverage through disruption and seasonality."),
    ],
  },
  kpis: {
    intro: {
      eyebrow: "The standard we operate to",
      title: "Targets we hold ourselves to",
      lead: "Commitments behind every workforce-management engagement.",
    },
    metrics: [
      { value: 90, suffix: "%+", label: "Forecast accuracy target" },
      { value: 95, suffix: "%+", label: "Service-level target" },
      { value: 90, suffix: "%+", label: "Schedule adherence target" },
      { value: 24, suffix: "/7", label: "Real-time cover" },
    ],
  },
  related: {
    intro: {
      eyebrow: "Related services",
      title: "Pairs well with",
      lead: "Capabilities teams deploy alongside WFM.",
    },
    items: [
      serviceItem("quality-assurance", "Right people, right standard."),
      serviceItem("customer-support", "The operation WFM keeps staffed."),
      serviceItem("omnichannel-support", "Coverage planned across every channel."),
    ],
  },
  faqs: [
    {
      question: "Can you manage WFM for our own team?",
      answer:
        "Yes. We provide forecasting, scheduling, and real-time management as a service for internal operations, not only for teams we staff.",
    },
    {
      question: "How accurate are your forecasts?",
      answer:
        "We operate to a 90%+ forecast-accuracy target, modelling daily, seasonal, and event-driven demand from your data.",
    },
    {
      question: "Do you steer coverage in real time?",
      answer:
        "Yes. Intraday management reallocates cover as the day diverges from plan, rather than leaving a static roster to fail.",
    },
    {
      question: "How do you handle peaks?",
      answer:
        "Peaks are forecast where possible and met with planned contingency cover, so surges don't collapse your SLAs.",
    },
    {
      question: "Do you work in our WFM tools?",
      answer: "Yes. Analysts operate in your existing workforce and contact-centre platforms.",
    },
    {
      question: "Do you account for shrinkage?",
      answer:
        "Yes. Absence, breaks, and off-phone time are planned into the model rather than discovered too late.",
    },
    {
      question: "How is performance measured?",
      answer:
        "On forecast accuracy, service level, and schedule adherence, reported transparently.",
    },
    {
      question: "How quickly can you launch?",
      answer:
        "We ingest your historical data, build the forecast and staffing model, and stand up scheduling and real-time management in stages.",
    },
  ],
  cta: {
    title: "Hold your service levels — without holding excess cost.",
    lead: "Let's build the workforce engine behind your operation — starting with a conversation, not a contract.",
  },
};

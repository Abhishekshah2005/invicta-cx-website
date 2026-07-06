import type { ServiceContent } from "@/types/templates";
import { industryItem, serviceItem } from "./_shared";

export const appointmentSetting: ServiceContent = {
  slug: "appointment-setting",
  hero: {
    eyebrow: "Services — Appointment Setting",
    title: "Booked meetings, not busywork.",
    lead: "Invicta turns interest into calendar appointments — qualifying, scheduling, and confirming meetings that actually happen, so your team walks into rooms worth being in.",
    imageLabel:
      "A coordinator booking a meeting on a calendar, confident and organised, bright light — editorial.",
    cta: { label: "Talk to an Expert", href: "/contact" },
    secondaryCta: { label: "See how we operate", href: "/method" },
  },
  overview: {
    intro: {
      eyebrow: "Why it matters",
      title: "A booked meeting is worth more than a hundred maybes",
      lead: "The gap between interest and a confirmed appointment is where most opportunities die.",
    },
    paragraphs: [
      "Interest is fragile. Between a prospect saying 'sure' and actually showing up sit a dozen chances to lose them — to silence, to friction, to a calendar that never quite lines up.",
      "We own that gap: qualifying interest, coordinating calendars, and confirming appointments so your team's diary fills with meetings that happen, not no-shows.",
      "The result is more productive selling time, fewer wasted slots, and a reliable flow of qualified meetings.",
    ],
  },
  challenges: {
    intro: {
      eyebrow: "The problem",
      title: "Why meetings don't happen",
      lead: "Scheduling friction quietly kills opportunities.",
    },
    items: [
      {
        title: "Interest cools between yes and booked",
        body: "Every hour of delay after 'sure, let's talk' lowers the odds it ever happens.",
      },
      {
        title: "Coordination eats time",
        body: "Back-and-forth across calendars and timezones is a job in itself.",
      },
      {
        title: "No-shows waste prime slots",
        body: "Unconfirmed meetings that don't happen burn your team's most valuable time.",
      },
      {
        title: "Unqualified meetings drain the team",
        body: "Booking anyone who'll say yes fills the calendar with the wrong conversations.",
      },
    ],
  },
  approach: {
    intro: {
      eyebrow: "How Invicta solves it",
      title: "Meetings that qualify and show up",
      lead: "Owned end to end, from interest to confirmed.",
    },
    points: [
      {
        title: "Qualify before booking",
        body: "We confirm fit and intent so your team's calendar holds the right conversations.",
      },
      {
        title: "Coordinate the calendar",
        body: "Scheduling across diaries and timezones is handled for you.",
      },
      {
        title: "Confirm and remind",
        body: "Proactive confirmation and reminders drive down no-shows.",
      },
      {
        title: "Fast follow on interest",
        body: "We book while interest is hot, not days later when it's cooled.",
      },
    ],
  },
  workflow: {
    intro: {
      eyebrow: "Workflow",
      title: "How a meeting gets set",
      lead: "From interest to confirmed slot.",
    },
    steps: [
      {
        marker: "01",
        title: "Qualify",
        body: "We confirm the prospect is a fit and genuinely interested before booking.",
      },
      {
        marker: "02",
        title: "Coordinate",
        body: "Calendars and timezones are reconciled to find a slot that works.",
      },
      {
        marker: "03",
        title: "Book",
        body: "The meeting is set in your team's calendar with all the context attached.",
      },
      {
        marker: "04",
        title: "Confirm & remind",
        body: "Confirmation and reminders keep the meeting top of mind and reduce no-shows.",
      },
      {
        marker: "05",
        title: "Rebook & recover",
        body: "Cancellations and no-shows are chased and rescheduled, not lost.",
      },
    ],
  },
  technology: {
    intro: {
      eyebrow: "Technology",
      title: "We work in your scheduling stack",
      lead: "Our coordinators operate in your calendar and CRM tools.",
    },
    groups: [
      {
        name: "Scheduling",
        items: ["Calendly-class booking", "Calendar integrations", "Timezone routing"],
      },
      { name: "CRM", items: ["Salesforce", "HubSpot", "Pipedrive"] },
      { name: "Outreach", items: ["Email", "Phone", "SMS reminders"] },
      { name: "Knowledge base", items: ["Qualification criteria", "Scripts", "Guru / Notion"] },
      { name: "Analytics & QA", items: ["Show rate", "Meeting quality", "Booking activity"] },
    ],
  },
  benefits: {
    intro: {
      eyebrow: "Benefits",
      title: "What you get",
      lead: "A calendar full of meetings worth having.",
    },
    items: [
      {
        title: "More qualified meetings",
        body: "Your team's diary fills with the right conversations.",
      },
      { title: "Higher show rates", body: "Confirmation and reminders cut no-shows." },
      {
        title: "Reclaimed selling time",
        body: "Coordination handled for you, not by your closers.",
      },
      {
        title: "Fewer wasted slots",
        body: "Recovered cancellations keep the calendar productive.",
      },
    ],
  },
  statement: {
    statement: "The opportunity isn't the 'yes' — it's the meeting that actually happens.",
    context: "Interest, turned into calendar",
  },
  industriesUsing: {
    intro: {
      eyebrow: "Industries",
      title: "Where this service delivers",
      lead: "Wherever meetings drive the business.",
    },
    items: [
      industryItem("healthcare", "Appointment booking and reminders for patients."),
      industryItem("recruitment", "Interview coordination across panels."),
      industryItem("professional-services", "Consultation booking for busy experts."),
    ],
  },
  kpis: {
    intro: {
      eyebrow: "The standard we operate to",
      title: "Targets we hold ourselves to",
      lead: "Commitments behind every appointment-setting engagement.",
    },
    metrics: [
      { value: 80, suffix: "%+", label: "Show-rate target" },
      { value: 95, suffix: "%+", label: "QA score standard" },
      { value: 24, suffix: "h", label: "Speed-to-book target" },
      { value: 24, suffix: "/7", label: "Coverage available" },
    ],
  },
  related: {
    intro: {
      eyebrow: "Related services",
      title: "Pairs well with",
      lead: "Capabilities teams deploy alongside appointment setting.",
    },
    items: [
      serviceItem("lead-generation", "Feed qualified leads into the calendar."),
      serviceItem("virtual-assistance", "Broader coordination and admin support."),
      serviceItem("customer-support", "Support prospects who become customers."),
    ],
  },
  faqs: [
    {
      question: "Do you qualify before booking?",
      answer:
        "Yes. We confirm fit and genuine intent first, so your calendar holds the right conversations rather than anyone who'll say yes.",
    },
    {
      question: "Can you reduce our no-show rate?",
      answer:
        "Yes. Proactive confirmation and reminders — and rebooking of cancellations — measurably lift show rates.",
    },
    {
      question: "Do you handle timezone coordination?",
      answer:
        "Yes. Reconciling diaries and timezones is a core part of the service, handled so your team doesn't have to.",
    },
    {
      question: "Do you work in our calendar and CRM?",
      answer:
        "Yes. Coordinators operate in your existing scheduling and CRM tools so bookings stay visible.",
    },
    {
      question: "What about cancellations and no-shows?",
      answer:
        "They're chased and rescheduled rather than written off, keeping your calendar productive.",
    },
    {
      question: "Which channels do you use to book?",
      answer:
        "Email, phone, and SMS as fits your audience, with reminders to keep meetings on track.",
    },
    {
      question: "How is quality measured?",
      answer: "On show rate, meeting quality, and speed-to-book, reported transparently.",
    },
    {
      question: "How quickly can you launch?",
      answer:
        "We agree qualification criteria and scripts, connect your calendars, certify the team, and ramp in stages.",
    },
  ],
  cta: {
    title: "Fill your calendar with meetings that matter.",
    lead: "Let's turn interest into booked, qualified meetings — starting with a conversation, not a contract.",
  },
};

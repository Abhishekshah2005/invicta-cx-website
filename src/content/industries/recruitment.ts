import type { IndustryContent } from "@/types/templates";
import { serviceItem, industryItem } from "./_shared";

/**
 * Recruitment industry page content. Register: candidate experience as employer
 * brand — the human coordination behind hiring at scale.
 */
export const recruitment: IndustryContent = {
  slug: "recruitment",
  hero: {
    eyebrow: "Industries — Recruitment",
    title: "Every candidate is a customer — and a review of your brand.",
    lead: "Invicta runs the candidate-facing side of hiring: fast responses, smooth coordination, and human follow-through that protects your employer brand at every stage.",
    imageLabel:
      "A recruitment coordinator mid-conversation, hopeful and warm, modern office in soft light — human, optimistic, editorial.",
    cta: { label: "Talk to an Expert", href: "/contact" },
    secondaryCta: { label: "See how we operate", href: "/method" },
  },
  overview: {
    intro: {
      eyebrow: "Overview",
      title: "Candidate experience is the product you're really selling",
      lead: "Long before an offer, candidates judge you on how quickly and kindly you communicate.",
    },
    paragraphs: [
      "Hiring is a two-way sale. The candidates you most want have options, and silence, delays, or clumsy coordination lose them — and seed the reviews that make the next hire harder.",
      "We handle the high-volume, high-touch communication that recruiters rarely have time for: acknowledging applications, coordinating interviews, answering questions, and keeping people warm from first contact to first day.",
      "The result is a faster, more human pipeline: better response rates, fewer drop-offs, protected employer brand, and recruiters freed to do the judgement work only they can do.",
    ],
  },
  challenges: {
    intro: {
      eyebrow: "The problem",
      title: "What recruitment teams struggle with",
      lead: "The best candidates move fast, and the experience is the differentiator.",
    },
    items: [
      {
        title: "Silence loses great candidates",
        body: "A day without a reply is a day a competitor gets ahead. Ghosted candidates don't just leave — they warn others.",
      },
      {
        title: "Coordination is a full-time job",
        body: "Scheduling across panels, timezones, and reschedules devours recruiter hours that should go into evaluating people.",
      },
      {
        title: "Volume spikes are brutal",
        body: "A campaign, a launch, or a seasonal ramp can multiply applications overnight, and quality of experience is the first thing to crack.",
      },
      {
        title: "Employer brand is fragile and public",
        body: "One poor candidate experience becomes a public review that quietly raises the cost of every future hire.",
      },
      {
        title: "Onboarding starts before day one",
        body: "The gap between offer and start date is where new hires wobble. Warm, proactive contact keeps them committed.",
      },
    ],
  },
  whyInvicta: {
    intro: {
      eyebrow: "How Invicta solves it",
      title: "A candidate-experience layer that protects your brand",
      lead: "The responsiveness and warmth of a boutique agency, at the scale of a campaign.",
    },
    points: [
      {
        title: "Nobody goes unanswered",
        body: "Fast, human acknowledgement and updates at every stage keep candidates engaged and respected — even the ones you don't hire.",
      },
      {
        title: "Coordination handled end to end",
        body: "We own scheduling, reminders, and reschedules across panels and timezones so recruiters get their hours back.",
      },
      {
        title: "Your voice, consistently",
        body: "Agents are trained on your tone and values, so every message sounds like your company, not a call centre.",
      },
      {
        title: "Warm from offer to start",
        body: "Proactive contact through the pre-boarding gap reduces reneges and gets new hires excited to arrive.",
      },
      {
        title: "Elastic capacity for campaigns",
        body: "Workforce planning absorbs application spikes without letting experience or speed slip.",
      },
    ],
  },
  servicesUsed: {
    intro: {
      eyebrow: "Relevant services",
      title: "The capabilities recruitment teams deploy with us",
      lead: "Candidate-facing support and coordination, staffed by trained specialists.",
    },
    items: [
      serviceItem(
        "customer-support",
        "Candidate care across channels — questions, updates, and follow-through.",
        "Candidate care",
      ),
      serviceItem(
        "appointment-setting",
        "Interview scheduling and reminders across panels and timezones.",
        "Coordination",
      ),
      serviceItem(
        "email-support",
        "On-brand written communication from application to onboarding.",
        "Written",
      ),
      serviceItem("live-chat", "Real-time answers for candidates mid-application.", "Real-time"),
      serviceItem(
        "technical-support",
        "Help-desk support for portals, assessments, and access issues.",
        "Help desk",
      ),
      serviceItem(
        "quality-assurance",
        "Audits that keep tone and responsiveness consistently high.",
        "Excellence",
      ),
    ],
  },
  technology: {
    intro: {
      eyebrow: "Technology",
      title: "We work inside your hiring stack",
      lead: "Our specialists operate in your ATS and communication tools — no migration, no disruption.",
    },
    groups: [
      { name: "ATS & CRM", items: ["Greenhouse", "Lever", "Workday", "Custom ATS"] },
      {
        name: "Scheduling & coordination",
        items: ["Calendly-class booking", "Panel scheduling", "Automated reminders"],
      },
      { name: "Ticketing & help desk", items: ["Zendesk", "Freshdesk", "Intercom"] },
      {
        name: "Knowledge base",
        items: ["Candidate FAQs", "Process playbooks", "Tone & brand guides"],
      },
      { name: "Channels", items: ["Email", "Live chat", "SMS", "Voice"] },
      {
        name: "Analytics & QA",
        items: ["Response-time tracking", "Drop-off reporting", "Interaction scoring"],
      },
    ],
  },
  process: {
    intro: {
      eyebrow: "Our operating model",
      title: "How the operation actually runs",
      lead: "The machinery that keeps every candidate touchpoint fast and human.",
    },
    steps: [
      {
        marker: "01",
        title: "Training & certification",
        body: "Agents learn your roles, process, tone, and values, and certify on candidate scenarios before handling live communication.",
      },
      {
        marker: "02",
        title: "Quality assurance",
        body: "QA scores real candidate interactions weekly on responsiveness, accuracy, and warmth, feeding continuous coaching.",
      },
      {
        marker: "03",
        title: "Escalation management",
        body: "Sensitive questions, offers, and exceptions route straight to your recruiters with full context.",
      },
      {
        marker: "04",
        title: "Workforce management",
        body: "Scheduling flexes to campaigns, launches, and seasonal ramps so response times hold through every spike.",
      },
      {
        marker: "05",
        title: "Leadership & coaching",
        body: "Team leads own a tight span of agents and coach toward the candidate-experience metrics that protect your brand.",
      },
      {
        marker: "06",
        title: "SLAs & reporting",
        body: "Response times, coordination speed, and candidate satisfaction are contracted and reported openly.",
      },
      {
        marker: "07",
        title: "24/7 coverage",
        body: "Global talent applies around the clock — we make sure someone's always there to reply.",
      },
    ],
  },
  kpis: {
    intro: {
      eyebrow: "The standard we operate to",
      title: "Targets we hold ourselves to",
      lead: "The operating standard behind every recruitment engagement.",
    },
    metrics: [
      { value: 60, prefix: "<", suffix: "s", label: "First response target" },
      { value: 24, suffix: "/7", label: "Candidate coverage" },
      { value: 95, suffix: "%+", label: "QA score standard" },
      { value: 40, suffix: "%", label: "Recruiter time returned" },
    ],
  },
  caseStudy: {
    eyebrow: "Representative engagement",
    client: "A high-growth staffing platform",
    title: "Zero ghosted candidates through a hiring surge.",
    summary:
      "A composite of the recruitment operations we run: a dedicated candidate-experience pod absorbed a campaign-driven application spike, kept every applicant informed, and handed recruiters back the hours they'd been losing to coordination — while candidate ratings climbed.",
    href: "/contact",
    linkLabel: "Discuss a similar engagement",
    metrics: [
      { value: 40, suffix: "%", label: "Recruiter time returned" },
      { value: 4.7, suffix: "★", decimals: 1, label: "Candidate rating" },
      { value: 60, prefix: "<", suffix: "s", label: "First response" },
    ],
  },
  faqs: [
    {
      question: "Do you handle interview scheduling?",
      answer:
        "Yes. Coordination across panels, timezones, and reschedules is a core capability — one of the biggest time-sinks we take off your recruiters.",
    },
    {
      question: "Will candidates know they're not talking to our internal team?",
      answer:
        "We train on your tone, values, and process so every message sounds like your company. To candidates, it's a seamless extension of your brand.",
    },
    {
      question: "Can you handle sudden application spikes?",
      answer:
        "Yes. Workforce planning is built for campaigns, launches, and seasonal ramps, so responsiveness and warmth hold even when volume multiplies.",
    },
    {
      question: "How do you protect our employer brand?",
      answer:
        "By making sure no candidate goes unanswered, coordination is smooth, and tone is consistent — the exact things that turn into public reviews, good or bad.",
    },
    {
      question: "Do you support pre-boarding?",
      answer:
        "Yes. We keep new hires warm through the offer-to-start gap with proactive contact, reducing reneges and building day-one commitment.",
    },
    {
      question: "Which systems do you work in?",
      answer:
        "We operate inside your existing ATS, scheduling, and communication tools rather than forcing a migration, integrating cleanly with the rest of your stack.",
    },
    {
      question: "How is quality measured?",
      answer:
        "A dedicated QA team scores real candidate interactions weekly on responsiveness, accuracy, and warmth, feeding coaching and transparent reporting.",
    },
    {
      question: "Can you support multiple languages?",
      answer:
        "Yes. We staff coverage across the languages and timezones your candidate pool spans, so global talent always gets a timely reply.",
    },
    {
      question: "What does onboarding an engagement look like?",
      answer:
        "We map your roles, process, and tone, build the playbooks and FAQs, train and certify the pod, then ramp in stages with your team watching the metrics.",
    },
    {
      question: "Do recruiters stay in control of decisions?",
      answer:
        "Always. We handle communication and coordination; evaluation, offers, and exceptions route straight back to your recruiters with full context.",
    },
  ],
  related: {
    intro: {
      eyebrow: "Related industries",
      title: "Where the same standard applies",
      lead: "People-first operations adjacent to recruitment.",
    },
    items: [
      industryItem(
        "professional-services",
        "White-glove client support where relationships are everything.",
      ),
      industryItem("saas", "Scale support and retention for software teams."),
      industryItem("healthcare", "Compassionate, compliant support for patients."),
    ],
  },
  cta: {
    title: "Make every candidate a fan of your brand.",
    lead: "Let's build the candidate-experience layer behind your hiring — starting with a conversation, not a contract.",
  },
};

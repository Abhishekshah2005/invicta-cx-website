import type { IndustryContent } from "@/types/templates";
import { serviceItem, industryItem } from "./_shared";

/**
 * Professional Services industry page content. Register: discretion and
 * white-glove care — client relationships where reputation is the asset.
 */
export const professionalServices: IndustryContent = {
  slug: "professional-services",
  hero: {
    eyebrow: "Industries — Professional Services",
    title: "Your reputation is the product. We help you protect every touchpoint.",
    lead: "Invicta provides discreet, white-glove client support for professional and B2B services — the polished, reliable first response that reflects the standard your firm is known for.",
    imageLabel:
      "A client-services professional in a refined office, composed and attentive, warm directional light — premium, understated, editorial.",
    image: "/assets/industries/professional-services/hero/hero.png",
    cta: { label: "Talk to an Expert", href: "/contact" },
    secondaryCta: { label: "See how we operate", href: "/method" },
  },
  overview: {
    intro: {
      eyebrow: "Overview",
      title: "In professional services, how you respond is the work",
      lead: "Clients judge a firm on responsiveness and polish long before they judge the deliverable.",
    },
    paragraphs: [
      "Consultancies, agencies, legal and financial firms, and B2B specialists win on trust and relationships. A slow reply, a dropped request, or an interaction that feels off-brand quietly undermines the premium you've earned.",
      "We provide a discreet client-support layer that handles inbound requests, coordination, and follow-up with the polish and confidentiality your clients expect — freeing your billable experts to focus on the work only they can do.",
      "The result is a firm that feels effortlessly responsive: faster answers, smoother coordination, protected relationships, and senior time returned to high-value work.",
    ],
  },
  challenges: {
    intro: {
      eyebrow: "The problem",
      title: "What professional services firms struggle with",
      lead: "The bar is high, the relationships are personal, and the experts are expensive.",
    },
    items: [
      {
        title: "Billable experts are stuck on admin",
        body: "Coordination, scheduling, and routine client questions pull your most expensive people away from the work clients actually pay for.",
        image: "/assets/industries/professional-services/challenges/01.png",
      },
      {
        title: "Responsiveness sets the perception",
        body: "In relationship businesses, a slow or clumsy reply reads as a lack of care, whatever the quality of the eventual work.",
        image: "/assets/industries/professional-services/challenges/02.png",
      },
      {
        title: "Discretion is non-negotiable",
        body: "Client matters are sensitive and confidential. Support has to be handled with the same discretion as the engagement itself.",
        image: "/assets/industries/professional-services/challenges/03.png",
      },
      {
        title: "Inconsistency erodes the premium",
        body: "When response quality varies by who happens to pick up, the polished, reliable brand you sell starts to wobble.",
        image: "/assets/industries/professional-services/challenges/04.png",
      },
      {
        title: "Growth strains the personal touch",
        body: "As a firm scales, the boutique attentiveness that won early clients gets harder to sustain across every relationship.",
        image: "/assets/industries/professional-services/challenges/05.png",
      },
    ],
  },
  whyInvicta: {
    intro: {
      eyebrow: "How Invicta solves it",
      title: "White-glove client support, run with total discretion",
      lead: "The attentiveness of a dedicated PA, applied consistently across every client.",
    },
    points: [
      {
        title: "Polished, on-brand first response",
        body: "Every inbound request meets a professional, well-toned reply that reflects the standard your firm is known for.",
      },
      {
        title: "Experts freed for billable work",
        body: "Coordination, scheduling, and routine questions move to us, returning senior time to the high-value work clients pay for.",
      },
      {
        title: "Discretion as a default",
        body: "Confidential handling, least-privilege access, and trained professionalism protect sensitive client matters.",
      },
      {
        title: "Consistency across every client",
        body: "Trained specialists and QA mean every relationship gets the same attentive, reliable experience — not a lottery.",
      },
      {
        title: "The personal touch, at scale",
        body: "As your firm grows, we help preserve the boutique responsiveness that built your reputation in the first place.",
      },
    ],
  },
  servicesUsed: {
    intro: {
      eyebrow: "Relevant services",
      title: "The capabilities professional firms deploy with us",
      lead: "Discreet, client-facing support and coordination, staffed by specialists.",
    },
    items: [
      serviceItem(
        "customer-support",
        "Polished client support across channels, on brand and on time.",
        "Core",
      ),
      serviceItem("email-support", "Considered, professional written correspondence.", "Written"),
      serviceItem("phone-support", "A refined human voice for important client calls.", "Voice"),
      serviceItem(
        "appointment-setting",
        "Meeting and consultation coordination across busy calendars.",
        "Coordination",
      ),
      serviceItem("live-chat", "Real-time answers for client and prospect enquiries.", "Real-time"),
      serviceItem(
        "quality-assurance",
        "Audits that keep polish and discretion consistently high.",
        "Excellence",
      ),
    ],
  },
  technology: {
    intro: {
      eyebrow: "Technology",
      title: "We work within your systems and standards",
      lead: "Our specialists operate inside your CRM and coordination tools, with confidentiality controls aligned to your obligations.",
    },
    groups: [
      {
        name: "CRM & client management",
        items: ["Salesforce", "HubSpot", "Practice & matter systems"],
      },
      {
        name: "Scheduling & coordination",
        items: ["Calendar coordination", "Meeting booking", "Reminders"],
      },
      { name: "Ticketing & workflow", items: ["Zendesk", "Freshdesk", "Intercom"] },
      {
        name: "Knowledge base",
        items: ["Client playbooks", "Tone & etiquette guides", "Guru / Notion"],
      },
      { name: "Channels", items: ["Email", "Phone", "Live chat", "Client portals"] },
      {
        name: "Analytics & QA",
        items: ["Response-time tracking", "Client satisfaction", "Interaction scoring"],
      },
    ],
  },
  process: {
    intro: {
      eyebrow: "Our operating model",
      title: "How the operation actually runs",
      lead: "The discipline behind discreet, consistently polished client care.",
    },
    steps: [
      {
        marker: "01",
        title: "Training & certification",
        body: "Agents learn your firm's tone, etiquette, and confidentiality standards, and certify on real client scenarios before going live.",
      },
      {
        marker: "02",
        title: "Quality assurance",
        body: "QA scores real interactions weekly on polish, accuracy, and discretion — the details that define a premium firm.",
      },
      {
        marker: "03",
        title: "Escalation management",
        body: "Sensitive matters and important clients route straight to the right person, with full context and complete confidentiality.",
      },
      {
        marker: "04",
        title: "Workforce management",
        body: "Scheduling ensures reliable cover across your business hours and busy periods so no client request waits.",
      },
      {
        marker: "05",
        title: "Leadership & coaching",
        body: "Team leads own a tight span of agents and coach toward the attentiveness and discretion your reputation depends on.",
      },
      {
        marker: "06",
        title: "SLAs & reporting",
        body: "Response times, client satisfaction, and quality are contracted and reported transparently.",
      },
      {
        marker: "07",
        title: "24/7 coverage",
        body: "For firms with international clients, follow-the-sun cover keeps the service responsive across every timezone.",
      },
    ],
  },
  kpis: {
    intro: {
      eyebrow: "The standard we operate to",
      title: "Targets we hold ourselves to",
      lead: "The operating standard behind every professional-services engagement.",
    },
    metrics: [
      { value: 60, prefix: "<", suffix: "s", label: "First response target" },
      { value: 95, suffix: "%+", label: "QA score standard" },
      { value: 24, suffix: "/7", label: "Coverage available" },
      { value: 40, suffix: "%", label: "Senior time returned" },
    ],
  },
  caseStudy: {
    eyebrow: "Representative engagement",
    client: "A boutique advisory firm",
    title: "Preserving the personal touch through rapid growth.",
    summary:
      "A composite of the professional-services operations we run: a discreet client-support pod took coordination and routine enquiries off senior advisors, kept every client relationship attentively served, and protected the polished responsiveness the firm was known for as it scaled.",
    href: "/contact",
    linkLabel: "Discuss a similar engagement",
    metrics: [
      { value: 40, suffix: "%", label: "Senior time returned" },
      { value: 4.8, suffix: "★", decimals: 1, label: "Client satisfaction" },
      { value: 60, prefix: "<", suffix: "s", label: "First response" },
    ],
  },
  faqs: [
    {
      question: "Can your team match the polish our clients expect?",
      answer:
        "Yes. Agents are trained on your firm's tone, etiquette, and standards, and QA enforces them, so every interaction reflects the premium your firm is known for.",
    },
    {
      question: "How do you handle confidentiality?",
      answer:
        "Discretion is a default: least-privilege access, controlled environments, and trained professionalism protect sensitive client matters to the standard your engagements demand.",
    },
    {
      question: "Will this free up our billable experts?",
      answer:
        "That's the point. Coordination, scheduling, and routine client questions move to us, returning senior time to the high-value work clients actually pay for.",
    },
    {
      question: "Can you keep the personal touch as we grow?",
      answer:
        "Yes. Trained specialists and consistent QA help preserve the boutique attentiveness that built your reputation, even as client numbers climb.",
    },
    {
      question: "Which systems do you work in?",
      answer:
        "We operate inside your existing CRM, matter, and coordination systems rather than forcing a migration, with confidentiality controls aligned to your obligations.",
    },
    {
      question: "Do you handle scheduling and coordination?",
      answer:
        "Yes. Meeting and consultation coordination across busy calendars is a core capability — one of the biggest time drains we take off your team.",
    },
    {
      question: "How is quality measured?",
      answer:
        "A dedicated QA team scores real interactions weekly on polish, accuracy, and discretion, feeding coaching and transparent reporting.",
    },
    {
      question: "Can you support international clients?",
      answer:
        "Yes. For firms with global clients, we staff follow-the-sun cover across timezones and relevant languages so the service stays responsive everywhere.",
    },
    {
      question: "What does onboarding an engagement look like?",
      answer:
        "We learn your tone, standards, and confidentiality requirements, build the playbooks, train and certify the pod, then ramp in stages with your team watching the metrics.",
    },
    {
      question: "Do sensitive matters stay with our team?",
      answer:
        "Always. We handle first response and coordination; sensitive matters and key clients route straight to the right person with full context and confidentiality.",
    },
  ],
  related: {
    intro: {
      eyebrow: "Related industries",
      title: "Where the same standard applies",
      lead: "Discretion-first, relationship-driven operations adjacent to professional services.",
    },
    items: [
      industryItem("fintech", "Regulated support where trust and discretion both matter."),
      industryItem("recruitment", "Candidate care that protects your brand."),
      industryItem("healthcare", "Compassionate, compliant support for sensitive moments."),
    ],
  },
  cta: {
    title: "Make responsiveness part of your reputation.",
    lead: "Let's build the discreet client-support layer behind your firm — starting with a conversation, not a contract.",
  },
};

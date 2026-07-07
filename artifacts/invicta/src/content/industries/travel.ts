import type { IndustryContent } from "@/types/templates";
import { serviceItem, industryItem } from "./_shared";

/**
 * Travel & Hospitality industry page content. Register: composure under
 * disruption — 24/7, multilingual, human help when plans fall apart.
 */
export const travel: IndustryContent = {
  slug: "travel",
  hero: {
    eyebrow: "Industries — Travel & Hospitality",
    title: "When plans fall apart, a calm human is the whole experience.",
    lead: "Invicta runs the around-the-clock, multilingual support behind travel and hospitality brands — turning disruption, delays, and last-minute changes into loyalty.",
    imageLabel:
      "A travel-support specialist calm on a headset at night, world map glowing softly behind — cinematic, reassuring, human.",
    image: "/assets/industries/travel/hero/hero.png",
    cta: { label: "Talk to an Expert", href: "/contact" },
    secondaryCta: { label: "See how we operate", href: "/method" },
  },
  overview: {
    intro: {
      eyebrow: "Overview",
      title: "The category that never sleeps, judged on its worst moment",
      lead: "Travellers forgive a lot — until something goes wrong and no one picks up.",
    },
    paragraphs: [
      "Travel is emotional and time-critical. A cancelled flight, a booking error, or a problem at check-in doesn't wait for business hours, and the customer stranded at 2am remembers exactly how you responded.",
      "We staff those moments with multilingual specialists trained to stay calm, act fast, and take ownership across every timezone. They rebook, resolve, and reassure — turning the worst part of a trip into the reason a customer comes back.",
      "The result is measurable loyalty: higher satisfaction through disruption, protected reviews, and support that scales for peak season without cracking.",
    ],
  },
  challenges: {
    intro: {
      eyebrow: "The problem",
      title: "What travel and hospitality brands struggle with",
      lead: "Demand is global, emotional, and impossible to schedule.",
    },
    items: [
      {
        title: "Problems arrive at the worst possible time",
        body: "Disruption clusters at night, on weekends, and during holidays — exactly when in-house teams are thinnest.",
      },
      {
        title: "Travellers are stressed and need ownership",
        body: "A stranded customer doesn't want a ticket number. They want someone to take charge and make it right, now.",
      },
      {
        title: "Language and timezone gaps break trust",
        body: "Global customers expect help in their language, on their clock. Gaps feel like being abandoned abroad.",
      },
      {
        title: "Peak season overwhelms everything",
        body: "Holidays and events multiply volume overnight, and understaffing during a peak is when loyalty is lost fastest.",
      },
      {
        title: "One bad trip becomes a public review",
        body: "In a category driven by ratings, a single mishandled disruption can outweigh a hundred smooth journeys.",
      },
    ],
  },
  whyInvicta: {
    intro: {
      eyebrow: "How Invicta solves it",
      title: "Composure, ownership, and cover in every timezone",
      lead: "Multilingual specialists who make disruption feel handled, not survived.",
    },
    points: [
      {
        title: "Genuinely 24/7, genuinely global",
        body: "Follow-the-sun, multilingual staffing means a real person answers whenever and wherever a traveller needs one.",
      },
      {
        title: "Trained to take ownership",
        body: "Agents are empowered and equipped to rebook, resolve, and reassure — not just log the problem and pass it on.",
      },
      {
        title: "Calm under real pressure",
        body: "We hire and train for composure, so stressed travellers meet steadiness instead of a script.",
      },
      {
        title: "Peak season absorbed",
        body: "Workforce planning scales cover for holidays and events so service holds when it matters most.",
      },
      {
        title: "Loyalty from the low points",
        body: "Handled well, a disruption becomes the story a customer tells — and the reason they book again.",
      },
    ],
  },
  servicesUsed: {
    intro: {
      eyebrow: "Relevant services",
      title: "The capabilities travel teams deploy with us",
      lead: "Traveller-facing support across every channel and language.",
    },
    items: [
      serviceItem(
        "customer-support",
        "Omnichannel traveller support, calm and multilingual.",
        "Core",
      ),
      serviceItem("phone-support", "A human voice for urgent, high-stress moments.", "Voice"),
      serviceItem("live-chat", "Real-time help mid-journey and mid-booking.", "Real-time"),
      serviceItem(
        "email-support",
        "Thorough written resolutions for changes and claims.",
        "Written",
      ),
      serviceItem(
        "appointment-setting",
        "Booking, rebooking, and reservation coordination.",
        "Bookings",
      ),
      serviceItem(
        "quality-assurance",
        "Audits that keep composure and accuracy consistently high.",
        "Excellence",
      ),
    ],
  },
  technology: {
    intro: {
      eyebrow: "Technology",
      title: "We operate inside your booking stack",
      lead: "Our specialists work in your reservation and support systems, integrating cleanly across channels and languages.",
    },
    groups: [
      {
        name: "CRM & booking",
        items: ["Salesforce", "Booking & reservation systems", "Custom platforms"],
      },
      { name: "Ticketing & workflow", items: ["Zendesk", "Freshdesk", "Intercom"] },
      {
        name: "Knowledge base",
        items: ["Disruption playbooks", "Policy & fare rules", "Guru / Notion"],
      },
      {
        name: "Live chat & channels",
        items: ["Live chat", "WhatsApp & messaging", "Email & voice"],
      },
      {
        name: "Localization",
        items: ["Multilingual staffing", "Regional playbooks", "Timezone routing"],
      },
      {
        name: "Analytics & QA",
        items: ["CSAT & sentiment", "Disruption-handling metrics", "Interaction scoring"],
      },
    ],
  },
  process: {
    intro: {
      eyebrow: "Our operating model",
      title: "How the operation actually runs",
      lead: "The machinery behind calm, capable support that never closes.",
    },
    steps: [
      {
        marker: "01",
        title: "Training & certification",
        body: "Agents learn your policies, systems, and disruption playbooks, and certify on real scenarios — including the stressful ones — before going live.",
      },
      {
        marker: "02",
        title: "Quality assurance",
        body: "QA scores real interactions weekly on composure, ownership, and accuracy, feeding continuous coaching.",
      },
      {
        marker: "03",
        title: "Escalation management",
        body: "Urgent and exceptional cases route instantly to the right specialist, so a stranded traveller is never stuck in a general queue.",
      },
      {
        marker: "04",
        title: "Workforce management",
        body: "Forecasting scales cover for holidays, events, and weather disruption so response times hold through every peak.",
      },
      {
        marker: "05",
        title: "Leadership & coaching",
        body: "Team leads own a tight span of agents and coach toward the calm, decisive handling that builds loyalty.",
      },
      {
        marker: "06",
        title: "SLAs & reporting",
        body: "Response, resolution, and satisfaction through disruption are contracted and reported openly.",
      },
      {
        marker: "07",
        title: "24/7 coverage",
        body: "Follow-the-sun, multilingual staffing means the phone is always answered, wherever the traveller is.",
      },
    ],
  },
  kpis: {
    intro: {
      eyebrow: "The standard we operate to",
      title: "Targets we hold ourselves to",
      lead: "The operating standard behind every travel engagement.",
    },
    metrics: [
      { value: 60, prefix: "<", suffix: "s", label: "First response target" },
      { value: 24, suffix: "/7", label: "Coverage, every timezone" },
      { value: 95, suffix: "%+", label: "QA score standard" },
      { value: 15, suffix: "m", label: "Escalation SLA" },
    ],
  },
  caseStudy: {
    eyebrow: "Representative engagement",
    client: "A global online travel brand",
    title: "Turning peak-season disruption into repeat bookings.",
    summary:
      "A composite of the travel operations we run: a multilingual, 24/7 pod absorbed a holiday-peak surge, took ownership of rebookings and claims, and lifted satisfaction through the exact moments that usually generate bad reviews.",
    href: "/contact",
    linkLabel: "Discuss a similar engagement",
    metrics: [
      { value: 4.7, suffix: "★", decimals: 1, label: "Satisfaction, sustained" },
      { value: 24, suffix: "/7", label: "Multilingual cover" },
      { value: 60, prefix: "<", suffix: "s", label: "First response" },
    ],
  },
  faqs: [
    {
      question: "Do you really offer 24/7, multilingual support?",
      answer:
        "Yes. Follow-the-sun staffing across languages and timezones means a real, capable person answers whenever and wherever a traveller needs one.",
    },
    {
      question: "Can your agents take ownership of rebookings and changes?",
      answer:
        "Yes. We train and equip agents to rebook, resolve, and reassure — not just log a ticket and pass it on. Ownership is the whole point in travel.",
    },
    {
      question: "How do you handle peak season?",
      answer:
        "Workforce planning scales cover for holidays, events, and weather disruption, so response times and composure hold when volume multiplies.",
    },
    {
      question: "Which languages do you cover?",
      answer:
        "We staff coverage across the languages your customer base spans, with regional playbooks so help feels local rather than translated.",
    },
    {
      question: "How do you protect our ratings?",
      answer:
        "By handling disruption calmly and decisively — the exact moments that generate reviews. Handled well, they become five-star stories instead of complaints.",
    },
    {
      question: "Which systems do you work in?",
      answer:
        "We operate inside your existing reservation, booking, and support systems rather than forcing a migration, and integrate across channels.",
    },
    {
      question: "Do you support messaging channels like WhatsApp?",
      answer:
        "Yes. We meet travellers on the channels they actually use mid-journey — live chat, messaging apps, email, and voice.",
    },
    {
      question: "How is quality measured?",
      answer:
        "A dedicated QA team scores real interactions weekly on composure, ownership, and accuracy, feeding coaching and transparent reporting.",
    },
    {
      question: "How quickly can you launch before a peak?",
      answer:
        "We map your policies and systems, build disruption playbooks, train and certify the pod, and ramp ahead of your peak with the team watching the metrics.",
    },
    {
      question: "Can you handle both leisure and business travel?",
      answer:
        "Yes. Playbooks and tone are tailored to your segments, so the service fits the traveller — whether it's a family holiday or a critical business trip.",
    },
  ],
  related: {
    intro: {
      eyebrow: "Related industries",
      title: "Where the same standard applies",
      lead: "Around-the-clock, consumer-facing operations adjacent to travel.",
    },
    items: [
      industryItem("ecommerce", "Revenue-protecting support across the buying journey."),
      industryItem("healthcare", "Compassionate, always-on support for anxious moments."),
      industryItem("professional-services", "White-glove client support where discretion counts."),
    ],
  },
  cta: {
    title: "Be the brand that shows up when it matters.",
    lead: "Let's build the 24/7, multilingual support behind your travel experience — starting with a conversation, not a contract.",
  },
};

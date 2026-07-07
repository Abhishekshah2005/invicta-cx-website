import type { IndustryContent } from "@/types/templates";
import { serviceItem, industryItem } from "./_shared";

/**
 * Healthcare industry page content. Register: compassion under compliance —
 * patient trust, sensitivity, and around-the-clock reliability.
 */
export const healthcare: IndustryContent = {
  slug: "healthcare",
  hero: {
    eyebrow: "Industries — Healthcare",
    title: "Patients don't want a queue. They want to be cared for.",
    lead: "Invicta provides the compassionate, compliant human support behind healthcare and digital-health platforms — the calm voice at the other end when it matters most.",
    imageLabel:
      "A patient-support specialist mid-call, warm and attentive, soft natural light in a calm room — human, reassuring, cinematic.",
    image: "/assets/industries/healthcare/hero/hero.png",
    cta: { label: "Talk to an Expert", href: "/contact" },
    secondaryCta: { label: "See how we operate", href: "/method" },
  },
  overview: {
    intro: {
      eyebrow: "Overview",
      title: "Support that treats people like patients, not tickets",
      lead: "In healthcare, the tone of a single interaction can change how safe someone feels about their own care.",
    },
    paragraphs: [
      "Whether it's booking an appointment, chasing a result, or navigating coverage, people reach out to healthcare services at anxious moments. They remember how they were treated far longer than how long it took.",
      "We staff those conversations with specialists trained in empathy first and your protocols second — people who can de-escalate worry, protect sensitive information, and get patients to the right outcome without friction.",
      "The effect is measurable: fewer no-shows, lighter load on clinical staff, higher patient satisfaction, and an operation your compliance team trusts with protected information.",
    ],
  },
  challenges: {
    intro: {
      eyebrow: "The problem",
      title: "What healthcare organisations struggle with",
      lead: "Demand is relentless, expectations are rising, and the margin for error is thin.",
    },
    items: [
      {
        title: "Anxious patients need reassurance, not scripts",
        body: "A worried caller met with a rigid decision tree feels dismissed. Sensitivity and judgement can't be automated away.",
      },
      {
        title: "No-shows and admin drain clinical capacity",
        body: "Scheduling, reminders, rescheduling, and coverage questions pull expensive clinical staff away from care they should be delivering.",
      },
      {
        title: "Privacy is sacred and heavily regulated",
        body: "Protected health information demands strict handling. One careless interaction is a breach, a complaint, and a loss of trust at once.",
      },
      {
        title: "Care doesn't keep office hours",
        body: "Questions and worries arrive at night, on weekends, and across timezones. Gaps in cover become gaps in trust.",
      },
      {
        title: "Fragmented systems slow everything down",
        body: "Scheduling, records, and messaging often live in separate tools, and every hand-off is a chance to lose the patient or the detail.",
      },
    ],
  },
  whyInvicta: {
    intro: {
      eyebrow: "How Invicta solves it",
      title: "A human layer that earns patient trust",
      lead: "Trained for empathy, held to your protocols, and available whenever your patients need it.",
    },
    points: [
      {
        title: "Empathy is the first skill we hire for",
        body: "We select people who can stay calm and kind under pressure, then train them on your clinical pathways and escalation rules.",
      },
      {
        title: "Admin lifted off your clinicians",
        body: "Scheduling, reminders, coverage questions, and follow-ups are handled by us, freeing clinical staff for clinical work.",
      },
      {
        title: "Privacy handled to the letter",
        body: "Least-privilege access, controlled environments, and protocols aligned to your compliance obligations protect every interaction.",
      },
      {
        title: "Continuity that reduces no-shows",
        body: "Proactive reminders and easy rescheduling keep appointments filled and patients on their care path.",
      },
      {
        title: "One coordinated point of contact",
        body: "We work across your scheduling, records-adjacent, and messaging tools so patients feel one seamless service, not a relay race.",
      },
    ],
  },
  servicesUsed: {
    intro: {
      eyebrow: "Relevant services",
      title: "The capabilities healthcare teams deploy with us",
      lead: "Patient-facing and behind-the-scenes support, staffed by trained specialists.",
    },
    items: [
      serviceItem(
        "appointment-setting",
        "Booking, reminders, and rescheduling that keep clinics full and patients on track.",
        "Scheduling",
      ),
      serviceItem(
        "customer-support",
        "Patient support across channels — coverage, navigation, and follow-up.",
        "Patient support",
      ),
      serviceItem(
        "live-chat",
        "Real-time answers for patients who'd rather type than call.",
        "Real-time",
      ),
      serviceItem(
        "email-support",
        "Careful, private written responses for sensitive queries.",
        "Written",
      ),
      serviceItem(
        "phone-support",
        "A warm human voice for the moments that truly need one.",
        "Voice",
      ),
      serviceItem(
        "quality-assurance",
        "Weekly audits that keep empathy and accuracy consistently high.",
        "Excellence",
      ),
    ],
  },
  technology: {
    intro: {
      eyebrow: "Technology",
      title: "We fit into your care stack",
      lead: "Our specialists work inside the systems you already use, with privacy controls aligned to your requirements.",
    },
    groups: [
      {
        name: "CRM & patient records-adjacent",
        items: ["Salesforce Health", "HubSpot", "Custom patient portals"],
      },
      {
        name: "Scheduling & reminders",
        items: ["Calendly-class booking", "Automated reminders", "Rescheduling workflows"],
      },
      { name: "Ticketing & workflow", items: ["Zendesk", "Freshdesk", "Intercom"] },
      {
        name: "Knowledge base",
        items: ["Care playbooks", "Triage & escalation scripts", "Guru / Notion"],
      },
      { name: "Live chat & channels", items: ["Secure messaging", "Live chat", "Email & voice"] },
      {
        name: "Analytics & QA",
        items: ["CSAT & sentiment", "No-show tracking", "Interaction scoring"],
      },
    ],
  },
  process: {
    intro: {
      eyebrow: "Our operating model",
      title: "How the operation actually runs",
      lead: "The discipline behind compassionate, compliant support at scale.",
    },
    steps: [
      {
        marker: "01",
        title: "Training & certification",
        body: "Agents complete empathy and de-escalation training plus certification on your clinical pathways, privacy rules, and escalation triggers before going live.",
      },
      {
        marker: "02",
        title: "Quality assurance",
        body: "QA scores real interactions weekly on empathy, accuracy, and privacy handling — the softer skills measured as rigorously as the hard ones.",
      },
      {
        marker: "03",
        title: "Escalation management",
        body: "Clinical and urgent matters route to the right hands immediately, with clear thresholds so nothing sensitive sits in a general queue.",
      },
      {
        marker: "04",
        title: "Workforce management",
        body: "Scheduling covers evenings, weekends, and seasonal demand so patients reach a person whenever worry strikes.",
      },
      {
        marker: "05",
        title: "Leadership & coaching",
        body: "Team leads run a tight span of agents, review difficult interactions, and coach toward calmer, clearer patient outcomes.",
      },
      {
        marker: "06",
        title: "SLAs & reporting",
        body: "Response times, satisfaction, and no-show reduction are contracted and reported openly.",
      },
      {
        marker: "07",
        title: "24/7 coverage",
        body: "Around-the-clock staffing means care questions never hit a closed door.",
      },
    ],
  },
  kpis: {
    intro: {
      eyebrow: "The standard we operate to",
      title: "Targets we hold ourselves to",
      lead: "The operating standard behind every healthcare engagement.",
    },
    metrics: [
      { value: 60, prefix: "<", suffix: "s", label: "First response target" },
      { value: 24, suffix: "/7", label: "Patient coverage" },
      { value: 95, suffix: "%+", label: "QA score standard" },
      { value: 30, suffix: "%", label: "No-show reduction target" },
    ],
  },
  caseStudy: {
    eyebrow: "Representative engagement",
    client: "A national telehealth provider",
    title: "Fewer no-shows, lighter clinical load, happier patients.",
    summary:
      "A composite of the healthcare operations we run: a dedicated patient-support pod took scheduling and coverage questions off clinical staff, cut no-shows with proactive reminders, and lifted satisfaction — without a single privacy incident.",
    href: "/contact",
    linkLabel: "Discuss a similar engagement",
    metrics: [
      { value: 30, suffix: "%", label: "No-show reduction" },
      { value: 4.7, suffix: "★", decimals: 1, label: "Patient satisfaction" },
      { value: 24, suffix: "/7", label: "Coverage" },
    ],
  },
  faqs: [
    {
      question: "Are your agents trained to handle sensitive patient interactions?",
      answer:
        "Yes. Empathy and de-escalation training come first, followed by certification on your clinical pathways and privacy rules. We hire for temperament, then train for protocol.",
    },
    {
      question: "How do you protect patient privacy?",
      answer:
        "Access is least-privilege, interactions happen in controlled environments, and our handling aligns to your compliance obligations for protected health information. Privacy is scored in QA, not assumed.",
    },
    {
      question: "Can you reduce our no-show rate?",
      answer:
        "Yes. Proactive reminders, easy rescheduling, and warm follow-up keep appointments filled and patients on their care path — a common and measurable outcome of our engagements.",
    },
    {
      question: "Do you handle scheduling as well as support?",
      answer:
        "Yes. Booking, reminders, and rescheduling are core capabilities, run alongside patient support so the experience feels like one coordinated service.",
    },
    {
      question: "Will this take load off our clinical staff?",
      answer:
        "That's the point. Admin, coverage questions, and coordination move to us, freeing clinicians to focus on care rather than the phone.",
    },
    {
      question: "Do you offer after-hours and weekend cover?",
      answer:
        "Yes. We staff evenings, weekends, and overnight so patients always reach a person, not a closed door.",
    },
    {
      question: "Which systems do you work in?",
      answer:
        "We operate inside your existing scheduling, records-adjacent, and messaging tools rather than forcing a migration, and integrate cleanly with the rest of your stack.",
    },
    {
      question: "How is quality measured?",
      answer:
        "A dedicated QA team scores real interactions weekly on empathy, accuracy, and privacy handling, feeding coaching and transparent reporting.",
    },
    {
      question: "How quickly can you launch?",
      answer:
        "We map your pathways, privacy rules, and escalation paths, build the playbooks, train and certify the pod, then ramp in stages with your team watching the metrics.",
    },
    {
      question: "Can you scale for seasonal demand?",
      answer:
        "Yes. Workforce planning builds cover around flu season, enrolment periods, and other predictable peaks so service holds when demand climbs.",
    },
  ],
  related: {
    intro: {
      eyebrow: "Related industries",
      title: "Where the same care applies",
      lead: "Trust-critical operations adjacent to healthcare.",
    },
    items: [
      industryItem("fintech", "Regulated support where compliance and calm both matter."),
      industryItem("professional-services", "Discreet, white-glove client support."),
      industryItem("saas", "Scalable, on-brand support and retention for software."),
    ],
  },
  cta: {
    title: "Give your patients the care they remember.",
    lead: "Let's design the compassionate, compliant support layer behind your service — starting with a conversation, not a contract.",
  },
};

import type { IndustryContent } from "@/types/templates";
import { serviceItem, industryItem } from "./_shared";

/**
 * FinTech industry page content. Enterprise register: trust, compliance, and
 * the human judgement that sits behind regulated money movement.
 */
export const fintech: IndustryContent = {
  slug: "fintech",
  hero: {
    eyebrow: "Industries — FinTech",
    title: "In finance, trust is the product. We help you keep it.",
    lead: "Invicta runs the human side of financial platforms — verification, fraud defence, and support that stays calm and correct when someone's money is on the line.",
    imageLabel:
      "A financial-operations specialist at a secure workstation, focused and composed, soft daylight — documentary, premium.",
    image: "/assets/industries/fintech/hero/hero.png",
    cta: { label: "Talk to an Expert", href: "/contact" },
    secondaryCta: { label: "See how we operate", href: "/method" },
  },
  overview: {
    intro: {
      eyebrow: "Overview",
      title: "Support built for money, identity, and regulation",
      lead: "Every conversation touches funds, data, or compliance. That raises the bar on who answers it.",
    },
    paragraphs: [
      "Financial products live and die on confidence. A blocked card, a delayed transfer, or a verification that stalls isn't a support ticket — it's a moment where a customer decides whether your platform is safe to trust with their livelihood.",
      "We staff and run those moments with specialists trained on your product, your risk appetite, and the regulations you operate under. They resolve with the accuracy an auditor would expect and the empathy a worried customer needs.",
      "The result is an operation that protects revenue and reputation at the same time: faster onboarding, tighter fraud control, and support your compliance team is comfortable putting its name behind.",
    ],
  },
  challenges: {
    intro: {
      eyebrow: "The problem",
      title: "What financial platforms are up against",
      lead: "The stakes and the scrutiny are both higher here than almost anywhere else.",
    },
    items: [
      {
        title: "Onboarding friction costs real customers",
        body: "Every extra step in KYC leaks good applicants. Too few, and fraud and regulators arrive together. The line between the two is judgement, not just a rules engine.",
        image: "/assets/industries/fintech/challenges/01.png",
      },
      {
        title: "Fraud never stops evolving",
        body: "Account takeover, synthetic identities, mule networks, and chargeback abuse mutate weekly. Static controls age fast; you need people reading the patterns in real time.",
        image: "/assets/industries/fintech/challenges/02.png",
      },
      {
        title: "Customers expect calm certainty",
        body: "When a payment fails or an account is frozen, tone matters as much as resolution. Panic met with a script becomes a complaint — or a regulator's inbox.",
        image: "/assets/industries/fintech/challenges/03.png",
      },
      {
        title: "Compliance is non-negotiable and always watching",
        body: "AML, sanctions screening, data residency, and audit trails aren't features you bolt on. Every interaction has to be defensible after the fact.",
        image: "/assets/industries/fintech/challenges/04.png",
      },
      {
        title: "Volume is spiky and unforgiving",
        body: "Paydays, market events, product launches, and outages all concentrate demand. Understaffing during a spike is when trust is lost the fastest.",
        image: "/assets/industries/fintech/challenges/05.png",
      },
    ],
  },
  whyInvicta: {
    intro: {
      eyebrow: "How Invicta solves it",
      title: "A regulated-grade human layer, run as an extension of your team",
      lead: "Not a call centre reading a decision tree — a trained operation that thinks in risk, tone, and compliance.",
    },
    points: [
      {
        title: "Specialists, trained on your rulebook",
        body: "We recruit for judgement, then train on your product, thresholds, and escalation paths until agents decide the way your best in-house reviewer would.",
      },
      {
        title: "Fraud and support, working as one",
        body: "The same operation that answers customers also flags anomalies, so intelligence flows both ways and legitimate users aren't punished for the fraudsters.",
      },
      {
        title: "Every action is audit-ready",
        body: "Decisions are logged, reasoned, and traceable. When compliance or a regulator asks 'why', there's a clear answer on record.",
      },
      {
        title: "Retention treated as a discipline",
        body: "Resolved-well beats resolved-fast. We measure whether customers stay, reactivate, and deepen — because acquisition is expensive and trust compounds.",
      },
      {
        title: "Capacity that flexes with the market",
        body: "Workforce planning scales cover to your peaks and quiet hours so SLAs hold whether it's a normal Tuesday or a market-moving morning.",
      },
    ],
  },
  servicesUsed: {
    intro: {
      eyebrow: "Relevant services",
      title: "The capabilities FinTechs deploy with us",
      lead: "Take one function or a full operation — each is staffed by specialists, not generalists.",
    },
    items: [
      serviceItem(
        "kyc",
        "Identity, age, and document verification that clears real customers fast and stops the rest.",
        "Onboarding",
      ),
      serviceItem(
        "fraud-prevention",
        "AML review, transaction monitoring support, multi-accounting and chargeback defence.",
        "Risk",
      ),
      serviceItem(
        "customer-support",
        "Omnichannel account, payments, and product support with a calm, compliant voice.",
        "Core",
      ),
      serviceItem(
        "technical-support",
        "Tier-2 troubleshooting for integrations, APIs, and payment failures.",
        "Tier-2",
      ),
      serviceItem(
        "quality-assurance",
        "Weekly audits on real interactions to keep accuracy and tone above standard.",
        "Excellence",
      ),
      serviceItem(
        "email-support",
        "Thorough, on-tone written resolutions for disputes and sensitive cases.",
        "Written",
      ),
    ],
  },
  technology: {
    intro: {
      eyebrow: "Technology",
      title: "We operate inside your stack",
      lead: "No rip-and-replace. Our specialists work in the tools you already run, and we integrate cleanly with the rest.",
    },
    groups: [
      {
        name: "CRM & case management",
        items: ["Salesforce", "Zendesk", "HubSpot", "Custom internal tools"],
      },
      {
        name: "Ticketing & workflow",
        items: ["Zendesk", "Freshdesk", "Jira Service Management", "Intercom"],
      },
      { name: "Knowledge base", items: ["Guru", "Notion", "Confluence", "Versioned playbooks"] },
      {
        name: "Risk & verification",
        items: ["Onboarding/KYC providers", "Case review queues", "Sanctions & AML tooling"],
      },
      {
        name: "Live chat & channels",
        items: ["Intercom", "Zendesk Chat", "In-app messaging", "Email & voice"],
      },
      {
        name: "Analytics & QA",
        items: ["CSAT / FRT dashboards", "Interaction scoring", "Trend & risk reporting"],
      },
    ],
  },
  process: {
    intro: {
      eyebrow: "Our operating model",
      title: "How the operation actually runs",
      lead: "The machinery behind the service — the part most providers hide and we treat as the product.",
    },
    steps: [
      {
        marker: "01",
        title: "Training & certification",
        body: "Agents complete the Invicta Academy on your product, compliance thresholds, and tone before they ever touch a live customer — then certify against real scenarios.",
      },
      {
        marker: "02",
        title: "Quality assurance",
        body: "A dedicated QA function scores real interactions every week against accuracy, compliance, and empathy — feeding coaching, not just a scorecard.",
      },
      {
        marker: "03",
        title: "Escalation management",
        body: "Clear tiers and thresholds route fraud, disputes, and edge cases to the right specialist fast, with a documented reason at every hand-off.",
      },
      {
        marker: "04",
        title: "Workforce management",
        body: "Forecasting and scheduling flex cover to paydays, market events, and launches so response times hold through every spike.",
      },
      {
        marker: "05",
        title: "Leadership & coaching",
        body: "Team leads own a small span of agents, run daily huddles, and coach to the metrics that move retention and risk.",
      },
      {
        marker: "06",
        title: "SLAs & reporting",
        body: "Response, resolution, QA, and CSAT are contracted and reported transparently — you see the operation, not a black box.",
      },
      {
        marker: "07",
        title: "24/7 coverage",
        body: "Follow-the-sun staffing keeps money moving and fraud watched around the clock, in every timezone your customers live in.",
      },
    ],
  },
  kpis: {
    intro: {
      eyebrow: "The standard we operate to",
      title: "Targets we hold ourselves to",
      lead: "Commitments, not averages we hope to hit — the operating standard behind every FinTech engagement.",
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
    client: "A scaling digital-payments platform",
    title: "Cutting onboarding drop-off while tightening fraud control.",
    summary:
      "A composite of the FinTech operations we run: a dedicated verification and support pod cleared legitimate customers faster, caught more fraud upstream, and kept every decision audit-ready — proof the two goals aren't in tension when people, not just rules, are in the loop.",
    href: "/contact",
    linkLabel: "Discuss a similar engagement",
    metrics: [
      { value: 60, prefix: "<", suffix: "s", label: "First response" },
      { value: 4.6, suffix: "★", decimals: 1, label: "Support rating, sustained" },
      { value: 24, suffix: "/7", label: "Verification cover" },
    ],
  },
  faqs: [
    {
      question: "Are your agents trained on financial compliance?",
      answer:
        "Yes. Every agent completes product and compliance certification before going live, covering your KYC/AML thresholds, escalation rules, and tone. We operate to your rulebook, not a generic script.",
    },
    {
      question: "Can you handle KYC and fraud review, not just customer support?",
      answer:
        "Yes. Verification, transaction-monitoring support, and fraud/chargeback review are core capabilities. Running them alongside support means intelligence flows both ways and legitimate customers aren't punished for fraudsters.",
    },
    {
      question: "How do you keep decisions audit-ready?",
      answer:
        "Every review and action is logged with the reasoning behind it. When compliance or a regulator asks why a decision was made, there's a clear, traceable record — not a guess after the fact.",
    },
    {
      question: "Which tools do you work in?",
      answer:
        "Ours or yours — we operate inside your existing CRM, ticketing, and verification stack rather than forcing a migration, and integrate cleanly with the rest of your systems.",
    },
    {
      question: "How quickly can you scale during a spike?",
      answer:
        "Workforce planning builds cover around your known peaks — paydays, launches, market events — and holds a trained bench so we can flex without SLAs slipping.",
    },
    {
      question: "Do you support multiple languages and regions?",
      answer:
        "Yes. We staff follow-the-sun coverage across timezones and languages relevant to your customer base, with data-residency handled to your requirements.",
    },
    {
      question: "How is quality measured?",
      answer:
        "A dedicated QA team scores real interactions every week on accuracy, compliance, and empathy. Scores drive coaching and are reported to you transparently.",
    },
    {
      question: "What does onboarding a new engagement look like?",
      answer:
        "We map your product, risk thresholds, and escalation paths, build the playbooks and QA rubric, train and certify the pod, then ramp in stages with you watching the metrics the whole way.",
    },
    {
      question: "Can you integrate with our in-house risk team?",
      answer:
        "Yes. We're designed to be an extension of your team — shared escalation channels, agreed thresholds, and regular reviews keep your risk and our operation aligned.",
    },
    {
      question: "How do you protect customer data?",
      answer:
        "Access is least-privilege, interactions are handled in controlled environments, and we align to your security, retention, and residency requirements as part of onboarding.",
    },
  ],
  related: {
    intro: {
      eyebrow: "Related industries",
      title: "Where the same standard applies",
      lead: "The trust-critical operations closest to FinTech.",
    },
    items: [
      industryItem(
        "gaming",
        "Real-money platforms where KYC, fraud, and VIP economics never sleep.",
        "Flagship",
      ),
      industryItem("saas", "Scale support and retention for software where churn is the enemy."),
      industryItem(
        "professional-services",
        "White-glove client support where discretion is everything.",
      ),
    ],
  },
  cta: {
    title: "Protect the trust your product runs on.",
    lead: "Let's map the human layer behind your verification, fraud defence, and support — starting with a conversation, not a contract.",
  },
};

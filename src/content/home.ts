/**
 * Homepage content — a documentary in chapters, not a set of marketing sections.
 * Copy is cinematic: few words, high weight. Grounded in the source-of-truth
 * document (player support, KYC, VIP, QA, WFM, Lunaland).
 *
 * Through-line: "One Conversation." A single human message becomes a
 * relationship; a relationship becomes a global human network. Invicta is the
 * human layer behind customer experience — never a BPO.
 */

export const NAV_LINKS = [
  { label: "Industries", href: "/industries" },
  { label: "Services", href: "/services" },
  { label: "Method", href: "/method" },
  { label: "Case Studies", href: "/case-studies" },
  { label: "Insights", href: "/insights" },
] as const;

/* ── COLD OPEN ─────────────────────────────────────────────────────────── */

/**
 * Real human-support moments across the industries we serve. Auto-cycled in the
 * hero to prove breadth — gaming is present, but one of many. Each is a natural,
 * two-line exchange: a customer at a hard moment, and a person who steps in.
 */
export const CONVERSATIONS = [
  {
    industry: "SaaS",
    who: "A founder",
    customer: "Our whole team's locked out an hour before a client demo. Please help.",
    invicta:
      "On it — access restored and I've put a safeguard on your account. You're set for the demo.",
  },
  {
    industry: "Healthcare",
    who: "A patient",
    customer: "I can't tell if my appointment actually got rescheduled. I'm anxious.",
    invicta:
      "It did — Thursday at 2pm. Confirmation's on its way, and I'll stay with you until you see it.",
  },
  {
    industry: "E-commerce",
    who: "A shopper",
    customer: "The jacket arrived damaged and it's a gift for tomorrow.",
    invicta: "I'm sorry — a replacement ships express tonight, no charge. It'll make it in time.",
  },
  {
    industry: "Travel",
    who: "A traveler",
    customer: "Flight cancelled, stuck at the airport with two kids. What do I do?",
    invicta: "Take a breath — I've rebooked you on the 6:40 and added lounge access for the wait.",
  },
  {
    industry: "FinTech",
    who: "A cardholder",
    customer: "A payment I don't recognise just left my account. I'm panicking.",
    invicta: "Card frozen, dispute opened. Nothing else moves until we've made this right.",
  },
  {
    industry: "Recruitment",
    who: "A candidate",
    customer: "Silence since my final interview. It's brutal not knowing.",
    invicta: "That's on us. I've chased the hiring team — you'll have a real answer by end of day.",
  },
  {
    industry: "Gaming",
    who: "A player",
    customer: "Two days waiting on a withdrawal. About to give up.",
    invicta: "Not on my watch — verified and released. It's in your account now.",
  },
  {
    industry: "Community",
    who: "A member",
    customer: "Someone's harassing users in your community. It's turning ugly.",
    invicta: "Thank you for flagging it — actioned, and we're watching the thread closely now.",
  },
] as const;

export const COLD_OPEN = {
  kicker: "Real human support. Every industry.",
  promise: "The human layer behind customer experience.",
  industries: ["SaaS", "Healthcare", "E-commerce", "Travel", "FinTech", "Recruitment", "Gaming"],
  scrollCue: "See how",
} as const;

/* ── CHAPTER I — THE MOMENT ────────────────────────────────────────────── */

export const MOMENT = {
  chapter: "Chapter I",
  title: "The moment that decides everything",
  lines: [
    "Somewhere, right now,",
    "a customer is deciding whether to stay.",
    "A machine will make them repeat themselves.",
    "A person will make them feel understood.",
  ],
  punch: "We answer with a person.",
} as const;

/* ── CHAPTER II — THE PEOPLE ───────────────────────────────────────────── */

export const PEOPLE = {
  chapter: "Chapter II",
  title: "It was never about outsourcing.",
  lead: "It's about the people your customers remember. We hire for judgement and empathy, then train them on your world until they answer like your own team.",
  beats: [
    {
      line: "Trust is earned in the hard moments.",
      body: "A disputed payment. A missed payout. A frustrated goodbye-in-waiting. Won by empathy — never a decision tree.",
      imageLabel:
        "Extreme close-up of a support specialist mid-conversation, eyes focused, faint headset — cinematic, warm key light.",
    },
    {
      line: "Complexity needs a specialist.",
      body: "Trained on your platform until they resolve what bots escalate and abandon.",
      imageLabel:
        "A specialist at a clean workstation, multiple screens reflected softly, calm and in command. Editorial, shallow depth.",
    },
    {
      line: "Every conversation is your brand, defended.",
      body: "Tone discipline, rigor, and around-the-clock vigilance — so your reputation is safe in every reply.",
      imageLabel:
        "A team lead reviewing quality on a tablet, quiet confidence, natural window light. Premium, documentary.",
    },
    {
      line: "And loyalty is what we leave behind.",
      body: "The interaction ends. The relationship doesn't. That's the whole point.",
      imageLabel:
        "A warm, genuine smile mid-call — the moment a problem becomes a loyal customer. Cinematic, real.",
    },
  ],
} as const;

/* ── CHAPTER III — THE ARENA (Gaming) ──────────────────────────────────── */

export const ARENA = {
  chapter: "Chapter III",
  eyebrow: "Flagship — Gaming & iGaming",
  title: "We were forged where customer experience is hardest.",
  lead: "Real money. Hundreds of live titles. Fraud, KYC, and VIP economics — at 3am, in every timezone. An operation that thrives here can protect any business.",
  imageLabel:
    "A live iGaming support floor at night — screens glowing crimson and gold, specialists in focus. Cinematic, high-energy, real.",
  points: [
    "Player onboarding & first-line support across 700+ titles",
    "Continuous KYC, age verification & AML compliance",
    "Real-time fraud, multi-accounting & chargeback defense",
    "Dedicated VIP management that grows lifetime value",
  ],
  cta: { label: "Enter the Gaming world", href: "/industries/gaming" },
} as const;

/* ── CHAPTER IV — THE HUMAN LAYER ──────────────────────────────────────── */

export const LAYER = {
  chapter: "Chapter IV",
  title: "Hundreds of specialists. One human layer.",
  lead: "Not a call center. An operating system for human trust — recruited, trained, measured, and scheduled to protect your customers without a gap.",
  proof: [
    { value: 4.5, suffix: "★", label: "Sustained Trustpilot", decimals: 1 },
    { value: 60, prefix: "<", suffix: "s", label: "First response" },
    { value: 24, suffix: "/7", label: "Every timezone" },
    { value: 700, suffix: "+", label: "Titles supported" },
  ],
  pillars: [
    { title: "Recruited", body: "Hired for judgement and empathy — the traits you can't train." },
    { title: "Trained", body: "The Invicta Academy: your platform, your compliance, your voice." },
    { title: "Measured", body: "Weekly QA audits on real interactions. CSAT, FRT, accuracy." },
    { title: "Scheduled", body: "Workforce science that scales seats to your every peak." },
  ],
  cta: { label: "See how we work", href: "/method" },
} as const;

/* ── CHAPTER V — THE INDEX (Industries + Services) ─────────────────────── */

export const INDEX = {
  chapter: "Chapter V",
  industries: {
    kicker: "Wherever trust is the business",
    heading: "Industries",
    items: [
      {
        name: "Gaming & iGaming",
        meta: "Flagship",
        href: "/industries/gaming",
        imageLabel: "iGaming support floor, glowing screens.",
      },
      {
        name: "FinTech",
        meta: "KYC · AML · Fraud",
        href: "/industries/fintech",
        imageLabel: "Fintech ops, secure and calm.",
      },
      {
        name: "SaaS",
        meta: "Scale & retention",
        href: "/industries/saas",
        imageLabel: "SaaS support pod, modern light.",
      },
      {
        name: "Technology",
        meta: "Tier-2 & trust",
        href: "/industries/technology",
        imageLabel: "Technical specialist, focused.",
      },
      {
        name: "Healthcare",
        meta: "Care & compliance",
        href: "/industries/healthcare",
        imageLabel: "Healthcare support, warm and human.",
      },
      {
        name: "Travel",
        meta: "24/7 service",
        href: "/industries/travel",
        imageLabel: "Travel desk at night, global map.",
      },
      {
        name: "Recruitment",
        meta: "Candidate care",
        href: "/industries/recruitment",
        imageLabel: "Recruiter mid-conversation, hopeful.",
      },
      {
        name: "Professional Services",
        meta: "White-glove",
        href: "/industries/professional-services",
        imageLabel: "Executive support, refined.",
      },
    ],
  },
  services: {
    kicker: "Everything a relationship needs",
    heading: "Services",
    items: [
      {
        name: "Customer Support",
        meta: "Omnichannel",
        href: "/services/customer-support",
        imageLabel: "Agent on live chat, warm.",
      },
      {
        name: "Live Chat",
        meta: "Real-time",
        href: "/services/live-chat",
        imageLabel: "Chat interface, fast typing.",
      },
      {
        name: "Email Support",
        meta: "Written",
        href: "/services/email-support",
        imageLabel: "Composing a thoughtful reply.",
      },
      {
        name: "Technical Support",
        meta: "Tier-2",
        href: "/services/technical-support",
        imageLabel: "Troubleshooting on screens.",
      },
      {
        name: "Phone Support",
        meta: "Voice",
        href: "/services/phone-support",
        imageLabel: "On a headset, listening.",
      },
      {
        name: "Community Moderation",
        meta: "Trust & safety",
        href: "/services/community-moderation",
        imageLabel: "Moderating a community feed.",
      },
      {
        name: "VIP Management",
        meta: "Retention",
        href: "/services/vip-management",
        imageLabel: "VIP manager, personal touch.",
      },
      {
        name: "KYC",
        meta: "Verification",
        href: "/services/kyc",
        imageLabel: "Document verification, secure.",
      },
      {
        name: "Fraud Prevention",
        meta: "Risk",
        href: "/services/fraud-prevention",
        imageLabel: "Risk analyst reviewing flags.",
      },
      {
        name: "Quality Assurance",
        meta: "Excellence",
        href: "/services/quality-assurance",
        imageLabel: "QA lead auditing a call.",
      },
      {
        name: "Lead Generation",
        meta: "Growth",
        href: "/services/lead-generation",
        imageLabel: "Outbound specialist, energetic.",
      },
      {
        name: "Appointment Setting",
        meta: "Growth",
        href: "/services/appointment-setting",
        imageLabel: "Booking a meeting, confident.",
      },
    ],
  },
} as const;

/* ── CHAPTER VI — THE PROOF (Case study) ───────────────────────────────── */

export const PROOF = {
  chapter: "Chapter VI",
  eyebrow: "Case Study",
  client: "Lunaland Casino",
  title: "How we protected 700+ titles and a 4.5-star reputation.",
  challenge: {
    label: "Challenge",
    body: "A fast-scaling sweepstakes casino with a 700+ title library, real-money redemptions, and a multi-tier player base — under constant fraud and compliance pressure.",
  },
  solution: {
    label: "Solution",
    body: "A dedicated, trained player-support ecosystem: tiered support, real-time KYC and fraud defense, and a bespoke VIP program — live 24/7.",
  },
  result: {
    label: "Results",
    body: "A sustained 4.5-star Trustpilot rating, sub-60-second first response, and reactivated VIP revenue — with support named again and again in public reviews.",
  },
  metrics: [
    { value: 4.5, suffix: "★", label: "Trustpilot, sustained", decimals: 1 },
    { value: 60, prefix: "<", suffix: "s", label: "First response" },
    { value: 700, suffix: "+", label: "Titles supported" },
  ],
  cta: { label: "Read the full story", href: "/case-studies/lunaland-casino" },
} as const;

/* ── CHAPTER VII — THE INVITATION ──────────────────────────────────────── */

export const INVITATION = {
  chapter: "Chapter VII",
  title: "Become the brand your customers refuse to leave.",
  lead: "Let's build the human layer behind your experience — starting with a conversation, not a contract.",
  primary: { label: "Talk to an Expert", href: "/contact" },
  secondary: { label: "See what's in every seat", href: "/method" },
} as const;

/* ── FOOTER ────────────────────────────────────────────────────────────── */

export const FOOTER = {
  columns: [
    {
      heading: "Industries",
      links: [
        { label: "Gaming & iGaming", href: "/industries/gaming" },
        { label: "FinTech", href: "/industries/fintech" },
        { label: "SaaS", href: "/industries/saas" },
        { label: "Healthcare", href: "/industries/healthcare" },
      ],
    },
    {
      heading: "Services",
      links: [
        { label: "Customer Support", href: "/services/customer-support" },
        { label: "KYC", href: "/services/kyc" },
        { label: "VIP Management", href: "/services/vip-management" },
        { label: "Quality Assurance", href: "/services/quality-assurance" },
      ],
    },
    {
      heading: "Company",
      links: [
        { label: "The Method", href: "/method" },
        { label: "Case Studies", href: "/case-studies" },
        { label: "Insights", href: "/insights" },
        { label: "Careers", href: "/careers" },
      ],
    },
    {
      heading: "Connect",
      links: [
        { label: "Talk to an Expert", href: "/contact" },
        { label: "LinkedIn", href: "#" },
        { label: "Privacy", href: "/privacy" },
        { label: "Terms", href: "/terms" },
      ],
    },
  ],
  tagline: "The human layer behind customer experience.",
  endline: "Unconquered.",
} as const;

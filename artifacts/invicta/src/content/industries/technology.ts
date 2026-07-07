import type { IndustryContent } from "@/types/templates";
import { serviceItem, industryItem } from "./_shared";

/**
 * Technology industry page content. Register: technical depth plus trust &
 * safety — support for platforms, devices, and connected products.
 */
export const technology: IndustryContent = {
  slug: "technology",
  hero: {
    eyebrow: "Industries — Technology",
    title: "Complex products deserve support that actually understands them.",
    lead: "Invicta runs technically fluent support and trust operations for technology businesses — resolving the hard tickets, protecting your platform, and keeping users confident in what you've built.",
    imageLabel:
      "A technical-support specialist troubleshooting across screens, composed and expert, cool daylight — documentary, premium.",
    image: "/assets/industries/technology/hero/hero.png",
    cta: { label: "Talk to an Expert", href: "/contact" },
    secondaryCta: { label: "See how we operate", href: "/method" },
  },
  overview: {
    intro: {
      eyebrow: "Overview",
      title: "The harder your product, the more human your support has to be",
      lead: "Technical products break in complex ways, and users lose faith fast when help can't keep up.",
    },
    paragraphs: [
      "Devices, platforms, and connected products generate support problems that a script can't solve. Users don't want to be told to restart — they want someone who understands the system to actually fix it.",
      "We staff support with specialists trained to real technical depth, backed by trust-and-safety operations that keep your platform healthy. They resolve tier-2 issues, protect the community, and defend the reputation your product runs on.",
      "The result is fewer escalations, safer platforms, and users who trust your technology because the humans behind it clearly do too.",
    ],
  },
  challenges: {
    intro: {
      eyebrow: "The problem",
      title: "What technology businesses struggle with",
      lead: "Complexity, scale, and safety pressures all compound at once.",
    },
    items: [
      {
        title: "Users churn when support can't keep up",
        body: "A confident user hitting a wall of scripted answers loses faith in the product itself, not just the help desk.",
        image: "/assets/industries/technology/challenges/01.png",
      },
      {
        title: "Tier-2 issues need genuine expertise",
        body: "Integration failures, device faults, and edge-case bugs demand people who understand the technology, not a keyword search.",
        image: "/assets/industries/technology/challenges/02.png",
      },
      {
        title: "Platforms attract abuse and risk",
        body: "Any product with users, content, or transactions draws spam, abuse, and bad actors that threaten everyone else's experience.",
        image: "/assets/industries/technology/challenges/03.png",
      },
      {
        title: "Scaling expertise is slow and costly",
        body: "Technical talent is expensive and hard to hire, and in-house teams can't ramp fast enough for launches and growth.",
        image: "/assets/industries/technology/challenges/04.png",
      },
      {
        title: "Reputation is set in public",
        body: "Reviews, forums, and app stores turn every poor interaction into a permanent, searchable mark against you.",
        image: "/assets/industries/technology/challenges/05.png",
      },
    ],
  },
  whyInvicta: {
    intro: {
      eyebrow: "How Invicta solves it",
      title: "Technical fluency and platform safety, run as one operation",
      lead: "Specialists who resolve the hard problems and protect the ecosystem around them.",
    },
    points: [
      {
        title: "Real technical depth",
        body: "We train agents on your architecture and common failure modes so they resolve tier-2 issues instead of just routing them.",
      },
      {
        title: "Trust and safety built in",
        body: "Moderation and abuse defence keep your platform healthy, so growth doesn't come with a degrading experience.",
      },
      {
        title: "Escalations that stay rare",
        body: "By resolving more at the frontline, we protect your engineers' focus and your users' patience.",
      },
      {
        title: "Reputation actively defended",
        body: "Consistent, competent, well-toned support turns public interactions into evidence your product is well cared for.",
      },
      {
        title: "Expertise that scales on demand",
        body: "Workforce planning ramps trained technical cover for launches and growth without a hiring bottleneck.",
      },
    ],
  },
  servicesUsed: {
    intro: {
      eyebrow: "Relevant services",
      title: "The capabilities technology teams deploy with us",
      lead: "Technical support and platform protection, staffed by specialists.",
    },
    items: [
      serviceItem(
        "technical-support",
        "Tier-2 troubleshooting for integrations, devices, and edge cases.",
        "Tier-2",
      ),
      serviceItem(
        "customer-support",
        "Omnichannel product support with a confident, capable voice.",
        "Core",
      ),
      serviceItem(
        "community-moderation",
        "Trust and safety that keeps platforms and communities healthy.",
        "Trust & safety",
      ),
      serviceItem("live-chat", "Real-time help at the point of technical friction.", "Real-time"),
      serviceItem("email-support", "Detailed written resolutions for complex issues.", "Written"),
      serviceItem(
        "quality-assurance",
        "Audits that keep technical accuracy and tone high.",
        "Excellence",
      ),
    ],
  },
  technology: {
    intro: {
      eyebrow: "Technology",
      title: "We integrate into your platform and tooling",
      lead: "Our specialists work in your stack and learn your architecture to the depth resolution requires.",
    },
    groups: [
      { name: "CRM & support desk", items: ["Zendesk", "Salesforce", "Intercom", "Custom tools"] },
      { name: "Ticketing & workflow", items: ["Zendesk", "Freshdesk", "Jira Service Management"] },
      { name: "Knowledge base", items: ["Guru", "Confluence", "Runbooks & diagnostics"] },
      {
        name: "Trust & safety",
        items: ["Moderation queues", "Abuse & spam tooling", "Policy playbooks"],
      },
      {
        name: "Engineering handoff",
        items: ["Jira", "Linear", "GitHub issues", "Reproducible reports"],
      },
      {
        name: "Analytics & QA",
        items: ["Resolution & escalation rates", "CSAT", "Interaction scoring"],
      },
    ],
  },
  process: {
    intro: {
      eyebrow: "Our operating model",
      title: "How the operation actually runs",
      lead: "The discipline behind technically fluent, safety-conscious support.",
    },
    steps: [
      {
        marker: "01",
        title: "Training & certification",
        body: "Agents learn your architecture, common failure modes, and safety policies, then certify on real diagnostics before going live.",
      },
      {
        marker: "02",
        title: "Quality assurance",
        body: "QA scores real interactions weekly on technical accuracy, policy adherence, and tone, driving continuous coaching.",
      },
      {
        marker: "03",
        title: "Escalation management",
        body: "Genuine engineering issues reach your team with clean, reproducible reports; safety incidents route to the right responders immediately.",
      },
      {
        marker: "04",
        title: "Workforce management",
        body: "Forecasting ramps technical and moderation cover for launches, releases, and growth so SLAs hold.",
      },
      {
        marker: "05",
        title: "Leadership & coaching",
        body: "Team leads own a tight span of specialists and coach toward resolution quality and platform health.",
      },
      {
        marker: "06",
        title: "SLAs & reporting",
        body: "Response, resolution, escalation, and safety metrics are contracted and reported transparently.",
      },
      {
        marker: "07",
        title: "24/7 coverage",
        body: "Platforms don't sleep and neither do bad actors — follow-the-sun staffing keeps support and safety live around the clock.",
      },
    ],
  },
  kpis: {
    intro: {
      eyebrow: "The standard we operate to",
      title: "Targets we hold ourselves to",
      lead: "The operating standard behind every technology engagement.",
    },
    metrics: [
      { value: 60, prefix: "<", suffix: "s", label: "First response target" },
      { value: 80, suffix: "%", label: "First-contact resolution target" },
      { value: 95, suffix: "%+", label: "QA score standard" },
      { value: 24, suffix: "/7", label: "Support & safety cover" },
    ],
  },
  caseStudy: {
    eyebrow: "Representative engagement",
    client: "A connected-hardware platform",
    title: "Resolving more at the frontline while keeping the platform safe.",
    summary:
      "A composite of the technology operations we run: a technically trained pod, paired with a trust-and-safety function, lifted first-contact resolution, cut engineering escalations, and kept abuse in check as the user base grew.",
    href: "/contact",
    linkLabel: "Discuss a similar engagement",
    metrics: [
      { value: 80, suffix: "%", label: "First-contact resolution" },
      { value: 4.6, suffix: "★", decimals: 1, label: "Support rating" },
      { value: 24, suffix: "/7", label: "Coverage" },
    ],
  },
  faqs: [
    {
      question: "Can your agents handle genuinely technical issues?",
      answer:
        "Yes. We train agents on your architecture and common failure modes so they resolve tier-2 problems rather than routing everything onward.",
    },
    {
      question: "Do you provide trust and safety, not just support?",
      answer:
        "Yes. Moderation and abuse defence run alongside support, keeping your platform healthy as it grows. Growth shouldn't degrade the experience for everyone else.",
    },
    {
      question: "How do you reduce escalations to engineering?",
      answer:
        "By resolving more at the frontline and sending only genuine, reproducible issues onward with clean reports — protecting your engineers' focus.",
    },
    {
      question: "How do you protect our public reputation?",
      answer:
        "Consistent, competent, well-toned support across every channel turns reviews and forum threads into evidence your product is well cared for.",
    },
    {
      question: "Can you scale technical cover for a launch?",
      answer:
        "Yes. Workforce planning ramps trained technical and moderation cover for releases and growth without an in-house hiring bottleneck.",
    },
    {
      question: "Which tools do you work in?",
      answer:
        "We operate inside your existing support and moderation tooling, and hand off to your engineering tracker with reproducible reports.",
    },
    {
      question: "Do you support multiple channels?",
      answer:
        "Yes — live chat, email, voice, and in-product support, matched to where your users actually hit friction.",
    },
    {
      question: "How is quality measured?",
      answer:
        "A dedicated QA team scores real interactions weekly on technical accuracy, policy adherence, and tone, feeding coaching and transparent reporting.",
    },
    {
      question: "How do you handle safety incidents?",
      answer:
        "Clear policies and escalation paths route incidents to the right responders immediately, with everything documented for review.",
    },
    {
      question: "What does onboarding an engagement look like?",
      answer:
        "We learn your architecture and policies, build diagnostics and playbooks, train and certify the pod, then ramp in stages with your team watching the metrics.",
    },
  ],
  related: {
    intro: {
      eyebrow: "Related industries",
      title: "Where the same standard applies",
      lead: "Technical and platform operations adjacent to technology.",
    },
    items: [
      industryItem("saas", "Support as a retention engine for software."),
      industryItem("gaming", "High-intensity player support and platform trust.", "Flagship"),
      industryItem("ecommerce", "Revenue-protecting support across the buying journey."),
    ],
  },
  cta: {
    title: "Give your product the support it deserves.",
    lead: "Let's build the technical and safety operation behind your platform — starting with a conversation, not a contract.",
  },
};

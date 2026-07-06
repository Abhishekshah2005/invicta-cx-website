import type { ServiceContent } from "@/types/templates";
import { industryItem, serviceItem } from "./_shared";

export const socialMediaSupport: ServiceContent = {
  slug: "social-media-support",
  hero: {
    eyebrow: "Services — Social Media Support",
    title: "Your brand is being talked about. Answer well.",
    lead: "Invicta runs on-brand social response and community care — replying, resolving, and engaging across every channel, in public and in DMs, fast enough to protect your reputation.",
    imageLabel:
      "A social specialist responding across brand channels on a phone and screen, quick and warm — editorial.",
    cta: { label: "Talk to an Expert", href: "/contact" },
    secondaryCta: { label: "See how we operate", href: "/method" },
  },
  overview: {
    intro: {
      eyebrow: "Why it matters",
      title: "Social is support that everyone can see",
      lead: "A reply on social isn't just to one customer — it's a public statement about your brand.",
    },
    paragraphs: [
      "Customers increasingly reach out — and vent — on social. Every public reply, or lack of one, shapes how thousands of onlookers perceive you.",
      "We run social support with specialists trained in your voice and escalation rules, responding fast in public and in DMs, resolving issues, and engaging your community with genuine care.",
      "The result is protected reputation, faster resolution where it's most visible, and a community that feels heard.",
    ],
  },
  challenges: {
    intro: {
      eyebrow: "The problem",
      title: "Why social support is hard",
      lead: "It's public, fast, and unforgiving.",
    },
    items: [
      {
        title: "Everything is public",
        body: "A slow or tone-deaf reply is visible to everyone and screenshots forever.",
      },
      {
        title: "Speed expectations are brutal",
        body: "On social, hours feel like days; silence during a flare-up amplifies it.",
      },
      {
        title: "Channels and formats multiply",
        body: "Comments, DMs, mentions, reviews — across several platforms — fragment attention.",
      },
      {
        title: "Crises escalate fast",
        body: "A single issue can snowball into a pile-on before an unstaffed team even notices.",
      },
    ],
  },
  approach: {
    intro: {
      eyebrow: "How Invicta solves it",
      title: "On-brand, fast, and watchful",
      lead: "Specialists who protect and grow your reputation.",
    },
    points: [
      {
        title: "Your voice, in public",
        body: "Trained agents reply in your brand tone, so public responses build rather than dent trust.",
      },
      {
        title: "Fast where it's visible",
        body: "Rapid response to comments, mentions, and DMs keeps issues from festering in the open.",
      },
      {
        title: "Engagement, not just tickets",
        body: "We nurture community, not only resolve complaints — turning followers into advocates.",
      },
      {
        title: "Crisis-aware monitoring",
        body: "Spikes and sensitive issues are flagged and escalated before they snowball.",
      },
    ],
  },
  workflow: {
    intro: {
      eyebrow: "Workflow",
      title: "How social gets handled",
      lead: "From mention to resolved — in public and in DMs.",
    },
    steps: [
      {
        marker: "01",
        title: "Monitor & triage",
        body: "Comments, mentions, DMs, and reviews across platforms are watched and prioritised.",
      },
      {
        marker: "02",
        title: "Respond on-brand",
        body: "Agents reply publicly or privately in your voice, fast and appropriately.",
      },
      {
        marker: "03",
        title: "Resolve or route",
        body: "Issues are resolved directly or moved to DM and the right team, out of the public eye where needed.",
      },
      {
        marker: "04",
        title: "Escalate flare-ups",
        body: "Sensitive issues and volume spikes are flagged and escalated immediately.",
      },
      {
        marker: "05",
        title: "Report the signal",
        body: "Sentiment and themes feed insight back to your brand and product teams.",
      },
    ],
  },
  technology: {
    intro: {
      eyebrow: "Technology",
      title: "We work in your social stack",
      lead: "Our specialists operate in your social and care tools.",
    },
    groups: [
      { name: "Social management", items: ["Sprout Social", "Hootsuite", "Native platform tools"] },
      { name: "Care & helpdesk", items: ["Zendesk", "Salesforce Social", "Intercom"] },
      { name: "Listening", items: ["Social listening", "Sentiment monitoring", "Alerting"] },
      {
        name: "Knowledge base",
        items: ["Brand voice guide", "Response playbooks", "Guru / Notion"],
      },
      { name: "Analytics & QA", items: ["Response time", "Sentiment", "Engagement & resolution"] },
    ],
  },
  benefits: {
    intro: {
      eyebrow: "Benefits",
      title: "What you get",
      lead: "Reputation protected, community grown.",
    },
    items: [
      {
        title: "Protected reputation",
        body: "Fast, on-brand public replies build trust with every onlooker.",
      },
      { title: "Faster resolution", body: "Issues handled before they escalate in the open." },
      { title: "A stronger community", body: "Engagement that turns followers into advocates." },
      { title: "Early-warning insight", body: "Sentiment and crises spotted before they spread." },
    ],
  },
  statement: {
    statement: "On social, how you reply to one customer is a message to all of them.",
    context: "Support, in public",
  },
  industriesUsing: {
    intro: {
      eyebrow: "Industries",
      title: "Where this service delivers",
      lead: "Wherever brand lives in public.",
    },
    items: [
      industryItem("ecommerce", "Public care that protects conversion."),
      industryItem("gaming", "Community engagement and response.", "Flagship"),
      industryItem("technology", "Reputation care for platforms."),
    ],
  },
  kpis: {
    intro: {
      eyebrow: "The standard we operate to",
      title: "Targets we hold ourselves to",
      lead: "Commitments behind every social-support engagement.",
    },
    metrics: [
      { value: 15, prefix: "<", suffix: "m", label: "Social response target" },
      { value: 95, suffix: "%+", label: "QA score standard" },
      { value: 24, suffix: "/7", label: "Coverage" },
      { value: 100, suffix: "%", label: "Mentions triaged" },
    ],
  },
  related: {
    intro: {
      eyebrow: "Related services",
      title: "Pairs well with",
      lead: "Capabilities teams deploy alongside social support.",
    },
    items: [
      serviceItem("community-moderation", "Keep the community safe as well as heard."),
      serviceItem("omnichannel-support", "Unify social with every other channel."),
      serviceItem("customer-support", "The full frontline behind social."),
    ],
  },
  faqs: [
    {
      question: "Will replies sound like our brand?",
      answer:
        "Yes. Agents are trained on your voice guide, and QA reviews public replies, so social responses represent you well.",
    },
    {
      question: "How fast do you respond on social?",
      answer:
        "We operate to a sub-15-minute response target, because on social, speed in public is reputation management.",
    },
    {
      question: "Do you handle DMs as well as public comments?",
      answer:
        "Yes. We respond across comments, mentions, reviews, and DMs, moving sensitive issues to private channels when appropriate.",
    },
    {
      question: "Can you help during a crisis or pile-on?",
      answer:
        "Yes. Monitoring flags spikes and sensitive issues so they're escalated and managed before they snowball.",
    },
    {
      question: "Which platforms do you cover?",
      answer:
        "The platforms your audience uses — the major social networks plus review sites — coordinated in one operation.",
    },
    {
      question: "Do you work in our social tools?",
      answer: "Yes. Specialists operate in your existing social-management and care platforms.",
    },
    {
      question: "How is quality measured?",
      answer: "On response time, sentiment, engagement, and resolution, reported transparently.",
    },
    {
      question: "How quickly can you launch?",
      answer:
        "We learn your voice and escalation rules, build response playbooks, certify the team, and ramp in stages.",
    },
  ],
  cta: {
    title: "Answer well, in front of everyone.",
    lead: "Let's run the social layer behind your brand — starting with a conversation, not a contract.",
  },
};

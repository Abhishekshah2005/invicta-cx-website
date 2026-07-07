import type { ServiceContent } from "@/types/templates";
import { industryItem, serviceItem } from "./_shared";

export const customerRetention: ServiceContent = {
  slug: "customer-retention",
  hero: {
    eyebrow: "Services — Customer Retention",
    title: "The cheapest customer to win is the one you already have.",
    lead: "Invicta runs proactive save, win-back, and loyalty programs — human outreach that catches customers before they leave and brings back the ones who did.",
    imageLabel:
      "A retention specialist in a warm, persuasive conversation, engaged and empathetic, soft light — editorial.",
    image: "/assets/services/customer-retention/hero/hero.png",
    cta: { label: "Talk to an Expert", href: "/contact" },
    secondaryCta: { label: "See how we operate", href: "/method" },
  },
  overview: {
    intro: {
      eyebrow: "Why it matters",
      title: "Retention is the highest-leverage number in your business",
      lead: "Acquisition fills a leaky bucket; retention fixes the bucket.",
    },
    paragraphs: [
      "It costs far more to acquire a customer than to keep one, and a small lift in retention compounds into outsized revenue. Yet most churn happens quietly, with no attempt to stop it.",
      "We run retention as a proactive operation: spotting at-risk customers early, intervening with genuine human outreach, saving cancellations, and winning back those who've already gone.",
      "The result is measurably lower churn, reactivated revenue, and loyalty programs that actually change behaviour.",
    ],
  },
  challenges: {
    intro: {
      eyebrow: "The problem",
      title: "Why customers slip away",
      lead: "Churn is quiet, and most teams only react once it's too late.",
    },
    items: [
      {
        title: "Churn happens silently",
        body: "Most customers don't complain before they leave — they just stop, and by cancellation it's often too late.",
        image: "/assets/services/customer-retention/challenges/01.png",
      },
      {
        title: "Saves are handled defensively",
        body: "Cancellation flows that only offer a discount leave real reasons — and better outcomes — on the table.",
        image: "/assets/services/customer-retention/challenges/02.png",
      },
      {
        title: "Win-back is neglected",
        body: "Lapsed customers are warm leads, but few businesses systematically bring them back.",
        image: "/assets/services/customer-retention/challenges/03.png",
      },
      {
        title: "Loyalty programs don't change behaviour",
        body: "Points nobody uses don't build loyalty; relationships do.",
        image: "/assets/services/customer-retention/challenges/04.png",
      },
    ],
  },
  approach: {
    intro: {
      eyebrow: "How Invicta solves it",
      title: "Proactive, human, revenue-focused",
      lead: "Catch them early, save them well, win them back.",
    },
    points: [
      {
        title: "Spot risk early",
        body: "We watch the signals — usage, sentiment, behaviour — and reach out before customers decide to leave.",
      },
      {
        title: "Save with substance",
        body: "Trained specialists understand the real reason and solve it, not just wave a discount.",
      },
      {
        title: "Systematic win-back",
        body: "Lapsed customers are re-engaged with relevant, human outreach that brings a share of them back.",
      },
      {
        title: "Loyalty that means something",
        body: "We run loyalty and lifecycle touches that build genuine relationships, not just points balances.",
      },
    ],
  },
  workflow: {
    intro: {
      eyebrow: "Workflow",
      title: "How retention is run",
      lead: "From risk signal to saved or won back.",
    },
    steps: [
      {
        marker: "01",
        title: "Identify risk",
        body: "At-risk customers are flagged from usage, sentiment, and behaviour signals.",
      },
      {
        marker: "02",
        title: "Reach out proactively",
        body: "Specialists intervene early with genuine, relevant outreach — before cancellation.",
      },
      {
        marker: "03",
        title: "Save with substance",
        body: "The real reason is understood and solved, retaining the customer on good terms.",
      },
      {
        marker: "04",
        title: "Win back the lapsed",
        body: "Former customers are systematically re-engaged with relevant offers and outreach.",
      },
      {
        marker: "05",
        title: "Nurture loyalty",
        body: "Lifecycle and loyalty touches deepen relationships and pre-empt future churn.",
      },
    ],
  },
  technology: {
    intro: {
      eyebrow: "Technology",
      title: "We work in your retention stack",
      lead: "Our specialists operate in your CRM, lifecycle, and loyalty tools.",
    },
    groups: [
      { name: "CRM & lifecycle", items: ["Salesforce", "HubSpot", "Braze-class lifecycle tools"] },
      {
        name: "Churn signals",
        items: ["Usage & health scores", "Sentiment", "Cancellation triggers"],
      },
      { name: "Loyalty", items: ["Loyalty platforms", "Rewards & offers", "Win-back campaigns"] },
      { name: "Knowledge base", items: ["Save playbooks", "Objection handling", "Guru / Notion"] },
      { name: "Analytics & QA", items: ["Save & win-back rate", "Churn reduction", "LTV impact"] },
    ],
  },
  benefits: {
    intro: {
      eyebrow: "Benefits",
      title: "What you get",
      lead: "Revenue kept and revenue recovered.",
    },
    items: [
      { title: "Lower churn", body: "At-risk customers caught and saved before they leave." },
      { title: "Reactivated revenue", body: "Lapsed customers systematically won back." },
      { title: "Higher lifetime value", body: "Deeper loyalty across the base." },
      { title: "Real save insight", body: "The true reasons for churn, surfaced and acted on." },
    ],
  },
  statement: {
    statement: "A saved customer is worth more than a new one — and costs a fraction to keep.",
    context: "Retention as growth",
  },
  industriesUsing: {
    intro: {
      eyebrow: "Industries",
      title: "Where this service delivers",
      lead: "Wherever repeat revenue drives the model.",
    },
    items: [
      industryItem("saas", "Reduce churn and grow net revenue retention."),
      industryItem("gaming", "Reactivate and retain valuable players.", "Flagship"),
      industryItem("ecommerce", "Turn one-time buyers into repeat customers."),
    ],
  },
  kpis: {
    intro: {
      eyebrow: "The standard we operate to",
      title: "Targets we hold ourselves to",
      lead: "Commitments behind every retention engagement.",
    },
    metrics: [
      { value: 30, suffix: "%+", label: "Save-rate target" },
      { value: 95, suffix: "%+", label: "QA score standard" },
      { value: 24, suffix: "/7", label: "Coverage" },
      { value: 4.7, suffix: "★", decimals: 1, label: "Satisfaction target" },
    ],
  },
  related: {
    intro: {
      eyebrow: "Related services",
      title: "Pairs well with",
      lead: "Capabilities teams deploy alongside retention.",
    },
    items: [
      serviceItem("vip-management", "Protect and grow your highest-value customers."),
      serviceItem("customer-support", "The frontline that feeds retention signals."),
      serviceItem("quality-assurance", "Keep save conversations sharp."),
    ],
  },
  faqs: [
    {
      question: "How do you catch customers before they churn?",
      answer:
        "We watch usage, sentiment, and behaviour signals to flag at-risk customers and reach out before they decide to leave — not after they cancel.",
    },
    {
      question: "Is this just offering discounts?",
      answer:
        "No. Specialists understand the real reason for leaving and solve it. A discount is a last resort, not the whole playbook — which is why saves stick.",
    },
    {
      question: "Do you run win-back campaigns?",
      answer:
        "Yes. Lapsed customers are warm leads, and we systematically re-engage them with relevant, human outreach.",
    },
    {
      question: "Can you help with loyalty programs?",
      answer:
        "Yes. We run lifecycle and loyalty touches that build genuine relationships and pre-empt future churn.",
    },
    {
      question: "How do you measure success?",
      answer:
        "On save rate, win-back rate, churn reduction, and lifetime-value impact — the numbers that actually move revenue.",
    },
    {
      question: "Do you work in our CRM and lifecycle tools?",
      answer: "Yes. Specialists operate in your existing CRM, lifecycle, and loyalty platforms.",
    },
    {
      question: "Will you surface why customers leave?",
      answer:
        "Yes. Save conversations reveal the true reasons for churn, which we feed back so you can fix root causes.",
    },
    {
      question: "How quickly can you launch?",
      answer:
        "We define risk signals and save playbooks with you, certify the team, and ramp proactive outreach and win-back in stages.",
    },
  ],
  cta: {
    title: "Stop the churn you can't see.",
    lead: "Let's build the retention engine behind your revenue — starting with a conversation, not a contract.",
  },
};

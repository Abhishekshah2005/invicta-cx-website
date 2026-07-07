import type { ServiceContent } from "@/types/templates";
import { industryItem, serviceItem } from "./_shared";

export const liveChat: ServiceContent = {
  slug: "live-chat",
  hero: {
    eyebrow: "Services — Live Chat",
    title: "Answer in the moment of intent, or lose it.",
    lead: "Invicta runs real-time chat that converts browsers into buyers and defuses problems before they escalate — staffed by fast, on-brand specialists.",
    imageLabel:
      "A specialist typing quickly on a live-chat interface, calm and sharp, bright modern light — editorial.",
    image: "/assets/services/live-chat/hero/hero.png",
    cta: { label: "Talk to an Expert", href: "/contact" },
    secondaryCta: { label: "See how we operate", href: "/method" },
  },
  overview: {
    intro: {
      eyebrow: "Why it matters",
      title: "Chat is where hesitation becomes a decision",
      lead: "The window between a question and an answer decides whether a customer buys, stays, or leaves.",
    },
    paragraphs: [
      "Live chat sits at the exact point of intent. A shopper weighing a purchase, a user hitting friction, a prospect one answer from converting — all decide in seconds, and silence sends them elsewhere.",
      "We staff chat with specialists who are fast, accurate, and genuinely helpful, so real-time conversations lift conversion and cut escalations instead of just deflecting.",
      "The result is chat that pays for itself: higher conversion, lower cart abandonment, and problems solved before they become tickets.",
    ],
  },
  challenges: {
    intro: {
      eyebrow: "The problem",
      title: "What makes chat hard to do well",
      lead: "Real-time raises the bar on speed, tone, and coverage all at once.",
    },
    items: [
      {
        title: "Slow replies kill the moment",
        body: "In chat, a minute feels like an age. Delay and the visitor closes the tab or the sale.",
        image: "/assets/services/live-chat/challenges/01.png",
      },
      {
        title: "Concurrency strains quality",
        body: "Handling several chats at once without dropping tone or accuracy takes real training, not just a widget.",
        image: "/assets/services/live-chat/challenges/02.png",
      },
      {
        title: "Coverage gaps lose sales",
        body: "Chat offline during peak hours or off-hours is conversion left on the table.",
        image: "/assets/services/live-chat/challenges/03.png",
      },
      {
        title: "Generic answers don't convert",
        body: "Canned responses feel robotic; real recommendations require product knowledge and judgement.",
        image: "/assets/services/live-chat/challenges/04.png",
      },
    ],
  },
  approach: {
    intro: {
      eyebrow: "How Invicta solves it",
      title: "Fast, knowledgeable, human — at scale",
      lead: "Chat specialists trained to convert and resolve, not just reply.",
    },
    points: [
      {
        title: "Sub-minute, on-brand responses",
        body: "Trained agents reply fast and in your voice, so momentum is never lost.",
      },
      {
        title: "Product-fluent recommendations",
        body: "Agents know your catalogue and product well enough to guide, upsell, and genuinely help.",
      },
      {
        title: "Concurrency without quality loss",
        body: "Skilled handling of multiple chats keeps speed high without sacrificing accuracy or tone.",
      },
      {
        title: "Coverage when it counts",
        body: "Staffing aligns to your traffic peaks and off-hours so chat is live when intent is highest.",
      },
    ],
  },
  workflow: {
    intro: {
      eyebrow: "Workflow",
      title: "How a chat converts",
      lead: "From first hello to resolved or closed-won.",
    },
    steps: [
      {
        marker: "01",
        title: "Greet & qualify",
        body: "Fast, warm openers establish intent and context in the first exchange.",
      },
      {
        marker: "02",
        title: "Guide or resolve",
        body: "Agents recommend, troubleshoot, or resolve in real time using your knowledge and product data.",
      },
      {
        marker: "03",
        title: "Convert or capture",
        body: "Where there's intent, we help close; where there isn't yet, we capture the lead cleanly.",
      },
      {
        marker: "04",
        title: "Hand off warm",
        body: "Complex cases pass to the right team or channel with full context, no repetition for the customer.",
      },
      {
        marker: "05",
        title: "Learn from the log",
        body: "Chat transcripts feed insight into objections, friction, and content gaps.",
      },
    ],
  },
  technology: {
    intro: {
      eyebrow: "Technology",
      title: "We work in your chat stack",
      lead: "Our specialists operate inside your existing chat and CRM tools.",
    },
    groups: [
      {
        name: "Chat platforms",
        items: ["Intercom", "Zendesk Messaging", "LiveChat", "In-app widgets"],
      },
      { name: "CRM & context", items: ["Salesforce", "HubSpot", "Customer profiles"] },
      { name: "Knowledge base", items: ["Guru", "Notion", "Product catalogues"] },
      { name: "Commerce & data", items: ["Shopify", "Order & inventory lookups", "Product data"] },
      {
        name: "Analytics & QA",
        items: ["Chat-to-conversion", "Response time", "Interaction scoring"],
      },
    ],
  },
  benefits: {
    intro: { eyebrow: "Benefits", title: "What you get", lead: "A channel that earns its keep." },
    items: [
      {
        title: "Higher conversion",
        body: "Answered at the point of intent, more visitors buy and fewer carts empty.",
      },
      {
        title: "Fewer escalations",
        body: "Problems solved in real time never become tickets or complaints.",
      },
      {
        title: "Qualified leads captured",
        body: "Even non-buyers leave as clean, followed-up leads instead of lost traffic.",
      },
      {
        title: "Live-time insight",
        body: "Chat logs surface objections and friction you can act on.",
      },
    ],
  },
  statement: {
    statement: "In real time, a helpful answer is worth more than a perfect one tomorrow.",
    context: "Speed at the point of intent",
  },
  industriesUsing: {
    intro: {
      eyebrow: "Industries",
      title: "Where this service delivers",
      lead: "Wherever a fast answer moves the number.",
    },
    items: [
      industryItem("ecommerce", "Convert pre-sale chats and rescue carts."),
      industryItem("saas", "In-app help that reduces churn."),
      industryItem("fintech", "Calm, real-time answers on money questions."),
    ],
  },
  kpis: {
    intro: {
      eyebrow: "The standard we operate to",
      title: "Targets we hold ourselves to",
      lead: "Commitments behind every live-chat engagement.",
    },
    metrics: [
      { value: 30, prefix: "<", suffix: "s", label: "Chat response target" },
      { value: 95, suffix: "%+", label: "QA score standard" },
      { value: 24, suffix: "/7", label: "Coverage" },
      { value: 3, suffix: "x", label: "Concurrent chats, typical" },
    ],
  },
  related: {
    intro: {
      eyebrow: "Related services",
      title: "Pairs well with",
      lead: "Capabilities teams deploy alongside live chat.",
    },
    items: [
      serviceItem("customer-support", "The full omnichannel frontline."),
      serviceItem("omnichannel-support", "Unify chat with every other channel."),
      serviceItem("phone-support", "A voice for when chat isn't enough."),
    ],
  },
  faqs: [
    {
      question: "How fast do your agents respond in chat?",
      answer:
        "We operate to a sub-30-second first-response target, so visitors are engaged while their intent is still live.",
    },
    {
      question: "Can agents handle multiple chats at once?",
      answer:
        "Yes. Trained specialists handle several concurrent chats without dropping tone or accuracy — typically around three at a time.",
    },
    {
      question: "Will chat actually increase conversion?",
      answer:
        "Answering at the point of intent is one of the highest-leverage conversion levers there is; product-fluent agents guide hesitant buyers to a decision.",
    },
    {
      question: "Do you work in our chat tool?",
      answer:
        "Yes. We operate inside your existing chat platform and CRM rather than forcing a new tool.",
    },
    {
      question: "Can you cover peak and off-hours?",
      answer:
        "Yes. Staffing aligns to your traffic so chat is live when intent — and conversion — is highest.",
    },
    {
      question: "What happens with complex issues?",
      answer:
        "Agents hand off warm to the right team or channel with full context, so the customer never repeats themselves.",
    },
    {
      question: "How is quality measured?",
      answer:
        "QA scores real chats weekly on speed, accuracy, tone, and whether the reply helped convert or resolve.",
    },
    {
      question: "How quickly can you launch?",
      answer:
        "We learn your product and tone, build the playbooks, certify the team, and ramp in stages with you watching the metrics.",
    },
  ],
  cta: {
    title: "Turn conversations into conversions.",
    lead: "Let's put fast, human chat at your point of intent — starting with a conversation, not a contract.",
  },
};

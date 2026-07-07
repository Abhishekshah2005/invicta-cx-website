import { ArrowUpRight } from "lucide-react";

import { PAGE_META } from "@/lib/routes";
import { Container } from "@/layouts/container";
import { PageShell, PageHero } from "@/components/page";
import { RevealGroup, Reveal } from "@/components/reveal";
import { Eyebrow } from "@/components/eyebrow";
import { cn } from "@/lib/utils";

const meta = PAGE_META.contact!;

/* ── Brand SVG Icons ──────────────────────────────────────────────────── */

function IconPhone() {
  return (
    <svg viewBox="0 0 24 24" fill="none" className="size-6">
      <rect width="24" height="24" rx="6" fill="#25D366" />
      <path
        d="M7.5 4.5h3l1.5 3.75-1.875 1.125A10.5 10.5 0 0 0 13.625 12.375L14.75 10.5 18.5 12v3A1.5 1.5 0 0 1 17 16.5C9.544 16.5 4.5 11.456 4.5 4a1.5 1.5 0 0 1 1.5-1.5h1.5z"
        fill="white"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function IconWhatsApp() {
  return (
    <svg viewBox="0 0 24 24" className="size-6">
      <rect width="24" height="24" rx="6" fill="#25D366" />
      <path
        d="M12 4C7.58 4 4 7.58 4 12c0 1.42.37 2.75 1.02 3.91L4 20l4.22-1.01A7.94 7.94 0 0 0 12 20c4.42 0 8-3.58 8-8s-3.58-8-8-8zm3.94 11.06c-.17.47-.98.9-1.36.96-.35.05-.79.07-1.27-.08-.29-.09-.67-.21-1.15-.41-2.02-.87-3.34-2.9-3.44-3.04-.1-.13-.8-1.07-.8-2.04 0-.97.51-1.45.69-1.65.17-.19.38-.24.51-.24l.36.01c.12 0 .27-.04.43.33l.55 1.37c.05.12.08.27.01.42l-.22.38-.3.35c-.1.1-.21.21-.09.42.12.2.55.9 1.18 1.46.81.72 1.49.94 1.7 1.05.21.1.33.09.46-.05l.35-.41c.14-.18.27-.15.46-.09l1.37.65c.2.1.34.14.39.22.05.08.05.46-.12.93z"
        fill="white"
      />
    </svg>
  );
}

function IconEmail() {
  return (
    <svg viewBox="0 0 24 24" fill="none" className="size-6">
      <rect width="24" height="24" rx="6" fill="#EA4335" />
      <path d="M4 7l8 5.5L20 7" stroke="white" strokeWidth="1.5" strokeLinecap="round" />
      <rect x="4" y="7" width="16" height="11" rx="1" stroke="white" strokeWidth="1.5" />
    </svg>
  );
}

function IconGoogleMaps() {
  return (
    <svg viewBox="0 0 24 24" className="size-6" fill="none">
      <rect width="24" height="24" rx="6" fill="white" />
      {/* Map pin shape */}
      <path
        d="M12 3C9.24 3 7 5.24 7 8c0 4.25 5 10 5 10s5-5.75 5-10c0-2.76-2.24-5-5-5z"
        fill="#EA4335"
      />
      <circle cx="12" cy="8" r="2" fill="white" />
      {/* Google "G" colour stripe at bottom */}
      <path d="M5 18h3l1 2H5z" fill="#FBBC05" />
      <path d="M8 18h3l-1 2H8z" fill="#34A853" />
      <path d="M11 18h3l-1 2h-3z" fill="#4285F4" />
      <path d="M14 18h3l-1 2h-2z" fill="#EA4335" />
    </svg>
  );
}

function IconInstagram() {
  return (
    <svg viewBox="0 0 24 24" className="size-6">
      <defs>
        <radialGradient id="ig-grad" cx="30%" cy="107%" r="150%">
          <stop offset="0%" stopColor="#fdf497" />
          <stop offset="5%" stopColor="#fdf497" />
          <stop offset="45%" stopColor="#fd5949" />
          <stop offset="60%" stopColor="#d6249f" />
          <stop offset="90%" stopColor="#285AEB" />
        </radialGradient>
      </defs>
      <rect width="24" height="24" rx="6" fill="url(#ig-grad)" />
      <rect x="6" y="6" width="12" height="12" rx="3.5" stroke="white" strokeWidth="1.5" fill="none" />
      <circle cx="12" cy="12" r="3" stroke="white" strokeWidth="1.5" fill="none" />
      <circle cx="16.5" cy="7.5" r="1" fill="white" />
    </svg>
  );
}

function IconLinkedIn() {
  return (
    <svg viewBox="0 0 24 24" className="size-6">
      <rect width="24" height="24" rx="4" fill="#0A66C2" />
      <path
        d="M7 9h2v8H7zM8 8a1.25 1.25 0 1 1 0-2.5A1.25 1.25 0 0 1 8 8zM11 9h1.9v1.1h.03C13.25 9.4 14.1 9 15.2 9 17.3 9 18 10.3 18 12.2V17h-2v-4.3c0-.8-.01-1.9-1.15-1.9-1.16 0-1.34.9-1.34 1.84V17H11V9z"
        fill="white"
      />
    </svg>
  );
}

function IconFacebook() {
  return (
    <svg viewBox="0 0 24 24" className="size-6">
      <rect width="24" height="24" rx="4" fill="#1877F2" />
      <path
        d="M15 8h-1.5C13.1 8 13 8.4 13 9v1.5h2l-.3 2H13V18h-2v-5.5H9.5v-2H11V9c0-1.9 1.1-3 3-3H15v2z"
        fill="white"
      />
    </svg>
  );
}

/* ── Card data ────────────────────────────────────────────────────────── */

interface ContactCard {
  BrandIcon: () => JSX.Element;
  label: string;
  value: string;
  description: string;
  href: string;
  image: string;
  external?: boolean;
  actionLabel: string;
}

interface SocialCard {
  BrandIcon: () => JSX.Element;
  label: string;
  handle: string;
  description: string;
  href: string;
  image: string;
}

const CONTACT_CHANNELS: ContactCard[] = [
  {
    BrandIcon: IconPhone,
    label: "Phone",
    value: "+91 7777077049",
    description: "Call us directly — we answer every call personally.",
    href: "tel:+917777077049",
    image: "/assets/contact/phone.png",
    actionLabel: "Call now",
  },
  {
    BrandIcon: IconWhatsApp,
    label: "WhatsApp",
    value: "+91 7777077049",
    description: "Message us on WhatsApp — quick replies, any time of day.",
    href: "https://wa.me/917777077049",
    image: "/assets/contact/whatsapp.png",
    external: true,
    actionLabel: "Chat on WhatsApp",
  },
  {
    BrandIcon: IconEmail,
    label: "Email",
    value: "darshan@invictaindia.in",
    description: "Drop us a line anytime and we'll respond within the hour.",
    href: "mailto:darshan@invictaindia.in",
    image: "/assets/contact/email.png",
    actionLabel: "Send email",
  },
  {
    BrandIcon: IconGoogleMaps,
    label: "Office",
    value: "Madgaon, Goa 403601",
    description:
      "1st Floor, Noronha Dias Business Complex, near KTC Colva Circle, Old Market, Madgaon, Goa.",
    href: "https://maps.google.com/?q=Noronha+Dias+Business+Complex+Madgaon+Goa+403601",
    image: "/assets/contact/office.png",
    external: true,
    actionLabel: "Get directions",
  },
];

const SOCIAL_LINKS: SocialCard[] = [
  {
    BrandIcon: IconInstagram,
    label: "Instagram",
    handle: "@invicta_esolutions",
    description: "Behind-the-scenes, team updates, and customer experience insights.",
    href: "https://www.instagram.com/invicta_esolutions/",
    image: "/assets/contact/instagram.png",
  },
  {
    BrandIcon: IconLinkedIn,
    label: "LinkedIn",
    handle: "invicta-esolutions",
    description: "Industry perspectives, case studies, and company milestones.",
    href: "https://www.linkedin.com/company/invicta-esolutions/",
    image: "/assets/contact/linkedin.png",
  },
  {
    BrandIcon: IconFacebook,
    label: "Facebook",
    handle: "invictaesolutionsindia",
    description: "Community stories, service announcements, and team moments.",
    href: "https://www.facebook.com/invictaesolutionsindia/",
    image: "/assets/contact/facebook.png",
  },
];

/* ── Flip card components ─────────────────────────────────────────────── */

function ContactFlipCard({ card }: { card: ContactCard }) {
  const { BrandIcon } = card;
  return (
    <div className="group block h-72 sm:h-80" style={{ perspective: "900px" }}>
      <div className="relative h-full w-full transition-transform duration-700 ease-in-out [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]">

        {/* Front */}
        <div className="absolute inset-0 rounded-2xl overflow-hidden [backface-visibility:hidden]">
          <img
            src={card.image}
            alt={card.label}
            className="h-full w-full object-cover"
            loading="lazy"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-black/10" />
          <div className="absolute inset-0 flex flex-col justify-between p-6">
            <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-white/10 backdrop-blur-sm ring-1 ring-white/20">
              <BrandIcon />
            </div>
            <div className="flex flex-col gap-1">
              <p className="font-mono text-[10px] tracking-[0.2em] text-white/50 uppercase">
                {card.label}
              </p>
              <h3 className="font-display text-lg font-medium text-white leading-snug">
                {card.value}
              </h3>
            </div>
          </div>
        </div>

        {/* Back */}
        <a
          href={card.href}
          target={card.external ? "_blank" : undefined}
          rel={card.external ? "noopener noreferrer" : undefined}
          className={cn(
            "group/back absolute inset-0 rounded-2xl border border-border bg-card",
            "[backface-visibility:hidden] [transform:rotateY(180deg)]",
            "flex flex-col gap-4 p-6 transition-colors hover:border-brand/40",
          )}
        >
          <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-muted">
            <BrandIcon />
          </div>
          <div className="flex flex-col gap-1 flex-1">
            <p className="font-mono text-[10px] tracking-[0.2em] text-muted-foreground uppercase">
              {card.label}
            </p>
            <p className="font-display text-base font-medium leading-snug">{card.value}</p>
            <p className="mt-2 text-sm text-pretty text-muted-foreground leading-relaxed">
              {card.description}
            </p>
          </div>
          <div className="flex items-center gap-1.5 text-xs font-semibold text-brand">
            {card.actionLabel}
            <ArrowUpRight className="size-3.5 transition-transform duration-200 group-hover/back:translate-x-0.5 group-hover/back:-translate-y-0.5" />
          </div>
        </a>
      </div>
    </div>
  );
}

function SocialFlipCard({ card }: { card: SocialCard }) {
  const { BrandIcon } = card;
  return (
    <div className="group block h-72 sm:h-80" style={{ perspective: "900px" }}>
      <div className="relative h-full w-full transition-transform duration-700 ease-in-out [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]">

        {/* Front */}
        <div className="absolute inset-0 rounded-2xl overflow-hidden [backface-visibility:hidden]">
          <img
            src={card.image}
            alt={card.label}
            className="h-full w-full object-cover"
            loading="lazy"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-black/10" />
          <div className="absolute inset-0 flex flex-col justify-between p-6">
            <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-white/10 backdrop-blur-sm ring-1 ring-white/20">
              <BrandIcon />
            </div>
            <div className="flex flex-col gap-1">
              <p className="font-mono text-[10px] tracking-[0.2em] text-white/50 uppercase">
                {card.label}
              </p>
              <h3 className="font-display text-lg font-medium text-white leading-snug">
                {card.handle}
              </h3>
            </div>
          </div>
        </div>

        {/* Back */}
        <a
          href={card.href}
          target="_blank"
          rel="noopener noreferrer"
          className={cn(
            "group/back absolute inset-0 rounded-2xl border border-border bg-card",
            "[backface-visibility:hidden] [transform:rotateY(180deg)]",
            "flex flex-col gap-4 p-6 transition-colors hover:border-brand/40",
          )}
        >
          <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-muted">
            <BrandIcon />
          </div>
          <div className="flex flex-col gap-1 flex-1">
            <p className="font-mono text-[10px] tracking-[0.2em] text-muted-foreground uppercase">
              {card.label}
            </p>
            <p className="font-display text-base font-medium leading-snug">{card.handle}</p>
            <p className="mt-2 text-sm text-pretty text-muted-foreground leading-relaxed">
              {card.description}
            </p>
          </div>
          <div className="flex items-center gap-1.5 text-xs font-semibold text-brand">
            Follow on {card.label}
            <ArrowUpRight className="size-3.5 transition-transform duration-200 group-hover/back:translate-x-0.5 group-hover/back:-translate-y-0.5" />
          </div>
        </a>
      </div>
    </div>
  );
}

/* ── Page ─────────────────────────────────────────────────────────────── */

export default function ContactPage() {
  return (
    <PageShell>
      <PageHero
        crumbs={[{ label: "Contact" }]}
        eyebrow="Get in touch"
        title={meta.title}
        lead="A specialist who already speaks your world is ready to map the first fix with you. Reach us any way that suits you."
      />

      {/* ── CONTACT CHANNELS ─────────────────────────────────────────── */}
      <section className="border-b border-border bg-muted/40 section-y-md">
        <Container className="flex flex-col gap-10">
          <Reveal>
            <div className="flex flex-col gap-2">
              <Eyebrow>Reach us</Eyebrow>
              <p className="text-muted-foreground text-base max-w-lg">
                Hover each card to see the details — then click to connect directly.
              </p>
            </div>
          </Reveal>
          <RevealGroup className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {CONTACT_CHANNELS.map((card) => (
              <ContactFlipCard key={card.label} card={card} />
            ))}
          </RevealGroup>
        </Container>
      </section>

      {/* ── SOCIAL LINKS ─────────────────────────────────────────────── */}
      <section className="border-b border-border section-y-md">
        <Container className="flex flex-col gap-10">
          <Reveal>
            <div className="flex flex-col gap-2">
              <Eyebrow>Follow us</Eyebrow>
              <p className="text-muted-foreground text-base max-w-lg">
                Stay updated with our latest insights, updates, and behind-the-scenes from the Invicta team.
              </p>
            </div>
          </Reveal>
          <RevealGroup className="grid gap-5 sm:grid-cols-3">
            {SOCIAL_LINKS.map((card) => (
              <SocialFlipCard key={card.label} card={card} />
            ))}
          </RevealGroup>
        </Container>
      </section>

      {/* ── CONVERSATION STARTER ─────────────────────────────────────── */}
      <section className="dark bg-background section-y-lg text-foreground">
        <Container>
          <div className="grid gap-12 lg:grid-cols-2 lg:gap-20 lg:items-center">
            <div className="flex flex-col gap-6">
              <Reveal>
                <Eyebrow className="text-brand">What happens next</Eyebrow>
              </Reveal>
              <Reveal>
                <h2 className="font-display text-fluid-2xl font-medium">
                  One conversation.<br />Your entire operation, unlocked.
                </h2>
              </Reveal>
              <Reveal>
                <p className="text-lg text-foreground/60 text-pretty">
                  Tell us where your customer experience is breaking down. We'll map the first fix with you — no pitch deck, no contract pressure. Just a specialist who already understands your world.
                </p>
              </Reveal>
              <Reveal className="flex flex-wrap gap-3 pt-2">
                <a
                  href="mailto:darshan@invictaindia.in"
                  className={cn(
                    "inline-flex items-center gap-2 rounded-full",
                    "bg-brand px-7 py-3.5 text-sm font-semibold tracking-wide text-white",
                    "transition-all duration-200 hover:bg-brand/90 hover:scale-[1.02]",
                  )}
                >
                  Send us an email
                  <ArrowUpRight className="size-4" />
                </a>
                <a
                  href="tel:+917777077049"
                  className={cn(
                    "inline-flex items-center gap-2 rounded-full border border-foreground/20",
                    "px-7 py-3.5 text-sm font-semibold tracking-wide text-foreground",
                    "transition-all duration-200 hover:border-foreground/40 hover:bg-foreground/5",
                  )}
                >
                  Call us now
                </a>
              </Reveal>
            </div>

            <Reveal>
              <div className="grid grid-cols-2 gap-px overflow-hidden rounded-2xl border border-foreground/10 bg-foreground/10">
                {[
                  { value: "<60s", label: "First response time" },
                  { value: "99%+", label: "CSAT score" },
                  { value: "24/7", label: "Coverage" },
                  { value: "15+", label: "Industries served" },
                ].map((stat) => (
                  <div key={stat.label} className="flex flex-col gap-1.5 bg-background p-7">
                    <span className="font-display text-3xl md:text-4xl">{stat.value}</span>
                    <span className="font-mono text-[10px] tracking-[0.18em] text-foreground/40 uppercase">
                      {stat.label}
                    </span>
                  </div>
                ))}
              </div>
            </Reveal>
          </div>
        </Container>
      </section>
    </PageShell>
  );
}

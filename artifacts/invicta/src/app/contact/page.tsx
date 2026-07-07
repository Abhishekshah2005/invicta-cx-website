import { Phone, Mail, MapPin, Instagram, Linkedin, Facebook, ArrowUpRight } from "lucide-react";

import { PAGE_META } from "@/lib/routes";
import { Container } from "@/layouts/container";
import { PageShell, PageHero } from "@/components/page";
import { RevealGroup, Reveal } from "@/components/reveal";
import { Eyebrow } from "@/components/eyebrow";
import { cn } from "@/lib/utils";

const meta = PAGE_META.contact!;

interface ContactCard {
  icon: React.ElementType;
  label: string;
  value: string;
  description: string;
  href: string;
  image: string;
  external?: boolean;
}

interface SocialCard {
  icon: React.ElementType;
  label: string;
  handle: string;
  description: string;
  href: string;
  image: string;
}

const CONTACT_CHANNELS: ContactCard[] = [
  {
    icon: Phone,
    label: "Phone",
    value: "+91 7777077049",
    description: "Call us directly — we answer.",
    href: "tel:+917777077049",
    image: "/assets/contact/phone.png",
  },
  {
    icon: Mail,
    label: "Email",
    value: "darshan@invictaindia.in",
    description: "Drop us a line anytime and we'll respond within the hour.",
    href: "mailto:darshan@invictaindia.in",
    image: "/assets/contact/email.png",
  },
  {
    icon: MapPin,
    label: "Office",
    value: "Madgaon, Goa 403601",
    description:
      "1st Floor, Noronha Dias Business Complex, near KTC Colva Circle, Old Market, Madgaon, Goa.",
    href: "https://maps.google.com/?q=Noronha+Dias+Business+Complex+Madgaon+Goa+403601",
    image: "/assets/contact/office.png",
    external: true,
  },
];

const SOCIAL_LINKS: SocialCard[] = [
  {
    icon: Instagram,
    label: "Instagram",
    handle: "@invicta_esolutions",
    description: "Behind-the-scenes, team updates, and customer experience insights.",
    href: "https://www.instagram.com/invicta_esolutions/",
    image: "/assets/contact/instagram.png",
  },
  {
    icon: Linkedin,
    label: "LinkedIn",
    handle: "invicta-esolutions",
    description: "Industry perspectives, case studies, and company milestones.",
    href: "https://www.linkedin.com/company/invicta-esolutions/",
    image: "/assets/contact/linkedin.png",
  },
  {
    icon: Facebook,
    label: "Facebook",
    handle: "invictaesolutionsindia",
    description: "Community stories, service announcements, and team moments.",
    href: "https://www.facebook.com/invictaesolutionsindia/",
    image: "/assets/contact/facebook.png",
  },
];

function ContactFlipCard({ card }: { card: ContactCard }) {
  const Icon = card.icon;
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
            <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-brand/20 backdrop-blur-sm border border-brand/30">
              <Icon className="size-5 text-brand" />
            </div>
            <div className="flex flex-col gap-1">
              <p className="font-mono text-[10px] tracking-[0.2em] text-brand uppercase">
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
            "group/back absolute inset-0 rounded-2xl border border-brand/25 bg-card",
            "[backface-visibility:hidden] [transform:rotateY(180deg)]",
            "flex flex-col gap-4 p-6 transition-colors hover:border-brand/50",
          )}
        >
          <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-brand/10">
            <Icon className="size-5 text-brand" />
          </div>
          <div className="flex flex-col gap-1 flex-1">
            <p className="font-mono text-[10px] tracking-[0.2em] text-brand uppercase">
              {card.label}
            </p>
            <p className="font-display text-base font-medium leading-snug">{card.value}</p>
            <p className="mt-2 text-sm text-pretty text-muted-foreground leading-relaxed">
              {card.description}
            </p>
          </div>
          <div className="flex items-center gap-1.5 text-xs font-semibold text-brand">
            {card.external ? "Get directions" : card.icon === Phone ? "Call now" : "Send email"}
            <ArrowUpRight className="size-3.5 transition-transform duration-200 group-hover/back:translate-x-0.5 group-hover/back:-translate-y-0.5" />
          </div>
        </a>
      </div>
    </div>
  );
}

function SocialFlipCard({ card }: { card: SocialCard }) {
  const Icon = card.icon;
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
            <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-brand/20 backdrop-blur-sm border border-brand/30">
              <Icon className="size-5 text-brand" />
            </div>
            <div className="flex flex-col gap-1">
              <p className="font-mono text-[10px] tracking-[0.2em] text-brand uppercase">
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
            "group/back absolute inset-0 rounded-2xl border border-brand/25 bg-card",
            "[backface-visibility:hidden] [transform:rotateY(180deg)]",
            "flex flex-col gap-4 p-6 transition-colors hover:border-brand/50",
          )}
        >
          <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-brand/10">
            <Icon className="size-5 text-brand" />
          </div>
          <div className="flex flex-col gap-1 flex-1">
            <p className="font-mono text-[10px] tracking-[0.2em] text-brand uppercase">
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
          <RevealGroup className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
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
            {/* Left — copy */}
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

            {/* Right — quick-facts */}
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

import { Phone, Mail, MapPin, Instagram, Linkedin, Facebook, ArrowUpRight } from "lucide-react";

import { ROUTES, PAGE_META } from "@/lib/routes";
import { Container } from "@/layouts/container";
import { PageShell, PageHero } from "@/components/page";
import { Reveal } from "@/components/reveal";
import { Eyebrow } from "@/components/eyebrow";
import { cn } from "@/lib/utils";

const meta = PAGE_META.contact!;

const CONTACT_CHANNELS = [
  {
    icon: Phone,
    label: "Phone",
    value: "+91 7777077049",
    href: "tel:+917777077049",
    description: "Call us directly — we answer.",
  },
  {
    icon: Mail,
    label: "Email",
    value: "darshan@invictaindia.in",
    href: "mailto:darshan@invictaindia.in",
    description: "Drop us a line anytime.",
  },
  {
    icon: MapPin,
    label: "Office",
    value: "1st Floor, Noronha Dias Business Complex, near KTC Colva Circle, Old Market, Madgaon, Goa 403601",
    href: "https://maps.google.com/?q=Noronha+Dias+Business+Complex+Madgaon+Goa+403601",
    description: "Visit us in Goa, India.",
  },
];

const SOCIAL_LINKS = [
  {
    icon: Instagram,
    label: "Instagram",
    href: "https://www.instagram.com/invicta_esolutions/",
    handle: "@invicta_esolutions",
  },
  {
    icon: Linkedin,
    label: "LinkedIn",
    href: "https://www.linkedin.com/company/invicta-esolutions/",
    handle: "invicta-esolutions",
  },
  {
    icon: Facebook,
    label: "Facebook",
    href: "https://www.facebook.com/invictaesolutionsindia/",
    handle: "invictaesolutionsindia",
  },
];

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
      <section className="border-b border-border section-y-md">
        <Container>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {CONTACT_CHANNELS.map((ch) => {
              const Icon = ch.icon;
              return (
                <Reveal key={ch.label}>
                  <a
                    href={ch.href}
                    target={ch.icon === MapPin ? "_blank" : undefined}
                    rel={ch.icon === MapPin ? "noopener noreferrer" : undefined}
                    className={cn(
                      "group flex flex-col gap-5 rounded-2xl border border-border p-7",
                      "bg-background transition-all duration-300",
                      "hover:border-brand/40 hover:bg-brand/[0.03] hover:shadow-lg hover:shadow-brand/5",
                    )}
                  >
                    <div className="flex items-start justify-between">
                      <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-brand/10">
                        <Icon className="size-5 text-brand" />
                      </div>
                      <ArrowUpRight className="size-4 text-muted-foreground/40 transition-all duration-300 group-hover:text-brand group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                    </div>

                    <div className="flex flex-col gap-1.5">
                      <p className="font-mono text-[10px] tracking-[0.2em] text-muted-foreground uppercase">
                        {ch.label}
                      </p>
                      <p className="text-base font-medium text-foreground leading-snug">
                        {ch.value}
                      </p>
                    </div>

                    <p className="text-sm text-muted-foreground">{ch.description}</p>
                  </a>
                </Reveal>
              );
            })}
          </div>
        </Container>
      </section>

      {/* ── SOCIAL LINKS ─────────────────────────────────────────────── */}
      <section className="border-b border-border section-y-md">
        <Container>
          <div className="flex flex-col gap-10">
            <Reveal>
              <div className="flex flex-col gap-2">
                <Eyebrow>Follow us</Eyebrow>
                <p className="text-muted-foreground text-base max-w-lg">
                  Stay updated with our latest insights, updates, and behind-the-scenes from the Invicta team.
                </p>
              </div>
            </Reveal>

            <div className="grid gap-4 sm:grid-cols-3">
              {SOCIAL_LINKS.map((s) => {
                const Icon = s.icon;
                return (
                  <Reveal key={s.label}>
                    <a
                      href={s.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={cn(
                        "group flex items-center gap-4 rounded-2xl border border-border p-6",
                        "bg-background transition-all duration-300",
                        "hover:border-brand/40 hover:bg-brand/[0.03]",
                      )}
                    >
                      <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-brand/10">
                        <Icon className="size-5 text-brand" />
                      </div>
                      <div className="flex flex-col gap-0.5 min-w-0">
                        <p className="font-medium text-foreground text-sm">{s.label}</p>
                        <p className="truncate font-mono text-xs text-muted-foreground">
                          {s.handle}
                        </p>
                      </div>
                      <ArrowUpRight className="ml-auto size-4 shrink-0 text-muted-foreground/40 transition-all duration-300 group-hover:text-brand group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                    </a>
                  </Reveal>
                );
              })}
            </div>
          </div>
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
                  <div
                    key={stat.label}
                    className="flex flex-col gap-1.5 bg-background p-7"
                  >
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

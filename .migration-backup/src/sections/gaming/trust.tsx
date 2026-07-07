import {
  ClipboardCheck,
  CreditCard,
  HandHeart,
  ScanEye,
  ShieldAlert,
  ShieldCheck,
  type LucideIcon,
} from "lucide-react";

import { Section } from "@/layouts/section";
import { Container } from "@/layouts/container";
import { SectionHeading } from "@/components/section-heading";
import { Reveal, RevealGroup } from "@/components/reveal";
import { TRUST } from "@/content/gaming";

const ICONS: LucideIcon[] = [
  ShieldCheck,
  ScanEye,
  ShieldAlert,
  CreditCard,
  HandHeart,
  ClipboardCheck,
];

/** Trust & Safety — the guardian narrative. Dark register. */
export function GamingTrust() {
  return (
    <Section className="dark bg-background text-foreground">
      <Container className="flex flex-col gap-12">
        <Reveal>
          <SectionHeading eyebrow={TRUST.eyebrow} title={TRUST.title} lead={TRUST.lead} as="h2" />
        </Reveal>

        <RevealGroup className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {TRUST.items.map((item, i) => {
            const Icon = ICONS[i] ?? ShieldCheck;
            return (
              <article
                key={item.title}
                className="flex flex-col gap-4 rounded-2xl border border-border bg-card/40 p-7 transition-colors duration-300 hover:border-brand/30"
              >
                <span className="flex size-10 items-center justify-center rounded-xl bg-brand/15 text-brand">
                  <Icon className="size-5" />
                </span>
                <h3 className="font-display text-lg font-medium">{item.title}</h3>
                <p className="text-sm text-pretty text-muted-foreground">{item.body}</p>
              </article>
            );
          })}
        </RevealGroup>
      </Container>
    </Section>
  );
}

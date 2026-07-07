import { Mail, MessageCircle, Phone, Users, Wrench, type LucideIcon } from "lucide-react";

import { Section } from "@/layouts/section";
import { Container } from "@/layouts/container";
import { SectionHeading } from "@/components/section-heading";
import { Reveal, RevealGroup } from "@/components/reveal";
import { SUPPORT } from "@/content/gaming";

const ICONS: LucideIcon[] = [MessageCircle, Mail, Phone, Wrench, Users];

/** End-to-end player support channels. Light register. */
export function GamingSupport() {
  return (
    <Section className="bg-muted/40">
      <Container className="flex flex-col gap-12">
        <Reveal>
          <SectionHeading
            eyebrow={SUPPORT.eyebrow}
            title={SUPPORT.title}
            lead={SUPPORT.lead}
            as="h2"
          />
        </Reveal>

        <RevealGroup className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {SUPPORT.channels.map((channel, i) => {
            const Icon = ICONS[i] ?? MessageCircle;
            return (
              <article
                key={channel.title}
                className="flex flex-col gap-4 rounded-2xl border border-border bg-background p-7 transition-colors duration-300 hover:border-foreground/20"
              >
                <span className="flex size-10 items-center justify-center rounded-xl bg-brand/10 text-brand">
                  <Icon className="size-5" />
                </span>
                <h3 className="font-display text-lg font-medium">{channel.title}</h3>
                <p className="text-sm text-pretty text-muted-foreground">{channel.body}</p>
              </article>
            );
          })}
        </RevealGroup>
      </Container>
    </Section>
  );
}

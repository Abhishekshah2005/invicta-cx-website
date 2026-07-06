import type { Metadata } from "next";

import { ROUTES, PAGE_META } from "@/lib/routes";
import { createMetadata } from "@/lib/seo";
import { Section } from "@/layouts/section";
import { Container } from "@/layouts/container";
import { Reveal } from "@/components/reveal";
import { PageShell, PageHero } from "@/components/page";

const meta = PAGE_META.privacy!;

export const metadata: Metadata = createMetadata({
  title: meta.title,
  description: meta.description,
  path: ROUTES.privacy,
  robots: { index: false, follow: true },
});

export default function PrivacyPage() {
  return (
    <PageShell>
      <PageHero
        crumbs={[{ label: "Privacy" }]}
        eyebrow="Legal"
        title={meta.title}
        lead={meta.description}
      />
      <Section>
        <Container>
          <Reveal className="max-w-2xl">
            <p className="text-lg text-pretty text-muted-foreground">
              The full privacy policy is being prepared with counsel and will be published here.
              This page is part of the site architecture and routes correctly today.
            </p>
          </Reveal>
        </Container>
      </Section>
    </PageShell>
  );
}

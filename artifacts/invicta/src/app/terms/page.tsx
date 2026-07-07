import type { Metadata } from "next";

import { ROUTES, PAGE_META } from "@/lib/routes";
import { createMetadata } from "@/lib/seo";
import { Section } from "@/layouts/section";
import { Container } from "@/layouts/container";
import { Reveal } from "@/components/reveal";
import { PageShell, PageHero } from "@/components/page";

const meta = PAGE_META.terms!;

export const metadata: Metadata = createMetadata({
  title: meta.title,
  description: meta.description,
  path: ROUTES.terms,
  robots: { index: false, follow: true },
});

export default function TermsPage() {
  return (
    <PageShell>
      <PageHero
        crumbs={[{ label: "Terms" }]}
        eyebrow="Legal"
        title={meta.title}
        lead={meta.description}
      />
      <Section>
        <Container>
          <Reveal className="max-w-2xl">
            <p className="text-lg text-pretty text-muted-foreground">
              The full terms of service are being prepared with counsel and will be published here.
              This page is part of the site architecture and routes correctly today.
            </p>
          </Reveal>
        </Container>
      </Section>
    </PageShell>
  );
}

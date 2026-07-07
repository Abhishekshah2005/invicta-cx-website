import type { Metadata } from "next";

import { ROUTES, SERVICES, PAGE_META } from "@/lib/routes";
import { createMetadata } from "@/lib/seo";
import { PageShell, PageHero, SharedCta, CardGrid, type CardItem } from "@/components/page";

const meta = PAGE_META.services!;

export const metadata: Metadata = createMetadata({
  title: meta.title,
  description: meta.description,
  path: ROUTES.services,
});

const items: CardItem[] = SERVICES.map((service) => ({
  href: `${ROUTES.services}/${service.slug}`,
  label: service.label,
  description: service.description,
}));

export default function ServicesPage() {
  return (
    <PageShell>
      <PageHero
        crumbs={[{ label: "Services" }]}
        eyebrow="What we do"
        title={meta.title}
        lead={meta.description}
      />
      <CardGrid items={items} />
      <SharedCta />
    </PageShell>
  );
}

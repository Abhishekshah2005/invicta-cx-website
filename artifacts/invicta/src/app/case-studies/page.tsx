import type { Metadata } from "next";

import { ROUTES, CASE_STUDIES, PAGE_META } from "@/lib/routes";
import { createMetadata } from "@/lib/seo";
import { PageShell, PageHero, SharedCta, CardGrid, type CardItem } from "@/components/page";

const meta = PAGE_META["case-studies"]!;

export const metadata: Metadata = createMetadata({
  title: meta.title,
  description: meta.description,
  path: ROUTES.caseStudies,
});

const items: CardItem[] = CASE_STUDIES.map((study, _i, arr) => ({
  href: `${ROUTES.caseStudies}/${study.slug}`,
  label: study.label,
  description: study.description,
  meta: "Case Study",
  featured: arr.length === 1,
  image: `/assets/home/proof/lunaland.png`,
}));

export default function CaseStudiesPage() {
  return (
    <PageShell>
      <PageHero
        crumbs={[{ label: "Case Studies" }]}
        eyebrow="Proof"
        title={meta.title}
        lead={meta.description}
      />
      <CardGrid items={items} columns={2} />
      <SharedCta />
    </PageShell>
  );
}

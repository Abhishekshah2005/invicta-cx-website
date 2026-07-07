import type { Metadata } from "next";

import { ROUTES, PAGE_META } from "@/lib/routes";
import { createMetadata } from "@/lib/seo";
import { PagePlaceholder } from "@/components/page";

const meta = PAGE_META.about!;

export const metadata: Metadata = createMetadata({
  title: meta.title,
  description: meta.description,
  path: ROUTES.about,
});

export default function AboutPage() {
  return (
    <PagePlaceholder
      crumbs={[{ label: "About" }]}
      eyebrow="Who we are"
      title={meta.title}
      lead={meta.description}
    />
  );
}

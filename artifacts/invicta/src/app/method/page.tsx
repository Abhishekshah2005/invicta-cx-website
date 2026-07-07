import type { Metadata } from "next";

import { ROUTES, PAGE_META } from "@/lib/routes";
import { createMetadata } from "@/lib/seo";
import { PagePlaceholder } from "@/components/page";

const meta = PAGE_META.method!;

export const metadata: Metadata = createMetadata({
  title: meta.title,
  description: meta.description,
  path: ROUTES.method,
});

export default function MethodPage() {
  return (
    <PagePlaceholder
      crumbs={[{ label: "Method" }]}
      eyebrow="How we work"
      title={meta.title}
      lead={meta.description}
    />
  );
}

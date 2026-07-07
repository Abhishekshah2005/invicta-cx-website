import type { Metadata } from "next";

import { ROUTES, PAGE_META } from "@/lib/routes";
import { createMetadata } from "@/lib/seo";
import { PagePlaceholder } from "@/components/page";

const meta = PAGE_META.careers!;

export const metadata: Metadata = createMetadata({
  title: meta.title,
  description: meta.description,
  path: ROUTES.careers,
});

export default function CareersPage() {
  return (
    <PagePlaceholder
      crumbs={[{ label: "Careers" }]}
      eyebrow="Join us"
      title={meta.title}
      lead={meta.description}
      cta={{
        title: "Build a career defending great brands.",
        lead: "We're always looking for people with judgement and empathy. Start a conversation.",
      }}
    />
  );
}

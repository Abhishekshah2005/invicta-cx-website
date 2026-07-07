import type { Metadata } from "next";

import { ROUTES, PAGE_META } from "@/lib/routes";
import { createMetadata } from "@/lib/seo";
import { PageShell, PageHero, SharedCta } from "@/components/page";

const meta = PAGE_META.contact!;

export const metadata: Metadata = createMetadata({
  title: meta.title,
  description: meta.description,
  path: ROUTES.contact,
});

// The contact page ends on the conversion CTA itself, so it uses the shell
// directly rather than the placeholder's "back to parent" scaffold.
export default function ContactPage() {
  return (
    <PageShell>
      <PageHero
        crumbs={[{ label: "Contact" }]}
        eyebrow="Start a conversation"
        title={meta.title}
        lead={meta.description}
      />
      <SharedCta
        title="Tell us about your customers."
        lead="Share where experience is breaking down, and a specialist who already speaks your world will map the first fix with you."
      />
    </PageShell>
  );
}

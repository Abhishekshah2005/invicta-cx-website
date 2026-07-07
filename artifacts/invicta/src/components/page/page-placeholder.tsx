import { Link } from "wouter";
import { ArrowLeft } from "lucide-react";

import { Section } from "@/layouts/section";
import { Container } from "@/layouts/container";
import { Reveal } from "@/components/reveal";
import { PageShell } from "./page-shell";
import { PageHero } from "./page-hero";
import { SharedCta } from "./shared-cta";
import type { Crumb } from "./breadcrumbs";

interface PagePlaceholderProps {
  crumbs: Crumb[];
  eyebrow?: string;
  title: string;
  lead?: string;
  parent?: { label: string; href: string };
  cta?: { title?: string; lead?: string };
}

/**
 * Production-ready scaffold for a leaf page whose detailed content lands in a
 * later phase. Renders the full page chrome, an editorial header, an intentional
 * (not broken) placeholder note, and the shared CTA — so navigation and routing
 * work end-to-end today.
 */
export function PagePlaceholder({
  crumbs,
  eyebrow,
  title,
  lead,
  parent,
  cta,
}: PagePlaceholderProps) {
  return (
    <PageShell>
      <PageHero crumbs={crumbs} eyebrow={eyebrow} title={title} lead={lead} />

      <Section space="compact">
        <Container>
          <Reveal className="flex max-w-2xl flex-col gap-5">
            <p className="text-lg text-pretty text-muted-foreground">
              This page is part of the Invicta site architecture. Its full content is being crafted
              with the same care as our flagship pages — in the meantime, everything routes and
              works end to end.
            </p>
            {parent ? (
              <Link
                href={parent.href}
                className="group inline-flex items-center gap-1.5 text-sm font-medium text-foreground transition-colors hover:text-brand"
              >
                <ArrowLeft className="size-4 transition-transform group-hover:-translate-x-0.5" />
                Back to {parent.label}
              </Link>
            ) : null}
          </Reveal>
        </Container>
      </Section>

      <SharedCta title={cta?.title} lead={cta?.lead} />
    </PageShell>
  );
}

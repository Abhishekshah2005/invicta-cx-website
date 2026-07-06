import { PageShell } from "@/components/page/page-shell";
import { SharedCta } from "@/components/page/shared-cta";
import { Pill } from "@/components/pill";
import type { Crumb } from "@/components/page/breadcrumbs";
import type { InsightContent } from "@/types/templates";

import { TemplateHero } from "./template-hero";
import { ArticleBody } from "./article-body";
import { RelatedGrid } from "./related-grid";
import { AuthorCard } from "./author-card";

function formatDate(iso: string): string {
  const date = new Date(iso);
  if (Number.isNaN(date.getTime())) return iso;
  return date.toLocaleDateString("en-US", { year: "numeric", month: "long", day: "numeric" });
}

/**
 * MASTER INSIGHT (ARTICLE) TEMPLATE.
 * Section order: Hero (with byline meta) → Article → Related Articles → Author →
 * CTA → Footer. Emits `Article` structured data from the same content, so every
 * insight is a rich-result candidate.
 */
export function InsightTemplate({ content, crumbs }: { content: InsightContent; crumbs: Crumb[] }) {
  const { hero, author } = content;

  const meta = (
    <div className="flex flex-wrap items-center gap-3 text-sm text-muted-foreground">
      {hero.category ? <Pill>{hero.category}</Pill> : null}
      <time dateTime={hero.date}>{formatDate(hero.date)}</time>
      {hero.readingTime ? (
        <>
          <span aria-hidden>·</span>
          <span>{hero.readingTime}</span>
        </>
      ) : null}
    </div>
  );

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: hero.title,
    description: hero.lead,
    datePublished: hero.date,
    author: { "@type": "Person", name: author.name, jobTitle: author.role },
    publisher: { "@type": "Organization", name: "Invicta" },
  };

  return (
    <PageShell>
      <TemplateHero crumbs={crumbs} hero={hero} meta={meta} />
      <ArticleBody blocks={content.body} />
      <RelatedGrid intro={content.related.intro} items={content.related.items} tone="plain" />
      <AuthorCard author={author} />
      <SharedCta {...content.cta} />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
    </PageShell>
  );
}

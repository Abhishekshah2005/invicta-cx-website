import { Section } from "@/layouts/section";
import { Container } from "@/layouts/container";
import { Reveal } from "@/components/reveal";
import { ImagePlaceholder } from "@/components/media/image-placeholder";
import type { Author } from "@/types/templates";

/**
 * Insight "Author" block — a byline with portrait and short bio. Builds trust
 * (E-E-A-T) and can back `author` structured data. Portrait falls back to a
 * branded placeholder until real headshots land.
 */
export function AuthorCard({ author }: { author: Author }) {
  return (
    <Section space="compact" className="bg-muted/40">
      <Container>
        <Reveal className="mx-auto flex max-w-2xl flex-col gap-5 rounded-2xl border border-border p-6 sm:flex-row sm:items-center md:p-8">
          <div className="w-20 shrink-0 sm:w-24">
            <ImagePlaceholder
              tone="ink"
              ratio="1 / 1"
              label={author.imageLabel ?? author.name}
              className="rounded-full"
            />
          </div>
          <div className="flex flex-col gap-1.5">
            <p className="font-mono text-xs tracking-[0.16em] text-muted-foreground uppercase">
              Written by
            </p>
            <p className="font-display text-xl font-medium">{author.name}</p>
            <p className="text-sm text-brand">{author.role}</p>
            {author.bio ? (
              <p className="mt-1 text-sm text-pretty text-muted-foreground">{author.bio}</p>
            ) : null}
          </div>
        </Reveal>
      </Container>
    </Section>
  );
}

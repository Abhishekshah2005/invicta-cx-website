import { cn } from "@/lib/utils";
import { Reveal } from "@/components/reveal";
import { SectionHeading } from "@/components/section-heading";
import type { SectionIntro } from "@/types/templates";

/**
 * Animated section header — the canonical eyebrow → serif title → lead, wrapped
 * in a GSAP reveal. Every template section opens with this so headings share one
 * rhythm and one entrance.
 */
export function Intro({
  intro,
  align = "left",
  className,
}: {
  intro: SectionIntro;
  align?: "left" | "center";
  className?: string;
}) {
  return (
    <Reveal className={className}>
      <SectionHeading eyebrow={intro.eyebrow} title={intro.title} lead={intro.lead} align={align} />
    </Reveal>
  );
}

/**
 * Editorial body copy — a stack of paragraphs at a comfortable measure. Reveals
 * as one block.
 */
export function Prose({ paragraphs, className }: { paragraphs: string[]; className?: string }) {
  return (
    <Reveal className={cn("flex max-w-2xl flex-col gap-4", className)}>
      {paragraphs.map((paragraph, index) => (
        <p key={index} className="text-lg leading-relaxed text-pretty text-muted-foreground">
          {paragraph}
        </p>
      ))}
    </Reveal>
  );
}

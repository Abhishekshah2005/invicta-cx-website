import { Section } from "@/layouts/section";
import { Container } from "@/layouts/container";
import { Reveal } from "@/components/reveal";
import { ImagePlaceholder } from "@/components/media/image-placeholder";
import type { ArticleBlock } from "@/types/templates";

/**
 * Insight article renderer — maps structured `ArticleBlock`s to typographic
 * elements at a single reading measure. Keeping the body structured (not raw
 * HTML) means consistent rhythm and safe, schema-friendly content. Each block
 * reveals as it enters view.
 */
export function ArticleBody({ blocks }: { blocks: ArticleBlock[] }) {
  return (
    <Section space="compact" className="pt-0!">
      <Container>
        <div className="mx-auto flex max-w-2xl flex-col gap-6">
          {blocks.map((block, index) => (
            <Reveal key={index}>{renderBlock(block)}</Reveal>
          ))}
        </div>
      </Container>
    </Section>
  );
}

function renderBlock(block: ArticleBlock) {
  switch (block.type) {
    case "heading":
      return (
        <h2 className="mt-4 font-display text-fluid-lg font-medium text-balance">{block.text}</h2>
      );
    case "paragraph":
      return <p className="text-lg leading-relaxed text-pretty">{block.text}</p>;
    case "quote":
      return (
        <blockquote className="my-2 border-l-2 border-brand pl-6">
          <p className="font-display text-xl font-medium text-balance italic">{block.text}</p>
          {block.attribution ? (
            <cite className="mt-2 block font-mono text-sm text-muted-foreground not-italic">
              — {block.attribution}
            </cite>
          ) : null}
        </blockquote>
      );
    case "list":
      return (
        <ul className="flex flex-col gap-2 pl-1">
          {block.items.map((item, index) => (
            <li key={index} className="flex gap-3 text-lg leading-relaxed">
              <span className="mt-3 size-1.5 shrink-0 rounded-full bg-brand" aria-hidden />
              <span className="text-pretty">{item}</span>
            </li>
          ))}
        </ul>
      );
    case "image":
      return (
        <figure className="my-2 flex flex-col gap-3">
          <ImagePlaceholder tone="ink" ratio="16 / 9" label={block.imageLabel} />
          {block.caption ? (
            <figcaption className="text-center text-sm text-muted-foreground">
              {block.caption}
            </figcaption>
          ) : null}
        </figure>
      );
    default:
      return null;
  }
}

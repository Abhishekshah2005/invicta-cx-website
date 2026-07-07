import { Section } from "@/layouts/section";
import { Container } from "@/layouts/container";
import { RevealGroup } from "@/components/reveal";
import { Intro } from "./parts";
import type { SectionIntro, TitledPoint } from "@/types/templates";

interface ChallengeGridProps {
  intro: SectionIntro;
  items: TitledPoint[];
  /** Columns at `md`. Defaults to 3; use 2 for longer bodies. */
  columns?: 2 | 3;
  /**
   * Fallback image used when an item has no `image` field of its own.
   * Typically `content.hero.image` from the parent template.
   */
  image?: string;
}

/**
 * Problem-framing grid — the "here's what's hard" section. 3-D flip cards:
 * front shows a unique per-challenge photograph with numbered title overlay;
 * back reveals the full challenge description. Shared by Industry "Challenges"
 * and Service "Business Challenges".
 */
export function ChallengeGrid({ intro, items, columns = 3, image }: ChallengeGridProps) {
  return (
    <Section space="compact" className="bg-muted/40">
      <Container className="flex flex-col gap-12">
        <Intro intro={intro} />
        <RevealGroup
          className={
            columns === 3 ? "grid gap-4 sm:grid-cols-2 lg:grid-cols-3" : "grid gap-4 md:grid-cols-2"
          }
        >
          {items.map((item, index) => {
            const src = item.image ?? image;
            return src ? (
              <ChallengeFlipCard key={index} item={item} index={index} image={src} />
            ) : (
              <ChallengePlainCard key={index} item={item} index={index} />
            );
          })}
        </RevealGroup>
      </Container>
    </Section>
  );
}

/** Flip card variant — used when an image is available. */
function ChallengeFlipCard({
  item,
  index,
  image,
}: {
  item: TitledPoint;
  index: number;
  image: string;
}) {
  const num = String(index + 1).padStart(2, "0");
  return (
    <div className="group block h-64 sm:h-72" style={{ perspective: "900px" }}>
      <div className="relative h-full w-full transition-transform duration-700 ease-in-out [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]">
        {/* ── Front face ── */}
        <div className="absolute inset-0 rounded-2xl overflow-hidden [backface-visibility:hidden]">
          <img
            src={image}
            alt={item.title}
            className="h-full w-full object-cover"
            loading="lazy"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-black/20" />
          <div className="absolute inset-0 flex flex-col justify-between p-5 sm:p-6">
            <span className="font-mono text-xs tracking-[0.2em] text-brand">{num}</span>
            <h3 className="font-display text-lg font-medium text-white leading-snug">
              {item.title}
            </h3>
          </div>
        </div>

        {/* ── Back face ── */}
        <div className="absolute inset-0 rounded-2xl border border-brand/25 bg-card [backface-visibility:hidden] [transform:rotateY(180deg)] flex flex-col gap-4 p-5 sm:p-6">
          <span className="font-mono text-xs tracking-[0.2em] text-brand">{num}</span>
          <h3 className="font-display text-base font-medium leading-snug">{item.title}</h3>
          <p className="text-sm text-pretty text-muted-foreground leading-relaxed">{item.body}</p>
        </div>
      </div>
    </div>
  );
}

/** Plain card fallback — used when no image is available. */
function ChallengePlainCard({ item, index }: { item: TitledPoint; index: number }) {
  const num = String(index + 1).padStart(2, "0");
  return (
    <div className="flex flex-col gap-4 rounded-2xl border border-border bg-card p-5 sm:p-6 transition-colors hover:border-brand/30">
      <span className="font-mono text-sm tracking-[0.14em] text-brand">{num}</span>
      <h3 className="font-display text-xl font-medium">{item.title}</h3>
      <p className="text-pretty text-muted-foreground">{item.body}</p>
    </div>
  );
}

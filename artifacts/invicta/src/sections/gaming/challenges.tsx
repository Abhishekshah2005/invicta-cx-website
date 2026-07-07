import { Section } from "@/layouts/section";
import { Container } from "@/layouts/container";
import { SectionHeading } from "@/components/section-heading";
import { Reveal, RevealGroup } from "@/components/reveal";
import { CHALLENGES } from "@/content/gaming";

/**
 * The Arena — the pressures a gaming CX operation lives under. Dark register,
 * unique image per challenge card. Front: cinematic photo + number + title.
 * Back: full challenge description text.
 */
export function GamingChallenges() {
  return (
    <Section className="dark bg-background text-foreground">
      <Container className="flex flex-col gap-12">
        <Reveal>
          <SectionHeading
            eyebrow={CHALLENGES.eyebrow}
            title={CHALLENGES.title}
            lead={CHALLENGES.lead}
            as="h2"
          />
        </Reveal>

        <RevealGroup className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {CHALLENGES.items.map((item, i) => {
            const num = String(i + 1).padStart(2, "0");
            const image = `/assets/industries/gaming/challenges/${String(i + 1).padStart(2, "0")}.png`;
            return (
              <div
                key={item.title}
                className="group block h-64 sm:h-72"
                style={{ perspective: "900px" }}
              >
                <div className="relative h-full w-full transition-transform duration-700 ease-in-out [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]">
                  {/* ── Front face ── */}
                  <div className="absolute inset-0 rounded-2xl overflow-hidden [backface-visibility:hidden]">
                    <img
                      src={image}
                      alt={item.title}
                      className="h-full w-full object-cover"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/50 to-black/25" />
                    <div className="absolute inset-0 flex flex-col justify-between p-5 sm:p-6">
                      <span className="font-mono text-xs tracking-[0.2em] text-brand">{num}</span>
                      <h3 className="font-display text-lg font-medium text-white leading-snug">
                        {item.title}
                      </h3>
                    </div>
                  </div>

                  {/* ── Back face ── */}
                  <div className="absolute inset-0 rounded-2xl border border-brand/25 bg-card/60 backdrop-blur-sm [backface-visibility:hidden] [transform:rotateY(180deg)] flex flex-col gap-4 p-5 sm:p-6">
                    <span className="font-mono text-xs tracking-[0.2em] text-brand">{num}</span>
                    <h3 className="font-display text-base font-medium leading-snug text-foreground">
                      {item.title}
                    </h3>
                    <p className="text-sm text-pretty text-muted-foreground leading-relaxed">
                      {item.body}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </RevealGroup>
      </Container>
    </Section>
  );
}

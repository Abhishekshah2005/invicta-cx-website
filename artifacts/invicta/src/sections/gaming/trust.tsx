import { Section } from "@/layouts/section";
import { Container } from "@/layouts/container";
import { SectionHeading } from "@/components/section-heading";
import { Reveal, RevealGroup } from "@/components/reveal";
import { TRUST } from "@/content/gaming";

/** Trust & Safety — the guardian narrative. Dark register. Flip cards with unique images. */
export function GamingTrust() {
  return (
    <Section className="dark bg-background text-foreground">
      <Container className="flex flex-col gap-12">
        <Reveal>
          <SectionHeading eyebrow={TRUST.eyebrow} title={TRUST.title} lead={TRUST.lead} as="h2" />
        </Reveal>

        <RevealGroup className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {TRUST.items.map((item, i) => {
            const image = `/assets/industries/gaming/trust/${String(i + 1).padStart(2, "0")}.png`;
            const num = String(i + 1).padStart(2, "0");
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
                    <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-black/20" />
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

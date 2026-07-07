import { Section } from "@/layouts/section";
import { Container } from "@/layouts/container";
import { SectionHeading } from "@/components/section-heading";
import { Reveal, RevealGroup } from "@/components/reveal";
import { SUPPORT } from "@/content/gaming";

/** End-to-end player support channels. Light register. Flip cards with unique channel images. */
export function GamingSupport() {
  return (
    <Section className="bg-muted/40">
      <Container className="flex flex-col gap-12">
        <Reveal>
          <SectionHeading
            eyebrow={SUPPORT.eyebrow}
            title={SUPPORT.title}
            lead={SUPPORT.lead}
            as="h2"
          />
        </Reveal>

        <RevealGroup className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {SUPPORT.channels.map((channel, i) => {
            const image = `/assets/industries/gaming/support/${String(i + 1).padStart(2, "0")}.png`;
            const num = String(i + 1).padStart(2, "0");
            return (
              <div
                key={channel.title}
                className="group block h-64 sm:h-72"
                style={{ perspective: "900px" }}
              >
                <div className="relative h-full w-full transition-transform duration-700 ease-in-out [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]">
                  {/* ── Front face ── */}
                  <div className="absolute inset-0 rounded-2xl overflow-hidden [backface-visibility:hidden]">
                    <img
                      src={image}
                      alt={channel.title}
                      className="h-full w-full object-cover"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-transparent" />
                    <div className="absolute inset-0 flex flex-col justify-between p-5 sm:p-6">
                      <span className="font-mono text-xs tracking-[0.2em] text-brand">{num}</span>
                      <h3 className="font-display text-lg font-medium text-white leading-snug">
                        {channel.title}
                      </h3>
                    </div>
                  </div>

                  {/* ── Back face ── */}
                  <div className="absolute inset-0 rounded-2xl border border-border bg-background [backface-visibility:hidden] [transform:rotateY(180deg)] flex flex-col gap-4 p-5 sm:p-6">
                    <span className="font-mono text-xs tracking-[0.2em] text-brand">{num}</span>
                    <h3 className="font-display text-base font-medium leading-snug">
                      {channel.title}
                    </h3>
                    <p className="text-sm text-pretty text-muted-foreground leading-relaxed">
                      {channel.body}
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

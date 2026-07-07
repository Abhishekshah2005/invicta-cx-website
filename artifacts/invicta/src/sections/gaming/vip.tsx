import { Section } from "@/layouts/section";
import { Container } from "@/layouts/container";
import { SectionHeading } from "@/components/section-heading";
import { Reveal, RevealGroup } from "@/components/reveal";
import { Stat } from "@/components/stat";
import { VIP } from "@/content/gaming";

/** VIP Management — high-value player retention. Flip cards with editorial images. */
export function GamingVip() {
  return (
    <Section>
      <Container>
        <div className="grid gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:gap-20">
          <Reveal className="flex flex-col gap-8 lg:sticky lg:top-28 lg:self-start">
            <SectionHeading eyebrow={VIP.eyebrow} title={VIP.title} lead={VIP.lead} as="h2" />
            <div className="border-t border-border pt-6">
              <Stat
                value={VIP.stat.value}
                suffix={VIP.stat.suffix}
                decimals={VIP.stat.decimals}
                label={VIP.stat.label}
              />
            </div>
          </Reveal>

          <RevealGroup className="grid gap-4 sm:grid-cols-2">
            {VIP.points.map((point, i) => {
              const image = `/assets/industries/gaming/vip/${String(i + 1).padStart(2, "0")}.png`;
              const num = String(i + 1).padStart(2, "0");
              return (
                <div
                  key={point.title}
                  className="group block h-56 sm:h-64"
                  style={{ perspective: "900px" }}
                >
                  <div className="relative h-full w-full transition-transform duration-700 ease-in-out [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]">
                    {/* ── Front face ── */}
                    <div className="absolute inset-0 rounded-2xl overflow-hidden [backface-visibility:hidden]">
                      <img
                        src={image}
                        alt={point.title}
                        className="h-full w-full object-cover"
                        loading="lazy"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-transparent" />
                      <div className="absolute bottom-0 left-0 right-0 p-5">
                        <h3 className="font-display text-lg font-medium text-white leading-snug">
                          {point.title}
                        </h3>
                      </div>
                      <div className="absolute top-4 left-4">
                        <span className="font-mono text-xs tracking-[0.2em] text-brand/80">{num}</span>
                      </div>
                    </div>

                    {/* ── Back face ── */}
                    <div className="absolute inset-0 rounded-2xl border border-border bg-card [backface-visibility:hidden] [transform:rotateY(180deg)] flex flex-col gap-3 p-5">
                      <span className="font-mono text-xs tracking-[0.2em] text-brand">{num}</span>
                      <h3 className="font-display text-base font-medium leading-snug">
                        {point.title}
                      </h3>
                      <p className="text-sm text-pretty text-muted-foreground leading-relaxed">
                        {point.body}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </RevealGroup>
        </div>
      </Container>
    </Section>
  );
}

import { Section } from "@/layouts/section";
import { Container } from "@/layouts/container";
import { Eyebrow } from "@/components/eyebrow";
import { Reveal, TextReveal } from "@/components/reveal";
import { ClientOnly } from "@/components/utility/client-only";
import { GlobeCanvas, GLOBE_COUNTRIES } from "@/components/effects/globe";

const STATS = [
  { value: "6",   label: "Countries" },
  { value: "4",   label: "Continents" },
  { value: "24/7", label: "Always on" },
];

/**
 * Chapter "Global" — animated 3D globe showing the six countries Invicta
 * serves. A rotating world with live flight arcs cycling between markets.
 */
export function TheWorld() {
  return (
    <Section className="dark bg-background text-foreground overflow-hidden">
      <Container>
        <div className="grid items-center gap-10 lg:grid-cols-[5fr_7fr] lg:gap-20">

          {/* ── LEFT: editorial copy + country list ── */}
          <div className="flex flex-col gap-8 lg:gap-10 lg:py-8">

            <div className="flex flex-col gap-5">
              <Reveal>
                <Eyebrow>Global reach</Eyebrow>
              </Reveal>
              <TextReveal as="h2" className="max-w-[18ch] font-display text-fluid-3xl font-medium">
                Elite operators. Every timezone.
              </TextReveal>
              <Reveal>
                <p className="max-w-lg text-lg text-pretty text-foreground/60">
                  Your customers don't sleep, and neither does our operation. We embed within
                  brands across six countries — delivering the same elite standard of care
                  at 3 am in Dubai as at noon in London.
                </p>
              </Reveal>
            </div>

            {/* Country grid */}
            <Reveal>
              <ul className="grid grid-cols-2 gap-3">
                {GLOBE_COUNTRIES.map((c) => (
                  <li
                    key={c.name}
                    className="flex items-center gap-3 rounded-xl border border-foreground/10 bg-foreground/[0.04] px-4 py-3 transition-colors hover:border-brand/30"
                  >
                    <span className="text-2xl leading-none">{c.flag}</span>
                    <span className="text-sm font-medium text-foreground">{c.name}</span>
                  </li>
                ))}
              </ul>
            </Reveal>

            {/* Metrics */}
            <Reveal>
              <dl className="flex flex-wrap gap-8 border-t border-foreground/10 pt-8">
                {STATS.map((s) => (
                  <div key={s.label} className="flex flex-col gap-1">
                    <span className="font-display text-3xl md:text-4xl">{s.value}</span>
                    <span className="font-mono text-[10px] tracking-[0.18em] text-foreground/40 uppercase">
                      {s.label}
                    </span>
                  </div>
                ))}
              </dl>
            </Reveal>
          </div>

          {/* ── RIGHT: 3D globe ── */}
          <Reveal className="flex items-center justify-center overflow-hidden">
            <div className="relative w-full max-w-[min(100vw-2rem,420px)] sm:max-w-[480px] lg:max-w-[600px] mx-auto">
              {/* Soft radial glow behind globe */}
              <div
                aria-hidden
                className="pointer-events-none absolute inset-0 rounded-full"
                style={{
                  background:
                    "radial-gradient(circle at 50% 50%, rgba(180,20,30,0.18) 0%, rgba(30,10,60,0.12) 45%, transparent 72%)",
                }}
              />

              {/* Outer halo ring */}
              <div
                aria-hidden
                className="pointer-events-none absolute inset-[5%] rounded-full border border-brand/10"
              />

              <div className="aspect-square w-full">
                <ClientOnly
                  fallback={
                    <div className="aspect-square w-full rounded-full border border-foreground/10 bg-foreground/[0.03]" />
                  }
                >
                  <GlobeCanvas />
                </ClientOnly>
              </div>
            </div>
          </Reveal>

        </div>
      </Container>
    </Section>
  );
}

import Image from "next/image";

import { cn } from "@/lib/utils";

type Tone = "ink" | "ivory" | "crimson";

interface ImagePlaceholderProps {
  /** Description of the intended real photograph (shown as a caption / alt). */
  label: string;
  /** Real photo (public path). When set, renders the image instead of the panel. */
  src?: string;
  /** CSS object-position for the photo (e.g. "center", "60% center"). */
  focus?: string;
  /** Responsive sizes hint for next/image. */
  sizes?: string;
  /** CSS aspect-ratio, e.g. "4 / 5", "16 / 9". */
  ratio?: string;
  /** Visual register (panel fallback + photo grade). */
  tone?: Tone;
  className?: string;
}

const TONE: Record<Tone, string> = {
  ink: "bg-foreground text-background",
  ivory: "bg-muted text-foreground",
  crimson: "bg-brand text-brand-foreground",
};

/**
 * Editorial photography frame. When `src` is set it renders the real photo under
 * a soft cinematic grade (grain + gradient) so it sits in the Invicta visual
 * language. Without `src` it falls back to a branded duotone panel with a caption
 * describing the intended shot — so layouts read as intentional before assets
 * land. Either way the aspect ratio and rounding are identical, so swapping a
 * placeholder for a real photo is a one-prop change.
 *
 * ART DIRECTION: real, documentary/editorial · premium cinematic light · human
 * support, gaming operations, enterprise environments. No stocky look.
 */
export function ImagePlaceholder({
  label,
  src,
  focus = "center",
  sizes = "(max-width: 768px) 100vw, 40vw",
  ratio = "4 / 5",
  tone = "ink",
  className,
}: ImagePlaceholderProps) {
  return (
    <div
      role="img"
      aria-label={src ? label : `Photography placeholder: ${label}`}
      className={cn("relative isolate overflow-hidden rounded-2xl", TONE[tone], className)}
      style={{ aspectRatio: ratio }}
    >
      {src ? (
        <>
          <Image
            src={src}
            alt=""
            fill
            sizes={sizes}
            className="object-cover"
            style={{ objectPosition: focus }}
          />
          {/* Cinematic grade — a quiet ink wash so any frame sits on-brand. */}
          <div
            aria-hidden
            className="absolute inset-0 bg-gradient-to-t from-background/55 via-transparent to-transparent"
          />
          <div aria-hidden className="absolute inset-0 noise-overlay opacity-[0.05]" />
        </>
      ) : (
        <>
          {/* Depth: soft radial + film grain */}
          <div
            aria-hidden
            className="absolute inset-0 opacity-60"
            style={{
              backgroundImage:
                "radial-gradient(120% 80% at 30% 0%, color-mix(in oklab, currentColor 14%, transparent), transparent 60%)",
            }}
          />
          <div
            aria-hidden
            className="absolute inset-0 noise-overlay opacity-[0.06] mix-blend-overlay"
          />

          <div className="absolute inset-0 flex flex-col justify-between p-5">
            <span className="font-mono text-[0.65rem] tracking-[0.22em] uppercase opacity-70">
              Photography
            </span>
            <span className="max-w-[85%] font-mono text-xs leading-relaxed tracking-wide opacity-90">
              {label}
            </span>
          </div>
        </>
      )}
    </div>
  );
}

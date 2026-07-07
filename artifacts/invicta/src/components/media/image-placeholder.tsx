import { cn } from "@/lib/utils";

type Tone = "ink" | "ivory" | "crimson";

interface ImagePlaceholderProps {
  label: string;
  src?: string;
  focus?: string;
  sizes?: string;
  ratio?: string;
  tone?: Tone;
  className?: string;
}

const TONE: Record<Tone, string> = {
  ink: "bg-foreground text-background",
  ivory: "bg-muted text-foreground",
  crimson: "bg-brand text-brand-foreground",
};

export function ImagePlaceholder({
  label,
  src,
  focus = "center",
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
          <img
            src={src}
            alt=""
            className="absolute inset-0 h-full w-full object-cover"
            style={{ objectPosition: focus }}
          />
          <div
            aria-hidden
            className="absolute inset-0 bg-gradient-to-t from-background/55 via-transparent to-transparent"
          />
          <div aria-hidden className="absolute inset-0 noise-overlay opacity-[0.05]" />
        </>
      ) : (
        <>
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

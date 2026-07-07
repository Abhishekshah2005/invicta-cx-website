import { cn } from "@/lib/utils";

type EyebrowProps = React.HTMLAttributes<HTMLSpanElement>;

/**
 * Small uppercase label with a crimson tick — the editorial "kicker" that sits
 * above section headings. Mono + wide tracking for a precise, technical feel.
 */
export function Eyebrow({ className, children, ...props }: EyebrowProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center gap-2.5 font-mono text-xs tracking-[0.22em] text-muted-foreground uppercase",
        className,
      )}
      {...props}
    >
      <span aria-hidden className="h-px w-6 bg-brand" />
      {children}
    </span>
  );
}

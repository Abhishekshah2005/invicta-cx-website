import { cn } from "@/lib/utils";

type PillProps = React.HTMLAttributes<HTMLSpanElement>;

/** Small monospace chip for tags, categories, and metadata. */
export function Pill({ className, children, ...props }: PillProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center rounded-full border border-border bg-card px-3 py-1 font-mono text-xs tracking-wider whitespace-nowrap text-muted-foreground uppercase",
        className,
      )}
      {...props}
    >
      {children}
    </span>
  );
}

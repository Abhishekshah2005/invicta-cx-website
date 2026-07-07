import { cn } from "@/lib/utils";

const GAP = {
  sm: "gap-4",
  md: "gap-5 md:gap-6 lg:gap-8",
  lg: "gap-6 md:gap-8 lg:gap-12",
} as const;

type GridProps = React.HTMLAttributes<HTMLDivElement> & {
  /** Column gutters. */
  gap?: keyof typeof GAP;
};

/**
 * The canonical responsive grid: 4 columns on mobile, 8 on tablet (md), 12 on
 * laptop/desktop (lg). Children align to one system via `col-span-*` utilities
 * at each breakpoint (e.g. `col-span-4 md:col-span-4 lg:col-span-3` for a
 * mobile-full / tablet-half / desktop-quarter cell). Use for any multi-column
 * section so every layout shares the same column math.
 */
export function Grid({ gap = "md", className, ...props }: GridProps) {
  return (
    <div
      className={cn("grid grid-cols-4 md:grid-cols-8 lg:grid-cols-12", GAP[gap], className)}
      {...props}
    />
  );
}

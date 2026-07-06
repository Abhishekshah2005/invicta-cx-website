import { cn } from "@/lib/utils";

/**
 * The global container width scale. Every section chooses the width that fits
 * its content instead of defaulting to one size — this is what stops large
 * screens from feeling like an empty artboard and keeps text at a readable
 * measure.
 *
 * - `prose`    — reading measure for article/long-form body (~68ch)
 * - `narrow`   — focused single-column content / forms
 * - `content`  — standard content blocks, mid-width grids
 * - `editorial`— DEFAULT page width; widens on large screens to use the viewport
 * - `wide`     — media-forward, full grids
 * - `full`     — edge-to-edge (pair with `bleed`)
 */
const WIDTH = {
  prose: "max-w-[46rem]",
  narrow: "max-w-4xl",
  content: "max-w-6xl",
  editorial: "max-w-7xl xl:max-w-[85rem] 3xl:max-w-[94rem]",
  wide: "max-w-[96rem] 3xl:max-w-[108rem]",
  full: "max-w-none",
} as const;

export type ContainerWidth = keyof typeof WIDTH;

type ContainerProps = React.HTMLAttributes<HTMLDivElement> & {
  /** Width tier from the scale. Defaults to the editorial page width. */
  size?: ContainerWidth;
  /** Remove horizontal padding (for full-bleed inner content). */
  bleed?: boolean;
};

/** Centered content wrapper with a responsive width tier and fluid gutters. */
export function Container({
  size = "editorial",
  bleed = false,
  className,
  children,
  ...props
}: ContainerProps) {
  return (
    <div
      className={cn(
        "mx-auto w-full",
        WIDTH[size],
        !bleed && "px-5 sm:px-6 md:px-8 lg:px-10 3xl:px-14",
        className,
      )}
      {...props}
    >
      {children}
    </div>
  );
}

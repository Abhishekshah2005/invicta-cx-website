import { cn } from "@/lib/utils";

type ContainerProps = React.HTMLAttributes<HTMLDivElement> & {
  /** Remove horizontal padding (for full-bleed inner content). */
  bleed?: boolean;
};

/** Centered max-width content wrapper with responsive gutters. */
export function Container({ bleed = false, className, children, ...props }: ContainerProps) {
  return (
    <div className={cn("mx-auto w-full max-w-7xl", !bleed && "px-6 md:px-8", className)} {...props}>
      {children}
    </div>
  );
}

import { cn } from "@/lib/utils";

interface LogoProps {
  className?: string;
  priority?: boolean;
}

export function Logo({ className }: LogoProps) {
  return (
    <img
      src="/invicta-logo.png"
      alt="Invicta"
      width={1337}
      height={861}
      className={cn("w-auto object-contain", className)}
    />
  );
}

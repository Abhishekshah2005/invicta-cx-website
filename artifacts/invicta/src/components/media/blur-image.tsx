"use client";

import { useState } from "react";

import { cn } from "@/lib/utils";
import { blurDataURL } from "@/lib/image";

// @ts-ignore
type BlurImageProps = React.ImgHTMLAttributes<HTMLImageElement> & {
  src: string;
  alt: string;
  fill?: boolean;
  sizes?: string;
  blurDataURL?: string;
  priority?: boolean;
};

export function BlurImage({ className, alt, onLoad, fill, sizes, priority, ...props }: BlurImageProps) {
  const [loaded, setLoaded] = useState(false);

  return (
    <img
      alt={alt}
      onLoad={(event) => {
        setLoaded(true);
        // @ts-ignore
        onLoad?.(event);
      }}
      className={cn(
        "transition-[opacity,filter] duration-700 ease-out",
        fill ? "absolute inset-0 h-full w-full object-cover" : "",
        loaded ? "blur-0 opacity-100" : "opacity-0 blur-md",
        className,
      )}
      {...props}
    />
  );
}

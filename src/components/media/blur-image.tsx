"use client";

import { useState } from "react";
import Image, { type ImageProps } from "next/image";

import { cn } from "@/lib/utils";
import { blurDataURL } from "@/lib/image";

type BlurImageProps = Omit<ImageProps, "placeholder">;

/**
 * `next/image` with a built-in blur-up placeholder and a fade+deblur transition
 * on load. Works for both static imports and remote sources (falls back to a
 * generated shimmer when no `blurDataURL` is supplied).
 */
export function BlurImage({ className, alt, onLoad, ...props }: BlurImageProps) {
  const [loaded, setLoaded] = useState(false);

  return (
    <Image
      alt={alt}
      placeholder="blur"
      blurDataURL={props.blurDataURL ?? blurDataURL()}
      onLoad={(event) => {
        setLoaded(true);
        onLoad?.(event);
      }}
      className={cn(
        "transition-[opacity,filter] duration-700 ease-out",
        loaded ? "blur-0 opacity-100" : "opacity-0 blur-md",
        className,
      )}
      {...props}
    />
  );
}

/**
 * Image helpers: generate a lightweight shimmer blur-up placeholder as an inline
 * data URI, so remote images (which lack a static `blurDataURL`) still get a
 * smooth progressive load with zero extra network requests.
 */

function shimmerSvg(width: number, height: number): string {
  return `
<svg width="${width}" height="${height}" viewBox="0 0 ${width} ${height}" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <linearGradient id="g">
      <stop stop-color="#1a1a1a" offset="20%" />
      <stop stop-color="#2a2a2a" offset="50%" />
      <stop stop-color="#1a1a1a" offset="70%" />
    </linearGradient>
  </defs>
  <rect width="${width}" height="${height}" fill="#1a1a1a" />
  <rect id="r" width="${width}" height="${height}" fill="url(#g)" />
  <animate xlink:href="#r" attributeName="x" from="-${width}" to="${width}" dur="1.4s" repeatCount="indefinite" />
</svg>`;
}

function toBase64(input: string): string {
  return typeof window === "undefined" ? Buffer.from(input).toString("base64") : window.btoa(input);
}

/** A base64 shimmer data URI suitable for `next/image` `blurDataURL`. */
export function blurDataURL(width = 700, height = 475): string {
  return `data:image/svg+xml;base64,${toBase64(shimmerSvg(width, height))}`;
}

/**
 * next/image with `unoptimized: true` does not prefix basePath onto the src, so
 * files in /public must be prefixed by hand. Links and _next/ assets are handled
 * by Next itself; this is only for images and other raw public files.
 */
export const BASE_PATH = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

export const asset = (path: string) => `${BASE_PATH}${path}`;

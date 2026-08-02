import type { Metadata } from "next";

type PageMetaInput = {
  title: string;
  description: string;
  path: string;
  /** Skip "%s (Roblox) | MiniGameWiki" template */
  absolute?: boolean;
};

/** Shared metadata: canonical + matching Open Graph URL. */
export function pageMeta({
  title,
  description,
  path,
  absolute = false,
}: PageMetaInput): Metadata {
  return {
    title: absolute ? { absolute: title } : title,
    description,
    alternates: { canonical: path },
    openGraph: {
      url: path,
      description,
    },
  };
}

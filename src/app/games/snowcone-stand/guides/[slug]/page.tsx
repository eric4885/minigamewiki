import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { JsonLd } from "@/components/JsonLd";
import { RelatedLinks } from "@/components/RelatedLinks";
import { SiteDisclaimer } from "@/components/SiteDisclaimer";
import {
  getAllGuideSlugs,
  getGuideBySlug,
  SITE_NAME,
  SITE_URL,
  snowcone,
} from "@/lib/snowcone";
import { renderBlocks } from "@/lib/renderBlocks";

export const dynamicParams = false;

export function generateStaticParams() {
  return getAllGuideSlugs().map((slug) => ({ slug }));
}

type PageProps = {
  params: Promise<{ slug: string }>;
};

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const guide = getGuideBySlug(slug);
  if (!guide) {
    return { title: "Guide not found" };
  }
  return {
    title: guide.title,
    description: guide.excerpt,
    alternates: {
      canonical: `/games/snowcone-stand/guides/${guide.slug}`,
    },
  };
}

export default async function GuideArticlePage({ params }: PageProps) {
  const { slug } = await params;
  const guide = getGuideBySlug(slug);
  if (!guide) notFound();

  const html = renderBlocks(guide.content);
  const url = `${SITE_URL}/games/snowcone-stand/guides/${guide.slug}`;

  const articleLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: guide.title,
    description: guide.excerpt,
    dateModified: guide.updatedAt,
    mainEntityOfPage: url,
    author: {
      "@type": "Organization",
      name: SITE_NAME,
      url: SITE_URL,
    },
    publisher: {
      "@type": "Organization",
      name: SITE_NAME,
      url: SITE_URL,
    },
    about: {
      "@type": "Thing",
      name: snowcone.game,
    },
  };

  return (
    <article className="space-y-6">
      <JsonLd data={articleLd} />
      <div>
        <p className="text-sm text-brand">
          <Link href="/games/snowcone-stand/guides" className="hover:underline">
            Guides
          </Link>{" "}
          / {guide.slug}
        </p>
        <h1 className="mt-2 text-3xl font-semibold text-fg">{guide.title}</h1>
        <time
          dateTime={guide.updatedAt}
          className="mt-2 block font-mono text-xs text-muted"
        >
          Updated {guide.updatedAt}
        </time>
        <p className="mt-4 text-muted">{guide.excerpt}</p>
      </div>
      <div dangerouslySetInnerHTML={{ __html: html }} />
      <SiteDisclaimer className="pt-4" />
      <RelatedLinks />
    </article>
  );
}

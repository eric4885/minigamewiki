import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Breadcrumbs } from "@/components/Breadcrumbs";
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

/** Shorter browser/SERP titles; H1 still uses the full guide.title. */
const GUIDE_SEO_TITLE: Record<string, string> = {
  "make-money-fast": "Make Money Faster",
  "beginner-mistakes": "Five Beginner Mistakes",
  "mutations-plain-english": "Mutations Explained Simply",
  "beginner-economy-loop": "Beginner Economy Loop",
  "perfect-blend-timing": "Perfect Blend Timing",
  "mutation-stacking-guide": "Mutation Stacking Guide",
  "totem-efficiency": "Totem Efficiency Guide",
  "flavor-tier-explainer": "How We Rank Flavors",
  "codes-policy": "Our Codes Policy",
  "endgame-farm-route": "Endgame Farm Route",
};

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
  const path = `/games/snowcone-stand/guides/${guide.slug}`;
  return {
    title: GUIDE_SEO_TITLE[guide.slug] ?? guide.title,
    description: guide.excerpt,
    alternates: { canonical: path },
    openGraph: { url: path, description: guide.excerpt },
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
        <Breadcrumbs
          items={[
            { href: "/games", label: "Games" },
            { href: "/games/snowcone-stand", label: snowcone.game },
            { href: "/games/snowcone-stand/guides", label: "Guides" },
            { label: guide.title },
          ]}
        />
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

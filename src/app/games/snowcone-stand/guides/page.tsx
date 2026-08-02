import type { Metadata } from "next";
import { pageMeta } from "@/lib/seo";
import Link from "next/link";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { RelatedLinks } from "@/components/RelatedLinks";
import { SiteDisclaimer } from "@/components/SiteDisclaimer";
import { Card } from "@/components/ui/Card";
import { getGuidesSorted, snowcone } from "@/lib/snowcone";

export const metadata: Metadata = pageMeta({
  title: "Snowcone Stand Guides",
  description:
    "Snowcone Stand guides for Roblox: economy loops, Perfect Blend timing, mutations, totems, and endgame farms.",
  path: "/games/snowcone-stand/guides",
});

export default function GuidesIndexPage() {
  const guides = getGuidesSorted();

  return (
    <div className="space-y-8">
      <div>
        <Breadcrumbs
          items={[
            { href: "/games", label: "Games" },
            { href: "/games/snowcone-stand", label: snowcone.game },
            { label: "Guides" },
          ]}
        />
        <h1 className="mt-2 text-3xl font-semibold text-fg">
          Snowcone Stand Guides
        </h1>
        <p className="mt-4 max-w-prose text-muted">
          Tools answer &quot;what number,&quot; guides answer &quot;what
          next.&quot; These articles walk through first-hour economy loops,
          Perfect Blend practice, mutation chase order, totem break-evens, and
          endgame farm comparisons — written to pair with the{" "}
          <Link
            href="/games/snowcone-stand/blender-planner"
            className="text-accent hover:underline"
          >
            Blender Calculator
          </Link>{" "}
          and{" "}
          <Link
            href="/games/snowcone-stand/flavor-mutation-table"
            className="text-accent hover:underline"
          >
            flavor table
          </Link>
          . For promo drops, use the{" "}
          <Link
            href="/games/snowcone-stand/codes"
            className="text-accent hover:underline"
          >
            latest codes status
          </Link>{" "}
          — an empty list can be the correct answer.
        </p>
      </div>

      <ul className="space-y-3">
        {guides.map((guide) => (
          <li key={guide.slug}>
            <Card href={`/games/snowcone-stand/guides/${guide.slug}`}>
              <div className="flex flex-col gap-1 sm:flex-row sm:items-baseline sm:justify-between">
                <h2 className="font-semibold text-fg">{guide.title}</h2>
                <time
                  dateTime={guide.updatedAt}
                  className="font-mono text-xs text-muted"
                >
                  {guide.updatedAt}
                </time>
              </div>
              <p className="mt-2 text-sm text-muted">{guide.excerpt}</p>
            </Card>
          </li>
        ))}
      </ul>

      <SiteDisclaimer />
      <RelatedLinks excludeHref="/games/snowcone-stand/guides" />
    </div>
  );
}

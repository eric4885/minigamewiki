import type { Metadata } from "next";
import { pageMeta } from "@/lib/seo";
import Link from "next/link";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { RelatedLinks } from "@/components/RelatedLinks";
import { DataTrustNote } from "@/components/DataTrustNote";
import { SiteDisclaimer } from "@/components/SiteDisclaimer";
import { Card } from "@/components/ui/Card";
import { snowcone } from "@/lib/snowcone";

export const metadata: Metadata = pageMeta({
  title: "Snowcone Stand Tier List",
  description:
    "Editorial Snowcone Stand tier list for Roblox with explicit assumptions — not an official developer ranking.",
  path: "/games/snowcone-stand/tier-list",
});

export default function TierListPage() {
  const { tierList } = snowcone;

  return (
    <div className="space-y-8">
      <div>
        <Breadcrumbs
          items={[
            { href: "/games", label: "Games" },
            { href: "/games/snowcone-stand", label: snowcone.game },
            { label: "Tier List" },
          ]}
        />
        <h1 className="mt-2 text-3xl font-semibold text-fg">
          Snowcone Stand Tier List
        </h1>
        <p className="mt-4 max-w-prose text-muted">
          This is an editorial tier list — not an official Steel Sharpens Steel
          ranking. Early players who chase S-tier flavors they cannot unlock yet
          stall their economy; late players who ignore per-second math overrate
          peak unit value. Read the assumptions below, then validate any upgrade
          with the{" "}
          <Link
            href="/games/snowcone-stand/blender-planner"
            className="text-accent hover:underline"
          >
            Blender Calculator
          </Link>
          . For promo drops, check the{" "}
          <Link
            href="/games/snowcone-stand/codes"
            className="text-accent hover:underline"
          >
            latest codes status
          </Link>
          . Updated{" "}
          <span className="font-mono text-fg">{tierList.updatedAt}</span>.
        </p>
      </div>

      <DataTrustNote variant="tools" />

      <p className="rounded-xl border border-border bg-surface p-4 text-sm text-muted">
        Before you trust an S-tier upgrade for profit, check bases on the{" "}
        <Link
          href="/games/snowcone-stand/flavor-mutation-table"
          className="text-accent hover:underline"
        >
          flavor × mutation table
        </Link>{" "}
        and compare per-second in the{" "}
        <Link
          href="/games/snowcone-stand/blender-planner"
          className="text-accent hover:underline"
        >
          Blender Calculator
        </Link>
        . Cash-first path:{" "}
        <Link
          href="/games/snowcone-stand/guides/make-money-fast"
          className="text-accent hover:underline"
        >
          how to make money faster
        </Link>
        .
      </p>

      <Card>
        <h2 className="font-semibold text-fg">Assumptions</h2>
        <p className="mt-2 text-sm text-muted">{tierList.summary}</p>
      </Card>

      <div className="space-y-4">
        {tierList.ranks.map((rank) => (
          <Card key={rank.tier}>
            <div className="flex flex-col gap-3 sm:flex-row sm:items-start">
              <span className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-md border border-border bg-bg font-mono text-lg font-semibold text-brand">
                {rank.tier}
              </span>
              <ul className="flex flex-wrap gap-2">
                {rank.items.map((item) => (
                  <li
                    key={item}
                    className="rounded-md border border-border bg-bg px-3 py-1 text-sm text-fg"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </Card>
        ))}
      </div>

      <SiteDisclaimer />
      <RelatedLinks excludeHref="/games/snowcone-stand/tier-list" />
    </div>
  );
}

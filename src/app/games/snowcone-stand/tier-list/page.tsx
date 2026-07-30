import type { Metadata } from "next";
import Link from "next/link";
import { RelatedLinks } from "@/components/RelatedLinks";
import { SiteDisclaimer } from "@/components/SiteDisclaimer";
import { Card } from "@/components/ui/Card";
import { snowcone } from "@/lib/snowcone";

export const metadata: Metadata = {
  title: "Snowcone Stand Tier List",
  description:
    "Snowcone Stand S–D tier list for flavors, mutations, and totems with clear ranking assumptions.",
  alternates: { canonical: "/games/snowcone-stand/tier-list" },
};

export default function TierListPage() {
  const { tierList } = snowcone;

  return (
    <div className="space-y-8">
      <div>
        <p className="text-sm text-brand">
          <Link href="/games/snowcone-stand" className="hover:underline">
            {snowcone.game}
          </Link>{" "}
          / Tier List
        </p>
        <h1 className="mt-2 text-3xl font-semibold text-fg">
          Snowcone Stand Tier List
        </h1>
        <p className="mt-4 max-w-prose text-muted">
          Tier lists become harmful when they hide their assumptions. Early
          Snowcone Stand players who chase S-tier flavors they cannot unlock yet
          stall their economy; late players who ignore per-second math overrate
          peak unit value. This list ranks flavors, mutations, and totems for
          mid-to-late cash efficiency assuming Perfect Blend and at least a
          mid-tier mutation mindset. Read the summary, treat D-tier Cursed as a
          quest exception, and always validate a promotion with the Blender
          Planner using your blend time. Updated{" "}
          <span className="font-mono text-fg">{tierList.updatedAt}</span> —
          re-rank after patches.
        </p>
      </div>

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

import type { Metadata } from "next";
import { pageMeta } from "@/lib/seo";
import Link from "next/link";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { Card } from "@/components/ui/Card";
import { RelatedLinks } from "@/components/RelatedLinks";
import { DataTrustNote } from "@/components/DataTrustNote";
import { SiteDisclaimer } from "@/components/SiteDisclaimer";
import { snowcone } from "@/lib/snowcone";

export const metadata: Metadata = pageMeta({
  title: "Snowcone Stand Wiki & Tools",
  description:
    "Snowcone Stand wiki and tools for Roblox: blender calculator, flavor table, tier list, latest codes status, FAQ, and guides.",
  path: "/games/snowcone-stand",
});

const startHere = [
  {
    href: "/games/snowcone-stand/guides/beginner-economy-loop",
    title: "1. Start here — first hour",
    body: "Unlock order, Perfect habit, and what not to buy yet.",
  },
  {
    href: "/games/snowcone-stand/blender-planner",
    title: "2. Blender Calculator",
    body: "Compare builds with hit rate, per-hour, and rough offline totals.",
  },
  {
    href: "/games/snowcone-stand/codes",
    title: "3. Latest codes status",
    body: "Verified only — empty when no active public codes exist.",
  },
];

const links = [
  {
    href: "/games/snowcone-stand/blender-planner",
    title: "Blender Calculator",
    body: "Perfect hit rate, unit & per-second, fleet and offline estimates.",
  },
  {
    href: "/games/snowcone-stand/flavor-mutation-table",
    title: "Flavor × Mutation Table",
    body: "Full reference for bases and mutation multipliers.",
  },
  {
    href: "/games/snowcone-stand/tier-list",
    title: "Tier List",
    body: "S–D ranks with explicit assumptions.",
  },
  {
    href: "/games/snowcone-stand/codes",
    title: "Latest Codes",
    body: "Live status page — empty when no verified codes exist.",
  },
  {
    href: "/games/snowcone-stand/how-to-redeem-codes",
    title: "How to Redeem Codes",
    body: "Redeem flow + our no-fake-codes policy.",
  },
  {
    href: "/games/snowcone-stand/guides",
    title: "Guides",
    body: "Economy, shop checks, offline blends, mutations, endgame.",
  },
  {
    href: "/games/snowcone-stand/faq",
    title: "FAQ",
    body: "Common questions about tools and data.",
  },
  {
    href: "/games/snowcone-stand/updates",
    title: "Changelog",
    body: "What we changed and when we last reviewed data.",
  },
];

export default function SnowconeStandHubPage() {
  return (
    <div className="space-y-8">
      <div>
        <Breadcrumbs
          items={[
            { href: "/games", label: "Games" },
            { label: snowcone.game },
          ]}
        />
        <h1 className="mt-2 text-3xl font-semibold text-fg">
          Snowcone Stand Wiki & Tools
        </h1>
        <p className="mt-2 font-mono text-xs text-muted">
          Data last reviewed: {snowcone.dataReviewedAt} · Codes checked:{" "}
          {snowcone.codesLastChecked}
        </p>
        <p className="mt-4 max-w-prose text-muted">
          {snowcone.description} Use the calculator before big upgrades,
          cross-check the flavor table when a new mutation drops, and read
          guides when you want the why — not just the number. This is not an
          official game wiki.
        </p>
        <p className="mt-3 text-sm text-muted">
          Play on Roblox:{" "}
          <a
            href={snowcone.robloxUrl}
            className="text-accent hover:underline"
            rel="noopener noreferrer"
            target="_blank"
          >
            Open Snowcone Stand
          </a>
          {" · "}
          <a
            href={snowcone.robloxSearchUrl}
            className="text-accent hover:underline"
            rel="noopener noreferrer"
            target="_blank"
          >
            Search
          </a>
        </p>
      </div>

      <DataTrustNote />

      <section className="space-y-3">
        <h2 className="text-xl font-semibold text-fg">Start here</h2>
        <p className="max-w-prose text-sm text-muted">
          Three steps for new players: learn the first-hour loop, compare builds
          in the calculator, then bookmark codes status (often empty on purpose).
        </p>
        <div className="grid gap-3 sm:grid-cols-3">
          {startHere.map((item) => (
            <Card key={item.href} href={item.href}>
              <h3 className="font-semibold text-fg">{item.title}</h3>
              <p className="mt-2 text-sm text-muted">{item.body}</p>
            </Card>
          ))}
        </div>
        <p className="text-sm text-muted">
          Also useful early:{" "}
          <Link
            href="/games/snowcone-stand/guides/rotating-shop-checks"
            className="text-accent hover:underline"
          >
            rotating shop checks
          </Link>{" "}
          and{" "}
          <Link
            href="/games/snowcone-stand/guides/offline-blend-planning"
            className="text-accent hover:underline"
          >
            offline blend planning
          </Link>
          .
        </p>
      </section>

      <section className="space-y-3">
        <h2 className="text-xl font-semibold text-fg">All tools & pages</h2>
        <div className="grid gap-4 sm:grid-cols-2">
          {links.map((item) => (
            <Card key={item.href} href={item.href}>
              <h3 className="font-semibold text-fg">{item.title}</h3>
              <p className="mt-2 text-sm text-muted">{item.body}</p>
            </Card>
          ))}
        </div>
      </section>

      <SiteDisclaimer />
      <RelatedLinks excludeHref="/games/snowcone-stand" limit={4} />
    </div>
  );
}

import type { Metadata } from "next";
import Link from "next/link";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { Card } from "@/components/ui/Card";
import { RelatedLinks } from "@/components/RelatedLinks";
import { SiteDisclaimer } from "@/components/SiteDisclaimer";
import { snowcone } from "@/lib/snowcone";

export const metadata: Metadata = {
  title: "Snowcone Stand Wiki & Tools",
  description:
    "Snowcone Stand wiki & tools for Roblox: blender calculator, flavor × mutation table, tier list, latest codes status, FAQ, and guides.",
  alternates: { canonical: "/games/snowcone-stand" },
};

const links = [
  {
    href: "/games/snowcone-stand/blender-planner",
    title: "Blender Calculator",
    body: "Perfect Blend, mutations, totems → unit & per-second.",
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
    body: "Economy loops, timing, mutations, and endgame routes.",
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
          guides when you want the why — not just the number. Data is maintained
          in JSON and reviewed independently; it is not an official game wiki.
        </p>
        <p className="mt-3 text-sm text-muted">
          Play on Roblox:{" "}
          <a
            href={snowcone.robloxSearchUrl}
            className="text-accent hover:underline"
            rel="noopener noreferrer"
            target="_blank"
          >
            Search Snowcone Stand
          </a>
        </p>
      </div>

      <div className="grid gap-4 sm:grid-cols-2">
        {links.map((item) => (
          <Card key={item.href} href={item.href}>
            <h2 className="font-semibold text-fg">{item.title}</h2>
            <p className="mt-2 text-sm text-muted">{item.body}</p>
          </Card>
        ))}
      </div>

      <SiteDisclaimer />
      <RelatedLinks excludeHref="/games/snowcone-stand" limit={4} />
    </div>
  );
}

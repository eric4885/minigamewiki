import type { Metadata } from "next";
import Link from "next/link";
import { Card } from "@/components/ui/Card";
import { snowcone } from "@/lib/snowcone";

export const metadata: Metadata = {
  title: "Snowcone Stand Hub",
  description:
    "Snowcone Stand tools for Roblox: blender planner, flavor × mutation table, tier list, codes, and guides.",
};

const links = [
  {
    href: "/games/snowcone-stand/blender-planner",
    title: "Blender Planner",
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
    title: "Codes",
    body: "Honest tracker — empty when no verified codes exist.",
  },
  {
    href: "/games/snowcone-stand/guides",
    title: "Guides",
    body: "Economy loops, timing, mutations, and endgame routes.",
  },
];

export default function SnowconeStandHubPage() {
  return (
    <div className="space-y-8">
      <div>
        <p className="text-sm text-brand">
          <Link href="/games" className="hover:underline">
            Games
          </Link>{" "}
          / {snowcone.game}
        </p>
        <h1 className="mt-2 text-3xl font-semibold text-fg">
          {snowcone.game} Tools & Guides
        </h1>
        <p className="mt-4 max-w-prose text-muted">
          {snowcone.description} Use the planner before big upgrades, cross-check
          the flavor table when a new mutation drops, and read guides when you
          want the why — not just the number. Data is maintained in JSON and
          reviewed independently; it is not an official game wiki.
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
    </div>
  );
}

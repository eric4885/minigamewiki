import type { Metadata } from "next";
import { pageMeta } from "@/lib/seo";
import Link from "next/link";
import { Card } from "@/components/ui/Card";
import { snowcone } from "@/lib/snowcone";

export const metadata: Metadata = pageMeta({
  title: "Roblox Mini-Game Hubs",
  description:
    "Browse Roblox mini-game hubs on MiniGameWiki. First launch: Snowcone Stand tools, calculators, codes status, and guides.",
  path: "/games",
});

export default function GamesPage() {
  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-semibold text-fg">Games</h1>
        <p className="mt-4 max-w-prose text-muted">
          MiniGameWiki organizes tools by Roblox experience. Each hub collects
          calculators, reference tables, tier lists, codes trackers, and guides
          for one game so you can plan upgrades without tab chaos. We launch
          with Snowcone Stand and will add more mini-games only when we can
          maintain accurate, independently verified data — not empty stubs.
        </p>
      </div>

      <Card href="/games/snowcone-stand">
        <p className="text-sm text-brand">Featured</p>
        <h2 className="mt-1 text-xl font-semibold text-fg">{snowcone.game}</h2>
        <p className="mt-2 text-sm text-muted">{snowcone.description}</p>
        <p className="mt-3 text-sm text-accent">Open hub →</p>
      </Card>

      <p className="text-sm text-muted">
        Jump to{" "}
        <Link
          href="/games/snowcone-stand/blender-planner"
          className="text-accent hover:underline"
        >
          Blender Calculator
        </Link>
        ,{" "}
        <Link
          href="/games/snowcone-stand/codes"
          className="text-accent hover:underline"
        >
          latest codes status
        </Link>
        , or{" "}
        <Link
          href="/games/snowcone-stand/tier-list"
          className="text-accent hover:underline"
        >
          tier list
        </Link>
        . Looking for something else?{" "}
        <Link href="/contact" className="text-accent hover:underline">
          Suggest a game
        </Link>
        .
      </p>
    </div>
  );
}

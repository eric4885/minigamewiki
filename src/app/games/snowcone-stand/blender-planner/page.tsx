import type { Metadata } from "next";
import Link from "next/link";
import { pageMeta } from "@/lib/seo";
import { BlenderPlannerClient } from "@/components/BlenderPlannerClient";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { RelatedLinks } from "@/components/RelatedLinks";
import { SiteDisclaimer } from "@/components/SiteDisclaimer";
import { snowcone } from "@/lib/snowcone";

export const metadata: Metadata = pageMeta({
  title: "Snowcone Stand Blender Calculator",
  description:
    "Free Snowcone Stand blender calculator for Roblox with Perfect Blend math, presets, and shareable build links.",
  path: "/games/snowcone-stand/blender-planner",
});

export default function BlenderPlannerPage() {
  return (
    <div className="space-y-8">
      <div>
        <Breadcrumbs
          items={[
            { href: "/games", label: "Games" },
            { href: "/games/snowcone-stand", label: snowcone.game },
            { label: "Blender Calculator" },
          ]}
        />
        <h1 className="mt-2 text-3xl font-semibold text-fg">
          Snowcone Stand Blender Calculator
        </h1>
        <p className="mt-4 max-w-prose text-muted">
          Buying the next flavor or totem without math is how Snowcone Stand
          players burn a session&apos;s cash on a shiny upgrade that loses
          per-second. This calculator uses{" "}
          <span className="font-mono text-fg">
            unit = base × (perfect ? {snowcone.perfectMult} : 1) × mutReduce ×
            totemStack
          </span>
          , then{" "}
          <span className="font-mono text-fg">perSec = unit / blendTime</span>.
          Use presets, compare Perfect ON vs OFF, and copy a shareable build
          link for Discord or Reddit.
        </p>
      </div>
      <p className="rounded-xl border border-border bg-surface p-4 text-sm text-muted">
        Use this calculator to maximize profit comparisons (Perfect ON vs OFF).
        Pull mutReduce from the{" "}
        <Link
          href="/games/snowcone-stand/flavor-mutation-table"
          className="text-accent hover:underline"
        >
          flavor × mutation table
        </Link>
        , then read{" "}
        <Link
          href="/games/snowcone-stand/guides/make-money-fast"
          className="text-accent hover:underline"
        >
          make money faster
        </Link>{" "}
        or{" "}
        <Link
          href="/games/snowcone-stand/guides/mutations-plain-english"
          className="text-accent hover:underline"
        >
          mutations explained simply
        </Link>{" "}
        for the decision context.
      </p>
      <BlenderPlannerClient />
      <SiteDisclaimer />
      <RelatedLinks excludeHref="/games/snowcone-stand/blender-planner" />
    </div>
  );
}

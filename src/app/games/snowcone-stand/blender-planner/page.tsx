import type { Metadata } from "next";
import Link from "next/link";
import { pageMeta } from "@/lib/seo";
import { BlenderPlannerClient } from "@/components/BlenderPlannerClient";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { RelatedLinks } from "@/components/RelatedLinks";
import { DataTrustNote } from "@/components/DataTrustNote";
import { SiteDisclaimer } from "@/components/SiteDisclaimer";
import { snowcone } from "@/lib/snowcone";

export const metadata: Metadata = pageMeta({
  title: "Snowcone Stand Blender Calculator & Planner",
  description:
    "Free Snowcone Stand blender calculator and planner for Roblox: Perfect hit rate, expected $/sec and $/hr, fleet scale, offline estimate, shareable builds.",
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
          Need a Snowcone Stand{" "}
          <strong className="font-medium text-fg">blender calculator</strong> or{" "}
          <strong className="font-medium text-fg">blender planner</strong> before
          the next shop buy? Buying the next flavor or totem without math is how
          players burn a session&apos;s cash on a shiny upgrade that loses
          per-second. This calculator uses{" "}
          <span className="font-mono text-fg">
            unit = base × (perfect ? {snowcone.perfectMult} : 1) × mutReduce ×
            totemStack
          </span>
          , then{" "}
          <span className="font-mono text-fg">perSec = unit / blendTime</span>.
          Set a realistic Perfect hit rate to get expected per-second and
          per-hour, scale by blender count, and copy a shareable build link.
          Results are relative planning estimates — not a guarantee of live
          server cash.
        </p>
      </div>
      <DataTrustNote variant="tools" />
      <p className="rounded-xl border border-border bg-surface p-4 text-sm text-muted">
        Use hit-weighted estimates to compare builds — not 100% Perfect fantasy.
        Pull mutReduce from the{" "}
        <Link
          href="/games/snowcone-stand/flavor-mutation-table"
          className="text-accent hover:underline"
        >
          mutation table
        </Link>
        . Wondering if a totem is worth it? Read{" "}
        <Link
          href="/games/snowcone-stand/guides/totem-efficiency"
          className="text-accent hover:underline"
        >
          are totems worth buying
        </Link>
        . For AFK planning see{" "}
        <Link
          href="/games/snowcone-stand/guides/offline-blend-planning"
          className="text-accent hover:underline"
        >
          offline blend planning
        </Link>
        ; for cash context read{" "}
        <Link
          href="/games/snowcone-stand/guides/make-money-fast"
          className="text-accent hover:underline"
        >
          make money faster
        </Link>
        .
      </p>
      <BlenderPlannerClient />
      <SiteDisclaimer />
      <RelatedLinks excludeHref="/games/snowcone-stand/blender-planner" />
    </div>
  );
}

import type { Metadata } from "next";
import { pageMeta } from "@/lib/seo";
import Link from "next/link";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { RelatedLinks } from "@/components/RelatedLinks";
import { DataTrustNote } from "@/components/DataTrustNote";
import { SiteDisclaimer } from "@/components/SiteDisclaimer";
import { snowcone } from "@/lib/snowcone";

export const metadata: Metadata = pageMeta({
  title: "How to Redeem Snowcone Stand Codes",
  description:
    "How to redeem Roblox Snowcone Stand codes, plus MiniGameWiki honest policy on unverified and expired codes.",
  path: "/games/snowcone-stand/how-to-redeem-codes",
});

export default function HowToRedeemCodesPage() {
  return (
    <div className="space-y-8">
      <div>
        <Breadcrumbs
          items={[
            { href: "/games", label: "Games" },
            { href: "/games/snowcone-stand", label: snowcone.game },
            { label: "Redeem codes" },
          ]}
        />
        <h1 className="mt-2 text-3xl font-semibold text-fg">
          How to Redeem Snowcone Stand Codes
        </h1>
        <p className="mt-4 max-w-prose text-muted">
          Players search for working codes every week. Many sites invent
          placeholder or expired strings to farm clicks. This page explains a
          typical Roblox-style redeem flow (button placement can change — always
          confirm in-game) and how MiniGameWiki treats codes — including when
          our{" "}
          <Link
            href="/games/snowcone-stand/codes"
            className="text-accent hover:underline"
          >
            codes table
          </Link>{" "}
          is honestly empty. Last codes check:{" "}
          <span className="font-mono text-fg">{snowcone.codesLastChecked}</span>.
        </p>
      </div>

      <DataTrustNote variant="codes" />

      <section className="space-y-3">
        <h2 className="text-xl font-semibold text-fg">
          Typical redeem steps (confirm in-game)
        </h2>
        <ol className="list-decimal space-y-2 pl-5 text-muted">
          <li>Open Snowcone Stand on Roblox and wait until you are fully loaded in.</li>
          <li>
            Look for a Codes, Shop, or Settings control on the HUD. Exact
            placement is not documented by an official public UI guide — follow
            what the live game shows.
          </li>
          <li>Enter a verified code exactly — codes are often case-sensitive.</li>
          <li>Confirm and check inventory / currency for the reward.</li>
        </ol>
        <p className="text-sm text-muted">
          Prefer the official Roblox game page and the developer group over
          random screenshot farms or “active codes” lists with no proof.
        </p>
      </section>

      <section className="space-y-3">
        <h2 className="text-xl font-semibold text-fg">Our codes policy</h2>
        <ul className="list-disc space-y-2 pl-5 text-muted">
          <li>We publish only codes we can verify as redeemable.</li>
          <li>We remove expired codes instead of keeping them as bait.</li>
          <li>An empty table is a status report, not a missing feature.</li>
        </ul>
        <p className="text-muted">{snowcone.codesNote}</p>
        <p className="rounded-xl border border-border bg-surface p-4 text-sm text-muted">
          Bookmark the{" "}
          <Link
            href="/games/snowcone-stand/codes"
            className="font-medium text-accent hover:underline"
          >
            latest Snowcone Stand codes status page
          </Link>{" "}
          (last checked{" "}
          <span className="font-mono text-fg">{snowcone.codesLastChecked}</span>
          ). After you redeem, use the{" "}
          <Link
            href="/games/snowcone-stand/blender-planner"
            className="text-accent hover:underline"
          >
            Blender Calculator
          </Link>{" "}
          to decide what to buy with the reward cash.
        </p>
      </section>

      <section className="space-y-3">
        <h2 className="text-xl font-semibold text-fg">Find the experience</h2>
        <p className="text-muted">
          Search Roblox for the live experience:{" "}
          <a
            href={snowcone.robloxSearchUrl}
            className="text-accent hover:underline"
            rel="noopener noreferrer"
            target="_blank"
          >
            Snowcone Stand on Roblox Discover
          </a>
          . Always confirm you are in the correct place before entering codes.
        </p>
      </section>

      <SiteDisclaimer />
      <RelatedLinks excludeHref="/games/snowcone-stand/how-to-redeem-codes" />
    </div>
  );
}

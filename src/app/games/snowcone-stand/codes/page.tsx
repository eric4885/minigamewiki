import type { Metadata } from "next";
import { pageMeta } from "@/lib/seo";
import Link from "next/link";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { JsonLd } from "@/components/JsonLd";
import { RelatedLinks } from "@/components/RelatedLinks";
import { SiteDisclaimer } from "@/components/SiteDisclaimer";
import { Card } from "@/components/ui/Card";
import { Table, Td } from "@/components/ui/Table";
import { SITE_URL, snowcone } from "@/lib/snowcone";

export const metadata: Metadata = {
  ...pageMeta({
    title: `Snowcone Stand Codes (Roblox) — Checked ${snowcone.codesLastChecked}`,
    description: `Snowcone Stand codes for Roblox: live status last checked ${snowcone.codesLastChecked}. Verified active codes only — empty when none exist. No fake lists.`,
    path: "/games/snowcone-stand/codes",
  }),
};

const nextSteps = [
  {
    href: "/games/snowcone-stand/guides/make-money-fast",
    title: "Make money without codes",
    body: "Perfect habit, buy order, and what actually raises cash per second.",
  },
  {
    href: "/games/snowcone-stand/blender-planner",
    title: "Blender Calculator",
    body: "Compare flavor + mutation + totem builds with hit rate and per-hour estimates.",
  },
  {
    href: "/games/snowcone-stand/guides/beginner-economy-loop",
    title: "First-hour loop",
    body: "If you are new, start here before chasing rumor code lists.",
  },
];

export default function CodesPage() {
  const codes = snowcone.codes;
  const expired = snowcone.expiredCodes ?? [];
  const hasActive = codes.length > 0;

  const dataCatalogLd = {
    "@context": "https://schema.org",
    "@type": "DataCatalog",
    name: "Snowcone Stand Promo Codes",
    description: snowcone.codesNote,
    url: `${SITE_URL}/games/snowcone-stand/codes`,
    creator: {
      "@type": "Organization",
      name: "MiniGameWiki",
      url: SITE_URL,
    },
    dateModified: snowcone.codesLastChecked,
    license: `${SITE_URL}/terms`,
    dataset: {
      "@type": "Dataset",
      name: "Active Snowcone Stand codes",
      description:
        "Verified public promo codes for Roblox Snowcone Stand. May be empty.",
      license: `${SITE_URL}/terms`,
      creator: {
        "@type": "Organization",
        name: "MiniGameWiki",
        url: SITE_URL,
      },
      variableMeasured: ["code", "reward", "status"],
      dateModified: snowcone.codesLastChecked,
    },
  };

  return (
    <div className="space-y-8">
      <JsonLd data={dataCatalogLd} />

      <div>
        <Breadcrumbs
          items={[
            { href: "/games", label: "Games" },
            { href: "/games/snowcone-stand", label: snowcone.game },
            { label: "Codes" },
          ]}
        />
        <h1 className="mt-2 text-3xl font-semibold text-fg">
          Snowcone Stand Codes (Roblox)
        </h1>
        <p className="mt-2 font-mono text-xs text-muted">
          Live status · Last checked {snowcone.codesLastChecked}
        </p>
        <p className="mt-4 max-w-prose text-muted">
          Looking for Snowcone Stand codes? This page answers whether any{" "}
          <strong className="font-medium text-fg">verified public promo codes</strong>{" "}
          are active right now for the Roblox game. An empty table means we have
          not confirmed a working code — not that we forgot to paste a fake list.
          Promo codes (when they exist) are free in-game rewards from the
          developer; they are not required to play or earn cash.
        </p>
        <p className="mt-3 max-w-prose text-sm text-muted">
          Redeem steps:{" "}
          <Link
            href="/games/snowcone-stand/how-to-redeem-codes"
            className="text-accent hover:underline"
          >
            how to redeem codes
          </Link>
          . Policy:{" "}
          <Link
            href="/games/snowcone-stand/guides/codes-policy"
            className="text-accent hover:underline"
          >
            no fake codes
          </Link>
          .
        </p>
      </div>

      <div className="rounded-xl border border-border bg-surface p-5">
        <div className="flex flex-wrap items-center justify-between gap-3">
          <p className="font-medium text-fg">Current status</p>
          <p
            className={`rounded-md px-2.5 py-1 text-xs font-medium ${
              hasActive
                ? "bg-brand/15 text-brand"
                : "bg-border/60 text-muted"
            }`}
          >
            {hasActive ? "Active codes listed" : "No active verified codes"}
          </p>
        </div>
        <p className="mt-3 text-sm text-muted">{snowcone.codesNote}</p>
        <dl className="mt-4 grid gap-2 text-sm sm:grid-cols-2">
          <div className="flex justify-between gap-3 border-b border-border pb-2 sm:block sm:border-0 sm:pb-0">
            <dt className="text-muted">Last checked</dt>
            <dd className="font-mono text-fg">{snowcone.codesLastChecked}</dd>
          </div>
          <div className="flex justify-between gap-3 sm:block">
            <dt className="text-muted">Active codes</dt>
            <dd className="font-mono text-fg">{codes.length}</dd>
          </div>
        </dl>
        <p className="mt-4 text-sm text-muted">
          Think you found a working code?{" "}
          <Link href="/contact" className="text-accent hover:underline">
            Report it on Contact
          </Link>{" "}
          with the code text and where you saw it. We verify before publishing.
        </p>
      </div>

      {!hasActive && (
        <section className="space-y-3">
          <h2 className="text-xl font-semibold text-fg">
            No codes right now — what to do instead
          </h2>
          <p className="max-w-prose text-sm text-muted">
            Most players progress by Perfect blends, more blenders, and smart
            shop buys. Use these next — bookmark this status page for when a
            real code drop appears.
          </p>
          <div className="grid gap-3 sm:grid-cols-3">
            {nextSteps.map((item) => (
              <Card key={item.href} href={item.href}>
                <h3 className="font-semibold text-fg">{item.title}</h3>
                <p className="mt-2 text-sm text-muted">{item.body}</p>
              </Card>
            ))}
          </div>
        </section>
      )}

      <section className="space-y-3">
        <h2 className="text-xl font-semibold text-fg">Active verified codes</h2>
        <Table
          headers={["Code", "Reward", "Status"]}
          caption={
            hasActive
              ? "Verified codes currently listed"
              : "No active verified codes at last check"
          }
        >
          {hasActive ? (
            codes.map((row) => (
              <tr key={row.code}>
                <Td mono className="text-fg">
                  {row.code}
                </Td>
                <Td>{row.reward}</Td>
                <Td>{row.status}</Td>
              </tr>
            ))
          ) : (
            <tr>
              <Td>—</Td>
              <Td>None listed</Td>
              <Td>No active codes</Td>
            </tr>
          )}
        </Table>
      </section>

      <section className="space-y-3">
        <h2 className="text-xl font-semibold text-fg">
          Expired / retired archive
        </h2>
        <p className="max-w-prose text-sm text-muted">
          Expired codes move here so the page keeps historical value without
          pretending dead codes still work. Unverified social screenshots are
          never archived as “maybe.”
        </p>
        {expired.length === 0 ? (
          <div className="rounded-xl border border-dashed border-border bg-surface/50 p-5 text-sm text-muted">
            No expired codes archived yet. When a verified code stops redeeming,
            it will appear in this archive with a retired note.
          </div>
        ) : (
          <Table
            headers={["Code", "Reward", "Status"]}
            caption="Retired codes kept for reference"
          >
            {expired.map((row) => (
              <tr key={row.code}>
                <Td mono className="text-fg">
                  {row.code}
                </Td>
                <Td>{row.reward}</Td>
                <Td>{row.status}</Td>
              </tr>
            ))}
          </Table>
        )}
      </section>

      <SiteDisclaimer />
      <RelatedLinks excludeHref="/games/snowcone-stand/codes" />
    </div>
  );
}

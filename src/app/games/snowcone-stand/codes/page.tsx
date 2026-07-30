import type { Metadata } from "next";
import Link from "next/link";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { JsonLd } from "@/components/JsonLd";
import { RelatedLinks } from "@/components/RelatedLinks";
import { SiteDisclaimer } from "@/components/SiteDisclaimer";
import { Table, Td } from "@/components/ui/Table";
import { SITE_URL, snowcone } from "@/lib/snowcone";

export const metadata: Metadata = {
  title: "Snowcone Stand Codes",
  description:
    "Verified Snowcone Stand codes for Roblox. We list only confirmed codes — the table stays empty when none are active.",
  alternates: { canonical: "/games/snowcone-stand/codes" },
};

export default function CodesPage() {
  const codes = snowcone.codes;

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
    dataset: {
      "@type": "Dataset",
      name: "Active Snowcone Stand codes",
      description:
        "Verified public promo codes for Roblox Snowcone Stand. May be empty.",
      variableMeasured: ["code", "reward", "status"],
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
          Snowcone Stand Codes
        </h1>
        <p className="mt-4 max-w-prose text-muted">
          Searching for working Snowcone Stand codes usually means wading through
          expired lists, screenshot spam, and pages that invent rewards to farm
          clicks. That wastes your time and can get accounts into bad habits
          around untrusted links. This page exists to answer one question
          honestly: are there any verified public codes right now? We do not
          fabricate entries to look &quot;complete.&quot; When the table is empty,
          that is the status — not a broken page. See also{" "}
          <Link
            href="/games/snowcone-stand/how-to-redeem-codes"
            className="text-accent hover:underline"
          >
            how to redeem codes
          </Link>
          .
        </p>
      </div>

      <div className="rounded-xl border border-border bg-surface p-5">
        <p className="font-medium text-fg">Honest status</p>
        <p className="mt-2 text-sm text-muted">{snowcone.codesNote}</p>
        <p className="mt-3 font-mono text-xs text-muted">
          Last checked: {snowcone.codesLastChecked}
        </p>
      </div>

      <Table
        headers={["Code", "Reward", "Status"]}
        caption={
          codes.length === 0
            ? "No active verified codes at last check."
            : "Verified codes"
        }
      >
        {codes.length === 0 ? (
          <tr>
            <Td>—</Td>
            <Td>None listed</Td>
            <Td>No active codes</Td>
          </tr>
        ) : (
          codes.map((row) => (
            <tr key={row.code}>
              <Td mono className="text-fg">
                {row.code}
              </Td>
              <Td>{row.reward}</Td>
              <Td>{row.status}</Td>
            </tr>
          ))
        )}
      </Table>

      <SiteDisclaimer />
      <RelatedLinks excludeHref="/games/snowcone-stand/codes" />
    </div>
  );
}

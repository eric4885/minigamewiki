import type { Metadata } from "next";
import { pageMeta } from "@/lib/seo";
import Link from "next/link";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { RelatedLinks } from "@/components/RelatedLinks";
import { SiteDisclaimer } from "@/components/SiteDisclaimer";
import { Table, Td } from "@/components/ui/Table";
import { snowcone } from "@/lib/snowcone";

export const metadata: Metadata = pageMeta({
  title: "Flavor & Mutation Table",
  description:
    "Snowcone Stand flavor base values and mutation multipliers in one Roblox reference table for planning blends.",
  path: "/games/snowcone-stand/flavor-mutation-table",
});

export default function FlavorMutationTablePage() {
  return (
    <div className="space-y-8">
      <div>
        <Breadcrumbs
          items={[
            { href: "/games", label: "Games" },
            { href: "/games/snowcone-stand", label: snowcone.game },
            { label: "Flavor × Mutation Table" },
          ]}
        />
        <h1 className="mt-2 text-3xl font-semibold text-fg">
          Snowcone Stand Flavor & Mutation Table
        </h1>
        <p className="mt-4 max-w-prose text-muted">
          Mid-game Snowcone Stand decisions stall when flavor bases and mutation
          multipliers live in separate patch notes, Discord pins, and half-updated
          spreadsheets. You need a single place to see what a flavor is worth
          before Perfect and totems, and what each mutation does as{" "}
          <span className="font-mono text-fg">mutReduce</span>. This table is
          that reference: scrollable on phones, readable on desktop, and wired
          to the same JSON the{" "}
          <Link
            href="/games/snowcone-stand/blender-planner"
            className="text-accent hover:underline"
          >
            Blender Calculator
          </Link>{" "}
          uses so numbers do not drift between pages. Use it to shortlist
          combinations, then confirm per-second output in the calculator with
          your real blend time. Looking for free drops instead? See the{" "}
          <Link
            href="/games/snowcone-stand/codes"
            className="text-accent hover:underline"
          >
            latest codes status
          </Link>
          . Values are fan-maintained planning data — re-check in-game after
          balance patches.
        </p>
      </div>

      <p className="rounded-xl border border-border bg-surface p-4 text-sm text-muted">
        Next step for &quot;best mutation&quot; decisions: shortlist here, then confirm
        per-second in the{" "}
        <Link
          href="/games/snowcone-stand/blender-planner"
          className="text-accent hover:underline"
        >
          Blender Calculator
        </Link>
        . Plain-English walkthrough:{" "}
        <Link
          href="/games/snowcone-stand/guides/mutations-plain-english"
          className="text-accent hover:underline"
        >
          mutations explained simply
        </Link>
        .
      </p>

      <section className="space-y-3">
        <h2 className="text-xl font-semibold text-fg">Flavors</h2>
        <Table headers={["Flavor", "Tier", "Base", "Unlock", "Notes"]}>
          {snowcone.flavors.map((f) => (
            <tr key={f.id}>
              <Td className="text-fg">{f.name}</Td>
              <Td mono>{f.tier}</Td>
              <Td mono>{f.baseValue}</Td>
              <Td>{f.unlock}</Td>
              <Td className="whitespace-normal">{f.notes}</Td>
            </tr>
          ))}
        </Table>
      </section>

      <section className="space-y-3">
        <h2 className="text-xl font-semibold text-fg">Mutations</h2>
        <Table headers={["Mutation", "Rarity", "mutReduce", "Notes"]}>
          {snowcone.mutations.map((m) => (
            <tr key={m.id}>
              <Td className="text-fg">{m.name}</Td>
              <Td>{m.rarity}</Td>
              <Td mono>×{m.reduceMult}</Td>
              <Td className="whitespace-normal">{m.notes}</Td>
            </tr>
          ))}
        </Table>
      </section>

      <section className="space-y-3">
        <h2 className="text-xl font-semibold text-fg">Totems</h2>
        <Table headers={["Totem", "totemStack", "Notes"]}>
          {snowcone.totems.map((t) => (
            <tr key={t.id}>
              <Td className="text-fg">{t.name}</Td>
              <Td mono>×{t.stackMult}</Td>
              <Td className="whitespace-normal">{t.notes}</Td>
            </tr>
          ))}
        </Table>
      </section>

      <SiteDisclaimer />
      <RelatedLinks excludeHref="/games/snowcone-stand/flavor-mutation-table" />
    </div>
  );
}

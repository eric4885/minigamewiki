import type { Metadata } from "next";
import Link from "next/link";
import { RelatedLinks } from "@/components/RelatedLinks";
import { SiteDisclaimer } from "@/components/SiteDisclaimer";
import { Table, Td } from "@/components/ui/Table";
import { snowcone } from "@/lib/snowcone";

export const metadata: Metadata = {
  title: "Flavor × Mutation Table",
  description:
    "Snowcone Stand flavor base values and mutation multipliers in one reference table for Roblox players.",
  alternates: { canonical: "/games/snowcone-stand/flavor-mutation-table" },
};

export default function FlavorMutationTablePage() {
  return (
    <div className="space-y-8">
      <div>
        <p className="text-sm text-brand">
          <Link href="/games/snowcone-stand" className="hover:underline">
            {snowcone.game}
          </Link>{" "}
          / Flavor × Mutation Table
        </p>
        <h1 className="mt-2 text-3xl font-semibold text-fg">
          Flavor × Mutation Table
        </h1>
        <p className="mt-4 max-w-prose text-muted">
          Mid-game Snowcone Stand decisions stall when flavor bases and mutation
          multipliers live in separate patch notes, Discord pins, and half-updated
          spreadsheets. You need a single place to see what a flavor is worth
          before Perfect and totems, and what each mutation does as{" "}
          <span className="font-mono text-fg">mutReduce</span>. This table is
          that reference: scrollable on phones, readable on desktop, and wired
          to the same JSON the Blender Planner uses so numbers do not drift
          between pages. Use it to shortlist combinations, then confirm
          per-second output in the planner with your real blend time. Values are
          fan-maintained planning data — re-check in-game after balance patches.
        </p>
      </div>

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

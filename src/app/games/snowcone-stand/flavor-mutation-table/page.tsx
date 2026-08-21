import type { Metadata } from "next";
import { pageMeta } from "@/lib/seo";
import Link from "next/link";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { RelatedLinks } from "@/components/RelatedLinks";
import { DataTrustNote } from "@/components/DataTrustNote";
import { SiteDisclaimer } from "@/components/SiteDisclaimer";
import { Table, Td } from "@/components/ui/Table";
import { snowcone } from "@/lib/snowcone";

export const metadata: Metadata = pageMeta({
  title: "Snowcone Stand Mutation Table (Flavor × Mut)",
  description:
    "Snowcone Stand mutation table and flavor bases for Roblox. Compare mutReduce for best-mutation planning — editorial values, verify in-game after patches.",
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
            { label: "Mutation Table" },
          ]}
        />
        <h1 className="mt-2 text-3xl font-semibold text-fg">
          Snowcone Stand Mutation Table
        </h1>
        <p className="mt-4 max-w-prose text-muted">
          Looking for a Snowcone Stand{" "}
          <strong className="font-medium text-fg">mutation table</strong> or the{" "}
          <strong className="font-medium text-fg">best mutation</strong> for cash?
          Use one table to shortlist flavor bases and{" "}
          <span className="font-mono text-fg">mutReduce</span> values before you
          open the{" "}
          <Link
            href="/games/snowcone-stand/blender-planner"
            className="text-accent hover:underline"
          >
            Blender Calculator
          </Link>
          . Numbers here are editorial planning data wired to the same JSON as
          the calculator — not an official Roblox datasheet and not copied from
          unverified fan-wiki price lists. Re-check in-game after patches. For
          promo drops see the{" "}
          <Link
            href="/games/snowcone-stand/codes"
            className="text-accent hover:underline"
          >
            latest codes status
          </Link>
          .
        </p>
      </div>

      <DataTrustNote variant="tools" />

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
          best mutation explained simply
        </Link>
        . Chase order:{" "}
        <Link
          href="/games/snowcone-stand/guides/mutation-stacking-guide"
          className="text-accent hover:underline"
        >
          mutation stacking guide
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

import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Card } from "@/components/ui/Card";
import { getLatestGuides } from "@/lib/snowcone";

export const metadata: Metadata = {
  title: "Snowcone Stand Wiki & Tools for Roblox",
  description:
    "Snowcone Stand wiki-style tools for Roblox: blender calculator, flavor × mutation table, tier list, latest codes status, and guides.",
  alternates: { canonical: "/" },
};

const tools = [
  {
    href: "/games/snowcone-stand/blender-planner",
    title: "Blender Calculator",
    body: "Model Perfect Blend, mutations, and totems. Compare unit value and per-second output before you spend cash.",
  },
  {
    href: "/games/snowcone-stand/flavor-mutation-table",
    title: "Flavor × Mutation Table",
    body: "Scan every flavor and mutation multiplier in one scrollable table built for mobile and desktop.",
  },
  {
    href: "/games/snowcone-stand/tier-list",
    title: "Tier List",
    body: "S–D rankings for flavors, mutations, and totems with clear assumptions so you know when to ignore them.",
  },
];

export default function HomePage() {
  const guides = getLatestGuides(6);

  return (
    <div className="space-y-14">
      <section className="grid items-center gap-8 md:grid-cols-2">
        <div>
          <p className="mb-2 text-sm font-medium text-brand">MiniGameWiki</p>
          <h1 className="text-3xl font-semibold tracking-tight text-fg sm:text-4xl">
            Snowcone Stand Wiki & Tools for Roblox
          </h1>
          <p className="mt-4 max-w-prose text-muted">
            Plan blends, compare mutations, and read honest guides — without
            fake codes or paywalled calculators. Built for players who want
            per-second math, not hype.
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <Link
              href="/games/snowcone-stand/blender-planner"
              className="inline-flex rounded-md bg-brand px-4 py-2 text-sm font-medium text-bg transition hover:opacity-90"
            >
              Open Blender Calculator
            </Link>
            <Link
              href="/games/snowcone-stand"
              className="inline-flex rounded-md border border-border bg-surface px-4 py-2 text-sm font-medium text-fg transition hover:border-brand/50"
            >
              Snowcone Stand hub
            </Link>
          </div>
        </div>
        <div className="relative aspect-[4/3] w-full overflow-hidden rounded-xl border border-border bg-surface">
          <Image
            src="/images/snowcone-hero.svg"
            alt="Snowcone Stand tools illustration"
            fill
            className="object-cover"
            priority
          />
        </div>
      </section>

      <section>
        <h2 className="mb-4 text-xl font-semibold text-fg">Tools</h2>
        <div className="grid gap-4 sm:grid-cols-3">
          {tools.map((tool) => (
            <Card key={tool.href} href={tool.href}>
              <h3 className="font-semibold text-fg">{tool.title}</h3>
              <p className="mt-2 text-sm text-muted">{tool.body}</p>
            </Card>
          ))}
        </div>
      </section>

      <section>
        <div className="mb-4 flex items-end justify-between gap-4">
          <h2 className="text-xl font-semibold text-fg">Latest Guides</h2>
          <Link
            href="/games/snowcone-stand/guides"
            className="text-sm text-accent hover:underline"
          >
            View all
          </Link>
        </div>
        <ul className="space-y-3">
          {guides.map((guide) => (
            <li key={guide.slug}>
              <Card href={`/games/snowcone-stand/guides/${guide.slug}`}>
                <div className="flex flex-col gap-1 sm:flex-row sm:items-baseline sm:justify-between">
                  <h3 className="font-medium text-fg">{guide.title}</h3>
                  <time
                    dateTime={guide.updatedAt}
                    className="shrink-0 font-mono text-xs text-muted"
                  >
                    {guide.updatedAt}
                  </time>
                </div>
                <p className="mt-2 text-sm text-muted">{guide.excerpt}</p>
              </Card>
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
}

import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { getLatestGuides } from "@/lib/snowcone";

export const metadata: Metadata = {
  title: {
    absolute: "Snowcone Stand Wiki & Tools for Roblox | MiniGameWiki",
  },
  description:
    "Snowcone Stand wiki-style tools for Roblox: blender calculator, flavor × mutation table, tier list, latest codes status, and guides.",
  alternates: { canonical: "/" },
  openGraph: { url: "/" },
};

const tools = [
  {
    href: "/games/snowcone-stand/blender-planner",
    title: "Blender Calculator",
    body: "Perfect Blend, mutations, and totems — unit value and per-second output.",
  },
  {
    href: "/games/snowcone-stand/codes",
    title: "Latest Codes",
    body: "Verified status only. Empty when no active public codes.",
  },
  {
    href: "/games/snowcone-stand/flavor-mutation-table",
    title: "Flavor × Mutation Table",
    body: "Bases and mutation multipliers in one reference table.",
  },
  {
    href: "/games/snowcone-stand/tier-list",
    title: "Tier List",
    body: "S–D ranks with explicit assumptions you can challenge.",
  },
];

export default function HomePage() {
  const guides = getLatestGuides(6);

  return (
    <div className="space-y-16">
      <section className="relative -mx-4 -mt-10 overflow-hidden border-b border-border">
        <div className="absolute inset-0">
          <Image
            src="/images/snowcone-hero.svg"
            alt=""
            fill
            className="object-cover opacity-40"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-b from-bg/40 via-bg/80 to-bg" />
        </div>
        <div className="relative mx-auto max-w-5xl px-4 pb-14 pt-16 sm:pt-20">
          <p className="text-sm font-semibold tracking-wide text-brand">
            MiniGameWiki
          </p>
          <h1 className="mt-3 max-w-2xl text-4xl font-semibold tracking-tight text-fg sm:text-5xl">
            Snowcone Stand Wiki & Tools for Roblox
          </h1>
          <p className="mt-4 max-w-xl text-muted">
            Plan blends, compare mutations, and read honest guides — without
            fake codes or paywalled calculators.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link
              href="/games/snowcone-stand/blender-planner"
              className="inline-flex rounded-md bg-brand px-4 py-2 text-sm font-medium text-bg transition hover:opacity-90"
            >
              Open Blender Calculator
            </Link>
            <Link
              href="/games/snowcone-stand/codes"
              className="inline-flex rounded-md border border-border bg-bg/70 px-4 py-2 text-sm font-medium text-fg backdrop-blur transition hover:border-brand/50"
            >
              Latest codes status
            </Link>
          </div>
        </div>
      </section>

      <section>
        <div className="mb-4 flex items-end justify-between gap-4">
          <h2 className="text-xl font-semibold text-fg">Tools</h2>
          <Link
            href="/games/snowcone-stand"
            className="text-sm text-accent hover:underline"
          >
            Snowcone Stand hub
          </Link>
        </div>
        <ul className="divide-y divide-border border-y border-border">
          {tools.map((tool) => (
            <li key={tool.href}>
              <Link
                href={tool.href}
                className="flex flex-col gap-1 py-4 transition hover:text-brand sm:flex-row sm:items-baseline sm:justify-between sm:gap-6"
              >
                <span className="font-medium text-fg">{tool.title}</span>
                <span className="text-sm text-muted sm:max-w-md sm:text-right">
                  {tool.body}
                </span>
              </Link>
            </li>
          ))}
        </ul>
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
        <ul className="divide-y divide-border border-y border-border">
          {guides.map((guide) => (
            <li key={guide.slug}>
              <Link
                href={`/games/snowcone-stand/guides/${guide.slug}`}
                className="block py-4 transition hover:opacity-90"
              >
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
              </Link>
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
}

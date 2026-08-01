import Link from "next/link";
import { Card } from "@/components/ui/Card";

/** Priority order: calculator + codes first for SEO equity. */
const defaultLinks = [
  {
    href: "/games/snowcone-stand/blender-planner",
    title: "Blender Calculator",
    body: "Compare unit value and per-second output.",
  },
  {
    href: "/games/snowcone-stand/codes",
    title: "Latest Codes",
    body: "Live status — empty when none verified.",
  },
  {
    href: "/games/snowcone-stand/tier-list",
    title: "Tier List",
    body: "S–D ranks with explicit assumptions.",
  },
  {
    href: "/games/snowcone-stand/flavor-mutation-table",
    title: "Flavor × Mutation Table",
    body: "Reference bases and multipliers.",
  },
  {
    href: "/games/snowcone-stand/how-to-redeem-codes",
    title: "How to Redeem Codes",
    body: "Redeem steps and no-fake-codes policy.",
  },
  {
    href: "/games/snowcone-stand/guides",
    title: "Guides",
    body: "Economy, timing, mutations, endgame.",
  },
  {
    href: "/games/snowcone-stand/faq",
    title: "FAQ",
    body: "Common questions about tools and data.",
  },
];

type RelatedLinksProps = {
  excludeHref?: string;
  limit?: number;
};

export function RelatedLinks({ excludeHref, limit = 6 }: RelatedLinksProps) {
  const links = defaultLinks
    .filter((l) => l.href !== excludeHref)
    .slice(0, limit);

  return (
    <section className="space-y-3">
      <h2 className="text-lg font-semibold text-fg">Related</h2>
      <div className="grid gap-3 sm:grid-cols-2">
        {links.map((item) => (
          <Card key={item.href} href={item.href} className="p-4">
            <h3 className="font-medium text-fg">{item.title}</h3>
            <p className="mt-1 text-sm text-muted">{item.body}</p>
          </Card>
        ))}
      </div>
      <p className="text-sm text-muted">
        <Link
          href="/games/snowcone-stand"
          className="text-accent hover:underline"
        >
          Snowcone Stand hub
        </Link>
        {" · "}
        <Link
          href="/games/snowcone-stand/codes"
          className="text-accent hover:underline"
        >
          Latest codes
        </Link>
        {" · "}
        <Link
          href="/games/snowcone-stand/blender-planner"
          className="text-accent hover:underline"
        >
          Blender calculator
        </Link>
        {" · "}
        <Link
          href="/games/snowcone-stand/updates"
          className="text-accent hover:underline"
        >
          Changelog
        </Link>
      </p>
    </section>
  );
}

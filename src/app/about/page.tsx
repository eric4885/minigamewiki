import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About",
  description:
    "About MiniGameWiki — independent Roblox mini-game tools and guides, starting with Snowcone Stand.",
};

export default function AboutPage() {
  return (
    <article className="prose-invert max-w-none space-y-6">
      <h1 className="text-3xl font-semibold text-fg">About MiniGameWiki</h1>
      <p className="text-muted">
        MiniGameWiki publishes free calculators, reference tables, and guides
        for Roblox mini-games. Our first focus is Snowcone Stand: blender
        planning, flavor and mutation data, tier lists, and an honest codes
        tracker.
      </p>
      <p className="text-muted">
        We keep data in structured JSON, ship a fully static site, and avoid
        fake promo codes or paywalled tools. Numbers are planning aids — always
        verify in-game after patches.
      </p>

      <h2 className="text-xl font-semibold text-fg">
        Independent Author Statement
      </h2>
      <blockquote className="rounded-xl border border-border bg-surface p-5 text-muted">
        <p>
          MiniGameWiki is an independently operated fan website. It is not
          affiliated with, endorsed by, sponsored by, or otherwise connected to
          Roblox Corporation, any Roblox experience developer, or the creators
          of Snowcone Stand. Roblox® is a registered trademark of Roblox
          Corporation. Game names, assets, and related marks belong to their
          respective owners. All tools, tables, tier lists, and written guides
          on this site are original editorial and engineering work produced by
          MiniGameWiki for informational and entertainment purposes only. We do
          not claim official status, do not sell Roblox accounts or items, and
          do not guarantee in-game outcomes. If you are a rights holder and
          believe content should be corrected or removed, contact us via the
          Contact page and we will respond promptly.
        </p>
      </blockquote>
    </article>
  );
}

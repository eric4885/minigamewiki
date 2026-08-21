import type { Metadata } from "next";
import { pageMeta } from "@/lib/seo";
import Link from "next/link";
import type { ReactNode } from "react";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { JsonLd } from "@/components/JsonLd";
import { RelatedLinks } from "@/components/RelatedLinks";
import { SiteDisclaimer } from "@/components/SiteDisclaimer";
import { snowcone, SITE_URL } from "@/lib/snowcone";

export const metadata: Metadata = pageMeta({
  title: "Snowcone Stand FAQ",
  description:
    "FAQ for MiniGameWiki Snowcone Stand tools: codes status, blender calculator math, tiers, and data accuracy.",
  path: "/games/snowcone-stand/faq",
});

type FaqItem = {
  q: string;
  plain: string;
  a: ReactNode;
};

const faqs: FaqItem[] = [
  {
    q: "Is MiniGameWiki an official Snowcone Stand or Roblox wiki?",
    plain:
      "No. We are an independent fan site. We are not affiliated with Roblox Corporation or the game’s developers.",
    a: "No. We are an independent fan site. We are not affiliated with Roblox Corporation or the game’s developers.",
  },
  {
    q: "What are Snowcone Stand codes for?",
    plain:
      "Promo codes (when they exist) redeem for free in-game rewards from the developer. They are a bonus — not required to play, not Robux, and not a substitute for Perfect timing and blenders.",
    a: (
      <>
        Promo codes (when they exist) redeem for free in-game rewards from the
        developer. They are a bonus — not required to play, not Robux, and not a
        substitute for Perfect timing and blenders. Read{" "}
        <Link
          href="/games/snowcone-stand/guides/what-are-snowcone-stand-codes"
          className="text-accent hover:underline"
        >
          what are codes for
        </Link>{" "}
        and check live status on the{" "}
        <Link
          href="/games/snowcone-stand/codes"
          className="text-accent hover:underline"
        >
          codes page
        </Link>
        .
      </>
    ),
  },
  {
    q: "Snowcone Stand vs Grow a Garden — which should I play?",
    plain:
      "Grow a Garden is more hands-off idle with an established code system. Snowcone Stand is idle-friendly but rewards Perfect timing. Pick by loop preference; see our comparison guide.",
    a: (
      <>
        Grow a Garden is more hands-off idle with an established code system.
        Snowcone Stand is idle-friendly but rewards Perfect timing when you are
        online. Full comparison:{" "}
        <Link
          href="/games/snowcone-stand/guides/vs-grow-a-garden"
          className="text-accent hover:underline"
        >
          Snowcone Stand vs Grow a Garden
        </Link>
        .
      </>
    ),
  },
  {
    q: "Why is the codes page empty?",
    plain:
      "Because we only list codes we can verify. An empty table means no confirmed active public codes at the last check date — not a broken page. We ignore aggregator sites that invent placeholder codes.",
    a: (
      <>
        Because we only list codes we can verify. An empty table on the{" "}
        <Link
          href="/games/snowcone-stand/codes"
          className="text-accent hover:underline"
        >
          latest codes status page
        </Link>{" "}
        means no confirmed active public codes at the last check date — not a
        broken page. Sites that fill tables with generic “active” strings
        without proof are treated as unverified marketing. See also{" "}
        <Link
          href="/games/snowcone-stand/how-to-redeem-codes"
          className="text-accent hover:underline"
        >
          how to redeem codes
        </Link>
        .
      </>
    ),
  },
  {
    q: "Are your flavor and mutation numbers official?",
    plain:
      "No. Official Roblox text confirms the core loop. Our tables and calculator use editorial planning models for comparisons. Re-check values in-game after patches. We do not treat unverified fan-wiki price lists as fact.",
    a: (
      <>
        No. The official Roblox game description confirms the core loop (Perfect
        timing, offline blending, rotating shop, weight leaderboard,
        mutations/totems). Our{" "}
        <Link
          href="/games/snowcone-stand/flavor-mutation-table"
          className="text-accent hover:underline"
        >
          flavor × mutation table
        </Link>{" "}
        and{" "}
        <Link
          href="/games/snowcone-stand/blender-planner"
          className="text-accent hover:underline"
        >
          Blender Calculator
        </Link>{" "}
        use editorial planning models so you can compare builds — not a claim of
        exact live payouts. We do not import unverified fan-wiki upgrade price
        sheets. If in-game values differ,{" "}
        <Link href="/contact" className="text-accent hover:underline">
          report them
        </Link>
        .
      </>
    ),
  },
  {
    q: "How does the Blender Calculator formula work?",
    plain: `Planning model: unit = base × (perfect ? ${snowcone.perfectMult} : 1) × mutReduce × totemStack, then perSec = unit ÷ blendTime. Use it to compare builds; confirm in-game.`,
    a: (
      <>
        On the{" "}
        <Link
          href="/games/snowcone-stand/blender-planner"
          className="text-accent hover:underline"
        >
          Blender Calculator
        </Link>
        , we use a planning model: unit = base × (perfect ?{" "}
        {snowcone.perfectMult} : 1) × mutReduce × totemStack, then perSec = unit
        ÷ blendTime. Perfect is modeled as a {snowcone.perfectMult}× multiplier.
        Treat outputs as relative comparisons, not guaranteed server cash.
      </>
    ),
  },
  {
    q: "Should I trust the tier list over unlock order?",
    plain:
      "Early game, unlock order and cash on hand matter more. Our tiers assume mid-to-late play with Perfect Blend practice. Read the assumptions on the tier list page.",
    a: (
      <>
        Early game, unlock order and cash on hand matter more. Our tiers assume
        mid-to-late play with Perfect Blend practice. Read the assumptions on
        the{" "}
        <Link
          href="/games/snowcone-stand/tier-list"
          className="text-accent hover:underline"
        >
          tier list
        </Link>{" "}
        and confirm upgrades in the{" "}
        <Link
          href="/games/snowcone-stand/blender-planner"
          className="text-accent hover:underline"
        >
          Blender Calculator
        </Link>
        .
      </>
    ),
  },
  {
    q: "What if a number is wrong after a patch?",
    plain:
      "Use the Contact page with the page URL, what changed in-game, and a screenshot if possible. We update JSON data after verification.",
    a: (
      <>
        Use the{" "}
        <Link href="/contact" className="text-accent hover:underline">
          Contact page
        </Link>{" "}
        with the page URL, what changed in-game, and a screenshot if possible.
        We update JSON data after verification.
      </>
    ),
  },
  {
    q: "Do you sell Roblox accounts or items?",
    plain: "No. We only publish tools and guides.",
    a: "No. We only publish tools and guides.",
  },
];

export default function SnowconeFaqPage() {
  const faqLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((item) => ({
      "@type": "Question",
      name: item.q,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.plain,
      },
    })),
    url: `${SITE_URL}/games/snowcone-stand/faq`,
  };

  return (
    <div className="space-y-8">
      <JsonLd data={faqLd} />
      <div>
        <Breadcrumbs
          items={[
            { href: "/games", label: "Games" },
            { href: "/games/snowcone-stand", label: snowcone.game },
            { label: "FAQ" },
          ]}
        />
        <h1 className="mt-2 text-3xl font-semibold text-fg">
          Snowcone Stand FAQ
        </h1>
        <p className="mt-4 max-w-prose text-muted">
          Short answers about how MiniGameWiki tools work, why codes may be
          empty, and how we handle updates. Start with the{" "}
          <Link
            href="/games/snowcone-stand/codes"
            className="text-accent hover:underline"
          >
            latest codes status
          </Link>{" "}
          or the{" "}
          <Link
            href="/games/snowcone-stand/blender-planner"
            className="text-accent hover:underline"
          >
            Blender Calculator
          </Link>
          .
        </p>
      </div>

      <ul className="space-y-4">
        {faqs.map((item) => (
          <li
            key={item.q}
            className="rounded-xl border border-border bg-surface p-5"
          >
            <h2 className="font-semibold text-fg">{item.q}</h2>
            <p className="mt-2 text-sm text-muted">{item.a}</p>
          </li>
        ))}
      </ul>

      <SiteDisclaimer />
      <RelatedLinks excludeHref="/games/snowcone-stand/faq" />
    </div>
  );
}

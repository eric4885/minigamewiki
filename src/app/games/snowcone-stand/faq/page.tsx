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
    q: "Why is the codes page empty?",
    plain:
      "Because we only list codes we can verify. An empty table means no confirmed active public codes at the last check date — not a broken page.",
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
        broken page. See also{" "}
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
    q: "How does the Blender Calculator formula work?",
    plain: `unit = base × (perfect ? ${snowcone.perfectMult} : 1) × mutReduce × totemStack, then perSec = unit ÷ blendTime. Perfect Blend is modeled as a ${snowcone.perfectMult}× multiplier.`,
    a: (
      <>
        On the{" "}
        <Link
          href="/games/snowcone-stand/blender-planner"
          className="text-accent hover:underline"
        >
          Blender Calculator
        </Link>
        : unit = base × (perfect ? {snowcone.perfectMult} : 1) × mutReduce ×
        totemStack, then perSec = unit ÷ blendTime. Perfect Blend is modeled as
        a {snowcone.perfectMult}× multiplier.
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

import type { Metadata } from "next";
import { pageMeta } from "@/lib/seo";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { RelatedLinks } from "@/components/RelatedLinks";
import { SiteDisclaimer } from "@/components/SiteDisclaimer";
import { snowcone } from "@/lib/snowcone";

export const metadata: Metadata = pageMeta({
  title: "Snowcone Stand Changelog",
  description:
    "Changelog for MiniGameWiki Snowcone Stand: data reviews, tool updates, guide edits, and codes status checks.",
  path: "/games/snowcone-stand/updates",
});

export default function SnowconeUpdatesPage() {
  return (
    <div className="space-y-8">
      <div>
        <Breadcrumbs
          items={[
            { href: "/games", label: "Games" },
            { href: "/games/snowcone-stand", label: snowcone.game },
            { label: "Changelog" },
          ]}
        />
        <h1 className="mt-2 text-3xl font-semibold text-fg">
          Snowcone Stand Changelog
        </h1>
        <p className="mt-4 max-w-prose text-muted">
          Data and page revisions for our Snowcone Stand hub. Latest data review:{" "}
          <span className="font-mono text-fg">{snowcone.dataReviewedAt}</span>.
        </p>
      </div>

      <ol className="space-y-4">
        {snowcone.changelog.map((entry) => (
          <li
            key={entry.date}
            className="rounded-xl border border-border bg-surface p-5"
          >
            <time
              dateTime={entry.date}
              className="font-mono text-sm text-brand"
            >
              {entry.date}
            </time>
            <ul className="mt-3 list-disc space-y-1 pl-5 text-sm text-muted">
              {entry.items.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </li>
        ))}
      </ol>

      <SiteDisclaimer />
      <RelatedLinks excludeHref="/games/snowcone-stand/updates" />
    </div>
  );
}

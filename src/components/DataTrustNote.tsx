import Link from "next/link";

type DataTrustNoteProps = {
  className?: string;
  /** Extra context for tool vs codes pages */
  variant?: "default" | "tools" | "codes";
};

export function DataTrustNote({
  className = "",
  variant = "default",
}: DataTrustNoteProps) {
  const extra =
    variant === "tools"
      ? " Tables and calculator outputs are planning models for comparing builds — not a promise of exact in-game payouts. We do not copy unverified fan-wiki price lists."
      : variant === "codes"
        ? " We never invent promo codes. Aggregator sites that fill tables with placeholder strings are ignored until a code is verified in-game or posted by the developer."
        : " Exact prices, drop rates, and upgrade costs stay off this site until we can verify them in-game.";

  return (
    <div
      className={`rounded-xl border border-border bg-surface p-4 text-sm text-muted ${className}`}
    >
      <p className="font-medium text-fg">Data trust</p>
      <p className="mt-2">
        Independent fan site — not affiliated with Roblox or Steel Sharpens
        Steel. Official loop facts come from the Roblox game description; numbers
        in our JSON are editorial planning data and must be re-checked in-game
        after patches.
        {extra} See the{" "}
        <Link
          href="/games/snowcone-stand/faq"
          className="text-accent hover:underline"
        >
          FAQ
        </Link>{" "}
        or{" "}
        <Link href="/contact" className="text-accent hover:underline">
          report an error
        </Link>
        .
      </p>
    </div>
  );
}

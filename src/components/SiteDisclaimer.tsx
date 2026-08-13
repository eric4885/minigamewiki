import Link from "next/link";

export function SiteDisclaimer({ className = "" }: { className?: string }) {
  return (
    <p className={`text-xs leading-relaxed text-muted ${className}`}>
      Fan-maintained planning data — not affiliated with Roblox or the game
      developers. We do not invent promo codes or copy unverified wiki price
      lists. Mechanics change; verify values in-game before spending.{" "}
      <Link
        href="/games/snowcone-stand/faq"
        className="text-accent hover:underline"
      >
        FAQ
      </Link>
      {" · "}
      <Link href="/terms" className="text-accent hover:underline">
        Terms
      </Link>
      {" · "}
      <Link href="/contact" className="text-accent hover:underline">
        Report an error
      </Link>
    </p>
  );
}

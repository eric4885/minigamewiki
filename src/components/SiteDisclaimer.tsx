import Link from "next/link";

export function SiteDisclaimer({ className = "" }: { className?: string }) {
  return (
    <p className={`text-xs leading-relaxed text-muted ${className}`}>
      Fan-maintained planning data — not affiliated with Roblox or the game
      developers. Mechanics change; always verify values in-game.{" "}
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

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms of Use",
  description: "Terms of Use for MiniGameWiki.com.",
};

export default function TermsPage() {
  return (
    <article className="space-y-6 text-muted">
      <h1 className="text-3xl font-semibold text-fg">Terms of Use</h1>
      <p className="text-sm">Last updated: July 29, 2026</p>

      <p>
        By accessing MiniGameWiki.com (the &quot;Site&quot;), you agree to these
        Terms of Use. If you do not agree, do not use the Site.
      </p>

      <h2 className="text-xl font-semibold text-fg">Fan Content Disclaimer</h2>
      <p>
        MiniGameWiki is an independent fan site. It is not affiliated with
        Roblox Corporation or the developers of any listed game. All trademarks
        remain the property of their owners.
      </p>

      <h2 className="text-xl font-semibold text-fg">Informational Purpose</h2>
      <p>
        Calculators, tables, tier lists, guides, and code listings are provided
        for informational and entertainment purposes only. Game mechanics change;
        always verify values in-game. We do not guarantee accuracy, uptime, or
        outcomes.
      </p>

      <h2 className="text-xl font-semibold text-fg">Acceptable Use</h2>
      <p>
        You may not misuse the Site, attempt to disrupt it, scrape it in a way
        that harms availability, or use our content to mislead others (including
        redistributing invented promo codes as if they came from us).
      </p>

      <h2 className="text-xl font-semibold text-fg">Intellectual Property</h2>
      <p>
        Original text, layout, and tooling on this Site are owned by MiniGameWiki
        unless otherwise noted. You may link to our pages with attribution. Do
        not present our work as official Roblox or game-developer material.
      </p>

      <h2 className="text-xl font-semibold text-fg">Limitation of Liability</h2>
      <p>
        To the fullest extent permitted by law, MiniGameWiki is not liable for
        any damages arising from your use of the Site or reliance on its
        content.
      </p>

      <h2 className="text-xl font-semibold text-fg">Contact</h2>
      <p>
        Questions about these Terms:{" "}
        <a href="mailto:hello@minigamewiki.com" className="text-accent hover:underline">
          hello@minigamewiki.com
        </a>
        .
      </p>
    </article>
  );
}

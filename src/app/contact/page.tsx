import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact",
  description: "Contact MiniGameWiki for corrections, code tips, or rights requests.",
};

export default function ContactPage() {
  return (
    <article className="space-y-6">
      <h1 className="text-3xl font-semibold text-fg">Contact</h1>
      <p className="max-w-prose text-muted">
        Questions, data corrections, verified code tips, or rights requests —
        email us. Include links or screenshots when reporting a code so we can
        verify before publishing.
      </p>
      <p className="text-fg">
        Email:{" "}
        <a
          href="mailto:hello@minigamewiki.com"
          className="text-accent hover:underline"
        >
          hello@minigamewiki.com
        </a>
      </p>
      <p className="text-sm text-muted">
        We aim to reply within a few business days. We do not provide account
        recovery, Roblox support, or in-game moderation help.
      </p>
    </article>
  );
}

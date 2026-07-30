import type { Metadata } from "next";
import Link from "next/link";
import { CONTACT_EMAIL } from "@/lib/snowcone";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Contact MiniGameWiki for corrections, code tips, DMCA notices, or rights requests.",
  alternates: { canonical: "/contact" },
};

export default function ContactPage() {
  const mailtoReport = `mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent(
    "Data correction — Snowcone Stand"
  )}&body=${encodeURIComponent(
    "Page URL:\nWhat looks wrong:\nWhat you see in-game:\nGame/version or date noticed:\nScreenshot link (optional):\n"
  )}`;

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
          href={`mailto:${CONTACT_EMAIL}`}
          className="text-accent hover:underline"
        >
          {CONTACT_EMAIL}
        </a>
      </p>

      <section className="rounded-xl border border-border bg-surface p-5 space-y-3">
        <h2 className="font-semibold text-fg">Report wrong data</h2>
        <p className="text-sm text-muted">
          Please include: the page URL, what our site shows, what you see
          in-game, and when you noticed the difference. A screenshot helps.
        </p>
        <a
          href={mailtoReport}
          className="inline-flex rounded-md bg-brand px-4 py-2 text-sm font-medium text-bg transition hover:opacity-90"
        >
          Draft correction email
        </a>
      </section>

      <p className="text-sm text-muted">
        Copyright / DMCA notices: use the{" "}
        <Link href="/dmca" className="text-accent hover:underline">
          DMCA page
        </Link>
        . We aim to reply within a few business days. We do not provide account
        recovery, Roblox support, or in-game moderation help.
      </p>
    </article>
  );
}

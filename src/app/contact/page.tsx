import type { Metadata } from "next";
import { pageMeta } from "@/lib/seo";
import Link from "next/link";
import { ContactEmail } from "@/components/ContactEmail";

export const metadata: Metadata = pageMeta({
  title: "Contact | MiniGameWiki",
  description:
    "Contact MiniGameWiki to report wrong data, tip verified Snowcone Stand codes, or send DMCA and rights requests.",
  path: "/contact",
  absolute: true,
});

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
        Email: <ContactEmail />
      </p>
      <p className="text-sm text-muted">
        Copy the address into your email app (we avoid clickable mailto links so
        scanners do not flag Cloudflare email-protection URLs as broken pages).
      </p>

      <section className="rounded-xl border border-border bg-surface p-5 space-y-3">
        <h2 className="font-semibold text-fg">Report wrong data</h2>
        <p className="text-sm text-muted">
          Email <ContactEmail className="font-mono text-fg" /> with subject
          &quot;Data correction — Snowcone Stand&quot;. Include: the page URL,
          what our site shows, what you see in-game, and when you noticed the
          difference. A screenshot helps.
        </p>
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

import type { Metadata } from "next";
import { pageMeta } from "@/lib/seo";
import Link from "next/link";
import { ContactEmail } from "@/components/ContactEmail";

export const metadata: Metadata = pageMeta({
  title: "DMCA & Copyright | MiniGameWiki",
  description:
    "DMCA and copyright notice process for MiniGameWiki.com: how rights holders request correction or removal.",
  path: "/dmca",
  absolute: true,
});

export default function DmcaPage() {
  return (
    <article className="space-y-6 text-muted">
      <h1 className="text-3xl font-semibold text-fg">DMCA & Copyright</h1>
      <p className="text-sm">Last updated: July 30, 2026</p>

      <p>
        MiniGameWiki respects intellectual property rights. This page explains
        how rights holders can request correction or removal of material on{" "}
        <a href="https://minigamewiki.com" className="text-accent hover:underline">
          minigamewiki.com
        </a>
        .
      </p>

      <h2 className="text-xl font-semibold text-fg">Fan / trademark context</h2>
      <p>
        We are an independent fan site. Roblox® and game names belong to their
        respective owners. We do not host Roblox game clients, account sellers,
        or unauthorized asset dumps. Most of our pages are original text, tables,
        and calculators.
      </p>

      <h2 className="text-xl font-semibold text-fg">How to send a notice</h2>
      <p>
        Email <ContactEmail className="font-mono text-fg" /> (or use{" "}
        <Link href="/contact" className="text-accent hover:underline">
          Contact
        </Link>
        ) with the subject line &quot;DMCA / Copyright&quot; and include:
      </p>
      <ul className="list-disc space-y-1 pl-5">
        <li>Your name, organization (if any), and contact email</li>
        <li>A description of the copyrighted work you claim is infringed</li>
        <li>The exact MiniGameWiki URL(s) at issue</li>
        <li>A statement that you have a good-faith belief the use is not authorized</li>
        <li>
          A statement that the information in the notice is accurate, and under
          penalty of perjury, that you are authorized to act
        </li>
        <li>Your physical or electronic signature</li>
      </ul>

      <h2 className="text-xl font-semibold text-fg">What we do</h2>
      <p>
        We review complete notices promptly, typically within a few business
        days. We may remove or revise content, or ask for clarification. We are
        not a court; complex disputes may need to be resolved between rights
        holders and other parties.
      </p>

      <p>
        General questions (not formal notices):{" "}
        <Link href="/contact" className="text-accent hover:underline">
          Contact
        </Link>
        .
      </p>
    </article>
  );
}

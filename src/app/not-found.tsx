import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Page not found",
  description: "The page you requested could not be found on MiniGameWiki.",
  robots: { index: false, follow: true },
};

export default function NotFound() {
  return (
    <div className="space-y-6 py-10 text-center">
      <p className="font-mono text-sm text-brand">404</p>
      <h1 className="text-3xl font-semibold text-fg">Page not found</h1>
      <p className="mx-auto max-w-md text-muted">
        That URL does not exist on MiniGameWiki. Try the home page or the
        Snowcone Stand hub.
      </p>
      <div className="flex flex-wrap justify-center gap-3">
        <Link
          href="/"
          className="inline-flex rounded-md bg-brand px-4 py-2 text-sm font-medium text-bg transition hover:opacity-90"
        >
          Home
        </Link>
        <Link
          href="/games/snowcone-stand"
          className="inline-flex rounded-md border border-border bg-surface px-4 py-2 text-sm font-medium text-fg transition hover:border-brand/50"
        >
          Snowcone Stand
        </Link>
      </div>
    </div>
  );
}

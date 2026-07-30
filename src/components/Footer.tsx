import Link from "next/link";

const legal = [
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
  { href: "/privacy-policy", label: "Privacy" },
  { href: "/terms", label: "Terms" },
  { href: "/dmca", label: "DMCA" },
];

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="mt-auto border-t border-border bg-surface/40">
      <div className="mx-auto flex max-w-5xl flex-col gap-3 px-4 py-6 text-sm text-muted sm:flex-row sm:items-start sm:justify-between">
        <div className="space-y-1">
          <p>
            © {year} MiniGameWiki. Fan tools — not affiliated with Roblox
            Corporation.
          </p>
          <p className="text-xs">
            Independent editorial site.{" "}
            <Link href="/about" className="text-accent hover:underline">
              Read our independence statement
            </Link>
            .
          </p>
        </div>
        <nav className="flex flex-wrap gap-x-4 gap-y-1">
          {legal.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="transition hover:text-brand"
            >
              {item.label}
            </Link>
          ))}
        </nav>
      </div>
    </footer>
  );
}

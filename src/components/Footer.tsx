import Link from "next/link";

const legal = [
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
  { href: "/privacy-policy", label: "Privacy Policy" },
  { href: "/terms", label: "Terms" },
];

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="sticky bottom-0 z-40 border-t border-border bg-bg/95 backdrop-blur">
      <div className="mx-auto flex max-w-5xl flex-col gap-3 px-4 py-4 text-sm text-muted sm:flex-row sm:items-center sm:justify-between">
        <p>
          © {year} MiniGameWiki. Fan tools — not affiliated with Roblox
          Corporation.
        </p>
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

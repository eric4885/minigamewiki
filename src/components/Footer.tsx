import Link from "next/link";

const tools = [
  { href: "/games/snowcone-stand", label: "Snowcone Hub" },
  { href: "/games/snowcone-stand/blender-planner", label: "Blender Calculator" },
  { href: "/games/snowcone-stand/codes", label: "Latest Codes" },
  { href: "/games/snowcone-stand/tier-list", label: "Tier List" },
  { href: "/games/snowcone-stand/flavor-mutation-table", label: "Flavor Table" },
  { href: "/games/snowcone-stand/guides", label: "Guides" },
];

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
      <div className="mx-auto flex max-w-5xl flex-col gap-6 px-4 py-8 text-sm text-muted">
        <div className="flex flex-col gap-6 sm:flex-row sm:justify-between">
          <div className="space-y-1 max-w-md">
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
          <div className="space-y-2">
            <p className="text-xs font-medium uppercase tracking-wide text-fg">
              Snowcone Stand tools
            </p>
            <nav
              aria-label="Snowcone Stand tools"
              className="flex flex-wrap gap-x-4 gap-y-1"
            >
              {tools.map((item) => (
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
        </div>
        <nav
          aria-label="Legal"
          className="flex flex-wrap gap-x-4 gap-y-1 border-t border-border pt-4"
        >
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

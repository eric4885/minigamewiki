import Link from "next/link";

const nav = [
  { href: "/", label: "Home" },
  { href: "/games", label: "Games" },
  { href: "/games/snowcone-stand", label: "Snowcone Stand" },
  { href: "/about", label: "About" },
];

export function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-border bg-bg/95 backdrop-blur">
      <div className="mx-auto flex max-w-5xl items-center justify-between gap-4 px-4 py-3">
        <Link href="/" className="font-semibold tracking-tight text-fg">
          <span className="text-brand">Mini</span>GameWiki
        </Link>
        <nav className="flex flex-wrap items-center justify-end gap-x-4 gap-y-1 text-sm text-muted">
          {nav.map((item) => (
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
    </header>
  );
}

"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const nav = [
  { href: "/", label: "Home", match: "exact" as const },
  { href: "/games", label: "Games", match: "exact" as const },
  {
    href: "/games/snowcone-stand/blender-planner",
    label: "Calculator",
    match: "exact" as const,
  },
  {
    href: "/games/snowcone-stand/codes",
    label: "Codes",
    match: "exact" as const,
  },
  { href: "/about", label: "About", match: "exact" as const },
  { href: "/contact", label: "Contact", match: "exact" as const },
];

function isActive(pathname: string, href: string, match: "exact" | "prefix") {
  if (match === "exact") return pathname === href;
  if (href === "/") return pathname === "/";
  return pathname === href || pathname.startsWith(`${href}/`);
}

export function NavLinks() {
  const pathname = usePathname() || "/";

  return (
    <nav
      aria-label="Primary"
      className="flex flex-wrap items-center justify-end gap-x-4 gap-y-1 text-sm"
    >
      {nav.map((item) => {
        const active = isActive(pathname, item.href, item.match);
        return (
          <Link
            key={item.href}
            href={item.href}
            className={
              active
                ? "font-medium text-brand"
                : "text-muted transition hover:text-brand"
            }
            aria-current={active ? "page" : undefined}
          >
            {item.label}
          </Link>
        );
      })}
    </nav>
  );
}

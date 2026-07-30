import Link from "next/link";
import { NavLinks } from "@/components/NavLinks";

export function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-border bg-bg/95 backdrop-blur">
      <div className="mx-auto flex max-w-5xl items-center justify-between gap-4 px-4 py-3">
        <Link href="/" className="font-semibold tracking-tight text-fg">
          <span className="text-brand">Mini</span>GameWiki
        </Link>
        <NavLinks />
      </div>
    </header>
  );
}

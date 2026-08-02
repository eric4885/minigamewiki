import Link from "next/link";
import { CONTACT_EMAIL } from "@/lib/snowcone";

type ContactEmailProps = {
  className?: string;
  /** Link the address to the Contact page (no mailto:). */
  linkToContact?: boolean;
};

/**
 * Public email without mailto:.
 * Avoids Cloudflare Email Obfuscation rewriting links to /cdn-cgi/l/email-protection
 * (Ahrefs and other crawlers flag those as internal 404s).
 */
export function ContactEmail({
  className = "font-mono text-fg",
  linkToContact = false,
}: ContactEmailProps) {
  const [user, domain] = CONTACT_EMAIL.split("@");
  const label = `${user} [at] ${domain}`;

  const address = (
    <span className={className} title={CONTACT_EMAIL} aria-label={CONTACT_EMAIL}>
      {label}
    </span>
  );

  if (linkToContact) {
    return (
      <Link href="/contact" className="text-accent hover:underline">
        {address}
      </Link>
    );
  }

  return address;
}

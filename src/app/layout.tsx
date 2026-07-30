import type { Metadata } from "next";
import { Analytics, getGoogleSiteVerification } from "@/components/Analytics";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { JsonLd } from "@/components/JsonLd";
import { SITE_NAME, SITE_URL, CONTACT_EMAIL } from "@/lib/snowcone";
import "./globals.css";

const googleVerification = getGoogleSiteVerification();

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: `${SITE_NAME} — Roblox Mini-Game Tools & Guides`,
    template: `%s (Roblox) | ${SITE_NAME}`,
  },
  description:
    "Independent Roblox mini-game tools, calculators, and guides. First launch: Snowcone Stand blender planner, flavor tables, and tier lists.",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: SITE_URL,
    siteName: SITE_NAME,
    title: `${SITE_NAME} — Roblox Mini-Game Tools & Guides`,
    description:
      "Free Snowcone Stand calculators, tables, tier lists, and honest codes tracking.",
    images: [
      {
        url: "/images/snowcone-hero.svg",
        width: 960,
        height: 720,
        alt: "MiniGameWiki Snowcone Stand tools",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `${SITE_NAME} — Roblox Mini-Game Tools & Guides`,
    description:
      "Free Snowcone Stand calculators, tables, tier lists, and honest codes tracking.",
    images: ["/images/snowcone-hero.svg"],
  },
  icons: {
    icon: "/favicon.svg",
  },
  ...(googleVerification
    ? { verification: { google: googleVerification } }
    : {}),
};

const websiteLd = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: SITE_NAME,
  url: SITE_URL,
  description:
    "Independent tools and guides for Roblox mini-games, starting with Snowcone Stand.",
};

const organizationLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: SITE_NAME,
  url: SITE_URL,
  email: CONTACT_EMAIL,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="flex min-h-screen flex-col">
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[100] focus:rounded-md focus:bg-brand focus:px-3 focus:py-2 focus:text-bg"
        >
          Skip to content
        </a>
        <Analytics />
        <JsonLd data={websiteLd} />
        <JsonLd data={organizationLd} />
        <Header />
        <main
          id="main-content"
          className="mx-auto w-full max-w-5xl flex-1 px-4 py-10"
        >
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}

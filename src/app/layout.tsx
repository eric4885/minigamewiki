import type { Metadata } from "next";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { JsonLd } from "@/components/JsonLd";
import { SITE_NAME, SITE_URL } from "@/lib/snowcone";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: `${SITE_NAME} — Roblox Mini-Game Tools & Guides`,
    template: `%s (Roblox) | ${SITE_NAME}`,
  },
  description:
    "Independent Roblox mini-game tools, calculators, and guides. First launch: Snowcone Stand blender planner, flavor tables, and tier lists.",
  icons: {
    icon: "/favicon.svg",
  },
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
  email: "hello@minigamewiki.com",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="flex min-h-screen flex-col">
        <JsonLd data={websiteLd} />
        <JsonLd data={organizationLd} />
        <Header />
        <main className="mx-auto w-full max-w-5xl flex-1 px-4 py-10">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}

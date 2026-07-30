import type { MetadataRoute } from "next";
import { getAllGuideSlugs, SITE_URL } from "@/lib/snowcone";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = SITE_URL;
  const now = new Date();

  const staticRoutes = [
    "",
    "/games",
    "/games/snowcone-stand",
    "/games/snowcone-stand/codes",
    "/games/snowcone-stand/how-to-redeem-codes",
    "/games/snowcone-stand/blender-planner",
    "/games/snowcone-stand/flavor-mutation-table",
    "/games/snowcone-stand/tier-list",
    "/games/snowcone-stand/guides",
    "/games/snowcone-stand/faq",
    "/games/snowcone-stand/updates",
    "/about",
    "/contact",
    "/privacy-policy",
    "/terms",
    "/dmca",
  ];

  const guideRoutes = getAllGuideSlugs().map(
    (slug) => `/games/snowcone-stand/guides/${slug}`
  );

  return [...staticRoutes, ...guideRoutes].map((path) => ({
    url: `${base}${path}`,
    lastModified: now,
    changeFrequency: path.includes("/guides/") ? "weekly" : "monthly",
    priority: path === "" ? 1 : path === "/games/snowcone-stand" ? 0.9 : 0.7,
  }));
}

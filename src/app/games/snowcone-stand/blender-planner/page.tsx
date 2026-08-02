import type { Metadata } from "next";
import { pageMeta } from "@/lib/seo";
import { BlenderPlannerClient } from "@/components/BlenderPlannerClient";
import { RelatedLinks } from "@/components/RelatedLinks";
import { SiteDisclaimer } from "@/components/SiteDisclaimer";

export const metadata: Metadata = pageMeta({
  title: "Snowcone Stand Blender Calculator",
  description:
    "Free Snowcone Stand blender calculator for Roblox with Perfect Blend math, presets, and shareable build links.",
  path: "/games/snowcone-stand/blender-planner",
});

export default function BlenderPlannerPage() {
  return (
    <div className="space-y-8">
      <BlenderPlannerClient />
      <SiteDisclaimer />
      <RelatedLinks excludeHref="/games/snowcone-stand/blender-planner" />
    </div>
  );
}

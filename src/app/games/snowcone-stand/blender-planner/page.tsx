import type { Metadata } from "next";
import { BlenderPlannerClient } from "@/components/BlenderPlannerClient";
import { RelatedLinks } from "@/components/RelatedLinks";
import { SiteDisclaimer } from "@/components/SiteDisclaimer";

export const metadata: Metadata = {
  title: "Blender Planner",
  description:
    "Snowcone Stand blender planner for Roblox: Perfect Blend, mutation, and totem math with unit value and per-second output.",
  alternates: { canonical: "/games/snowcone-stand/blender-planner" },
};

export default function BlenderPlannerPage() {
  return (
    <div className="space-y-8">
      <BlenderPlannerClient />
      <SiteDisclaimer />
      <RelatedLinks excludeHref="/games/snowcone-stand/blender-planner" />
    </div>
  );
}

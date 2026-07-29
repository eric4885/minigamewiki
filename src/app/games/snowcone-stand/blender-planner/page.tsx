import type { Metadata } from "next";
import { BlenderPlannerClient } from "@/components/BlenderPlannerClient";

export const metadata: Metadata = {
  title: "Blender Planner",
  description:
    "Snowcone Stand blender planner for Roblox: Perfect Blend, mutation, and totem math with unit value and per-second output.",
};

export default function BlenderPlannerPage() {
  return <BlenderPlannerClient />;
}

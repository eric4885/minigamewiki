import data from "../../data/snowcone.json";

export type Flavor = {
  id: string;
  name: string;
  tier: string;
  baseValue: number;
  unlock: string;
  notes: string;
};

export type Mutation = {
  id: string;
  name: string;
  reduceMult: number;
  rarity: string;
  notes: string;
};

export type Totem = {
  id: string;
  name: string;
  stackMult: number;
  notes: string;
};

export type Guide = {
  slug: string;
  title: string;
  updatedAt: string;
  excerpt: string;
  content: string[];
};

export type TierRank = {
  tier: string;
  items: string[];
};

export type ChangelogEntry = {
  date: string;
  items: string[];
};

export type SnowconeData = {
  game: string;
  slug: string;
  developer: string;
  robloxUrl: string;
  robloxSearchUrl: string;
  description: string;
  dataReviewedAt: string;
  perfectMult: number;
  codes: { code: string; reward: string; status: string }[];
  expiredCodes: { code: string; reward: string; status: string }[];
  codesLastChecked: string;
  codesNote: string;
  flavors: Flavor[];
  mutations: Mutation[];
  totems: Totem[];
  tierList: {
    updatedAt: string;
    summary: string;
    ranks: TierRank[];
  };
  guides: Guide[];
  changelog: ChangelogEntry[];
};

export const SITE_URL = "https://minigamewiki.com";
export const SITE_NAME = "MiniGameWiki";
export const CONTACT_EMAIL = "hello@minigamewiki.com";

export const snowcone = data as SnowconeData;

export function getGuidesSorted(): Guide[] {
  return [...snowcone.guides].sort((a, b) =>
    a.updatedAt < b.updatedAt ? 1 : a.updatedAt > b.updatedAt ? -1 : 0
  );
}

export function getLatestGuides(limit = 6): Guide[] {
  return getGuidesSorted().slice(0, limit);
}

export function getGuideBySlug(slug: string): Guide | undefined {
  return snowcone.guides.find((g) => g.slug === slug);
}

export function getAllGuideSlugs(): string[] {
  return snowcone.guides.map((g) => g.slug);
}

/** unit = base * (perfect ? perfectMult : 1) * mutReduce * totemStack */
export function calcUnit(
  base: number,
  perfect: boolean,
  mutReduce: number,
  totemStack: number,
  perfectMult = snowcone.perfectMult
): number {
  return base * (perfect ? perfectMult : 1) * mutReduce * totemStack;
}

/** perSec = unit / blendTime */
export function calcPerSec(unit: number, blendTime: number): number {
  if (blendTime <= 0) return 0;
  return unit / blendTime;
}

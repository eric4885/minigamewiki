"use client";

import { useEffect, useMemo, useState } from "react";
import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import { Input } from "@/components/ui/Input";
import { SITE_URL, calcPerSec, calcUnit, snowcone } from "@/lib/snowcone";

type Preset = {
  id: string;
  label: string;
  flavorId: string;
  mutationId: string;
  totemId: string;
  perfect: boolean;
  blendTime: number;
};

const presets: Preset[] = [
  {
    id: "early",
    label: "Early farm",
    flavorId: "vanilla",
    mutationId: "none",
    totemId: "none",
    perfect: true,
    blendTime: 4,
  },
  {
    id: "mid",
    label: "Mid Mango",
    flavorId: "mango",
    mutationId: "golden",
    totemId: "ice",
    perfect: true,
    blendTime: 3.5,
  },
  {
    id: "end",
    label: "Endgame Void",
    flavorId: "void-berry",
    mutationId: "prismatic",
    totemId: "festival",
    perfect: true,
    blendTime: 3.2,
  },
];

function buildSharePath(params: {
  flavorId: string;
  mutationId: string;
  totemId: string;
  perfect: boolean;
  blendTime: number;
  customBase: string;
  hitRate: number;
  blenders: number;
  offlineHours: number;
}) {
  const q = new URLSearchParams();
  q.set("flavor", params.flavorId);
  q.set("mut", params.mutationId);
  q.set("totem", params.totemId);
  q.set("perfect", params.perfect ? "1" : "0");
  q.set("t", String(params.blendTime));
  q.set("hit", String(params.hitRate));
  q.set("blenders", String(params.blenders));
  q.set("offline", String(params.offlineHours));
  if (params.customBase.trim() !== "") q.set("base", params.customBase.trim());
  return `/games/snowcone-stand/blender-planner?${q.toString()}`;
}

function clamp(n: number, min: number, max: number) {
  return Math.min(max, Math.max(min, n));
}

export function BlenderPlannerClient() {
  const [flavorId, setFlavorId] = useState(snowcone.flavors[0]?.id ?? "");
  const [mutationId, setMutationId] = useState(snowcone.mutations[0]?.id ?? "");
  const [totemId, setTotemId] = useState(snowcone.totems[0]?.id ?? "");
  const [perfect, setPerfect] = useState(true);
  const [blendTime, setBlendTime] = useState(4);
  const [customBase, setCustomBase] = useState<string>("");
  const [hitRate, setHitRate] = useState(70);
  const [blenders, setBlenders] = useState(1);
  const [offlineHours, setOfflineHours] = useState(2);
  const [copyState, setCopyState] = useState<"idle" | "copied" | "error">(
    "idle"
  );
  const [hydrated, setHydrated] = useState(false);

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const flavor = params.get("flavor");
    const mut = params.get("mut");
    const totem = params.get("totem");
    const perfectParam = params.get("perfect");
    const t = params.get("t");
    const base = params.get("base");
    const hit = params.get("hit");
    const blendersParam = params.get("blenders");
    const offline = params.get("offline");

    if (flavor && snowcone.flavors.some((f) => f.id === flavor)) {
      setFlavorId(flavor);
    }
    if (mut && snowcone.mutations.some((m) => m.id === mut)) {
      setMutationId(mut);
    }
    if (totem && snowcone.totems.some((tItem) => tItem.id === totem)) {
      setTotemId(totem);
    }
    if (perfectParam === "0" || perfectParam === "1") {
      setPerfect(perfectParam === "1");
    }
    if (t !== null && !Number.isNaN(Number(t)) && Number(t) > 0) {
      setBlendTime(Number(t));
    }
    if (base !== null) setCustomBase(base);
    if (hit !== null && !Number.isNaN(Number(hit))) {
      setHitRate(clamp(Number(hit), 0, 100));
    }
    if (blendersParam !== null && !Number.isNaN(Number(blendersParam))) {
      setBlenders(clamp(Math.round(Number(blendersParam)), 1, 20));
    }
    if (offline !== null && !Number.isNaN(Number(offline))) {
      setOfflineHours(clamp(Number(offline), 0, 24));
    }
    setHydrated(true);
  }, []);

  useEffect(() => {
    if (!hydrated) return;
    const path = buildSharePath({
      flavorId,
      mutationId,
      totemId,
      perfect,
      blendTime,
      customBase,
      hitRate,
      blenders,
      offlineHours,
    });
    window.history.replaceState(null, "", path);
  }, [
    hydrated,
    flavorId,
    mutationId,
    totemId,
    perfect,
    blendTime,
    customBase,
    hitRate,
    blenders,
    offlineHours,
  ]);

  const flavor = snowcone.flavors.find((f) => f.id === flavorId);
  const mutation = snowcone.mutations.find((m) => m.id === mutationId);
  const totem = snowcone.totems.find((t) => t.id === totemId);

  const base =
    customBase.trim() !== "" && !Number.isNaN(Number(customBase))
      ? Number(customBase)
      : (flavor?.baseValue ?? 0);

  const mutReduce = mutation?.reduceMult ?? 1;
  const totemStack = totem?.stackMult ?? 1;
  const hit = clamp(hitRate, 0, 100) / 100;

  const results = useMemo(() => {
    const unitOn = calcUnit(base, true, mutReduce, totemStack);
    const unitOff = calcUnit(base, false, mutReduce, totemStack);
    const perSecOn = calcPerSec(unitOn, blendTime);
    const perSecOff = calcPerSec(unitOff, blendTime);
    const expectedPerSec = perSecOn * hit + perSecOff * (1 - hit);
    const expectedPerHour = expectedPerSec * 3600;
    const fleetPerHour = expectedPerHour * blenders;
    const offlineEstimate = fleetPerHour * offlineHours;
    return {
      unitOn,
      unitOff,
      perSecOn,
      perSecOff,
      unit: calcUnit(base, perfect, mutReduce, totemStack),
      perSec: calcPerSec(
        calcUnit(base, perfect, mutReduce, totemStack),
        blendTime
      ),
      expectedPerSec,
      expectedPerHour,
      fleetPerHour,
      offlineEstimate,
    };
  }, [
    base,
    perfect,
    mutReduce,
    totemStack,
    blendTime,
    hit,
    blenders,
    offlineHours,
  ]);

  const selectClass =
    "w-full rounded-md border border-border bg-bg px-3 py-2 text-fg outline-none ring-brand focus:ring-2";

  function applyPreset(preset: Preset) {
    setFlavorId(preset.flavorId);
    setMutationId(preset.mutationId);
    setTotemId(preset.totemId);
    setPerfect(preset.perfect);
    setBlendTime(preset.blendTime);
    setCustomBase("");
  }

  async function copyShareSummary() {
    const path = buildSharePath({
      flavorId,
      mutationId,
      totemId,
      perfect,
      blendTime,
      customBase,
      hitRate,
      blenders,
      offlineHours,
    });
    const url = `${SITE_URL}${path}`;
    const summary = [
      "Snowcone Stand build (MiniGameWiki)",
      `${flavor?.name ?? "Flavor"} + ${mutation?.name ?? "Mutation"} + ${totem?.name ?? "Totem"}`,
      `Perfect selected: ${perfect ? `ON (×${snowcone.perfectMult})` : "OFF"} · Blend time: ${blendTime}s`,
      `Perfect hit rate: ${hitRate}% · Blenders: ${blenders} · Offline hours: ${offlineHours}`,
      `Unit (selected): ${results.unit.toFixed(2)} · Per-sec (selected): ${results.perSec.toFixed(2)}`,
      `Expected per-sec (hit-weighted): ${results.expectedPerSec.toFixed(2)}`,
      `Expected per-hour (1 blender): ${results.expectedPerHour.toFixed(1)}`,
      `Fleet per-hour (${blenders} blenders): ${results.fleetPerHour.toFixed(1)}`,
      `Rough offline total (${offlineHours}h): ${results.offlineEstimate.toFixed(1)}`,
      url,
    ].join("\n");

    try {
      await navigator.clipboard.writeText(summary);
      setCopyState("copied");
    } catch {
      setCopyState("error");
    }
    window.setTimeout(() => setCopyState("idle"), 2000);
  }

  return (
    <div className="space-y-8">
      <div className="flex flex-wrap gap-2">
        {presets.map((preset) => (
          <Button
            key={preset.id}
            type="button"
            variant="secondary"
            onClick={() => applyPreset(preset)}
          >
            {preset.label}
          </Button>
        ))}
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        <Card className="space-y-4">
          <label className="block text-sm">
            <span className="mb-1.5 block text-muted">Flavor</span>
            <select
              className={selectClass}
              value={flavorId}
              onChange={(e) => setFlavorId(e.target.value)}
            >
              {snowcone.flavors.map((f) => (
                <option key={f.id} value={f.id}>
                  {f.name} (base {f.baseValue})
                </option>
              ))}
            </select>
          </label>

          <Input
            label="Custom base (optional override)"
            type="number"
            inputMode="decimal"
            min={0}
            step="any"
            placeholder={String(flavor?.baseValue ?? "")}
            value={customBase}
            onChange={(e) => setCustomBase(e.target.value)}
          />

          <label className="block text-sm">
            <span className="mb-1.5 block text-muted">Mutation (mutReduce)</span>
            <select
              className={selectClass}
              value={mutationId}
              onChange={(e) => setMutationId(e.target.value)}
            >
              {snowcone.mutations.map((m) => (
                <option key={m.id} value={m.id}>
                  {m.name} (×{m.reduceMult})
                </option>
              ))}
            </select>
          </label>

          <label className="block text-sm">
            <span className="mb-1.5 block text-muted">Totem (totemStack)</span>
            <select
              className={selectClass}
              value={totemId}
              onChange={(e) => setTotemId(e.target.value)}
            >
              {snowcone.totems.map((t) => (
                <option key={t.id} value={t.id}>
                  {t.name} (×{t.stackMult})
                </option>
              ))}
            </select>
          </label>

          <Input
            label="Blend time (seconds)"
            type="number"
            inputMode="decimal"
            min={0.1}
            step={0.1}
            value={blendTime}
            onChange={(e) => setBlendTime(Number(e.target.value) || 0)}
          />

          <label className="block text-sm">
            <span className="mb-1.5 flex items-center justify-between text-muted">
              <span>Perfect hit rate</span>
              <span className="font-mono text-fg">{hitRate}%</span>
            </span>
            <input
              type="range"
              min={0}
              max={100}
              step={5}
              value={hitRate}
              onChange={(e) => setHitRate(Number(e.target.value))}
              className="w-full accent-[var(--brand,#3b82f6)]"
            />
            <span className="mt-1 block text-xs text-muted">
              Expected output mixes Perfect ON/OFF by this rate — use what you
              can sustain, not 100% fantasy.
            </span>
          </label>

          <Input
            label="Blender count (rough fleet scale)"
            type="number"
            inputMode="numeric"
            min={1}
            max={20}
            step={1}
            value={blenders}
            onChange={(e) =>
              setBlenders(clamp(Math.round(Number(e.target.value) || 1), 1, 20))
            }
          />

          <Input
            label="Offline / AFK hours (rough)"
            type="number"
            inputMode="decimal"
            min={0}
            max={24}
            step={0.5}
            value={offlineHours}
            onChange={(e) =>
              setOfflineHours(clamp(Number(e.target.value) || 0, 0, 24))
            }
          />

          <div className="flex flex-wrap items-center gap-3">
            <Button
              type="button"
              variant={perfect ? "primary" : "secondary"}
              onClick={() => setPerfect(true)}
            >
              Perfect ON (×{snowcone.perfectMult})
            </Button>
            <Button
              type="button"
              variant={!perfect ? "primary" : "secondary"}
              onClick={() => setPerfect(false)}
            >
              Perfect OFF
            </Button>
          </div>
        </Card>

        <Card className="space-y-4">
          <div className="flex flex-wrap items-center justify-between gap-3">
            <h2 className="text-lg font-semibold text-fg">Results</h2>
            <Button type="button" variant="secondary" onClick={copyShareSummary}>
              {copyState === "copied"
                ? "Copied"
                : copyState === "error"
                  ? "Copy failed"
                  : "Copy build + link"}
            </Button>
          </div>
          <dl className="space-y-3 text-sm">
            <div className="flex justify-between gap-4 border-b border-border pb-2">
              <dt className="text-muted">Base</dt>
              <dd className="font-mono tabular-nums text-fg">{base}</dd>
            </div>
            <div className="flex justify-between gap-4 border-b border-border pb-2">
              <dt className="text-muted">Perfect (selected)</dt>
              <dd className="font-mono tabular-nums text-fg">
                {perfect ? snowcone.perfectMult : 1}
              </dd>
            </div>
            <div className="flex justify-between gap-4 border-b border-border pb-2">
              <dt className="text-muted">mutReduce</dt>
              <dd className="font-mono tabular-nums text-fg">{mutReduce}</dd>
            </div>
            <div className="flex justify-between gap-4 border-b border-border pb-2">
              <dt className="text-muted">totemStack</dt>
              <dd className="font-mono tabular-nums text-fg">{totemStack}</dd>
            </div>
            <div className="flex justify-between gap-4 border-b border-border pb-2">
              <dt className="text-muted">Unit value (selected)</dt>
              <dd className="font-mono text-lg tabular-nums text-brand">
                {results.unit.toFixed(2)}
              </dd>
            </div>
            <div className="flex justify-between gap-4 border-b border-border pb-2">
              <dt className="text-muted">Per second (selected)</dt>
              <dd className="font-mono text-lg tabular-nums text-brand">
                {results.perSec.toFixed(2)}
              </dd>
            </div>
            <div className="flex justify-between gap-4 border-b border-border pb-2">
              <dt className="text-muted">Perfect ON / OFF per-sec</dt>
              <dd className="font-mono tabular-nums text-fg">
                {results.perSecOn.toFixed(2)} / {results.perSecOff.toFixed(2)}
              </dd>
            </div>
            <div className="flex justify-between gap-4 border-b border-border pb-2">
              <dt className="text-muted">Expected per-sec (hit-weighted)</dt>
              <dd className="font-mono text-lg tabular-nums text-brand">
                {results.expectedPerSec.toFixed(2)}
              </dd>
            </div>
            <div className="flex justify-between gap-4 border-b border-border pb-2">
              <dt className="text-muted">Expected per-hour (1 blender)</dt>
              <dd className="font-mono tabular-nums text-fg">
                {results.expectedPerHour.toFixed(1)}
              </dd>
            </div>
            <div className="flex justify-between gap-4 border-b border-border pb-2">
              <dt className="text-muted">Fleet per-hour ({blenders})</dt>
              <dd className="font-mono tabular-nums text-fg">
                {results.fleetPerHour.toFixed(1)}
              </dd>
            </div>
            <div className="flex justify-between gap-4">
              <dt className="text-muted">
                Rough offline total ({offlineHours}h)
              </dt>
              <dd className="font-mono tabular-nums text-fg">
                {results.offlineEstimate.toFixed(1)}
              </dd>
            </div>
          </dl>
          <p className="text-xs text-muted">
            Hourly and offline figures are planning estimates from our unit
            formula × hit rate × blender count. Real servers add downtime, shop
            stock, and serving — treat them as relative comparisons, not
            promises. Offline workflow:{" "}
            <a
              href="/games/snowcone-stand/guides/offline-blend-planning"
              className="text-accent hover:underline"
            >
              offline blend planning
            </a>
            .
          </p>
        </Card>
      </div>
    </div>
  );
}

"use client";

import Link from "next/link";
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
}) {
  const q = new URLSearchParams();
  q.set("flavor", params.flavorId);
  q.set("mut", params.mutationId);
  q.set("totem", params.totemId);
  q.set("perfect", params.perfect ? "1" : "0");
  q.set("t", String(params.blendTime));
  if (params.customBase.trim() !== "") q.set("base", params.customBase.trim());
  return `/games/snowcone-stand/blender-planner?${q.toString()}`;
}

export function BlenderPlannerClient() {
  const [flavorId, setFlavorId] = useState(snowcone.flavors[0]?.id ?? "");
  const [mutationId, setMutationId] = useState(snowcone.mutations[0]?.id ?? "");
  const [totemId, setTotemId] = useState(snowcone.totems[0]?.id ?? "");
  const [perfect, setPerfect] = useState(true);
  const [blendTime, setBlendTime] = useState(4);
  const [customBase, setCustomBase] = useState<string>("");
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
    });
    window.history.replaceState(null, "", path);
  }, [hydrated, flavorId, mutationId, totemId, perfect, blendTime, customBase]);

  const flavor = snowcone.flavors.find((f) => f.id === flavorId);
  const mutation = snowcone.mutations.find((m) => m.id === mutationId);
  const totem = snowcone.totems.find((t) => t.id === totemId);

  const base =
    customBase.trim() !== "" && !Number.isNaN(Number(customBase))
      ? Number(customBase)
      : (flavor?.baseValue ?? 0);

  const mutReduce = mutation?.reduceMult ?? 1;
  const totemStack = totem?.stackMult ?? 1;

  const results = useMemo(() => {
    const unitOn = calcUnit(base, true, mutReduce, totemStack);
    const unitOff = calcUnit(base, false, mutReduce, totemStack);
    return {
      unitOn,
      unitOff,
      perSecOn: calcPerSec(unitOn, blendTime),
      perSecOff: calcPerSec(unitOff, blendTime),
      unit: calcUnit(base, perfect, mutReduce, totemStack),
      perSec: calcPerSec(
        calcUnit(base, perfect, mutReduce, totemStack),
        blendTime
      ),
    };
  }, [base, perfect, mutReduce, totemStack, blendTime]);

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
    });
    const url = `${SITE_URL}${path}`;
    const summary = [
      "Snowcone Stand build (MiniGameWiki)",
      `${flavor?.name ?? "Flavor"} + ${mutation?.name ?? "Mutation"} + ${totem?.name ?? "Totem"}`,
      `Perfect: ${perfect ? `ON (×${snowcone.perfectMult})` : "OFF"} · Blend time: ${blendTime}s`,
      `Unit: ${results.unit.toFixed(2)} · Per-sec: ${results.perSec.toFixed(2)}`,
      `Perfect ON vs OFF per-sec: ${results.perSecOn.toFixed(2)} / ${results.perSecOff.toFixed(2)}`,
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
      <div>
        <p className="text-sm text-brand">
          <Link href="/games/snowcone-stand" className="hover:underline">
            {snowcone.game}
          </Link>{" "}
          / Blender Calculator
        </p>
        <h1 className="mt-2 text-3xl font-semibold text-fg">
          Snowcone Stand Blender Calculator
        </h1>
        <p className="mt-4 max-w-prose text-muted">
          Buying the next flavor or totem without math is how Snowcone Stand
          players burn a session&apos;s cash on a shiny upgrade that loses
          per-second. This calculator uses{" "}
          <span className="font-mono text-fg">
            unit = base × (perfect ? {snowcone.perfectMult} : 1) × mutReduce ×
            totemStack
          </span>
          , then{" "}
          <span className="font-mono text-fg">perSec = unit / blendTime</span>.
          Use presets, compare Perfect ON vs OFF, and copy a shareable build
          link for Discord or Reddit.
        </p>
      </div>

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
              <dt className="text-muted">Unit value</dt>
              <dd className="font-mono text-lg tabular-nums text-brand">
                {results.unit.toFixed(2)}
              </dd>
            </div>
            <div className="flex justify-between gap-4 border-b border-border pb-2">
              <dt className="text-muted">Per second</dt>
              <dd className="font-mono text-lg tabular-nums text-brand">
                {results.perSec.toFixed(2)}
              </dd>
            </div>
            <div className="flex justify-between gap-4">
              <dt className="text-muted">Perfect ON / OFF per-sec</dt>
              <dd className="font-mono tabular-nums text-fg">
                {results.perSecOn.toFixed(2)} / {results.perSecOff.toFixed(2)}
              </dd>
            </div>
          </dl>
          <p className="text-xs text-muted">
            Prefer higher per-second at the Perfect rate you can actually
            sustain. Share the copied summary when asking friends which upgrade
            to buy next.
          </p>
        </Card>
      </div>
    </div>
  );
}

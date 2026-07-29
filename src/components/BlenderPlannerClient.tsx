"use client";

import Link from "next/link";
import { useMemo, useState } from "react";
import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import { Input } from "@/components/ui/Input";
import { calcPerSec, calcUnit, snowcone } from "@/lib/snowcone";

export function BlenderPlannerClient() {
  const [flavorId, setFlavorId] = useState(snowcone.flavors[0]?.id ?? "");
  const [mutationId, setMutationId] = useState(snowcone.mutations[0]?.id ?? "");
  const [totemId, setTotemId] = useState(snowcone.totems[0]?.id ?? "");
  const [perfect, setPerfect] = useState(true);
  const [blendTime, setBlendTime] = useState(4);
  const [customBase, setCustomBase] = useState<string>("");

  const flavor = snowcone.flavors.find((f) => f.id === flavorId);
  const mutation = snowcone.mutations.find((m) => m.id === mutationId);
  const totem = snowcone.totems.find((t) => t.id === totemId);

  const base =
    customBase.trim() !== "" && !Number.isNaN(Number(customBase))
      ? Number(customBase)
      : (flavor?.baseValue ?? 0);

  const mutReduce = mutation?.reduceMult ?? 1;
  const totemStack = totem?.stackMult ?? 1;

  const { unit, perSec } = useMemo(() => {
    const u = calcUnit(base, perfect, mutReduce, totemStack);
    return { unit: u, perSec: calcPerSec(u, blendTime) };
  }, [base, perfect, mutReduce, totemStack, blendTime]);

  const selectClass =
    "w-full rounded-md border border-border bg-bg px-3 py-2 text-fg outline-none ring-brand focus:ring-2";

  return (
    <div className="space-y-8">
      <div>
        <p className="text-sm text-brand">
          <Link href="/games/snowcone-stand" className="hover:underline">
            {snowcone.game}
          </Link>{" "}
          / Blender Planner
        </p>
        <h1 className="mt-2 text-3xl font-semibold text-fg">Blender Planner</h1>
        <p className="mt-4 max-w-prose text-muted">
          Buying the next flavor or totem without math is how Snowcone Stand
          players burn a session&apos;s cash on a shiny upgrade that loses
          per-second. The blender is a timed machine: unit value only matters
          when divided by blend time, and Perfect Blend multiplies everything
          downstream. This planner uses the site formula{" "}
          <span className="font-mono text-fg">
            unit = base × (perfect ? {snowcone.perfectMult} : 1) × mutReduce ×
            totemStack
          </span>
          , then{" "}
          <span className="font-mono text-fg">perSec = unit / blendTime</span>.
          Dial in the flavor you own, toggle Perfect, stack the mutation and
          totem you actually have, and compare setups before you commit. It will
          not replace practice on the Perfect window — it stops you from
          upgrading in the wrong order.
        </p>
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
          <h2 className="text-lg font-semibold text-fg">Results</h2>
          <dl className="space-y-3 text-sm">
            <div className="flex justify-between gap-4 border-b border-border pb-2">
              <dt className="text-muted">Base</dt>
              <dd className="font-mono tabular-nums text-fg">{base}</dd>
            </div>
            <div className="flex justify-between gap-4 border-b border-border pb-2">
              <dt className="text-muted">Perfect</dt>
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
                {unit.toFixed(2)}
              </dd>
            </div>
            <div className="flex justify-between gap-4">
              <dt className="text-muted">Per second</dt>
              <dd className="font-mono text-lg tabular-nums text-brand">
                {perSec.toFixed(2)}
              </dd>
            </div>
          </dl>
          <p className="text-xs text-muted">
            Compare two builds by changing one control at a time. Prefer higher
            per-second at the Perfect rate you can actually sustain.
          </p>
        </Card>
      </div>
    </div>
  );
}

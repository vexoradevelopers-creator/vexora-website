"use client";

import { useEffect, useState } from "react";
import { useMock } from "./use-mock";

/**
 * Sortly, rebuilt in HTML with a real pour. Fixed 1000x563 layout scaled to
 * its container. An 8 second CSS loop: one tube tips into its neighbour, then
 * another, the moves counter ticks, and the board fades to the next level.
 */
const W = 1000;
const H = 563;
const LOOP = 6400;

const ink: Record<string, [string, string]> = {
  y: ["#f2c53d", "△"],
  g: ["#6fbf3a", "+"],
  r: ["#e5474b", "○"],
  o: ["#ef7d2f", "□"],
  b: ["#3b6fe0", "|"],
  c: ["#3fc1e3", "▽"],
};

// bottom → top. "a"/"b" mark the segment that leaves (out) or arrives (in).
type Seg = { c: keyof typeof ink; anim?: "out-a" | "in-a" | "out-b" | "in-b" };
const tubes: { segs: Seg[]; tilt?: "l" | "r"; stream?: "a" | "b" }[] = [
  { segs: [{ c: "b" }, { c: "r" }, { c: "g", anim: "out-b" }], tilt: "r" },
  { segs: [{ c: "o" }, { c: "g" }, { c: "g", anim: "in-a" }, { c: "g", anim: "in-b" }] },
  { segs: [{ c: "y" }, { c: "b" }, { c: "g", anim: "out-a" }], tilt: "l" },
  { segs: [{ c: "r" }, { c: "o" }, { c: "b" }, { c: "y" }] },
  { segs: [{ c: "o" }, { c: "y" }, { c: "r" }, { c: "b" }] },
  { segs: [{ c: "c" }, { c: "b" }, { c: "o" }, { c: "y" }] },
  { segs: [{ c: "y" }, { c: "c" }, { c: "r" }] },
  { segs: [] },
  { segs: [] },
];

function Tube({ t, i }: { t: (typeof tubes)[number]; i: number }) {
  return (
    <div className="relative" style={{ zIndex: t.tilt ? 5 : 1 }}>
      {/* stream into this tube */}
      {i === 1 ? (
        <>
          <span className="vx-sortly-stream-a absolute left-1/2 top-[-46px] h-[46px] w-[4px] -translate-x-1/2 rounded-full" style={{ background: ink.g[0] }} />
          <span className="vx-sortly-stream-b absolute left-1/2 top-[-46px] h-[46px] w-[4px] -translate-x-1/2 rounded-full" style={{ background: ink.g[0] }} />
        </>
      ) : null}
      <div
        className={`flex h-[128px] w-[34px] flex-col-reverse overflow-hidden rounded-b-[17px] rounded-t-[5px] border-[2px] border-white/25 bg-white/[0.06] shadow-[inset_0_0_10px_rgba(255,255,255,0.08)] ${
          t.tilt ? `vx-sortly-tilt-${t.tilt} origin-bottom` : ""
        }`}
      >
        {t.segs.map((s, j) => (
          <span
            key={j}
            className={`flex w-full shrink-0 items-center justify-center text-[13px] font-bold text-white/85 ${
              s.anim ? `vx-sortly-${s.anim}` : ""
            }`}
            style={{ height: s.anim?.startsWith("in") ? 0 : 28, background: ink[s.c][0] }}
          >
            {ink[s.c][1]}
          </span>
        ))}
      </div>
    </div>
  );
}

export function SortlyMock() {
  const { ref, armed } = useMock(W);
  const [moves, setMoves] = useState(0);

  useEffect(() => {
    if (!armed || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    // Keep the counter in step with the CSS loop: pours land at 30% and 70%.
    const t0 = performance.now();
    const tick = window.setInterval(() => {
      const p = ((performance.now() - t0) % LOOP) / LOOP;
      setMoves(p < 0.3 ? 0 : p < 0.7 ? 1 : 2);
    }, 200);
    return () => window.clearInterval(tick);
  }, [armed]);

  return (
    <div
      ref={ref}
      className={`vx-mock relative w-full overflow-hidden text-white ${armed ? "is-armed" : ""}`}
      style={{
        aspectRatio: `${W} / ${H}`,
        containerType: "inline-size",
        ["--s" as string]: `tan(atan2(100cqw, ${W}px))`,
        background: "radial-gradient(ellipse at 70% 40%, #2a1f5e 0%, #16112f 55%, #0e0b1f 100%)",
      }}
      role="img"
      aria-label="Sortly, a colour-sorting puzzle game built by Vexora: liquids pour between tubes until each tube holds one colour."
    >
      <div
        aria-hidden
        className="vx-sortly-stars absolute inset-0"
      />
      <div
        aria-hidden
        className="absolute left-0 top-0 font-sans antialiased"
        style={{ width: W, height: H, transform: "scale(var(--s, 1))", transformOrigin: "top left" }}
      >
        {/* copy */}
        <div className="absolute left-[70px] top-[95px] flex flex-col gap-5">
          <div className="text-[92px] font-bold leading-none tracking-tight text-[#c9b8ff]">Sortly</div>
          <div className="text-[24px] text-[#b9adf0]">Pour, sort, unwind.</div>
          <ul className="mt-2 flex flex-col gap-3.5 text-[16px] text-white/90">
            {["Every puzzle is solvable, proven, not promised", "Colour-blind marks on every liquid, from level one", "Eight themes and five kinds of glass"].map((f) => (
              <li key={f} className="flex items-center gap-3.5">
                <span className="flex size-[18px] items-center justify-center rounded-full bg-[#8b6cf6] text-[11px] font-bold">✓</span>
                {f}
              </li>
            ))}
          </ul>
          <div className="mt-3 flex h-[46px] w-fit items-center gap-3 rounded-full border border-[#8b6cf6]/50 bg-[#2a1f5e]/70 px-6 text-[16px] font-semibold">
            <span className="text-[#c9b8ff]">✦</span>
            No timer. No pressure. Plays offline.
          </div>
        </div>

        {/* phone */}
        <div className="absolute right-[120px] top-[36px] h-[492px] w-[248px] rounded-[38px] border-[3px] border-white/20 bg-[#0f0c22] p-[10px] shadow-[0_40px_80px_-30px_rgba(0,0,0,0.9)]">
          <div className="relative flex h-full flex-col rounded-[28px] bg-[linear-gradient(180deg,#1c1640,#110d2a)] px-4 pb-3 pt-4">
            <div className="absolute left-1/2 top-2 h-[5px] w-[54px] -translate-x-1/2 rounded-full bg-black/60" />
            <div className="mt-2 flex justify-end">
              <span className="flex h-[20px] items-center gap-1 rounded-full bg-white/[0.08] px-2 text-[11px] font-semibold">
                <span className="flex size-[11px] items-center justify-center rounded-full bg-[#f2c53d] text-[7px] font-black text-[#5a4200]">$</span>
                100
              </span>
            </div>
            <div className="mt-2 flex items-end justify-between">
              <div>
                <div className="text-[19px] font-bold leading-none">
                  Level 47 <span className="text-[11px] text-white/50">▾</span>
                </div>
                <div className="mt-1 text-[9px] text-white/50">Hard</div>
              </div>
              <div className="text-right">
                <div className="text-[19px] font-bold leading-none tabular-nums text-[#8b6cf6]">{moves}</div>
                <div className="mt-1 text-[9px] text-white/50">moves</div>
              </div>
            </div>

            <div className="vx-sortly-board mt-7 flex flex-col gap-7">
              <div className="flex justify-between px-1">
                {tubes.slice(0, 5).map((t, i) => (
                  <Tube key={i} t={t} i={i} />
                ))}
              </div>
              <div className="flex justify-center gap-[12px]">
                {tubes.slice(5).map((t, i) => (
                  <Tube key={i + 5} t={t} i={i + 5} />
                ))}
              </div>
            </div>

            <div className="mt-auto flex justify-between px-1 text-[7.5px] text-white/50">
              {[
                ["Undo", "3 free", "#6b6b8a"],
                ["Hint", "25", "#f2c53d"],
                ["Add tube", "120", "#f2c53d"],
                ["Solve", "200", "#f2c53d"],
                ["Restart", "", ""],
              ].map(([l, badge, bc]) => (
                <div key={l} className="relative flex flex-col items-center gap-1">
                  {badge ? (
                    <span
                      className="absolute -top-2 rounded-full px-1.5 py-[1px] text-[6px] font-bold text-[#1a1233]"
                      style={{ background: bc }}
                    >
                      {badge}
                    </span>
                  ) : null}
                  <span className="size-[26px] rounded-full border border-white/15 bg-white/[0.05]" />
                  {l}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

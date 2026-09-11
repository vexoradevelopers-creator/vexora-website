"use client";

import { useEffect, useRef, useState } from "react";
import { DashSidebar, Icon, amber, coral, green, teal } from "./dash-parts";

/**
 * The MediCos Nepal overview screen, rebuilt in HTML so it stays crisp on any
 * display and can animate in. Laid out at a fixed 1120x690 and scaled to the
 * container width: CSS (tan/atan2) for first paint, a ResizeObserver after.
 */
const W = 1120;
const H = 690;

const bars = [
  38, 42, 45, 40, 44, 55, 48, 52, 60, 50, 52, 58, 68, 64, 60, 66, 72, 68, 76, 72, 80, 88, 84,
  80, 86, 92, 90, 86, 84, 100,
];

const stats = [
  { k: "Sales today", v: 124600, prefix: "Rs ", color: teal, sub: "17 invoices" },
  { k: "Receivables", v: 842300, prefix: "Rs ", color: coral, sub: "Rs 3,71,000 over 30 days" },
  { k: "Orders open", v: 14, prefix: "", color: "#111", sub: "2 on credit hold" },
  { k: "Stock value", v: 4218900, prefix: "Rs ", color: "#111", sub: "Warehouse, at cost" },
  { k: "Trade parties", v: 46, prefix: "", color: "#111", sub: "3 dealers · 43 retailers · 2,140 customers" },
];

const pipeline = [
  { k: "Placed", n: 5, w: 36, c: teal },
  { k: "Confirmed", n: 3, w: 22, c: teal },
  { k: "Packed", n: 3, w: 22, c: teal },
  { k: "Dispatched", n: 3, w: 22, c: coral },
  { k: "Credit hold", n: 2, w: 14, c: amber },
];

const dealers = [
  ["Himalaya Distributors", "14", "Rs 9,84,200", "Rs 1,85,000", "Current", green],
  ["Pokhara Beauty Supplies", "9", "Rs 6,12,750", "Rs 2,40,500", "Rs 61,000 over 30 d", amber],
  ["Terai Cosmetics Hub", "7", "Rs 4,38,900", "Rs 3,10,000", "60+ d overdue", coral],
  ["Direct retailers (7)", "11", "Rs 2,96,450", "Rs 1,06,800", "Current", green],
] as const;

const attention = [
  { t: "2 trade applications waiting: 1 dealer, 1 retailer", bg: "#e3f4f6", c: teal, icon: "warn" },
  { t: "Batch KD2603 Kerasys Deep Cleansing · 9 units expire 18 Oct", bg: "#fcebe7", c: coral, icon: "clock" },
  { t: "3 payments to verify · Rs 2,62,400", bg: "#fbf3e0", c: amber, icon: "bank" },
  { t: "Showermate Rose below reorder level (36 left)", bg: "#fbf3e0", c: amber, icon: "box" },
];

/** Nepali digit grouping: 42,18,900. */
function lakh(n: number) {
  const s = Math.round(n).toString();
  if (s.length <= 3) return s;
  const last = s.slice(-3);
  const rest = s.slice(0, -3).replace(/\B(?=(\d{2})+(?!\d))/g, ",");
  return `${rest},${last}`;
}

function CountUp({ value, prefix = "", delay = 0 }: { value: number; prefix?: string; delay?: number }) {
  const [n, setN] = useState(0);
  useEffect(() => {
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    let raf = 0;
    let start = 0;
    const dur = 1400;
    const tick = (t: number) => {
      if (!start) start = t;
      const p = reduced ? 1 : Math.min(1, (t - start) / dur);
      const e = 1 - Math.pow(1 - p, 4);
      setN(value * e);
      if (p < 1) raf = requestAnimationFrame(tick);
    };
    const id = window.setTimeout(() => (raf = requestAnimationFrame(tick)), reduced ? 0 : delay);
    return () => {
      window.clearTimeout(id);
      cancelAnimationFrame(raf);
    };
  }, [value, delay]);
  return (
    <>
      {prefix}
      {lakh(n)}
    </>
  );
}

export function HeroDashboard() {
  const ref = useRef<HTMLDivElement>(null);

  // CSS gives a first-paint scale (tan/atan2); this keeps it exact everywhere.
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const ro = new ResizeObserver(([e]) => {
      el.style.setProperty("--s", String(e.contentRect.width / W));
    });
    ro.observe(el);
    return () => ro.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className="vx-dash relative w-full overflow-hidden bg-[#f3f6f8] text-[#1a1f24]"
      style={{ aspectRatio: `${W} / ${H}`, containerType: "inline-size" }}
      role="img"
      aria-label="The MediCos Nepal distribution dashboard, built by Vexora: sales, receivables, orders in pipeline, top dealers and alerts on one screen."
    >
      <div
        aria-hidden
        className="absolute left-0 top-0 flex origin-top-left font-sans text-[12px] leading-[1.35] antialiased"
        style={{ width: W, height: H, transform: "scale(var(--s, 1))" }}
      >
        <DashSidebar active="Overview" />

        {/* MAIN */}
        <div className="flex min-w-0 grow flex-col">
          {/* header */}
          <header className="flex h-[52px] items-center justify-between border-b border-[#e4e9ed] bg-white px-6">
            <div>
              <div className="text-[8.5px] text-[#8a949c]">18 Bhadra 2083 · 3 Sep 2026</div>
              <div className="text-[13.5px] font-semibold">Good morning, Medicos Nepal</div>
            </div>
            <div className="flex items-center gap-3">
              <div className="flex h-[30px] w-[210px] items-center gap-2 rounded-md border border-[#e4e9ed] px-2.5 text-[#98a2aa]">
                <Icon name="search" className="size-[12px]" />
                <span className="text-[10px]">Search orders, parties, invoices</span>
              </div>
              <div className="flex h-[30px] items-center gap-4 rounded-md border border-[#e4e9ed] px-2.5">
                <span className="text-[9px] leading-[1.1]">
                  FY
                  <br />
                  <b>2083/84</b>
                </span>
                <Icon name="down" className="size-[11px] text-[#8a949c]" />
              </div>
              <div className="relative flex size-[30px] items-center justify-center rounded-md border border-[#e4e9ed]">
                <Icon name="bell" className="size-[13px]" />
                <span
                  className="vx-dash-dot absolute right-[6px] top-[6px] size-[5px] rounded-full"
                  style={{ background: coral }}
                />
              </div>
            </div>
          </header>

          <div className="flex grow flex-col gap-4 p-5">
            {/* stats */}
            <div className="grid grid-cols-5 gap-3.5">
              {stats.map((s, i) => (
                <div
                  key={s.k}
                  className="vx-dash-in rounded-lg border border-[#e4e9ed] bg-white px-4 py-3.5"
                  style={{ animationDelay: `${0.45 + i * 0.07}s` }}
                >
                  <div className="text-[8.5px] font-semibold uppercase tracking-[0.12em] text-[#8a949c]">
                    {s.k}
                  </div>
                  <div className="mt-2 text-[19px] font-semibold tabular-nums tracking-tight" style={{ color: s.color }}>
                    <CountUp value={s.v} prefix={s.prefix} delay={600 + i * 70} />
                  </div>
                  <div className="mt-1 text-[9px] text-[#6d777f]">{s.sub}</div>
                </div>
              ))}
            </div>

            {/* chart + pipeline */}
            <div className="grid grid-cols-[1fr_290px] gap-3.5">
              <div className="vx-dash-in rounded-lg border border-[#e4e9ed] bg-white p-4" style={{ animationDelay: "0.75s" }}>
                <div className="flex items-center justify-between">
                  <span className="text-[11.5px] font-semibold">Sales, last 30 days</span>
                  <span className="text-[9.5px] font-semibold" style={{ color: teal }}>
                    Bhadra 2083 · incl. VAT
                  </span>
                </div>
                <div className="mt-2 flex items-baseline gap-2.5">
                  <span className="text-[22px] font-semibold tabular-nums tracking-tight">
                    <CountUp value={2846300} prefix="Rs " delay={800} />
                  </span>
                  <span className="text-[9.5px] font-semibold" style={{ color: green }}>
                    +12% vs Shrawan
                  </span>
                </div>
                <div className="mt-3 flex h-[92px] items-end gap-[5px]">
                  {bars.map((b, i) => (
                    <span
                      key={i}
                      className="vx-dash-bar grow origin-bottom rounded-[2px]"
                      style={{
                        height: `${b}%`,
                        background: i === bars.length - 1 ? coral : "#8fcfd8",
                        animationDelay: `${0.9 + i * 0.03}s`,
                      }}
                    />
                  ))}
                </div>
                <div className="mt-2 flex justify-between text-[8.5px] text-[#8a949c]">
                  <span>4 Bhadra</span>
                  <span>11</span>
                  <span>18</span>
                  <span>25</span>
                  <span>Today, 18 Bhadra</span>
                </div>
              </div>

              <div className="vx-dash-in rounded-lg border border-[#e4e9ed] bg-white p-4" style={{ animationDelay: "0.85s" }}>
                <div className="flex items-center justify-between">
                  <span className="text-[11.5px] font-semibold">Orders in pipeline</span>
                  <span className="text-[9.5px] font-semibold" style={{ color: teal }}>
                    14 open
                  </span>
                </div>
                <div className="mt-3 flex flex-col gap-[9px]">
                  {pipeline.map((p, i) => (
                    <div key={p.k} className="grid grid-cols-[76px_1fr_14px] items-center gap-2.5">
                      <span className="text-[9.5px] text-[#3c464e]">{p.k}</span>
                      <span className="h-[5px] overflow-hidden rounded-full bg-[#eceff2]">
                        <span
                          className="vx-dash-fill block h-full origin-left rounded-full"
                          style={{ width: `${p.w}%`, background: p.c, animationDelay: `${1.1 + i * 0.08}s` }}
                        />
                      </span>
                      <span className="text-right text-[9.5px] font-semibold tabular-nums">{p.n}</span>
                    </div>
                  ))}
                </div>
                <div className="mt-4 flex gap-2">
                  <span
                    className="flex h-[26px] items-center gap-1.5 rounded-md px-3 text-[9.5px] font-semibold text-white"
                    style={{ background: teal }}
                  >
                    <Icon name="doc" className="size-[11px]" />
                    Open orders board
                  </span>
                  <span className="flex h-[26px] items-center gap-1.5 rounded-md bg-[#eef1f4] px-3 text-[9.5px] font-semibold">
                    <Icon name="truck" className="size-[11px]" />
                    Dispatch queue
                  </span>
                </div>
              </div>
            </div>

            {/* dealers + attention */}
            <div className="grid grow grid-cols-[1fr_290px] gap-3.5">
              <div className="vx-dash-in rounded-lg border border-[#e4e9ed] bg-white p-4" style={{ animationDelay: "0.95s" }}>
                <div className="flex items-center justify-between">
                  <span className="text-[11.5px] font-semibold">Top dealers this month</span>
                  <span className="text-[9.5px] font-semibold" style={{ color: teal }}>
                    Dealer performance report
                  </span>
                </div>
                <div className="mt-2.5 grid grid-cols-[1.6fr_0.6fr_0.9fr_0.9fr_1.1fr] border-b border-[#e4e9ed] pb-1.5 text-[8px] font-semibold uppercase tracking-[0.1em] text-[#8a949c]">
                  <span>Dealer</span>
                  <span className="text-right">Orders</span>
                  <span className="text-right">Sales</span>
                  <span className="text-right">Outstanding</span>
                  <span className="pl-4">Aging</span>
                </div>
                {dealers.map(([n, o, s, out, tag, c], i) => (
                  <div
                    key={n}
                    className="vx-dash-in grid grid-cols-[1.6fr_0.6fr_0.9fr_0.9fr_1.1fr] items-center border-b border-[#eef1f4] py-[7px] text-[10px] tabular-nums"
                    style={{ animationDelay: `${1.2 + i * 0.09}s` }}
                  >
                    <span className="font-semibold">{n}</span>
                    <span className="text-right">{o}</span>
                    <span className="text-right">{s}</span>
                    <span className="text-right">{out}</span>
                    <span className="pl-4">
                      <span
                        className="inline-block rounded-[3px] px-1.5 py-[2px] text-[7.5px] font-semibold"
                        style={{ color: c, background: `${c}1a` }}
                      >
                        {tag}
                      </span>
                    </span>
                  </div>
                ))}
              </div>

              <div className="vx-dash-in rounded-lg border border-[#e4e9ed] bg-white p-4" style={{ animationDelay: "1.05s" }}>
                <span className="text-[11.5px] font-semibold">Needs attention</span>
                <div className="mt-2.5 flex flex-col gap-2">
                  {attention.map((a, i) => (
                    <div
                      key={a.t}
                      className="vx-dash-slide flex items-center gap-2 rounded-md px-2.5 py-2 text-[9.5px] font-medium leading-[1.3]"
                      style={{ background: a.bg, color: a.c, animationDelay: `${1.3 + i * 0.1}s` }}
                    >
                      <Icon name={a.icon} className="size-[12px] shrink-0" />
                      <span className="grow">{a.t}</span>
                      <Icon name="chev" className="size-[10px] shrink-0" />
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

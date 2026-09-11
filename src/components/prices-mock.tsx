"use client";

import { useEffect, useRef, useState } from "react";
import { DashSidebar, Icon, amber, coral, green, teal } from "./dash-parts";

/**
 * The MediCos "Products & price tiers" screen. Fixed 1120x700, scaled to its
 * container. After the entrance, an 8s loop plays a real edit: the dealer
 * price is retyped, the save button is pressed, a new period lands at the top
 * of the price history and the product row picks up the new price.
 */
const W = 1120;
const H = 700;
const LOOP = 8000;

type Product = [name: string, sku: string, cat: string, dealer: string, retailer: string, mrp: string, stock: string, status: "Active" | "Reorder" | "No price", tint: string];

const products: Product[] = [
  ["Kerasys Moisturizing Shampoo 600 ml", "Kerasys · KER-MS-600", "Hair", "760", "890", "1,050", "460", "Active", "#c9a27a"],
  ["Kerasys Deep Cleansing Shampoo 600 ml", "Kerasys · KER-DC-600", "Hair", "790", "890", "1,050", "356", "Active", "#7fb3c9"],
  ["Showermate Coconut & White Tea 550 g", "Aekyung · AEK-SM-CWT", "Body", "560", "640", "750", "216", "Active", "#8e6fc9"],
  ["Showermate Rose & Cherry Blossom 550 g", "Aekyung · AEK-SM-RCB", "Body", "560", "640", "750", "36", "Reorder", "#e08aa8"],
  ["Aekyung Toothpaste Shining White 100 g", "Aekyung · AEK-TP-100", "Oral", "205", "235", "275", "960", "Active", "#5fb7c4"],
  ["Super UV Sun Block SPF50+ 60 ml", "MEDICOS · MED-UV-060", "Sun care", "[set]", "[set]", "[set]", "600", "No price", "#e8d38a"],
  ["Hydra Impact Moisturizing Cream 90 ml", "MEDICOS · MED-HI-090", "Skincare", "[set]", "[set]", "[set]", "480", "No price", "#b9c7d6"],
  ["Anti Hair Loss Shampoo 500 ml", "MEDICOS · MED-AHL-500", "Hair", "[set]", "[set]", "[set]", "300", "No price", "#8a5a3c"],
  ["Ever Collagen Treatment", "MEDICOS · MED-ECT-001", "Hair", "[set]", "[set]", "[set]", "240", "No price", "#4fa7a0"],
];

const statusColor = { Active: green, Reorder: amber, "No price": coral } as const;

const history: [string, string, string, string][] = [
  ["1 Magh 2082", "760", "860", "1,000"],
  ["1 Shrawan 2082", "740", "840", "980"],
];

const COLS = "grid-cols-[1.9fr_0.8fr_0.6fr_0.7fr_0.6fr_0.6fr_0.8fr]";

export function PricesMock() {
  const ref = useRef<HTMLDivElement>(null);
  const [typed, setTyped] = useState("760");
  const [caret, setCaret] = useState(false);
  const [pressed, setPressed] = useState(false);
  const [saved, setSaved] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const ro = new ResizeObserver(([e]) => el.style.setProperty("--s", String(e.contentRect.width / W)));
    ro.observe(el);

    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      // Jump straight to the saved state, no replay.
      const done = window.setTimeout(() => {
        setTyped("790");
        setSaved(true);
      }, 0);
      return () => {
        ro.disconnect();
        window.clearTimeout(done);
      };
    }

    // One edit cycle, replayed every LOOP ms after the entrance has finished.
    const steps: [number, () => void][] = [
      [0, () => { setTyped("760"); setSaved(false); setCaret(false); }],
      [1600, () => setCaret(true)],
      [2000, () => setTyped("")],
      [2160, () => setTyped("7")],
      [2320, () => setTyped("79")],
      [2480, () => setTyped("790")],
      [3300, () => { setCaret(false); setPressed(true); }],
      [3520, () => { setPressed(false); setSaved(true); }],
    ];
    let timers: number[] = [];
    const run = () => {
      timers = steps.map(([t, fn]) => window.setTimeout(fn, t));
    };
    const first = window.setTimeout(run, 1400);
    const loop = window.setInterval(run, LOOP);
    return () => {
      ro.disconnect();
      window.clearTimeout(first);
      window.clearInterval(loop);
      timers.forEach(window.clearTimeout);
    };
  }, []);

  return (
    <div
      ref={ref}
      className="relative w-full overflow-hidden bg-[#f3f6f8] text-[#1a1f24]"
      style={{ aspectRatio: `${W} / ${H}`, containerType: "inline-size", ["--s" as string]: `tan(atan2(100cqw, ${W}px))` }}
      role="img"
      aria-label="MediCos Nepal product and price-tier management, built by Vexora: dealer, retailer and MRP prices with effective dates and a full history."
    >
      <div
        aria-hidden
        className="absolute left-0 top-0 flex font-sans text-[12px] leading-[1.35] antialiased"
        style={{ width: W, height: H, transform: "scale(var(--s, 1))", transformOrigin: "top left" }}
      >
        <DashSidebar active="Products & prices" />

        <div className="flex min-w-0 grow flex-col">
          <header className="flex h-[52px] items-center justify-between border-b border-[#e4e9ed] bg-white px-6">
            <div className="text-[14px] font-semibold">Products &amp; price tiers</div>
            <div className="flex items-center gap-3">
              <div className="flex h-[30px] w-[200px] items-center gap-2 rounded-md border border-[#e4e9ed] px-2.5 text-[#98a2aa]">
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
                <span className="absolute right-[6px] top-[6px] size-[5px] rounded-full" style={{ background: coral }} />
              </div>
              <span className="flex h-[30px] items-center gap-1.5 rounded-md px-3 text-[10.5px] font-semibold text-white" style={{ background: coral }}>
                <span className="text-[13px] leading-none">+</span> Add product
              </span>
              <span className="flex items-center gap-1.5 text-[10.5px] font-semibold">
                <Icon name="down" className="size-[11px]" /> Import CSV
              </span>
            </div>
          </header>

          <div className="grid grow grid-cols-[1fr_300px] gap-4 p-5">
            {/* product table */}
            <div className="vx-dash-in flex min-w-0 flex-col rounded-lg border border-[#e4e9ed] bg-white p-4" style={{ animationDelay: "0.45s" }}>
              <div className="flex items-center justify-between">
                <div className="flex gap-1.5">
                  {["All", "MEDICOS", "Kerasys", "Aekyung", "Inactive"].map((f, i) => (
                    <span
                      key={f}
                      className="flex h-[24px] items-center rounded-full px-3 text-[9.5px] font-semibold"
                      style={{ background: i === 0 ? "#1a1f24" : "#eef1f4", color: i === 0 ? "#fff" : "#3c464e" }}
                    >
                      {f}
                    </span>
                  ))}
                </div>
                <span className="text-[9.5px] text-[#8a949c]">31 products · 3 brands</span>
              </div>
              <div className={`mt-3 grid ${COLS} border-b border-[#e4e9ed] pb-1.5 text-[8px] font-semibold uppercase tracking-[0.1em] text-[#8a949c]`}>
                <span>Product</span>
                <span>Category</span>
                <span className="text-right">Dealer</span>
                <span className="text-right">Retailer</span>
                <span className="text-right">MRP</span>
                <span className="text-right">Stock</span>
                <span className="pl-4">Status</span>
              </div>
              {products.map(([name, sku, cat, dealer, retailer, mrp, stock, status, tint], i) => {
                const live = i === 0;
                const price = live ? (saved ? "790" : "760") : dealer;
                return (
                  <div
                    key={sku}
                    className={`vx-dash-in grid ${COLS} items-center border-b border-[#eef1f4] py-[6px] text-[10px] tabular-nums`}
                    style={{ animationDelay: `${0.7 + i * 0.06}s` }}
                  >
                    <span className="flex items-center gap-2.5 pr-2">
                      <span className="flex size-[24px] shrink-0 items-center justify-center rounded-md" style={{ background: `${tint}33` }}>
                        <span className="h-[14px] w-[7px] rounded-[2px]" style={{ background: tint }} />
                      </span>
                      <span className="flex min-w-0 flex-col leading-tight">
                        <span className="truncate font-semibold">{name}</span>
                        <span className="text-[8px] text-[#8a949c]">{sku}</span>
                      </span>
                    </span>
                    <span>{cat}</span>
                    <span className={`text-right ${live ? "vx-price-cell" : ""} ${live && saved ? "is-new" : ""}`}>
                      <span className="inline-block rounded px-1 py-[1px]">{price}</span>
                    </span>
                    <span className="text-right">{retailer}</span>
                    <span className="text-right">{mrp}</span>
                    <span className="text-right">{stock}</span>
                    <span className="pl-4">
                      <span className="inline-block rounded-[3px] px-1.5 py-[2px] text-[7.5px] font-semibold" style={{ color: statusColor[status], background: `${statusColor[status]}1a` }}>
                        {status}
                      </span>
                    </span>
                  </div>
                );
              })}
            </div>

            {/* price panel */}
            <div className="vx-dash-in flex flex-col rounded-lg border border-[#e4e9ed] bg-white p-4" style={{ animationDelay: "0.6s" }}>
              <div className="text-[11px] font-semibold leading-snug">Price tiers · Kerasys Moisturizing Shampoo 600 ml</div>
              <div className="mt-3 grid grid-cols-3 gap-2 text-[8.5px] text-[#6d777f]">
                <span>Dealer price</span>
                <span>Retailer price</span>
                <span>MRP</span>
                <span
                  className="vx-price-field flex h-[34px] items-center rounded-md border px-2.5 text-[13px] font-semibold tabular-nums text-[#1a1f24]"
                  style={{ borderColor: caret ? teal : "#e4e9ed", boxShadow: caret ? `0 0 0 3px ${teal}22` : "none" }}
                >
                  {typed}
                  {caret ? <span className="vx-caret ml-[1px] h-[16px] w-[1.5px] bg-[#1a1f24]" /> : null}
                </span>
                <span className="flex h-[34px] items-center rounded-md border border-[#e4e9ed] px-2.5 text-[13px] font-semibold tabular-nums text-[#1a1f24]">890</span>
                <span className="flex h-[34px] items-center rounded-md border border-[#e4e9ed] px-2.5 text-[13px] font-semibold tabular-nums text-[#1a1f24]">1,050</span>
              </div>
              <div className="mt-3 grid grid-cols-[1.25fr_1fr] gap-2 text-[8.5px] text-[#6d777f]">
                <span>Effective from</span>
                <span>Applies to</span>
                <span className="flex h-[34px] items-center gap-2 rounded-md border border-[#e4e9ed] px-2.5 text-[10.5px] font-medium text-[#1a1f24]">
                  <Icon name="doc" className="size-[11px] text-[#8a949c]" /> 19 Bhadra 2083
                </span>
                <span className="flex h-[34px] items-center justify-between rounded-md border border-[#e4e9ed] px-2.5 text-[10.5px] font-medium text-[#1a1f24]">
                  All dealers <Icon name="down" className="size-[11px] text-[#8a949c]" />
                </span>
              </div>
              <p className="mt-2.5 text-[8.5px] leading-snug text-[#6d777f]">
                New prices apply to orders placed after the effective date. Existing invoices keep their prices.
              </p>
              <div className="mt-3 flex items-center gap-2">
                <span
                  className="flex h-[28px] items-center gap-1.5 rounded-md px-3 text-[10px] font-semibold text-white transition-transform duration-150"
                  style={{ background: coral, transform: pressed ? "scale(0.94)" : "none", filter: pressed ? "brightness(0.9)" : "none" }}
                >
                  <svg viewBox="0 0 24 24" className="size-[11px]" fill="none" stroke="currentColor" strokeWidth={2.5} strokeLinecap="round" strokeLinejoin="round">
                    <path d="M4 12.5 9 17.5 20 6.5" />
                  </svg>
                  Save new price period
                </span>
                <span className="flex h-[28px] items-center rounded-md bg-[#eef1f4] px-3 text-[10px] font-semibold">Cancel</span>
              </div>

              <div className="mt-4 text-[11px] font-semibold">Price history</div>
              <div className="mt-1.5 grid grid-cols-[1.3fr_0.7fr_0.8fr_0.7fr_0.7fr] border-b border-[#e4e9ed] pb-1 text-[7.5px] font-semibold uppercase tracking-[0.1em] text-[#8a949c]">
                <span>From</span>
                <span className="text-right">Dealer</span>
                <span className="text-right">Retailer</span>
                <span className="text-right">MRP</span>
                <span className="text-right">By</span>
              </div>
              <div className={`vx-history-new grid grid-cols-[1.3fr_0.7fr_0.8fr_0.7fr_0.7fr] items-center border-b border-[#eef1f4] text-[9.5px] tabular-nums ${saved ? "is-in" : ""}`}>
                <span className="font-medium">19 Bhadra 2083</span>
                <span className="text-right font-semibold" style={{ color: teal }}>790</span>
                <span className="text-right">890</span>
                <span className="text-right">1,050</span>
                <span className="text-right">Owner</span>
              </div>
              {history.map(([from, d, r, m]) => (
                <div key={from} className="grid grid-cols-[1.3fr_0.7fr_0.8fr_0.7fr_0.7fr] items-center border-b border-[#eef1f4] py-[7px] text-[9.5px] tabular-nums">
                  <span className="font-medium">{from}</span>
                  <span className="text-right">{d}</span>
                  <span className="text-right">{r}</span>
                  <span className="text-right">{m}</span>
                  <span className="text-right">Owner</span>
                </div>
              ))}

              <div
                className="mt-auto flex items-center gap-2 self-start rounded-md px-2.5 py-1.5 text-[9.5px] font-semibold transition-all duration-300"
                style={{ background: `${green}1a`, color: green, opacity: saved ? 1 : 0, transform: saved ? "none" : "translateY(6px)" }}
              >
                <svg viewBox="0 0 24 24" className="size-[11px]" fill="none" stroke="currentColor" strokeWidth={2.5} strokeLinecap="round" strokeLinejoin="round">
                  <path d="M4 12.5 9 17.5 20 6.5" />
                </svg>
                Price period saved · applies from 19 Bhadra
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

"use client";

import { useMock } from "./use-mock";

/**
 * The Shailesh & Associates audited-statement screen, rebuilt in HTML. Fixed
 * 900x760 layout scaled to its container. The statement rows appear in order,
 * as if generated, then a "balanced" check lands once both totals agree.
 */
const W = 900;
const H = 760;

type Row = [label: string, note: string, cur: string, prev: string, kind: "h" | "r" | "t" | "T"];

const rows: Row[] = [
  ["A. Assets:", "", "", "", "h"],
  ["I. Non-Current Assets", "", "", "", "h"],
  ["Property, Plant and Equipment", "3.1", "758,500.00", "926,000.00", "r"],
  ["Investments", "3.2", "0.00", "0.00", "r"],
  ["Other Receivables", "3.3", "0.00", "0.00", "r"],
  ["Total Non-Current Assets", "", "758,500.00", "926,000.00", "t"],
  ["II. Current Assets", "", "", "", "h"],
  ["Investments", "3.2", "0.00", "0.00", "r"],
  ["Inventories", "3.4", "5,620,663.64", "450,000.00", "r"],
  ["Trade and Other Receivables", "3.3", "24,699,267.50", "5,234,150.00", "r"],
  ["Cash and Cash Equivalents", "3.5", "0.00", "0.00", "r"],
  ["Total Current Assets", "", "30,319,931.14", "5,684,150.00", "t"],
  ["Total Assets", "", "31,078,431.14", "6,610,150.00", "T"],
  ["B. Equity and Liabilities:", "", "", "", "h"],
  ["I. Equity", "", "", "", "h"],
  ["Share Capital", "3.6", "1,000,000.00", "1,000,000.00", "r"],
  ["Reserves", "3.7", "21,800,122.64", "4,315,250.00", "r"],
  ["Total Equity", "", "22,800,122.64", "5,315,250.00", "t"],
  ["II. Non-Current Liabilities", "", "", "", "h"],
  ["Loans and Borrowings", "3.8", "0.00", "0.00", "r"],
  ["Provisions", "3.10", "0.00", "0.00", "r"],
  ["Total Non-Current Liabilities", "", "0.00", "0.00", "t"],
  ["III. Current Liabilities", "", "", "", "h"],
  ["Loans and Borrowings", "3.8", "0.00", "0.00", "r"],
  ["Trade & Other Payables", "3.9", "2,450,017.50", "23,150.00", "r"],
  ["Provisions", "3.10", "5,828,291.00", "1,271,750.00", "r"],
  ["Total Current Liabilities", "", "8,278,308.50", "1,294,900.00", "t"],
  ["Total Liabilities", "", "8,278,308.50", "1,294,900.00", "t"],
  ["Total Equity and Liabilities", "", "31,078,431.14", "6,610,150.00", "T"],
];

const sidebar: [string, string[]][] = [
  ["", ["Dashboard"]],
  ["Directory", ["Clients", "Company Profile"]],
  ["Audit workflow", ["Autobooks", "Audited Statement", "Provisional Statement", "Depreciation"]],
  ["Core modules", ["File In Out", "Audit Report Finalization", "Audit Checklist", "Work Done"]],
];

const ROW_START = 0.9;
const ROW_STEP = 0.055;
const DONE = ROW_START + rows.length * ROW_STEP + 0.3;

/** The firm's mark: a navy S and an A whose left stroke is the orange wedge. */
function SaLogo({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 64 64" className={className} aria-hidden>
      <text
        x="0"
        y="53"
        fontFamily="'Arial Black', 'Segoe UI Black', Arial, sans-serif"
        fontWeight="900"
        fontSize="50"
        fill="#1b2a5b"
      >
        S
      </text>
      {/* right leg + crossbar */}
      <path d="M46 9h7l10 44h-9l-2.6-10.5h-6.9l2.4-8h2.4L46 17z" fill="#1b2a5b" />
      {/* left stroke */}
      <path d="M46 9h7L39 53h-9z" fill="#e5472b" />
    </svg>
  );
}

export function StatementMock() {
  const { ref, armed } = useMock(W);

  return (
    <div
      ref={ref}
      className={`vx-mock relative w-full overflow-hidden bg-[#f6f8fa] text-[#1a1f24] ${armed ? "is-armed" : ""}`}
      style={{ aspectRatio: `${W} / ${H}`, containerType: "inline-size", ["--s" as string]: `tan(atan2(100cqw, ${W}px))` }}
      role="img"
      aria-label="An audited Statement of Financial Position generated inside the Shailesh & Associates system, in the format ICAN expects."
    >
      <div
        aria-hidden
        className="absolute left-0 top-0 flex flex-col font-sans text-[11px] leading-[1.35] antialiased"
        style={{ width: W, height: H, transform: "scale(var(--s, 1))", transformOrigin: "top left" }}
      >
        {/* top bar */}
        <div className="flex h-[40px] shrink-0 items-center gap-5 border-b border-[#e3e8ed] bg-white px-4">
          <span className="flex flex-col gap-[3px]">
            {[0, 1, 2].map((i) => (
              <span key={i} className="block h-[1.5px] w-[13px] bg-[#3c464e]" />
            ))}
          </span>
          <span className="flex items-center gap-2.5">
            <SaLogo className="size-[26px]" />
            <span className="flex flex-col gap-[3px]">
              <span className="text-[10.5px] font-bold leading-none tracking-tight">Shailesh &amp; Associates</span>
              <span className="text-[6.5px] font-semibold leading-none tracking-[0.16em] text-[#6d777f]">CHARTERED ACCOUNTANTS</span>
            </span>
          </span>
          {["Company Registrar", "Financial Management", "Automation Hub"].map((t) => (
            <span key={t} className="flex items-center gap-1.5 text-[9.5px] font-medium text-[#3c464e]">
              <span className="size-[8px] rounded-[2px] border border-[#8a949c]" />
              {t}
              <span className="text-[7px] text-[#8a949c]">▾</span>
            </span>
          ))}
          <span className="ml-auto flex h-[22px] w-[120px] items-center gap-1.5 rounded-md border border-[#e3e8ed] bg-[#f6f8fa] px-2 text-[8.5px] text-[#8a949c]">
            <span className="size-[8px] rounded-full border border-[#8a949c]" />
            Jump to… <span className="ml-auto rounded border border-[#e3e8ed] px-1 text-[7px]">Ctrl K</span>
          </span>
          <span className="flex items-center gap-2">
            <span className="size-[18px] rounded-full bg-gradient-to-br from-[#2b6cb0] to-[#0b3a66]" />
            <span className="rounded-full bg-[#fff2d6] px-2 py-[2px] text-[7.5px] font-bold tracking-[0.08em] text-[#b7791f]">
              OWNER
            </span>
          </span>
        </div>

        <div className="flex min-h-0 grow">
          {/* sidebar */}
          <aside className="w-[170px] shrink-0 border-r border-[#e3e8ed] bg-white px-2.5 py-3">
            {sidebar.map(([head, items], gi) => (
              <div key={head || "top"} className={gi ? "mt-3" : ""}>
                {head ? (
                  <div className="mb-1.5 flex items-center justify-between px-2 text-[7px] font-bold uppercase tracking-[0.14em] text-[#8a949c]">
                    {head}
                    <span className="text-[7px]">▾</span>
                  </div>
                ) : null}
                {items.map((it) => {
                  const active = it === "Audited Statement";
                  return (
                    <div
                      key={it}
                      className="flex h-[22px] items-center gap-2 rounded-md px-2 text-[9.5px]"
                      style={{
                        background: active ? "#e8f0fb" : "transparent",
                        color: active ? "#1d4f91" : "#3c464e",
                        fontWeight: active ? 600 : 500,
                      }}
                    >
                      <span className="size-[9px] rounded-[2px] border" style={{ borderColor: active ? "#1d4f91" : "#98a2aa" }} />
                      {it}
                    </div>
                  );
                })}
              </div>
            ))}
          </aside>

          {/* document */}
          <div className="relative flex min-w-0 grow justify-center overflow-hidden px-6 pt-4">
            <div
              className="vx-dash-in vx-stmt-doc w-[620px] bg-white px-10 pb-7 pt-6 shadow-[0_1px_2px_rgba(0,0,0,0.06),0_8px_24px_-12px_rgba(0,0,0,0.25)]"
              style={{ animationDelay: "0.4s" }}
            >
              <div className="text-center">
                <div className="text-[13.5px] font-bold tracking-tight">Manakamana Steel Udhyog Pvt. Ltd.</div>
                <div className="text-[12px] font-bold tracking-tight">Bharatpur-11</div>
                <div className="mt-[3px] text-[12px] font-bold tracking-tight">Statement of Financial Position</div>
                <div className="mt-[2px] text-[9.5px] font-semibold text-[#333]">As at 32nd Ashadh 2083</div>
              </div>
              <div className="mt-3 flex items-end justify-between text-[8px] leading-tight text-[#555]">
                <span />
                <span className="text-right">
                  <b className="text-[#1a1f24]">Figures in NPR</b>
                  <br />
                  <i>Restated</i>
                </span>
              </div>

              <table className="mt-1.5 w-full border-collapse text-[8.5px] leading-[1.3]">
                <thead>
                  <tr className="bg-[#f3f5f7]">
                    <th className="border border-[#9aa3ab] px-2 py-[5px] text-left font-bold">Particulars</th>
                    <th className="w-[42px] border border-[#9aa3ab] px-1 py-[5px] text-center font-bold">Notes</th>
                    <th className="w-[108px] border border-[#9aa3ab] px-2 py-[5px] text-right font-bold leading-tight">
                      As at
                      <br />
                      32nd Ashadh 2083
                    </th>
                    <th className="w-[108px] border border-[#9aa3ab] px-2 py-[5px] text-right font-bold leading-tight">
                      As at
                      <br />
                      31st Ashadh 2082
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {rows.map(([label, note, cur, prev, kind], i) => {
                    const heading = kind === "h";
                    const total = kind === "t" || kind === "T";
                    const grand = kind === "T";
                    const sectionStart = heading && i > 0 && rows[i - 1][4] !== "h";
                    const cell = "border-x border-[#9aa3ab] px-2";
                    const pad = sectionStart ? "pt-[7px] pb-[2px]" : heading ? "pt-[3px] pb-[2px]" : total ? "py-[3px]" : "py-[2px]";
                    const num = (v: string) =>
                      v ? (
                        <span
                          className={
                            grand
                              ? "inline-block border-t border-[#1a1f24] px-0.5 [border-bottom:3px_double_#1a1f24]"
                              : total
                                ? "inline-block border-y border-[#1a1f24] px-0.5"
                                : ""
                          }
                        >
                          {v}
                        </span>
                      ) : null;
                    return (
                      <tr
                        key={i}
                        className={`vx-stmt-row ${total ? "bg-[#fafbfc]" : ""} ${i === rows.length - 1 ? "border-b border-[#9aa3ab]" : ""}`}
                        style={{ animationDelay: `${ROW_START + i * ROW_STEP}s` }}
                      >
                        <td className={`${cell} ${pad} ${heading || total ? "font-bold" : ""}`} style={{ paddingLeft: heading ? 8 : 14 }}>
                          {label}
                        </td>
                        <td className={`${cell} ${pad} text-center text-[#444]`}>{note}</td>
                        <td className={`${cell} ${pad} text-right ${total ? "font-bold" : ""}`}>{num(cur)}</td>
                        <td className={`${cell} ${pad} text-right ${total ? "font-bold" : ""}`}>{num(prev)}</td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
              <div className="mt-2.5 text-[8px] font-semibold leading-[1.6] text-[#333]">
                The notes are an integral part of these financial statements.
                <br />
                This is the statement of position referred to in our report of even date.
              </div>
            </div>

            {/* generating → balanced */}
            <div
              className="vx-stmt-status absolute bottom-4 right-6 flex h-[26px] items-center gap-2 rounded-full bg-white px-3 text-[9.5px] font-semibold shadow-[0_6px_20px_-8px_rgba(0,0,0,0.35)]"
              style={{ ["--done" as string]: `${DONE}s` }}
            >
              <span className="vx-stmt-spin size-[9px] rounded-full border-[1.5px] border-[#1d4f91] border-t-transparent" />
              <span className="vx-stmt-gen text-[#1d4f91]">Generating statement…</span>
              <span className="vx-stmt-ok flex items-center gap-1.5 text-[#1f8f4e]">
                <svg viewBox="0 0 24 24" className="size-[11px]" fill="none" stroke="currentColor" strokeWidth={2.5} strokeLinecap="round" strokeLinejoin="round">
                  <path d="M4 12.5 9 17.5 20 6.5" />
                </svg>
                Balanced · 31,078,431.14
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

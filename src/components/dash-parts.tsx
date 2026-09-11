/**
 * Pieces shared by the two MediCos screens (hero dashboard, price tiers):
 * palette, icon set and the sidebar, so both mocks look like one product.
 */
export const teal = "#1ba8b5";
export const coral = "#e8624a";
export const green = "#22a06b";
export const amber = "#d99a1e";


export const navItems = [
  "Overview",
  "Orders",
  "Products & prices",
  "Parties",
  "Stock & batches",
  "Invoices",
  "Payments",
  "Ledgers",
  "Reports",
  "Trace",
  "Settings",
];


export function Icon({ name, className = "" }: { name: string; className?: string }) {
  const d: Record<string, string> = {
    home: "M3 11 12 4l9 7v9a1 1 0 0 1-1 1h-5v-6H9v6H4a1 1 0 0 1-1-1z",
    doc: "M7 3h7l4 4v14H7zM14 3v4h4M10 12h5M10 16h5",
    tag: "M3 12V4h8l9 9-8 8zM7 8h.01",
    users: "M16 19a4 4 0 0 0-8 0M12 11a3 3 0 1 0 0-6 3 3 0 0 0 0 6M20 19a4 4 0 0 0-3-3.9M17 5a3 3 0 0 1 0 6",
    box: "M12 3 4 7v10l8 4 8-4V7zM4 7l8 4 8-4M12 11v10",
    file: "M6 3h12v18H6zM9 8h6M9 12h6M9 16h4",
    bank: "M3 9 12 4l9 5v1H3zM5 10v7M9 10v7M15 10v7M19 10v7M3 20h18",
    folder: "M3 6h6l2 2h10v11H3z",
    chart: "M4 20h16M7 16v-5M12 16V8M17 16v-3",
    search: "M11 4a7 7 0 1 0 0 14 7 7 0 0 0 0-14zM20 20l-4-4",
    pencil: "M4 20h4L19 9l-4-4L4 16zM13 7l4 4",
    bell: "M6 16V11a6 6 0 0 1 12 0v5l2 2H4zM10 20a2 2 0 0 0 4 0",
    warn: "M12 4 3 20h18zM12 10v4M12 17h.01",
    clock: "M12 3a9 9 0 1 0 0 18 9 9 0 0 0 0-18zM12 8v4l3 2",
    chev: "M9 6l6 6-6 6",
    down: "M6 9l6 6 6-6",
    truck: "M3 7h11v9H3zM14 10h4l3 3v3h-7zM7 19a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3zM17 19a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3z",
  };
  return (
    <svg
      viewBox="0 0 24 24"
      aria-hidden
      className={className}
      fill="none"
      stroke="currentColor"
      strokeWidth={1.7}
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d={d[name]} />
    </svg>
  );
}

export const navIcons = ["home", "doc", "tag", "users", "box", "file", "bank", "folder", "chart", "search", "pencil"];


export function DashSidebar({ active }: { active: string }) {
  return (
    <aside className="flex w-[180px] shrink-0 flex-col border-r border-[#e4e9ed] bg-white px-3 pb-3 pt-4">
      <div className="px-2">
        <div className="flex items-center gap-1 text-[15px] font-bold tracking-tight" style={{ color: teal }}>
          <span className="grid grid-cols-2 gap-[2px]">
            {[0, 1, 2, 3].map((i) => (
              <span key={i} className="size-[4px] rounded-[1px]" style={{ background: i === 3 ? coral : teal }} />
            ))}
          </span>
          MediCos<sup className="text-[7px]">®</sup>
        </div>
        <div className="mt-[1px] text-[6.5px] tracking-[0.02em] text-[#8a949c]">Beauty Secret of Korea</div>
        <div className="mt-2 text-[8px] font-semibold tracking-[0.14em] text-[#8a949c]">COMPANY ADMIN</div>
      </div>
      <nav className="mt-4 flex flex-col gap-[3px]">
        {navItems.map((n, i) => (
          <div
            key={n}
            className="vx-dash-nav flex h-[26px] items-center gap-2.5 rounded-md px-2.5 text-[11.5px]"
            style={{
              animationDelay: `${0.45 + i * 0.06}s`,
              background: n === active ? "#e3f4f6" : "transparent",
              color: n === active ? teal : "#3c464e",
              fontWeight: n === active ? 600 : 500,
            }}
          >
            <Icon name={navIcons[i]} className="size-[13px]" />
            {n}
          </div>
        ))}
      </nav>
      <div className="mt-auto flex items-center gap-2.5 rounded-lg bg-[#f3f6f8] px-2.5 py-2">
        <span className="flex size-[26px] items-center justify-center rounded-full bg-[#dceef1] font-serif text-[9px] font-semibold text-[#3c6e77]">
          MN
        </span>
        <span className="flex flex-col">
          <span className="text-[10.5px] font-semibold">Medicos Nepal</span>
          <span className="text-[8.5px] text-[#8a949c]">Owner · Kathmandu</span>
        </span>
      </div>
    </aside>
  );
}

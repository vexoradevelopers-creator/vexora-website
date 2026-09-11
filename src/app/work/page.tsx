import type { Metadata } from "next";
import Image from "next/image";
import { SortlyMock } from "@/components/sortly-mock";
import { StatementMock } from "@/components/statement-mock";
import { Check, CtaBand, Eyebrow, Rule, Wrap } from "@/components/ui";

export const metadata: Metadata = {
  title: "Work",
  description:
    "A workflow application for a chartered accountancy firm, a distribution system for a beauty importer, and Sortly, all built end to end by Vexora.",
};

export default function WorkPage() {
  return (
    <>
      <div className="relative overflow-hidden pt-14 lg:pt-[92px]">
        <div className="vx-glow left-[10%] top-[-300px] h-[620px] w-[880px]" />
        <Wrap className="vx-hero relative flex max-w-[820px] flex-col gap-5">
          <Eyebrow>Work</Eyebrow>
          <h1 className="text-[38px] leading-[1.06] lg:text-[60px] lg:leading-[1.04]">
            Built to fit the business behind it.
          </h1>
          <p className="text-pretty text-base leading-relaxed text-muted lg:text-lg">
            Three projects, three different problems: a workflow application for a
            chartered accountancy firm, a distribution system for a beauty importer, and Sortly, a puzzle game we
            built in&#8209;house. Different industries, different problems, and every line
            of all three designed and written by us.
          </p>
        </Wrap>
      </div>

      {/* FEATURED */}
      <Wrap className="pt-10 lg:pt-16">
        <div data-reveal className="overflow-hidden rounded-3xl border border-accent/25 bg-[linear-gradient(135deg,#141715,#0f1112)]">
          <div className="grid gap-8 p-6 lg:grid-cols-[0.82fr_1.18fr] lg:items-center lg:gap-12 lg:p-10">
            <div className="flex flex-col gap-5">
              <div className="flex flex-wrap gap-2">
                <span className="inline-flex h-[30px] items-center rounded-full border border-accent/35 bg-accent/[0.12] px-3 text-sm font-medium text-accent">
                  Featured
                </span>
                <span className="inline-flex h-[30px] items-center rounded-full border border-border bg-background-secondary px-3 text-sm font-medium text-muted">
                  Web application
                </span>
                <span className="inline-flex h-[30px] items-center rounded-full border border-border bg-background-secondary px-3 text-sm font-medium text-muted">
                  Chartered accountancy
                </span>
              </div>
              <h2 className="text-[32px] lg:text-[44px]">Shailesh &amp; Associates</h2>
              <p className="text-base leading-relaxed text-muted">
                The system a chartered accountancy firm runs its audit work on, from
                client files through to the finished, formatted statements it signs off.
              </p>

              {/* One engagement, start to finish. */}
              <div className="mt-2 flex flex-col gap-3">
                <span className="font-mono text-xs uppercase tracking-[0.16em] text-faint">
                  One engagement, start to sign-off
                </span>
                <div className="relative">
                  <div className="absolute left-3 right-3 top-1/2 h-px bg-separator" />
                  <div className="absolute left-3 right-3 top-1/2 h-px overflow-visible">
                    <span className="vx-flow-pulse absolute top-1/2 size-2 -translate-x-1/2 -translate-y-1/2 rounded-full bg-accent shadow-[0_0_12px_2px_rgba(124,216,0,0.6)]" />
                  </div>
                  <div className="relative grid grid-cols-4 gap-2">
                    {["Client files", "Autobooks", "Provisional", "Audited"].map((st, i) => (
                      <span
                        key={st}
                        className="vx-flow-step flex h-9 items-center justify-center rounded-full border border-border bg-surface px-2 text-center text-xs font-medium text-muted"
                        style={{ animationDelay: `${i * 1.5}s` }}
                      >
                        {st}
                      </span>
                    ))}
                  </div>
                </div>
                <div className="grid grid-cols-3 gap-2 pt-1">
                  {[
                    ["ICAN", "statement format"],
                    ["1 place", "for every file"],
                    ["0 rebuilds", "in Word"],
                  ].map(([n, l]) => (
                    <div key={n} className="rounded-xl border border-border bg-surface px-3 py-2.5">
                      <div className="font-display text-lg font-semibold leading-none text-accent">{n}</div>
                      <div className="mt-1 text-xs text-faint">{l}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="overflow-hidden rounded-2xl border border-border bg-[#0b0d0e]">
              <StatementMock />
              <div className="flex items-center justify-between gap-4 border-t border-border px-5 py-4">
                <span className="font-display text-base font-semibold tracking-tight">
                  Audited statement, generated
                </span>
                <span className="text-sm text-faint">Statement of Financial Position · FY 2082/83</span>
              </div>
            </div>
          </div>

          <Rule />

          <div data-reveal="stagger" className="grid lg:grid-cols-3">
            {[
              {
                k: "The problem",
                v: "Client work had outgrown folders and spreadsheets. There was no single place to see where an engagement stood without going and asking someone.",
              },
              {
                k: "What we built",
                v: "A web application shaped around the firm's actual process: one place for the work, and statements generated straight out of it in the exact format ICAN expects, instead of being rebuilt by hand in Word each time.",
              },
            ].map((c) => (
              <div
                key={c.k}
                className="flex flex-col gap-3 border-b border-separator p-6 lg:border-b-0 lg:border-r lg:p-9"
              >
                <span className="font-mono text-xs uppercase tracking-[0.16em] text-faint">
                  {c.k}
                </span>
                <p className="text-base leading-relaxed">{c.v}</p>
              </div>
            ))}
            <div className="flex flex-col gap-3 p-6 lg:p-9">
              <span className="font-mono text-xs uppercase tracking-[0.16em] text-faint">
                What changed
              </span>
              <p className="text-base leading-relaxed">
                Around 80% of the firm&rsquo;s day-to-day workflow is now automated.
                Engagement status, statements and client records live in one place,
                so the team spends its time on the work instead of tracking it.
              </p>
            </div>
          </div>
        </div>
      </Wrap>

      {/* OTHER WORK */}
      <Wrap className="pt-14 lg:pt-[88px]">
        <div className="flex flex-col gap-4">
          <Eyebrow>Also built</Eyebrow>
          <h2 className="text-[30px] lg:text-[40px]">A distribution system, and a puzzle game.</h2>
        </div>

        <div data-reveal="stagger" className="mt-8 grid gap-5 lg:mt-10 lg:grid-cols-2">
          <article className="vx-card overflow-hidden rounded-2xl border border-border bg-surface">
            <Image
              src="/medicos-prices.webp"
              alt="MediCos Nepal product and price-tier management, built by Vexora"
              width={1200}
              height={750}
              sizes="(max-width: 1024px) 100vw, 580px"
              className="block h-auto w-full"
            />
            <div className="flex flex-col gap-3 p-6 lg:p-7">
              <div className="flex flex-wrap gap-2">
                <span className="inline-flex h-[30px] items-center rounded-full border border-border bg-background-secondary px-3 text-sm font-medium text-muted">
                  Web application
                </span>
                <span className="inline-flex h-[30px] items-center rounded-full border border-border bg-background-secondary px-3 text-sm font-medium text-muted">
                  Distribution &amp; trade
                </span>
              </div>
              <h3 className="text-2xl">MediCos Nepal</h3>
              <p className="text-sm leading-relaxed text-muted">
                A Korean beauty distributor selling through dealers and retailers across
                Nepal. Distribution is where the money quietly leaks: wrong prices on
                an invoice, stock expiring in the warehouse, a dealer over their credit
                limit. The system was built around catching each of those before
                it costs anything.
              </p>
              <ul className="flex flex-col gap-2">
                {["Dealer, retailer and MRP price tiers with effective dates and full history",
                  "Batch tracking with expiry and reorder alerts",
                  "Receivables ageing, with automatic credit holds",
                  "Nepali fiscal year and Bikram Sambat dates throughout"].map((f) => (
                  <li key={f} className="flex items-start gap-2.5 text-sm leading-relaxed text-muted">
                    <Check className="mt-0.5" />
                    {f}
                  </li>
                ))}
              </ul>
            </div>
          </article>

          <article className="vx-card overflow-hidden rounded-2xl border border-border bg-surface">
            <SortlyMock />
            <div className="flex flex-col gap-3 p-6 lg:p-7">
              <span className="inline-flex h-[30px] w-fit items-center rounded-full border border-border bg-background-secondary px-3 text-sm font-medium text-muted">
                Game
              </span>
              <h3 className="text-2xl">Sortly: pour, sort, unwind</h3>
              <p className="text-sm leading-relaxed text-muted">
                A colour&#8209;sorting puzzle built in&#8209;house. Every level is verified
                solvable before it ships, proven rather than promised, and every
                liquid carries a colour&#8209;blind mark from level one, so the game is
                playable without relying on hue at all.
              </p>
              <ul className="flex flex-col gap-2">
                {["Every puzzle solvable: proven, not promised",
                  "Colour-blind marks on every liquid, from level one",
                  "Eight themes and five kinds of glass",
                  "No timer, no pressure, plays offline"].map((f) => (
                  <li key={f} className="flex items-start gap-2.5 text-sm leading-relaxed text-muted">
                    <Check className="mt-0.5" />
                    {f}
                  </li>
                ))}
              </ul>
            </div>
          </article>
        </div>
      </Wrap>

      <div className="mt-14 border-y border-border bg-background-secondary lg:mt-[88px]">
        <Wrap data-reveal="stagger" className="grid items-center gap-8 py-12 lg:grid-cols-[1fr_1.2fr] lg:gap-16 lg:py-[72px]">
          <div className="flex flex-col gap-4">
            <Eyebrow>How these were made</Eyebrow>
            <h2 className="text-[28px] lg:text-[36px]">
              Every one of these, end to end, in&#8209;house.
            </h2>
          </div>
          <p className="text-base leading-relaxed text-muted lg:text-[17px]">
            No white&#8209;labelled subcontractors, no templates dressed up as custom work.
            The same people did the scoping calls, the interface design, the code and the
            handover on all three: a workflow system, a distribution system and a
            real&#8209;time game engine problem. Those are three genuinely different
            disciplines, and being able to move between them is the reason we can tell you
            honestly which one your project actually needs.
          </p>
        </Wrap>
      </div>

      <CtaBand
        title="Be the next one on this page."
        body="Tell us what the problem is and we will tell you what it takes to solve: scope, price and timeline, in writing, before anything is signed."
      />
    </>
  );
}

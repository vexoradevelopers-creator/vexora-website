import type { Metadata } from "next";
import { Check, CtaBand, Eyebrow, Rule, Wrap } from "@/components/ui";
import { steps } from "@/lib/site";

export const metadata: Metadata = {
  title: "How we work",
  description:
    "A fixed-price written scope, a clickable build every week, and every account in your name from day one.",
};

const asks = [
  {
    title: "One decision-maker",
    body: "One person who can say yes. Design by committee is the most reliable way to double a timeline.",
  },
  {
    title: "An hour a week",
    body: "To look at the build and tell us what is wrong with it. That hour is worth more than any brief.",
  },
  {
    title: "The real process",
    body: "Let us see how the work actually happens, including the messy workarounds. Those are usually the requirements.",
  },
];

const shortVersion = [
  "Nothing starts until the scope and the price are in writing.",
  "You get a link you can click every week, from week one.",
  "Changes are re-quoted openly, never absorbed into the invoice.",
  "Every account is in your name from day one, not at the end.",
];

export default function HowWeWorkPage() {
  return (
    <>
      <div className="relative overflow-hidden pt-14 lg:pt-[92px]">
        <div className="vx-glow left-[10%] top-[-300px] h-[640px] w-[900px]" />
        <Wrap className="vx-hero relative grid gap-10 lg:grid-cols-[1.2fr_1fr] lg:items-end lg:gap-16">
          <div className="flex flex-col gap-5">
            <Eyebrow>How we work</Eyebrow>
            <h1 className="text-[38px] leading-[1.06] lg:text-[60px] lg:leading-[1.04]">
              You will know where your project stands. Every week.
            </h1>
            <p className="text-pretty text-base leading-relaxed text-muted lg:text-lg">
              Software projects rarely fail loudly. They fail quietly: a scope
              nobody wrote down, a month of silence, then a demo that is not what you had
              in your head and a bill that moved. Everything below exists to make both of
              those impossible.
            </p>
          </div>
          <div className="vx-card flex flex-col gap-4 rounded-2xl border border-border bg-surface p-6 lg:p-7">
            <h2 className="text-xl">The short version</h2>
            <div className="flex flex-col gap-3">
              {shortVersion.map((s) => (
                <div key={s} className="flex items-start gap-2.5 text-sm leading-relaxed text-muted">
                  <Check className="mt-0.5" />
                  {s}
                </div>
              ))}
            </div>
          </div>
        </Wrap>
      </div>

      {steps.map((s, i) => (
        <section key={s.n} className="pt-14 lg:pt-[76px]">
          <Wrap>
            <div
              data-reveal
              className="grid gap-8 border-t-2 pt-9 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16"
              style={{
                borderColor:
                  i === 0 ? "#7CD800" : i === 1 ? "rgba(124,216,0,0.5)" : "rgba(255,255,255,0.14)",
              }}
            >
              <div className="flex flex-col gap-4">
                <span className="font-display text-sm font-semibold tracking-[0.06em] text-accent">
                  STEP {s.n}
                </span>
                <h2 className="text-[28px] lg:text-[38px]">{s.title}</h2>
                <p className="text-base leading-relaxed text-muted">
                  {s.short} {s.body}
                </p>
                <div className="flex flex-wrap gap-2">
                  {s.chips.map((c) => (
                    <span
                      key={c}
                      className={`inline-flex h-[30px] items-center rounded-full border px-3 text-sm font-medium ${
                        c.startsWith("[")
                          ? "border-accent/35 bg-accent/[0.10] font-mono text-xs text-accent"
                          : "border-border bg-background-secondary text-muted"
                      }`}
                    >
                      {c}
                    </span>
                  ))}
                </div>
              </div>

              <div className="vx-card rounded-2xl border border-border bg-surface p-6 lg:p-7">
                <h3 className="text-lg">What you get from this step</h3>
                <Rule className="my-4" />
                <p className="text-sm leading-relaxed text-muted">{s.body}</p>
              </div>
            </div>
          </Wrap>
        </section>
      ))}

      <div className="mt-16 border-y border-border bg-background-secondary lg:mt-[110px]">
        <Wrap className="py-14 lg:py-[84px]">
          <div className="grid gap-10 lg:grid-cols-[0.85fr_1.45fr] lg:gap-16">
            <div data-reveal className="flex flex-col gap-4">
              <Eyebrow>Your side of it</Eyebrow>
              <h2 className="text-[28px] lg:text-[38px]">Three things we need from you.</h2>
              <p className="text-base leading-relaxed text-muted">
                Projects slip for client reasons as often as builder reasons. These are the
                three that matter, and we would rather say them out loud at the start.
              </p>
            </div>
            <div data-reveal="stagger" className="grid gap-5 sm:grid-cols-3">
              {asks.map((a) => (
                <div key={a.title} className="vx-card flex flex-col gap-3 rounded-2xl border border-border bg-surface p-6">
                  <h3 className="text-lg">{a.title}</h3>
                  <p className="text-sm leading-relaxed text-muted">{a.body}</p>
                </div>
              ))}
            </div>
          </div>
        </Wrap>
      </div>

      <Wrap data-reveal="stagger" className="grid gap-6 pt-16 lg:grid-cols-2 lg:pt-[104px]">
        <div className="flex flex-col gap-4">
          <Eyebrow>When things change</Eyebrow>
          <h2 className="text-[28px] lg:text-[38px]">Because they will.</h2>
          <p className="text-base leading-relaxed text-muted">
            Halfway through, you will think of something better. That is normal and usually
            right. The problem is never the change itself, it is the change that
            quietly appears on the final invoice.
          </p>
          <div className="rounded-2xl border border-accent/25 bg-[linear-gradient(135deg,#151a14,#111314)] p-6">
            <h3 className="text-lg">How we handle it</h3>
            <p className="mt-3 text-sm leading-relaxed text-muted">
              You ask. We come back within a day with what it costs and what it does to the
              dates. You say yes or no. Nothing is built and nothing is charged until you
              have said yes in writing.
            </p>
          </div>
        </div>

        <div className="flex flex-col gap-4">
          <Eyebrow>If it goes wrong</Eyebrow>
          <h2 className="text-[28px] lg:text-[38px]">What you can hold us to.</h2>
          <p className="text-base leading-relaxed text-muted">
            A process is only worth something if there is a consequence attached. These are
            ours.
          </p>
          <div className="vx-card rounded-2xl border border-border bg-surface p-6">
            <h3 className="text-lg">Our commitment</h3>
            <p className="mt-3 text-sm leading-relaxed text-muted">
              If a milestone slips because of us, you hear about it the same week and the
              delay is not billed. You can stop the project at any weekly build, pay only
              for the weeks delivered, and keep everything built so far: code, accounts
              and documentation. Nothing we build is tied to us to keep running.
            </p>
          </div>
        </div>
      </Wrap>

      <CtaBand
        title="Start with the call."
        body="Forty-five minutes, free, and you leave with a written summary and a straight opinion, whether or not anything comes of it."
        cta="Book a scoping call"
        note="No pitch deck. No obligation."
      />
    </>
  );
}

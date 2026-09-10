import type { Metadata } from "next";
import Link from "next/link";
import { Check, CtaBand, Eyebrow, Rule, Todo, Wrap } from "@/components/ui";
import { services } from "@/lib/site";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Web applications, websites, mobile apps, games and IT consulting, built by Vexora in Chitwan, Nepal.",
};

const included = [
  "A fixed-price written scope",
  "A clickable build every week",
  "Code and accounts in your name",
  "Documentation and a recorded walkthrough",
  "A named contact after launch",
];

export default function ServicesPage() {
  return (
    <>
      <div className="relative overflow-hidden pt-14 lg:pt-[92px]">
        <div className="vx-glow left-[10%] top-[-300px] h-[640px] w-[900px]" />
        <Wrap className="relative grid gap-10 lg:grid-cols-[1.25fr_1fr] lg:items-end lg:gap-16">
          <div className="flex flex-col gap-5">
            <Eyebrow>Services</Eyebrow>
            <h1 className="text-[38px] leading-[1.06] lg:text-[60px] lg:leading-[1.04]">
              Five things we do.
              <br className="hidden lg:block" /> Each one, properly.
            </h1>
            <p className="max-w-[600px] text-pretty text-base leading-relaxed text-muted lg:text-lg">
              We would rather do a short list properly than a long list badly. If your
              project sits outside these five, we will say so and point you somewhere
              better. That costs us a job and saves you a bad one.
            </p>
          </div>
          <div className="flex flex-col gap-4 rounded-2xl border border-border bg-surface p-6 lg:p-7">
            <span className="font-mono text-xs uppercase tracking-[0.16em] text-faint">
              Every engagement includes
            </span>
            <div className="flex flex-col gap-2.5">
              {included.map((i) => (
                <div key={i} className="flex items-start gap-2.5 text-sm leading-relaxed text-muted">
                  <Check className="mt-0.5" />
                  {i}
                </div>
              ))}
            </div>
          </div>
        </Wrap>
      </div>

      {services.map((s, idx) => (
        <section key={s.slug} className="pt-14 lg:pt-[76px]">
          <Wrap>
            <div
              className="grid gap-8 border-t-2 pt-9 lg:grid-cols-[0.85fr_1.15fr] lg:gap-16"
              style={{
                borderColor:
                  idx === 0 ? "#7CD800" : idx === 1 ? "rgba(124,216,0,0.5)" : "rgba(255,255,255,0.14)",
              }}
            >
              <div className="flex flex-col gap-4">
                <Eyebrow>
                  {s.n} · {s.title}
                </Eyebrow>
                <h2 className="text-[28px] lg:text-[38px]">{s.tagline}</h2>
                <p className="text-base leading-relaxed text-muted">{s.body}</p>
                <div className="mt-1 flex flex-wrap gap-2">
                  {s.tech.map((t) => (
                    <span
                      key={t}
                      className="inline-flex h-[30px] items-center rounded-full border border-border bg-background-secondary px-3 text-sm font-medium text-muted"
                    >
                      {t}
                    </span>
                  ))}
                </div>
                <Link
                  href="/contact"
                  className="mt-3 inline-flex h-11 w-fit items-center rounded-full bg-accent px-6 font-display text-[15px] font-semibold text-accent-foreground transition hover:brightness-110"
                >
                  Scope a project
                </Link>
              </div>

              <div className="flex flex-col gap-4 rounded-2xl border border-border bg-surface p-6 lg:p-7">
                <h3 className="text-lg">Typically includes</h3>
                <div className="flex flex-col gap-2.5">
                  {s.includes.map((i) => (
                    <div key={i} className="flex items-start gap-2.5 text-sm leading-relaxed text-muted">
                      <Check className="mt-0.5" />
                      {i}
                    </div>
                  ))}
                </div>
                <Rule />
                <div className="flex flex-wrap items-center justify-between gap-4">
                  <div className="flex flex-col gap-1">
                    <span className="text-xs text-faint">Typical build</span>
                    <Todo>{s.duration}</Todo>
                  </div>
                  <div className="flex flex-col gap-1">
                    <span className="text-xs text-faint">From</span>
                    <Todo>{s.price}</Todo>
                  </div>
                </div>
              </div>
            </div>
          </Wrap>
        </section>
      ))}

      <CtaBand
        title="Still not sure which one you need?"
        body="Describe the problem in your own words. We will tell you what it actually takes to solve, and if the honest answer is that you do not need us, you will get that instead."
        cta="Book a scoping call"
      />
    </>
  );
}

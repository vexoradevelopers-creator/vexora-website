import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  Check,
  CtaBand,
  Eyebrow,
  Rule,
  Section,
  SectionHead,
  Todo,
  Wrap,
} from "@/components/ui";
import {
  audiences,
  commitments,
  comparison,
  faqs,
  problems,
  services,
  stack,
  steps,
} from "@/lib/site";

export default function HomePage() {
  return (
    <>
      {/* HERO */}
      <div className="relative overflow-hidden pt-14 lg:pt-[104px]">
        <div className="vx-glow left-1/2 top-[-330px] h-[800px] w-[1180px] -translate-x-1/2" />
        <Wrap className="relative flex flex-col items-center gap-6 text-center lg:gap-7">
          <h1 className="mt-4 max-w-[1020px] text-[41px] leading-[1.06] lg:mt-6 lg:text-[72px] lg:leading-[1.03]">
            Your business isn&rsquo;t off&#8209;the&#8209;shelf.
            <br className="hidden lg:block" /> Your software shouldn&rsquo;t be.
          </h1>
          <p className="max-w-[730px] text-pretty text-base leading-relaxed text-muted lg:text-xl">
            Vexora is a software studio that builds web applications, websites, mobile
            apps and games for businesses that have outgrown spreadsheets and templates.
            We scope in writing, build in weekly slices you can click, and hand over
            everything &mdash; code, accounts and documentation included.
          </p>
          <div className="flex w-full flex-col items-stretch gap-3 lg:w-auto lg:flex-row lg:items-center">
            <Link
              href="/contact"
              className="inline-flex h-12 items-center justify-center gap-2 rounded-full bg-accent px-6 font-display text-base font-semibold text-accent-foreground transition hover:brightness-110"
            >
              Start a project
              <ArrowRight />
            </Link>
            <Link
              href="/work"
              className="inline-flex h-12 items-center justify-center gap-2 rounded-full border border-white/[0.16] px-6 font-display text-base font-semibold transition hover:border-white/30"
            >
              See what we build
            </Link>
          </div>
          <p className="text-base text-faint">
            Every project starts with a free 45&#8209;minute call and a fixed&#8209;price
            proposal in writing.
          </p>
        </Wrap>

        {/* The product, not a mock of one. */}
        <Wrap className="relative mt-10 lg:mt-16">
          <div className="rounded-3xl border border-border bg-[linear-gradient(180deg,#101314,#0b0d0e)] p-2.5 shadow-[0_40px_90px_-30px_rgba(0,0,0,0.9)] lg:p-3.5">
            <div className="overflow-hidden rounded-xl border border-border bg-background-secondary">
              <Image
                src="/sa-dashboard.webp"
                alt="The Shailesh & Associates audit workspace, built by Vexora"
                width={1800}
                height={672}
                priority
                sizes="(max-width: 1024px) 100vw, 1170px"
                className="block h-auto w-full"
              />
              <div className="flex flex-col items-start justify-between gap-3 border-t border-border px-5 py-4 text-left lg:flex-row lg:items-center lg:gap-6 lg:px-6 lg:py-5">
                <div className="flex flex-wrap items-center gap-3.5">
                  <span className="inline-flex h-[30px] shrink-0 items-center rounded-full border border-accent/35 bg-accent/[0.12] px-3 text-sm font-medium text-accent">
                    Web application
                  </span>
                  <span className="text-[15px]">
                    Shailesh &amp; Associates, Chartered Accountants &mdash; the workspace
                    their audit and compliance work runs on.
                  </span>
                </div>
                <Link
                  href="/work"
                  className="inline-flex shrink-0 items-center gap-2 whitespace-nowrap text-sm font-medium text-muted hover:text-foreground"
                >
                  See all work
                  <ArrowRight />
                </Link>
              </div>
            </div>
          </div>
        </Wrap>
      </div>

      {/* STACK */}
      <div className="mt-14 border-y border-border bg-background-secondary lg:mt-[88px]">
        <Wrap className="flex flex-col gap-3.5 py-6 lg:flex-row lg:items-center lg:gap-8">
          <span className="whitespace-nowrap font-mono text-xs uppercase tracking-[0.16em] text-faint">
            The stack we build on
          </span>
          <div className="flex flex-wrap gap-2.5">
            {stack.map((s) => (
              <span
                key={s}
                className="inline-flex h-[30px] items-center rounded-full border border-border bg-background px-3 text-sm font-medium text-muted"
              >
                {s}
              </span>
            ))}
          </div>
        </Wrap>
      </div>

      {/* WHY */}
      <Section>
        <Wrap>
          <SectionHead
            eyebrow="Why Vexora exists"
            title="Small businesses keep buying software that doesn't fit them."
            lead="Not because the tools are bad — because nobody sat down with the business first. Six things we hear constantly, and what we do about each one."
          />
          <div className="mt-8 grid gap-5 lg:mt-[52px] lg:grid-cols-3">
            {problems.map((p) => (
              <article
                key={p.title}
                className="flex flex-col gap-4 rounded-2xl border border-border bg-surface p-6 lg:p-7"
              >
                <h3 className="text-xl">{p.title}</h3>
                <p className="text-sm leading-relaxed text-muted">{p.problem}</p>
                <Rule />
                <p className="text-sm leading-relaxed">
                  <span className="font-semibold text-accent">With Vexora &mdash;</span>{" "}
                  {p.answer}
                </p>
              </article>
            ))}
          </div>
        </Wrap>
      </Section>

      {/* SERVICES */}
      <Section>
        <Wrap>
          <div className="flex flex-col items-start justify-between gap-6 lg:flex-row lg:items-end">
            <SectionHead eyebrow="What we build" title="Five things we do, properly." />
            <Link
              href="/services"
              className="inline-flex h-11 shrink-0 items-center gap-2 rounded-full border border-white/[0.16] px-5 font-display text-[15px] font-semibold"
            >
              All services
              <ArrowRight />
            </Link>
          </div>

          <div className="mt-8 grid gap-5 lg:mt-12 lg:grid-cols-3">
            {services.map((s, i) => (
              <article
                key={s.slug}
                className={`flex flex-col gap-3 rounded-2xl border p-6 lg:p-7 ${
                  i === 0
                    ? "border-accent/25 bg-[linear-gradient(135deg,#151a14,#111314)] lg:col-span-2"
                    : "border-border bg-surface"
                }`}
              >
                <Eyebrow>
                  {s.n}
                  {i === 0 ? " — Most requested" : ""}
                </Eyebrow>
                <h3 className={i === 0 ? "text-[28px]" : "text-2xl"}>{s.title}</h3>
                <p className="max-w-[560px] text-sm leading-relaxed text-muted">{s.body}</p>
                {i === 0 ? (
                  <div className="mt-1 flex flex-wrap gap-2">
                    {s.includes.slice(0, 4).map((inc) => (
                      <span
                        key={inc}
                        className="inline-flex h-[30px] items-center rounded-full border border-border bg-background-secondary px-3 text-sm font-medium text-muted"
                      >
                        {inc}
                      </span>
                    ))}
                  </div>
                ) : null}
              </article>
            ))}

            <article className="flex flex-col justify-center gap-3.5 rounded-2xl bg-accent p-6 lg:p-7">
              <h3 className="text-2xl text-accent-foreground">Not sure which one you need?</h3>
              <p className="text-sm leading-relaxed text-accent-foreground/75">
                Describe the problem, not the solution. We will tell you honestly what it
                takes &mdash; including when the answer is that you do not need us.
              </p>
              <Link
                href="/contact"
                className="mt-1 inline-flex items-center gap-2 font-display text-[15px] font-bold text-accent-foreground"
              >
                Book a scoping call
                <ArrowRight />
              </Link>
            </article>
          </div>
        </Wrap>
      </Section>

      {/* COMMITMENTS */}
      <div className="mt-16 border-y border-border bg-background-secondary lg:mt-[118px]">
        <Wrap className="py-14 lg:py-[84px]">
          <div className="grid gap-10 lg:grid-cols-[0.9fr_1.4fr] lg:gap-16">
            <div className="flex flex-col gap-4">
              <Eyebrow>Our terms</Eyebrow>
              <h2 className="text-[30px] lg:text-[42px]">
                Three things we put in writing, every time.
              </h2>
              <p className="text-base leading-relaxed text-muted">
                Not values on a wall &mdash; clauses in the contract. If we miss one of
                these, you have something to hold us to.
              </p>
            </div>
            <div className="grid gap-5 sm:grid-cols-3">
              {commitments.map((c, i) => (
                <div
                  key={c.n}
                  className={`flex flex-col gap-3 rounded-2xl border p-6 ${
                    i === 2 ? "border-accent/30 bg-accent/[0.05]" : "border-border bg-surface"
                  }`}
                >
                  <span className="font-display text-sm font-semibold tracking-[0.1em] text-accent">
                    {c.n}
                  </span>
                  <h3 className="text-[19px]">{c.title}</h3>
                  <p className="text-sm leading-relaxed text-muted">{c.body}</p>
                </div>
              ))}
            </div>
          </div>
        </Wrap>
      </div>

      {/* HOW WE WORK */}
      <Section>
        <Wrap>
          <SectionHead eyebrow="How we work" title="Four steps. No black box." />
          <div className="mt-8 grid gap-5 lg:mt-[52px] lg:grid-cols-4">
            {steps.map((s, i) => (
              <div
                key={s.n}
                className="flex flex-col gap-3.5 border-t-2 pt-6"
                style={{
                  borderColor:
                    i === 0 ? "#7CD800" : i === 1 ? "rgba(124,216,0,0.4)" : "rgba(255,255,255,0.14)",
                }}
              >
                <span className="font-display text-sm font-semibold tracking-[0.1em] text-accent">
                  STEP {s.n}
                </span>
                <h3 className="text-[22px]">{s.title}</h3>
                <p className="text-sm leading-relaxed text-muted">
                  {s.short} {s.body}
                </p>
              </div>
            ))}
          </div>
          <Link
            href="/how-we-work"
            className="mt-8 inline-flex items-center gap-2 text-[15px] font-medium text-accent hover:brightness-110"
          >
            Read the whole process
            <ArrowRight />
          </Link>
        </Wrap>
      </Section>

      {/* AUDIENCE + COMPARISON */}
      <Section>
        <Wrap className="grid gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:gap-16">
          <div className="flex flex-col gap-5">
            <Eyebrow>Who we build for</Eyebrow>
            <h2 className="text-[30px] lg:text-[38px]">
              Businesses where software is the bottleneck, not the product.
            </h2>
            <div className="flex flex-col border-t border-separator">
              {audiences.map((a) => (
                <div key={a} className="flex items-center gap-3.5 border-b border-separator py-4">
                  <Check className="size-[17px]" />
                  <span className="text-[15px]">{a}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="flex flex-col gap-5">
            <Eyebrow>The difference</Eyebrow>
            <h2 className="text-[30px] lg:text-[38px]">What changes when you work with us.</h2>
            <div className="overflow-hidden rounded-2xl border border-border">
              <div className="grid grid-cols-2">
                <div className="border-b border-r border-separator bg-background-secondary px-5 py-4">
                  <span className="font-mono text-xs uppercase tracking-[0.14em] text-faint">
                    The usual
                  </span>
                </div>
                <div className="border-b border-separator bg-accent/[0.06] px-5 py-4">
                  <span className="font-mono text-xs uppercase tracking-[0.14em] text-accent">
                    With Vexora
                  </span>
                </div>
                {comparison.map(([bad, good], i) => (
                  <div key={bad} className="contents">
                    <div
                      className={`border-r border-separator px-5 py-4 text-sm text-faint ${
                        i === comparison.length - 1 ? "" : "border-b"
                      }`}
                    >
                      {bad}
                    </div>
                    <div
                      className={`px-5 py-4 text-sm ${
                        i === comparison.length - 1 ? "" : "border-b border-separator"
                      }`}
                    >
                      {good}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </Wrap>
      </Section>

      {/* FAQ */}
      <Section>
        <Wrap className="grid gap-10 lg:grid-cols-[0.7fr_1.3fr] lg:gap-16">
          <div className="flex flex-col gap-4">
            <Eyebrow>Questions</Eyebrow>
            <h2 className="text-[30px] lg:text-[40px]">Asked and answered.</h2>
            <p className="text-[15px] leading-relaxed text-muted">
              Something not covered here? Call us, or write to{" "}
              <a href="mailto:vexoradevelopers@gmail.com" className="text-accent hover:brightness-110">
                vexoradevelopers@gmail.com
              </a>
              .
            </p>
          </div>
          <div className="flex flex-col border-t border-separator">
            {faqs.map((f, i) => (
              <details key={f.q} open={i === 0} className="group border-b border-separator py-6">
                <summary className="flex cursor-pointer list-none items-start justify-between gap-6">
                  <h3 className="text-lg group-open:text-foreground lg:text-xl">{f.q}</h3>
                  <span className="mt-1 shrink-0 text-accent transition group-open:rotate-45">
                    <svg viewBox="0 0 24 24" aria-hidden className="size-5" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round">
                      <path d="M12 5v14M5 12h14" />
                    </svg>
                  </span>
                </summary>
                <p className="mt-3.5 max-w-[660px] text-[15px] leading-relaxed text-muted">{f.a}</p>
              </details>
            ))}
          </div>
        </Wrap>
      </Section>

      <CtaBand
        title="Tell us what you need built."
        body="One message, a 45-minute call, and a written answer on scope, price and timeline. No pitch deck, no pressure."
      />
    </>
  );
}

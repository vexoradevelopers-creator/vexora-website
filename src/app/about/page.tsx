import type { Metadata } from "next";
import { Eyebrow, Wrap, CtaBand } from "@/components/ui";
import { company } from "@/lib/site";

export const metadata: Metadata = {
  title: "About",
  description:
    "Vexora Developers & Consulting Private Limited, a software studio in Khairahani, Chitwan, Nepal.",
};

const rules = [
  {
    n: "01",
    title: "Write it down first",
    body: "Scope, price and dates on paper before any money moves. If it is not written down, it is not agreed, and that protects you more than it protects us.",
  },
  {
    n: "02",
    title: "Show work weekly",
    body: "A link you can click, every week, from week one. Long silences are where projects quietly go wrong.",
  },
  {
    n: "03",
    title: "You own everything",
    body: "Repositories, domains, hosting and store accounts in your name from day one. No hostage-taking, ever, even on a bad breakup.",
  },
  {
    n: "04",
    title: "Say no when it is right",
    body: "If an existing product solves your problem, we will name it and help you set it up. Turning down work we should not take is how we intend to still be here in ten years.",
  },
];

const details: [string, string][] = [
  ["Legal name", company.legalName],
  ["Trading as", company.shortName],
  ["Reg. No.", company.regNo],
  ["Registered office", company.address],
];

export default function AboutPage() {
  return (
    <>
      <div className="relative overflow-hidden pt-14 lg:pt-[92px]">
        <div className="vx-glow left-[8%] top-[-300px] h-[620px] w-[880px]" />
        <Wrap className="vx-hero relative grid gap-10 lg:grid-cols-[1.15fr_1fr] lg:items-start lg:gap-20">
          <div className="flex flex-col gap-5">
            <Eyebrow>About Vexora</Eyebrow>
            <h1 className="text-[36px] leading-[1.06] lg:text-[58px] lg:leading-[1.04]">
              A small studio that would rather be trusted than impressive.
            </h1>
            <p className="text-pretty text-base leading-relaxed text-muted lg:text-[17px] lg:leading-[1.7]">
              {company.legalName} is a software studio working across three disciplines
              that rarely sit together: business workflow applications, distribution
              systems and real&#8209;time games. We also consult for businesses trying
              to decide what to build in the first place.
            </p>
            <p className="text-pretty text-base leading-relaxed text-muted lg:text-[17px] lg:leading-[1.7]">
              We started Vexora because we kept meeting businesses who had been sold
              software that did not fit them, by people who were never going to be around
              when it broke. The remedy is not clever technology. It is writing things
              down, showing work every week, and handing over everything at the end.
            </p>
          </div>

          <div className="vx-card flex flex-col gap-3.5 rounded-2xl border border-border bg-surface p-6 lg:p-8">
            <span className="font-mono text-xs uppercase tracking-[0.16em] text-faint">
              Company details
            </span>
            <div className="flex flex-col">
              {details.map(([k, v], i) => (
                <div
                  key={k}
                  className={`flex justify-between gap-5 py-3.5 ${
                    i === details.length - 1 ? "" : "border-b border-separator"
                  }`}
                >
                  <span className="shrink-0 text-sm text-faint">{k}</span>
                  <span className="text-right text-sm leading-relaxed">
                    {v}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </Wrap>
      </div>

      <Wrap className="pt-16 lg:pt-[104px]">
        <div className="flex max-w-[720px] flex-col gap-4">
          <Eyebrow>How we operate</Eyebrow>
          <h2 className="text-[30px] lg:text-[44px]">Four rules we hold ourselves to.</h2>
          <p className="text-base leading-relaxed text-muted lg:text-[17px]">
            These are not values on a wall. They are the things a client can hold us to,
            and complain about if we miss.
          </p>
        </div>
        <div data-reveal="stagger" className="mt-8 grid gap-5 lg:mt-11 lg:grid-cols-4">
          {rules.map((r) => (
            <div key={r.n} className="vx-card flex flex-col gap-3 rounded-2xl border border-border bg-surface p-6 lg:p-7">
              <span className="font-display text-sm font-semibold tracking-[0.1em] text-accent">
                {r.n}
              </span>
              <h3 className="text-[21px]">{r.title}</h3>
              <p className="text-sm leading-relaxed text-muted">{r.body}</p>
            </div>
          ))}
        </div>
      </Wrap>

      <Wrap className="pt-16 lg:pt-[104px]">
        <div className="flex flex-col items-start justify-between gap-6 lg:flex-row lg:items-end">
          <div className="flex max-w-[640px] flex-col gap-4">
            <Eyebrow>The team</Eyebrow>
            <h2 className="text-[30px] lg:text-[44px]">Who you will actually be working with.</h2>
          </div>
          <p className="max-w-[340px] text-sm leading-relaxed text-muted">
            Small on purpose. You will know everyone who touches your project by name, and
            you can reach any of them directly.
          </p>
        </div>
        <div data-reveal="stagger" className="mt-8 grid gap-5 lg:mt-10 lg:grid-cols-3">
          <div className="flex flex-col justify-center gap-3 rounded-2xl border border-dashed border-white/[0.14] bg-background-secondary p-6 lg:p-7">
            <h3 className="text-[21px]">Hiring soon</h3>
            <p className="text-sm leading-relaxed text-muted">
              We are a small team on purpose, but we grow with the work. If you build
              carefully and write plainly, write to us.
            </p>
            <a href={company.emailHref} className="text-sm text-accent hover:brightness-110">
              {company.email}
            </a>
          </div>
        </div>
      </Wrap>

      <CtaBand
        title="Tell us what you need built."
        body="One message, a 45-minute call, and a written answer on scope, price and timeline. No pitch deck, no pressure."
      />
    </>
  );
}

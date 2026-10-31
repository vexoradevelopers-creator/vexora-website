import type { ReactNode } from "react";
import { Eyebrow, Wrap } from "./ui";

/** Shared shell for the privacy policy and terms: a title block and a narrow reading column. */
export function LegalPage({
  eyebrow,
  title,
  updated,
  intro,
  children,
}: {
  eyebrow: string;
  title: string;
  updated: string;
  intro: ReactNode;
  children: ReactNode;
}) {
  return (
    <div className="relative overflow-hidden pt-14 pb-4 lg:pt-[92px]">
      <div className="vx-glow left-[8%] top-[-300px] h-[620px] w-[880px]" />
      <Wrap className="vx-hero relative flex max-w-[760px] flex-col gap-5">
        <Eyebrow>{eyebrow}</Eyebrow>
        <h1 className="text-[36px] leading-[1.06] lg:text-[54px] lg:leading-[1.04]">{title}</h1>
        <span className="font-mono text-xs uppercase tracking-[0.14em] text-faint">
          Last updated: {updated}
        </span>
        <div className="text-pretty text-base leading-relaxed text-muted lg:text-[17px] lg:leading-[1.7]">
          {intro}
        </div>
      </Wrap>
      <Wrap className="relative mt-10 flex max-w-[760px] flex-col gap-10 lg:mt-14">
        {children}
      </Wrap>
    </div>
  );
}

export function LegalSection({ title, children }: { title: string; children: ReactNode }) {
  return (
    <section className="flex flex-col gap-3 border-t border-separator pt-8">
      <h2 className="text-[22px] lg:text-[26px]">{title}</h2>
      <div className="flex flex-col gap-3 text-base leading-relaxed text-muted [&_a]:text-accent [&_a:hover]:brightness-110 [&_li]:pl-1 [&_ul]:flex [&_ul]:list-disc [&_ul]:flex-col [&_ul]:gap-2 [&_ul]:pl-5">
        {children}
      </div>
    </section>
  );
}

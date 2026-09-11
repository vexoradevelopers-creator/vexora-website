import Link from "next/link";
import { ArrowRight, Eyebrow, Wrap } from "@/components/ui";

export default function NotFound() {
  return (
    <div className="relative overflow-hidden pt-20 pb-24 lg:pt-[120px] lg:pb-[160px]">
      <div className="vx-glow vx-glow-breathe left-1/2 top-[-300px] h-[640px] w-[900px] -translate-x-1/2" />
      <Wrap className="vx-hero relative flex max-w-[720px] flex-col items-start gap-5">
        <Eyebrow>404</Eyebrow>
        <h1 className="text-[38px] leading-[1.06] lg:text-[60px] lg:leading-[1.04]">
          That page isn&rsquo;t here.
        </h1>
        <p className="text-pretty text-base leading-relaxed text-muted lg:text-lg">
          The link may be old, or the address mistyped. Everything we do is reachable
          from the pages below.
        </p>
        <div className="mt-2 flex flex-col gap-3 sm:flex-row">
          <Link
            href="/"
            className="vx-btn vx-btn-primary inline-flex h-12 items-center justify-center gap-2 rounded-full bg-accent px-6 font-display text-base font-semibold text-accent-foreground transition hover:brightness-110"
          >
            Back to home
            <ArrowRight />
          </Link>
          <Link
            href="/contact"
            className="vx-btn inline-flex h-12 items-center justify-center gap-2 rounded-full border border-white/[0.16] px-6 font-display text-base font-semibold transition hover:border-white/30"
          >
            Contact us
          </Link>
        </div>
      </Wrap>
    </div>
  );
}

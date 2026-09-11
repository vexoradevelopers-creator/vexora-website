import Link from "next/link";
import type { ComponentProps, ReactNode } from "react";

/** Page-width container. 1200px of content, matching the design. */
export function Wrap({
  children,
  className = "",
  ...rest
}: {
  children: ReactNode;
  className?: string;
} & Omit<ComponentProps<"div">, "className" | "children">) {
  return (
    <div className={`mx-auto w-full max-w-[1200px] px-5 lg:px-6 ${className}`} {...rest}>
      {children}
    </div>
  );
}

export function Eyebrow({ children }: { children: ReactNode }) {
  return (
    <span className="font-mono text-xs font-medium uppercase tracking-[0.18em] text-accent">
      {children}
    </span>
  );
}

export function Section({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) {
  return <section className={`pt-16 lg:pt-[118px] ${className}`}>{children}</section>;
}

export function SectionHead({
  eyebrow,
  title,
  lead,
  className = "",
  reveal = false,
}: {
  eyebrow: string;
  title: string;
  lead?: string;
  className?: string;
  /** Fade the head up on scroll. */
  reveal?: boolean;
}) {
  return (
    <div
      data-reveal={reveal ? "" : undefined}
      className={`flex max-w-[780px] flex-col gap-4 ${className}`}
    >
      <Eyebrow>{eyebrow}</Eyebrow>
      <h2 className="text-[32px] lg:text-5xl">{title}</h2>
      {lead ? (
        <p className="text-pretty text-base leading-relaxed text-muted lg:text-lg">
          {lead}
        </p>
      ) : null}
    </div>
  );
}

/** A hairline rule at the --separator token. */
export function Rule({ className = "" }: { className?: string }) {
  return <hr className={`h-px border-0 bg-separator ${className}`} />;
}

export function Check({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      aria-hidden
      className={`size-4 shrink-0 stroke-accent ${className}`}
      fill="none"
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M4 12.5 9 17.5 20 6.5" />
    </svg>
  );
}

export function ArrowRight({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      aria-hidden
      className={`vx-arrow size-4 shrink-0 ${className}`}
      fill="none"
      stroke="currentColor"
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M5 12h13M13 6l6 6-6 6" />
    </svg>
  );
}

/** Bracketed content the client still has to supply. */
export function Todo({ children }: { children: ReactNode }) {
  return (
    <span className="font-mono text-[0.9em] tracking-wide text-accent">{children}</span>
  );
}

export function CtaBand({
  title,
  body,
  cta = "Start a project",
  href = "/contact",
  note = "45 minutes. Free. No pitch deck.",
}: {
  title: string;
  body: string;
  cta?: string;
  href?: string;
  note?: string;
}) {
  return (
    <Section>
      <Wrap>
        <div data-reveal className="relative overflow-hidden rounded-3xl border border-accent/25 bg-[linear-gradient(135deg,#141a10,#0c0e0d)] p-8 lg:p-16">
          <div className="vx-glow -top-40 -right-24 h-[500px] w-[600px]" />
          <div className="relative flex flex-col items-start justify-between gap-8 lg:flex-row lg:items-center lg:gap-14">
            <div className="flex flex-col gap-3.5">
              <h2 className="text-[28px] lg:text-[38px]">{title}</h2>
              <p className="max-w-[560px] text-base leading-relaxed text-muted">{body}</p>
            </div>
            <div className="flex w-full shrink-0 flex-col gap-3 lg:w-auto">
              <Link
                href={href}
                className="vx-btn vx-btn-primary inline-flex h-12 items-center justify-center gap-2 rounded-full bg-accent px-6 font-display text-base font-semibold text-accent-foreground transition hover:brightness-110"
              >
                {cta}
                <ArrowRight />
              </Link>
              <span className="text-center text-sm text-faint">{note}</span>
            </div>
          </div>
        </div>
      </Wrap>
    </Section>
  );
}

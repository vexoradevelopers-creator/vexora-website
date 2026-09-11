"use client";

import { useState } from "react";
import { usePathname } from "next/navigation";
import { projectTypes } from "@/lib/site";
import { submitEnquiry } from "@/lib/supabase";
import { ArrowRight, Check } from "./ui";

type State = "idle" | "sending" | "sent" | "error";

const field =
  "h-12 w-full rounded-xl border border-border bg-field-background px-3.5 text-base text-foreground outline-none transition placeholder:text-field-placeholder focus:border-accent/60 focus:ring-2 focus:ring-accent/25";

const labelCls = "font-mono text-[11px] uppercase tracking-[0.12em] text-faint";

export function EnquiryForm({ compact = false }: { compact?: boolean }) {
  const pathname = usePathname();
  const [state, setState] = useState<State>("idle");
  const [error, setError] = useState<string | null>(null);
  const [type, setType] = useState<string>(projectTypes[0]);

  async function onSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setState("sending");
    setError(null);

    const result = await submitEnquiry(new FormData(event.currentTarget), {
      projectType: type,
      sourcePage: pathname,
    });

    if (result.ok) {
      setState("sent");
    } else {
      setError(result.error);
      setState("error");
    }
  }

  if (state === "sent") {
    return (
      <div className="flex flex-col items-start gap-4 rounded-3xl border border-accent/25 bg-accent/[0.06] p-8">
        <div className="flex size-11 items-center justify-center rounded-full bg-accent/15">
          <Check className="size-5" />
        </div>
        <h3 className="text-2xl">Thanks, that reached us.</h3>
        <p className="text-base leading-relaxed text-muted">
          We reply to every enquiry within one working day. If it is urgent, call us
          rather than waiting on email.
        </p>
      </div>
    );
  }

  return (
    <form
      onSubmit={onSubmit}
      className="flex flex-col gap-3.5 rounded-3xl border border-accent/25 bg-surface p-6 lg:p-8"
    >
      <h3 className="mb-1 text-[22px]">Start a project</h3>

      {/* Honeypot: hidden from people, tempting to bots. */}
      <div aria-hidden className="absolute -left-[9999px]">
        <label htmlFor="company_website">Company website</label>
        <input id="company_website" name="company_website" tabIndex={-1} autoComplete="off" />
      </div>

      <div className={compact ? "flex flex-col gap-3.5" : "grid gap-3.5 sm:grid-cols-2"}>
        <div className="flex flex-col gap-1.5">
          <label className={labelCls} htmlFor="name">Your name</label>
          <input id="name" name="name" required autoComplete="name" className={field} />
        </div>
        <div className="flex flex-col gap-1.5">
          <label className={labelCls} htmlFor="business_name">Business name</label>
          <input id="business_name" name="business_name" autoComplete="organization" className={field} />
        </div>
        <div className="flex flex-col gap-1.5">
          <label className={labelCls} htmlFor="email">Email</label>
          <input id="email" name="email" type="email" required autoComplete="email" className={field} />
        </div>
        <div className="flex flex-col gap-1.5">
          <label className={labelCls} htmlFor="phone">Phone</label>
          <input id="phone" name="phone" type="tel" autoComplete="tel" className={field} />
        </div>
      </div>

      <fieldset className="flex flex-col gap-2">
        <legend className={`${labelCls} mb-2`}>What do you need?</legend>
        <div className="flex flex-wrap gap-2">
          {projectTypes.map((t) => {
            const on = t === type;
            return (
              <button
                key={t}
                type="button"
                aria-pressed={on}
                onClick={() => setType(t)}
                className={`inline-flex h-11 items-center rounded-full border px-3.5 text-sm font-medium transition ${
                  on
                    ? "border-accent/40 bg-accent/15 text-accent"
                    : "border-border bg-background-secondary text-muted hover:text-foreground"
                }`}
              >
                {t}
              </button>
            );
          })}
        </div>
      </fieldset>

      <div className="flex flex-col gap-1.5">
        <label className={labelCls} htmlFor="message">Tell us about it</label>
        <textarea
          id="message"
          name="message"
          required
          rows={5}
          placeholder="You do not need a specification. Plain words are fine."
          className={`${field} h-auto py-3 leading-relaxed`}
        />
      </div>

      <div className="flex flex-col gap-1.5">
        <label className={labelCls} htmlFor="budget">Rough budget (optional)</label>
        <input id="budget" name="budget" className={field} />
      </div>

      {error ? (
        <p role="alert" className="text-sm text-danger">
          {error}
        </p>
      ) : null}

      <button
        type="submit"
        disabled={state === "sending"}
        className="vx-btn vx-btn-primary mt-1.5 flex h-12 w-full items-center justify-center gap-2 rounded-full bg-accent font-display text-base font-semibold text-accent-foreground transition hover:brightness-110 disabled:opacity-60"
      >
        {state === "sending" ? "Sending…" : "Send it over"}
        {state === "sending" ? null : <ArrowRight />}
      </button>

      <p className="text-center text-xs leading-relaxed text-faint">
        We use your details only to reply to this enquiry. Nothing is shared with anyone
        else.
      </p>
    </form>
  );
}

"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { company, nav } from "@/lib/site";
import { ArrowRight } from "./ui";

export function SiteNav() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [hidden, setHidden] = useState(false);

  // Tuck the bar away while scrolling down, bring it back on the first
  // upward nudge. Never hides while the mobile menu is open or near the top.
  useEffect(() => {
    let last = window.scrollY;
    const onScroll = () => {
      const y = window.scrollY;
      const delta = y - last;
      if (y < 80) setHidden(false);
      else if (delta > 6) setHidden(true);
      else if (delta < -6) setHidden(false);
      last = y;
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Close the mobile menu whenever the route changes.
  const [openedOn, setOpenedOn] = useState(pathname);
  if (open && openedOn !== pathname) {
    setOpen(false);
    setOpenedOn(pathname);
  }

  return (
    <header
      className="sticky top-0 z-50 px-4 pt-3.5 transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] lg:px-6 lg:pt-[22px]"
      style={{ transform: hidden && !open ? "translateY(calc(-100% - 8px))" : "none" }}
    >
      <div className="mx-auto w-full max-w-[1200px]">
        <div className="flex h-[58px] items-center gap-10 rounded-full border border-border bg-surface/80 pl-4 pr-2.5 shadow-[0_10px_40px_-20px_rgba(0,0,0,0.9)] backdrop-blur-xl lg:h-16 lg:pl-6 lg:pr-3">
          <Link href="/" className="flex shrink-0 items-center gap-2.5" aria-label="Vexora home">
            <Image src="/vexora-mark.png" alt="" width={340} height={360} priority className="h-6 w-auto lg:h-[26px]" />
            <Image src="/vexora-wordmark.png" alt="Vexora" width={1012} height={128} priority className="h-[15px] w-auto lg:h-[17px]" />
          </Link>

          <nav className="hidden grow items-center gap-7 lg:flex">
            {nav.map((item) => {
              const active = pathname === item.href;
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  aria-current={active ? "page" : undefined}
                  className={`vx-navlink text-sm font-medium transition ${
                    active ? "text-foreground" : "text-muted hover:text-foreground"
                  }`}
                >
                  {item.label}
                </Link>
              );
            })}
          </nav>

          <div className="ml-auto hidden items-center gap-4 lg:flex">
            <a href={company.phoneHref} className="text-sm font-medium text-muted hover:text-foreground">
              {company.phone}
            </a>
            <Link
              href="/contact"
              className="vx-btn vx-btn-primary inline-flex h-9 items-center gap-2 rounded-full bg-accent px-4 font-display text-sm font-semibold text-accent-foreground transition hover:brightness-110"
            >
              Start a project
            </Link>
          </div>

          <button
            type="button"
            onClick={() => {
              setOpenedOn(pathname);
              setOpen((v) => !v);
            }}
            aria-expanded={open}
            aria-label={open ? "Close menu" : "Open menu"}
            className={`ml-auto flex size-11 items-center justify-center rounded-full transition lg:hidden ${
              open ? "bg-accent text-accent-foreground" : "bg-white/[0.06] text-foreground"
            }`}
          >
            <svg viewBox="0 0 24 24" aria-hidden className="size-[19px]" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round">
              {open ? <path d="M6 6l12 12M18 6 6 18" /> : <path d="M4 7h16M4 12h16M4 17h16" />}
            </svg>
          </button>
        </div>

        {open ? (
          <div className="vx-drop mt-3 flex flex-col rounded-3xl border border-border bg-surface/95 p-5 backdrop-blur-xl lg:hidden">
            {nav.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className="flex items-center justify-between border-b border-separator py-[19px] font-display text-2xl font-semibold tracking-tight last:border-b-0"
              >
                {item.label}
                <ArrowRight className="text-accent" />
              </Link>
            ))}
            <div className="mt-5 flex flex-col gap-3">
              <Link
                href="/contact"
                onClick={() => setOpen(false)}
                className="flex h-12 items-center justify-center gap-2 rounded-full bg-accent font-display text-base font-semibold text-accent-foreground"
              >
                Start a project
                <ArrowRight />
              </Link>
              <a
                href={company.phoneHref}
                className="flex h-12 items-center justify-center gap-2 rounded-full border border-white/[0.16] font-display text-base font-semibold"
              >
                Call {company.phone}
              </a>
            </div>
          </div>
        ) : null}
      </div>
    </header>
  );
}

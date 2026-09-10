import Image from "next/image";
import Link from "next/link";
import { company, nav, services, socials } from "@/lib/site";
import { Rule, Wrap } from "./ui";

export function SiteFooter() {
  return (
    <footer className="mt-20 border-t border-border bg-background-secondary lg:mt-[110px]">
      <Wrap className="grid gap-10 py-12 lg:grid-cols-[1.5fr_repeat(3,1fr)] lg:py-16">
        <div className="flex flex-col gap-4">
          <Link href="/" className="flex items-center gap-2.5" aria-label="Vexora home">
            <Image src="/vexora-mark.png" alt="" width={340} height={360} className="h-[30px] w-auto" />
            <Image src="/vexora-wordmark.png" alt="Vexora" width={1012} height={128} className="h-[19px] w-auto" />
          </Link>
          <p className="max-w-[320px] text-sm leading-relaxed text-muted">
            {company.legalName}. A software studio in Chitwan building web
            applications, websites, mobile apps and games.
          </p>
          <div className="flex gap-2.5">
            {socials.map((s) => (
              <a
                key={s.label}
                href={s.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={s.label}
                title={s.label}
                className="flex size-11 items-center justify-center rounded-full border border-border bg-background-secondary font-mono text-xs text-muted transition hover:border-accent/40 hover:text-accent"
              >
                {s.short}
              </a>
            ))}
          </div>
        </div>

        <div className="flex flex-col gap-3">
          <span className="font-mono text-xs uppercase tracking-[0.14em] text-faint">Services</span>
          {services.map((s) => (
            <Link key={s.slug} href="/services" className="text-sm text-muted hover:text-foreground">
              {s.title}
            </Link>
          ))}
        </div>

        <div className="flex flex-col gap-3">
          <span className="font-mono text-xs uppercase tracking-[0.14em] text-faint">Company</span>
          {nav.map((n) => (
            <Link key={n.href} href={n.href} className="text-sm text-muted hover:text-foreground">
              {n.label}
            </Link>
          ))}
        </div>

        <div className="flex flex-col gap-3">
          <span className="font-mono text-xs uppercase tracking-[0.14em] text-faint">Contact</span>
          <a href={company.emailHref} className="text-sm break-words text-muted hover:text-accent">
            {company.email}
          </a>
          <a href={company.phoneHref} className="text-sm text-muted hover:text-accent">
            {company.phone}
          </a>
          <span className="text-sm leading-relaxed text-muted">{company.address}</span>
        </div>
      </Wrap>

      <Wrap>
        <Rule />
      </Wrap>

      <Wrap className="flex flex-wrap items-center justify-between gap-5 py-6 pb-10">
        <span className="text-sm text-faint">
          © {new Date().getFullYear()} {company.legalName} · Reg. No. {company.regNo}
        </span>
        <div className="flex gap-6">
          <Link href="/privacy" className="text-sm text-faint hover:text-foreground">
            Privacy Policy
          </Link>
          <Link href="/terms" className="text-sm text-faint hover:text-foreground">
            Terms of Service
          </Link>
        </div>
      </Wrap>
    </footer>
  );
}

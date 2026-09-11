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
                className="flex size-11 items-center justify-center rounded-full border border-border bg-background-secondary text-muted transition hover:border-accent/40 hover:text-accent"
              >
                <SocialIcon name={s.icon} />
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

/** Official brand marks (Simple Icons paths), filled with currentColor. */
function SocialIcon({ name }: { name: (typeof socials)[number]["icon"] }) {
  const paths = {
    linkedin:
      "M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z",
    instagram:
      "M12 0C8.74 0 8.333.015 7.053.072 5.775.132 4.905.333 4.14.63c-.789.306-1.459.717-2.126 1.384S.935 3.35.63 4.14C.333 4.905.131 5.775.072 7.053.012 8.333 0 8.74 0 12s.015 3.667.072 4.947c.06 1.277.261 2.148.558 2.913.306.788.717 1.459 1.384 2.126.667.666 1.336 1.079 2.126 1.384.766.296 1.636.499 2.913.558C8.333 23.988 8.74 24 12 24s3.667-.015 4.947-.072c1.277-.06 2.148-.262 2.913-.558.788-.306 1.459-.718 2.126-1.384.666-.667 1.079-1.335 1.384-2.126.296-.765.499-1.636.558-2.913.06-1.28.072-1.687.072-4.947s-.015-3.667-.072-4.947c-.06-1.277-.262-2.149-.558-2.913-.306-.789-.718-1.459-1.384-2.126C21.319 1.347 20.651.935 19.86.63c-.765-.297-1.636-.499-2.913-.558C15.667.012 15.26 0 12 0zm0 2.16c3.203 0 3.585.016 4.85.071 1.17.055 1.805.249 2.227.415.562.217.96.477 1.382.896.419.42.679.819.896 1.381.164.422.36 1.057.413 2.227.057 1.266.07 1.646.07 4.85s-.015 3.585-.074 4.85c-.061 1.17-.256 1.805-.421 2.227-.224.562-.479.96-.899 1.382-.419.419-.824.679-1.38.896-.42.164-1.065.36-2.235.413-1.274.057-1.649.07-4.859.07-3.211 0-3.586-.015-4.859-.074-1.171-.061-1.816-.256-2.236-.421-.569-.224-.96-.479-1.379-.899-.421-.419-.69-.824-.9-1.38-.165-.42-.359-1.065-.42-2.235-.045-1.26-.061-1.649-.061-4.844 0-3.196.016-3.586.061-4.861.061-1.17.255-1.814.42-2.234.21-.57.479-.96.9-1.381.419-.419.81-.689 1.379-.898.42-.166 1.051-.361 2.221-.421 1.275-.045 1.65-.06 4.859-.06l.045.03zm0 3.678a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 1 0 0-12.324zM12 16c-2.21 0-4-1.79-4-4s1.79-4 4-4 4 1.79 4 4-1.79 4-4 4zm6.406-11.845a1.44 1.44 0 1 0 0 2.881 1.44 1.44 0 0 0 0-2.881z",
  } as const;
  return (
    <svg viewBox="0 0 24 24" aria-hidden className="size-[18px]" fill="currentColor">
      <path d={paths[name]} />
    </svg>
  );
}

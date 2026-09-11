import type { Metadata } from "next";
import { EnquiryForm } from "@/components/enquiry-form";
import { Eyebrow, Wrap } from "@/components/ui";
import { company } from "@/lib/site";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Tell Vexora what you need built. One message, a free 45-minute call, and a written answer on scope, price and timeline.",
};

function Row({
  label,
  children,
}: {
  label: string;
  children: React.ReactNode;
}) {
  return (
    <div className="flex items-start gap-3.5 border-b border-separator py-4">
      <div className="flex flex-col gap-0.5">
        <span className="font-mono text-[11px] uppercase tracking-[0.13em] text-faint">
          {label}
        </span>
        <span className="text-[15px] leading-relaxed">{children}</span>
      </div>
    </div>
  );
}

export default function ContactPage() {
  return (
    <div className="relative overflow-hidden pt-14 pb-4 lg:pt-[92px]">
      <div className="vx-glow left-1/2 top-[-280px] h-[560px] w-[900px] -translate-x-1/2" />
      <Wrap className="relative grid gap-10 lg:grid-cols-[1fr_0.95fr] lg:items-start lg:gap-20">
        <div className="flex flex-col gap-5">
          <Eyebrow>Contact</Eyebrow>
          <h1 className="text-[38px] leading-[1.06] lg:text-[52px] lg:leading-[1.05]">
            Tell us what you need built.
          </h1>
          <p className="max-w-[520px] text-pretty text-base leading-relaxed text-muted lg:text-[17px] lg:leading-[1.7]">
            Write in your own words. You do not need a specification. One message, a
            45&#8209;minute call, and a written answer on scope, price and timeline. We
            reply to every enquiry within one working day.
          </p>

          <div className="mt-2 flex flex-col border-t border-separator">
            <Row label="Email">
              <a href={company.emailHref} className="text-accent hover:brightness-110">
                {company.email}
              </a>
            </Row>
            <Row label="Phone / WhatsApp">
              <a href={company.phoneHref} className="hover:text-accent">
                {company.phone}
              </a>
            </Row>
            <Row label="Office">{company.address}</Row>
            <Row label="Hours">
              {company.hours}
            </Row>
          </div>

          <div className="mt-2 flex flex-col gap-3 sm:flex-row">
            <a
              href={company.phoneHref}
              className="flex h-12 flex-1 items-center justify-center gap-2 rounded-full bg-accent px-6 font-display text-base font-semibold text-accent-foreground transition hover:brightness-110"
            >
              Call {company.phone}
            </a>
            <a
              href={company.emailHref}
              className="flex h-12 flex-1 items-center justify-center gap-2 rounded-full border border-white/[0.16] px-6 font-display text-base font-semibold transition hover:border-white/30"
            >
              Email us
            </a>
          </div>
        </div>

        <EnquiryForm />
      </Wrap>
    </div>
  );
}

import type { Metadata } from "next";
import Link from "next/link";
import { LegalPage, LegalSection } from "@/components/legal";
import { company } from "@/lib/site";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description:
    "What Vexora collects through this website, why, where it is stored, and how to have it corrected or deleted.",
};

export default function PrivacyPage() {
  return (
    <LegalPage
      eyebrow="Legal"
      title="Privacy Policy"
      updated="31 October 2026"
      intro={
        <p>
          This policy covers vexoradevelopers.com.np, run by {company.legalName} (Reg.
          No. {company.regNo}), {company.address}. The short version: we collect only
          what you type into the enquiry form, we use it only to reply to you, and we do
          not sell or share it.
        </p>
      }
    >
      <LegalSection title="What we collect">
        <p>When you send an enquiry through the form, we receive:</p>
        <ul>
          <li>Your name and email address (required)</li>
          <li>Your business name, phone number and rough budget, if you give them</li>
          <li>The type of project you picked and the message you wrote</li>
          <li>The page of this site you sent the form from</li>
        </ul>
        <p>
          If you email or call us instead, we receive whatever you choose to include in
          that email or call.
        </p>
      </LegalSection>

      <LegalSection title="What we do not collect">
        <p>
          This site does not use analytics, advertising trackers or tracking cookies, and
          it does not build a profile of you. Fonts and images are served from our own
          domain, so loading a page does not send your details to font or image
          services.
        </p>
      </LegalSection>

      <LegalSection title="How we use it">
        <ul>
          <li>To reply to your enquiry and discuss the work you described</li>
          <li>To prepare a proposal, if you ask for one</li>
          <li>To keep a record of the conversation if the enquiry becomes a project</li>
        </ul>
        <p>
          We do not add you to a mailing list, and we do not use your details for
          marketing unless you ask us to.
        </p>
      </LegalSection>

      <LegalSection title="Where it is stored and who can see it">
        <p>
          Enquiries are stored in a database run by Supabase. Visitors to the site can
          submit an enquiry but cannot read anyone else&rsquo;s. Only our team can read
          them.
        </p>
        <p>
          The site is hosted on Vercel, which keeps standard server logs (such as IP
          address, browser type and time of request) for security and to keep the site
          running. We do not use those logs to identify visitors.
        </p>
        <p>
          We do not sell, rent or share your details with anyone else, except where
          Nepali law requires us to.
        </p>
      </LegalSection>

      <LegalSection title="How long we keep it">
        <p>
          We keep an enquiry for as long as we need it to reply and follow up. If it
          becomes a project, we keep it with the project records. You can ask us to
          delete it at any time.
        </p>
      </LegalSection>

      <LegalSection title="Your choices">
        <p>
          You can ask us what we hold about you, ask us to correct it, or ask us to
          delete it. Email <a href={company.emailHref}>{company.email}</a> or call{" "}
          <a href={company.phoneHref}>{company.phone}</a> and we will act on it within a
          reasonable time.
        </p>
      </LegalSection>

      <LegalSection title="Our apps">
        <p>
          Apps we publish have their own privacy policies, because they work differently
          from this website. For our game Sortly, see the{" "}
          <a href="/sortly/privacy/">Sortly privacy policy</a>.
        </p>
      </LegalSection>

      <LegalSection title="Changes to this policy">
        <p>
          If we change how we handle your details, we will update this page and the date
          at the top. For the terms that apply when you use this site, see our{" "}
          <Link href="/terms">Terms of Service</Link>.
        </p>
      </LegalSection>
    </LegalPage>
  );
}

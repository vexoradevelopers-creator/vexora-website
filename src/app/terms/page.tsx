import type { Metadata } from "next";
import Link from "next/link";
import { LegalPage, LegalSection } from "@/components/legal";
import { company } from "@/lib/site";

export const metadata: Metadata = {
  title: "Terms of Service",
  description:
    "The terms for using the Vexora website, and how they relate to the written agreement that governs project work.",
};

export default function TermsPage() {
  return (
    <LegalPage
      eyebrow="Legal"
      title="Terms of Service"
      updated="31 October 2026"
      intro={
        <p>
          These terms apply to your use of vexoradevelopers.com.np, run by{" "}
          {company.legalName} (Reg. No. {company.regNo}), {company.address}. By using
          the site you agree to them. They are deliberately short.
        </p>
      }
    >
      <LegalSection title="This site is information, not an offer">
        <p>
          The services, timelines and examples on this site describe how we usually
          work. They are not a quote and do not create a contract. Any project starts
          only once we have both signed a written proposal that sets out its scope, price
          and dates.
        </p>
      </LegalSection>

      <LegalSection title="Project work has its own agreement">
        <p>
          When you hire us, the signed proposal and agreement for that project govern
          the work, including payment, ownership of what we build, and support. If
          anything in that agreement conflicts with these terms, the agreement wins.
        </p>
      </LegalSection>

      <LegalSection title="Enquiries">
        <p>
          Sending an enquiry does not commit you or us to anything. Please do not send
          passwords, payment details or other confidential material through the form;
          we will arrange a safer way to share those if a project needs them. How we
          handle what you send is covered in our{" "}
          <Link href="/privacy">Privacy Policy</Link>.
        </p>
      </LegalSection>

      <LegalSection title="Our content">
        <p>
          The text, design, logos and images on this site belong to {company.shortName}{" "}
          or are used with permission. You are welcome to link to the site and to share
          pages, but please do not copy its content or branding for your own use without
          asking us first.
        </p>
      </LegalSection>

      <LegalSection title="Acceptable use">
        <ul>
          <li>Do not try to break, overload or gain unauthorised access to the site</li>
          <li>Do not use the enquiry form to send spam or automated submissions</li>
          <li>Do not use the site for anything unlawful</li>
        </ul>
      </LegalSection>

      <LegalSection title="Links to other sites">
        <p>
          Where we link to other sites, such as our social media pages, we are not
          responsible for their content or how they handle your information.
        </p>
      </LegalSection>

      <LegalSection title="Liability">
        <p>
          We work to keep this site accurate and available, but we provide it as it is
          and cannot promise it will always be error-free or online. To the extent the
          law allows, we are not liable for any loss that comes from relying on the
          site&rsquo;s general information rather than a written proposal.
        </p>
      </LegalSection>

      <LegalSection title="Governing law">
        <p>These terms are governed by the laws of Nepal.</p>
      </LegalSection>

      <LegalSection title="Changes and contact">
        <p>
          We may update these terms from time to time; the date at the top shows the
          latest version. Questions are welcome at{" "}
          <a href={company.emailHref}>{company.email}</a> or{" "}
          <a href={company.phoneHref}>{company.phone}</a>.
        </p>
      </LegalSection>
    </LegalPage>
  );
}

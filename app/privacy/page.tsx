import type { Metadata } from "next";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import Reveal from "@/components/Reveal";

export const metadata: Metadata = {
  title: "Privacy Notice",
  description: "How AN Digital Studio handles website enquiries and business contact information.",
  alternates: { canonical: "/privacy" },
  robots: { index: true, follow: true },
};

const sections = [
  ["1. Who to contact", <>For questions about this notice or a request concerning your information, email <a className="font-semibold text-blue-700 underline" href="mailto:hello@andigitalstudio.com">hello@andigitalstudio.com</a> and include enough detail for us to understand the request. AN Digital Studio is the trading name used on this website; the legal identity and address of the contracting party should be stated in any applicable proposal or contract.</>],
  ["2. Information we may handle", "Depending on the interaction, this may include your name, business name, work email address, phone number, website URL, project requirements, messages you send, and basic records needed to manage a business enquiry or customer relationship. Please do not send passwords, payment card details or sensitive personal information through the website review form."],
  ["3. How information is used", "Information may be used to respond to requests, assess whether a project is a fit, prepare proposals, deliver and support work, maintain business records, protect against misuse and meet legal obligations. Where business contact information is used for outreach, it should be relevant to the recipient’s professional role, sourced and handled responsibly, and accompanied by a clear way to object or opt out. Public availability alone does not automatically mean that contact details may be used for marketing."],
  ["4. Service providers", "Website enquiries may be submitted through an embedded Tally form. Business communication and project administration may involve service providers such as Google Workspace, Notion, GitHub and Vercel. Those providers may process information under their own terms and privacy documentation. Their specific roles, settings, data locations and retention controls should be checked as our setup changes."],
  ["5. Retention and security", "We aim to retain information only for as long as it is reasonably needed for the purpose collected, ongoing business records or legal requirements. We use proportionate technical and organisational measures, but no internet service can be guaranteed completely secure. Access to lead and client information should be limited to people who need it for their work."],
  ["6. Your choices and requests", "You may ask us to correct inaccurate contact details, stop marketing communications, or explain what information we hold about you. Applicable rights depend on the law that applies to the particular processing. We will review and respond to requests in line with our legal obligations. If you no longer want to receive outreach from us, reply with a clear request to stop; your address should be added to a suppression list so it is not re-added accidentally."],
  ["7. Third-party websites and changes", "Links to other websites and embedded services are governed by their own policies. This notice may be updated when our systems, services or legal obligations change. Before relying on this page as a formal privacy policy, AN Digital Studio should confirm that it accurately describes the actual legal entity, hosting, form provider, CRM, outreach process, lawful bases, data transfers and retention schedule."],
] as const;

export default function PrivacyPage() {
  return (
    <main className="flex min-h-screen flex-col bg-[#f5f7fc]">
      <SiteHeader />
      <article className="container-shell max-w-4xl py-14 sm:py-20">
        <Reveal variant="left">
          <p className="section-kicker">Privacy</p>
          <h1 className="mt-5 text-4xl font-semibold tracking-[-.05em] text-slate-950 sm:text-5xl">Privacy notice</h1>
          <p className="mt-4 text-sm text-slate-500">Last updated: 10 October 2026</p>
          <p className="mt-8 text-base leading-7 text-slate-700">AN Digital Studio aims to collect only the information needed to respond to enquiries, discuss potential projects, deliver agreed work and maintain appropriate business records. This notice describes the main ways information may be handled when you contact us or interact with our website.</p>
        </Reveal>
        <div className="mt-10 space-y-8">
          {sections.map(([title, text]) => (
            <Reveal key={title}>
              <section className="border-b border-slate-200 pb-7 last:border-0">
                <h2 className="text-xl font-bold text-slate-900">{title}</h2>
                <p className="mt-3 text-sm leading-7 text-slate-600">{text}</p>
              </section>
            </Reveal>
          ))}
        </div>
        <p className="warning-note mt-6 rounded-xl p-4 text-sm leading-6">Setup reminder: this is a practical starting notice, not a legal certification. Review it against your actual data handling and get qualified advice where needed before relying on it for regulatory compliance.</p>
      </article>
      <SiteFooter />
    </main>
  );
}

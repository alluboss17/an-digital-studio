import type { Metadata } from "next";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import Reveal from "@/components/Reveal";

export const metadata: Metadata = {
  title: "Privacy Notice",
  description:
    "How AN Digital Studio handles website enquiries and business contact information.",
  alternates: {
    canonical: "/privacy",
  },
  robots: {
    index: true,
    follow: true,
  },
};

const sections = [
  {
    title: "1. Who to contact",
    content: (
      <>
        For questions about this notice or a
        request concerning your information,
        email{" "}
        <a
          href="mailto:hello@andigitalstudio.com"
          className="font-semibold text-blue-700 underline hover:text-blue-900"
        >
          hello@andigitalstudio.com
        </a>
        . AN Digital Studio is the trading name
        used on this website. The legal identity
        and address of the contracting party will
        be stated in the applicable proposal or
        agreement.
      </>
    ),
  },

  {
    title: "2. Information we may handle",
    content: (
      <>
        Depending on the interaction, this may
        include your name, business name, work
        email address, phone number, website URL,
        project requirements, messages you send,
        and basic records needed to manage a
        business enquiry or customer relationship.
        Please do not send passwords, payment card
        details or sensitive personal information
        through the website review form.
      </>
    ),
  },

  {
    title: "3. How information is used",
    content: (
      <>
        Information may be used to respond to
        requests, assess whether a project is a
        suitable fit, prepare proposals, deliver
        and support agreed work, maintain business
        records, protect against misuse and meet
        legal obligations.
      </>
    ),
  },

  {
    title: "4. Service providers",
    content: (
      <>
        We may use trusted service providers to
        operate the website and manage business
        enquiries. Depending on our current setup,
        these may include services such as Vercel,
        GitHub, Google Workspace, Resend, Notion
        and Cal.com. Those services may process
        information under their own terms and
        privacy documentation.
      </>
    ),
  },

  {
    title: "5. Retention and security",
    content: (
      <>
        We aim to keep information only for as
        long as reasonably required for the
        purpose for which it was collected,
        ongoing business records or legal
        obligations. We use proportionate
        technical and organisational safeguards,
        although no internet-based system can be
        guaranteed completely secure.
      </>
    ),
  },

  {
    title: "6. Your choices and requests",
    content: (
      <>
        You may contact us to request correction
        of inaccurate information, ask questions
        about information we hold, or ask us to
        stop sending marketing communications.
        Where applicable, requests will be handled
        according to the data-protection laws that
        apply to the relevant processing.
      </>
    ),
  },

  {
    title: "7. Marketing communications",
    content: (
      <>
        If you receive a business marketing
        message from AN Digital Studio and no
        longer wish to receive similar messages,
        you can reply and ask us to stop. We aim
        to record those requests so that the
        contact is not unintentionally re-added to
        future outreach.
      </>
    ),
  },

  {
    title: "8. Changes to this notice",
    content: (
      <>
        This notice may be updated when our
        website, service providers, business
        processes or legal obligations change.
        The latest version will be published on
        this page.
      </>
    ),
  },
];

export default function PrivacyPage() {
  return (
    <main className="flex min-h-screen flex-col bg-[#f5f7fc]">
      <SiteHeader />

      <article className="container-shell max-w-4xl py-14 sm:py-20">
        <Reveal variant="left">
          <p className="section-kicker">
            Privacy
          </p>

          <h1 className="mt-5 text-4xl font-semibold tracking-[-.05em] text-slate-950 sm:text-5xl">
            Privacy notice
          </h1>

          <p className="mt-4 text-sm text-slate-500">
            Last updated: 10 October 2026
          </p>

          <p className="mt-8 text-base leading-7 text-slate-700">
            AN Digital Studio aims to collect
            only the information needed to
            respond to enquiries, discuss
            potential projects, deliver agreed
            work and maintain appropriate
            business records.
          </p>

          <p className="mt-4 text-base leading-7 text-slate-700">
            This notice describes the main ways
            information may be handled when you
            contact us or interact with our
            website.
          </p>
        </Reveal>

        <div className="mt-12 space-y-9">
          {sections.map((section) => (
            <Reveal key={section.title}>
              <section className="border-b border-slate-200 pb-8 last:border-0">
                <h2 className="text-xl font-bold tracking-tight text-slate-900">
                  {section.title}
                </h2>

                <div className="mt-3 text-sm leading-7 text-slate-600">
                  {section.content}
                </div>
              </section>
            </Reveal>
          ))}
        </div>

        <Reveal>
          <div className="soft-panel mt-10 rounded-xl p-5">
            <p className="text-sm font-bold text-slate-900">
              Privacy questions
            </p>

            <p className="mt-2 text-sm leading-6 text-slate-600">
              If you have a question about this
              notice or information you have
              provided to AN Digital Studio,
              email{" "}
              <a
                href="mailto:hello@andigitalstudio.com"
                className="font-semibold text-blue-700 underline hover:text-blue-900"
              >
                hello@andigitalstudio.com
              </a>
              .
            </p>
          </div>
        </Reveal>
      </article>

      <SiteFooter />
    </main>
  );
}
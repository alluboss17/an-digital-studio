import type { Metadata } from "next";
import Link from "next/link";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import Reveal from "@/components/Reveal";
import WebsiteReviewForm from "@/components/WebsiteReviewForm";

export const metadata: Metadata = {
  title: "Free Website Review",
  description:
    "Request a no-obligation website review from AN Digital Studio. We look at clarity, mobile usability, trust signals and the path to a quote enquiry.",
  alternates: { canonical: "/audit" },
  openGraph: {
    type: "website",
    siteName: "AN Digital Studio",
    images: [{ url: "/opengraph-image.png", alt: "AN Digital Studio" }],
    title: "Request a Free Website Review | AN Digital Studio",
    description:
      "A practical review of your website’s clarity, mobile usability, trust signals and quote enquiry path.",
    url: "https://www.andigitalstudio.com/audit",
  },
};

const reviewPoints = [
  [
    "01",
    "Clarity",
    "Can visitors quickly understand your services, locations and the kind of work you want more of?",
  ],
  [
    "02",
    "Mobile usability",
    "Can people comfortably read, navigate and contact you from a phone?",
  ],
  [
    "03",
    "Trust",
    "Are real projects, credentials and useful proof easy to find without relying on vague claims?",
  ],
  [
    "04",
    "The enquiry path",
    "Is the route from interest to requesting a quote obvious and low-friction?",
  ],
];

function getCalUrl() {
  const value = process.env.NEXT_PUBLIC_CAL_URL?.trim();
  return value && value.startsWith("https://cal.com/") ? value : null;
}

export default function AuditPage() {
  const calUrl = getCalUrl();

  return (
    <main className="flex min-h-screen flex-col bg-[#f5f7fc]">
      <SiteHeader />

      <section className="container-shell grid gap-10 py-14 sm:py-20 lg:grid-cols-[.78fr_1.22fr] lg:gap-14">
        <Reveal variant="left">
          <div>
            <p className="section-kicker">Free website review</p>

            <h1 className="mt-5 text-4xl font-semibold leading-[1.08] tracking-[-.05em] text-slate-950 sm:text-5xl">
              Find the next improvements worth making.
            </h1>

            <p className="mt-6 text-base leading-7 text-slate-600">
              Share your current website and a little context about the
              business. We will review the points most likely to affect
              clarity, trust and how easily a suitable customer can enquire.
            </p>

            <div className="mt-8 space-y-5">
              {reviewPoints.map(([number, title, detail]) => (
                <div key={number} className="flex gap-4">
                  <span className="mt-0.5 font-mono text-xs font-bold text-blue-700">
                    {number}
                  </span>
                  <div>
                    <h2 className="text-sm font-bold text-slate-900">
                      {title}
                    </h2>
                    <p className="mt-1 text-sm leading-6 text-slate-600">
                      {detail}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            <div className="soft-panel mt-9 rounded-xl p-5">
              <p className="text-sm font-bold text-slate-900">
                This is a website review—not a free website build.
              </p>
              <p className="mt-2 text-sm leading-6 text-slate-600">
                The review is no-obligation. If we later recommend paid work,
                the scope, timeline and price are agreed separately before any
                project begins.
              </p>
            </div>

            <p className="mt-4 text-xs leading-5 text-slate-500">
              Please do not submit passwords, payment details or sensitive
              customer information. Read our{" "}
              <Link
                href="/privacy"
                className="font-semibold text-blue-700 underline hover:text-blue-900"
              >
                privacy notice
              </Link>{" "}
              before sending the form.
            </p>

            {calUrl && (
              <div className="mt-8 border-t border-slate-200 pt-7">
                <p className="text-sm font-bold text-slate-900">
                  Prefer a short conversation?
                </p>
                <p className="mt-2 max-w-lg text-sm leading-6 text-slate-600">
                  You can book a short introduction call instead. The free
                  review remains available without a call.
                </p>
                <a
                  href={calUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="button-secondary button-small mt-4"
                >
                  Book an intro call <span aria-hidden="true">↗</span>
                </a>
              </div>
            )}
          </div>
        </Reveal>

        <Reveal variant="scale" delay={100}>
          <WebsiteReviewForm calUrl={calUrl} />
        </Reveal>
      </section>

      <SiteFooter />
    </main>
  );
}

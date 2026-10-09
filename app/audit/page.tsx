import type { Metadata } from "next";
import Link from "next/link";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import Reveal from "@/components/Reveal";

export const metadata: Metadata = {
  title: "Free Website Review",
  description: "Request a no-obligation website review from AN Digital Studio. We look at clarity, mobile usability, trust signals and the path to a quote enquiry.",
  alternates: { canonical: "/audit" },
  openGraph: {
    type: "website", siteName: "AN Digital Studio", images: [{ url: "/opengraph-image.png", alt: "AN Digital Studio" }],
    title: "Request a Free Website Review | AN Digital Studio", description: "A practical review of your website’s clarity, mobile usability, trust signals and quote enquiry path.", url: "https://www.andigitalstudio.com/audit",
  },
};

const reviewPoints = [
  ["01", "Clarity", "Can visitors quickly understand your services and the areas you cover?"],
  ["02", "Mobile usability", "Can people read, navigate and contact you comfortably on a phone?"],
  ["03", "The enquiry path", "Are the route to request a quote and the key trust signals easy to find?"],
];

export default function AuditPage() {
  return (
    <main className="flex min-h-screen flex-col bg-[#f5f7fc]">
      <SiteHeader />
      <section className="container-shell grid gap-10 py-14 sm:py-20 lg:grid-cols-[.78fr_1.22fr] lg:gap-14">
        <Reveal variant="left">
          <div>
            <p className="section-kicker">Free website review</p>
            <h1 className="mt-5 text-4xl font-semibold leading-[1.08] tracking-[-.05em] text-slate-950 sm:text-5xl">Find the next improvements worth making.</h1>
            <p className="mt-6 text-base leading-7 text-slate-600">Share your website and a little context about your business. We will review the key points that can make your site clearer and easier to use.</p>
            <div className="mt-8 space-y-5">
              {reviewPoints.map(([number, title, detail]) => (
                <div key={number} className="flex gap-4">
                  <span className="mt-0.5 font-mono text-xs font-bold text-blue-700">{number}</span>
                  <div><h2 className="text-sm font-bold text-slate-900">{title}</h2><p className="mt-1 text-sm leading-6 text-slate-600">{detail}</p></div>
                </div>
              ))}
            </div>
            <div className="soft-panel mt-9 rounded-xl p-4">
              <p className="text-sm font-bold text-slate-900">What happens after you submit?</p>
              <p className="mt-2 text-sm leading-6 text-slate-600">We review the information you provide and reply using the contact details you supply. The review is no-obligation; any paid work, scope and price would be agreed separately before it begins.</p>
            </div>
            <p className="mt-4 text-xs leading-5 text-slate-500">Please do not submit passwords, payment details or sensitive customer information. Read our <Link href="/privacy" className="font-semibold text-blue-700 underline hover:text-blue-900">privacy notice</Link> before sending the form.</p>
          </div>
        </Reveal>

        <Reveal variant="scale" delay={100}>
          <div className="min-w-0">
            <div className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-[0_20px_60px_rgba(15,34,72,.09)]">
              <div className="border-b border-slate-200 bg-white px-5 py-4 sm:px-7"><p className="text-sm font-bold text-slate-900">Website review request</p><p className="mt-1 text-xs text-slate-500">A few details are enough to get started.</p></div>
              <iframe src="https://tally.so/r/Zj0r65" title="AN Digital Studio website review request form" width="100%" height="850" loading="lazy" referrerPolicy="strict-origin-when-cross-origin" className="block w-full bg-white" style={{ border: 0 }} />
            </div>
            <p className="mt-3 text-center text-xs leading-5 text-slate-500">Form not loading? <a href="https://tally.so/r/Zj0r65" target="_blank" rel="noopener noreferrer" className="font-semibold text-blue-700 underline hover:text-blue-900">Open it directly in Tally ↗</a></p>
          </div>
        </Reveal>
      </section>
      <SiteFooter />
    </main>
  );
}

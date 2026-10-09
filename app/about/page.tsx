import type { Metadata } from "next";
import Link from "next/link";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import Reveal from "@/components/Reveal";

export const metadata: Metadata = {
  title: "About",
  description: "Meet AN Digital Studio: a lean web development studio focused on clear websites and practical enquiry systems for UK trades businesses.",
  alternates: { canonical: "/about" },
  openGraph: {
    type: "website", siteName: "AN Digital Studio", images: [{ url: "/opengraph-image.png", alt: "AN Digital Studio" }],
    title: "About AN Digital Studio", description: "A lean studio focused on clear websites and practical enquiry systems for UK trades businesses.", url: "https://www.andigitalstudio.com/about",
  },
};

const principles = [
  { title: "Clear scope before code", text: "We agree the purpose, pages, responsibilities and delivery expectations before building. That keeps the project understandable for both sides." },
  { title: "Designed for real decisions", text: "A website should help a potential customer understand the service, assess the evidence and decide how to get in touch—not just look fashionable." },
  { title: "Measured, not exaggerated", text: "We check technical performance and the enquiry journey, then report what the evidence shows. We do not guarantee rankings, revenue or a fixed number of leads." },
  { title: "Useful automation only", text: "We recommend workflow automation when it solves a real, repeatable problem. We do not add complexity simply because a tool is available." },
];

const process = [
  ["01", "Understand", "Goals, customer questions, existing website and constraints."],
  ["02", "Define", "Scope, site structure, content, timeline and price."],
  ["03", "Build & test", "Design, development, device checks and enquiry-path testing."],
  ["04", "Launch & improve", "Handover, basic measurement and prioritised next steps."],
];

export default function AboutPage() {
  return (
    <main className="flex min-h-screen flex-col bg-[#f5f7fc]">
      <SiteHeader />
      <section className="container-shell py-16 sm:py-24">
        <Reveal variant="left">
          <p className="section-kicker">About the studio</p>
          <h1 className="mt-5 max-w-4xl text-4xl font-semibold leading-[1.08] tracking-[-.05em] text-slate-950 sm:text-5xl lg:text-6xl">A small studio built around clear thinking and dependable delivery.</h1>
          <p className="mt-7 max-w-3xl text-lg leading-8 text-slate-700">AN Digital Studio is a lean, remote-first web development studio. Our current focus is helping UK builders, roofers and renovation businesses present their work clearly online and make it easier for suitable customers to request a quote.</p>
          <p className="mt-4 max-w-3xl text-base leading-7 text-slate-600">We combine thoughtful design and modern web development with practical operational workflows when they are useful. The goal is not technology for its own sake; it is a website your customers can use and a process your team can maintain.</p>
        </Reveal>

        <div className="mt-14 grid gap-4 sm:grid-cols-2">
          {principles.map((principle, index) => (
            <Reveal key={principle.title} delay={index * 75}>
              <article className="card-surface h-full rounded-2xl p-6 sm:p-7">
                <p className="font-mono text-xs font-semibold text-blue-700">0{index + 1} / PRINCIPLE</p>
                <h2 className="mt-4 text-lg font-bold text-slate-900">{principle.title}</h2>
                <p className="mt-3 text-sm leading-6 text-slate-600">{principle.text}</p>
              </article>
            </Reveal>
          ))}
        </div>

        <Reveal>
          <div className="mt-16 border-t border-slate-200 pt-12">
            <p className="section-kicker">How projects run</p>
            <h2 className="mt-4 text-2xl font-semibold tracking-tight text-slate-950 sm:text-3xl">A process you can follow.</h2>
            <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {process.map(([number, title, description]) => (
                <div key={number} className="border-l-2 border-blue-200 pl-4">
                  <p className="font-mono text-xs font-bold text-blue-700">{number}</p>
                  <h3 className="mt-3 text-base font-bold text-slate-900">{title}</h3>
                  <p className="mt-2 text-sm leading-6 text-slate-600">{description}</p>
                </div>
              ))}
            </div>
          </div>
        </Reveal>

        <Reveal variant="scale">
          <div className="soft-panel mt-16 rounded-2xl p-6 sm:p-8">
            <h2 className="text-2xl font-semibold tracking-tight text-slate-950">Start with an honest review.</h2>
            <p className="mt-3 max-w-2xl text-sm leading-6 text-slate-600">You do not need to know the technical answer before contacting us. Tell us what your business does and what you want the website to help with; we can start by identifying practical priorities.</p>
            <Link href="/audit" className="button-primary button-large mt-6">Request a free website review <span aria-hidden="true">↗</span></Link>
          </div>
        </Reveal>
      </section>
      <SiteFooter />
    </main>
  );
}

import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import Reveal from "@/components/Reveal";

export const metadata: Metadata = {
  title: "Websites for UK Trades Businesses",
  description:
    "AN Digital Studio builds clear, mobile-first websites and enquiry systems for UK builders, roofers and renovation firms.",
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    siteName: "AN Digital Studio",
    images: [{ url: "/opengraph-image.png", alt: "AN Digital Studio" }],
    title: "Websites for UK Trades Businesses",
    description: "Clear, mobile-first websites and enquiry systems for UK builders, roofers and renovation firms.",
    url: "https://www.andigitalstudio.com/",
  },
};

const services = [
  {
    number: "01",
    icon: "↗",
    title: "A website that earns confidence",
    description:
      "Make your services, locations, past work and next step easy to understand—especially for people viewing your site on a phone.",
  },
  {
    number: "02",
    icon: "⌁",
    title: "A clearer path to a quote",
    description:
      "Bring phone, email and quote-request options forward so suitable customers can explain what they need without friction.",
  },
  {
    number: "03",
    icon: "⤴",
    title: "Practical enquiry follow-up",
    description:
      "Where it adds value, connect enquiry forms to notifications and simple workflows so requests are easier to track and respond to.",
  },
];

const steps = [
  { number: "01", title: "Review", description: "We look at your current website, service messaging, mobile experience and route to a quote." },
  { number: "02", title: "Plan", description: "We agree the pages, content, delivery timeline, responsibilities and project price before work starts." },
  { number: "03", title: "Build & launch", description: "We build, test key journeys on common screen sizes, then launch with a clear handover." },
];

export default function HomePage() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-[#f5f7fc] text-slate-900">
      <div aria-hidden="true" className="hero-glow inset-x-0 top-0 z-0 h-[780px]" />
      <div aria-hidden="true" className="grid-overlay pointer-events-none absolute inset-x-0 top-0 z-0 h-[760px]" />
      <SiteHeader />

      <section className="container-shell relative z-10 grid gap-12 pb-16 pt-14 sm:pb-20 sm:pt-20 lg:grid-cols-[1.03fr_.97fr] lg:items-center lg:gap-14 lg:pb-24 lg:pt-24">
        <Reveal variant="left">
          <div className="eyebrow-pill"><span className="eyebrow-dot" /> Focused on UK builders, roofers & renovation firms</div>
          <h1 className="mt-7 max-w-3xl text-[2.6rem] font-semibold leading-[1.06] tracking-[-0.055em] text-slate-950 sm:text-5xl md:text-6xl lg:text-[4.15rem]">
            Turn your website into a <span className="title-accent">clearer path to more enquiries.</span>
          </h1>
          <p className="mt-6 max-w-2xl text-base leading-7 text-slate-600 sm:text-lg sm:leading-8">
            We build professional, mobile-first websites for UK trades businesses. Help potential customers understand your work, trust what they see and take the next step to request a quote.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
            <Link href="/audit" className="button-primary button-large">
              Request a free website review <span aria-hidden="true">↗</span>
            </Link>
            <a href="https://demo.andigitalstudio.com/" target="_blank" rel="noopener noreferrer" className="button-secondary button-large">
              Explore the trades concept <span aria-hidden="true">↗</span>
            </a>
          </div>
          <div className="mt-8 flex flex-wrap gap-x-5 gap-y-3 text-xs font-medium text-slate-600 sm:text-sm">
            <span className="flex items-center gap-2"><span className="text-blue-600">✓</span> Mobile-first design</span>
            <span className="flex items-center gap-2"><span className="text-blue-600">✓</span> Clear quote pathways</span>
            <span className="flex items-center gap-2"><span className="text-blue-600">✓</span> Honest, measured work</span>
          </div>
        </Reveal>

        <Reveal variant="scale" delay={130}>
          <div className="relative mx-auto w-full max-w-xl">
            <div aria-hidden="true" className="absolute -inset-5 rounded-[2rem] bg-blue-400/20 blur-3xl" />
            <div className="hero-preview card-surface relative overflow-hidden rounded-[1.5rem] p-2.5 sm:rounded-[1.8rem] sm:p-3">
              <div className="preview-topbar flex items-center justify-between gap-3 rounded-t-xl px-3 py-3 sm:px-4">
                <div className="flex items-center gap-1.5" aria-hidden="true">
                  <span className="h-2 w-2 rounded-full bg-[#ff7777]" />
                  <span className="h-2 w-2 rounded-full bg-[#ffc969]" />
                  <span className="h-2 w-2 rounded-full bg-[#75d8a5]" />
                </div>
                <span className="truncate text-[10px] font-semibold tracking-[.15em] text-slate-300 sm:text-xs">UK TRADES WEBSITE CONCEPT</span>
                <span className="rounded-full border border-blue-200/20 bg-blue-300/10 px-2.5 py-1 text-[10px] font-semibold text-blue-100">Preview</span>
              </div>
              <div className="relative aspect-[4/3] overflow-hidden bg-slate-100">
                <Image
                  src="/demo-mockup.png"
                  alt="Preview of the illustrative UK trades website concept"
                  fill
                  priority
                  sizes="(max-width: 1024px) 92vw, 43vw"
                  className="object-cover object-top"
                />
              </div>
              <div className="grid grid-cols-3 px-1 py-4 sm:px-3">
                <div className="preview-stat px-2 sm:px-3">
                  <p className="text-xs font-bold text-slate-800 sm:text-sm">Services</p>
                  <p className="preview-caption mt-1">Easy to scan</p>
                </div>
                <div className="preview-stat px-2 sm:px-3">
                  <p className="text-xs font-bold text-slate-800 sm:text-sm">Trust</p>
                  <p className="preview-caption mt-1">Real proof only</p>
                </div>
                <div className="preview-stat px-2 sm:px-3">
                  <p className="text-xs font-bold text-slate-800 sm:text-sm">Enquiries</p>
                  <p className="preview-caption mt-1">Clear next step</p>
                </div>
              </div>
            </div>
            <div className="soft-panel absolute -bottom-5 -left-3 hidden rounded-2xl px-4 py-3 shadow-xl shadow-blue-950/5 sm:block md:-left-7">
              <p className="text-[10px] font-extrabold uppercase tracking-[.15em] text-blue-700">Designed for real use</p>
              <p className="mt-1 text-xs font-semibold text-slate-800">Simple. Clear. Mobile-ready.</p>
            </div>
            <p className="mt-5 text-center text-[11px] leading-5 text-slate-500">Illustrative concept preview—not a claim of client results.</p>
          </div>
        </Reveal>
      </section>

      <Reveal>
        <section className="border-y border-slate-200/80 bg-white/65">
          <div className="container-shell grid gap-5 py-6 sm:grid-cols-3 sm:gap-7 sm:py-7">
            <div className="flex gap-3">
              <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl border border-blue-100 bg-blue-50 text-xs font-extrabold text-blue-700">01</span>
              <div><h2 className="text-sm font-bold text-slate-900">Built around your customers</h2><p className="mt-1 text-xs leading-5 text-slate-500">Clear services, useful proof and obvious contact options.</p></div>
            </div>
            <div className="flex gap-3">
              <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl border border-blue-100 bg-blue-50 text-xs font-extrabold text-blue-700">02</span>
              <div><h2 className="text-sm font-bold text-slate-900">Tested before launch</h2><p className="mt-1 text-xs leading-5 text-slate-500">Key pages, links and enquiry routes checked on common screens.</p></div>
            </div>
            <div className="flex gap-3">
              <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl border border-blue-100 bg-blue-50 text-xs font-extrabold text-blue-700">03</span>
              <div><h2 className="text-sm font-bold text-slate-900">No invented promises</h2><p className="mt-1 text-xs leading-5 text-slate-500">Performance and outcomes are measured—not guaranteed in advance.</p></div>
            </div>
          </div>
        </section>
      </Reveal>

      <section className="container-shell py-20 sm:py-24">
        <Reveal>
          <div className="max-w-2xl">
            <p className="section-kicker">What we build</p>
            <h2 className="mt-4 text-3xl font-semibold tracking-[-.04em] text-slate-950 sm:text-4xl">The essentials that make a trades website work harder.</h2>
            <p className="mt-4 text-base leading-7 text-slate-600">Good design is not decoration alone. It helps the right customer understand what you do, feel confident contacting you and know what happens next.</p>
          </div>
        </Reveal>
        <div className="mt-10 grid gap-4 md:grid-cols-3">
          {services.map((service, index) => (
            <Reveal key={service.number} delay={index * 100}>
              <article className="card-surface h-full rounded-2xl p-6 sm:p-7">
                <div className="flex items-center justify-between"><span className="card-icon">{service.icon}</span><span className="font-mono text-xs font-semibold text-slate-400">{service.number} / 03</span></div>
                <h3 className="mt-6 text-lg font-bold tracking-tight text-slate-900">{service.title}</h3>
                <p className="mt-3 text-sm leading-6 text-slate-600">{service.description}</p>
              </article>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="dark-band">
        <div className="container-shell grid gap-12 py-20 sm:py-24 lg:grid-cols-[.82fr_1.18fr] lg:gap-16">
          <Reveal variant="left">
            <p className="section-kicker !text-blue-300">A straightforward process</p>
            <h2 className="mt-4 text-3xl font-semibold tracking-[-.04em] text-white sm:text-4xl">Clear steps. No mystery process.</h2>
            <p className="mt-5 max-w-xl text-base leading-7 text-slate-300">You should know what is being built, why it matters, what it costs and what you need to provide before work begins.</p>
            <Link href="/about" className="mt-7 inline-flex items-center gap-2 text-sm font-bold text-blue-300 transition hover:text-white">Learn how we work <span aria-hidden="true">→</span></Link>
          </Reveal>
          <div className="space-y-3">
            {steps.map((step, index) => (
              <Reveal key={step.number} delay={index * 100}>
                <article className="dark-band-surface flex gap-4 rounded-2xl p-5 sm:gap-6 sm:p-6">
                  <span className="pt-0.5 font-mono text-xs font-bold text-blue-300">{step.number}</span>
                  <div><h3 className="text-base font-bold text-white">{step.title}</h3><p className="mt-2 text-sm leading-6 text-slate-300">{step.description}</p></div>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="container-shell py-20 sm:py-24">
        <Reveal>
          <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
            <div><p className="section-kicker">Selected work</p><h2 className="mt-4 text-3xl font-semibold tracking-[-.04em] text-slate-950 sm:text-4xl">Real work. Clearly labelled concepts.</h2></div>
            <Link href="/work" className="inline-flex items-center gap-2 text-sm font-bold text-blue-700 transition hover:text-blue-900">View all work <span aria-hidden="true">→</span></Link>
          </div>
        </Reveal>
        <div className="mt-9 grid gap-4 md:grid-cols-2">
          <Reveal delay={0}>
            <article className="card-surface h-full rounded-2xl p-6 sm:p-8">
              <div className="flex items-start justify-between gap-3"><span className="status-chip">Client project</span><span className="text-xs text-slate-500">Real estate</span></div>
              <h3 className="mt-5 text-xl font-bold text-slate-900">3S Land Developers</h3>
              <p className="mt-3 text-sm leading-6 text-slate-600">A bilingual website project for a Bangladesh-based land developer, built to explain the featured project and help visitors find relevant information and contact details.</p>
              <a href="https://3s-land-developers.vercel.app/" target="_blank" rel="noopener noreferrer" className="mt-6 inline-flex items-center gap-2 text-sm font-bold text-blue-700 hover:text-blue-900">Visit live website <span aria-hidden="true">↗</span></a>
            </article>
          </Reveal>
          <Reveal delay={100}>
            <article className="card-surface h-full rounded-2xl p-6 sm:p-8">
              <div className="flex items-start justify-between gap-3"><span className="status-chip">Concept demo</span><span className="text-xs text-slate-500">UK trades</span></div>
              <h3 className="mt-5 text-xl font-bold text-slate-900">UK Trades Website Blueprint</h3>
              <p className="mt-3 text-sm leading-6 text-slate-600">An illustrative direction for a trades website, showing one way to organise services and guide visitors towards requesting a quote. It is not a commissioned client project.</p>
              <a href="https://demo.andigitalstudio.com/" target="_blank" rel="noopener noreferrer" className="mt-6 inline-flex items-center gap-2 text-sm font-bold text-blue-700 hover:text-blue-900">Explore the concept <span aria-hidden="true">↗</span></a>
            </article>
          </Reveal>
        </div>
      </section>

      <section className="container-shell pb-20 sm:pb-24">
        <Reveal variant="scale">
          <div className="soft-panel relative overflow-hidden rounded-[1.7rem] p-7 sm:rounded-[2rem] sm:p-10 lg:p-12">
            <div aria-hidden="true" className="absolute -right-16 -top-20 h-64 w-64 rounded-full bg-blue-300/30 blur-3xl" />
            <div className="relative grid gap-7 lg:grid-cols-[1fr_auto] lg:items-center">
              <div className="max-w-2xl"><p className="section-kicker">Start with clarity</p><h2 className="mt-4 text-3xl font-semibold tracking-[-.04em] text-slate-950 sm:text-4xl">Not sure what your website needs next?</h2><p className="mt-4 text-sm leading-6 text-slate-600 sm:text-base sm:leading-7">Request a free review. We will look for practical improvements to clarity, mobile usability, trust signals and the path to making an enquiry. No obligation to buy.</p></div>
              <Link href="/audit" className="button-primary button-large w-full sm:w-fit">Request a free website review <span aria-hidden="true">↗</span></Link>
            </div>
          </div>
        </Reveal>
      </section>
      <SiteFooter />
    </main>
  );
}

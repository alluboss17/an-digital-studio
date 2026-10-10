import type { Metadata } from "next";
import Image from "next/image";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import Reveal from "@/components/Reveal";

export const metadata: Metadata = {
  title: "Work",
  description: "Selected work from AN Digital Studio, including a live bilingual real-estate website and an illustrative UK trades website concept.",
  alternates: { canonical: "/work" },
  openGraph: {
    type: "website", siteName: "AN Digital Studio", images: [{ url: "/opengraph-image.png", alt: "AN Digital Studio" }],
    title: "Selected Work | AN Digital Studio", description: "A live bilingual real-estate website and an illustrative UK trades website concept.", url: "https://www.andigitalstudio.com/work",
  },
};

export default function WorkPage() {
  return (
    <main className="flex min-h-screen flex-col bg-[#f5f7fc]">
      <SiteHeader />
      <section className="container-shell py-16 sm:py-24">
        <Reveal variant="left">
          <p className="section-kicker">Selected work</p>
          <h1 className="mt-5 max-w-4xl text-4xl font-semibold leading-[1.08] tracking-[-.05em] text-slate-950 sm:text-5xl lg:text-6xl">Real projects. Clearly labelled concepts. No invented results.</h1>
          <p className="mt-6 max-w-2xl text-base leading-7 text-slate-600 sm:text-lg sm:leading-8">We are building a focused portfolio. Where outcome data becomes available and can be verified, it will be shared with the client’s permission. Until then, these examples describe the work—not unmeasured business results.</p>
        </Reveal>

        <div className="mt-12 grid gap-5 lg:grid-cols-2">
          <Reveal>
            <article className="card-surface flex h-full flex-col rounded-2xl p-6 sm:p-8">
              <div className="flex flex-wrap items-center justify-between gap-3"><span className="status-chip">Client project</span><span className="text-xs text-slate-500">Real estate · Bangladesh</span></div>
             <div className="relative mt-6 aspect-[16/9] overflow-hidden rounded-xl border border-slate-200 bg-slate-100">
                <Image src="/3s-mockup-v2.png" alt="Mockup of the illustrative UK trades website concept" fill sizes="(max-width: 1024px) 90vw, 38vw" className="object-cover object-top transition-transform duration-500 hover:scale-[1.025]" />
              </div>
             <h2 className="mt-6 text-2xl font-bold tracking-tight text-slate-950">3S Land Developers</h2>
               <p className="mt-3 text-sm leading-6 text-slate-600">A bilingual website for a land-development business, organised to explain its current featured project, present useful information in English and Bengali, and help visitors find contact details.</p>
              <div className="mt-6 border-t border-slate-200 pt-5">
               <p className="text-xs font-extrabold uppercase tracking-wider text-slate-700">Project scope</p>
                <ul className="mt-3 space-y-2 text-sm text-slate-600"><li>• Next.js website build</li><li>• English and Bengali content experience</li><li>• Project information and contact pathways</li></ul>
              </div>
              <div className="mt-auto pt-8">
                <a href="https://3s-land-developers.vercel.app/" target="_blank" rel="noopener noreferrer" className="button-secondary button-large w-full sm:w-fit">Visit live website <span aria-hidden="true">↗</span></a>
                <p className="mt-3 text-xs leading-5 text-slate-500">No conversion, ranking or revenue impact is claimed here; those outcomes have not been added without measurement.</p>
              </div>
            </article>
          </Reveal>

          <Reveal delay={100}>
            <article className="card-surface flex h-full flex-col rounded-2xl p-6 sm:p-8">
              <div className="flex flex-wrap items-center justify-between gap-3"><span className="status-chip">Concept demo</span><span className="text-xs text-slate-500">UK trades</span></div>
              <div className="relative mt-6 aspect-[16/9] overflow-hidden rounded-xl border border-slate-200 bg-slate-100">
                <Image src="/demo-mockup.png" alt="Mockup of the illustrative UK trades website concept" fill sizes="(max-width: 1024px) 90vw, 38vw" className="object-cover object-top transition-transform duration-500 hover:scale-[1.025]" />
              </div>
              <h2 className="mt-6 text-2xl font-bold tracking-tight text-slate-950">UK Trades Website Blueprint</h2>
              <p className="mt-3 text-sm leading-6 text-slate-600">An illustrative layout direction for a trades business website. It demonstrates a possible way to present services and guide visitors towards a quote enquiry; it is not a commissioned client project.</p>
              <div className="warning-note mt-6 rounded-xl p-4 text-xs leading-5">Any business name, review, rating, certification, testimonial or other proof shown in this demo must be treated as fictional sample content unless independently verified. Not presented as a real endorsement or client result.</div>
              <div className="mt-auto pt-8"><a href="https://demo.andigitalstudio.com/" target="_blank" rel="noopener noreferrer" className="button-primary button-large w-full sm:w-fit">Explore the concept <span aria-hidden="true">↗</span></a></div>
            </article>
          </Reveal>
        </div>

        <Reveal>
          <div className="mt-12 rounded-2xl border border-slate-200 bg-white/75 p-6 sm:p-8">
            <h2 className="text-xl font-bold text-slate-950">What we will add next</h2>
            <p className="mt-3 max-w-3xl text-sm leading-6 text-slate-600">As we complete work with UK trades businesses, we will add approved project write-ups that document the original problem, what changed, the launch date and any verified before-and-after metrics. A small portfolio with trustworthy evidence is more useful than a long list of concepts.</p>
          </div>
        </Reveal>
      </section>
      <SiteFooter />
    </main>
  );
}

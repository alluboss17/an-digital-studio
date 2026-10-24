import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import Reveal from "@/components/Reveal";

export const metadata: Metadata = {
  title: "Work",
  description:
    "Selected work from AN Digital Studio: a live bilingual real-estate client website plus clearly labelled UK trades concept websites.",
  alternates: { canonical: "/work" },
  openGraph: {
    type: "website",
    siteName: "AN Digital Studio",
    images: [{ url: "/opengraph-image.png", alt: "AN Digital Studio" }],
    title: "Selected Work | AN Digital Studio",
    description:
      "Real client work and clearly labelled concept websites from AN Digital Studio.",
    url: "https://www.andigitalstudio.com/work",
  },
};

const projects = [
  {
    type: "Client project",
    meta: "Real estate · Bangladesh",
    image: "/3s-mockup-v2.png",
    alt: "3S Land Developers bilingual real-estate website",
    title: "3S Land Developers",
    description:
      "A bilingual website for a land-development business, organised to explain its featured project, present useful information in English and Bengali, and make enquiries and contact details easier to find.",
    scope: [
      "Next.js website build",
      "English and Bengali content experience",
      "Project information, galleries and contact pathways",
    ],
    href: "https://www.3slanddevelopers.com/",
    cta: "Visit live website",
    primary: false,
    note:
      "Real client project. We describe the work delivered without inventing conversion, ranking or revenue results that have not been measured.",
  },
  {
    type: "Concept demo",
    meta: "UK builders & renovation",
    image: "/demo-mockup.png",
    alt: "Apex construction and renovation concept website by AN Digital Studio",
    title: "UK Trades Website Blueprint",
    description:
      "An illustrative contractor website showing how services, project work, trust information, process and a quote journey can be structured for a UK building or renovation business.",
    scope: [
      "Premium contractor positioning",
      "Services, project proof and process presentation",
      "Mobile-first quote-enquiry journey",
    ],
    href: "https://demo.andigitalstudio.com/",
    cta: "Explore the concept",
    primary: true,
    note:
      "Concept only. Any sample business names, credentials, reviews or project details are illustrative unless explicitly verified.",
  },
  {
    type: "Concept demo",
    meta: "UK roofing",
    image: "/roofing-concept-mockup.png",
    alt: "RidgeCraft Roofing concept website by AN Digital Studio",
    title: "UK Roofing Enquiry Concept",
    description:
      "A niche roofing concept built around service clarity, project presentation, verified trust signals and one obvious route from browsing to requesting a quote.",
    scope: [
      "Roofing-specific information architecture",
      "Project and evidence-led trust presentation",
      "Low-friction mobile enquiry experience",
    ],
    href: "https://roofing.andigitalstudio.com/",
    cta: "Explore the roofing concept",
    primary: true,
    note:
      "Concept only. RidgeCraft Roofing is fictional sample content created to demonstrate a design and conversion direction for real roofing businesses.",
  },
];

export default function WorkPage() {
  return (
    <main className="flex min-h-screen flex-col bg-[#f5f7fc]">
      <SiteHeader />

      <section className="container-shell py-16 sm:py-24">
        <Reveal variant="left">
          <p className="section-kicker">Selected work</p>
          <h1 className="mt-5 max-w-4xl text-4xl font-semibold leading-[1.08] tracking-[-.05em] text-slate-950 sm:text-5xl lg:text-6xl">
            Real client work first. Concepts clearly labelled.
          </h1>
          <p className="mt-6 max-w-3xl text-base leading-7 text-slate-600 sm:text-lg sm:leading-8">
            We use real client projects to show what we have delivered and concept websites to demonstrate how we would approach specific industries. We do not present fictional proof as client results.
          </p>
        </Reveal>

        <div className="mt-12 grid gap-5 lg:grid-cols-2 xl:grid-cols-3">
          {projects.map((project, index) => (
            <Reveal key={project.title} delay={index * 80}>
              <article className="card-surface flex h-full flex-col rounded-2xl p-6 sm:p-7">
                <div className="flex flex-wrap items-center justify-between gap-3">
                  <span className="status-chip">{project.type}</span>
                  <span className="text-xs text-slate-500">{project.meta}</span>
                </div>

                <div className="relative mt-6 aspect-[16/9] overflow-hidden rounded-xl border border-slate-200 bg-slate-100">
                  <Image
                    src={project.image}
                    alt={project.alt}
                    fill
                    sizes="(max-width: 1024px) 90vw, (max-width: 1280px) 44vw, 30vw"
                    className="object-cover object-top transition-transform duration-500 hover:scale-[1.025]"
                  />
                </div>

                <h2 className="mt-6 text-2xl font-bold tracking-tight text-slate-950">
                  {project.title}
                </h2>
                <p className="mt-3 text-sm leading-6 text-slate-600">
                  {project.description}
                </p>

                <div className="mt-6 border-t border-slate-200 pt-5">
                  <p className="text-xs font-extrabold uppercase tracking-wider text-slate-700">
                    What this demonstrates
                  </p>
                  <ul className="mt-3 space-y-2 text-sm text-slate-600">
                    {project.scope.map((item) => (
                      <li key={item}>• {item}</li>
                    ))}
                  </ul>
                </div>

                <div className="mt-auto pt-8">
                  <a
                    href={project.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`${project.primary ? "button-primary" : "button-secondary"} button-large w-full sm:w-fit`}
                  >
                    {project.cta} <span aria-hidden="true">↗</span>
                  </a>
                  <p className="mt-3 text-xs leading-5 text-slate-500">{project.note}</p>
                </div>
              </article>
            </Reveal>
          ))}
        </div>

        <Reveal>
          <div className="mt-12 grid gap-5 lg:grid-cols-[1.15fr_.85fr]">
            <div className="rounded-2xl border border-slate-200 bg-white/80 p-6 sm:p-8">
              <p className="section-kicker">How we think about proof</p>
              <h2 className="mt-4 text-2xl font-bold tracking-tight text-slate-950 sm:text-3xl">
                A smaller portfolio with honest evidence is more useful than a large portfolio of vague claims.
              </h2>
              <p className="mt-4 max-w-3xl text-sm leading-6 text-slate-600">
                As client work is completed, we will add approved write-ups covering the original brief, what changed, launch details and any before-and-after metrics that can actually be verified.
              </p>
            </div>

            <div className="rounded-2xl border border-blue-200 bg-blue-50/70 p-6 sm:p-8">
              <p className="section-kicker">Have a website already?</p>
              <h2 className="mt-4 text-2xl font-bold tracking-tight text-slate-950">
                Start with a free website review.
              </h2>
              <p className="mt-3 text-sm leading-6 text-slate-600">
                We will look at clarity, mobile usability, trust signals and the enquiry path before discussing any paid work.
              </p>
              <Link href="/audit" className="button-primary button-large mt-6 w-full sm:w-fit">
                Request a free review <span aria-hidden="true">↗</span>
              </Link>
            </div>
          </div>
        </Reveal>
      </section>

      <SiteFooter />
    </main>
  );
}

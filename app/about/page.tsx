import Link from 'next/link';

export default function AboutPage() {
  return (
    <main className="flex flex-col items-center justify-between min-h-screen bg-zinc-950 text-white">
      {/* Header */}
      <header className="w-full max-w-6xl py-8 px-6 flex justify-between items-center border-b border-zinc-800">
        <Link href="/" className="text-xl font-bold tracking-tight text-white hover:opacity-80 transition-opacity">
          AN Digital Studio<span className="text-zinc-500">.</span>
        </Link>

        <nav className="flex gap-6 items-center">
          <Link href="/work" className="text-sm text-zinc-400 hover:text-white transition-colors">
            Work
          </Link>
          <Link href="/" className="text-sm text-zinc-400 hover:text-white transition-colors">
            Home
          </Link>
          <a
            href="mailto:hello@andigitalstudio.com?subject=Technical%20Audit%20Inquiry"
            className="px-4 py-2 text-sm font-medium text-zinc-300 hover:text-white border border-zinc-700 rounded-lg transition-colors"
          >
            Get in Touch
          </a>
        </nav>
      </header>

      {/* About Content */}
      <div className="flex-1 w-full max-w-4xl px-6 py-16 mx-auto flex flex-col justify-center">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-zinc-800 bg-zinc-900/50 text-xs text-zinc-400 mb-8 w-fit">
          Our Philosophy
        </div>

        <h1 className="text-4xl md:text-5xl font-bold text-white tracking-tight mb-8">
          Built for Scale.
        </h1>

        <div className="space-y-6 text-base md:text-lg text-zinc-400 font-light leading-relaxed">
          <p>
            Most local businesses are held back by slow websites and manual data entry. AN Digital Studio was founded to solve this exact bottleneck.
          </p>
          <p>
            We do not build generic, sluggish templates. We engineer high-performance web architecture using Next.js to guarantee sub-second load times that capture more leads.
          </p>
          <p>
            Beyond the frontend, we design custom Python workflows to automate routine client handling, ensuring your digital infrastructure works around the clock so you don't have to.
          </p>
        </div>

        {/* Value Props Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-16 pt-12 border-t border-zinc-800/80">
          <div className="p-6 rounded-xl border border-zinc-900 bg-zinc-900/40">
            <h3 className="text-lg font-semibold text-white mb-2">Lean Operations</h3>
            <p className="text-sm text-zinc-400 leading-relaxed">
              We build lightweight, highly efficient systems that keep overhead low while maximizing output and revenue potential.
            </p>
          </div>
          <div className="p-6 rounded-xl border border-zinc-900 bg-zinc-900/40">
            <h3 className="text-lg font-semibold text-white mb-2">Data-Driven Execution</h3>
            <p className="text-sm text-zinc-400 leading-relaxed">
              Every decision, from UI design to backend automation, is engineered to increase conversion rates and optimize your operational workflow.
            </p>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="w-full max-w-6xl py-8 px-6 border-t border-zinc-900 flex justify-between items-center text-xs text-zinc-500">
        <span>© {new Date().getFullYear()} AN Digital Studio. All rights reserved.</span>
        <span>• Remote Worldwide</span>
      </footer>
    </main>
  );
}
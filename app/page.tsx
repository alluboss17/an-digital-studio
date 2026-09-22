import Link from 'next/link';

export default function Page() {
  return (
    <main className="flex flex-col items-center justify-between min-h-screen bg-zinc-950 text-white">
      {/* Header */}
      <header className="w-full max-w-6xl py-8 px-6 flex justify-between items-center border-b border-zinc-800">
        <span className="text-xl font-bold tracking-tight text-white">
          AN Digital Studio<span className="text-zinc-500">.</span>
        </span>

        <nav className="flex gap-6 items-center">
          <Link href="/work" className="text-sm text-zinc-400 hover:text-white transition-colors">
            Work
          </Link>
          <Link href="/about" className="text-sm text-zinc-400 hover:text-white transition-colors">
            About
          </Link>
          <a
            href="mailto:hello@andigitalstudio.com?subject=Technical%20Audit%20Inquiry"
            className="px-4 py-2 text-sm font-medium text-zinc-300 hover:text-white border border-zinc-700 rounded-lg transition-colors"
          >
            Get in Touch
          </a>
        </nav>
      </header>


      {/* Hero Section */}
      <div className="flex flex-col items-center justify-center text-center max-w-4xl w-full mx-auto my-auto py-16">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-zinc-800 bg-zinc-900/50 text-xs text-zinc-400 mb-8">
          <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
          Accepting New Clients
        </div>

        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white tracking-tight leading-tight md:leading-tight lg:leading-tight mb-6">
          High-Performance Websites That Drive Real Revenue
        </h1>

        <p className="text-base md:text-lg lg:text-xl text-zinc-400 font-light max-w-2xl mb-10 leading-relaxed">
          We build lightning-fast web applications and automated operational workflows for growing businesses. Stop losing leads to slow, outdated pages.
        </p>

        <a
          href="mailto:hello@andigitalstudio.com?subject=Free%20Technical%20Audit%20Request"
          className="px-8 py-4 bg-white text-black font-semibold text-lg md:text-xl rounded-lg hover:bg-zinc-200 hover:scale-[1.02] active:scale-95 transition-all duration-300 ease-in-out shadow-xl focus:outline-none focus:ring-4 focus:ring-zinc-700"
        >
          Book a Free Technical Audit
        </a>
      </div>

      {/* Core Services Section */}
      <section className="w-full max-w-6xl py-12 border-t border-zinc-800/80 grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="p-6 rounded-xl border border-zinc-900 bg-zinc-900/40">
          <h3 className="text-lg font-semibold text-white mb-2">⚡ Speed & Performance</h3>
          <p className="text-sm text-zinc-400 leading-relaxed">
            Sub-second page load speeds engineered to rank higher on search engines and turn site visitors into paying clients.
          </p>
        </div>
        <div className="p-6 rounded-xl border border-zinc-900 bg-zinc-900/40">
          <h3 className="text-lg font-semibold text-white mb-2">🔄 Automated Operations</h3>
          <p className="text-sm text-zinc-400 leading-relaxed">
            Custom Python data workflows and lead pipelines designed to automate routine client handling and manual tasks.
          </p>
        </div>
        <div className="p-6 rounded-xl border border-zinc-900 bg-zinc-900/40">
          <h3 className="text-lg font-semibold text-white mb-2">📱 Responsive Architecture</h3>
          <p className="text-sm text-zinc-400 leading-relaxed">
            Clean, modern interface design crafted specifically to deliver optimal user conversion on desktop and mobile devices.
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer className="w-full max-w-6xl py-8 border-t border-zinc-900 flex justify-between items-center text-xs text-zinc-500">
        <span>© {new Date().getFullYear()} AN Digital Studio. All rights reserved.</span>
        <span>• Remote Worldwide</span>
      </footer>
    </main>
  );
}
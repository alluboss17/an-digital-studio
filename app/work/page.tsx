import React from 'react';
import Link from 'next/link';

export default function WorkPage() {
  return (
    <main className="flex flex-col items-center min-h-screen bg-zinc-950 px-6 py-16 text-white">
      <div className="max-w-5xl w-full">
        <div className="flex justify-between items-center mb-12 pb-6 border-b border-zinc-800">
          <Link href="/" className="text-xl font-bold tracking-tight">
            AN Digital Studio<span className="text-zinc-500">.</span>
          </Link>
          <Link href="/" className="text-sm text-zinc-400 hover:text-white transition-colors">
            ← Back Home
          </Link>
        </div>

        <h1 className="text-4xl md:text-5xl font-bold mb-4">Selected Work</h1>
        <p className="text-zinc-400 mb-12 max-w-2xl">
          High-speed web platforms, modern UI architecture, and automated operational pipelines designed for scale.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Project 1 */}
          <div className="p-6 rounded-xl bg-zinc-900 border border-zinc-800">
            <span className="text-xs font-mono text-emerald-400 uppercase tracking-widest">Next.js & Tailwind</span>
            <h2 className="text-2xl font-semibold mt-2 mb-3">Three S — Real Estate Development</h2>
            <p className="text-sm text-zinc-400 leading-relaxed mb-4">
              Designed and engineered a modern commercial web application for a residential housing developer, featuring rapid page transitions and mobile-optimized layouts.
            </p>
            <div className="text-xs text-zinc-500 font-mono">Status: Production Ready</div>
          </div>

          {/* Project 2 */}
          <div className="p-6 rounded-xl bg-zinc-900 border border-zinc-800">
            <span className="text-xs font-mono text-emerald-400 uppercase tracking-widest">UI Concept & Architecture</span>
            <h2 className="text-2xl font-semibold mt-2 mb-3">Artisan Coffee Platform</h2>
            <p className="text-sm text-zinc-400 leading-relaxed mb-4">
              Conceptual web platform featuring interactive digital menus, localized map integration, and custom typography tailored for modern hospitality brands.
            </p>
            <div className="text-xs text-zinc-500 font-mono">Status: Completed Concept</div>
          </div>
        </div>
      </div>
    </main>
  );
}
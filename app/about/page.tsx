import React from 'react';
import Link from 'next/link';

export default function AboutPage() {
  return (
    <main className="flex flex-col items-center min-h-screen bg-zinc-950 px-6 py-16 text-white">
      <div className="max-w-3xl w-full">
        <div className="flex justify-between items-center mb-12 pb-6 border-b border-zinc-800">
          <Link href="/" className="text-xl font-bold tracking-tight">
            AN Digital Studio<span className="text-zinc-500">.</span>
          </Link>
          <Link href="/" className="text-sm text-zinc-400 hover:text-white transition-colors">
            ← Back Home
          </Link>
        </div>
        
        <h1 className="text-4xl md:text-5xl font-bold mb-6">Built for Scale.</h1>
        <div className="space-y-6 text-lg text-zinc-400 leading-relaxed">
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
      </div>
    </main>
  );
}
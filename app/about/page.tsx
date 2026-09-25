import React from 'react';
import Link from 'next/link';

export default function AboutPage() {
  return (
    <main className="flex flex-col items-center min-h-screen bg-zinc-950 px-6 py-16 text-white">
      <div className="max-w-3xl w-full">
        {/* Navigation Bar matching the Work Page */}
        <div className="flex justify-between items-center mb-12 pb-6 border-b border-zinc-800">
          <Link href="/" className="text-xl font-bold tracking-tight">
            AN Digital Studio<span className="text-zinc-500">.</span>
          </Link>
          <Link href="/" className="text-sm text-zinc-400 hover:text-white transition-colors">
            ← Back Home
          </Link>
        </div>
        
        {/* Content */}
        <h1 className="text-4xl md:text-5xl font-bold mb-4">About Us</h1>
        <p className="text-lg text-zinc-400 leading-relaxed mb-8">
          We specialize in high-performance web architecture and operational automation. 
          Using Next.js and custom Python workflows, we eliminate manual bottlenecks 
          and build digital infrastructure that scales.
        </p>
      </div>
    </main>
  );
}
import React from 'react';

export default function AboutPage() {
  return (
    <main className="flex flex-col items-center min-h-screen bg-zinc-950 px-6 py-24">
      <div className="max-w-3xl w-full text-zinc-300">
         <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
          About AN Digital Studio
        </h1>
        <p className="text-lg leading-relaxed mb-8">
          We specialize in high-performance web architecture and operational automation. 
          Using Next.js and custom Python workflows, we eliminate manual bottlenecks 
          and build digital infrastructure that scales.
        </p>
        {/* Add more sections here later */}
      </div>
    </main>
  );
}
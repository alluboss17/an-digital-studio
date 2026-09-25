import React from 'react';
import Link from 'next/link';

export default function AuditPage() {
  return (
    <main className="flex flex-col min-h-screen bg-zinc-950 text-white">
      <div className="flex justify-between items-center px-6 py-6 border-b border-zinc-800 max-w-5xl mx-auto w-full">
        <Link href="/" className="text-xl font-bold tracking-tight">
          AN Digital Studio<span className="text-zinc-500">.</span>
        </Link>
        <Link href="/" className="text-sm text-zinc-400 hover:text-white transition-colors">
          ← Back Home
        </Link>
      </div>
      
      <div className="flex-grow w-full max-w-4xl mx-auto pt-8">
        <iframe
          src="https://tally.so/r/BzNzvQ?transparentBackground=1"
          width="100%"
          height="800"
          frameBorder="0"
          marginHeight={0}
          marginWidth={0}
          title="Technical Audit Intake"
        ></iframe>
      </div>
    </main>
  );
}
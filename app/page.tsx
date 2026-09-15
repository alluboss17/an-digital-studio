export default function Page() {
  return (
    <main className="flex flex-col items-center justify-center min-h-screen bg-zinc-950 px-6 sm:px-8 md:px-12 w-full">
      <div className="flex flex-col items-center justify-center text-center max-w-4xl w-full mx-auto">
        <h1 className="text-4xl md:text-5xl lg:text-7xl font-bold text-white tracking-tight leading-tight md:leading-tight lg:leading-tight mb-6">
          Automate Workflows And Scale Your Business Fast
        </h1>
        
        <p className="text-base md:text-lg lg:text-xl text-zinc-400 font-light max-w-2xl mb-12 leading-relaxed">
          AN Digital Studio builds high-performance Next.js web applications and custom Python data workflows to streamline your operations and drive growth.
        </p>

        <button 
          className="px-8 py-4 bg-white text-black font-semibold text-lg md:text-xl rounded-lg hover:bg-zinc-200 hover:scale-105 active:scale-95 transition-all duration-300 ease-in-out shadow-xl focus:outline-none focus:ring-4 focus:ring-zinc-700"
          type="button"
        >
          Book a Free Technical Audit
        </button>
      </div>
    </main>
  );
}
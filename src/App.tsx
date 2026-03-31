import { useEffect, useState } from 'react';

function App() {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setLoaded(true), 100);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="min-h-dvh bg-[#0a0a0a] text-[#f5f0e8] flex flex-col overflow-hidden relative">
      {/* Grain overlay */}
      <div
        className="fixed inset-0 pointer-events-none opacity-[0.03] z-50"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`,
        }}
      />

      {/* Accent line - diagonal */}
      <div
        className={`absolute top-0 right-0 w-1 md:w-2 bg-[#ff4d00] transition-all duration-1000 ease-out ${
          loaded ? 'h-[60vh]' : 'h-0'
        }`}
        style={{
          transformOrigin: 'top right',
          transitionDelay: '600ms'
        }}
      />

      {/* Main content */}
      <main className="flex-1 flex flex-col justify-center px-6 md:px-12 lg:px-24 relative z-10">
        <div className="max-w-[1400px] w-full mx-auto">
          {/* HELLO */}
          <div className="overflow-hidden">
            <h1
              className={`font-playfair text-[15vw] md:text-[12vw] lg:text-[10vw] leading-[0.85] tracking-[-0.03em] font-bold transition-all duration-1000 ease-out ${
                loaded ? 'translate-y-0 opacity-100' : 'translate-y-full opacity-0'
              }`}
              style={{ transitionDelay: '200ms' }}
            >
              Hello
            </h1>
          </div>

          {/* WORLD with accent */}
          <div className="overflow-hidden mt-[-2vw]">
            <h1
              className={`font-playfair text-[18vw] md:text-[14vw] lg:text-[12vw] leading-[0.85] tracking-[-0.04em] font-bold italic transition-all duration-1000 ease-out ${
                loaded ? 'translate-y-0 opacity-100' : 'translate-y-full opacity-0'
              }`}
              style={{ transitionDelay: '400ms' }}
            >
              W
              <span className="text-[#ff4d00] inline-block hover:rotate-12 transition-transform duration-300">o</span>
              rld
            </h1>
          </div>

          {/* Subtext */}
          <div className="overflow-hidden mt-8 md:mt-12">
            <p
              className={`font-archivo text-sm md:text-base lg:text-lg tracking-[0.3em] uppercase text-[#f5f0e8]/40 transition-all duration-700 ${
                loaded ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
              }`}
              style={{ transitionDelay: '800ms' }}
            >
              The beginning of everything
            </p>
          </div>

          {/* Decorative element */}
          <div
            className={`mt-12 md:mt-16 flex items-center gap-4 transition-all duration-700 ${
              loaded ? 'opacity-100' : 'opacity-0'
            }`}
            style={{ transitionDelay: '1000ms' }}
          >
            <div className="w-12 md:w-24 h-px bg-[#f5f0e8]/20" />
            <span className="font-archivo text-xs tracking-[0.2em] text-[#f5f0e8]/30">001</span>
          </div>
        </div>

        {/* Floating accent circle */}
        <div
          className={`absolute right-8 md:right-24 lg:right-32 bottom-24 md:bottom-32 w-20 h-20 md:w-32 md:h-32 rounded-full border border-[#ff4d00]/30 transition-all duration-1000 ${
            loaded ? 'scale-100 opacity-100' : 'scale-0 opacity-0'
          }`}
          style={{ transitionDelay: '1200ms' }}
        >
          <div className="absolute inset-4 md:inset-6 rounded-full bg-[#ff4d00]/10 animate-pulse" />
        </div>
      </main>

      {/* Footer */}
      <footer className="relative z-10 px-6 md:px-12 lg:px-24 py-6 md:py-8">
        <div className="max-w-[1400px] w-full mx-auto flex justify-center">
          <p className="font-archivo text-[10px] md:text-xs tracking-[0.15em] text-[#f5f0e8]/25">
            Requested by @web-user · Built by @clonkbot
          </p>
        </div>
      </footer>

      {/* Corner marks */}
      <div className="fixed top-4 md:top-8 left-4 md:left-8 w-6 md:w-8 h-6 md:h-8 border-l border-t border-[#f5f0e8]/10 z-20" />
      <div className="fixed bottom-4 md:bottom-8 left-4 md:left-8 w-6 md:w-8 h-6 md:h-8 border-l border-b border-[#f5f0e8]/10 z-20" />
      <div className="fixed top-4 md:top-8 right-4 md:right-8 w-6 md:w-8 h-6 md:h-8 border-r border-t border-[#f5f0e8]/10 z-20" />
      <div className="fixed bottom-4 md:bottom-8 right-4 md:right-8 w-6 md:w-8 h-6 md:h-8 border-r border-b border-[#f5f0e8]/10 z-20" />
    </div>
  );
}

export default App;

import React, { useRef, useEffect } from 'react';

export const LiquidProject: React.FC = () => {
  const requestRef = useRef<number>();
  const valRef = useRef(0);
  const targetRef = useRef(0);
  const turbRef = useRef<SVGFETurbulenceElement>(null);

  useEffect(() => {
    const loop = () => {
      valRef.current += (targetRef.current - valRef.current) * 0.05;
      if (turbRef.current) {
        turbRef.current.setAttribute('baseFrequency', `${valRef.current} ${valRef.current}`);
      }
      requestRef.current = requestAnimationFrame(loop);
    };
    loop();
    return () => {
      if (requestRef.current) cancelAnimationFrame(requestRef.current);
    };
  }, []);

  return (
    <section id="liquid" className="relative min-h-screen bg-[#050505] flex items-center justify-center border-t border-[#222] overflow-hidden py-24">
       {/* SVG Filter Definition */}
       <svg className="absolute w-0 h-0 overflow-hidden" aria-hidden="true">
        <defs>
          <filter id="liquid-filter">
            <feTurbulence ref={turbRef} type="fractalNoise" baseFrequency="0.0" numOctaves="2" result="noise" />
            <feDisplacementMap in="SourceGraphic" in2="noise" scale="40" xChannelSelector="R" yChannelSelector="G" />
          </filter>
        </defs>
      </svg>

      <div className="absolute top-8 left-8 z-20 font-mono text-[10px] tracking-[0.1em] text-neutral-500 border border-[#222] px-2 py-1 rounded bg-black/50 backdrop-blur">
        [ 03. SELECTED WORK ]
      </div>

      <div className="flex flex-col md:flex-row gap-12 items-center justify-center w-full px-6 max-w-7xl">
        
        {/* Text Content */}
        <div className="text-right max-w-sm order-2 md:order-1">
          <span className="text-emerald-500 font-mono text-xs mb-2 block">LATEST DEPLOYMENT</span>
          <h2 className="text-6xl font-bold mb-6 tracking-tighter text-white">FLUX<br/>ECOMMERCE</h2>
          <p className="text-neutral-400 text-sm leading-relaxed mb-6">
            A headless Next.js e-commerce platform featuring real-time inventory tracking, WebGL product previews, and AI-driven recommendations.
          </p>
          <div className="flex justify-end gap-2 text-[10px] font-mono text-neutral-500">
             <span className="border border-neutral-800 px-2 py-1 rounded">NEXT.JS</span>
             <span className="border border-neutral-800 px-2 py-1 rounded">WEBGL</span>
             <span className="border border-neutral-800 px-2 py-1 rounded">SHOPIFY</span>
          </div>
        </div>

        {/* Interactive Image */}
        <div 
          className="relative w-full md:w-[500px] h-[600px] overflow-hidden border border-[#333] order-1 md:order-2 group"
          onMouseEnter={() => (targetRef.current = 0.02)}
          onMouseLeave={() => (targetRef.current = 0.0)}
        >
          <img 
            src="https://picsum.photos/800/1000?random=1" 
            className="w-full h-full object-cover transform scale-110 transition-transform duration-700 ease-[cubic-bezier(0.25,1,0.5,1)] group-hover:scale-100"
            style={{ filter: "url('#liquid-filter')" }}
            alt="Project Preview"
          />
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none mix-blend-overlay">
            <h3 className="text-9xl font-black text-white opacity-20 tracking-tighter">01</h3>
          </div>
        </div>

      </div>
    </section>
  );
};
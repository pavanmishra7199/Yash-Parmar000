import React, { useEffect, useRef } from 'react';

export const PixelContact: React.FC = () => {
  const gridRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    if (!gridRef.current) return;
    
    // Create pixels
    const pixelCount = 300; // Adjust based on density preference
    for(let i = 0; i < pixelCount; i++) {
        const div = document.createElement('div');
        div.className = 'pixel transition-all duration-200 ease-out bg-white/5 rounded-[1px]';
        gridRef.current.appendChild(div);
    }

    const pixels = gridRef.current.querySelectorAll('.pixel');
    
    const handleMouseMove = (e: MouseEvent) => {
        if (!gridRef.current) return;
        const rect = gridRef.current.getBoundingClientRect();
        const mx = e.clientX - rect.left;
        const my = e.clientY - rect.top;

        pixels.forEach((p) => {
            const el = p as HTMLElement;
            const pr = el.getBoundingClientRect();
            // Calculate distance from mouse to center of pixel
            const px = (pr.left - rect.left) + pr.width / 2;
            const py = (pr.top - rect.top) + pr.height / 2;
            
            const dist = Math.sqrt(Math.pow(mx - px, 2) + Math.pow(my - py, 2));

            if (dist < 80) {
                el.style.backgroundColor = '#ffffff';
                el.style.transform = 'scale(0.5)';
                el.style.boxShadow = '0 0 10px rgba(255,255,255,0.8)';
                el.style.zIndex = '10';
                
                // Reset after delay
                setTimeout(() => {
                    el.style.backgroundColor = '';
                    el.style.transform = '';
                    el.style.boxShadow = '';
                    el.style.zIndex = '';
                }, 400);
            }
        });
    };

    gridRef.current.addEventListener('mousemove', handleMouseMove);

    return () => {
        if(gridRef.current) {
            gridRef.current.removeEventListener('mousemove', handleMouseMove);
            gridRef.current.innerHTML = '';
        }
    };
  }, []);

  return (
    <section id="pixel" className="relative h-screen w-full bg-[#050505] flex items-center justify-center border-t border-[#222] overflow-hidden flex-col">
       <div className="absolute top-8 left-8 z-20 font-mono text-[10px] tracking-[0.1em] text-neutral-500 border border-[#222] px-2 py-1 rounded bg-black/50 backdrop-blur">
        [ 05. DIGITAL HANDSHAKE ]
      </div>

      <div className="absolute z-20 text-center pointer-events-none">
          <h2 className="text-6xl md:text-8xl font-black text-white tracking-tighter mix-blend-difference mb-4">LET'S BUILD</h2>
          <a href="mailto:hello@yashparmar.dev" className="pointer-events-auto inline-block text-xl font-mono text-emerald-400 border-b border-emerald-400 pb-1 hover:text-white hover:border-white transition-colors">
              hello@yashparmar.dev
          </a>
      </div>

      <div 
        ref={gridRef}
        className="grid grid-cols-[repeat(20,1fr)] gap-[1px] w-[90%] max-w-[1000px] aspect-video cursor-crosshair"
      />
      
      <div className="absolute bottom-12 w-full text-center pointer-events-none">
        <p className="text-neutral-600 text-[10px] uppercase tracking-widest">Disturb the field to connect</p>
      </div>
    </section>
  );
};
import React, { useRef } from 'react';

export const FractureAbout: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const slicesRef = useRef<(HTMLDivElement | null)[]>([]);

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    // Normalize Y position from -1 to 1 based on container height
    const yVal = (e.clientY - rect.top - (rect.height / 2)) / (rect.height / 2);

    slicesRef.current.forEach((slice) => {
      if (slice) {
        const dir = parseFloat(slice.getAttribute('data-dir') || '1');
        slice.style.transform = `translateY(${yVal * 40 * dir}px)`;
      }
    });
  };

  const handleMouseLeave = () => {
    slicesRef.current.forEach((slice) => {
      if (slice) slice.style.transform = `translateY(0)`;
    });
  };

  const slices = [
    { dir: 1.5, pos: '5%' },
    { dir: -1.2, pos: '27%' },
    { dir: 2, pos: '50%' },
    { dir: -1.5, pos: '73%' },
    { dir: 1, pos: '95%' }
  ];

  return (
    <section id="fracture" className="relative h-screen w-full bg-black overflow-hidden flex items-center justify-center border-t border-[#222]">
      <div className="absolute top-8 left-8 z-20 font-mono text-[10px] tracking-[0.1em] text-neutral-500 border border-[#222] px-2 py-1 rounded bg-black/50 backdrop-blur">
        [ 02. ABOUT ME ]
      </div>

      <div 
        ref={containerRef}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        className="flex w-[80%] h-[70vh] gap-1 cursor-crosshair"
      >
        {slices.map((item, i) => (
          <div 
            key={i}
            ref={(el) => (slicesRef.current[i] = el)}
            className="flex-1 relative overflow-hidden h-full bg-[#111] transition-transform duration-100 ease-linear"
            data-dir={item.dir}
          >
            <div 
              className="absolute top-[-20%] left-0 w-full h-[140%] bg-cover bg-center transition-[filter] duration-500 grayscale hover:grayscale-0"
              style={{
                backgroundImage: 'url("https://picsum.photos/1200/1600?grayscale")',
                backgroundPosition: `${item.pos} 50%`
              }}
            />
          </div>
        ))}
      </div>
      
      <div className="absolute bottom-10 right-10 text-right max-w-md pointer-events-none mix-blend-difference">
        <p className="text-white text-lg font-bold leading-tight uppercase">
          "I deconstruct complex problems<br />to build seamless experiences."
        </p>
      </div>
    </section>
  );
};
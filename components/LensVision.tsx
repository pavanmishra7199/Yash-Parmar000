import React, { useRef } from 'react';

export const LensVision: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!sectionRef.current) return;
    const rect = sectionRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    
    sectionRef.current.style.setProperty('--lens-x', `${x}px`);
    sectionRef.current.style.setProperty('--lens-y', `${y}px`);
  };

  return (
    <section 
        id="lens" 
        ref={sectionRef}
        onMouseMove={handleMouseMove}
        className="relative h-screen w-full bg-black overflow-hidden border-t border-[#222] cursor-none"
        style={{ 
            // @ts-ignore
            '--lens-x': '50%', 
            '--lens-y': '50%' 
        }}
    >
        <div className="absolute top-8 left-8 z-50 font-mono text-[10px] tracking-[0.1em] text-white border border-white/50 px-2 py-1 rounded bg-black/50 backdrop-blur">
            [ 07. FUTURE VISION ]
        </div>

        {/* LAYER 1: BLURRED (Base) */}
        <div 
            className="absolute inset-0 bg-cover bg-center transition-opacity"
            style={{ 
                backgroundImage: `url('https://picsum.photos/1920/1080?grayscale&blur=5')`,
                filter: 'grayscale(100%) blur(8px) brightness(0.4)'
            }} 
        />
        
        {/* Layer 1 Text UI - Dimmed */}
        <div className="absolute inset-0 grid grid-cols-[1fr_2fr_1fr] gap-16 p-16 items-center pointer-events-none opacity-50">
            <div className="flex flex-col justify-between h-full border-r border-white/5 pr-10">
                 <div className="space-y-4 font-mono text-neutral-600">
                    <div className="flex justify-between border-b border-[#222] py-2"><span>SYS_ID</span><span>--</span></div>
                    <div className="flex justify-between border-b border-[#222] py-2"><span>STATUS</span><span>OFFLINE</span></div>
                </div>
            </div>
            <div className="flex justify-center"><h2 className="text-[8vw] font-black text-[#333]">VISION</h2></div>
            <div className="flex flex-col justify-end h-full border-l border-white/5 pl-10 text-right">
                <div className="font-mono text-neutral-600 border-b border-[#222] py-2"><span>ENCRYPTED</span></div>
            </div>
        </div>

        {/* LAYER 2: FOCUSED (Revealed) */}
        <div 
            className="absolute inset-0 bg-cover bg-center"
            style={{ 
                backgroundImage: `url('https://picsum.photos/1920/1080?grayscale')`,
                maskImage: 'radial-gradient(250px circle at var(--lens-x) var(--lens-y), black 0%, transparent 100%)',
                WebkitMaskImage: 'radial-gradient(250px circle at var(--lens-x) var(--lens-y), black 0%, transparent 100%)'
            }} 
        />

         {/* Layer 2 Text UI - Bright */}
         <div 
            className="absolute inset-0 grid grid-cols-[1fr_2fr_1fr] gap-16 p-16 items-center pointer-events-none z-10"
            style={{ 
                maskImage: 'radial-gradient(250px circle at var(--lens-x) var(--lens-y), black 0%, transparent 100%)',
                WebkitMaskImage: 'radial-gradient(250px circle at var(--lens-x) var(--lens-y), black 0%, transparent 100%)'
            }} 
        >
            <div className="flex flex-col justify-between h-full border-r border-white/20 pr-10">
                 <div className="space-y-4 font-mono text-cyan-400 font-bold">
                    <div className="flex justify-between border-b border-white/20 py-2"><span className="text-white">SYS_ID</span><span>YP-2024</span></div>
                    <div className="flex justify-between border-b border-white/20 py-2"><span className="text-white">STATUS</span><span className="text-emerald-400">ONLINE</span></div>
                </div>
            </div>
            <div className="flex justify-center">
                <h2 className="text-[8vw] font-black text-white drop-shadow-[0_0_30px_rgba(255,255,255,0.5)]">VISION</h2>
            </div>
            <div className="flex flex-col justify-end h-full border-l border-white/20 pl-10 text-right">
                <div className="font-mono text-cyan-400 font-bold border-b border-white/20 py-2">
                    <span className="text-white mr-4">NEXT_STEP</span><span>SCALABILITY</span>
                </div>
            </div>
        </div>

        {/* HUD Ring Follower */}
        <div 
            className="absolute w-[250px] h-[250px] border border-white/50 rounded-full z-50 pointer-events-none animate-[spin_10s_linear_infinite]"
            style={{ 
                top: 'calc(var(--lens-y) - 125px)',
                left: 'calc(var(--lens-x) - 125px)',
            }}
        />

    </section>
  );
};
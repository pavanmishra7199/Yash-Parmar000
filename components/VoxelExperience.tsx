import React, { useEffect, useRef } from 'react';

export const VoxelExperience: React.FC = () => {
  const stageRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!stageRef.current) return;
    const stage = stageRef.current;
    
    // Clean previous
    stage.innerHTML = '';

    // Create Voxels
    const voxels: HTMLDivElement[] = [];
    for(let i=0; i<100; i++) {
        const v = document.createElement('div');
        // Base styles for voxel
        v.className = 'w-full h-full bg-[#111] border border-[#222] relative transition-all duration-200 ease-out';
        
        // Pseudo-element shadow/depth (simulated via JS/CSS injection in style tag if complex, or standard CSS)
        // Since we can't easily inject pseudo styles via JS element creation without a class, 
        // we rely on the tailwind arbitrary groups or inline styles.
        // We'll use a child div for the 3D depth effect.
        const shadow = document.createElement('div');
        shadow.className = 'absolute -bottom-[10px] left-0 w-full h-[10px] bg-black origin-bottom skew-x-[45deg] opacity-0 transition-opacity duration-200';
        v.appendChild(shadow);
        
        stage.appendChild(v);
        voxels.push(v);
    }

    const handleMouseMove = (e: MouseEvent) => {
        const rect = stage.getBoundingClientRect();
        const mx = e.clientX; 
        const my = e.clientY;

        voxels.forEach(v => {
            const r = v.getBoundingClientRect();
            // Center of voxel
            const cx = r.left + r.width/2;
            const cy = r.top + r.height/2;
            
            const d = Math.sqrt(Math.pow(mx - cx, 2) + Math.pow(my - cy, 2));

            if(d < 120) {
                // Lift effect
                v.style.transform = 'translateZ(60px)';
                v.style.background = 'linear-gradient(135deg, #06b6d4, #3b82f6)';
                v.style.boxShadow = '0 0 30px rgba(6, 182, 212, 0.4)';
                v.style.zIndex = '50';
                v.style.borderColor = 'transparent';
                
                // Show shadow child
                const shadow = v.firstElementChild as HTMLElement;
                if(shadow) shadow.style.opacity = '1';
                
                // Reset
                setTimeout(() => {
                    v.style.transform = '';
                    v.style.background = '';
                    v.style.boxShadow = '';
                    v.style.zIndex = '';
                    v.style.borderColor = '';
                    if(shadow) shadow.style.opacity = '0';
                }, 300);
            }
        });
    };

    document.addEventListener('mousemove', handleMouseMove);

    return () => {
        document.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <section id="voxel" className="relative h-screen w-full bg-[#050505] flex items-center justify-center border-t border-[#222] overflow-hidden" style={{ perspective: '1000px' }}>
       <div className="absolute top-8 left-8 z-20 font-mono text-[10px] tracking-[0.1em] text-neutral-500 border border-[#222] px-2 py-1 rounded bg-black/50 backdrop-blur">
        [ 06. EXPERIENCE TERRAIN ]
      </div>

      <div 
        ref={stageRef}
        className="grid grid-cols-10 gap-1 w-[600px] h-[600px]"
        style={{ transformStyle: 'preserve-3d', transform: 'rotateX(60deg) rotateZ(45deg)' }}
      />
      
      <div className="absolute bottom-12 w-full text-center pointer-events-none">
        <p className="text-neutral-500 text-[10px] font-mono uppercase">Hover to elevate data points</p>
      </div>
    </section>
  );
};
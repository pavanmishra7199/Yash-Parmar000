import React, { useRef } from 'react';
import { Code, Layout, Database, Terminal, Cpu, Globe } from 'lucide-react';

interface SkillCardProps {
  title: string;
  desc: string;
  icon: React.ReactNode;
}

const SkillCard: React.FC<SkillCardProps> = ({ title, desc, icon }) => {
  const cardRef = useRef<HTMLDivElement>(null);

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    cardRef.current.style.setProperty('--mouse-x', `${x}px`);
    cardRef.current.style.setProperty('--mouse-y', `${y}px`);
  };

  return (
    <div 
      ref={cardRef}
      onMouseMove={handleMouseMove}
      className="group relative h-[320px] bg-[rgba(255,255,255,0.02)] border border-[rgba(255,255,255,0.05)] rounded-2xl overflow-hidden"
      style={{
        // @ts-ignore: Custom CSS variable for spotlight effect
        '--mouse-x': '-100px',
        '--mouse-y': '-100px',
      }}
    >
      {/* Background Grid Pattern */}
      <div 
        className="absolute inset-0 opacity-20 pointer-events-none" 
        style={{
          backgroundImage: `linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px)`,
          backgroundSize: '20px 20px'
        }}
      />
      
      {/* Inner Spotlight Gradient */}
      <div 
        className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none z-10"
        style={{
          background: `radial-gradient(800px circle at var(--mouse-x) var(--mouse-y), rgba(255, 255, 255, 0.06), transparent 40%)`
        }}
      />
      
      {/* Border Glow */}
      <div 
        className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none z-20"
        style={{
          background: `radial-gradient(600px circle at var(--mouse-x) var(--mouse-y), rgba(255, 255, 255, 0.4), transparent 40%)`,
          maskImage: 'linear-gradient(#fff 0 0)',
          WebkitMaskImage: 'linear-gradient(#fff 0 0)',
          WebkitMaskComposite: 'xor',
          maskComposite: 'exclude',
          padding: '1px'
        }}
      />

      {/* Content */}
      <div className="relative z-30 h-full flex flex-col justify-end p-8">
        <div className="mb-auto text-white/20 group-hover:text-white/80 transition-colors duration-300">
            {icon}
        </div>
        <h3 className="text-2xl font-bold mb-2 text-white">{title}</h3>
        <p className="text-neutral-400 text-sm leading-relaxed">{desc}</p>
      </div>
    </div>
  );
};

export const SpotlightSkills: React.FC = () => {
  return (
    <section id="spotlight" className="relative py-32 bg-[#050505] border-t border-[#222]">
       <div className="absolute top-8 left-8 z-20 font-mono text-[10px] tracking-[0.1em] text-neutral-500 border border-[#222] px-2 py-1 rounded bg-black/50 backdrop-blur">
        [ 04. TECHNICAL ARSENAL ]
      </div>

      <div className="max-w-7xl mx-auto px-6">
        <div className="mb-16">
          <h2 className="text-5xl font-bold tracking-tighter text-white">ENGINEERING<br/>CAPABILITIES</h2>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <SkillCard 
            title="Frontend Architecture" 
            desc="React 18+, TypeScript, and Next.js. Building scalable, type-safe SPAs with complex state management."
            icon={<Layout size={32} />}
          />
          <SkillCard 
            title="Creative Coding" 
            desc="WebGL, Three.js, and Canvas API. Creating immersive, interactive experiences that push browser limits."
            icon={<Code size={32} />}
          />
          <SkillCard 
            title="Backend Systems" 
            desc="Node.js, PostgreSQL, and Serverless Edge functions. Robust API design and database optimization."
            icon={<Database size={32} />}
          />
           <SkillCard 
            title="DevOps & CI/CD" 
            desc="Docker, AWS, and automated pipelines. Ensuring reliable delivery and high availability."
            icon={<Terminal size={32} />}
          />
          <SkillCard 
            title="Performance" 
            desc="Core Web Vitals optimization, bundle analysis, and lazy loading strategies for sub-second loads."
            icon={<Cpu size={32} />}
          />
          <SkillCard 
            title="Global Scale" 
            desc="Internationalization, CDN caching strategies, and edge computing for worldwide low latency."
            icon={<Globe size={32} />}
          />
        </div>
      </div>
    </section>
  );
};
import React, { useEffect, useRef } from 'react';

export const VelocityHero: React.FC = () => {
  const textRef1 = useRef<HTMLHeadingElement>(null);
  const textRef2 = useRef<HTMLHeadingElement>(null);
  const requestRef = useRef<number>();
  const currentScrollRef = useRef(0);

  const animate = () => {
    const targetScroll = window.scrollY;
    // Linear interpolation for smooth lag
    currentScrollRef.current += (targetScroll - currentScrollRef.current) * 0.1;
    
    // Calculate skew based on velocity (difference between target and current)
    const velocity = targetScroll - currentScrollRef.current;
    const skew = Math.min(Math.max(velocity * 0.15, -10), 10);

    if (textRef1.current) {
      textRef1.current.style.transform = `skewX(${skew}deg)`;
    }
    if (textRef2.current) {
      textRef2.current.style.transform = `skewX(${-skew}deg)`;
    }

    requestRef.current = requestAnimationFrame(animate);
  };

  useEffect(() => {
    requestRef.current = requestAnimationFrame(animate);
    return () => {
      if (requestRef.current) cancelAnimationFrame(requestRef.current);
    };
  }, []);

  return (
    <section id="velocity" className="h-screen flex flex-col justify-center items-center relative overflow-hidden border-b border-white/5">
      <div className="absolute top-32 text-center">
        <span className="text-[10px] font-mono text-neutral-500 uppercase tracking-[0.2em]">[ SCROLL TO DEFORM ]</span>
      </div>
      <div className="text-center space-y-4 select-none">
        <h1 
          ref={textRef1}
          className="text-[12vw] font-black leading-[0.8] tracking-tighter text-transparent bg-clip-text bg-gradient-to-b from-white to-neutral-600 will-change-transform"
        >
          YASH
        </h1>
        <h1 
          ref={textRef2}
          className="text-[12vw] font-black leading-[0.8] tracking-tighter text-transparent bg-clip-text bg-gradient-to-b from-neutral-600 to-neutral-900 will-change-transform"
        >
          PARMAR
        </h1>
      </div>
      <div className="absolute bottom-12 text-center">
        <span className="text-[10px] font-mono text-neutral-500 uppercase tracking-[0.2em]">CREATIVE DEVELOPER & UI ENGINEER</span>
      </div>
    </section>
  );
};
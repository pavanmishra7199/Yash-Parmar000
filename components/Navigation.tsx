import React from 'react';

export const Navigation: React.FC = () => {
  const scrollTo = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav className="fixed top-0 w-full z-50 px-8 py-6 flex justify-between items-center bg-black/50 backdrop-blur-md border-b border-white/5">
      <div className="font-bold text-xl tracking-tighter text-white">YASH PARMAR</div>
      <div className="hidden md:flex gap-6 uppercase text-[10px] font-bold text-neutral-500 tracking-widest">
        {[
          { id: 'velocity', label: '01. Intro' },
          { id: 'fracture', label: '02. About' },
          { id: 'liquid', label: '03. Work' },
          { id: 'spotlight', label: '04. Skills' },
          { id: 'pixel', label: '05. Connect' },
          { id: 'lens', label: '06. Vision' },
        ].map((item) => (
          <button 
            key={item.id} 
            onClick={() => scrollTo(item.id)}
            className="hover:text-white transition-colors uppercase"
          >
            {item.label}
          </button>
        ))}
      </div>
      <button 
        onClick={() => window.open('mailto:hello@yashparmar.dev')}
        className="text-[10px] font-bold border border-white/20 px-4 py-2 rounded hover:bg-white hover:text-black transition-colors tracking-widest uppercase"
      >
        Contact
      </button>
    </nav>
  );
};
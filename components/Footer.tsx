import React from 'react';

export const Footer: React.FC = () => {
  return (
    <footer className="fixed bottom-0 left-0 w-full h-[50vh] flex flex-col justify-center items-center bg-black text-white z-0">
      <h2 className="text-[15vw] font-bold leading-none tracking-tighter text-neutral-800 select-none">YASH</h2>
      <div className="mt-8 text-neutral-600 text-[10px] font-mono uppercase tracking-widest flex gap-8">
        <a href="#" className="hover:text-white transition-colors">Github</a>
        <a href="#" className="hover:text-white transition-colors">LinkedIn</a>
        <a href="#" className="hover:text-white transition-colors">Twitter</a>
        <span>© 2024 YASH PARMAR</span>
      </div>
    </footer>
  );
};
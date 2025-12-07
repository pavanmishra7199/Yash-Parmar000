import React from 'react';
import { Navigation } from './components/Navigation';
import { VelocityHero } from './components/VelocityHero';
import { FractureAbout } from './components/FractureAbout';
import { LiquidProject } from './components/LiquidProject';
import { SpotlightSkills } from './components/SpotlightSkills';
import { PixelContact } from './components/PixelContact';
import { VoxelExperience } from './components/VoxelExperience';
import { LensVision } from './components/LensVision';
import { Footer } from './components/Footer';

function App() {
  return (
    <div className="antialiased bg-[#050505] min-h-screen">
      <Navigation />
      
      {/* Main Content Wrapper - z-10 and background color needed to cover fixed footer */}
      <main className="relative z-10 bg-[#050505] mb-[50vh] shadow-[0_50px_100px_rgba(0,0,0,1)]">
        <VelocityHero />
        <FractureAbout />
        <LiquidProject />
        <SpotlightSkills />
        <PixelContact />
        <VoxelExperience />
        <LensVision />
      </main>

      <Footer />
    </div>
  );
}

export default App;
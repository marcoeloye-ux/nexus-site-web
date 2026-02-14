import React from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { IronTriangle } from './components/IronTriangle';
import { StreamDev } from './components/StreamDev';
import { Roadmap } from './components/Roadmap';
import { Testimonials } from './components/Testimonials';
import { LeadMagnet } from './components/LeadMagnet';
import { Footer } from './components/Footer';

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-nexusBlack text-nexusWhite selection:bg-nexusLime selection:text-nexusBlack overflow-x-hidden font-sans">
      {/* Global Glow */}
      <div className="fixed inset-0 pointer-events-none bg-hero-glow z-0"></div>

      <div className="relative z-10 flex flex-col">
        <Navbar />
        <main className="flex-grow space-y-24 pb-24">
          <Hero />
          <IronTriangle />
          <StreamDev />
          <Roadmap />
          <Testimonials />
          <LeadMagnet />
        </main>
        <Footer />
      </div>
    </div>
  );
};

export default App;
import React from 'react';
import { Analytics } from '@vercel/analytics/react';
import { SpeedInsights } from '@vercel/speed-insights/react';
import Header from './components/Header';
import Footer from './components/Footer';
import ParticleBackground from './components/ParticleBackground';
import Hero from './sections/Hero';
import About from './sections/About';
import Services from './sections/Services';
import Technologies from './sections/Technologies';
import Clients from './sections/Clients';
import Contact from './sections/Contact';



const App = () => {
  return (

    <div className="min-h-screen bg-slate-950 text-slate-50 relative overflow-hidden">
      <div className="relative z-10">

        <Header />
        <main className="mx-auto max-w-6xl px-4 relative">
          <ParticleBackground />
          <Hero />
        </main>
        <About />
        <main className="mx-auto max-w-6xl px-4">
          <Services />
          <Technologies />
          <Clients />
          <Contact />
        </main>
        <Footer />
        <Analytics />
        <SpeedInsights />
      </div>
    </div>
  );
};

export default App;

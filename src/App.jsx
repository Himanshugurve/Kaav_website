import React from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import ParticleBackground from './components/ParticleBackground';
import Hero from './sections/Hero';
import About from './sections/About';
import Services from './sections/Services';
import Technologies from './sections/Technologies';
import Clients from './sections/Clients';
import Contact from './sections/Contact';
import CustomCursor from './components/CustomCursor';


const App = () => {
  return (
    
    <div className="min-h-screen bg-slate-950 text-slate-50 relative overflow-hidden">
      <div className="relative z-10">

        <CustomCursor />
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
      </div>
    </div>
  );
};

export default App;

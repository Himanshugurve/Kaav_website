import React, { useEffect, useRef } from 'react';
import { Star, TrendingUp, Shield, Zap } from 'lucide-react';

const Clients = () => {
  const scrollRef = useRef(null);

  // Sample clients data - replace with your actual data
  const clients = [
    'TechCorp Solutions',
    'Global Industries',
    'Innovation Labs',
    'Digital Ventures',
    'Future Systems',
    'Smart Enterprises',
    'Cloud Networks',
    'Data Dynamics',
    'Quantum Tech',
    'NextGen Solutions',
    'Alpha Systems',
    'Beta Corporation'
  ];

  const stats = [
    { icon: Star, value: '50+', label: 'Happy Clients' },
    { icon: TrendingUp, value: '98%', label: 'Success Rate' },
    { icon: Shield, value: '5+', label: 'Years Experience' },
    { icon: Zap, value: '200+', label: 'Projects Delivered' }
  ];

  useEffect(() => {
    const scrollContainer = scrollRef.current;
    if (!scrollContainer) return;

    let scrollPosition = 0;
    const scrollSpeed = 0.5;

    const scroll = () => {
      scrollPosition += scrollSpeed;
      
      if (scrollPosition >= scrollContainer.scrollWidth / 2) {
        scrollPosition = 0;
      }
      
      scrollContainer.scrollLeft = scrollPosition;
    };

    const intervalId = setInterval(scroll, 20);

    return () => clearInterval(intervalId);
  }, []);

  // Duplicate clients for seamless loop
  const duplicatedClients = [...clients, ...clients, ...clients];

  return (
    <section id="clients" className="relative scroll-mt-24 overflow-hidden bg-gradient-to-b from-slate-950 via-indigo-950/20 to-slate-950 py-20">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute left-1/4 top-0 h-96 w-96 rounded-full bg-indigo-600/10 blur-3xl" />
        <div className="absolute right-1/4 bottom-0 h-96 w-96 rounded-full bg-purple-600/10 blur-3xl" />
      </div>

      <div className="relative">
        {/* Header Section */}
        <div className="mx-auto mb-16 max-w-7xl px-6 text-center lg:px-8">
          <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-indigo-500/30 bg-indigo-500/10 px-4 py-1.5 backdrop-blur-sm">
            <Star className="h-4 w-4 text-indigo-400" />
            <span className="text-sm font-medium text-indigo-300">Trusted Worldwide</span>
          </div>
          <h2 className="mb-4 text-4xl font-bold text-white lg:text-5xl">
            Powering Success for
            <span className="bg-gradient-to-r from-indigo-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent"> Industry Leaders</span>
          </h2>
          <p className="mx-auto max-w-2xl text-lg text-slate-400">
            Join hundreds of companies that trust us to deliver innovative solutions and drive their digital transformation
          </p>
        </div>

        {/* Stats Grid */}
        {/* Horizontal Scrolling Clients */}
        <div className="relative">
          {/* Gradient Overlays */}
          <div className="pointer-events-none absolute left-0 top-0 z-10 h-full w-32 bg-gradient-to-r from-slate-950 via-slate-950/50 to-transparent" />
          <div className="pointer-events-none absolute right-0 top-0 z-10 h-full w-32 bg-gradient-to-l from-slate-950 via-slate-950/50 to-transparent" />

          {/* Scrolling Container */}
          <div
            ref={scrollRef}
            className="flex gap-6 overflow-x-hidden px-6 pb-4"
            style={{ scrollBehavior: 'auto' }}
          >
            {duplicatedClients.map((client, index) => (
              <div
                key={index}
                className="group relative flex-shrink-0"
                style={{ width: '280px' }}
              >
                <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-slate-900/60 to-slate-800/40 p-8 backdrop-blur-sm transition-all duration-300 hover:border-indigo-500/50 hover:bg-slate-900/80">
                  {/* Hover Glow Effect */}
                  <div className="absolute -right-12 -top-12 h-32 w-32 rounded-full bg-indigo-500/20 blur-2xl opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

                  {/* Content */}
                  <div className="relative">
                    {/* Logo Placeholder */}
                    <div className="mb-4 flex h-12 items-center justify-center rounded-xl bg-gradient-to-br from-indigo-500/10 to-purple-500/10 ring-1 ring-white/10">
                      <div className="text-2xl font-bold bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent">
                        {client.split(' ').map(word => word[0]).join('')}
                      </div>
                    </div>

                    {/* Company Name */}
                    <h3 className="mb-2 text-lg font-semibold text-white transition-colors group-hover:text-indigo-300">
                      {client}
                    </h3>

                    {/* Rating */}
                    <div className="flex items-center gap-1">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          className="h-4 w-4 fill-yellow-500 text-yellow-500"
                        />
                      ))}
                      <span className="ml-2 text-xs text-slate-400">5.0</span>
                    </div>

                    {/* Divider */}
                    <div className="my-4 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />

                    {/* Quote/Testimonial */}
                    <p className="text-sm italic text-slate-400">
                      "Outstanding service and exceptional results"
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>


        {/* Bottom CTA */}
        <div className="mx-auto mt-16 max-w-4xl px-6 text-center lg:px-8">
        
            <h3 className="mb-4 text-2xl font-bold text-white lg:text-3xl">
              Ready to Join Our Success Stories?
            </h3>
            <p className="mb-6 text-slate-300">
              Let's transform your business together with cutting-edge solutions
            </p>
            <button
              onClick={() => {
                // Scroll to contact section
                const contactSection = document.querySelector('#contact');
                if (contactSection) {
                  contactSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
                  
                  // Focus on name input after scroll completes
                  setTimeout(() => {
                    const nameInput = document.querySelector('input[name="name"]');
                    if (nameInput) {
                      nameInput.focus();
                    }
                  }, 800); // Wait for smooth scroll to complete
                }
              }}
              className="group relative inline-flex items-center gap-2 overflow-hidden rounded-xl bg-gradient-to-r from-indigo-600 via-purple-600 to-cyan-600 px-8 py-4 font-semibold text-white transition-all duration-300 hover:shadow-lg hover:shadow-indigo-500/50"
            >
              <span className="relative z-10">Start Your Project</span>
              <Zap className="relative z-10 h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
              <div className="absolute inset-0 bg-gradient-to-r from-indigo-700 via-purple-700 to-cyan-700 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
            </button>
          </div>
        </div>
    
    </section>
  );
};

export default Clients;

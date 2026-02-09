import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 border-b border-white/5 bg-slate-950/80 backdrop-blur">
      {/* Fixed-height header container */}
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4">

        {/* Logo (inline with content, slightly larger but constrained to header height) */}
        <a href="#hero" className="flex h-full items-center cursor-pointer">
          <img
            src="public/Images/Kaavv.png"

            alt="Kavv Logos"
            className="h-12 w-auto max-h-full object-contain transform scale-110 hover:scale-125 transition-transform duration-200"
          />
        </a>

        {/* Desktop Nav */}
        <nav className="hidden items-center gap-8 text-sm text-slate-200 md:flex">
          {['about', 'services', 'technologies', 'clients', 'contact'].map(
            (item) => (
              <a
                key={item}
                href={`#${item}`}
                className="transition-colors duration-200 hover:text-indigo-300"
              >
                {item.charAt(0).toUpperCase() + item.slice(1)}
              </a>
            )
          )}
        </nav>

        {/* Desktop CTA */}
        <div className="hidden md:block">
          <a
            href="#contact"
            className="rounded-full bg-indigo-500 px-4 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-white shadow-lg shadow-indigo-500/30 transition hover:bg-indigo-400"
          >
            Get Started
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden flex h-10 w-10 items-center justify-center rounded-lg border border-white/10 text-slate-200"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <span className="sr-only">Toggle menu</span>
          <div className="space-y-1.5">
            <span
              className={`block h-0.5 w-6 bg-white transition ${menuOpen ? 'translate-y-2 rotate-45' : ''
                }`}
            />
            <span
              className={`block h-0.5 w-6 bg-white transition ${menuOpen ? 'opacity-0' : ''
                }`}
            />
            <span
              className={`block h-0.5 w-6 bg-white transition ${menuOpen ? '-translate-y-2 -rotate-45' : ''
                }`}
            />
          </div>
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.35, ease: 'easeInOut' }}
            className="md:hidden overflow-hidden border-t border-white/5 bg-slate-950"
          >
            <motion.nav
              initial="hidden"
              animate="visible"
              variants={{
                hidden: { opacity: 0 },
                visible: {
                  opacity: 1,
                  transition: { staggerChildren: 0.08 },
                },
              }}
              className="flex flex-col gap-6 px-6 py-8 text-slate-200"
            >
              {['about', 'services', 'technologies', 'clients', 'contact'].map(
                (item) => (
                  <motion.a
                    key={item}
                    href={`#${item}`}
                    variants={{
                      hidden: { y: 20, opacity: 0 },
                      visible: { y: 0, opacity: 1 },
                    }}
                    onClick={() => setMenuOpen(false)}
                    className="text-left text-base font-medium transition hover:text-indigo-300"
                  >
                    {item.charAt(0).toUpperCase() + item.slice(1)}
                  </motion.a>
                )
              )}
            </motion.nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Header;
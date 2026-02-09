import React from 'react';
import { motion } from 'framer-motion';

/* Animation Variants */
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: 'easeOut',
    },
  },
};

const Hero = () => {
  return (
    <section
      id="hero"
      className="
        scroll-mt-24
        flex items-center justify-center
        min-h-[70vh] sm:min-h-[80vh] lg:min-h-[85vh]
        py-16 sm:py-20 lg:py-24
      "
    >
      <motion.div
        className="mx-auto max-w-3xl text-center space-y-6 sm:space-y-7"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.p
          variants={itemVariants}
          className="text-xs font-semibold uppercase tracking-[0.3em] text-indigo-300"
        >
          IT Services &amp; Consulting
        </motion.p>

        <motion.h1
          variants={itemVariants}
          className="text-4xl font-semibold tracking-tight text-slate-50 sm:text-5xl lg:text-6xl"
        >
          Transforming Ideas{' '}
          <span className="text-[#255398]">Into Digital Reality</span>
        </motion.h1>

        <motion.p
          variants={itemVariants}
          className="mx-auto max-w-xl text-sm text-slate-300 sm:text-base"
        >
          We deliver cutting-edge IT solutions that drive business growth
          and innovation. Our expert team brings your vision to life with
          precision and excellence.
        </motion.p>

        <motion.div
          variants={itemVariants}
          className="flex flex-wrap justify-center gap-4 pt-2"
        >
          <a
            href="#contact"
            className="rounded-full bg-indigo-500 px-6 py-2.5 text-xs font-semibold uppercase tracking-[0.25em] text-white shadow-lg shadow-indigo-500/40 transition hover:bg-indigo-400"
          >
            Get Started
          </a>
          <a
            href="#services"
            className="rounded-full border border-white/10 bg-white/5 px-6 py-2.5 text-xs font-semibold uppercase tracking-[0.25em] text-slate-100 transition hover:border-indigo-400/60 hover:bg-indigo-950/40"
          >
            Learn More
          </a>
        </motion.div>

        <motion.div
          variants={itemVariants}
          className="grid gap-6 pt-8 text-xs text-slate-300 sm:grid-cols-3 sm:text-sm"
        >
          {/* Optional content */}
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;

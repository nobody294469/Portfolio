import React, { useRef } from 'react';
import { motion } from 'motion/react';
import { ArrowDown } from 'lucide-react';
import HeroCursorTrail from './HeroCursorTrail';
import { PERSONAL_INFO } from '../data/portfolioData';

export default function Hero() {
  const heroRef = useRef(null);

  const scrollToWork = () => {
    const el = document.getElementById('work');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      ref={heroRef}
      id="hero"
      className="relative min-h-[92vh] sm:min-h-screen bg-[#F3F2EC] text-[#121212] pt-28 sm:pt-36 pb-16 sm:pb-24 px-6 sm:px-10 flex flex-col justify-between overflow-hidden cursor-default select-none"
    >
      {/* Interactive Cursor Trail Layer with Tech Stack Badges */}
      <HeroCursorTrail containerRef={heroRef} />

      {/* Top Location / Sub-metadata bar */}
      <div className="max-w-7xl w-full mx-auto flex justify-end">
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-[11px] sm:text-xs font-mono tracking-wider text-neutral-500 uppercase"
        >
          {PERSONAL_INFO.locationMeta}
        </motion.div>
      </div>

      {/* Main Massive Editorial Title: "Engineering ideas into form." */}
      <div className="max-w-7xl w-full mx-auto my-auto py-12 sm:py-20">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-col"
        >
          <h1 className="font-display font-extrabold text-[2.75rem] sm:text-[5rem] md:text-[6rem] lg:text-[7rem] xl:text-[9rem] tracking-[-0.05em] leading-[0.86] text-[#121212]">
            <span className="block sm:whitespace-nowrap">Engineering</span>
            <span className="block sm:whitespace-nowrap">
              ideas into{' '}
              <span className="font-serif-italic font-normal italic tracking-[-0.03em] font-serif text-[#121212]">
                form.
              </span>
            </span>
          </h1>
        </motion.div>
      </div>

      {/* Bottom Subtitle & Down Arrow Button */}
      <div className="max-w-7xl w-full mx-auto flex flex-col sm:flex-row sm:items-end justify-between gap-8">
        <motion.p
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="max-w-md text-xs sm:text-sm font-sans text-neutral-600 leading-relaxed"
        >
          {PERSONAL_INFO.statusMessage}
        </motion.p>

        {/* Circular Down Arrow Button */}
        <motion.button
          id="hero-scroll-down-btn"
          type="button"
          onClick={scrollToWork}
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="w-12 h-12 rounded-full border border-black/20 flex items-center justify-center text-black hover:bg-black hover:text-white transition-all self-end sm:self-auto cursor-pointer group"
          aria-label="Scroll to selected work"
        >
          <ArrowDown className="w-4 h-4 group-hover:translate-y-0.5 transition-transform" />
        </motion.button>
      </div>
    </section>
  );
}

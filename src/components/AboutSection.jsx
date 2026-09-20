import React from 'react';
import { motion } from 'motion/react';
import { ArrowUpRight, Cpu, Eye, Code2 } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

export default function AboutSection() {
  const engineeringFocus = [
    {
      icon: <Cpu className="w-4 h-4 text-[#D4F82C]" />,
      title: 'Embedded & Hardware',
      desc: 'Microcontroller firmware, sensor telemetry, and hardware-to-cloud interfacing.',
    },
    {
      icon: <Eye className="w-4 h-4 text-[#D4F82C]" />,
      title: 'Machine Learning & Computer Vision',
      desc: 'Predictive models, visual pattern recognition, and intelligent systems built from real-world data.',
    },
    {
      icon: <Code2 className="w-4 h-4 text-[#D4F82C]" />,
      title: 'Full-Stack Software',
      desc: 'High-performance interactive web tools, algorithms, simulation systems, and APIs.',
    },
  ];

  return (
    <section
      id="about"
      className="py-20 sm:py-24 bg-[#121212] text-[#F3F2EC] px-6 sm:px-10 border-t border-white/[0.08]"
    >
      <div className="max-w-7xl mx-auto">
        {/* Section Label: 02 — ABOUT */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-[11px] sm:text-xs font-mono tracking-widest text-neutral-400 uppercase mb-8"
        >
          02 — ABOUT
        </motion.div>

        {/* Massive Headline: "Building with curiosity and care." */}
        <div className="mb-10 sm:mb-12">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="font-display font-extrabold text-5xl sm:text-7xl lg:text-8xl tracking-[-0.05em] leading-[0.9] text-white"
          >
            Building with <br />
            <span className="font-serif-italic font-normal italic text-white">
              curiosity
            </span>{' '}
            and <br />
            care.
          </motion.h2>
        </div>

        {/* Narrative Paragraphs & Connect CTA */}
        <div className="max-w-2xl">
          {/* Academic Pill Badges */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex flex-wrap items-center gap-2 mb-6 text-xs font-mono"
          >
            <span className="px-3 py-1 rounded-full bg-white/[0.08] border border-white/10 text-[#D4F82C] font-semibold">
              VIT Pune
            </span>
            <span className="px-3 py-1 rounded-full bg-white/[0.08] border border-white/10 text-neutral-300">
              B.Tech E&TC
            </span>
            <span className="px-3 py-1 rounded-full bg-white/[0.08] border border-white/10 text-neutral-400">
              Batch of 2028
            </span>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-base sm:text-lg text-neutral-200 font-sans leading-relaxed mb-5"
          >
            I'm <strong className="text-white font-semibold">{PERSONAL_INFO.name}</strong>, an engineering undergraduate at <strong className="text-white font-medium">{PERSONAL_INFO.college}</strong> pursuing <strong className="text-white font-medium">{PERSONAL_INFO.branch}</strong> ({PERSONAL_INFO.batch}).
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-base sm:text-lg text-neutral-300 font-sans leading-relaxed mb-8"
          >
            Bridging hardware principles, signal communication paradigms, and modern software engineering, I use this space to build and share interactive simulation engines, real-time distributed platforms, and machine learning models.
          </motion.p>

          {/* Let's connect ↗ */}
          <motion.a
            id="about-connect-link"
            href="#contact"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="inline-flex items-center gap-1 text-sm font-sans text-white hover:text-[#D4F82C] transition-colors group underline underline-offset-4 decoration-white/30 hover:decoration-[#D4F82C]"
          >
            <span>Let's connect</span>
            <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </motion.a>
        </div>

        {/* Engineering Highlights Grid */}
        <div className="mt-14 pt-8 border-t border-white/[0.08] grid grid-cols-1 md:grid-cols-3 gap-8">
          {engineeringFocus.map((item, idx) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="p-6 rounded-lg bg-white/[0.03] border border-white/[0.06] hover:border-white/[0.15] transition-all"
            >
              <div className="mb-4">{item.icon}</div>
              <h3 className="font-display font-semibold text-lg text-white mb-2">
                {item.title}
              </h3>
              <p className="text-xs text-neutral-400 leading-relaxed">
                {item.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

import React, { useState } from 'react';
import { motion } from 'motion/react';
import { ArrowUpRight, CheckCircle2 } from 'lucide-react';
import { PROJECTS } from '../data/portfolioData';
import ProjectModal from './ProjectModal';
import FifaForecastPreview from './project-previews/FifaForecastPreview';

export default function WorkSection() {
  const [selectedProject, setSelectedProject] = useState(null);

  return (
    <section
      id="work"
      className="py-24 sm:py-32 bg-[#F3F2EC] text-[#121212] px-6 sm:px-10 border-t border-black/[0.06]"
    >
      <div className="max-w-7xl mx-auto">
        {/* Section Number & Heading */}
        <div className="mb-16 sm:mb-20">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-[11px] sm:text-xs font-mono tracking-widest text-neutral-500 uppercase mb-6"
          >
            01 — SELECTED WORK
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="font-display font-extrabold text-5xl sm:text-7xl lg:text-8xl tracking-[-0.05em] leading-[0.9] text-[#121212] mb-6"
          >
            Ideas made <br />
            tangible.
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="max-w-xl text-xs sm:text-sm font-sans text-neutral-600 leading-relaxed"
          >
            A collection of engineering projects spanning operating systems simulations, real-time multiplayer systems, machine learning forecasting, and interactive web tools.
          </motion.p>
        </div>

        {/* Project Grid: 2-column top grid + 2-column bottom grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10">
          {/* Card 1: OS Teaching Platform */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            onClick={() => setSelectedProject(PROJECTS[0])}
            className="group cursor-pointer flex flex-col"
          >
            {/* Living UI Product Mockup Container */}
            <div className="relative aspect-video w-full overflow-hidden bg-[#0A1214] p-2.5 sm:p-4 rounded-xl border border-black/[0.12] transition-transform duration-500 group-hover:scale-[0.99] shadow-sm">
              <img
                src="/images/os-platform-preview.png"
                alt="OS Teaching Platform preview"
                className="w-full h-full object-contain rounded-xl"
              />

              {/* Badge Overlay */}
              <div className="absolute top-4 left-4 sm:top-5 sm:left-5 flex items-center gap-2 pointer-events-none">
                <span className="px-2.5 py-1 rounded-full text-[10px] font-mono bg-black/85 text-white backdrop-blur-md border border-white/10 shadow-lg">
                  Streamlit Platform
                </span>
                {PROJECTS[0].hasLive && (
                  <span className="px-2.5 py-1 rounded-full text-[10px] font-mono bg-[#D4F82C] text-black font-semibold shadow-lg">
                    Live Demo
                  </span>
                )}
              </div>
            </div>

            {/* Bottom Details Bar */}
            <div className="pt-4 pb-2 border-b border-black/[0.12] flex items-center justify-between">
              <div>
                <span className="block text-[10px] font-mono tracking-widest text-neutral-500 uppercase">
                  01 / ACADEMIC
                </span>
                <h3 className="font-display font-bold text-xl sm:text-2xl text-[#121212] group-hover:opacity-75 transition-opacity">
                  OS Teaching Platform
                </h3>
              </div>
              <ArrowUpRight className="w-5 h-5 text-black group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </div>
          </motion.div>

          {/* Card 2: IPL Auction Pro */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            onClick={() => setSelectedProject(PROJECTS[1])}
            className="group cursor-pointer flex flex-col"
          >
            {/* Living UI Product Mockup Container */}
            <div className="relative aspect-video w-full overflow-hidden bg-[#140E0D] p-2.5 sm:p-4 rounded-xl border border-black/[0.12] transition-transform duration-500 group-hover:scale-[0.99] shadow-sm">
              <img
                src="/images/ipl-auction-preview.png"
                alt="IPL Auction Pro preview"
                className="w-full h-full object-contain rounded-xl"
              />

              {/* Badge Overlay */}
              <div className="absolute top-4 left-4 sm:top-5 sm:left-5 flex items-center gap-2 pointer-events-none">
                <span className="px-2.5 py-1 rounded-full text-[10px] font-mono bg-black/85 text-white backdrop-blur-md border border-white/10 shadow-lg">
                  Multiplayer Live
                </span>
                <span className="px-2.5 py-1 rounded-full text-[10px] font-mono bg-[#D4F82C] text-black font-semibold shadow-lg">
                  Live on Render
                </span>
              </div>
            </div>

            {/* Bottom Details Bar */}
            <div className="pt-4 pb-2 border-b border-black/[0.12] flex items-center justify-between">
              <div>
                <span className="block text-[10px] font-mono tracking-widest text-neutral-500 uppercase">
                  02 / PERSONAL
                </span>
                <h3 className="font-display font-bold text-xl sm:text-2xl text-[#121212] group-hover:opacity-75 transition-opacity">
                  IPL Auction Pro
                </h3>
              </div>
              <ArrowUpRight className="w-5 h-5 text-black group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </div>
          </motion.div>

          {/* Card 3: GeoRush */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.15 }}
            onClick={() => setSelectedProject(PROJECTS[2])}
            className="group cursor-pointer flex flex-col"
          >
            {/* Living UI Product Mockup Container */}
            <div className="relative aspect-video w-full overflow-hidden bg-[#0A1420] p-2.5 sm:p-4 rounded-xl border border-black/[0.12] transition-transform duration-500 group-hover:scale-[0.99] shadow-sm">
              <img
                src="/images/georush-preview.png"
                alt="GeoRush preview"
                className="w-full h-full object-contain rounded-xl"
              />

              {/* Badge Overlay */}
              <div className="absolute top-4 left-4 sm:top-5 sm:left-5 flex items-center gap-2 pointer-events-none">
                <span className="px-2.5 py-1 rounded-full text-[10px] font-mono bg-black/85 text-white backdrop-blur-md border border-white/10 shadow-lg">
                  Real-Time Geography Game
                </span>
                <span className="px-2.5 py-1 rounded-full text-[10px] font-mono bg-[#D4F82C] text-black font-semibold shadow-lg">
                  Live on Cloud Run ↗
                </span>
              </div>
            </div>

            {/* Bottom Details Bar */}
            <div className="pt-4 pb-2 border-b border-black/[0.12] flex items-center justify-between">
              <div>
                <span className="block text-[10px] font-mono tracking-widest text-neutral-500 uppercase">
                  03 / PERSONAL
                </span>
                <h3 className="font-display font-bold text-xl sm:text-2xl text-[#121212] group-hover:opacity-75 transition-opacity">
                  GeoRush
                </h3>
              </div>
              <ArrowUpRight className="w-5 h-5 text-black group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </div>
          </motion.div>

          {/* Card 4: FIFA WC 2026 Forecast (Machine Learning Engine) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            onClick={() => setSelectedProject(PROJECTS[3])}
            className="group cursor-pointer flex flex-col"
          >
            {/* Living UI Product Mockup Container */}
            <div className="relative aspect-video w-full overflow-hidden bg-[#101418] p-2.5 sm:p-4 rounded-xl border border-black/[0.12] transition-transform duration-500 group-hover:scale-[0.99] shadow-sm flex items-center justify-center">
              {PROJECTS[3].image && (
                <img
                  id="fifa-screenshot-img"
                  src={PROJECTS[3].image}
                  alt="FIFA WC Forecast preview"
                  onError={(e) => {
                    e.currentTarget.style.display = 'none';
                    const fallback = document.getElementById('fifa-component-fallback');
                    if (fallback) fallback.style.display = 'block';
                  }}
                  className="w-full h-full object-contain rounded-xl"
                />
              )}
              <div
                id="fifa-component-fallback"
                className={`w-full h-full ${PROJECTS[3].image ? 'hidden' : 'block'}`}
              >
                <FifaForecastPreview />
              </div>

              {/* Badge Overlay */}
              <div className="absolute top-4 left-4 sm:top-5 sm:left-5 flex items-center gap-2 pointer-events-none">
                <span className="px-2.5 py-1 rounded-full text-[10px] font-mono bg-black/85 text-white backdrop-blur-md border border-white/10 shadow-lg">
                  ML Outcome Forecast
                </span>
                <span className="px-2.5 py-1 rounded-full text-[10px] font-mono bg-[#D4F82C] text-black font-semibold flex items-center gap-1 shadow-lg">
                  <CheckCircle2 className="w-3 h-3" />
                  <span>Verified Prediction</span>
                </span>
              </div>
            </div>

            {/* Bottom Details Bar */}
            <div className="pt-4 pb-2 border-b border-black/[0.12] flex items-center justify-between">
              <div>
                <span className="block text-[10px] font-mono tracking-widest text-neutral-500 uppercase">
                  04 / PERSONAL
                </span>
                <h3 className="font-display font-bold text-xl sm:text-2xl text-[#121212] group-hover:opacity-75 transition-opacity">
                  FIFA WC Forecast
                </h3>
              </div>
              <ArrowUpRight className="w-5 h-5 text-black group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </div>
          </motion.div>
        </div>
      </div>

      {/* Interactive Case Study Modal */}
      {selectedProject && (
        <ProjectModal
          project={selectedProject}
          onClose={() => setSelectedProject(null)}
        />
      )}
    </section>
  );
}

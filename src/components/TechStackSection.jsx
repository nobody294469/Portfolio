import React, { useState } from 'react';
import { motion } from 'motion/react';
import { TOOLKIT_DATA } from '../data/portfolioData';
import { getSkillLogo } from './TechLogos';

export default function TechStackSection() {
  const [hoveredSkill, setHoveredSkill] = useState(null);

  return (
    <section
      id="toolkit"
      className="py-24 sm:py-32 bg-[#EAE8E1] text-[#121212] px-6 sm:px-10 border-t border-black/[0.08]"
    >
      <div className="max-w-7xl mx-auto">
        {/* Section Label: 03 — TOOLKIT */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-[11px] sm:text-xs font-mono tracking-widest text-neutral-500 uppercase mb-6"
        >
          03 — TOOLKIT
        </motion.div>

        {/* Headline: The building blocks. */}
        <motion.h2
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="font-display font-extrabold text-5xl sm:text-7xl lg:text-8xl tracking-[-0.05em] leading-[0.9] text-[#121212] mb-6"
        >
          The building blocks.
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="max-w-xl text-xs sm:text-sm font-sans text-neutral-600 leading-relaxed mb-16 sm:mb-20"
        >
          An engineering toolkit spanning low-level systems programming, real-time distributed web engines, and machine learning models.
        </motion.p>

        {/* Minimalist List Rows with Real Logos */}
        <div className="divide-y divide-black/[0.12] border-t border-b border-black/[0.12]">
          {TOOLKIT_DATA.map((row) => (
            <motion.div
              key={row.id}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="py-10 sm:py-12 flex flex-col lg:flex-row lg:items-start justify-between gap-8 hover:bg-black/[0.015] transition-colors"
            >
              {/* Row Index & Category Title */}
              <div className="flex items-baseline gap-6 sm:gap-10 lg:w-[320px] shrink-0">
                <span className="text-xs font-mono text-neutral-500">
                  #{row.id}
                </span>
                <div>
                  <h3 className="font-display font-bold text-2xl sm:text-3xl text-[#121212]">
                    {row.category}
                  </h3>
                  <p className="text-xs sm:text-sm font-sans text-neutral-500 mt-1">
                    {row.summary}
                  </p>
                </div>
              </div>

              {/* Real Tech Stack Logos Grid */}
              <div className="flex-1 flex flex-wrap gap-3 sm:gap-3.5">
                {row.skills.map((skill) => {
                  const logoData = getSkillLogo(skill.icon) || getSkillLogo(skill.name);
                  const isHovered = hoveredSkill === skill.name;

                  return (
                    <div
                      key={skill.name}
                      onMouseEnter={() => setHoveredSkill(skill.name)}
                      onMouseLeave={() => setHoveredSkill(null)}
                      className="group relative flex items-center gap-3 px-4 py-2.5 rounded-xl bg-white/80 border border-black/10 text-neutral-900 shadow-2xs hover:bg-white hover:border-black/30 hover:shadow-md transition-all duration-200 cursor-default"
                      style={{
                        borderColor: isHovered && logoData?.color ? `${logoData.color}60` : undefined,
                        boxShadow: isHovered && logoData?.bg ? `0 4px 14px 0 ${logoData.bg}` : undefined,
                      }}
                    >
                      {/* Real Vector SVG Logo */}
                      <div className="w-5 h-5 sm:w-6 sm:h-6 flex items-center justify-center shrink-0 transition-transform duration-200 group-hover:scale-110">
                        {logoData?.svg}
                      </div>

                      {/* Name and Level Description */}
                      <div className="flex flex-col">
                        <span className="text-xs sm:text-sm font-mono font-semibold tracking-tight text-neutral-900 leading-tight">
                          {skill.name}
                        </span>
                        <span className="text-[10px] font-sans text-neutral-500 leading-tight">
                          {skill.level}
                        </span>
                      </div>
                    </div>
                  );
                })}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

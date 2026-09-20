import React from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, ArrowUpRight, Github, ExternalLink, Cpu, Layers, CheckCircle2, Award } from 'lucide-react';
import TechIcon from './TechLogos';

export default function ProjectModal({ project, onClose }) {
  if (!project) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 md:p-10 overflow-y-auto">
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 bg-black/80 backdrop-blur-md transition-opacity"
        />

        {/* Modal Container */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
          className="relative w-full max-w-3xl bg-[#141414] border border-white/10 rounded-2xl overflow-hidden shadow-2xl shadow-black my-8 z-10 max-h-[90vh] flex flex-col text-white"
        >
          {/* Header Bar */}
          <div className="flex items-center justify-between px-6 py-4 border-b border-white/10 bg-black/40">
            <div className="flex items-center gap-3">
              <span className="text-xs font-mono text-[#D4F82C] uppercase tracking-wider">
                {project.index} / {project.category}
              </span>
              <span className="text-neutral-600">•</span>
              <span className="text-xs font-mono text-neutral-400">{project.type}</span>
            </div>

            <button
              id="close-project-modal-btn"
              type="button"
              onClick={onClose}
              className="p-1.5 rounded-full text-neutral-400 hover:text-white bg-white/5 hover:bg-white/10 transition-colors"
              aria-label="Close modal"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Scrollable Modal Content */}
          <div className="overflow-y-auto px-6 py-8 sm:px-8 space-y-8">
            {/* Project Title & Summary */}
            <div>
              <div className="flex flex-wrap items-baseline gap-3 mb-2">
                <h2 className="text-3xl sm:text-4xl font-display font-bold tracking-tight text-white">
                  {project.title}
                </h2>
                {project.hasLive && (
                  <span className="px-2.5 py-0.5 rounded-full text-xs font-mono bg-[#D4F82C] text-black font-semibold">
                    Live Demo Available
                  </span>
                )}
              </div>
              <p className="text-sm sm:text-base text-neutral-300 leading-relaxed max-w-2xl">
                {project.summary}
              </p>

              {/* Tags */}
              <div className="flex flex-wrap gap-2 mt-4">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-2.5 py-1 rounded-full text-xs font-mono bg-white/[0.06] border border-white/10 text-neutral-300"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            {/* Special Verification Callout for FIFA WC Forecast */}
            {project.id === 'fifa-wc-2026' && (
              <div className="p-4 rounded-xl bg-[#D76241]/15 border border-[#D76241]/40 flex items-start gap-3">
                <Award className="w-5 h-5 text-[#D4F82C] shrink-0 mt-0.5" />
                <div className="space-y-1">
                  <h4 className="text-xs font-mono uppercase tracking-wider text-[#D4F82C] font-semibold">
                    Forecasting Accuracy & Historical Proof
                  </h4>
                  <p className="text-xs text-neutral-200 leading-relaxed">
                    The machine learning model correctly predicted the tournament winners, runners-up, 4 out of the top 5 ranked teams, key knockout outcomes and many more fixtures. The timestamp of the final commits on this GitHub repository serves as immutable proof that all predictions were submitted before the final matches took place.
                  </p>
                </div>
              </div>
            )}

            {/* Metrics */}
            {project.details?.metrics && (
              <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-3 pt-4 border-t border-white/10">
                {project.details.metrics.map((metric, idx) => (
                  <div key={idx} className="p-4 rounded-xl bg-white/[0.03] border border-white/5">
                    <span className="block text-sm font-mono text-[#D4F82C] font-semibold">
                      {metric}
                    </span>
                    <span className="block text-[11px] font-mono text-neutral-400 mt-1">
                      Engineering Metric
                    </span>
                  </div>
                ))}
              </div>
            )}

            {/* Engineering Challenge & Solution */}
            {project.details && (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-6 border-t border-white/10">
                <div className="space-y-2">
                  <h3 className="text-xs font-mono uppercase tracking-wider text-neutral-400 flex items-center gap-2">
                    <Cpu className="w-3.5 h-3.5 text-[#D4F82C]" />
                    <span>Technical Challenge</span>
                  </h3>
                  <p className="text-xs sm:text-sm text-neutral-300 leading-relaxed">
                    {project.details.challenge}
                  </p>
                </div>

                <div className="space-y-2">
                  <h3 className="text-xs font-mono uppercase tracking-wider text-neutral-400 flex items-center gap-2">
                    <Layers className="w-3.5 h-3.5 text-[#D4F82C]" />
                    <span>Engineering Architecture</span>
                  </h3>
                  <p className="text-xs sm:text-sm text-neutral-300 leading-relaxed">
                    {project.details.solution}
                  </p>
                </div>
              </div>
            )}

            {/* Tech Stack Employed */}
            {project.details?.stack && (
              <div className="pt-6 border-t border-white/10">
                <h3 className="text-xs font-mono uppercase tracking-wider text-neutral-400 mb-3">
                  Core Technologies & Libraries
                </h3>
                <div className="flex flex-wrap gap-2">
                  {project.details.stack.map((item) => (
                    <span
                      key={item}
                      className="inline-flex items-center gap-2 px-3 py-1.5 rounded-md text-xs font-mono bg-black border border-white/15 text-white"
                    >
                      <TechIcon name={item} className="w-4 h-4" />
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Footer Actions */}
          <div className="flex flex-wrap items-center justify-between gap-3 px-6 py-4 border-t border-white/10 bg-black/40">
            <button
              type="button"
              onClick={onClose}
              className="px-4 py-2 text-xs font-mono text-neutral-400 hover:text-white transition-colors"
            >
              Close
            </button>

            <div className="flex items-center gap-3">
              {project.hasLive && project.liveUrl ? (
                <>
                  {project.githubUrl && (
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full text-xs font-mono text-neutral-200 border border-white/20 hover:border-white transition-colors"
                    >
                      <Github className="w-3.5 h-3.5" />
                      <span>GitHub Repo</span>
                    </a>
                  )}
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full text-xs font-medium text-black bg-[#D4F82C] hover:bg-[#c2e424] transition-colors"
                  >
                    <ExternalLink className="w-3.5 h-3.5" />
                    <span>Launch Live App</span>
                  </a>
                </>
              ) : (
                project.githubUrl && (
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full text-xs font-medium text-black bg-[#D4F82C] hover:bg-[#c2e424] transition-colors"
                  >
                    <Github className="w-3.5 h-3.5" />
                    <span>Explore on GitHub</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </a>
                )
              )}
            </div>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}

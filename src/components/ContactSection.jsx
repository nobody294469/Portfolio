import React, { useState } from 'react';
import { motion } from 'motion/react';
import { ArrowUpRight, Copy, Check } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

export default function ContactSection() {
  const [copied, setCopied] = useState(false);
  const copyEmail = () => {
    if (navigator.clipboard?.writeText) {
      navigator.clipboard.writeText(PERSONAL_INFO.email).then(() => {
        setCopied(true);
        setTimeout(() => setCopied(false), 2200);
      });
    }
  };

  return (
    <section
      id="contact"
      className="py-28 sm:py-36 bg-[#D4F82C] text-black px-6 sm:px-10 selection:bg-black selection:text-[#D4F82C]"
    >
      <div className="max-w-7xl mx-auto">
        {/* Section Label: 04 — CONTACT */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-[11px] sm:text-xs font-mono tracking-widest text-black/70 uppercase mb-8"
        >
          04 — CONTACT
        </motion.div>

        {/* Massive Headline: "Let's make something thoughtful." */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mb-14 sm:mb-20"
        >
          <h2 className="font-display font-extrabold text-5xl sm:text-7xl lg:text-9xl tracking-[-0.05em] leading-[0.85] text-black">
            Let's make <br />
            something <br />
            <span className="font-serif-italic font-normal italic text-black font-serif">
              thoughtful.
            </span>
          </h2>
        </motion.div>

        {/* Email Link & Quick Copy: [solankisammyag@gmail.com] ↗ */}
        <div className="flex flex-col sm:flex-row sm:items-center gap-6">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="flex items-center gap-4 flex-wrap"
          >
            <a
              id="contact-direct-email-link"
              href={`https://mail.google.com/mail/?view=cm&fs=1&to=${encodeURIComponent(PERSONAL_INFO.email)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-2 text-2xl sm:text-4xl md:text-5xl font-mono font-medium tracking-tight text-black hover:opacity-75 transition-opacity"
            >
              <span>[{PERSONAL_INFO.email}]</span>
              <ArrowUpRight className="w-6 h-6 sm:w-8 sm:h-8 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
            </a>

            <button
              id="contact-copy-email-btn"
              type="button"
              onClick={copyEmail}
              className="px-4 py-2 rounded-full border border-black/30 text-xs font-mono font-medium text-black hover:bg-black hover:text-[#D4F82C] transition-all flex items-center gap-2"
              title="Copy email to clipboard"
            >
              {copied ? (
                <>
                  <Check className="w-3.5 h-3.5 text-black" />
                  <span>Copied to Clipboard!</span>
                </>
              ) : (
                <>
                  <Copy className="w-3.5 h-3.5" />
                  <span>Copy</span>
                </>
              )}
            </button>

          </motion.div>
        </div>
      </div>
    </section>
  );
}

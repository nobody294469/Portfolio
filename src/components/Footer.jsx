import React from 'react';
import { ArrowUpRight } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

export default function Footer() {
  return (
    <footer
      id="main-footer"
      className="py-10 bg-[#080808] text-neutral-400 text-xs font-mono border-t border-white/[0.08]"
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-10 flex flex-col md:flex-row items-center justify-between gap-6">
        
        {/* Center: GITHUB ↗ / EMAIL ↗ */}
        <div className="flex items-center gap-4 sm:gap-6 flex-wrap justify-center">
          {PERSONAL_INFO.socials.map((social) => (
            <a
              key={social.name}
              href={social.url}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 text-neutral-300 hover:text-white transition-colors"
            >
              <span>{social.name}</span>
              <ArrowUpRight className="w-3 h-3 text-neutral-400" />
            </a>
          ))}
        </div>

        {/* Right: Clean tag */}
        <div className="flex items-center gap-2 text-neutral-500 text-[11px] font-mono">
          <span>© {new Date().getFullYear()} Sammyag Solanki</span>
          <span>•</span>
          <span>Engineered with React & Tailwind</span>
        </div>
      </div>
    </footer>
  );
}

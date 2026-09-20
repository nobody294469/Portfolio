import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ArrowUpRight, Menu, X, FileText } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 25);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { label: 'Work', href: '#work', isExternal: false },
    { label: 'About', href: '#about', isExternal: false },
    { label: 'Contact', href: '#contact', isExternal: false },
    {
      label: 'Resume',
      href: PERSONAL_INFO.resumeUrl || '/resume.pdf',
      isExternal: true,
    },
  ];

  return (
    <header
      id="main-navbar"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'py-3.5 bg-[#F3F2EC]/90 backdrop-blur-md border-b border-black/[0.08] shadow-sm'
          : 'py-6 bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-10 flex items-center justify-between">
        {/* Brand Logo: [PORTFOLIO] */}
        <a
          id="nav-brand-logo"
          href="#hero"
          className="text-xs sm:text-sm font-mono tracking-wider text-black font-semibold uppercase hover:opacity-70 transition-opacity"
        >
          [{PERSONAL_INFO.displayName}]
        </a>

        {/* Desktop Direct Nav Options: Work, About, Contact, Resume */}
        <nav
          id="desktop-nav-options"
          aria-label="Main Navigation"
          className="hidden md:flex items-center gap-2 lg:gap-3"
        >
          {navItems.map((item) => {
            if (item.isExternal) {
              return (
                <a
                  key={item.label}
                  id={`nav-link-${item.label.toLowerCase()}`}
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1.5 px-4 py-1.5 rounded-full text-xs font-medium text-black bg-black/[0.06] hover:bg-black hover:text-white border border-black/10 transition-all duration-200"
                  title="Open Resume (PDF)"
                >
                  <FileText className="w-3.5 h-3.5 opacity-70" />
                  <span>{item.label}</span>
                  <ArrowUpRight className="w-3 h-3 opacity-60" />
                </a>
              );
            }

            return (
              <a
                key={item.label}
                id={`nav-link-${item.label.toLowerCase()}`}
                href={item.href}
                className="px-3.5 py-1.5 text-xs font-sans tracking-wide text-neutral-700 hover:text-black hover:bg-black/[0.04] rounded-full transition-all duration-150"
              >
                {item.label}
              </a>
            );
          })}
        </nav>

        {/* Mobile: Quick direct Resume link + Menu Hamburger Toggle */}
        <div className="flex md:hidden items-center gap-2">
          <a
            id="mobile-nav-resume-direct"
            href={PERSONAL_INFO.resumeUrl || '/resume.pdf'}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1 px-3 py-1.5 rounded-full text-[11px] font-medium text-black bg-black/[0.06] border border-black/10"
          >
            <span>Resume</span>
            <ArrowUpRight className="w-3 h-3 text-neutral-500" />
          </a>

          <button
            id="mobile-menu-toggle-btn"
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 rounded-full bg-black/5 text-black hover:bg-black/10 transition-colors"
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            id="mobile-menu-drawer"
            initial={{ opacity: 0, y: -12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.2 }}
            className="md:hidden bg-[#F3F2EC] border-b border-black/10 px-6 py-6 shadow-xl"
          >
            <div className="flex flex-col gap-2">
              {navItems.map((item) => (
                <a
                  key={item.label}
                  id={`mobile-menu-link-${item.label.toLowerCase()}`}
                  href={item.href}
                  target={item.isExternal ? '_blank' : undefined}
                  rel={item.isExternal ? 'noopener noreferrer' : undefined}
                  onClick={() => setMobileMenuOpen(false)}
                  className="text-base font-medium text-black py-2.5 px-3 rounded-lg hover:bg-black/5 flex items-center justify-between transition-colors"
                >
                  <span>{item.label}</span>
                  <ArrowUpRight className="w-4 h-4 text-neutral-400" />
                </a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}

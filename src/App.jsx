import React from 'react';
import { motion, useScroll, useSpring } from 'motion/react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import WorkSection from './components/WorkSection';
import AboutSection from './components/AboutSection';
import TechStackSection from './components/TechStackSection';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';

export default function App() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  return (
    <div className="min-h-screen bg-[#F3F2EC] text-[#121212] selection:bg-black selection:text-[#D4F82C] font-sans antialiased">
      {/* Subtle Top Scroll Progress Bar */}
      <motion.div
        id="scroll-progress-bar"
        className="fixed top-0 left-0 right-0 h-[2.5px] bg-black origin-left z-50 pointer-events-none"
        style={{ scaleX }}
      />

      {/* Global Navigation Bar */}
      <Navbar />

      {/* Main Content Sections */}
      <main id="main-content">
        {/* Hero Section with Interactive Cursor Trail */}
        <Hero />

        {/* 01 — SELECTED WORK */}
        <WorkSection />

        {/* 02 — ABOUT */}
        <AboutSection />

        {/* 03 — TOOLKIT (Tech Stack) */}
        <TechStackSection />

        {/* 04 — CONTACT (Chartreuse Lime) */}
        <ContactSection />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}

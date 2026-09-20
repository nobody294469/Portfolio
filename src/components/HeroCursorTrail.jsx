import React, { useState, useEffect, useRef, useCallback } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { TECH_LOGOS } from './TechLogos';

/**
 * HeroCursorTrail
 * Renders an interactive trail of pure tech stack logos (without text names)
 * at the cursor position as the user hovers and moves across the Hero section.
 * Pops in with smooth spring animation, follows the cursor trail,
 * and disappears smoothly after 1 second.
 */
export default function HeroCursorTrail({ containerRef }) {
  const [trail, setTrail] = useState([]);
  const lastPosRef = useRef({ x: -9999, y: -9999 });
  const lastIndexRef = useRef(-1);
  const isHoveredRef = useRef(false);
  const trailRef = useRef([]);

  // Keep trailRef in sync with state for clean timer cleanups
  useEffect(() => {
    trailRef.current = trail;
  }, [trail]);

  // Spawn a random logo at the given local (x, y) coordinates
  const spawnLogo = useCallback((x, y) => {
    // Pick a random logo without repeating the immediate previous one
    let nextIndex = Math.floor(Math.random() * TECH_LOGOS.length);
    if (nextIndex === lastIndexRef.current) {
      nextIndex = (nextIndex + 1) % TECH_LOGOS.length;
    }
    lastIndexRef.current = nextIndex;
    const logoData = TECH_LOGOS[nextIndex];

    const id = `${Date.now()}-${Math.random().toString(36).slice(2, 7)}`;
    // Subtle organic rotation (-12deg to +12deg)
    const rotation = (Math.random() - 0.5) * 24;
    // Slight random drift offset (-6px to +6px)
    const driftX = (Math.random() - 0.5) * 12;
    const driftY = (Math.random() - 0.5) * 12;

    const newItem = {
      id,
      x: x + driftX,
      y: y + driftY,
      rotation,
      logoData,
    };

    setTrail((prev) => {
      // Keep up to 14 active items for butter-smooth 60fps performance
      return [...prev.slice(-13), newItem];
    });

    // Automatically remove after 1 second (1000ms)
    setTimeout(() => {
      setTrail((prev) => prev.filter((item) => item.id !== id));
    }, 1000);
  }, []);

  useEffect(() => {
    const container = containerRef?.current;
    if (!container) return;

    const handlePointerMove = (e) => {
      isHoveredRef.current = true;
      const rect = container.getBoundingClientRect();
      const localX = e.clientX - rect.left;
      const localY = e.clientY - rect.top;

      // Check distance from last spawned position
      const dx = localX - lastPosRef.current.x;
      const dy = localY - lastPosRef.current.y;
      const distance = Math.hypot(dx, dy);

      // Smooth threshold: spawn when cursor has moved at least 38px
      if (distance >= 38) {
        lastPosRef.current = { x: localX, y: localY };
        spawnLogo(localX, localY);
      }
    };

    const handlePointerEnter = (e) => {
      isHoveredRef.current = true;
      const rect = container.getBoundingClientRect();
      const localX = e.clientX - rect.left;
      const localY = e.clientY - rect.top;
      lastPosRef.current = { x: localX, y: localY };
      spawnLogo(localX, localY);
    };

    const handlePointerLeave = () => {
      isHoveredRef.current = false;
      lastPosRef.current = { x: -9999, y: -9999 };
    };

    container.addEventListener('pointermove', handlePointerMove, { passive: true });
    container.addEventListener('pointerenter', handlePointerEnter, { passive: true });
    container.addEventListener('pointerleave', handlePointerLeave, { passive: true });

    return () => {
      container.removeEventListener('pointermove', handlePointerMove);
      container.removeEventListener('pointerenter', handlePointerEnter);
      container.removeEventListener('pointerleave', handlePointerLeave);
    };
  }, [containerRef, spawnLogo]);

  return (
    <div
      id="hero-cursor-trail-layer"
      className="absolute inset-0 pointer-events-none overflow-hidden z-30"
      aria-hidden="true"
    >
      <AnimatePresence>
        {trail.map((item) => (
          <motion.div
            key={item.id}
            initial={{
              opacity: 0,
              scale: 0.25,
              rotate: item.rotation - 15,
              y: 8,
            }}
            animate={{
              opacity: 1,
              scale: 1,
              rotate: item.rotation,
              y: 0,
            }}
            exit={{
              opacity: 0,
              scale: 0.35,
              y: -22,
              rotate: item.rotation + 15,
              filter: 'blur(3px)',
            }}
            transition={{
              duration: 0.32,
              ease: [0.16, 1, 0.3, 1],
            }}
            style={{
              position: 'absolute',
              left: item.x,
              top: item.y,
              transform: 'translate(-50%, -50%)',
            }}
            className="select-none pointer-events-none will-change-transform"
          >
            {/* Pure authentic tech logo without any background box or container */}
            <div className="w-9 h-9 sm:w-11 sm:h-11 flex items-center justify-center">
              <img
                src={item.logoData.iconUrl}
                alt={item.logoData.name}
                className="w-full h-full object-contain select-none pointer-events-none filter drop-shadow-[0_6px_14px_rgba(0,0,0,0.18)]"
                draggable={false}
                loading="eager"
              />
            </div>
          </motion.div>
        ))}
      </AnimatePresence>
    </div>
  );
}

import React from 'react';
import { MapPin, Compass } from 'lucide-react';

export default function GeoRushPreview() {
  return (
    <div className="w-full h-full bg-[#0E1A29]/95 border border-white/15 rounded-xl shadow-2xl overflow-hidden flex flex-col text-white select-none transition-all duration-300 group-hover:border-white/30 group-hover:shadow-[0_20px_40px_rgba(0,0,0,0.35)]">
      {/* Top HUD: Game Mode & Round Timer */}
      <div className="px-3.5 py-2 bg-black/60 border-b border-white/10 flex items-center justify-between text-[11px]">
        <div className="flex items-center gap-2">
          <span className="px-1.5 py-0.5 rounded text-[9px] font-mono font-bold bg-[#D4F82C] text-black">
            1v1 DUEL
          </span>
          <span className="font-mono text-[10px] text-white/70">ROUND 3/5</span>
        </div>
        <div className="flex items-center gap-2 font-mono text-[10px]">
          <span className="text-white/40">TIME LEFT</span>
          <span className="px-1.5 py-0.5 rounded bg-red-500/20 text-red-300 border border-red-500/30 font-bold animate-pulse">
            0:14s
          </span>
        </div>
      </div>

      {/* Street View Simulation Viewport */}
      <div className="relative flex-1 p-3 sm:p-3.5 flex flex-col justify-between overflow-hidden">
        {/* Background Visual simulating 360 Street View Environment */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#1C2D42] via-[#162233] to-[#0D1826] opacity-90" />
        
        {/* Horizon & Street Silhouette with perspective grid */}
        <div className="absolute inset-0 flex flex-col justify-end opacity-25 pointer-events-none">
          <div className="h-1/2 w-full border-t border-cyan-400/30 flex items-center justify-center">
            <div className="w-full h-full bg-[linear-gradient(to_right,rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.05)_1px,transparent_1px)] bg-[size:16px_16px]" />
          </div>
        </div>

        {/* 360 Compass HUD & Clue Tags */}
        <div className="relative z-10 flex items-center justify-between gap-2">
          <div className="flex items-center gap-1.5 px-2 py-1 rounded-full bg-black/60 backdrop-blur-md border border-white/15 text-[9px] font-mono text-cyan-300">
            <Compass className="w-3 h-3 text-cyan-400 animate-[spin_12s_linear_infinite]" />
            <span>HEADING: 142° SE</span>
          </div>

          <div className="flex items-center gap-1">
            <span className="px-2 py-0.5 rounded-full bg-black/60 backdrop-blur-md border border-white/10 text-[9px] font-mono text-white/80">
              🪧 Cyrillic Script
            </span>
            <span className="px-2 py-0.5 rounded-full bg-black/60 backdrop-blur-md border border-white/10 text-[9px] font-mono text-white/80 hidden sm:inline-block">
              🚗 Right Driving
            </span>
          </div>
        </div>

        {/* Center: Inset Interactive Minimap & Geodesic Result Box */}
        <div className="relative z-10 my-2 bg-black/70 backdrop-blur-md rounded-lg p-2.5 border border-white/15 shadow-xl">
          <div className="flex items-center justify-between mb-1.5">
            <div className="flex items-center gap-1 text-[10px] font-mono text-white/70">
              <MapPin className="w-3 h-3 text-[#D4F82C]" />
              <span>Haversine Geodesic Distance</span>
            </div>
            <span className="text-[10px] font-mono font-bold text-[#D4F82C]">+4,820 pts</span>
          </div>

          {/* Mini Vector Map preview */}
          <div className="relative h-12 w-full bg-[#122030] rounded border border-white/10 overflow-hidden flex items-center justify-center">
            {/* Dotted Haversine Arc */}
            <svg className="absolute inset-0 w-full h-full">
              <line
                x1="25%"
                y1="60%"
                x2="75%"
                y2="40%"
                stroke="#D4F82C"
                strokeWidth="2"
                strokeDasharray="4 3"
              />
            </svg>
            {/* Target Pin */}
            <div className="absolute left-[25%] top-[60%] -translate-x-1/2 -translate-y-1/2 flex items-center gap-1">
              <div className="w-3 h-3 rounded-full bg-emerald-400 border border-white shadow-lg animate-ping" />
              <div className="w-2 h-2 rounded-full bg-emerald-400 absolute" />
            </div>
            {/* Player Guess Pin */}
            <div className="absolute left-[75%] top-[40%] -translate-x-1/2 -translate-y-1/2 flex items-center gap-1">
              <div className="w-3 h-3 rounded-full bg-[#D4F82C] border border-black shadow-lg" />
            </div>

            <span className="relative z-10 font-mono text-[9px] text-white/80 bg-black/60 px-2 py-0.5 rounded border border-white/10">
              🎯 184 km delta • Prague, Czechia
            </span>
          </div>
        </div>

        {/* Bottom Duel Combat HP Health Bars */}
        <div className="relative z-10 grid grid-cols-2 gap-2 pt-1 border-t border-white/10 text-[9px] font-mono">
          <div>
            <div className="flex justify-between mb-0.5">
              <span className="text-white/80 font-bold">YOU (HP)</span>
              <span className="text-emerald-400 font-bold">5,420 / 6,000</span>
            </div>
            <div className="h-1.5 w-full bg-black/50 rounded-full overflow-hidden border border-white/5">
              <div className="h-full w-[90%] bg-emerald-400 rounded-full" />
            </div>
          </div>
          <div>
            <div className="flex justify-between mb-0.5">
              <span className="text-white/60 font-bold">OPPONENT</span>
              <span className="text-red-400 font-bold">3,120 / 6,000</span>
            </div>
            <div className="h-1.5 w-full bg-black/50 rounded-full overflow-hidden border border-white/5">
              <div className="h-full w-[52%] bg-red-400 rounded-full" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

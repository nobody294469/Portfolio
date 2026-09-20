import React, { useState } from 'react';
import { Cpu } from 'lucide-react';

export default function OsPlatformPreview() {
  const [algo, setAlgo] = useState('RR'); // 'RR' or 'FCFS'

  const processes = algo === 'RR'
    ? [
        { id: 'P1', start: 0, end: 2, color: 'bg-cyan-500/90 text-cyan-950 border-cyan-400', width: '18%' },
        { id: 'P2', start: 2, end: 5, color: 'bg-amber-400/90 text-amber-950 border-amber-300', width: '25%' },
        { id: 'P3', start: 5, end: 8, color: 'bg-emerald-400/90 text-emerald-950 border-emerald-300', width: '25%' },
        { id: 'P1', start: 8, end: 11, color: 'bg-cyan-500/90 text-cyan-950 border-cyan-400', width: '22%' },
        { id: 'P2', start: 11, end: 13, color: 'bg-amber-400/90 text-amber-950 border-amber-300', width: '10%' },
      ]
    : [
        { id: 'P1', start: 0, end: 5, color: 'bg-cyan-500/90 text-cyan-950 border-cyan-400', width: '35%' },
        { id: 'P2', start: 5, end: 9, color: 'bg-amber-400/90 text-amber-950 border-amber-300', width: '30%' },
        { id: 'P3', start: 9, end: 14, color: 'bg-emerald-400/90 text-emerald-950 border-emerald-300', width: '35%' },
      ];

  return (
    <div className="w-full h-full bg-[#0B1518]/95 border border-white/15 rounded-xl shadow-2xl overflow-hidden flex flex-col text-white select-none transition-all duration-300 group-hover:border-white/30 group-hover:shadow-[0_20px_40px_rgba(0,0,0,0.35)]">
      {/* Window Header */}
      <div className="px-3.5 py-2 bg-black/40 border-b border-white/10 flex items-center justify-between text-[11px]">
        <div className="flex items-center gap-1.5">
          <div className="w-2.5 h-2.5 rounded-full bg-[#FF5F56]" />
          <div className="w-2.5 h-2.5 rounded-full bg-[#FFBD2E]" />
          <div className="w-2.5 h-2.5 rounded-full bg-[#27C93F]" />
          <span className="ml-2 font-mono text-[10px] text-white/50 tracking-wider">os_scheduler.py</span>
        </div>
        <div className="flex items-center gap-2">
          <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-[9px] font-mono bg-emerald-500/20 text-emerald-300 border border-emerald-500/30">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
            SIMULATING
          </span>
        </div>
      </div>

      {/* Simulator Toolbar */}
      <div className="px-3.5 py-2 bg-white/5 border-b border-white/5 flex items-center justify-between gap-2 text-xs">
        <div className="flex items-center gap-1.5">
          <button
            type="button"
            onClick={(e) => { e.stopPropagation(); setAlgo('RR'); }}
            className={`px-2 py-0.5 rounded text-[10px] font-mono font-semibold transition-all ${
              algo === 'RR'
                ? 'bg-[#D4F82C] text-black shadow-sm'
                : 'text-white/60 hover:text-white hover:bg-white/10'
            }`}
          >
            Round Robin (q=2)
          </button>
          <button
            type="button"
            onClick={(e) => { e.stopPropagation(); setAlgo('FCFS'); }}
            className={`px-2 py-0.5 rounded text-[10px] font-mono font-semibold transition-all ${
              algo === 'FCFS'
                ? 'bg-[#D4F82C] text-black shadow-sm'
                : 'text-white/60 hover:text-white hover:bg-white/10'
            }`}
          >
            FCFS
          </button>
        </div>
        <span className="text-[10px] font-mono text-white/40 hidden sm:inline-block">
          Quantum: 2ms
        </span>
      </div>

      {/* Gantt Chart Timeline View */}
      <div className="p-3 sm:p-4 flex-1 flex flex-col justify-between">
        <div>
          <div className="flex items-center justify-between mb-2">
            <div className="flex items-center gap-1.5 text-[11px] font-mono text-white/80">
              <Cpu className="w-3.5 h-3.5 text-[#D4F82C]" />
              <span className="font-semibold">CPU Execution Gantt Chart</span>
            </div>
            <span className="text-[10px] font-mono text-white/40">Total: 14ms</span>
          </div>

          {/* Interactive Gantt Blocks */}
          <div className="relative w-full h-9 sm:h-10 bg-black/60 rounded-lg p-1 border border-white/10 flex gap-1 overflow-hidden">
            {processes.map((p, idx) => (
              <div
                key={idx}
                style={{ width: p.width }}
                className={`${p.color} h-full rounded flex items-center justify-center font-mono font-bold text-[11px] shadow-sm transition-transform hover:scale-[1.03] cursor-pointer`}
                title={`${p.id}: ${p.start}ms - ${p.end}ms`}
              >
                {p.id}
              </div>
            ))}
            {/* Animated Playhead Line */}
            <div className="absolute top-0 bottom-0 w-0.5 bg-[#D4F82C] shadow-[0_0_8px_#D4F82C] animate-[pulse_2s_infinite] left-2/3 pointer-events-none" />
          </div>

          {/* Timeline Milestones */}
          <div className="flex justify-between px-1 mt-1 text-[9px] font-mono text-white/40">
            <span>0ms</span>
            <span>4ms</span>
            <span>8ms</span>
            <span>12ms</span>
            <span>14ms</span>
          </div>
        </div>

        {/* Process Queue & Live Metrics */}
        <div className="grid grid-cols-3 gap-2 mt-3 pt-2.5 border-t border-white/10">
          <div className="p-2 rounded bg-black/40 border border-white/5">
            <span className="text-[9px] font-mono text-white/40 block">AVG TURNAROUND</span>
            <span className="text-xs sm:text-sm font-mono font-bold text-white mt-0.5 block">
              {algo === 'RR' ? '7.33 ms' : '9.67 ms'}
            </span>
          </div>
          <div className="p-2 rounded bg-black/40 border border-white/5">
            <span className="text-[9px] font-mono text-white/40 block">WAITING TIME</span>
            <span className="text-xs sm:text-sm font-mono font-bold text-[#D4F82C] mt-0.5 block">
              {algo === 'RR' ? '3.00 ms' : '4.67 ms'}
            </span>
          </div>
          <div className="p-2 rounded bg-black/40 border border-white/5">
            <span className="text-[9px] font-mono text-white/40 block">CPU UTIL</span>
            <span className="text-xs sm:text-sm font-mono font-bold text-emerald-400 mt-0.5 block">
              100%
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

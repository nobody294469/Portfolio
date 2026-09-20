import React from 'react';
import { Trophy, GitCommit, ShieldCheck, Activity } from 'lucide-react';

export default function FifaForecastPreview() {
  return (
    <div className="w-full h-full bg-[#161A1E]/95 border border-white/15 rounded-xl shadow-2xl overflow-hidden flex flex-col text-white select-none transition-all duration-300 group-hover:border-white/30 group-hover:shadow-[0_20px_40px_rgba(0,0,0,0.35)]">
      {/* Top Header: ML Architecture */}
      <div className="px-3.5 py-2 bg-black/50 border-b border-white/10 flex items-center justify-between text-[11px]">
        <div className="flex items-center gap-1.5 font-mono text-[10px]">
          <Activity className="w-3 h-3 text-[#D4F82C]" />
          <span className="font-bold text-white tracking-wider">XGBOOST + MONTE CARLO</span>
        </div>
        <div className="flex items-center gap-1 px-1.5 py-0.5 rounded bg-[#D4F82C]/10 border border-[#D4F82C]/30 text-[#D4F82C] text-[9px] font-mono">
          <ShieldCheck className="w-3 h-3" />
          <span>GIT VERIFIED</span>
        </div>
      </div>

      {/* Main Tournament Tree & Probabilities */}
      <div className="p-3 sm:p-4 flex-1 flex flex-col justify-between">
        {/* Head-to-Head Final Matchup Bracket Node */}
        <div className="bg-black/50 rounded-lg p-2.5 border border-white/10">
          <div className="flex items-center justify-between text-[9px] font-mono text-white/50 mb-1.5">
            <span>KNOCKOUT FINALS SIMULATION</span>
            <span className="text-[#D4F82C]">100,000 RUNS</span>
          </div>

          <div className="space-y-1.5">
            {/* Team 1 */}
            <div>
              <div className="flex justify-between items-center text-[10px] font-mono mb-0.5">
                <span className="font-bold text-white flex items-center gap-1">
                  🇦🇷 ARGENTINA <span className="text-white/40 text-[9px] font-normal">(Elo: 2,142)</span>
                </span>
                <span className="font-bold text-[#D4F82C]">54.2% WIN PROB</span>
              </div>
              <div className="h-2 w-full bg-white/10 rounded-full overflow-hidden">
                <div className="h-full w-[54.2%] bg-[#D4F82C] rounded-full shadow-[0_0_8px_#D4F82C]" />
              </div>
            </div>

            {/* Team 2 */}
            <div>
              <div className="flex justify-between items-center text-[10px] font-mono mb-0.5">
                <span className="font-semibold text-white/70 flex items-center gap-1">
                  🇫🇷 FRANCE <span className="text-white/40 text-[9px] font-normal">(Elo: 2,115)</span>
                </span>
                <span className="font-mono text-white/60">45.8%</span>
              </div>
              <div className="h-2 w-full bg-white/10 rounded-full overflow-hidden">
                <div className="h-full w-[45.8%] bg-white/30 rounded-full" />
              </div>
            </div>
          </div>
        </div>

        {/* Probability Distribution & Historical Verification */}
        <div className="my-2 p-2 rounded bg-white/5 border border-white/5 flex items-center justify-between text-[10px] font-mono">
          <div className="flex items-center gap-2">
            <Trophy className="w-3.5 h-3.5 text-[#D4F82C]" />
            <span className="text-white/80">Predicted Winner: <b>Argentina</b></span>
          </div>
          <span className="text-emerald-400 font-bold bg-emerald-500/20 px-1.5 py-0.5 rounded text-[9px]">
            ✓ EXACT OUTCOME
          </span>
        </div>

        {/* Git Commit Stamp Tag */}
        <div className="pt-2 border-t border-white/10 flex items-center justify-between text-[9px] font-mono text-white/40">
          <div className="flex items-center gap-1">
            <GitCommit className="w-3 h-3 text-[#D4F82C]" />
            <span>Commit: #8f2a1b9 (Pre-Finals)</span>
          </div>
          <span className="text-white/60">Brier Score: 0.162</span>
        </div>
      </div>
    </div>
  );
}

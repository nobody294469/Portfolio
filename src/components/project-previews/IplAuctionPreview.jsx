import React, { useState } from 'react';
import { Users, Sparkles } from 'lucide-react';

export default function IplAuctionPreview() {
  const [currentBid, setCurrentBid] = useState(15.75);
  const [lastFranchise, setLastFranchise] = useState('CSK');

  const handleQuickBid = (e) => {
    e.stopPropagation();
    setCurrentBid((prev) => +(prev + 0.5).toFixed(2));
    setLastFranchise((prev) => (prev === 'CSK' ? 'MI' : 'CSK'));
  };

  return (
    <div className="w-full h-full bg-[#1A1211]/95 border border-white/15 rounded-xl shadow-2xl overflow-hidden flex flex-col text-white select-none transition-all duration-300 group-hover:border-white/30 group-hover:shadow-[0_20px_40px_rgba(0,0,0,0.35)]">
      {/* Live Auction Broadcast Header */}
      <div className="px-3.5 py-2 bg-black/50 border-b border-white/10 flex items-center justify-between text-[11px]">
        <div className="flex items-center gap-2">
          <span className="flex h-2 w-2 relative">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75" />
            <span className="relative inline-flex rounded-full h-2 w-2 bg-red-500" />
          </span>
          <span className="font-mono text-[10px] font-bold tracking-wider text-red-400">
            LIVE AUCTION ROOM #01
          </span>
        </div>
        <div className="flex items-center gap-1.5 text-[10px] font-mono text-white/60">
          <Users className="w-3 h-3 text-[#D4F82C]" />
          <span>8 FRANCHISES ONLINE</span>
        </div>
      </div>

      {/* Main Auction Floor */}
      <div className="p-3 sm:p-4 flex-1 flex flex-col justify-between">
        {/* Active Player Card on Podium */}
        <div className="bg-gradient-to-r from-black/60 to-black/40 rounded-lg p-2.5 sm:p-3 border border-white/10 flex items-center justify-between gap-3">
          <div className="flex items-center gap-2.5">
            <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-amber-500/30 to-orange-600/30 border border-amber-500/40 flex items-center justify-center font-bold text-amber-300 font-mono text-xs">
              ALL
            </div>
            <div>
              <div className="flex items-center gap-1.5">
                <span className="font-semibold text-xs sm:text-sm text-white">H. Pandya</span>
                <span className="px-1.5 py-0.5 text-[8px] font-mono bg-white/10 rounded text-white/70">
                  IND • GRADE A
                </span>
              </div>
              <span className="text-[10px] font-mono text-white/50 block">Base Price: ₹2.00 Cr</span>
            </div>
          </div>

          {/* Current Bid Display */}
          <div className="text-right">
            <span className="text-[9px] font-mono text-white/40 block">CURRENT BID</span>
            <div className="text-base sm:text-lg font-mono font-extrabold text-[#D4F82C] tracking-tight">
              ₹{currentBid.toFixed(2)} Cr
            </div>
            <div className="text-[10px] font-mono font-bold text-amber-300 flex items-center justify-end gap-1">
              <span className="w-1.5 h-1.5 rounded-full bg-amber-400" />
              Leading: {lastFranchise}
            </div>
          </div>
        </div>

        {/* Live Bidding Battle Ticker & Gemini Insight */}
        <div className="my-2 space-y-1.5">
          <div className="flex items-center justify-between text-[10px] font-mono bg-white/5 px-2.5 py-1.5 rounded border border-white/5">
            <span className="text-white/60">Bid increments (+₹50L)</span>
            <button
              type="button"
              onClick={handleQuickBid}
              className="px-2 py-0.5 rounded bg-[#D4F82C] text-black font-bold text-[9px] hover:bg-white transition-colors cursor-pointer"
            >
              + BID NOW
            </button>
          </div>

          {/* Gemini AI Scout Banner */}
          <div className="flex items-center gap-1.5 px-2 py-1 rounded bg-purple-500/10 border border-purple-500/20 text-[9px] font-mono text-purple-200">
            <Sparkles className="w-3 h-3 text-purple-400 shrink-0" />
            <span className="truncate">Gemini AI: High death-overs utility; recommended cap ₹17.5 Cr</span>
          </div>
        </div>

        {/* Franchise Purse Gauges */}
        <div className="grid grid-cols-2 gap-2 pt-2 border-t border-white/10">
          <div className="p-1.5 rounded bg-black/30 border border-white/5">
            <div className="flex justify-between text-[9px] font-mono mb-1">
              <span className="text-white/70">CSK Purse</span>
              <span className="text-[#D4F82C] font-bold">₹28.5 Cr</span>
            </div>
            <div className="h-1.5 w-full bg-white/10 rounded-full overflow-hidden">
              <div className="h-full w-[65%] bg-amber-400 rounded-full" />
            </div>
          </div>
          <div className="p-1.5 rounded bg-black/30 border border-white/5">
            <div className="flex justify-between text-[9px] font-mono mb-1">
              <span className="text-white/70">MI Purse</span>
              <span className="text-[#D4F82C] font-bold">₹22.0 Cr</span>
            </div>
            <div className="h-1.5 w-full bg-white/10 rounded-full overflow-hidden">
              <div className="h-full w-[50%] bg-blue-400 rounded-full" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

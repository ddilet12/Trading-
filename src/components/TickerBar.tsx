import React from 'react';
import { TICKER_ITEMS } from '../data/landingData';
import { TrendingUp, Activity } from 'lucide-react';

export const TickerBar: React.FC = () => {
  return (
    <div id="market-ticker-bar" className="w-full bg-[#060911] border-y border-white/5 py-2.5 overflow-hidden">
      <div className="flex items-center gap-8 whitespace-nowrap animate-marquee">
        {/* Repeating sequence for infinite scroll look */}
        {[...TICKER_ITEMS, ...TICKER_ITEMS, ...TICKER_ITEMS].map((item, index) => (
          <div key={index} className="inline-flex items-center gap-2.5 text-xs font-medium">
            <span className="text-slate-400 font-bold tracking-wider">{item.pair}</span>
            <span className="text-white font-semibold">{item.price}</span>
            <span
              className={`inline-flex items-center gap-1 text-[11px] font-bold px-1.5 py-0.5 rounded ${
                item.positive ? 'text-emerald-400 bg-emerald-500/10' : 'text-rose-400 bg-rose-500/10'
              }`}
            >
              <TrendingUp className="w-3 h-3 inline" />
              {item.change}
            </span>
            <span className="text-slate-600 ml-4">•</span>
          </div>
        ))}
      </div>
    </div>
  );
};

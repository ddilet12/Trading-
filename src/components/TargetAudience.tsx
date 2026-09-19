import React from 'react';
import { TARGET_AUDIENCE } from '../data/landingData';
import { Compass, TrendingDown, Briefcase, Coins, Check } from 'lucide-react';

export const TargetAudience: React.FC = () => {
  const getIcon = (name: string) => {
    switch (name) {
      case 'Compass':
        return <Compass className="w-6 h-6 text-emerald-400" />;
      case 'TrendingDown':
        return <TrendingDown className="w-6 h-6 text-rose-400" />;
      case 'Briefcase':
        return <Briefcase className="w-6 h-6 text-cyan-400" />;
      case 'Coins':
        return <Coins className="w-6 h-6 text-amber-400" />;
      default:
        return <Compass className="w-6 h-6 text-emerald-400" />;
    }
  };

  return (
    <section id="audience" className="py-20 bg-[#090D16] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-xs font-bold uppercase tracking-wider mb-4">
            Целевая аудитория
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight font-display">
            Кому программа «Легкий старт» даст максимальный результат
          </h2>
          <p className="text-slate-400 mt-4 text-base sm:text-lg">
            Узнайте себя среди 4 ключевых профилей наших студентов и поймите, какой результат вы получите уже через 4 недели.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {TARGET_AUDIENCE.map((item) => (
            <div
              key={item.id}
              className="p-7 rounded-2xl bg-white/[0.02] border border-white/[0.08] hover:border-white/20 transition-all flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center">
                    {getIcon(item.icon)}
                  </div>
                  <span className="text-xs font-bold px-3 py-1 rounded-full bg-white/5 text-slate-300 border border-white/10">
                    {item.tag}
                  </span>
                </div>

                <h3 className="text-xl font-bold text-white mb-2.5">
                  {item.title}
                </h3>
                <p className="text-sm text-slate-300 leading-relaxed mb-6">
                  {item.description}
                </p>
              </div>

              <div className="pt-4 border-t border-white/10 flex items-start gap-3 bg-emerald-500/[0.03] p-3.5 rounded-xl border-emerald-500/20">
                <div className="w-5 h-5 rounded-full bg-emerald-500/20 flex items-center justify-center text-emerald-400 shrink-0 mt-0.5">
                  <Check className="w-3.5 h-3.5" />
                </div>
                <div>
                  <div className="text-xs font-bold text-emerald-400 uppercase tracking-wide">
                    Ваш результат на курсе:
                  </div>
                  <div className="text-xs sm:text-sm text-slate-200 mt-0.5">
                    {item.result}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

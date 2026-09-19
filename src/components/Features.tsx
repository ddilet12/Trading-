import React from 'react';
import { ADVANTAGES } from '../data/landingData';
import { Sparkles, ShieldAlert, Video, Users2 } from 'lucide-react';

export const Features: React.FC = () => {
  const icons = [
    <Sparkles className="w-6 h-6 text-emerald-400" key="1" />,
    <ShieldAlert className="w-6 h-6 text-cyan-400" key="2" />,
    <Video className="w-6 h-6 text-amber-400" key="3" />,
    <Users2 className="w-6 h-6 text-purple-400" key="4" />
  ];

  return (
    <section id="features" className="py-20 bg-[#070b13] border-t border-white/5 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-bold uppercase tracking-wider mb-4">
            Принципы системы
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight font-display">
            Почему 89% учеников выходят в плюс уже во время обучения
          </h2>
          <p className="text-slate-400 mt-4 text-base sm:text-lg">
            В трейдинге выигрывает не тот, кто знает больше сложных слов, а тот, кто следует четкой математике вероятностей и не нарушает правила.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {ADVANTAGES.map((adv, index) => (
            <div
              key={adv.id}
              className="p-6 rounded-2xl bg-gradient-to-b from-white/[0.04] to-transparent border border-white/[0.08] hover:border-emerald-500/40 transition-all flex flex-col justify-between group"
            >
              <div>
                <div className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center mb-5 group-hover:scale-110 transition-transform">
                  {icons[index]}
                </div>
                <div className="inline-block text-[11px] font-bold text-slate-400 tracking-wider mb-2">
                  {adv.badge}
                </div>
                <h3 className="text-lg font-bold text-white mb-2.5">
                  {adv.title}
                </h3>
                <p className="text-sm text-slate-300 leading-relaxed">
                  {adv.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

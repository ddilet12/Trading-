import React, { useState } from 'react';
import { COURSE_MODULES } from '../data/landingData';
import { ChevronDown, Clock, CheckCircle2, BookOpen } from 'lucide-react';

interface CurriculumProps {
  onOpenOrder: (tariffId?: string) => void;
}

export const Curriculum: React.FC<CurriculumProps> = ({ onOpenOrder }) => {
  const [openModuleId, setOpenModuleId] = useState<number | null>(1);

  const toggleModule = (id: number) => {
    setOpenModuleId(openModuleId === id ? null : id);
  };

  return (
    <section id="curriculum" className="py-20 bg-[#070b13] border-t border-white/5 relative">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-bold uppercase tracking-wider mb-4">
            Программа обучения
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight font-display">
            6 модулей: от фундамента до авторских сетапов Debroni
          </h2>
          <p className="text-slate-400 mt-4 text-base sm:text-lg">
            Структурированный путь длиной в 6 недель с домашними заданиями, проверкой сделок и выходом на стабильную положительную статистику.
          </p>
        </div>

        {/* Modules Accordion */}
        <div className="space-y-4">
          {COURSE_MODULES.map((mod) => {
            const isOpen = openModuleId === mod.id;
            return (
              <div
                key={mod.id}
                className={`rounded-2xl border transition-all duration-200 overflow-hidden ${
                  isOpen
                    ? 'bg-slate-900/90 border-emerald-500/40 shadow-xl shadow-emerald-950/20'
                    : 'bg-white/[0.02] border-white/[0.08] hover:border-white/20'
                }`}
              >
                {/* Module Header Button */}
                <button
                  type="button"
                  onClick={() => toggleModule(mod.id)}
                  className="w-full p-6 text-left flex items-center justify-between gap-4 cursor-pointer"
                  aria-expanded={isOpen}
                >
                  <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4">
                    <span className="text-xs font-bold px-2.5 py-1 rounded bg-white/5 border border-white/10 text-emerald-400 w-fit">
                      {mod.badge}
                    </span>
                    <h3 className="text-lg sm:text-xl font-bold text-white">
                      {mod.title}
                    </h3>
                  </div>

                  <div className="flex items-center gap-4 shrink-0">
                    <div className="hidden sm:flex items-center gap-1.5 text-xs text-slate-400">
                      <Clock className="w-3.5 h-3.5 text-slate-400" />
                      <span>{mod.duration}</span>
                    </div>
                    <div
                      className={`w-8 h-8 rounded-full bg-white/5 flex items-center justify-center text-slate-300 transition-transform duration-200 ${
                        isOpen ? 'rotate-180 bg-emerald-500/20 text-emerald-400' : ''
                      }`}
                    >
                      <ChevronDown className="w-4 h-4" />
                    </div>
                  </div>
                </button>

                {/* Module Expandable Content */}
                {isOpen && (
                  <div className="px-6 pb-6 pt-2 border-t border-white/5 space-y-4">
                    <p className="text-sm text-slate-300 leading-relaxed">
                      {mod.description}
                    </p>

                    <div className="space-y-2.5 pt-2">
                      <div className="text-xs font-bold text-slate-400 uppercase tracking-wider flex items-center gap-1.5">
                        <BookOpen className="w-3.5 h-3.5 text-emerald-400" />
                        <span>Темы уроков модуля:</span>
                      </div>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-2.5">
                        {mod.lessons.map((lesson, idx) => (
                          <div
                            key={idx}
                            className="flex items-start gap-2.5 p-2.5 rounded-lg bg-white/[0.02] border border-white/5 text-xs sm:text-sm text-slate-200"
                          >
                            <span className="w-5 h-5 rounded bg-emerald-500/10 text-emerald-400 font-bold text-xs flex items-center justify-center shrink-0">
                              {idx + 1}
                            </span>
                            <span>{lesson}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Result Banner */}
                    <div className="p-3.5 rounded-xl bg-emerald-500/10 border border-emerald-500/20 flex items-start gap-3 mt-4">
                      <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
                      <div>
                        <div className="text-xs font-bold text-emerald-400 uppercase tracking-wider">
                          Результат прохождения модуля:
                        </div>
                        <div className="text-xs sm:text-sm text-slate-100 mt-0.5 font-medium">
                          {mod.result}
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Action button below curriculum */}
        <div className="mt-12 text-center">
          <button
            id="curriculum-cta-btn"
            onClick={() => onOpenOrder('optimal')}
            className="px-8 py-4 rounded-xl bg-gradient-to-r from-emerald-500 to-teal-400 hover:from-emerald-400 hover:to-teal-300 text-slate-950 font-bold text-base shadow-lg shadow-emerald-500/25 transition-all cursor-pointer"
          >
            Получить доступ к полной программе
          </button>
        </div>
      </div>
    </section>
  );
};

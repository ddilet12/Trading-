import React, { useState } from 'react';
import { CASES_DATA } from '../data/landingData';
import { ReviewCase } from '../types';
import { ChevronLeft, ChevronRight, Maximize2, X, TrendingUp, ShieldCheck, Quote } from 'lucide-react';

export const CasesCarousel: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [activeFilter, setActiveFilter] = useState<'all' | 'trade' | 'review'>('all');
  const [lightboxImage, setLightboxImage] = useState<string | null>(null);

  const filteredCases = CASES_DATA.filter((item) => {
    if (activeFilter === 'all') return true;
    if (activeFilter === 'trade') return item.type === 'trade' || item.type === 'swing';
    if (activeFilter === 'review') return item.type === 'review';
    return true;
  });

  const currentCase: ReviewCase = filteredCases[activeIndex] || filteredCases[0];

  const handlePrev = () => {
    setActiveIndex((prev) => (prev === 0 ? filteredCases.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setActiveIndex((prev) => (prev === filteredCases.length - 1 ? 0 : prev + 1));
  };

  return (
    <section id="cases" className="py-20 bg-[#090D16] relative border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div>
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-bold uppercase tracking-wider mb-4">
              Результаты выпускников
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight font-display">
              Реальные сделки и отзывы студентов «Легкий старт»
            </h2>
            <p className="text-slate-400 mt-2 text-base max-w-2xl">
              Скриншоты терминалов, верифицированные отчеты и прямые отзывы из закрытого сообщества Debroni.
            </p>
          </div>

          {/* Filter Pills */}
          <div className="flex items-center gap-2 bg-white/5 p-1 rounded-xl border border-white/10 shrink-0">
            <button
              onClick={() => {
                setActiveFilter('all');
                setActiveIndex(0);
              }}
              className={`px-3.5 py-1.5 rounded-lg text-xs font-bold transition-all ${
                activeFilter === 'all'
                  ? 'bg-emerald-500 text-slate-950 shadow-md'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              Все кейсы ({CASES_DATA.length})
            </button>
            <button
              onClick={() => {
                setActiveFilter('trade');
                setActiveIndex(0);
              }}
              className={`px-3.5 py-1.5 rounded-lg text-xs font-bold transition-all ${
                activeFilter === 'trade'
                  ? 'bg-emerald-500 text-slate-950 shadow-md'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              Сделки учеников
            </button>
            <button
              onClick={() => {
                setActiveFilter('review');
                setActiveIndex(0);
              }}
              className={`px-3.5 py-1.5 rounded-lg text-xs font-bold transition-all ${
                activeFilter === 'review'
                  ? 'bg-emerald-500 text-slate-950 shadow-md'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              Отзывы Telegram
            </button>
          </div>
        </div>

        {/* Featured Interactive Case Card */}
        {currentCase && (
          <div className="rounded-3xl bg-slate-900/90 border border-white/10 overflow-hidden shadow-2xl p-6 lg:p-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              {/* Left Column: Image with Lightbox zoom button (image.png, image_2.png, image_8.png) */}
              <div className="lg:col-span-7 relative group">
                <div
                  className="relative rounded-2xl overflow-hidden border border-white/15 bg-black/60 aspect-[16/11] cursor-pointer shadow-inner"
                  onClick={() => setLightboxImage(currentCase.image)}
                >
                  <img
                    src={currentCase.image}
                    alt={currentCase.title}
                    className="w-full h-full object-contain p-2 group-hover:scale-102 transition-transform duration-300"
                    referrerPolicy="no-referrer"
                  />
                  {/* Click to enlarge overlay */}
                  <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-2 text-white text-sm font-semibold">
                    <Maximize2 className="w-5 h-5 text-emerald-400" />
                    <span>Нажмите для увеличения скриншота</span>
                  </div>
                </div>

                {/* Floating image identifier badge */}
                <div className="absolute top-4 left-4 px-3 py-1 rounded-md bg-black/70 border border-white/20 text-xs font-mono text-slate-300 backdrop-blur-md">
                  {currentCase.image}
                </div>
              </div>

              {/* Right Column: Case Story, Metrics & Student Quote */}
              <div className="lg:col-span-5 flex flex-col justify-between space-y-6 text-left">
                <div>
                  <div className="flex items-center gap-2 mb-3">
                    <span className="px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs font-bold uppercase tracking-wider flex items-center gap-1.5">
                      <ShieldCheck className="w-3.5 h-3.5" />
                      Верифицированная сделка
                    </span>
                    <span className="text-xs text-slate-400 font-medium">
                      {currentCase.period}
                    </span>
                  </div>

                  <h3 className="text-2xl font-black text-white font-display">
                    {currentCase.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-300 mt-1 font-mono text-emerald-300">
                    {currentCase.setup}
                  </p>
                </div>

                {/* Profit Metrics Badges */}
                <div className="grid grid-cols-2 gap-4 p-4 rounded-xl bg-white/[0.03] border border-white/5">
                  <div>
                    <div className="text-xs text-slate-400 font-medium">Чистый PnL</div>
                    <div className="text-2xl font-black text-emerald-400 font-display mt-0.5">
                      {currentCase.pnl}
                    </div>
                  </div>
                  <div>
                    <div className="text-xs text-slate-400 font-medium">Доходность / R:R</div>
                    <div className="text-2xl font-black text-cyan-400 font-display mt-0.5 flex items-center gap-1.5">
                      <TrendingUp className="w-5 h-5 inline" />
                      {currentCase.pnlPercent}
                    </div>
                  </div>
                </div>

                {/* Quote */}
                <div className="p-4 rounded-xl bg-slate-950/60 border border-white/10 relative">
                  <Quote className="w-6 h-6 text-slate-600 absolute -top-3 left-4" />
                  <p className="text-sm text-slate-200 italic leading-relaxed pt-1">
                    «{currentCase.quote}»
                  </p>
                  <div className="mt-4 pt-3 border-t border-white/5 flex items-center justify-between">
                    <div>
                      <div className="text-sm font-bold text-white">
                        {currentCase.author}
                      </div>
                      <div className="text-xs text-slate-400">
                        {currentCase.role}
                      </div>
                    </div>
                    <div className="text-xs font-bold text-emerald-400 bg-emerald-500/10 px-2.5 py-1 rounded">
                      R:R {currentCase.rr}
                    </div>
                  </div>
                </div>

                {/* Navigation Arrows & Counter */}
                <div className="flex items-center justify-between pt-2">
                  <div className="flex items-center gap-1.5">
                    {filteredCases.map((_, i) => (
                      <button
                        key={i}
                        onClick={() => setActiveIndex(i)}
                        className={`h-2 rounded-full transition-all cursor-pointer ${
                          activeIndex === i ? 'w-8 bg-emerald-400' : 'w-2 bg-white/20'
                        }`}
                        aria-label={`Go to slide ${i + 1}`}
                      />
                    ))}
                  </div>

                  <div className="flex items-center gap-2">
                    <button
                      onClick={handlePrev}
                      className="p-2.5 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 text-white transition-colors cursor-pointer"
                      aria-label="Previous case"
                    >
                      <ChevronLeft className="w-5 h-5" />
                    </button>
                    <button
                      onClick={handleNext}
                      className="p-2.5 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 text-white transition-colors cursor-pointer"
                      aria-label="Next case"
                    >
                      <ChevronRight className="w-5 h-5" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* 3 Preview Mini Cards Grid */}
        <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6">
          {CASES_DATA.map((item, idx) => (
            <div
              key={item.id}
              onClick={() => {
                const foundIdx = filteredCases.findIndex((c) => c.id === item.id);
                if (foundIdx !== -1) setActiveIndex(foundIdx);
                else {
                  setActiveFilter('all');
                  setActiveIndex(idx);
                }
              }}
              className={`p-4 rounded-2xl border transition-all cursor-pointer text-left ${
                currentCase?.id === item.id
                  ? 'bg-emerald-500/[0.06] border-emerald-500/50'
                  : 'bg-white/[0.02] border-white/[0.08] hover:border-white/20'
              }`}
            >
              <div className="aspect-[16/9] rounded-xl overflow-hidden bg-black/40 mb-3 relative border border-white/10">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute top-2 right-2 px-2 py-0.5 rounded bg-black/80 text-[10px] font-mono text-emerald-400 font-bold border border-emerald-500/30">
                  {item.pnlPercent}
                </div>
              </div>
              <div className="text-xs font-bold text-slate-400 uppercase tracking-wider">
                {item.author}
              </div>
              <div className="text-sm font-bold text-white line-clamp-1 mt-1">
                {item.title}
              </div>
              <div className="text-xs text-emerald-400 font-bold mt-1">
                Прибыль: {item.pnl}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox Modal */}
      {lightboxImage && (
        <div
          className="fixed inset-0 z-50 bg-black/90 backdrop-blur-md flex items-center justify-center p-4 animate-fade-in"
          onClick={() => setLightboxImage(null)}
        >
          <div className="relative max-w-5xl w-full max-h-[90vh] flex flex-col items-center">
            <button
              onClick={() => setLightboxImage(null)}
              className="absolute -top-12 right-0 p-2 rounded-full bg-white/10 text-white hover:bg-white/20 transition-colors"
              aria-label="Close modal"
            >
              <X className="w-6 h-6" />
            </button>
            <img
              src={lightboxImage}
              alt="Скриншот сделки на весь экран"
              className="max-h-[85vh] w-auto max-w-full rounded-xl border border-white/20 shadow-2xl object-contain"
              referrerPolicy="no-referrer"
            />
            <div className="mt-3 text-xs text-slate-400 font-mono">
              Файл: {lightboxImage} • Нажмите в любую область для закрытия
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

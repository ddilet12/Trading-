import React from 'react';
import { HERO_DATA } from '../data/landingData';
import { Star, Shield, ArrowUpRight, CheckCircle, Zap, TrendingUp } from 'lucide-react';

interface HeroProps {
  onOpenOrder: (tariffId?: string) => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenOrder }) => {
  return (
    <section id="hero-section" className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden">
      {/* Background Gradients & Glows */}
      <div className="absolute top-10 left-1/2 -translate-x-1/2 w-[700px] h-[350px] bg-gradient-to-tr from-emerald-600/20 via-cyan-500/15 to-transparent rounded-full blur-3xl pointer-events-none -z-10" />
      <div className="absolute top-1/3 -right-32 w-96 h-96 bg-cyan-600/10 rounded-full blur-3xl pointer-events-none -z-10" />
      <div className="absolute -bottom-10 -left-32 w-96 h-96 bg-emerald-600/10 rounded-full blur-3xl pointer-events-none -z-10" />

      {/* Subtle Grid Lines */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_40%,#000_70%,transparent_100%)] pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column: Text & CTAs */}
          <div className="lg:col-span-7 flex flex-col items-start space-y-6 text-left">
            {/* Countdown / Batch Notification Pill */}
            <div
              id="hero-batch-badge"
              className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs sm:text-sm font-bold tracking-wide shadow-sm"
            >
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
              <span>{HERO_DATA.badge}</span>
            </div>

            {/* Main Headline */}
            <h1 className="text-3xl sm:text-4xl md:text-5xl xl:text-6xl font-extrabold text-white tracking-tight leading-[1.15] font-display">
              {HERO_DATA.title}{' '}
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 via-teal-300 to-cyan-400 mt-2">
                {HERO_DATA.highlightTitle}
              </span>
            </h1>

            {/* Subtitle */}
            <p className="text-base sm:text-lg text-slate-300 leading-relaxed max-w-2xl">
              {HERO_DATA.subtitle}
            </p>

            {/* Rating / Social Proof */}
            <div className="flex flex-wrap items-center gap-4 pt-1">
              <div className="flex items-center gap-1 text-amber-400">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-amber-400" />
                ))}
              </div>
              <span className="text-sm font-semibold text-slate-300 border-l border-white/10 pl-4">
                {HERO_DATA.ratingText}
              </span>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 w-full sm:w-auto pt-2">
              <button
                id="hero-primary-cta"
                onClick={() => onOpenOrder('optimal')}
                className="px-8 py-4 rounded-xl bg-gradient-to-r from-emerald-500 via-teal-400 to-emerald-500 hover:from-emerald-400 hover:to-teal-300 text-slate-950 font-extrabold text-base shadow-xl shadow-emerald-500/30 hover:shadow-emerald-500/50 transition-all flex items-center justify-center gap-3 transform active:scale-95 cursor-pointer group"
              >
                <span>Записаться на курс</span>
                <ArrowUpRight className="w-5 h-5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </button>

              <a
                id="hero-secondary-cta"
                href="#curriculum"
                className="px-6 py-4 rounded-xl bg-slate-900/80 hover:bg-slate-800/80 border border-slate-700/80 text-white font-bold text-base transition-all flex items-center justify-center gap-2 hover:border-slate-500"
              >
                <span>Смотреть программу</span>
              </a>
            </div>

            {/* Micro guarantees */}
            <div className="flex flex-wrap items-center gap-x-6 gap-y-2 pt-2 text-xs sm:text-sm text-slate-400">
              <div className="flex items-center gap-1.5">
                <CheckCircle className="w-4 h-4 text-emerald-400" />
                <span>Доступ сразу после оплаты</span>
              </div>
              <div className="flex items-center gap-1.5">
                <CheckCircle className="w-4 h-4 text-emerald-400" />
                <span>Рассрочка 0% без переплат</span>
              </div>
              <div className="flex items-center gap-1.5">
                <CheckCircle className="w-4 h-4 text-emerald-400" />
                <span>Гарантия возврата 14 дней</span>
              </div>
            </div>
          </div>

          {/* Right Column: Author Card with image_3.png */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              {/* Outer Card glow and border */}
              <div className="relative rounded-3xl p-2.5 bg-gradient-to-b from-white/15 via-white/5 to-white/0 border border-white/10 shadow-2xl backdrop-blur-xl">
                <div className="relative rounded-2xl overflow-hidden bg-slate-950 aspect-[4/5] flex items-center justify-center group">
                  <img
                    id="hero-author-image"
                    src="/image_3.png"
                    alt="Debroni — Автор курса Легкий старт"
                    className="w-full h-full object-cover object-center group-hover:scale-102 transition-transform duration-500"
                    referrerPolicy="no-referrer"
                  />
                  {/* Subtle Dark Gradient Overlay for text contrast */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent" />

                  {/* Bottom details on top of photo */}
                  <div className="absolute bottom-0 left-0 right-0 p-6 flex flex-col space-y-1.5 text-left">
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-emerald-500/20 border border-emerald-500/40 text-emerald-300 text-xs font-bold w-fit">
                      <Shield className="w-3.5 h-3.5" />
                      <span>ВЕРИФИЦИРОВАННЫЙ ТРЕЙДЕР</span>
                    </div>
                    <h3 className="text-2xl font-black text-white font-display">
                      Debroni
                    </h3>
                    <p className="text-xs text-slate-300">
                      Практикующий трейдер • 7 лет на рынке • Основатель академии «Легкий старт»
                    </p>
                  </div>
                </div>

                {/* Floating Badge Top Left: Win Rate 84% */}
                <div className="absolute -top-4 -left-4 sm:-left-6 px-4 py-2.5 rounded-2xl bg-slate-900/95 border border-emerald-500/40 shadow-xl shadow-black/60 backdrop-blur-md flex items-center gap-3">
                  <div className="w-9 h-9 rounded-xl bg-emerald-500/20 flex items-center justify-center text-emerald-400">
                    <TrendingUp className="w-5 h-5" />
                  </div>
                  <div className="text-left">
                    <div className="text-xs text-slate-400 font-medium">Win Rate системы</div>
                    <div className="text-base font-extrabold text-white">84.2% в плюс</div>
                  </div>
                </div>

                {/* Floating Badge Bottom Right: PnL / Results */}
                <div className="absolute -bottom-5 -right-4 sm:-right-6 px-4 py-3 rounded-2xl bg-slate-900/95 border border-cyan-500/40 shadow-xl shadow-black/60 backdrop-blur-md flex items-center gap-3">
                  <div className="w-9 h-9 rounded-xl bg-cyan-500/20 flex items-center justify-center text-cyan-400">
                    <Zap className="w-5 h-5" />
                  </div>
                  <div className="text-left">
                    <div className="text-xs text-slate-400 font-medium">Риск / Прибыль (R:R)</div>
                    <div className="text-base font-extrabold text-cyan-400">от 1:3 до 1:5</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* 4 Bottom Stats Grid */}
        <div className="mt-16 sm:mt-24 grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {HERO_DATA.heroStats.map((st, idx) => (
            <div
              key={idx}
              className="p-5 sm:p-6 rounded-2xl bg-white/[0.03] border border-white/[0.08] hover:border-emerald-500/30 transition-all text-left group"
            >
              <div className="text-2xl sm:text-3xl lg:text-4xl font-black text-white font-display group-hover:text-emerald-400 transition-colors">
                {st.value}
              </div>
              <div className="text-sm font-semibold text-slate-200 mt-1">
                {st.label}
              </div>
              <div className="text-xs text-slate-400 mt-0.5">
                {st.note}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

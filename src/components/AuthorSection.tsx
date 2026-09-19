import React, { useState } from 'react';
import { AUTHOR_IMAGES, AUTHOR_BIO } from '../data/landingData';
import { Shield, Award, CheckCircle2, TrendingUp, Laptop, Globe } from 'lucide-react';

export const AuthorSection: React.FC = () => {
  const [selectedImage, setSelectedImage] = useState(AUTHOR_IMAGES[0]);

  return (
    <section id="author" className="py-24 bg-[#070b13] relative border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-amber-500/10 border border-amber-500/20 text-amber-400 text-xs font-bold uppercase tracking-wider mb-4">
            Об авторе курса
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight font-display">
            Знакомьтесь: Debroni
          </h2>
          <p className="text-slate-400 mt-4 text-base sm:text-lg">
            Практикующий трейдер, который обучает только тому, что каждый день торгует сам на личном капитале.
          </p>
        </div>

        {/* Bio & Philosophy Card */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mb-16">
          {/* Main Selected Photo Card */}
          <div className="lg:col-span-6">
            <div className="relative rounded-3xl overflow-hidden border border-white/15 bg-slate-950 aspect-[4/3] sm:aspect-[16/11] shadow-2xl group">
              <img
                src={selectedImage.image}
                alt={selectedImage.title}
                className="w-full h-full object-contain sm:object-cover transition-all duration-300 group-hover:scale-102"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent pointer-events-none" />

              <div className="absolute bottom-0 left-0 right-0 p-6 text-left">
                <span className="px-2.5 py-1 rounded bg-amber-500/20 border border-amber-500/40 text-amber-300 text-xs font-bold uppercase tracking-wider inline-block mb-2">
                  {selectedImage.tag}
                </span>
                <h4 className="text-xl sm:text-2xl font-black text-white font-display">
                  {selectedImage.title}
                </h4>
                <p className="text-xs sm:text-sm text-slate-300 mt-1">
                  {selectedImage.caption}
                </p>
              </div>

              <div className="absolute top-4 right-4 px-2.5 py-1 rounded bg-black/70 border border-white/20 text-xs font-mono text-slate-300">
                {selectedImage.image}
              </div>
            </div>

            {/* Thumbnail Selector (image_3.png, image_4.png, image_5.png, image_6.png, image_7.png) */}
            <div className="mt-4 grid grid-cols-5 gap-2.5">
              {AUTHOR_IMAGES.map((img) => (
                <button
                  key={img.id}
                  onClick={() => setSelectedImage(img)}
                  className={`relative aspect-square rounded-xl overflow-hidden border transition-all cursor-pointer ${
                    selectedImage.id === img.id
                      ? 'border-amber-400 ring-2 ring-amber-400/50 scale-105'
                      : 'border-white/10 opacity-60 hover:opacity-100 hover:border-white/30'
                  }`}
                  aria-label={img.title}
                >
                  <img
                    src={img.image}
                    alt={img.title}
                    className="w-full h-full object-cover"
                    referrerPolicy="no-referrer"
                  />
                  <span className="sr-only">{img.title}</span>
                </button>
              ))}
            </div>
          </div>

          {/* Author Story & Principles */}
          <div className="lg:col-span-6 space-y-6 text-left">
            <div className="space-y-4">
              <div className="inline-flex items-center gap-2 text-xs font-bold text-slate-400 uppercase tracking-wider">
                <Award className="w-4 h-4 text-amber-400" />
                <span>Путь трейдера • 2018 — 2025</span>
              </div>
              <h3 className="text-2xl sm:text-3xl font-extrabold text-white font-display leading-tight">
                «Я не продаю иллюзию легких миллионов. Я даю строгую систему, которая кормит годами».
              </h3>
              <p className="text-slate-300 text-sm sm:text-base leading-relaxed whitespace-pre-line">
                {AUTHOR_BIO.story}
              </p>
            </div>

            {/* 4 Stats Chips */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-2">
              {AUTHOR_BIO.stats.map((s, idx) => (
                <div key={idx} className="p-3.5 rounded-xl bg-white/[0.03] border border-white/5 text-center">
                  <div className="text-xl font-black text-amber-400 font-display">
                    {s.value}
                  </div>
                  <div className="text-[11px] font-medium text-slate-400 mt-0.5">
                    {s.label}
                  </div>
                </div>
              ))}
            </div>

            {/* Quote Block */}
            <div className="p-4 rounded-xl bg-amber-500/5 border border-amber-500/20 text-xs sm:text-sm text-amber-200/90 italic">
              {AUTHOR_BIO.quote}
            </div>
          </div>
        </div>

        {/* 3 Pillars of Debroni System */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-6">
          <div className="p-6 rounded-2xl bg-white/[0.02] border border-white/10 text-left">
            <div className="w-10 h-10 rounded-lg bg-emerald-500/10 flex items-center justify-center text-emerald-400 mb-4">
              <Shield className="w-5 h-5" />
            </div>
            <h4 className="text-base font-bold text-white mb-2">Безопасность капитала</h4>
            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
              Главная цель новичка — научиться не терять. Риск в сделке строго 1-2%. Никаких усреднений и пересиживания просадок.
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-white/[0.02] border border-white/10 text-left">
            <div className="w-10 h-10 rounded-lg bg-cyan-500/10 flex items-center justify-center text-cyan-400 mb-4">
              <Laptop className="w-5 h-5" />
            </div>
            <h4 className="text-base font-bold text-white mb-2">Торговля в реальном времени</h4>
            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
              Все сделки разбираются на живых стримах. Вы видите логику входа, уровень стопа и сопровождение позиции автором.
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-white/[0.02] border border-white/10 text-left">
            <div className="w-10 h-10 rounded-lg bg-purple-500/10 flex items-center justify-center text-purple-400 mb-4">
              <Globe className="w-5 h-5" />
            </div>
            <h4 className="text-base font-bold text-white mb-2">Свобода & Lifestyle</h4>
            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
              Трейдинг дает независимость от географии и начальников. Анализ занимает не более 45 минут в день.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

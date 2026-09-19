import React, { useState, useEffect } from 'react';
import { TARIFFS } from '../data/landingData';
import { Check, X, Flame, Shield, ArrowRight, Zap, Clock } from 'lucide-react';

interface PricingTariffsProps {
  onOpenOrder: (tariffId: string) => void;
}

export const PricingTariffs: React.FC<PricingTariffsProps> = ({ onOpenOrder }) => {
  // Countdown Timer for limited discount
  const [timeLeft, setTimeLeft] = useState({ hours: 2, minutes: 14, seconds: 35 });

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev.seconds > 0) return { ...prev, seconds: prev.seconds - 1 };
        if (prev.minutes > 0) return { ...prev, minutes: 59, seconds: 59 };
        if (prev.hours > 0) return { hours: prev.hours - 1, minutes: 59, seconds: 59 };
        return { hours: 2, minutes: 14, seconds: 35 };
      });
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const formatNum = (n: number) => String(n).padStart(2, '0');

  return (
    <section id="tariffs" className="py-24 bg-[#070b13] relative border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-bold uppercase tracking-wider mb-4">
            Стоимость обучения
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight font-display">
            Выберите ваш формат участия в «Легком старте»
          </h2>
          <p className="text-slate-400 mt-4 text-base sm:text-lg">
            Инвестиция в знания и риск-менеджмент, которая окупается с первых грамотно закрытых сделок.
          </p>

          {/* Discount Expiry Countdown Banner */}
          <div className="mt-6 inline-flex flex-wrap items-center justify-center gap-3 px-5 py-2.5 rounded-2xl bg-amber-500/10 border border-amber-500/30 text-amber-300 text-xs sm:text-sm font-bold shadow-lg">
            <Clock className="w-4 h-4 text-amber-400" />
            <span>Специальная цена со скидкой действует еще:</span>
            <span className="font-mono text-white bg-slate-900 px-2.5 py-1 rounded-lg border border-white/10 font-black">
              {formatNum(timeLeft.hours)}:{formatNum(timeLeft.minutes)}:{formatNum(timeLeft.seconds)}
            </span>
          </div>
        </div>

        {/* 3 Pricing Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch">
          {TARIFFS.map((tariff) => {
            const isPopular = tariff.popular;
            return (
              <div
                key={tariff.id}
                className={`relative rounded-3xl p-8 flex flex-col justify-between transition-all duration-300 ${
                  isPopular
                    ? 'bg-gradient-to-b from-slate-900 via-[#0b1424] to-slate-950 border-2 border-emerald-400 shadow-2xl shadow-emerald-500/15 lg:-translate-y-2'
                    : 'bg-white/[0.02] border border-white/10 hover:border-white/20'
                }`}
              >
                {/* Popular or Limited Badge */}
                {tariff.badge && (
                  <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full bg-gradient-to-r from-emerald-500 to-teal-400 text-slate-950 text-xs font-black tracking-wider uppercase shadow-md flex items-center gap-1.5 whitespace-nowrap">
                    <Flame className="w-3.5 h-3.5" />
                    <span>{tariff.badge}</span>
                  </div>
                )}

                <div>
                  <div className="text-left">
                    <h3 className="text-2xl font-black text-white font-display">
                      {tariff.name}
                    </h3>
                    <p className="text-xs sm:text-sm text-slate-400 mt-2 min-h-[40px] leading-relaxed">
                      {tariff.description}
                    </p>

                    {/* Price Block */}
                    <div className="mt-6 mb-6 pt-4 border-t border-white/10 flex items-baseline gap-3">
                      <span className="text-3xl sm:text-4xl font-black text-white font-display">
                        {tariff.price}
                      </span>
                      <span className="text-base text-slate-500 line-through font-semibold">
                        {tariff.oldPrice}
                      </span>
                    </div>

                    <div className="text-xs text-slate-400 mb-6 bg-white/5 p-2.5 rounded-xl">
                      Рассрочка 0%: от <span className="text-emerald-400 font-bold">~{Math.round(parseInt(tariff.price.replace(/\D/g, '')) / 12)} ₽/мес</span>
                    </div>
                  </div>

                  {/* Feature List */}
                  <div className="space-y-3 pt-2 text-left border-t border-white/5">
                    <div className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-2">
                      Что входит в тариф:
                    </div>
                    {tariff.features.map((f, idx) => (
                      <div key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm">
                        {f.included ? (
                          <div className="w-4 h-4 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center shrink-0 mt-0.5">
                            <Check className="w-3 h-3" />
                          </div>
                        ) : (
                          <div className="w-4 h-4 rounded-full bg-slate-800 text-slate-600 flex items-center justify-center shrink-0 mt-0.5">
                            <X className="w-3 h-3" />
                          </div>
                        )}
                        <span className={f.included ? 'text-slate-200' : 'text-slate-500 line-through'}>
                          {f.title}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* CTA Button */}
                <div className="mt-8 pt-4">
                  <button
                    onClick={() => onOpenOrder(tariff.id)}
                    className={`w-full py-4 rounded-xl font-black text-sm tracking-wide transition-all shadow-lg flex items-center justify-center gap-2 cursor-pointer ${
                      isPopular
                        ? 'bg-gradient-to-r from-emerald-500 to-teal-400 hover:from-emerald-400 hover:to-teal-300 text-slate-950 shadow-emerald-500/30'
                        : 'bg-white/10 hover:bg-white/20 text-white border border-white/10'
                    }`}
                  >
                    <span>{tariff.cta}</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            );
          })}
        </div>

        {/* Guarantee Banner */}
        <div className="mt-12 p-6 rounded-2xl bg-white/[0.02] border border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4 max-w-4xl mx-auto text-left">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-xl bg-emerald-500/10 flex items-center justify-center text-emerald-400 shrink-0">
              <Shield className="w-6 h-6" />
            </div>
            <div>
              <div className="text-sm font-bold text-white">100% Гарантия возврата 14 дней</div>
              <div className="text-xs text-slate-400">
                Если в течение 14 дней обучения вы решите, что программа вам не подходит, мы вернем оплату в полном объеме.
              </div>
            </div>
          </div>
          <span className="text-xs text-emerald-400 font-bold px-3 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/30 whitespace-nowrap">
            Без лишних вопросов
          </span>
        </div>
      </div>
    </section>
  );
};

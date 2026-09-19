import React from 'react';
import { ShieldAlert, Send, Youtube, ArrowUp } from 'lucide-react';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer id="main-footer" className="bg-[#05080f] border-t border-white/5 pt-16 pb-12 text-slate-400 text-xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pb-12 border-b border-white/10">
          {/* Brand Col */}
          <div className="md:col-span-4 text-left space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-emerald-500 to-cyan-500 flex items-center justify-center text-black font-black text-lg">
                D
              </div>
              <span className="text-white font-black text-lg tracking-wider font-display">
                DEBRONI
              </span>
            </div>
            <p className="text-slate-400 text-xs leading-relaxed max-w-sm">
              Академия системного трейдинга Debroni. Курс «Легкий старт» — обучение торговле фьючерсами и криптоактивами на основе концепций Smart Money и строгого риск-контроля.
            </p>
            <div className="flex items-center gap-3 pt-2">
              <a
                href="https://t.me"
                target="_blank"
                rel="noreferrer"
                className="w-9 h-9 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 flex items-center justify-center text-slate-300 hover:text-emerald-400 transition-colors"
                aria-label="Telegram"
              >
                <Send className="w-4 h-4" />
              </a>
              <a
                href="https://youtube.com"
                target="_blank"
                rel="noreferrer"
                className="w-9 h-9 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 flex items-center justify-center text-slate-300 hover:text-rose-400 transition-colors"
                aria-label="YouTube"
              >
                <Youtube className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Quick Nav */}
          <div className="md:col-span-4 text-left space-y-2">
            <div className="text-white font-bold text-sm mb-3">Навигация по сайту</div>
            <div className="grid grid-cols-2 gap-2 text-xs">
              <a href="#features" className="hover:text-emerald-400 transition-colors">О системе</a>
              <a href="#audience" className="hover:text-emerald-400 transition-colors">Для кого</a>
              <a href="#curriculum" className="hover:text-emerald-400 transition-colors">Программа</a>
              <a href="#cases" className="hover:text-emerald-400 transition-colors">Кейсы сделок</a>
              <a href="#author" className="hover:text-emerald-400 transition-colors">Об авторе</a>
              <a href="#calculator" className="hover:text-emerald-400 transition-colors">Калькулятор</a>
              <a href="#tariffs" className="hover:text-emerald-400 transition-colors">Тарифы</a>
              <a href="#faq" className="hover:text-emerald-400 transition-colors">Вопросы и ответы</a>
            </div>
          </div>

          {/* Legal / Contacts */}
          <div className="md:col-span-4 text-left space-y-2">
            <div className="text-white font-bold text-sm mb-3">Правовая информация</div>
            <p className="text-xs text-slate-400">ИП Debroni / ОГРНИП 321774600123456</p>
            <p className="text-xs text-slate-400">Почта поддержки: support@debroni-trading.ru</p>
            <div className="pt-2 flex flex-col space-y-1.5 text-xs text-slate-400">
              <a href="#" className="hover:text-white transition-colors">Публичная оферта на оказание образовательных услуг</a>
              <a href="#" className="hover:text-white transition-colors">Политика обработки персональных данных</a>
              <a href="#" className="hover:text-white transition-colors">Согласие на получение информационных рассылок</a>
            </div>
          </div>
        </div>

        {/* Financial Risk Disclaimer */}
        <div className="mt-8 p-4 rounded-xl bg-white/[0.02] border border-white/5 text-left text-[11px] text-slate-500 leading-relaxed">
          <div className="flex items-center gap-1.5 text-slate-400 font-bold mb-1">
            <ShieldAlert className="w-3.5 h-3.5 text-amber-500" />
            <span>Уведомление о финансовых рисках:</span>
          </div>
          Торговля финансовыми инструментами, криптовалютами и деривативами сопряжена с высоким уровнем риска потери капитала и подходит не всем инвесторам. Информация и материалы на данном сайте носят исключительно образовательный характер и не являются индивидуальной инвестиционной рекомендацией (ИИР). Прошлые результаты торговли и кейсы учеников не гарантируют будущих прибылей.
        </div>

        {/* Bottom Bar */}
        <div className="mt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-slate-400">
          <div>
            © {new Date().getFullYear()} Debroni Trading. Все права защищены. Курс «Легкий старт».
          </div>
          <button
            onClick={scrollToTop}
            className="flex items-center gap-1.5 hover:text-white transition-colors cursor-pointer"
          >
            <span>Наверх</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </footer>
  );
};

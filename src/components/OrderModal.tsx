import React, { useState, useEffect } from 'react';
import { TARIFFS } from '../data/landingData';
import { X, CheckCircle, ArrowRight, ShieldCheck } from 'lucide-react';

interface OrderModalProps {
  isOpen: boolean;
  onClose: () => void;
  selectedTariffId?: string;
}

export const OrderModal: React.FC<OrderModalProps> = ({
  isOpen,
  onClose,
  selectedTariffId = 'optimal'
}) => {
  const [tariffId, setTariffId] = useState(selectedTariffId);
  const [name, setName] = useState('');
  const [telegram, setTelegram] = useState('');
  const [email, setEmail] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    if (selectedTariffId) {
      setTariffId(selectedTariffId);
    }
  }, [selectedTariffId]);

  if (!isOpen) return null;

  const currentTariff = TARIFFS.find((t) => t.id === tariffId) || TARIFFS[1];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Simulate instant local submission
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
    }, 600);
  };

  const handleReset = () => {
    setIsSubmitted(false);
    setName('');
    setTelegram('');
    setEmail('');
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 bg-black/85 backdrop-blur-md flex items-center justify-center p-4">
      <div className="relative w-full max-w-lg bg-slate-900 border border-white/15 rounded-3xl p-6 sm:p-8 shadow-2xl overflow-hidden">
        {/* Close Button */}
        <button
          onClick={handleReset}
          className="absolute top-5 right-5 p-2 rounded-full bg-white/5 hover:bg-white/10 text-slate-400 hover:text-white transition-colors cursor-pointer"
          aria-label="Закрыть"
        >
          <X className="w-5 h-5" />
        </button>

        {!isSubmitted ? (
          <div>
            <div className="text-left mb-6">
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs font-bold uppercase mb-2">
                Бронирование места
              </div>
              <h3 className="text-2xl font-black text-white font-display">
                Заявка на курс «Легкий старт»
              </h3>
              <p className="text-xs sm:text-sm text-slate-400 mt-1">
                Заполните форму ниже, и менеджер Debroni свяжется с вами в Telegram в течение 10 минут.
              </p>
            </div>

            {/* Tariff Selector Chips */}
            <div className="mb-5 text-left">
              <label className="text-xs font-bold text-slate-300 block mb-2">
                Выбранный тариф:
              </label>
              <div className="grid grid-cols-3 gap-2">
                {TARIFFS.map((t) => (
                  <button
                    key={t.id}
                    type="button"
                    onClick={() => setTariffId(t.id)}
                    className={`p-2.5 rounded-xl border text-xs font-bold transition-all cursor-pointer ${
                      tariffId === t.id
                        ? 'bg-emerald-500/20 border-emerald-400 text-emerald-300'
                        : 'bg-white/5 border-white/10 text-slate-400 hover:text-white'
                    }`}
                  >
                    <div>{t.name}</div>
                    <div className="font-mono text-white text-[11px] mt-0.5">{t.price}</div>
                  </button>
                ))}
              </div>
            </div>

            {/* Registration Form */}
            <form onSubmit={handleSubmit} className="space-y-4 text-left">
              <div>
                <label className="text-xs font-semibold text-slate-300 block mb-1.5">
                  Ваше имя:
                </label>
                <input
                  type="text"
                  required
                  placeholder="Например, Александр"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full px-4 py-3 rounded-xl bg-slate-950 border border-white/10 focus:border-emerald-400 text-white text-sm focus:outline-none transition-colors"
                />
              </div>

              <div>
                <label className="text-xs font-semibold text-slate-300 block mb-1.5">
                  Никнейм в Telegram или телефон:
                </label>
                <input
                  type="text"
                  required
                  placeholder="@telegram_login или +7 999 000-00-00"
                  value={telegram}
                  onChange={(e) => setTelegram(e.target.value)}
                  className="w-full px-4 py-3 rounded-xl bg-slate-950 border border-white/10 focus:border-emerald-400 text-white text-sm focus:outline-none transition-colors"
                />
              </div>

              <div>
                <label className="text-xs font-semibold text-slate-300 block mb-1.5">
                  Ваш Email (для доступа к обучающей платформе):
                </label>
                <input
                  type="email"
                  required
                  placeholder="example@gmail.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full px-4 py-3 rounded-xl bg-slate-950 border border-white/10 focus:border-emerald-400 text-white text-sm focus:outline-none transition-colors"
                />
              </div>

              <div className="pt-2">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-4 rounded-xl bg-gradient-to-r from-emerald-500 to-teal-400 hover:from-emerald-400 hover:to-teal-300 text-slate-950 font-black text-sm shadow-xl shadow-emerald-500/25 flex items-center justify-center gap-2 cursor-pointer transition-all disabled:opacity-50"
                >
                  {isSubmitting ? (
                    <span>Отправка данных...</span>
                  ) : (
                    <>
                      <span>Зафиксировать цену {currentTariff.price}</span>
                      <ArrowRight className="w-4 h-4" />
                    </>
                  )}
                </button>
              </div>

              <div className="flex items-center justify-center gap-2 text-[11px] text-slate-500 pt-1">
                <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
                <span>Безопасная передача данных. Без спама.</span>
              </div>
            </form>
          </div>
        ) : (
          /* Success Screen */
          <div className="py-6 text-center space-y-4">
            <div className="w-16 h-16 rounded-2xl bg-emerald-500/20 text-emerald-400 flex items-center justify-center mx-auto">
              <CheckCircle className="w-8 h-8" />
            </div>
            <h3 className="text-2xl font-black text-white font-display">
              Место успешно забронировано!
            </h3>
            <p className="text-sm text-slate-300 max-w-sm mx-auto leading-relaxed">
              Спасибо, <span className="text-white font-bold">{name}</span>. Ваша заявка на тариф «
              <span className="text-emerald-400 font-bold">{currentTariff.name}</span>» принята.
            </p>
            <div className="p-3.5 rounded-xl bg-slate-950 border border-white/10 text-xs text-slate-300 max-w-sm mx-auto text-left space-y-1">
              <div>• Контакт: <span className="text-white font-mono">{telegram}</span></div>
              <div>• Почта: <span className="text-white font-mono">{email}</span></div>
              <div>• Куратор свяжется с вами в Telegram в течение 10 минут.</div>
            </div>
            <button
              onClick={handleReset}
              className="mt-4 px-6 py-3 rounded-xl bg-white/10 hover:bg-white/20 text-white text-sm font-bold transition-all cursor-pointer"
            >
              Вернуться на сайт
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

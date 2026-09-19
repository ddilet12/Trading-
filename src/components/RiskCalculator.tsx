import React, { useState, useId } from 'react';
import { Calculator, ShieldCheck, ArrowRight, HelpCircle } from 'lucide-react';

interface RiskCalculatorProps {
  onOpenOrder: (tariffId?: string) => void;
}

export const RiskCalculator: React.FC<RiskCalculatorProps> = ({ onOpenOrder }) => {
  const [deposit, setDeposit] = useState<number>(1000);
  const [riskPercent, setRiskPercent] = useState<number>(1.5);
  const [tradesPerMonth, setTradesPerMonth] = useState<number>(20);
  const [riskReward, setRiskReward] = useState<number>(3); // 1:3 ratio

  const depositInputId = useId();
  const riskInputId = useId();
  const tradesInputId = useId();
  const winrate = 0.65; // Conservative simulated winrate (even less than 84% to stay grounded)

  // Calculations
  const riskAmount = (deposit * (riskPercent / 100));
  const winAmount = riskAmount * riskReward;
  const winningTrades = Math.round(tradesPerMonth * winrate);
  const losingTrades = tradesPerMonth - winningTrades;
  
  const totalProfit = (winningTrades * winAmount) - (losingTrades * riskAmount);
  const monthlyYieldPercent = ((totalProfit / deposit) * 100).toFixed(1);
  const projectedBalance = Math.round(deposit + totalProfit);

  return (
    <section id="calculator" className="py-20 bg-[#090D16] relative border-t border-white/5">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-xs font-bold uppercase tracking-wider mb-4">
            <Calculator className="w-3.5 h-3.5" />
            Интерактивный расчет
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight font-display">
            Калькулятор риск-менеджмента Debroni
          </h2>
          <p className="text-slate-400 mt-4 text-base sm:text-lg">
            Посмотрите, как работает математическое ожидание: даже при консервативных 65% прибыльных сделок и соотношении 1:3 вы стабильно растите депозит.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center bg-slate-900/80 border border-white/10 rounded-3xl p-6 sm:p-10 shadow-2xl">
          {/* Controls Column */}
          <div className="lg:col-span-7 space-y-6 text-left">
            {/* Deposit Slider */}
            <div>
              <div className="flex justify-between items-center mb-2">
                <label htmlFor={depositInputId} className="text-sm font-bold text-slate-200">
                  Стартовый депозит:
                </label>
                <span className="text-lg font-extrabold text-white font-mono bg-white/5 px-3 py-1 rounded-lg border border-white/10">
                  ${deposit.toLocaleString()}
                </span>
              </div>
              <input
                id={depositInputId}
                type="range"
                min="100"
                max="10000"
                step="100"
                value={deposit}
                onChange={(e) => setDeposit(Number(e.target.value))}
                className="w-full h-2.5 bg-slate-800 rounded-lg appearance-none cursor-pointer accent-emerald-400"
              />
              <div className="flex justify-between text-[11px] text-slate-500 mt-1">
                <span>$100 (для новичка)</span>
                <span>$5,000</span>
                <span>$10,000</span>
              </div>
            </div>

            {/* Risk % per trade */}
            <div>
              <div className="flex justify-between items-center mb-2">
                <label htmlFor={riskInputId} className="text-sm font-bold text-slate-200 flex items-center gap-1.5">
                  <span>Риск на одну сделку:</span>
                  <span className="text-xs text-emerald-400 font-normal">(регламент Debroni 1-2%)</span>
                </label>
                <span className="text-lg font-extrabold text-emerald-400 font-mono bg-white/5 px-3 py-1 rounded-lg border border-white/10">
                  {riskPercent}% (${riskAmount.toFixed(0)})
                </span>
              </div>
              <input
                id={riskInputId}
                type="range"
                min="0.5"
                max="3"
                step="0.5"
                value={riskPercent}
                onChange={(e) => setRiskPercent(Number(e.target.value))}
                className="w-full h-2.5 bg-slate-800 rounded-lg appearance-none cursor-pointer accent-cyan-400"
              />
              <div className="flex justify-between text-[11px] text-slate-500 mt-1">
                <span>0.5% (сверхконсервативно)</span>
                <span>1.5% (стандарт)</span>
                <span>3.0% (максимум)</span>
              </div>
            </div>

            {/* Risk:Reward ratio buttons */}
            <div>
              <div className="text-sm font-bold text-slate-200 mb-2.5">
                Соотношение Risk / Reward (R:R):
              </div>
              <div className="grid grid-cols-3 gap-3">
                {[2, 3, 4].map((ratio) => (
                  <button
                    key={ratio}
                    onClick={() => setRiskReward(ratio)}
                    className={`py-2.5 px-3 rounded-xl border text-sm font-bold transition-all cursor-pointer ${
                      riskReward === ratio
                        ? 'bg-emerald-500/20 border-emerald-400 text-emerald-300 shadow-md'
                        : 'bg-white/5 border-white/10 text-slate-300 hover:border-white/20'
                    }`}
                  >
                    1 : {ratio} {ratio === 3 ? '(Базовый сетап)' : ''}
                  </button>
                ))}
              </div>
            </div>

            {/* Trades per month */}
            <div>
              <div className="flex justify-between items-center mb-2">
                <label htmlFor={tradesInputId} className="text-sm font-bold text-slate-200">
                  Сделок в месяц по сетапам:
                </label>
                <span className="text-base font-extrabold text-white font-mono bg-white/5 px-3 py-1 rounded-lg border border-white/10">
                  {tradesPerMonth} сделок (~1 в день)
                </span>
              </div>
              <input
                id={tradesInputId}
                type="range"
                min="10"
                max="40"
                step="2"
                value={tradesPerMonth}
                onChange={(e) => setTradesPerMonth(Number(e.target.value))}
                className="w-full h-2.5 bg-slate-800 rounded-lg appearance-none cursor-pointer accent-emerald-400"
              />
            </div>
          </div>

          {/* Results Column */}
          <div className="lg:col-span-5 p-6 sm:p-8 rounded-2xl bg-gradient-to-br from-emerald-950/40 via-slate-950 to-slate-900 border border-emerald-500/30 flex flex-col justify-between space-y-6 text-left shadow-xl">
            <div>
              <div className="text-xs font-bold text-emerald-400 uppercase tracking-wider flex items-center gap-1.5">
                <ShieldCheck className="w-4 h-4" />
                <span>Прогноз по формуле Debroni</span>
              </div>
              <div className="text-3xl sm:text-4xl font-black text-white font-display mt-2">
                +${totalProfit.toLocaleString('en-US', { minimumFractionDigits: 0, maximumFractionDigits: 0 })}
              </div>
              <div className="text-xs text-slate-400 mt-1">
                Расчетная чистая прибыль в месяц (~{monthlyYieldPercent}%)
              </div>
            </div>

            <div className="space-y-2.5 pt-4 border-t border-white/10 text-xs sm:text-sm">
              <div className="flex justify-between text-slate-300">
                <span>Баланс через месяц:</span>
                <span className="font-bold text-white font-mono">${projectedBalance.toLocaleString()}</span>
              </div>
              <div className="flex justify-between text-slate-300">
                <span>Прибыльных сделок:</span>
                <span className="font-bold text-emerald-400">{winningTrades} из {tradesPerMonth}</span>
              </div>
              <div className="flex justify-between text-slate-300">
                <span>Допустимый убыток при стопе:</span>
                <span className="font-bold text-rose-400">-${riskAmount.toFixed(0)}</span>
              </div>
              <div className="flex justify-between text-slate-300">
                <span>Прибыль по тейку (TP):</span>
                <span className="font-bold text-emerald-400">+${winAmount.toFixed(0)}</span>
              </div>
            </div>

            <div className="p-3 rounded-xl bg-white/5 text-[11px] text-slate-400 leading-normal">
              *Расчет приведен на основе математической модели курса с винрейтом 65% (реальный винрейт системы Debroni достигает 84%). Результаты зависят от строгости соблюдения правил.
            </div>

            <button
              onClick={() => onOpenOrder('optimal')}
              className="w-full py-3.5 rounded-xl bg-gradient-to-r from-emerald-500 to-teal-400 hover:from-emerald-400 hover:to-teal-300 text-slate-950 font-extrabold text-sm shadow-lg shadow-emerald-500/25 flex items-center justify-center gap-2 cursor-pointer transition-all"
            >
              <span>Освоить систему на практике</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

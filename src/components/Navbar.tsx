import React, { useState, useEffect } from 'react';
import { Menu, X, ShieldCheck, Flame, ArrowRight } from 'lucide-react';

interface NavbarProps {
  onOpenOrder: (tariffId?: string) => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenOrder }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'О курсе', href: '#features' },
    { label: 'Для кого', href: '#audience' },
    { label: 'Программа', href: '#curriculum' },
    { label: 'Кейсы & Отзывы', href: '#cases' },
    { label: 'Автор', href: '#author' },
    { label: 'Калькулятор', href: '#calculator' },
    { label: 'Тарифы', href: '#tariffs' },
    { label: 'FAQ', href: '#faq' }
  ];

  return (
    <header
      id="main-navbar"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-[#090D16]/90 backdrop-blur-md border-b border-white/10 shadow-xl shadow-black/40 py-3.5'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Brand Logo */}
        <a href="#" className="flex items-center gap-3 group focus:outline-none" id="nav-brand-logo">
          <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-emerald-500 to-cyan-500 flex items-center justify-center text-black font-black text-xl shadow-lg shadow-emerald-500/20 group-hover:scale-105 transition-transform">
            D
          </div>
          <div className="flex flex-col">
            <div className="flex items-center gap-1.5">
              <span className="text-white font-black tracking-wider text-lg font-display">DEBRONI</span>
              <span className="inline-block w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
            </div>
            <span className="text-[11px] font-bold text-emerald-400 tracking-widest uppercase">
              Легкий старт
            </span>
          </div>
        </a>

        {/* Desktop Navigation Links */}
        <nav className="hidden lg:flex items-center gap-7 text-sm font-medium text-slate-300" id="desktop-nav-links">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="hover:text-emerald-400 transition-colors py-1 relative group"
            >
              {link.label}
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-emerald-400 group-hover:w-full transition-all duration-200"></span>
            </a>
          ))}
        </nav>

        {/* Right CTA */}
        <div className="hidden sm:flex items-center gap-4">
          <div className="hidden xl:flex items-center gap-1.5 text-xs text-slate-400 font-medium px-3 py-1.5 rounded-full bg-white/5 border border-white/10">
            <Flame className="w-3.5 h-3.5 text-amber-400" />
            <span>Старт через 4 дня</span>
          </div>
          <button
            id="nav-cta-btn"
            onClick={() => onOpenOrder('optimal')}
            className="px-5 py-2.5 rounded-xl bg-gradient-to-r from-emerald-500 to-teal-400 hover:from-emerald-400 hover:to-teal-300 text-slate-950 font-bold text-sm shadow-lg shadow-emerald-500/25 hover:shadow-emerald-500/40 transition-all flex items-center gap-2 transform active:scale-95 cursor-pointer"
          >
            <span>Занять место</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

        {/* Mobile Hamburger Toggle */}
        <button
          id="mobile-menu-toggle-btn"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="lg:hidden p-2 rounded-lg bg-white/5 border border-white/10 text-slate-300 hover:text-white"
          aria-label="Toggle menu"
        >
          {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div
          id="mobile-nav-drawer"
          className="lg:hidden bg-[#0a0f1d] border-b border-white/10 px-4 pt-3 pb-6 space-y-3 mt-3 shadow-2xl"
        >
          <div className="flex flex-col space-y-2">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="px-3 py-2.5 rounded-lg text-slate-200 hover:bg-white/5 hover:text-emerald-400 text-base font-medium transition-colors"
              >
                {link.label}
              </a>
            ))}
          </div>
          <div className="pt-3 border-t border-white/10 flex flex-col gap-3">
            <div className="flex items-center gap-2 text-xs text-slate-400 px-2">
              <ShieldCheck className="w-4 h-4 text-emerald-400" />
              <span>Официальная программа трейдера Debroni</span>
            </div>
            <button
              id="mobile-drawer-cta-btn"
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenOrder('optimal');
              }}
              className="w-full py-3 rounded-xl bg-gradient-to-r from-emerald-500 to-teal-400 text-slate-950 font-bold text-center shadow-lg shadow-emerald-500/20"
            >
              Занять место на курсе
            </button>
          </div>
        </div>
      )}
    </header>
  );
};

import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { TickerBar } from './components/TickerBar';
import { Hero } from './components/Hero';
import { Features } from './components/Features';
import { TargetAudience } from './components/TargetAudience';
import { Curriculum } from './components/Curriculum';
import { CasesCarousel } from './components/CasesCarousel';
import { AuthorSection } from './components/AuthorSection';
import { RiskCalculator } from './components/RiskCalculator';
import { PricingTariffs } from './components/PricingTariffs';
import { FaqSection } from './components/FaqSection';
import { OrderModal } from './components/OrderModal';
import { Footer } from './components/Footer';

export default function App() {
  const [isOrderModalOpen, setIsOrderModalOpen] = useState(false);
  const [selectedTariff, setSelectedTariff] = useState<string>('optimal');

  const handleOpenOrder = (tariffId: string = 'optimal') => {
    setSelectedTariff(tariffId);
    setIsOrderModalOpen(true);
  };

  const handleCloseOrder = () => {
    setIsOrderModalOpen(false);
  };

  return (
    <div className="min-h-screen bg-[#090D16] text-slate-100 flex flex-col font-sans selection:bg-emerald-500 selection:text-black">
      {/* Sticky Navigation Header */}
      <Navbar onOpenOrder={handleOpenOrder} />

      {/* Main Page Flow */}
      <main className="flex-grow">
        {/* Hero Section with Author Photo image_3.png */}
        <Hero onOpenOrder={handleOpenOrder} />

        {/* Live Market & System Statistics Ticker */}
        <TickerBar />

        {/* Core Principles & Advantages */}
        <Features />

        {/* Who is this course for (Target Audience) */}
        <TargetAudience />

        {/* 6 In-Depth Course Modules with Lessons & Outcomes */}
        <Curriculum onOpenOrder={handleOpenOrder} />

        {/* Cases Carousel with screenshots and reviews (image.png, image_2.png, image_8.png) */}
        <CasesCarousel />

        {/* Author Section & Lifestyle Gallery (image_3.png, image_4.png, image_5.png, image_6.png, image_7.png) */}
        <AuthorSection />

        {/* Interactive Risk & Profit Calculator */}
        <RiskCalculator onOpenOrder={handleOpenOrder} />

        {/* Tariffs with discount timer & reservation buttons */}
        <PricingTariffs onOpenOrder={handleOpenOrder} />

        {/* FAQ Section */}
        <FaqSection />
      </main>

      {/* Footer with legal notices, risk disclaimers, and social links */}
      <Footer />

      {/* Booking / Application Modal Dialog */}
      <OrderModal
        isOpen={isOrderModalOpen}
        onClose={handleCloseOrder}
        selectedTariffId={selectedTariff}
      />
    </div>
  );
}

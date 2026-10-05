import React, { useState } from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { MarqueeBanner } from './components/MarqueeBanner';
import { Differentials } from './components/Differentials';
import { InternalWash } from './components/InternalWash';
import { ExternalWash } from './components/ExternalWash';
import { PricingSection } from './components/PricingSection';
import { BookingSection } from './components/BookingSection';
import { ComingSoon } from './components/ComingSoon';
import { FinalCTA } from './components/FinalCTA';
import { Footer } from './components/Footer';
import { FloatingWhatsApp } from './components/FloatingWhatsApp';

export default function App() {
  const [selectedService, setSelectedService] = useState('Lavagem simples');

  const scrollToBooking = () => {
    const bookingEl = document.getElementById('agendamento');
    if (bookingEl) {
      bookingEl.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToServices = () => {
    const servicesEl = document.getElementById('servicos');
    if (servicesEl) {
      servicesEl.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleSelectServiceFromPricing = (serviceName: string) => {
    setSelectedService(serviceName);
    scrollToBooking();
  };

  return (
    <div className="min-h-screen bg-[#06080D] text-slate-100 flex flex-col selection:bg-[#009EFF]/30 selection:text-white antialiased">
      {/* 1. Header */}
      <Header onOpenBooking={scrollToBooking} />

      {/* Main Content Flow */}
      <main className="flex-1">
        {/* 2. Hero */}
        <Hero
          onOpenBooking={scrollToBooking}
          onExploreServices={scrollToServices}
        />

        {/* Marquee Ticker Banner: Luxury Automotive Detailing Copy */}
        <MarqueeBanner />

        {/* 3. Diferencial / Posicionamento */}
        <Differentials />

        {/* Services Anchor Container */}
        <div id="servicos">
          {/* 4. Lavagem Interna */}
          <InternalWash onOpenBooking={scrollToBooking} />

          {/* 5. Lavagem Externa */}
          <ExternalWash onOpenBooking={scrollToBooking} />

          {/* 6. Serviços e Preços */}
          <PricingSection onSelectService={handleSelectServiceFromPricing} />
        </div>

        {/* 7. Agendamento */}
        <BookingSection initialService={selectedService} />

        {/* 8. Serviços Futuros (Em Breve) */}
        <ComingSoon />

        {/* 9. CTA Final */}
        <FinalCTA onOpenBooking={scrollToBooking} />
      </main>

      {/* 10. Footer */}
      <Footer />

      {/* Direct Floating WhatsApp Contact */}
      <FloatingWhatsApp />
    </div>
  );
}

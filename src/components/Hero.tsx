import React from 'react';
import { ArrowRight, Calendar } from 'lucide-react';
import { motion } from 'motion/react';
import heroImage from '../assets/images/hero_automotive_detailing_1791219528923.jpg';

interface HeroProps {
  onOpenBooking: () => void;
  onExploreServices: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenBooking, onExploreServices }) => {
  return (
    <section
      id="inicio"
      className="relative min-h-screen flex items-center justify-center pt-24 pb-16 overflow-hidden bg-[#06080D]"
    >
      {/* Cinematic Background Image with Slow, Majestic Motion */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <motion.img
          initial={{ scale: 1.12, opacity: 0.8 }}
          animate={{ scale: 1.02, opacity: 1 }}
          transition={{ duration: 2.4, ease: [0.16, 1, 0.3, 1] }}
          src={heroImage}
          alt="Veículo esportivo de luxo com acabamento espelhado e gotas de água na DeltaPro Estética Automotiva"
          className="w-full h-full object-cover object-[65%_center] sm:object-center brightness-[1.18] sm:brightness-100 contrast-[1.08] sm:contrast-100"
          referrerPolicy="no-referrer"
        />
        {/* Mobile-optimized lighter gradients: car is crisp and visible on phones */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#06080D] via-[#06080D]/45 to-[#06080D]/20 sm:via-[#06080D]/75 sm:to-[#06080D]/50" />
        <div className="hidden sm:block absolute inset-0 bg-gradient-to-r from-[#06080D] via-[#06080D]/80 to-transparent" />
        
        {/* Subtle mobile radial text vignette for crisp contrast without washing out the car */}
        <div className="sm:hidden absolute inset-0 bg-gradient-to-b from-[#06080D]/60 via-transparent to-[#06080D]/85 pointer-events-none" />

        {/* Subtle cyan rim glow */}
        <div className="absolute top-1/3 -left-48 w-96 h-96 bg-[#009EFF]/20 rounded-full blur-[140px] pointer-events-none" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="max-w-3xl rounded-2xl p-2 sm:p-0">
          
          {/* Category Kicker - Falling from top */}
          <motion.div
            initial={{ opacity: 0, y: -35 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.0, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
            className="inline-flex items-center gap-2 mb-4 sm:mb-6"
          >
            <span className="w-8 h-[2px] bg-[#009EFF] shadow-[0_0_8px_#009EFF]" />
            <span className="text-xs sm:text-sm font-semibold tracking-[0.25em] text-[#009EFF] uppercase drop-shadow-[0_0_8px_rgba(0,158,255,0.4)]">
              DeltaPro Estética Automotiva
            </span>
          </motion.div>

          {/* Main Headline - Falling smoothly and heavily from above */}
          <div className="overflow-hidden mb-6">
            <motion.h1
              initial={{ opacity: 0, y: -70 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.2, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
              className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold text-white tracking-tight leading-[1.08] text-balance"
            >
              <span className="inline-block">SEU CARRO.</span> <br />
              <motion.span
                initial={{ opacity: 0, y: -40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1.2, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
                className="inline-block text-transparent bg-clip-text bg-gradient-to-r from-white via-slate-100 to-[#009EFF] drop-shadow-[0_0_25px_rgba(0,158,255,0.3)]"
              >
                OUTRO NÍVEL DE CUIDADO.
              </motion.span>
            </motion.h1>
          </div>

          {/* Subheadline - Gliding smoothly from the left side */}
          <motion.p
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1.1, delay: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="text-lg sm:text-xl md:text-2xl font-medium text-slate-200 mb-4 tracking-tight"
          >
            Estética automotiva com atenção a cada detalhe.
          </motion.p>

          {/* Complementary Text - Gliding gracefully from the left side */}
          <motion.p
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1.1, delay: 0.85, ease: [0.16, 1, 0.3, 1] }}
            className="text-sm sm:text-base md:text-lg text-slate-400 font-normal leading-relaxed mb-8 sm:mb-10 max-w-2xl"
          >
            Na DeltaPro, seu veículo recebe mais do que uma lavagem.
            Recebe cuidado, acabamento e atenção aos detalhes.
          </motion.p>

          {/* CTA Group - Floating smoothly up with fluid deceleration */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.1, delay: 1.05, ease: [0.16, 1, 0.3, 1] }}
            className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-2"
          >
            <motion.button
              whileHover={{ scale: 1.025, y: -2 }}
              whileTap={{ scale: 0.98 }}
              onClick={onOpenBooking}
              className="inline-flex items-center justify-center gap-3 px-8 py-4 rounded-xl bg-[#009EFF] hover:bg-[#008CE6] text-white text-sm sm:text-base font-semibold tracking-wider uppercase transition-all duration-300 shadow-[0_0_30px_rgba(0,158,255,0.4)] hover:shadow-[0_0_45px_rgba(0,158,255,0.6)] cursor-pointer"
            >
              <Calendar className="w-5 h-5" />
              <span>Agendar Horário</span>
            </motion.button>

            <motion.button
              whileHover={{ scale: 1.025, y: -2 }}
              whileTap={{ scale: 0.98 }}
              onClick={onExploreServices}
              className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl border border-white/15 bg-white/[0.04] hover:bg-white/[0.09] hover:border-white/30 text-white text-sm sm:text-base font-semibold tracking-wider uppercase backdrop-blur-sm transition-all duration-300 cursor-pointer group"
            >
              <span>Conhecer Serviços</span>
              <ArrowRight className="w-4 h-4 text-[#009EFF] transition-transform duration-300 group-hover:translate-x-1.5" />
            </motion.button>
          </motion.div>
        </div>
      </div>

      {/* Ambient bottom fade for seamless transition */}
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-[#06080D] to-transparent pointer-events-none" />
    </section>
  );
};

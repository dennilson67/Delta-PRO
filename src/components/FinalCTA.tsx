import React from 'react';
import { DeltaProLogo } from './DeltaProLogo';
import { Calendar, ArrowDown } from 'lucide-react';
import { motion } from 'motion/react';

interface FinalCTAProps {
  onOpenBooking: () => void;
}

export const FinalCTA: React.FC<FinalCTAProps> = ({ onOpenBooking }) => {
  return (
    <section className="py-24 sm:py-32 bg-[#06080D] relative overflow-hidden text-center border-b border-white/5">
      {/* Subtle radial ambient neon blue light */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[400px] bg-[#009EFF]/[0.06] rounded-full blur-[160px] pointer-events-none" />

      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center">
        
        {/* Official DELTAPRO Logo (Stacked display) - Dropping smoothly from above */}
        <motion.div
          initial={{ opacity: 0, y: -45, scale: 0.95 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: false, amount: 0.25 }}
          transition={{ duration: 1.1, ease: [0.16, 1, 0.3, 1] }}
          className="mb-8 transform hover:scale-105 transition-transform duration-500"
        >
          <DeltaProLogo variant="stacked" size="lg" />
        </motion.div>

        {/* Headline - Falling heavily and majestically into position */}
        <motion.h2
          initial={{ opacity: 0, y: -65 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.25 }}
          transition={{ duration: 1.2, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
          className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-tight mb-5 max-w-2xl text-balance"
        >
          SEU CARRO MERECE <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-slate-100 to-[#009EFF] drop-shadow-[0_0_25px_rgba(0,158,255,0.35)]">
            ESSE CUIDADO.
          </span>
        </motion.h2>

        {/* Text - Gliding gently into place */}
        <motion.p
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.25 }}
          transition={{ duration: 1.05, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
          className="text-base sm:text-lg md:text-xl text-slate-400 font-normal leading-relaxed mb-8 max-w-xl"
        >
          Agende seu horário e deixe seu veículo em boas mãos.
        </motion.p>

        {/* Minimalist Pointer Arrow */}
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: false, amount: 0.25 }}
          transition={{ duration: 0.8, delay: 0.45 }}
          className="mb-4 text-[#009EFF] animate-bounce drop-shadow-[0_0_8px_#009EFF]"
        >
          <ArrowDown className="w-5 h-5 mx-auto" />
        </motion.div>

        {/* CTA Button - Floating smoothly into place with luxury duration */}
        <motion.button
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.25 }}
          transition={{ duration: 1.1, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
          whileHover={{ scale: 1.025, y: -2 }}
          whileTap={{ scale: 0.98 }}
          onClick={onOpenBooking}
          className="inline-flex items-center justify-center gap-3 px-9 py-4 sm:py-5 rounded-2xl bg-[#009EFF] hover:bg-[#008CE6] text-white font-bold text-sm sm:text-base tracking-widest uppercase transition-all duration-300 shadow-[0_0_35px_rgba(0,158,255,0.45)] hover:shadow-[0_0_50px_rgba(0,158,255,0.7)] cursor-pointer"
        >
          <Calendar className="w-5 h-5" />
          <span>AGENDAR HORÁRIO</span>
        </motion.button>

      </div>
    </section>
  );
};

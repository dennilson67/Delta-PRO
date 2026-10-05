import React from 'react';
import { motion } from 'motion/react';

export const MarqueeBanner: React.FC = () => {
  const phrases = [
    'ESTÉTICA AUTOMOTIVA PREMIUM',
    'CUIDADO MINUCIOSO EM CADA DETALHE',
    'BRILHO PROFUNDO & ACABAMENTO ESPELHADO',
    'PROTEÇÃO E HIGIENIZAÇÃO DE ALTO PADRÃO',
    'EXCELÊNCIA EM CADA ETAPA',
    'SEU VEÍCULO EM OUTRO NÍVEL',
  ];

  return (
    <div className="relative py-4 sm:py-5 bg-[#080C14] border-y border-white/10 overflow-hidden select-none">
      {/* Subtle edge fade overlays for infinite depth illusion */}
      <div className="absolute left-0 top-0 bottom-0 w-16 sm:w-32 bg-gradient-to-r from-[#06080D] to-transparent z-10 pointer-events-none" />
      <div className="absolute right-0 top-0 bottom-0 w-16 sm:w-32 bg-gradient-to-l from-[#06080D] to-transparent z-10 pointer-events-none" />

      {/* Subtle ambient cyan glow lines */}
      <div className="absolute inset-x-0 top-0 h-[1px] bg-gradient-to-r from-transparent via-[#009EFF]/40 to-transparent" />
      <div className="absolute inset-x-0 bottom-0 h-[1px] bg-gradient-to-r from-transparent via-[#009EFF]/40 to-transparent" />

      {/* Infinite scrolling track - slower and extra fluid */}
      <div className="flex w-max">
        <motion.div
          animate={{ x: ['0%', '-50%'] }}
          transition={{
            duration: 46,
            repeat: Infinity,
            ease: 'linear',
          }}
          className="flex items-center gap-8 sm:gap-12 shrink-0 whitespace-nowrap will-change-transform"
        >
          {/* Repeat twice for seamless infinite loop */}
          {[...phrases, ...phrases].map((text, index) => (
            <div key={index} className="inline-flex items-center gap-8 sm:gap-12">
              <span className="text-xs sm:text-sm font-extrabold tracking-[0.25em] sm:tracking-[0.3em] uppercase text-slate-300 hover:text-white transition-colors">
                {text}
              </span>
              <div className="inline-flex items-center justify-center">
                <span className="w-1.5 h-1.5 rounded-full bg-[#009EFF] shadow-[0_0_8px_#009EFF]" />
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

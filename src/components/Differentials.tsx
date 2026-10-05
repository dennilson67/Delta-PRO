import React from 'react';
import { ShieldCheck, Sparkles, Droplets, CheckCircle2 } from 'lucide-react';
import { motion } from 'motion/react';

export const Differentials: React.FC = () => {
  const items = [
    {
      title: 'CUIDADO',
      description: 'Atenção em cada etapa.',
      icon: ShieldCheck,
    },
    {
      title: 'ACABAMENTO',
      description: 'Detalhes que fazem diferença.',
      icon: Sparkles,
    },
    {
      title: 'QUALIDADE',
      description: 'Produtos e processos pensados para o seu veículo.',
      icon: Droplets,
    },
    {
      title: 'CONFIANÇA',
      description: 'Seu carro tratado com cuidado.',
      icon: CheckCircle2,
    },
  ];

  return (
    <section className="py-24 sm:py-32 bg-[#06080D] relative border-b border-white/5 overflow-hidden">
      {/* Subtle background neon ambiance */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[350px] bg-[#009EFF]/[0.04] rounded-full blur-[160px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header with Falling & Gliding Text Animations */}
        <div className="text-center max-w-3xl mx-auto mb-16 sm:mb-24">
          <motion.div
            initial={{ opacity: 0, y: -30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.3 }}
            transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
            className="inline-flex items-center gap-2 mb-3"
          >
            <span className="w-6 h-[2px] bg-[#009EFF] shadow-[0_0_8px_#009EFF]" />
            <span className="text-xs font-semibold tracking-[0.3em] text-[#009EFF] uppercase">
              Posicionamento
            </span>
            <span className="w-6 h-[2px] bg-[#009EFF] shadow-[0_0_8px_#009EFF]" />
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: -50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.3 }}
            transition={{ duration: 1.1, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight leading-tight mb-5"
          >
            DETALHES QUE FAZEM A DIFERENÇA.
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, x: -45 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: false, amount: 0.3 }}
            transition={{ duration: 1.0, delay: 0.25, ease: [0.16, 1, 0.3, 1] }}
            className="text-base sm:text-lg text-slate-400 font-normal leading-relaxed max-w-2xl mx-auto"
          >
            Cada etapa é feita para devolver ao seu veículo uma aparência limpa, cuidada e impecável.
          </motion.p>
        </div>

        {/* Premium Neon Differentials Grid with Slower, Fluid Cascade */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {items.map((item, index) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 60 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false, amount: 0.15 }}
                transition={{ duration: 1.0, delay: index * 0.15, ease: [0.16, 1, 0.3, 1] }}
                whileHover={{ y: -6, transition: { duration: 0.3 } }}
                className="group relative p-8 sm:p-9 rounded-2xl bg-gradient-to-b from-[#0F1420]/90 to-[#0A0D14]/95 border border-[#009EFF]/20 hover:border-[#009EFF]/80 transition-all duration-500 shadow-[0_4px_30px_rgba(0,0,0,0.5),0_0_20px_rgba(0,158,255,0.06)] hover:shadow-[0_8px_40px_rgba(0,0,0,0.6),0_0_35px_rgba(0,158,255,0.3)] flex flex-col items-center text-center cursor-default backdrop-blur-sm"
              >
                {/* Top Neon Light Tube / Glowing Bar */}
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-20 h-[3px] bg-gradient-to-r from-transparent via-[#009EFF] to-transparent shadow-[0_0_12px_#009EFF] rounded-full group-hover:w-32 group-hover:shadow-[0_0_18px_#009EFF] transition-all duration-500" />

                {/* Subtle top gloss reflection */}
                <div className="absolute inset-x-0 top-0 h-16 bg-gradient-to-b from-white/[0.04] to-transparent rounded-t-2xl pointer-events-none" />

                {/* Glowing Neon Icon Container */}
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: false }}
                  transition={{ duration: 0.8, delay: 0.2 + index * 0.15, ease: [0.16, 1, 0.3, 1] }}
                  className="relative mb-6"
                >
                  {/* Neon backlight aura behind icon */}
                  <div className="absolute inset-0 rounded-2xl bg-[#009EFF]/20 blur-md group-hover:bg-[#009EFF]/40 group-hover:blur-lg transition-all duration-300" />
                  
                  <div className="relative w-16 h-16 rounded-2xl bg-gradient-to-br from-[#121A2A] to-[#0A0E18] border border-[#009EFF]/40 group-hover:border-[#009EFF] flex items-center justify-center text-[#009EFF] group-hover:text-white shadow-[0_0_25px_rgba(0,158,255,0.3)] group-hover:shadow-[0_0_30px_rgba(0,158,255,0.5)] transition-all duration-300">
                    <Icon className="w-7 h-7 stroke-[1.8] transition-transform duration-300 group-hover:scale-110" />
                  </div>
                </motion.div>

                {/* Centered Number Indicator with neon sheen */}
                <div className="text-xs font-bold tracking-[0.25em] text-[#009EFF] mb-2.5 opacity-90 drop-shadow-[0_0_8px_rgba(0,158,255,0.5)]">
                  0{index + 1}
                </div>

                {/* Centered Title - Falling smoothly into position */}
                <motion.h3
                  initial={{ opacity: 0, y: -15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: false }}
                  transition={{ duration: 0.8, delay: 0.25 + index * 0.15, ease: [0.16, 1, 0.3, 1] }}
                  className="text-xl font-extrabold text-white tracking-wider mb-2.5 group-hover:text-white transition-colors"
                >
                  {item.title}
                </motion.h3>

                {/* Centered Description */}
                <p className="text-sm text-slate-300 leading-relaxed font-normal max-w-[240px]">
                  {item.description}
                </p>

                {/* Bottom subtle neon accent dot */}
                <div className="mt-6 w-1.5 h-1.5 rounded-full bg-white/20 group-hover:bg-[#009EFF] group-hover:shadow-[0_0_8px_#009EFF] transition-all duration-300" />
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

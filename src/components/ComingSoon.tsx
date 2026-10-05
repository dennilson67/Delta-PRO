import React from 'react';
import { Sparkles, Compass } from 'lucide-react';
import { motion } from 'motion/react';
import polishImg from '../assets/images/paint_correction_polishing_1791219562156.jpg';

export const ComingSoon: React.FC = () => {
  return (
    <section className="py-24 sm:py-32 bg-[#080B10] relative overflow-hidden border-b border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.2 }}
          transition={{ duration: 1.1, ease: [0.16, 1, 0.3, 1] }}
          className="relative rounded-3xl overflow-hidden border border-[#009EFF]/20 hover:border-[#009EFF]/40 bg-[#0C1017] shadow-[0_4px_30px_rgba(0,0,0,0.6),0_0_25px_rgba(0,158,255,0.06)] transition-all duration-500"
        >
          <div className="grid grid-cols-1 lg:grid-cols-12 items-center">
            
            {/* Left Content Column with Falling & Gliding Text */}
            <div className="lg:col-span-6 p-8 sm:p-12 lg:p-16 z-10">
              <motion.div
                initial={{ opacity: 0, y: -20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false }}
                transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
                className="inline-flex items-center gap-2 mb-4"
              >
                <span className="w-2 h-2 rounded-full bg-[#009EFF] shadow-[0_0_8px_#009EFF] animate-pulse" />
                <span className="text-xs font-semibold tracking-[0.25em] text-[#009EFF] uppercase">
                  EM BREVE
                </span>
              </motion.div>

              <motion.h2
                initial={{ opacity: 0, y: -45 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false }}
                transition={{ duration: 1.1, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
                className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white tracking-tight leading-tight mb-4"
              >
                POLIMENTO <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-slate-200 to-slate-400 text-xl sm:text-2xl lg:text-3xl font-bold">
                  E OUTROS SERVIÇOS DE ESTÉTICA AUTOMOTIVA
                </span>
              </motion.h2>

              <motion.p
                initial={{ opacity: 0, x: -35 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: false }}
                transition={{ duration: 1.0, delay: 0.25, ease: [0.16, 1, 0.3, 1] }}
                className="text-sm sm:text-base text-slate-300 font-normal leading-relaxed mb-6"
              >
                Estamos preparando novos serviços de estética automotiva para elevar ainda mais o cuidado com o seu veículo.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false }}
                transition={{ duration: 0.9, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
                className="p-4 rounded-xl bg-white/[0.03] border border-white/10 flex items-center gap-3"
              >
                <Compass className="w-5 h-5 text-[#009EFF] shrink-0" />
                <p className="text-xs text-slate-400">
                  Em fase de preparação técnica e homologação de processos de excelência. Novidades em breve na DeltaPro.
                </p>
              </motion.div>
            </div>

            {/* Right Image Column with Precision Lighting */}
            <div className="lg:col-span-6 relative h-72 sm:h-96 lg:h-[420px] overflow-hidden">
              <img
                src={polishImg}
                alt="Profissional realizando correção de pintura com polimento técnico em estúdio de estética automotiva"
                className="w-full h-full object-cover object-center transition-transform duration-1000 hover:scale-105"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t lg:bg-gradient-to-r from-[#0C1017] via-transparent to-transparent opacity-90 lg:opacity-75" />
              
              <div className="absolute top-6 right-6">
                <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-black/70 backdrop-blur-md border border-[#009EFF]/30 text-[11px] font-semibold text-slate-200 uppercase tracking-wider shadow-[0_0_15px_rgba(0,158,255,0.2)]">
                  <Sparkles className="w-3.5 h-3.5 text-[#009EFF]" />
                  <span>Em Desenvolvimento</span>
                </span>
              </div>
            </div>

          </div>
        </motion.div>

      </div>
    </section>
  );
};

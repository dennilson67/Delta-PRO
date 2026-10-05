import React from 'react';
import { Calendar, Check, Sparkles, Droplets } from 'lucide-react';
import { motion } from 'motion/react';

interface PricingSectionProps {
  onSelectService: (serviceName: string, vehicleType?: string) => void;
}

export const PricingSection: React.FC<PricingSectionProps> = ({ onSelectService }) => {
  const lavagemSimplesPrices = [
    { vehicle: 'Carro de Passeio', price: 85 },
    { vehicle: 'SUV', price: 100 },
    { vehicle: 'Picape', price: 130 },
  ];

  const duchaPrices = [
    { vehicle: 'Carro de Passeio', price: 40 },
    { vehicle: 'SUV', price: 50 },
    { vehicle: 'Picape', price: 60 },
  ];

  return (
    <section id="precos" className="py-24 sm:py-32 bg-[#080B10] relative border-b border-white/5 overflow-hidden">
      {/* Background ambient glow */}
      <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-96 h-96 bg-[#009EFF]/[0.03] rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute top-1/2 right-1/4 -translate-y-1/2 w-96 h-96 bg-[#009EFF]/[0.03] rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header with Falling Headline and Gliding Subtitle */}
        <div className="text-center max-w-3xl mx-auto mb-16 sm:mb-20">
          <motion.div
            initial={{ opacity: 0, y: -25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.25 }}
            transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
            className="inline-flex items-center gap-2 mb-3"
          >
            <span className="w-6 h-[2px] bg-[#009EFF] shadow-[0_0_8px_#009EFF]" />
            <span className="text-xs font-semibold tracking-[0.3em] text-[#009EFF] uppercase">
              Tabela Transparente
            </span>
            <span className="w-6 h-[2px] bg-[#009EFF] shadow-[0_0_8px_#009EFF]" />
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: -50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.25 }}
            transition={{ duration: 1.1, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight leading-tight mb-4"
          >
            SERVIÇOS
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: false, amount: 0.25 }}
            transition={{ duration: 1.0, delay: 0.25, ease: [0.16, 1, 0.3, 1] }}
            className="text-base sm:text-lg text-slate-400 font-normal"
          >
            Cuidado premium para o seu veículo.
          </motion.p>
        </div>

        {/* Pricing Cards Grid with Slower, Fluid Slide-Up & Glow */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-10 max-w-5xl mx-auto">
          
          {/* Card 1: Lavagem Simples */}
          <motion.div
            initial={{ opacity: 0, y: 55 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.15 }}
            transition={{ duration: 1.05, ease: [0.16, 1, 0.3, 1] }}
            whileHover={{ y: -5, transition: { duration: 0.3 } }}
            className="relative rounded-2xl bg-gradient-to-b from-[#0F1420]/95 to-[#0A0D14] border border-[#009EFF]/30 hover:border-[#009EFF]/80 p-8 sm:p-10 flex flex-col justify-between shadow-[0_4px_30px_rgba(0,0,0,0.5),0_0_20px_rgba(0,158,255,0.08)] hover:shadow-[0_8px_40px_rgba(0,0,0,0.6),0_0_35px_rgba(0,158,255,0.25)] transition-all duration-500 backdrop-blur-sm group"
          >
            {/* Top subtle neon light accent */}
            <div className="absolute top-0 left-10 right-10 h-[2px] bg-gradient-to-r from-transparent via-[#009EFF] to-transparent shadow-[0_0_10px_#009EFF]" />

            <div>
              <div className="flex items-center justify-between mb-5">
                <div className="w-12 h-12 rounded-xl bg-[#009EFF]/15 border border-[#009EFF]/40 flex items-center justify-center text-[#009EFF] shadow-[0_0_15px_rgba(0,158,255,0.25)]">
                  <Sparkles className="w-6 h-6 stroke-[1.75]" />
                </div>
                <span className="text-[11px] font-semibold tracking-widest text-[#009EFF] uppercase bg-[#009EFF]/10 px-3 py-1 rounded-full border border-[#009EFF]/30 shadow-[0_0_8px_rgba(0,158,255,0.2)]">
                  Completo & Cuidado
                </span>
              </div>

              {/* Title falling slightly */}
              <motion.h3
                initial={{ opacity: 0, y: -20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false }}
                transition={{ duration: 0.9, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
                className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight mb-2"
              >
                LAVAGEM SIMPLES
              </motion.h3>

              <p className="text-sm text-slate-400 mb-8 leading-relaxed">
                Tratamento meticuloso para renovar a aparência do veículo com processos de cuidado e acabamento superior.
              </p>

              {/* Price Rows by Vehicle */}
              <div className="space-y-4 mb-8">
                {lavagemSimplesPrices.map((item, idx) => (
                  <motion.div
                    key={item.vehicle}
                    initial={{ opacity: 0, x: -25 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: false }}
                    transition={{ duration: 0.7, delay: 0.2 + idx * 0.08, ease: [0.16, 1, 0.3, 1] }}
                    whileHover={{ scale: 1.015, backgroundColor: 'rgba(255,255,255,0.06)' }}
                    className="p-4 rounded-xl bg-white/[0.03] border border-white/[0.08] hover:border-[#009EFF]/40 flex items-center justify-between group/row transition-all duration-300"
                  >
                    <div className="flex items-center gap-3">
                      <div className="w-5 h-5 rounded-full bg-[#009EFF]/20 border border-[#009EFF]/40 flex items-center justify-center text-[#009EFF]">
                        <Check className="w-3 h-3 stroke-[2.5]" />
                      </div>
                      <span className="text-sm sm:text-base font-semibold text-slate-200">
                        {item.vehicle}
                      </span>
                    </div>

                    <div className="flex items-baseline gap-1">
                      <span className="text-xs text-slate-400 font-medium">R$</span>
                      <span className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight tabular-nums group-hover/row:text-[#009EFF] transition-colors">
                        {item.price}
                      </span>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            <motion.button
              whileHover={{ scale: 1.025 }}
              whileTap={{ scale: 0.98 }}
              onClick={() => onSelectService('Lavagem simples')}
              className="w-full py-4 rounded-xl bg-[#009EFF] hover:bg-[#008CE6] text-white font-semibold text-xs sm:text-sm tracking-wider uppercase transition-all duration-300 flex items-center justify-center gap-2 shadow-[0_0_25px_rgba(0,158,255,0.35)] hover:shadow-[0_0_35px_rgba(0,158,255,0.5)] cursor-pointer"
            >
              <Calendar className="w-4 h-4" />
              <span>Agendar Lavagem Simples</span>
            </motion.button>
          </motion.div>

          {/* Card 2: Ducha */}
          <motion.div
            initial={{ opacity: 0, y: 55 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.15 }}
            transition={{ duration: 1.05, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
            whileHover={{ y: -5, transition: { duration: 0.3 } }}
            className="relative rounded-2xl bg-gradient-to-b from-[#0F1420]/95 to-[#0A0D14] border border-white/10 hover:border-white/30 p-8 sm:p-10 flex flex-col justify-between shadow-[0_4px_30px_rgba(0,0,0,0.5)] hover:shadow-[0_8px_40px_rgba(0,0,0,0.6)] transition-all duration-500 backdrop-blur-sm group"
          >
            <div>
              <div className="flex items-center justify-between mb-5">
                <div className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-slate-300">
                  <Droplets className="w-6 h-6 stroke-[1.75]" />
                </div>
                <span className="text-[11px] font-semibold tracking-widest text-slate-400 uppercase bg-white/5 px-3 py-1 rounded-full border border-white/10">
                  Rápido & Eficiente
                </span>
              </div>

              {/* Title falling slightly */}
              <motion.h3
                initial={{ opacity: 0, y: -20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false }}
                transition={{ duration: 0.9, delay: 0.25, ease: [0.16, 1, 0.3, 1] }}
                className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight mb-2"
              >
                DUCHA
              </motion.h3>

              <p className="text-sm text-slate-400 mb-8 leading-relaxed">
                Remoção ágil de poeira e sujidades superficiais para manter o brilho e a elegância da pintura do veículo.
              </p>

              {/* Price Rows by Vehicle */}
              <div className="space-y-4 mb-8">
                {duchaPrices.map((item, idx) => (
                  <motion.div
                    key={item.vehicle}
                    initial={{ opacity: 0, x: -25 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: false }}
                    transition={{ duration: 0.7, delay: 0.3 + idx * 0.08, ease: [0.16, 1, 0.3, 1] }}
                    whileHover={{ scale: 1.015, backgroundColor: 'rgba(255,255,255,0.06)' }}
                    className="p-4 rounded-xl bg-white/[0.03] border border-white/[0.08] hover:border-white/20 flex items-center justify-between group/row transition-all duration-300"
                  >
                    <div className="flex items-center gap-3">
                      <div className="w-5 h-5 rounded-full bg-white/10 flex items-center justify-center text-slate-300">
                        <Check className="w-3 h-3 stroke-[2.5]" />
                      </div>
                      <span className="text-sm sm:text-base font-semibold text-slate-200">
                        {item.vehicle}
                      </span>
                    </div>

                    <div className="flex items-baseline gap-1">
                      <span className="text-xs text-slate-400 font-medium">R$</span>
                      <span className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight tabular-nums">
                        {item.price}
                      </span>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            <motion.button
              whileHover={{ scale: 1.025 }}
              whileTap={{ scale: 0.98 }}
              onClick={() => onSelectService('Ducha')}
              className="w-full py-4 rounded-xl border border-white/15 bg-white/[0.04] hover:bg-white/[0.09] hover:border-white/30 text-white font-semibold text-xs sm:text-sm tracking-wider uppercase transition-all duration-300 flex items-center justify-center gap-2 cursor-pointer"
            >
              <Calendar className="w-4 h-4 text-[#009EFF]" />
              <span>Agendar Ducha</span>
            </motion.button>
          </motion.div>

        </div>

      </div>
    </section>
  );
};

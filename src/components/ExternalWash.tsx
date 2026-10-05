import React from 'react';
import { 
  CircleDot, 
  Disc, 
  Sparkles, 
  Shield, 
  Layers, 
  Sun, 
  Eye,
  Calendar,
  ArrowRight
} from 'lucide-react';
import { motion } from 'motion/react';
import exteriorImg from '../assets/images/exterior_wheel_beading_1791219549498.jpg';

interface ExternalWashProps {
  onOpenBooking: () => void;
}

export const ExternalWash: React.FC<ExternalWashProps> = ({ onOpenBooking }) => {
  const includedItems = [
    { label: 'Caixa de rodas', icon: CircleDot, desc: 'Limpeza de arco e componentes com desengraxante de alta eficiência' },
    { label: 'Rodas por dentro', icon: Disc, desc: 'Descontaminação ferrosa e remoção de fuligem de freio em toda a face interna' },
    { label: 'Lataria impecável', icon: Sparkles, desc: 'Lavagem com técnica dos dois baldes para preservar o verniz de riscos' },
    { label: 'Pretinho no pneu', icon: Shield, desc: 'Acabamento acetinado e hidrorrepelente de longa duração' },
    { label: 'Revitalização de plásticos', icon: Layers, desc: 'Proteção UV contra ressecamento e perda de cor original' },
    { label: 'Cera premium', icon: Sun, desc: 'Camada de proteção com alto brilho e repelência de água e poeira' },
    { label: 'Vidros sem manchas', icon: Eye, desc: 'Desengorduramento e acabamento cristalino para perfeita visibilidade' },
  ];

  return (
    <section id="lavagem-externa" className="py-24 sm:py-32 bg-[#06080D] relative overflow-hidden border-b border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Copy & Checklist with Falling Headline & Gliding Text */}
          <div className="lg:col-span-6">
            
            {/* Kicker falling from above */}
            <motion.div
              initial={{ opacity: 0, y: -25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, amount: 0.2 }}
              transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
              className="inline-flex items-center gap-2 mb-3"
            >
              <span className="w-6 h-[2px] bg-[#009EFF] shadow-[0_0_8px_#009EFF]" />
              <span className="text-xs font-semibold tracking-[0.25em] text-[#009EFF] uppercase">
                LAVAGEM EXTERNA
              </span>
            </motion.div>

            {/* Headline falling powerfully from above */}
            <motion.h2
              initial={{ opacity: 0, y: -55 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, amount: 0.2 }}
              transition={{ duration: 1.1, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
              className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-[1.12] mb-6"
            >
              BRILHO EM <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-slate-100 to-[#009EFF]">
                CADA DETALHE.
              </span>
            </motion.h2>

            {/* Description gliding from the side */}
            <motion.p
              initial={{ opacity: 0, x: -45 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: false, amount: 0.2 }}
              transition={{ duration: 1.0, delay: 0.25, ease: [0.16, 1, 0.3, 1] }}
              className="text-base sm:text-lg text-slate-300 font-normal leading-relaxed mb-8"
            >
              Um tratamento detalhado para a carroceria, rodas e componentes externos, proporcionando acabamento espelhado, proteção e toque suave.
            </motion.p>

            {/* Included Items with Linear Icons - Cascading softly */}
            <div className="space-y-3.5 mb-8">
              <p className="text-xs font-bold tracking-[0.2em] text-slate-400 uppercase">
                Itens incluídos no serviço:
              </p>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {includedItems.map((item, idx) => {
                  const Icon = item.icon;
                  return (
                    <motion.div
                      key={item.label}
                      initial={{ opacity: 0, y: 25 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: false, amount: 0.15 }}
                      transition={{ duration: 0.7, delay: 0.1 + idx * 0.06, ease: [0.16, 1, 0.3, 1] }}
                      whileHover={{ scale: 1.015, backgroundColor: 'rgba(255,255,255,0.06)' }}
                      className="p-3.5 rounded-xl bg-[#0C1017]/80 border border-white/[0.08] hover:border-[#009EFF]/40 transition-all duration-300 flex items-start gap-3 cursor-default"
                    >
                      <div className="w-8 h-8 rounded-lg bg-[#009EFF]/10 border border-[#009EFF]/30 flex items-center justify-center shrink-0 mt-0.5 text-[#009EFF] shadow-[0_0_10px_rgba(0,158,255,0.15)]">
                        <Icon className="w-4 h-4 stroke-[2]" />
                      </div>
                      <div className="min-w-0">
                        <span className="text-sm font-semibold text-white block">
                          {item.label}
                        </span>
                        <span className="text-xs text-slate-400 block leading-snug">
                          {item.desc}
                        </span>
                      </div>
                    </motion.div>
                  );
                })}
              </div>
            </div>

            {/* Note & CTA - Gliding in */}
            <motion.div
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, amount: 0.2 }}
              transition={{ duration: 0.9, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
              className="p-4 rounded-xl bg-white/[0.03] border border-white/10 flex flex-col sm:flex-row sm:items-center justify-between gap-4"
            >
              <div>
                <span className="text-xs text-slate-400 block">Agendamento & Consulta</span>
                <span className="text-sm font-medium text-slate-200">Consulte disponibilidade e valor para o seu veículo.</span>
              </div>
              <motion.button
                whileHover={{ scale: 1.025 }}
                whileTap={{ scale: 0.98 }}
                onClick={onOpenBooking}
                className="inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-lg bg-white/10 hover:bg-[#009EFF] text-white text-xs font-semibold tracking-wider uppercase transition-all duration-300 cursor-pointer shadow-sm hover:shadow-[0_0_20px_rgba(0,158,255,0.3)]"
              >
                <Calendar className="w-4 h-4" />
                <span>Solicitar Orçamento</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </motion.button>
            </motion.div>

          </div>

          {/* Right Column: Image with Luxury Frame & Fluid Entrance */}
          <motion.div
            initial={{ opacity: 0, x: 60 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: false, amount: 0.2 }}
            transition={{ duration: 1.15, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-6 relative"
          >
            <div className="relative rounded-2xl overflow-hidden border border-[#009EFF]/20 hover:border-[#009EFF]/50 shadow-[0_4px_30px_rgba(0,0,0,0.6),0_0_25px_rgba(0,158,255,0.1)] transition-all duration-700 bg-[#0C1017] group">
              <img
                src={exteriorImg}
                alt="Detalhe de roda forjada preta impecável com gotas de água e acabamento cerâmico na DeltaPro"
                className="w-full h-[360px] sm:h-[480px] object-cover object-center transition-transform duration-1000 group-hover:scale-105"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#06080D] via-transparent to-transparent opacity-60" />
              
              {/* Floating badge info on photo */}
              <div className="absolute bottom-6 left-6 right-6 p-4 rounded-xl bg-[#0C1017]/90 backdrop-blur-md border border-white/10 flex items-center justify-between shadow-lg">
                <div>
                  <span className="text-[11px] font-semibold tracking-wider text-slate-400 uppercase block">
                    Acabamento Exterior
                  </span>
                  <span className="text-sm font-bold text-white">
                    Brilho profundo & proteção
                  </span>
                </div>
                <span className="text-xs font-semibold px-3 py-1 rounded bg-[#009EFF]/20 text-[#009EFF] border border-[#009EFF]/40 shadow-[0_0_10px_rgba(0,158,255,0.2)] uppercase tracking-wider">
                  Premium
                </span>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

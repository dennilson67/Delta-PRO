import React, { useState } from 'react';
import { 
  Calendar, 
  Car, 
  User, 
  Phone, 
  FileText, 
  MessageSquare, 
  CheckCircle,
  AlertCircle
} from 'lucide-react';
import { motion } from 'motion/react';

interface BookingSectionProps {
  initialService?: string;
  initialVehicle?: string;
}

export const BookingSection: React.FC<BookingSectionProps> = ({
  initialService = 'Lavagem simples',
  initialVehicle = 'Carro de passeio',
}) => {
  const [name, setName] = useState('');
  const [whatsapp, setWhatsapp] = useState('');
  const [vehicleType, setVehicleType] = useState(initialVehicle);
  const [service, setService] = useState(initialService);
  const [date, setDate] = useState('');
  const [time, setTime] = useState('');
  const [notes, setNotes] = useState('');
  const [errorMsg, setErrorMsg] = useState('');
  const [submitted, setSubmitted] = useState(false);

  // Synchronize when props change (e.g. clicked on pricing card)
  React.useEffect(() => {
    if (initialService) setService(initialService);
  }, [initialService]);

  React.useEffect(() => {
    if (initialVehicle) setVehicleType(initialVehicle);
  }, [initialVehicle]);

  const vehicleOptions = [
    { id: 'Carro de passeio', label: 'Carro de passeio', desc: 'Hatch, Sedan, Cupê' },
    { id: 'SUV', label: 'SUV', desc: 'Crossover, Compacto ou Grande' },
    { id: 'Picape', label: 'Picape', desc: 'Média, Grande ou Cabine Dupla' },
  ];

  const serviceOptions = [
    { id: 'Lavagem simples', label: 'Lavagem simples', desc: 'Cuidado completo lataria e acabamento' },
    { id: 'Ducha', label: 'Ducha', desc: 'Higienização ágil da carroceria' },
    { id: 'Lavagem interna', label: 'Lavagem interna', desc: 'Aspiração, painel, plásticos e vidros' },
    { id: 'Lavagem externa', label: 'Lavagem externa', desc: 'Rodas, caixa de rodas, cera e vidros' },
  ];

  const timeSlots = [
    '08:00', '09:00', '10:00', '11:00', '13:00', '14:00', '15:00', '16:00', '17:00'
  ];

  // Helper to format date for human display (DD/MM/YYYY)
  const formatDisplayDate = (isoDate: string) => {
    if (!isoDate) return '';
    const parts = isoDate.split('-');
    if (parts.length === 3) {
      return `${parts[2]}/${parts[1]}/${parts[0]}`;
    }
    return isoDate;
  };

  // Get minimum date (today)
  const todayIso = new Date().toISOString().split('T')[0];

  const handleBookingSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!name.trim()) {
      setErrorMsg('Por favor, informe seu nome.');
      return;
    }
    if (!whatsapp.trim()) {
      setErrorMsg('Por favor, informe seu WhatsApp para retorno.');
      return;
    }
    if (!vehicleType) {
      setErrorMsg('Selecione o tipo de veículo.');
      return;
    }
    if (!service) {
      setErrorMsg('Selecione o serviço desejado.');
      return;
    }
    if (!date) {
      setErrorMsg('Escolha a data desejada para o agendamento.');
      return;
    }
    if (!time) {
      setErrorMsg('Escolha o horário de preferência.');
      return;
    }

    setErrorMsg('');

    const formattedDate = formatDisplayDate(date);
    const observationText = notes.trim() ? notes.trim() : 'Nenhuma';

    const message = `Olá, DeltaPro! Gostaria de solicitar um agendamento.

Nome: ${name.trim()}
Veículo: ${vehicleType}
Serviço: ${service}
Data: ${formattedDate}
Horário: ${time}
Observações: ${observationText}

Aguardo a confirmação do horário.`;

    const encodedMessage = encodeURIComponent(message);
    const whatsappUrl = `https://wa.me/554899638319?text=${encodedMessage}`;

    setSubmitted(true);

    // Open WhatsApp in new tab/window
    window.open(whatsappUrl, '_blank', 'noopener,noreferrer');
  };

  return (
    <section id="agendamento" className="py-24 sm:py-32 bg-[#06080D] relative border-b border-white/5 overflow-hidden">
      {/* Ambient Blue Halo */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[750px] h-[500px] bg-[#009EFF]/[0.035] rounded-full blur-[160px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header with Falling Headline and Gliding Subtitle */}
        <div className="text-center max-w-3xl mx-auto mb-14 sm:mb-16">
          <motion.div
            initial={{ opacity: 0, y: -25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.25 }}
            transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
            className="inline-flex items-center gap-2 mb-3"
          >
            <span className="w-6 h-[2px] bg-[#009EFF] shadow-[0_0_8px_#009EFF]" />
            <span className="text-xs font-semibold tracking-[0.25em] text-[#009EFF] uppercase">
              Agendamento Online
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
            AGENDE SEU HORÁRIO
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: false, amount: 0.25 }}
            transition={{ duration: 1.0, delay: 0.25, ease: [0.16, 1, 0.3, 1] }}
            className="text-base sm:text-lg text-slate-400 font-normal"
          >
            Escolha o serviço, informe seus dados e envie sua solicitação.
          </motion.p>
        </div>

        {/* Booking Card & Form with Slower, Fluid Entrance */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.15 }}
          transition={{ duration: 1.1, ease: [0.16, 1, 0.3, 1] }}
          className="max-w-4xl mx-auto"
        >
          <div className="bg-gradient-to-b from-[#0F1420]/95 to-[#0A0D14] rounded-3xl border border-[#009EFF]/30 hover:border-[#009EFF]/60 p-6 sm:p-10 lg:p-12 shadow-[0_4px_40px_rgba(0,0,0,0.6),0_0_30px_rgba(0,158,255,0.08)] relative overflow-hidden transition-all duration-500 backdrop-blur-md">
            
            {/* Top neon glow line */}
            <div className="absolute top-0 left-12 right-12 h-[2px] bg-gradient-to-r from-transparent via-[#009EFF] to-transparent shadow-[0_0_15px_#009EFF]" />

            <form onSubmit={handleBookingSubmit} className="space-y-8">
              
              {/* Step 1: Personal Data */}
              <div>
                <span className="text-xs font-bold tracking-[0.2em] text-[#009EFF] uppercase block mb-4">
                  01. Seus Dados de Contato
                </span>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="client-name" className="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-2">
                      Nome Completo *
                    </label>
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-slate-500">
                        <User className="w-4 h-4" />
                      </div>
                      <input
                        id="client-name"
                        type="text"
                        required
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        placeholder="Ex: Carlos Eduardo"
                        className="w-full pl-10 pr-4 py-3.5 rounded-xl bg-white/[0.04] border border-white/10 text-white placeholder-slate-500 text-sm focus:outline-none focus:border-[#009EFF] focus:ring-1 focus:ring-[#009EFF] transition-colors"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="client-phone" className="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-2">
                      WhatsApp com DDD *
                    </label>
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-slate-500">
                        <Phone className="w-4 h-4" />
                      </div>
                      <input
                        id="client-phone"
                        type="tel"
                        required
                        value={whatsapp}
                        onChange={(e) => setWhatsapp(e.target.value)}
                        placeholder="Ex: (48) 99999-9999"
                        className="w-full pl-10 pr-4 py-3.5 rounded-xl bg-white/[0.04] border border-white/10 text-white placeholder-slate-500 text-sm focus:outline-none focus:border-[#009EFF] focus:ring-1 focus:ring-[#009EFF] transition-colors"
                      />
                    </div>
                  </div>
                </div>
              </div>

              {/* Step 2: Vehicle Type */}
              <div>
                <span className="text-xs font-bold tracking-[0.2em] text-[#009EFF] uppercase block mb-4">
                  02. Tipo de Veículo *
                </span>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                  {vehicleOptions.map((opt) => {
                    const isSelected = vehicleType === opt.id;
                    return (
                      <motion.button
                        key={opt.id}
                        type="button"
                        whileHover={{ scale: 1.015 }}
                        whileTap={{ scale: 0.98 }}
                        onClick={() => setVehicleType(opt.id)}
                        className={`p-4 rounded-xl text-left border transition-all duration-300 cursor-pointer flex flex-col justify-between ${
                          isSelected
                            ? 'bg-[#009EFF]/20 border-[#009EFF] text-white shadow-[0_0_20px_rgba(0,158,255,0.25)]'
                            : 'bg-white/[0.03] border-white/10 text-slate-300 hover:bg-white/[0.06] hover:border-white/20'
                        }`}
                      >
                        <div className="flex items-center justify-between mb-2">
                          <Car className={`w-5 h-5 ${isSelected ? 'text-[#009EFF]' : 'text-slate-400'}`} />
                          <div className={`w-4 h-4 rounded-full border flex items-center justify-center ${isSelected ? 'border-[#009EFF] bg-[#009EFF]' : 'border-slate-600'}`}>
                            {isSelected && <div className="w-1.5 h-1.5 rounded-full bg-white" />}
                          </div>
                        </div>
                        <div>
                          <div className="font-semibold text-sm text-white mb-0.5">{opt.label}</div>
                          <div className="text-[11px] text-slate-400">{opt.desc}</div>
                        </div>
                      </motion.button>
                    );
                  })}
                </div>
              </div>

              {/* Step 3: Service Selection */}
              <div>
                <span className="text-xs font-bold tracking-[0.2em] text-[#009EFF] uppercase block mb-4">
                  03. Serviço Desejado *
                </span>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {serviceOptions.map((srv) => {
                    const isSelected = service === srv.id;
                    return (
                      <motion.button
                        key={srv.id}
                        type="button"
                        whileHover={{ scale: 1.015 }}
                        whileTap={{ scale: 0.98 }}
                        onClick={() => setService(srv.id)}
                        className={`p-4 rounded-xl text-left border transition-all duration-300 cursor-pointer flex items-start justify-between ${
                          isSelected
                            ? 'bg-[#009EFF]/20 border-[#009EFF] text-white shadow-[0_0_20px_rgba(0,158,255,0.25)]'
                            : 'bg-white/[0.03] border-white/10 text-slate-300 hover:bg-white/[0.06] hover:border-white/20'
                        }`}
                      >
                        <div className="min-w-0 pr-2">
                          <div className="font-bold text-sm text-white mb-0.5">{srv.label}</div>
                          <div className="text-xs text-slate-400 leading-snug">{srv.desc}</div>
                        </div>
                        <div className={`w-4 h-4 rounded-full border shrink-0 mt-0.5 flex items-center justify-center ${isSelected ? 'border-[#009EFF] bg-[#009EFF]' : 'border-slate-600'}`}>
                          {isSelected && <div className="w-1.5 h-1.5 rounded-full bg-white" />}
                        </div>
                      </motion.button>
                    );
                  })}
                </div>
              </div>

              {/* Step 4: Date & Time */}
              <div>
                <span className="text-xs font-bold tracking-[0.2em] text-[#009EFF] uppercase block mb-4">
                  04. Data & Horário de Preferência *
                </span>
                <div className="grid grid-cols-1 sm:grid-cols-12 gap-4">
                  
                  {/* Date Input */}
                  <div className="sm:col-span-5">
                    <label htmlFor="booking-date" className="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-2">
                      Escolha o Dia *
                    </label>
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-slate-500">
                        <Calendar className="w-4 h-4" />
                      </div>
                      <input
                        id="booking-date"
                        type="date"
                        min={todayIso}
                        required
                        value={date}
                        onChange={(e) => setDate(e.target.value)}
                        className="w-full pl-10 pr-4 py-3.5 rounded-xl bg-white/[0.04] border border-white/10 text-white placeholder-slate-500 text-sm focus:outline-none focus:border-[#009EFF] focus:ring-1 focus:ring-[#009EFF] transition-colors [color-scheme:dark]"
                      />
                    </div>
                  </div>

                  {/* Time Slots */}
                  <div className="sm:col-span-7">
                    <label className="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-2">
                      Horário Sugerido *
                    </label>
                    <div className="grid grid-cols-3 sm:grid-cols-5 gap-2">
                      {timeSlots.map((slot) => {
                        const isSelected = time === slot;
                        return (
                          <button
                            key={slot}
                            type="button"
                            onClick={() => setTime(slot)}
                            className={`py-2.5 px-1 text-center text-xs font-bold rounded-lg border transition-all duration-200 cursor-pointer ${
                              isSelected
                                ? 'bg-[#009EFF] border-[#009EFF] text-white shadow-[0_0_12px_rgba(0,158,255,0.4)]'
                                : 'bg-white/[0.03] border-white/10 text-slate-300 hover:border-white/25 hover:bg-white/[0.06]'
                            }`}
                          >
                            {slot}
                          </button>
                        );
                      })}
                    </div>
                  </div>

                </div>
              </div>

              {/* Step 5: Optional Observations */}
              <div>
                <label htmlFor="booking-notes" className="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-2">
                  Observações Opcionais
                </label>
                <div className="relative">
                  <div className="absolute top-3.5 left-3.5 pointer-events-none text-slate-500">
                    <FileText className="w-4 h-4" />
                  </div>
                  <textarea
                    id="booking-notes"
                    rows={2}
                    value={notes}
                    onChange={(e) => setNotes(e.target.value)}
                    placeholder="Alguma atenção especial? Ex: manchas no banco, sujeira pesada, horário limite..."
                    className="w-full pl-10 pr-4 py-3 rounded-xl bg-white/[0.04] border border-white/10 text-white placeholder-slate-500 text-sm focus:outline-none focus:border-[#009EFF] focus:ring-1 focus:ring-[#009EFF] transition-colors resize-none"
                  />
                </div>
              </div>

              {/* Feedback Error / Success */}
              {errorMsg && (
                <div className="p-4 rounded-xl bg-red-500/10 border border-red-500/30 text-red-400 text-xs sm:text-sm flex items-center gap-3">
                  <AlertCircle className="w-5 h-5 shrink-0" />
                  <span>{errorMsg}</span>
                </div>
              )}

              {submitted && (
                <div className="p-4 rounded-xl bg-[#009EFF]/15 border border-[#009EFF]/40 text-slate-200 text-xs sm:text-sm flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-[#009EFF] shrink-0" />
                  <div>
                    <span className="font-semibold block text-white">Solicitação gerada com sucesso!</span>
                    <span>O WhatsApp da DeltaPro foi aberto para envio da sua mensagem. Caso a janela não tenha aberto, clique novamente no botão abaixo.</span>
                  </div>
                </div>
              )}

              {/* Action Button: AGENDAR PELO WHATSAPP */}
              <div className="pt-4">
                <motion.button
                  type="submit"
                  whileHover={{ scale: 1.025, y: -2 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full py-4 sm:py-5 px-6 rounded-2xl bg-[#009EFF] hover:bg-[#008CE6] text-white font-bold text-sm sm:text-base tracking-widest uppercase transition-all duration-300 shadow-[0_0_35px_rgba(0,158,255,0.4)] hover:shadow-[0_0_45px_rgba(0,158,255,0.6)] flex items-center justify-center gap-3 cursor-pointer"
                >
                  <MessageSquare className="w-5 h-5" />
                  <span>AGENDAR PELO WHATSAPP</span>
                </motion.button>

                <p className="text-center text-xs text-slate-500 mt-3 font-medium">
                  Atendimento via WhatsApp Oficial: <span className="text-slate-400 font-semibold">+55 (48) 99638-319</span>
                </p>
              </div>

            </form>
          </div>
        </motion.div>

      </div>
    </section>
  );
};

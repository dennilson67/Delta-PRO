import React from 'react';
import { DeltaProLogo } from './DeltaProLogo';
import { MessageSquare, Instagram, ArrowUp } from 'lucide-react';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer id="contato" className="bg-[#05060A] text-slate-400 py-16 sm:py-20 border-t border-white/5 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 lg:gap-12 pb-14 border-b border-white/5">
          
          {/* Col 1: Brand & Logo */}
          <div className="md:col-span-5 flex flex-col justify-between">
            <div>
              <DeltaProLogo variant="horizontal" size="md" />
              <p className="mt-4 text-xs sm:text-sm text-slate-400 max-w-sm leading-relaxed">
                Estética automotiva especializada com alto padrão de acabamento, cuidado e atenção a cada detalhe.
              </p>
            </div>
          </div>

          {/* Col 2: Navigation Links */}
          <div className="md:col-span-3">
            <h4 className="text-xs font-bold text-white tracking-[0.2em] uppercase mb-4">
              Navegação
            </h4>
            <ul className="space-y-2.5 text-xs sm:text-sm">
              <li>
                <a href="#inicio" className="hover:text-white transition-colors">
                  Início
                </a>
              </li>
              <li>
                <a href="#servicos" className="hover:text-white transition-colors">
                  Serviços
                </a>
              </li>
              <li>
                <a href="#precos" className="hover:text-white transition-colors">
                  Preços
                </a>
              </li>
              <li>
                <a href="#agendamento" className="hover:text-white transition-colors">
                  Agendamento
                </a>
              </li>
            </ul>
          </div>

          {/* Col 3: Contact & Channels */}
          <div className="md:col-span-4">
            <h4 className="text-xs font-bold text-white tracking-[0.2em] uppercase mb-4">
              Contato
            </h4>
            <div className="space-y-3 text-xs sm:text-sm">
              <div>
                <span className="text-slate-500 block text-[11px] uppercase tracking-wider mb-1">
                  WhatsApp Oficial
                </span>
                <a
                  href="https://wa.me/554899638319"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-white hover:text-[#009EFF] transition-colors font-medium"
                >
                  <MessageSquare className="w-4 h-4 text-[#009EFF]" />
                  <span>+55 48 99638-319</span>
                </a>
              </div>

              <div className="pt-2">
                <span className="text-slate-500 block text-[11px] uppercase tracking-wider mb-1">
                  Rede Social
                </span>
                <div className="inline-flex items-center gap-2 text-slate-400">
                  <Instagram className="w-4 h-4 text-slate-500" />
                  <span className="text-xs">Instagram (Em breve)</span>
                </div>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Bar: Copyright & Back to Top */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <p>© 2026 DeltaPro Estética Automotiva. Todos os direitos reservados.</p>
          
          <button
            onClick={scrollToTop}
            className="inline-flex items-center gap-1.5 text-slate-400 hover:text-white transition-colors py-1 cursor-pointer"
            aria-label="Voltar ao topo da página"
          >
            <span>Voltar ao topo</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>

      </div>
    </footer>
  );
};

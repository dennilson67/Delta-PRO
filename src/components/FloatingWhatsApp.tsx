import React from 'react';
import { MessageSquare } from 'lucide-react';

export const FloatingWhatsApp: React.FC = () => {
  return (
    <a
      href="https://wa.me/554899638319"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-40 p-3.5 rounded-full bg-[#009EFF] text-white shadow-[0_4px_25px_rgba(0,158,255,0.45)] hover:bg-[#008CE6] hover:scale-110 active:scale-95 transition-all duration-300 flex items-center justify-center group focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-[#06080D] focus:ring-[#009EFF]"
      aria-label="Falar no WhatsApp com a DeltaPro"
    >
      <MessageSquare className="w-6 h-6 fill-white" />
      <span className="max-w-0 overflow-hidden whitespace-nowrap group-hover:max-w-xs transition-all duration-300 ease-in-out text-xs font-bold tracking-wide uppercase px-0 group-hover:px-2">
        WhatsApp
      </span>
    </a>
  );
};

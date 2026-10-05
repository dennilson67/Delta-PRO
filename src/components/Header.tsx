import React, { useState, useEffect } from 'react';
import { DeltaProLogo } from './DeltaProLogo';
import { Menu, X, Calendar, MessageSquare, ArrowRight } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

interface HeaderProps {
  onOpenBooking: () => void;
}

export const Header: React.FC<HeaderProps> = ({ onOpenBooking }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Prevent background scroll when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isMobileMenuOpen]);

  const navLinks = [
    { label: 'Início', href: '#inicio' },
    { label: 'Serviços', href: '#servicos' },
    { label: 'Preços', href: '#precos' },
    { label: 'Agendar', href: '#agendamento' },
    { label: 'Contato', href: '#contato' },
  ];

  const handleLinkClick = (href: string) => {
    setIsMobileMenuOpen(false);
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          isScrolled
            ? 'bg-[#06080D]/92 backdrop-blur-md border-b border-white/10 shadow-[0_4px_30px_rgba(0,0,0,0.8)] py-3.5'
            : 'bg-transparent border-b border-white/5 py-5'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {/* Zone 1: Logo */}
            <a
              href="#inicio"
              className="group focus:outline-none focus-visible:ring-2 focus-visible:ring-[#009EFF] rounded-md transition-opacity"
              aria-label="DeltaPro Estética Automotiva - Início"
            >
              <DeltaProLogo variant="horizontal" size="md" />
            </a>

            {/* Zone 2: Navigation Links (Desktop) */}
            <nav className="hidden md:flex items-center gap-8" aria-label="Navegação Principal">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={(e) => {
                    e.preventDefault();
                    handleLinkClick(link.href);
                  }}
                  className="text-xs lg:text-sm font-medium tracking-wide text-slate-300 hover:text-white uppercase transition-colors relative py-1 group"
                >
                  {link.label}
                  <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-[#009EFF] shadow-[0_0_8px_#009EFF] transition-all duration-300 group-hover:w-full" />
                </a>
              ))}
            </nav>

            {/* Zone 3: CTA & Mobile Hamburger */}
            <div className="flex items-center gap-3">
              <motion.button
                whileHover={{ scale: 1.025, y: -2 }}
                whileTap={{ scale: 0.98 }}
                onClick={onOpenBooking}
                className="hidden sm:inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-lg bg-[#009EFF] hover:bg-[#008CE6] text-white text-xs lg:text-sm font-semibold tracking-wider uppercase transition-all duration-300 shadow-[0_0_20px_rgba(0,158,255,0.35)] hover:shadow-[0_0_30px_rgba(0,158,255,0.55)] cursor-pointer"
              >
                <Calendar className="w-4 h-4" />
                <span>Agendar Horário</span>
              </motion.button>

              {/* Hamburger Button for Mobile with Animated Icon Toggle */}
              <motion.button
                whileTap={{ scale: 0.9 }}
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="md:hidden p-2.5 text-slate-200 hover:text-white bg-white/[0.05] hover:bg-white/[0.1] border border-white/10 rounded-xl transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-[#009EFF] cursor-pointer"
                aria-expanded={isMobileMenuOpen}
                aria-label={isMobileMenuOpen ? 'Fechar menu' : 'Abrir menu de navegação'}
              >
                <AnimatePresence mode="wait" initial={false}>
                  {isMobileMenuOpen ? (
                    <motion.div
                      key="close"
                      initial={{ rotate: -90, opacity: 0 }}
                      animate={{ rotate: 0, opacity: 1 }}
                      exit={{ rotate: 90, opacity: 0 }}
                      transition={{ duration: 0.25 }}
                    >
                      <X className="w-5 h-5 text-[#009EFF]" />
                    </motion.div>
                  ) : (
                    <motion.div
                      key="menu"
                      initial={{ rotate: 90, opacity: 0 }}
                      animate={{ rotate: 0, opacity: 1 }}
                      exit={{ rotate: -90, opacity: 0 }}
                      transition={{ duration: 0.25 }}
                    >
                      <Menu className="w-5 h-5" />
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.button>
            </div>
          </div>
        </div>
      </header>

      {/* Fluid Mobile Drawer Menu with AnimatePresence */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
            className="fixed inset-0 z-40 md:hidden bg-[#06080D]/95 backdrop-blur-2xl flex flex-col justify-between pt-24 px-6 pb-10"
          >
            {/* Top ambient blue neon glow in menu */}
            <div className="absolute top-16 left-1/2 -translate-x-1/2 w-72 h-36 bg-[#009EFF]/10 rounded-full blur-[90px] pointer-events-none" />

            <div className="relative z-10 space-y-6">
              {/* Header Branding in Menu */}
              <motion.div
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.5, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
                className="pb-4 border-b border-white/10 flex items-center justify-between"
              >
                <DeltaProLogo variant="horizontal" size="sm" />
                <span className="text-[10px] tracking-[0.2em] uppercase font-semibold text-[#009EFF] bg-[#009EFF]/10 px-2.5 py-1 rounded-full border border-[#009EFF]/20">
                  Menu
                </span>
              </motion.div>

              {/* Navigation Links with Cascade Falling/Gliding Entrance */}
              <nav className="flex flex-col space-y-2" aria-label="Navegação Mobile">
                {navLinks.map((link, index) => (
                  <motion.a
                    key={link.label}
                    href={link.href}
                    initial={{ opacity: 0, x: -30 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -15 }}
                    transition={{
                      duration: 0.5,
                      delay: 0.15 + index * 0.08,
                      ease: [0.16, 1, 0.3, 1],
                    }}
                    onClick={(e) => {
                      e.preventDefault();
                      handleLinkClick(link.href);
                    }}
                    className="group py-3.5 px-3 rounded-xl hover:bg-white/[0.04] text-lg sm:text-xl font-bold tracking-wider text-slate-200 hover:text-white border-b border-white/5 flex items-center justify-between transition-colors"
                  >
                    <span className="group-hover:translate-x-1.5 transition-transform duration-300">
                      {link.label}
                    </span>
                    <div className="w-8 h-8 rounded-lg bg-white/[0.03] group-hover:bg-[#009EFF]/20 border border-white/5 group-hover:border-[#009EFF]/30 flex items-center justify-center text-slate-400 group-hover:text-[#009EFF] transition-all duration-300">
                      <ArrowRight className="w-4 h-4" />
                    </div>
                  </motion.a>
                ))}
              </nav>
            </div>

            {/* Bottom Actions Floating In */}
            <motion.div
              initial={{ opacity: 0, y: 35 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 20 }}
              transition={{ duration: 0.6, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
              className="relative z-10 space-y-3 pt-6 border-t border-white/10"
            >
              <button
                onClick={() => {
                  setIsMobileMenuOpen(false);
                  onOpenBooking();
                }}
                className="w-full py-4 px-4 rounded-xl bg-[#009EFF] hover:bg-[#008CE6] active:scale-[0.99] text-white font-bold text-sm tracking-widest uppercase flex items-center justify-center gap-2.5 shadow-[0_0_25px_rgba(0,158,255,0.4)] transition-all cursor-pointer"
              >
                <Calendar className="w-4 h-4" />
                <span>Agendar Horário</span>
              </button>

              <a
                href="https://wa.me/554899638319"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-3.5 px-4 rounded-xl border border-white/15 bg-white/[0.04] hover:bg-white/[0.08] text-slate-300 font-semibold text-xs tracking-wider uppercase flex items-center justify-center gap-2 transition-colors"
              >
                <MessageSquare className="w-4 h-4 text-[#009EFF]" />
                <span>WhatsApp: (48) 99638-319</span>
              </a>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

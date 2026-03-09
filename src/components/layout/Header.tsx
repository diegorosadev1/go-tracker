import React from "react";
import { Menu, X, User } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import { Link } from "react-router-dom";

interface HeaderProps {
  scrolled: boolean;
  isMenuOpen: boolean;
  setIsMenuOpen: (open: boolean) => void;
}

const navLinkClass =
  "text-zinc-700 font-bold text-sm uppercase hover:text-[#1e3a8a] transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-[#F7941E] focus-visible:ring-offset-2 rounded-sm";

const homeLinkClass =
  "text-[#1e3a8a] font-bold text-sm uppercase hover:text-[#F7941E] transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-[#F7941E] focus-visible:ring-offset-2 rounded-sm";

const clientAreaDesktopClass =
  "bg-[#1e3a8a] text-white px-6 py-2.5 rounded-full text-sm font-bold uppercase tracking-wider hover:bg-[#16306f] transition-all shadow-md inline-flex items-center gap-2 whitespace-nowrap focus:outline-none focus-visible:ring-2 focus-visible:ring-[#F7941E] focus-visible:ring-offset-2";

const clientAreaMobileClass =
  "lg:hidden bg-[#1e3a8a] text-white px-4 py-2.5 rounded-full text-[10px] sm:text-xs font-bold uppercase tracking-wide hover:bg-[#16306f] transition-all shadow-md inline-flex items-center justify-center gap-1.5 whitespace-nowrap shrink-0 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#F7941E] focus-visible:ring-offset-2 min-w-[150px] sm:min-w-[180px]";

export const Header = ({
  scrolled,
  isMenuOpen,
  setIsMenuOpen,
}: HeaderProps) => {
  const closeMenu = () => setIsMenuOpen(false);
  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <>
      <header
        className={`sticky top-0 z-50 transition-all duration-300 border-b border-zinc-200/70 ${
          scrolled
            ? "bg-white/95 backdrop-blur-md shadow-md"
            : "bg-white/90 backdrop-blur-sm"
        }`}
        role="banner"
      >
        <div className="bg-zinc-100 lg:bg-transparent max-w-7xl mx-auto px-4 sm:px-5 ">
          <div className="py-3 lg:py-0   lg:bg-transparent ">
            <div className="flex flex-col  lg:flex-row lg:items-center lg:justify-between gap-3 lg:min-h-[84px]">
              {/* Mobile: logo em cima | Desktop: logo à esquerda */}
              <div className="flex justify-center bg-gray/50 lg:justify-start ">
                <Link
                  to="/"
                  className="shrink-0 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#F7941E] focus-visible:ring-offset-2 rounded-md"
                  onClick={closeMenu}
                  aria-label="Ir para a página inicial da Go Tracker"
                >
                  <img
                    src="/assets/img/logo.png"
                    alt="Go Tracker - Rastreamento Veicular"
                    className="h-8 h-20 md:h-20 object-contain"
                  />
                </Link>
              </div>

              {/* Mobile: botões abaixo da logo | Desktop: escondido */}
              <div className="flex items-center justify-between gap-3 lg:hidden ">
                <a
                  href="https://gotracker.seeflex.com.br/users/login"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={clientAreaMobileClass}
                  aria-label="Abrir Área do Cliente em uma nova aba"
                >
                  <User size={14} aria-hidden="true" />
                  <span className="truncate">Área do Cliente</span>
                </a>

                <button
                  type="button"
                  className="text-[#1e3a8a] p-2.5 rounded-xl shrink-0 hover:bg-[#1e3a8a]/5 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-[#F7941E] focus-visible:ring-offset-2"
                  onClick={toggleMenu}
                  aria-expanded={isMenuOpen}
                  aria-controls="mobile-menu"
                  aria-label={isMenuOpen ? "Fechar menu" : "Abrir menu"}
                >
                  {isMenuOpen ? (
                    <X size={28} aria-hidden="true" />
                  ) : (
                    <Menu size={28} aria-hidden="true" />
                  )}
                </button>
              </div>

              {/* Desktop */}
              <nav
                className="hidden lg:flex items-center gap-8"
                aria-label="Navegação principal"
              >
                <Link to="/" className={homeLinkClass} aria-current="page">
                  Home
                </Link>

                <a href="/#quem-somos" className={navLinkClass}>
                  Quem Somos
                </a>

                <a href="/#servicos" className={navLinkClass}>
                  Soluções
                </a>

                <a href="/#depoimentos" className={navLinkClass}>
                  Depoimentos
                </a>

                <a href="/#contato" className={navLinkClass}>
                  Contato
                </a>

                <a
                  href="https://gotracker.seeflex.com.br/users/login"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={clientAreaDesktopClass}
                  aria-label="Abrir Área do Cliente em uma nova aba"
                >
                  <User size={16} aria-hidden="true" />
                  <span>Área do Cliente</span>
                </a>
              </nav>
            </div>
          </div>
        </div>
      </header>

      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            id="mobile-menu"
            initial={{ opacity: 0, y: -16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -16 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-40 bg-white pt-28 px-6 lg:hidden"
          >
            <nav
              className="flex flex-col gap-5 text-start mt-20"
              aria-label="Menu mobile"
            >
              <Link
                to="/"
                className="text-2xl font-bold text-[#1e3a8a] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#F7941E] focus-visible:ring-offset-2 rounded-md"
                onClick={closeMenu}
                aria-current="page"
              >
                Home
              </Link>

              <a
                href="/#quem-somos"
                className="text-2xl font-bold text-zinc-700 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#F7941E] focus-visible:ring-offset-2 rounded-md"
                onClick={closeMenu}
              >
                Quem Somos
              </a>

              <a
                href="/#servicos"
                className="text-2xl font-bold text-zinc-700 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#F7941E] focus-visible:ring-offset-2 rounded-md"
                onClick={closeMenu}
              >
                Soluções
              </a>

              <a
                href="/#depoimentos"
                className="text-2xl font-bold text-zinc-700 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#F7941E] focus-visible:ring-offset-2 rounded-md"
                onClick={closeMenu}
              >
                Depoimentos
              </a>

              <a
                href="/#contato"
                className="text-2xl font-bold text-zinc-700 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#F7941E] focus-visible:ring-offset-2 rounded-md"
                onClick={closeMenu}
              >
                Contato
              </a>

              <a
                href="https://gotracker.seeflex.com.br/users/login"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-2 bg-[#1e3a8a] text-white py-4 px-6 rounded-xl text-lg font-bold inline-flex items-center justify-center gap-2 shadow-md focus:outline-none focus-visible:ring-2 focus-visible:ring-[#F7941E] focus-visible:ring-offset-2"
                onClick={closeMenu}
                aria-label="Abrir Área do Cliente em uma nova aba"
              >
                <User size={18} aria-hidden="true" />
                <span>Área do Cliente</span>
              </a>

              <button
                type="button"
                className="mt-2 bg-[#F7941E] text-white py-4 rounded-xl text-lg font-bold shadow-md focus:outline-none focus-visible:ring-2 focus-visible:ring-[#1e3a8a] focus-visible:ring-offset-2"
              >
                Falar com Consultor
              </button>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

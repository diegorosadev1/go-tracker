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
  "text-zinc-700 font-bold text-sm uppercase hover:text-[#2B3990] transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-[#F7941E] focus-visible:ring-offset-2 rounded-sm";

const homeLinkClass =
  "text-[#2B3990] font-bold text-sm uppercase hover:text-[#F7941E] transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-[#F7941E] focus-visible:ring-offset-2 rounded-sm";

const clientAreaClass =
  "bg-[#2B3990] text-white px-6 py-2.5 rounded-full text-sm font-bold uppercase tracking-wider hover:bg-[#1e2866] transition-all shadow-md inline-flex items-center gap-2 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#F7941E] focus-visible:ring-offset-2";

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
        className={`sticky top-0 z-50 transition-all duration-300 ${
          scrolled
            ? "bg-white/90 backdrop-blur-md shadow-lg py-2"
            : "bg-zinc-100/80 backdrop-blur-sm py-4"
        }`}
        role="banner"
      >
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex items-center justify-between gap-4">
            <Link
              to="/"
              className="shrink-0 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#F7941E] focus-visible:ring-offset-2 rounded-md"
              onClick={closeMenu}
              aria-label="Ir para a página inicial da Go Tracker"
            >
              <img
                src="/assets/img/logo.png"
                alt="Go Tracker - Rastreamento Veicular"
                className="h-16 w-auto md:h-20"
              />
            </Link>

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
                className={clientAreaClass}
                aria-label="Abrir Área do Cliente em uma nova aba"
              >
                <User size={16} aria-hidden="true" />
                <span>Área do Cliente</span>
              </a>
            </nav>

            <button
              type="button"
              className="lg:hidden text-[#2B3990] p-2 rounded-md focus:outline-none focus-visible:ring-2 focus-visible:ring-[#F7941E] focus-visible:ring-offset-2"
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
        </div>
      </header>

      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            id="mobile-menu"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-40 bg-zinc-100 pt-24 px-6 lg:hidden"
          >
            <nav
              className="flex flex-col gap-6 text-center"
              aria-label="Menu mobile"
            >
              <Link
                to="/"
                className="text-2xl font-bold text-[#2B3990] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#F7941E] focus-visible:ring-offset-2 rounded-md"
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
                className="mt-2 bg-[#2B3990] text-white py-4 px-6 rounded-xl text-lg font-bold inline-flex items-center justify-center gap-2 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#F7941E] focus-visible:ring-offset-2"
                onClick={closeMenu}
                aria-label="Abrir Área do Cliente em uma nova aba"
              >
                <User size={18} aria-hidden="true" />
                <span>Área do Cliente</span>
              </a>

              <button
                type="button"
                className="mt-2 bg-[#F7941E] text-white py-4 rounded-xl text-lg font-bold focus:outline-none focus-visible:ring-2 focus-visible:ring-[#2B3990] focus-visible:ring-offset-2"
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
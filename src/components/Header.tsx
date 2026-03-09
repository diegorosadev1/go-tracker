import React from 'react';
import { Menu, X, User } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { Link } from 'react-router-dom';

interface HeaderProps {
  scrolled: boolean;
  isMenuOpen: boolean;
  setIsMenuOpen: (open: boolean) => void;
}

export const Header = ({ scrolled, isMenuOpen, setIsMenuOpen }: HeaderProps) => (
  <>
    <header className={`sticky top-0 z-50 transition-all duration-300 ${scrolled ? 'bg-white/90 backdrop-blur-md shadow-lg py-2' : 'bg-zinc-100/80 backdrop-blur-sm py-4'}`}>
      <div className="max-w-7xl mx-auto px-4 flex justify-between items-center">
        <Link to="/" className="flex items-center gap-3" onClick={() => setIsMenuOpen(false)}>
          <div className="flex flex-col">
            <span className="text-3xl font-black tracking-tighter leading-none flex items-center">
              <span className="text-[#2B3990]">GO</span>
              <span className="text-[#F7941E] ml-1">TRACKER</span>
            </span>
            <span className="text-[10px] font-bold text-[#2B3990] uppercase tracking-widest mt-1">
              Rastreamento Veicular
            </span>
          </div>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center gap-8">
          <Link to="/" className="text-[#2B3990] font-bold text-sm uppercase hover:text-[#F7941E]">Home</Link>
          <a href="/#quem-somos" className="text-zinc-600 font-bold text-sm uppercase hover:text-[#2B3990]">Quem Somos</a>
          <a href="/#servicos" className="text-zinc-600 font-bold text-sm uppercase hover:text-[#2B3990]">Soluções</a>
          <a href="/#clientes" className="text-zinc-600 font-bold text-sm uppercase hover:text-[#2B3990]">Clientes</a>
          <a href="/#contato" className="text-zinc-600 font-bold text-sm uppercase hover:text-[#2B3990]">Contato</a>
          <button className="bg-[#2B3990] text-white px-6 py-2.5 rounded-full text-sm font-bold uppercase tracking-wider hover:bg-[#1e2866] transition-all shadow-md flex items-center gap-2">
            <User size={16} /> Área do Cliente
          </button>
        </nav>

        {/* Mobile Menu Toggle */}
        <button className="lg:hidden text-[#2B3990]" onClick={() => setIsMenuOpen(!isMenuOpen)}>
          {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>
    </header>

    {/* Mobile Menu */}
    <AnimatePresence>
      {isMenuOpen && (
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          className="fixed inset-0 z-40 bg-zinc-100 pt-24 px-6 lg:hidden"
        >
          <nav className="flex flex-col gap-6 text-center">
            <Link to="/" className="text-2xl font-bold text-[#2B3990]" onClick={() => setIsMenuOpen(false)}>Home</Link>
            <a href="/#quem-somos" className="text-2xl font-bold text-zinc-600" onClick={() => setIsMenuOpen(false)}>Quem Somos</a>
            <a href="/#servicos" className="text-2xl font-bold text-zinc-600" onClick={() => setIsMenuOpen(false)}>Soluções</a>
            <a href="/#clientes" className="text-2xl font-bold text-zinc-600" onClick={() => setIsMenuOpen(false)}>Clientes</a>
            <a href="/#contato" className="text-2xl font-bold text-zinc-600" onClick={() => setIsMenuOpen(false)}>Contato</a>
            <button className="mt-4 bg-[#F7941E] text-white py-4 rounded-xl text-lg font-bold">
              Falar com Consultor
            </button>
          </nav>
        </motion.div>
      )}
    </AnimatePresence>
  </>
);

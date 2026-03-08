import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Menu, X } from "lucide-react";
import Logo from "../ui/Logo";
import ThemeToggle from "../ui/ThemeToggle";
import Button from "../ui/Button";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = ["Recursos", "App", "Planos", "Contato"];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? "py-2" : "py-4"}`}
    >
      <div className="container mx-auto px-6">
        <div
          className={`relative flex items-center justify-between h-16 glass rounded-2xl px-6 transition-all duration-300 ${isScrolled ? "shadow-2xl shadow-primary/10" : ""}`}
        >
          {/* Logo ABSOLUTA */}
          <div className="absolute left-1 top-2/4 -translate-y-1/2 z-50">
            <Logo className="h-14 w-auto" />
          </div>

          {/* Spacer para não quebrar layout */}
          <div className="w-[150px]" />

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                className="text-sm font-bold text-zinc-500 dark:text-zinc-400 hover:text-primary transition-colors uppercase tracking-wider"
              >
                {item}
              </a>
            ))}
          </div>

          {/* Desktop Actions */}
          <div className="hidden md:flex items-center gap-4">
            <ThemeToggle />
            <a
              href="https://gotracker.seeflex.com.br/users/login"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button variant="outline" size="md">
                Área do Cliente
              </Button>
            </a>
            <a
              href="https://wa.me/5519995778009?text=Olá,%20gostaria%20de%20saber%20mais%20sobre%20o%20rastreamento%20veicular."
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button variant="primary" size="md" glow>
                Falar com Consultor
              </Button>
            </a>
          </div>

          {/* Mobile Toggle */}
          <div className="flex items-center gap-2 md:hidden">
            <ThemeToggle />
            <button
              className="text-secondary dark:text-zinc-100 p-2"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? <X /> : <Menu />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-full left-0 right-0 mt-2 px-6 md:hidden"
          >
            <div className="glass rounded-2xl p-6 flex flex-col gap-4">
              {navItems.map((item) => (
                <a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  className="text-lg font-bold text-secondary dark:text-zinc-300"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {item}
                </a>
              ))}
              <hr className="border-zinc-200 dark:border-white/10" />
              <a
                href="https://gotracker.seeflex.com.br/users/login"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button variant="outline" size="md">
                  Área do Cliente
                </Button>
              </a>
              <a
                href="https://wa.me/5519995778009?text=Olá,%20gostaria%20de%20saber%20mais%20sobre%20o%20rastreamento%20veicular."
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button variant="primary" size="md" glow>
                  Falar com Consultor
                </Button>
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;

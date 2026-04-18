import React, { useEffect, useState } from "react";
import { Menu, X, User, Moon, Sun } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import { Link } from "react-router-dom";

interface HeaderProps {
  scrolled: boolean;
  isMenuOpen: boolean;
  setIsMenuOpen: (open: boolean) => void;
}

type NavItem = {
  label: string;
  href: string;
  isHome?: boolean;
};

const navItems: NavItem[] = [
  { label: "Home", href: "/", isHome: true },
  { label: "Quem Somos", href: "/#quem-somos" },
  { label: "Soluções", href: "/#servicos" },
  { label: "Depoimentos", href: "/#depoimentos" },
  { label: "Contato", href: "/#contato" },
];

const navLinkClass =
  "theme-text-soft font-bold text-sm uppercase tracking-wide hover:text-[#1e3a8a] dark:hover:text-[#F7941E] transition-colors rounded-sm focus:outline-none focus-visible:ring-2 focus-visible:ring-[#F7941E] focus-visible:ring-offset-2";

const homeLinkClass =
  "font-bold text-sm uppercase tracking-wide text-[#1e3a8a] dark:text-[#F7941E] hover:text-[#F7941E] dark:hover:text-white transition-colors rounded-sm focus:outline-none focus-visible:ring-2 focus-visible:ring-[#F7941E] focus-visible:ring-offset-2";

const clientAreaDesktopClass =
  "bg-[#1e3a8a] dark:bg-[#F7941E] theme-button-primary inline-flex items-center gap-2 whitespace-nowrap rounded-full px-6 py-2.5 text-sm font-bold uppercase tracking-wider shadow-md focus:outline-none focus-visible:ring-2 focus-visible:ring-[#F7941E] focus-visible:ring-offset-2";

const clientAreaMobileClass =
  "bg-[#1e3a8a] dark:bg-[#F7941E] theme-button-secondary lg:hidden inline-flex min-w-[150px] shrink-0 items-center justify-center gap-1.5 whitespace-nowrap rounded-full px-4 py-2.5 text-[10px] font-bold uppercase tracking-wide shadow-md focus:outline-none focus-visible:ring-2 focus-visible:ring-[#F7941E] focus-visible:ring-offset-2 sm:min-w-[180px] sm:text-xs";

const mobileNavLinkClass =
  "theme-text-soft text-2xl font-bold hover:text-[#1e3a8a] dark:hover:text-[#F7941E] transition-colors rounded-md focus:outline-none focus-visible:ring-2 focus-visible:ring-[#F7941E] focus-visible:ring-offset-2";

const mobileHomeLinkClass =
  "text-2xl font-bold text-[#1e3a8a] dark:text-[#F7941E] hover:text-[#F7941E] dark:hover:text-white transition-colors rounded-md focus:outline-none focus-visible:ring-2 focus-visible:ring-[#F7941E] focus-visible:ring-offset-2";

const menuButtonClass =
  "theme-button-icon h-12 w-12 rounded-2xl shrink-0 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#F7941E] focus-visible:ring-offset-2";

const themeButtonClass =
  "theme-button-icon h-12 w-12 rounded-2xl shrink-0 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#F7941E] focus-visible:ring-offset-2";

function NavItemLink({
  item,
  onClick,
  mobile = false,
}: {
  item: NavItem;
  onClick?: () => void;
  mobile?: boolean;
}) {
  const baseClass = mobile
    ? item.isHome
      ? mobileHomeLinkClass
      : mobileNavLinkClass
    : item.isHome
      ? homeLinkClass
      : navLinkClass;

  if (item.isHome) {
    return (
      <Link
        to={item.href}
        className={baseClass}
        onClick={onClick}
        aria-current="page"
      >
        {item.label}
      </Link>
    );
  }

  return (
    <a href={item.href} className={baseClass} onClick={onClick}>
      {item.label}
    </a>
  );
}

export const Header = ({
  scrolled,
  isMenuOpen,
  setIsMenuOpen,
}: HeaderProps) => {
  const closeMenu = () => setIsMenuOpen(false);
  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");

    if (savedTheme === "light") {
      document.documentElement.classList.remove("dark");
      setIsDark(false);
      return;
    }

    // 👉 padrão agora é DARK
    document.documentElement.classList.add("dark");
    setIsDark(true);
  }, []);

  const toggleTheme = () => {
    const nextThemeIsDark = !isDark;

    setIsDark(nextThemeIsDark);
    document.documentElement.classList.toggle("dark", nextThemeIsDark);
    localStorage.setItem("theme", nextThemeIsDark ? "dark" : "light");
  };

  return (
    <>
      <header
        className={`sticky top-0 z-50 border-b transition-all duration-300 ${
          scrolled ? "theme-header shadow-lg" : "theme-header"
        }`}
      >
        <div className="mx-auto max-w-7xl px-4 sm:px-5">
          <div className="py-3 lg:py-0">
            <div className="flex flex-col gap-3 lg:min-h-[84px] lg:flex-row lg:items-center lg:justify-between">
              <div className="flex justify-center lg:justify-start">
                <Link
                  to="/"
                  className="shrink-0 rounded-md focus:outline-none focus-visible:ring-2 focus-visible:ring-[#F7941E] focus-visible:ring-offset-2"
                  onClick={closeMenu}
                  aria-label="Ir para a página inicial da Go Tracker"
                >
                  <img
                    src="/assets/img/logo.png"
                    alt="Go Tracker - Rastreamento Veicular"
                    className="h-12 object-contain"
                  />
                </Link>
              </div>

              <div className="flex items-center justify-between gap-3 lg:hidden">
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

                <div className="flex items-center gap-2">
                  <button
                    type="button"
                    className={themeButtonClass}
                    onClick={toggleTheme}
                    aria-label={
                      isDark ? "Ativar tema claro" : "Ativar tema escuro"
                    }
                  >
                    {isDark ? (
                      <Sun size={20} aria-hidden="true" />
                    ) : (
                      <Moon size={20} aria-hidden="true" />
                    )}
                  </button>

                  <button
                    type="button"
                    className={menuButtonClass}
                    onClick={toggleMenu}
                    aria-expanded={isMenuOpen}
                    aria-controls="mobile-menu"
                    aria-label={isMenuOpen ? "Fechar menu" : "Abrir menu"}
                  >
                    {isMenuOpen ? (
                      <X size={26} aria-hidden="true" />
                    ) : (
                      <Menu size={26} aria-hidden="true" />
                    )}
                  </button>
                </div>
              </div>

              <nav
                className="hidden items-center gap-5 lg:flex"
                aria-label="Navegação principal"
              >
                {navItems.map((item) => (
                  <NavItemLink key={item.label} item={item} />
                ))}

                <button
                  type="button"
                  className={themeButtonClass}
                  onClick={toggleTheme}
                  aria-label={
                    isDark ? "Ativar tema claro" : "Ativar tema escuro"
                  }
                >
                  {isDark ? (
                    <Sun size={20} aria-hidden="true" />
                  ) : (
                    <Moon size={20} aria-hidden="true" />
                  )}
                </button>

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
            className="theme-bg fixed inset-0 z-40 px-6 pt-28 lg:hidden"
          >
            <nav
              className="mt-20 flex flex-col gap-5 text-start"
              aria-label="Menu mobile"
            >
              {navItems.map((item) => (
                <NavItemLink
                  key={item.label}
                  item={item}
                  onClick={closeMenu}
                  mobile
                />
              ))}

              <a
                href="https://gotracker.seeflex.com.br/users/login"
                target="_blank"
                rel="noopener noreferrer"
                className="theme-button-secondary mt-2 inline-flex items-center justify-center gap-2 rounded-xl px-6 py-4 text-lg font-bold text-white shadow-md focus:outline-none focus-visible:ring-2 focus-visible:ring-[#F7941E] focus-visible:ring-offset-2"
                onClick={closeMenu}
                aria-label="Abrir Área do Cliente em uma nova aba"
              >
                <User size={18} aria-hidden="true" />
                <span>Área do Cliente</span>
              </a>

              <button
                type="button"
                className="theme-button-primary mt-2 rounded-xl py-4 text-lg font-bold text-white shadow-md focus:outline-none focus-visible:ring-2 focus-visible:ring-[#1e3a8a] focus-visible:ring-offset-2"
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

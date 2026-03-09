import React, { useEffect, useState } from "react";
import { FaArrowUp, FaWhatsapp } from "react-icons/fa";
import { Tooltip } from "./Tooltip ";

export const BackTopButton = () => {
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > window.innerHeight / 2);
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <div className="fixed bottom-8 right-8 z-50 flex flex-col items-center gap-4">
      <Tooltip text="Voltar ao topo" position="left">
        <button
          onClick={scrollToTop}
          aria-label="Voltar ao topo"
          className={`relative flex h-14 w-14 items-center justify-center rounded-full bg-gray-900 text-white shadow-2xl transition-all duration-500 hover:scale-110 hover:-translate-y-1 ${
            showScrollTop
              ? "translate-y-0 opacity-100"
              : "pointer-events-none translate-y-6 opacity-0"
          }`}
        >
          <span className="absolute inset-0 rounded-full bg-gray-900 opacity-30 animate-pulse"></span>
          <FaArrowUp />
        </button>
      </Tooltip>

      <Tooltip text="Fale conosco" position="left">
        <a
          href="https://wa.me/5598991070105"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Fale conosco no WhatsApp"
          className="relative flex h-16 w-16 items-center justify-center rounded-full bg-[#25D366] text-white shadow-2xl transition-transform duration-300 hover:scale-110"
        >
          <span className="absolute inline-flex h-full w-full rounded-full rounded-full bg-green-400 opacity-75 animate-ping"></span>
          <span className="relative z-10 flex items-center justify-center">
            <FaWhatsapp />
          </span>
        </a>
      </Tooltip>
    </div>
  );
};

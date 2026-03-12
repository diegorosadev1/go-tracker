import React from "react";
import { FaWhatsapp } from "react-icons/fa";

export const WhatsAppFloat = () => {
  return (
    <a
      href="https://wa.me/5519920011550?text=Ol%C3%A1!%20Gostaria%20de%20falar%20com%20um%20especialista%20sobre%20rastreamento%20veicular"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Fale conosco no WhatsApp"
      className="fixed bottom-8 right-8 z-50"
    >
      <div className="relative flex items-center justify-center">
        
        {/* Pulse animation */}
        <span className="absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75 animate-ping"></span>

        {/* Button */}
        <div className="relative flex items-center justify-center w-16 h-16 bg-[#25D366] text-white rounded-full shadow-2xl hover:scale-110 transition-transform duration-300">
          <FaWhatsapp size={34} />
        </div>

      </div>
    </a>
  );
};
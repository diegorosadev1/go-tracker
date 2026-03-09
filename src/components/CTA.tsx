import React from 'react';

export const CTA = () => (
  <section className="py-20 relative z-10">
    <div className="max-w-5xl mx-auto px-4">
      <div className="bg-[#F7941E] rounded-[40px] p-12 md:p-20 text-center text-white relative overflow-hidden shadow-2xl">
        <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full -mr-32 -mt-32"></div>
        <div className="absolute bottom-0 left-0 w-48 h-48 bg-black/5 rounded-full -ml-24 -mb-24"></div>
        
        <h2 className="text-4xl md:text-5xl font-black mb-8 relative z-10">
          Pronto para ter o controle total da sua frota?
        </h2>
        <p className="text-xl mb-12 opacity-90 relative z-10 max-w-2xl mx-auto">
          Solicite agora um orçamento personalizado e descubra como a Go Tracker pode impulsionar seu negócio.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center relative z-10">
          <button className="bg-[#2B3990] text-white px-12 py-5 rounded-full font-black text-lg hover:scale-105 transition-transform shadow-xl">
            Solicitar Orçamento Grátis
          </button>
          <button className="bg-white text-[#F7941E] px-12 py-5 rounded-full font-black text-lg hover:scale-105 transition-transform shadow-xl">
            Falar no WhatsApp
          </button>
        </div>
      </div>
    </div>
  </section>
);

import React from 'react';

export const Stats = () => (
  <section className="py-20 bg-[#2B3990] text-white relative z-10">
    <div className="max-w-7xl mx-auto px-4 grid grid-cols-2 md:grid-cols-4 gap-12 text-center">
      <div>
        <div className="text-4xl md:text-5xl font-black mb-2 text-[#F7941E]">10k+</div>
        <div className="text-xs uppercase tracking-widest font-bold opacity-70">Veículos Rastreados</div>
      </div>
      <div>
        <div className="text-4xl md:text-5xl font-black mb-2 text-[#F7941E]">98%</div>
        <div className="text-xs uppercase tracking-widest font-bold opacity-70">Taxa de Recuperação</div>
      </div>
      <div>
        <div className="text-4xl md:text-5xl font-black mb-2 text-[#F7941E]">24/7</div>
        <div className="text-xs uppercase tracking-widest font-bold opacity-70">Suporte Especializado</div>
      </div>
      <div>
        <div className="text-4xl md:text-5xl font-black mb-2 text-[#F7941E]">15+</div>
        <div className="text-xs uppercase tracking-widest font-bold opacity-70">Anos de Experiência</div>
      </div>
    </div>
  </section>
);

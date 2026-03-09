import React from "react";

export const CTA = () => (
  <section
    aria-labelledby="cta-title"
    className="relative z-10 py-20"
  >
    <div className="mx-auto max-w-5xl px-4">
      <div className="relative overflow-hidden rounded-[40px] bg-[#F7941E] p-12 text-center text-white shadow-2xl md:p-20">

        {/* Decorative shapes */}
        <div
          aria-hidden="true"
          className="absolute right-0 top-0 -mr-32 -mt-32 h-64 w-64 rounded-full bg-white/10"
        />
        <div
          aria-hidden="true"
          className="absolute bottom-0 left-0 -mb-24 -ml-24 h-48 w-48 rounded-full bg-black/5"
        />

        <header className="relative z-10">
          <h2
            id="cta-title"
            className="mb-8 text-4xl font-black md:text-5xl"
          >
            Pronto para ter mais controle e segurança na sua frota?
          </h2>

          <p className="mx-auto mb-12 max-w-2xl text-xl opacity-90">
            Solicite um orçamento personalizado e descubra como o rastreamento
            veicular da GoTracker pode reduzir custos, aumentar a segurança
            e melhorar a gestão da sua frota.
          </p>
        </header>

        <div
          className="relative z-10 flex flex-col justify-center gap-4 sm:flex-row"
          role="group"
          aria-label="Ações de contato"
        >
          {/* Orçamento */}
          <a
            href="/contato"
            className="rounded-full bg-[#2B3990] px-12 py-5 text-lg font-black text-white shadow-xl transition-transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-[#F7941E]"
            aria-label="Solicitar orçamento gratuito"
          >
            Solicitar orçamento grátis
          </a>

          {/* WhatsApp */}
          <a
            href="https://wa.me/5519920011550?text=Olá!%20Gostaria%20de%20solicitar%20um%20orçamento%20para%20rastreamento%20veicular."
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full bg-white px-12 py-5 text-lg font-black text-[#F7941E] shadow-xl transition-transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-[#F7941E]"
            aria-label="Falar com especialista pelo WhatsApp"
          >
            Falar no WhatsApp
          </a>
        </div>
      </div>
    </div>
  </section>
);
import React, { useEffect, useRef, useState } from "react";
import { SectionHeader } from "../shared/SectionHeader ";

export const CTA = () => {
  const sectionRef = useRef<HTMLElement | null>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const element = sectionRef.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(element);
        }
      },
      { threshold: 0.25 },
    );

    observer.observe(element);

    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      aria-labelledby="cta-title"
      className="theme-section relative z-10 py-14 sm:py-16 md:py-20"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div
          className={`relative overflow-hidden rounded-[28px] bg-slate-950 px-5 py-10 text-center text-white shadow-2xl transition-all duration-700 sm:rounded-[36px] sm:px-8 sm:py-14 md:px-14 md:py-16 ${
            isVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
          }`}
        >
          {/* Decorative shapes */}
          <div
            aria-hidden="true"
            className="absolute right-0 top-0 h-40 w-40 translate-x-10 -translate-y-10 rounded-full bg-white/10 sm:h-56 sm:w-56 md:h-72 md:w-72"
          />
          <div
            aria-hidden="true"
            className="absolute bottom-0 left-0 h-28 w-28 -translate-x-8 translate-y-8 rounded-full bg-black/5 sm:h-36 sm:w-36 md:h-48 md:w-48"
          />

          <SectionHeader
            align="center"
            theme="dark"
            size="md"
            title={
              <>
                Quer mais controle
                <span className="text-[#F7941E]">
                  <br></br>e segurança ?
                </span>
              </>
            }
            descriptionColor="text-white/80"
            description=" Clique no botão e descubra como a
              GoTracker pode reduzir custos e aumentar
              a segurança."
          />

          <div
            className="relative z-10 mt-8 flex flex-col items-center justify-center gap-4 sm:mt-10 sm:flex-row"
            role="group"
            aria-label="Ações de contato"
          >
            <a
              href="/contato"
              className="inline-flex min-h-[56px] w-full items-center justify-center rounded-full text-[#ffffff] bg-[#25D366] px-6 py-4 text-base font-extrabold  shadow-xl transition duration-300 hover:-translate-y-1 hover:scale-[1.02] focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-[#F7941E] sm:w-auto sm:px-10 sm:text-lg animate-[pulse_2.4s_ease-in-out_infinite]"
              aria-label="Solicitar orçamento gratuito"
            >
              Orçamento gratis
            </a>
          </div>

          {/* micro gatilho visual */}
          <div className="relative z-10 mt-5 text-sm font-medium text-white/85 sm:text-base">
            Atendimento rápido e proposta personalizada
          </div>
        </div>
      </div>
    </section>
  );
};

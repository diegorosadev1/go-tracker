import React, { useEffect, useId, useState } from "react";
import { ChevronRight, Pause, Play } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import { Link } from "react-router-dom";

const slides = [
  {
    image:
      "https://plus.unsplash.com/premium_photo-1661962667495-c9dd5c790758?fm=jpg&q=60&w=3000&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fGZyb3RhJTIwZGUlMjBjYXJyb3N8ZW58MHx8MHx8fDA%3D",
    title: "Rastreamento de Frotas",
    subtitle: "Tecnologia de ponta para sua segurança e gestão em tempo real.",
    link: "/servicos/rastreamento-frotas",
    cta: "Saiba mais sobre rastreamento de frotas",
  },
  {
    image:
      "	https://www.cobli.co/wp-content/uploads/2022/08/carro-de-frota-scaled.jpeg",
    title: "Gestão de Frotas",
    subtitle: "A gestão completa da sua frota na palma da sua mão.",
    link: "/servicos/gestao-frotas",
    cta: "Saiba mais sobre gestão de frotas",
  },
  {
    image:
      "https://crearesistemas.com.br/wp-content/uploads/2025/04/salva-1-1024x503.webp",
    title: "Telemetria Avançada",
    subtitle: "Reduza custos e aumente a vida útil dos seus veículos.",
    link: "/servicos/telemetria-avancada",
    cta: "Saiba mais sobre telemetria avançada",
  },
  {
    image:
      "https://www.intelipost.com.br/wp-content/uploads/2021/08/post_thumbnail-26bb9c9b03f040ccc121af1b3541493f.jpeg",
    title: "Otimização de Rotas",
    subtitle: "Rotas inteligentes para uma logística imbatível e econômica.",
    link: "/servicos/otimizacao-rotas",
    cta: "Saiba mais sobre otimização de rotas",
  },
];

export const Hero = () => {
  const [current, setCurrent] = useState(0);
  const [isAutoPlay, setIsAutoPlay] = useState(true);

  const titleId = useId();
  const descriptionId = useId();
  const carouselId = useId();

  useEffect(() => {
    if (!isAutoPlay) return;

    const timer = window.setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 8000);

    return () => window.clearInterval(timer);
  }, [isAutoPlay]);

  const currentSlide = slides[current];

  return (
    <section
      className="relative h-[420px] md:h-[600px] overflow-hidden"
      aria-labelledby={titleId}
      aria-describedby={descriptionId}
    >
      <div
        id={carouselId}
        className="relative h-full"
        role="region"
        aria-roledescription="carrossel"
        aria-label="Destaques dos serviços"
      >
        <AnimatePresence mode="wait">
          <motion.article
            key={current}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1.2 }}
            className="absolute inset-0"
            aria-hidden={false}
          >
            <div className="absolute inset-0 z-10 bg-black/50" />

            <img
              src={currentSlide.image}
              alt={`${currentSlide.title} - ${currentSlide.subtitle}`}
              className="h-full w-full object-cover"
              referrerPolicy="no-referrer"
              loading={current === 0 ? "eager" : "lazy"}
              fetchPriority={current === 0 ? "high" : "auto"}
              decoding="async"
              sizes="100vw"
            />

            <div className="absolute inset-0 z-20 flex items-center">
              <div className="mx-auto w-full max-w-7xl px-4">
                <motion.div
                  initial={{ x: -40, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ delay: 0.2, duration: 0.6 }}
                  className="max-w-2xl rounded-2xl border-l-4 border-gotracker-orange bg-black/40 p-6 backdrop-blur-sm md:p-8"
                >
                  <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-white/80">
                    Soluções para gestão e monitoramento
                  </p>

                  <h1
                    id={titleId}
                    className="mb-4 text-4xl font-black leading-tight text-white md:text-6xl"
                  >
                    {currentSlide.title}
                  </h1>

                  <p
                    id={descriptionId}
                    className="mb-8 text-base text-white/90 md:text-lg"
                  >
                    {currentSlide.subtitle}
                  </p>

                  <Link
                    to={currentSlide.link}
                    className="inline-flex w-fit items-center gap-2 rounded-full bg-gotracker-orange px-8 py-3 font-bold text-white transition-transform hover:scale-105 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-black"
                    aria-label={currentSlide.cta}
                  >
                    SAIBA MAIS
                    <ChevronRight size={20} aria-hidden="true" />
                  </Link>
                </motion.div>
              </div>
            </div>
          </motion.article>
        </AnimatePresence>

        <div className="absolute bottom-6 left-1/2 z-30 flex -translate-x-1/2 items-center gap-3">
          <button
            type="button"
            onClick={() => setIsAutoPlay((prev) => !prev)}
            className="inline-flex items-center justify-center rounded-full bg-black/50 p-2 text-white transition hover:bg-black/70 focus:outline-none focus-visible:ring-2 focus-visible:ring-white"
            aria-label={
              isAutoPlay
                ? "Pausar rotação automática"
                : "Iniciar rotação automática"
            }
            aria-pressed={!isAutoPlay}
          >
            {isAutoPlay ? (
              <Pause size={18} aria-hidden="true" />
            ) : (
              <Play size={18} aria-hidden="true" />
            )}
          </button>

          <ul className="flex items-center gap-2" aria-label="Selecionar slide">
            {slides.map((slide, i) => {
              const isActive = current === i;

              return (
                <li key={slide.title}>
                  <button
                    type="button"
                    onClick={() => {
                      setCurrent(i);
                      setIsAutoPlay(false);
                    }}
                    className={`h-3 rounded-full transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-white ${
                      isActive
                        ? "w-8 bg-gotracker-orange"
                        : "w-3 bg-white/50 hover:bg-white/80"
                    }`}
                    aria-label={`Ir para o slide ${i + 1}: ${slide.title}`}
                    aria-controls={carouselId}
                    aria-current={isActive ? "true" : undefined}
                  >
                    <span className="sr-only">{slide.title}</span>
                  </button>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </section>
  );
};

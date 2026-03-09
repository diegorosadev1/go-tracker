import React from "react";
import { Star, ChevronLeft, ChevronRight } from "lucide-react";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import { SectionHeader } from "../shared/SectionHeader ";

const testimonials = [
  {
    name: "Marcio Santana",
    text: "A GoTracker tem sido uma excelente parceira para a minha empresa de transporte. Com o rastreamento de frotas, consigo monitorar o comportamento dos motoristas.",
    role: "Empresário",
  },
  {
    name: "Sebastião Oliveira",
    text: "Estou impressionado com o nível de suporte que a GoTracker oferece aos seus clientes. Sempre que tenho alguma dúvida ou problema, a equipe está pronta para me ajudar.",
    role: "Gestor de logística",
  },
  {
    name: "Coutinho Telecom",
    text: "A GoTracker tem sido uma ótima solução para a manutenção preventiva dos meus veículos. Com o monitoramento do desempenho, consigo evitar interrupções.",
    role: "Diretor de operações",
  },
  {
    name: "Ricardo Mendes",
    text: "O sistema de bloqueio remoto nos deu uma tranquilidade que não tínhamos antes. A tecnologia da GoTracker é realmente de ponta.",
    role: "Proprietário de frota",
  },
  {
    name: "Ana Paula",
    text: "A telemetria avançada nos ajudou a reduzir o consumo de combustível em 15% no primeiro trimestre. Excelente investimento.",
    role: "Gerente operacional",
  },
];

export const Testimonials = () => {
  const [emblaRef, emblaApi] = useEmblaCarousel(
    {
      loop: true,
      align: "start",
      slidesToScroll: 1,
      breakpoints: {
        "(min-width: 768px)": { slidesToScroll: 2 },
        "(min-width: 1024px)": { slidesToScroll: 3 },
      },
    },
    [Autoplay({ delay: 4000, stopOnInteraction: false })],
  );

  const scrollPrev = React.useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);

  const scrollNext = React.useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);

  return (
    <section
      id="depoimentos"
      aria-labelledby="testimonials-title"
      className="relative overflow-hidden bg-slate-50 px-4 py-24"
    >
      <div className="mx-auto max-w-6xl">
        <SectionHeader
          align="center"
          theme="light"
          size="md"
          title={
            <>
              <span>
                Depoimentos
                <span className="text-[#F7941E]">
                  <br></br>de clientes
                </span>
              </span>
            </>
          }
          descriptionColor="text-white/80"
          description={
            <>
              {" "}
              <span>
                Veja como nossas soluções de rastreamento veicular, telemetria e
                gestão de frotas ajudam empresas a ganhar mais controle,
                segurança e eficiência operacional em diferentes segmentos
              </span>
            </>
          }
        />

        <div
          className="relative"
          aria-label="Carrossel de depoimentos de clientes"
        >
          <div className="overflow-hidden" ref={emblaRef}>
            <div className="flex" role="list">
              {testimonials.map((item) => (
                <div
                  key={`${item.name}-${item.role}`}
                  className="min-w-0 flex-[0_0_100%] px-4 md:flex-[0_0_50%] lg:flex-[0_0_33.33%]"
                  role="listitem"
                >
                  <article className="flex h-full flex-col rounded-2xl border-b-4 border-gotracker-orange bg-white p-8 shadow-lg">
                    <div
                      className="mb-6 flex gap-1"
                      aria-label="Avaliação de 5 de 5 estrelas"
                    >
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          size={16}
                          fill="#f97316"
                          className="text-gotracker-orange"
                          aria-hidden="true"
                          focusable="false"
                        />
                      ))}
                    </div>

                    <blockquote className="mb-8 flex-grow">
                      <p className="font-medium italic leading-relaxed text-slate-600">
                        “{item.text}”
                      </p>
                    </blockquote>

                    <footer>
                      <p className="text-lg font-black text-gotracker-blue">
                        {item.name}
                      </p>
                      <p className="text-sm font-bold uppercase tracking-widest text-gotracker-orange">
                        {item.role}
                      </p>
                    </footer>
                  </article>
                </div>
              ))}
            </div>
          </div>

          <button
            type="button"
            onClick={scrollPrev}
            className="absolute left-0 top-1/2 z-20 flex h-12 w-12 -translate-x-4 -translate-y-1/2 items-center justify-center rounded-full border border-slate-100 bg-white text-gotracker-blue shadow-xl transition-colors hover:text-gotracker-orange focus:outline-none focus:ring-2 focus:ring-gotracker-orange focus:ring-offset-2 lg:-translate-x-12"
            aria-label="Mostrar depoimento anterior"
          >
            <ChevronLeft size={24} aria-hidden="true" focusable="false" />
          </button>

          <button
            type="button"
            onClick={scrollNext}
            className="absolute right-0 top-1/2 z-20 flex h-12 w-12 translate-x-4 -translate-y-1/2 items-center justify-center rounded-full border border-slate-100 bg-white text-gotracker-blue shadow-xl transition-colors hover:text-gotracker-orange focus:outline-none focus:ring-2 focus:ring-gotracker-orange focus:ring-offset-2 lg:translate-x-12"
            aria-label="Mostrar próximo depoimento"
          >
            <ChevronRight size={24} aria-hidden="true" focusable="false" />
          </button>
        </div>
      </div>
    </section>
  );
};

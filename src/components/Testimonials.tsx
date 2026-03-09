import React from 'react';
import { Star, ChevronLeft, ChevronRight } from 'lucide-react';
import useEmblaCarousel from 'embla-carousel-react';
import Autoplay from 'embla-carousel-autoplay';

export const Testimonials = () => {
  const [emblaRef, emblaApi] = useEmblaCarousel(
    {
      loop: true,
      align: 'start',
      slidesToScroll: 1,
      breakpoints: {
        '(min-width: 768px)': { slidesToScroll: 2 },
        '(min-width: 1024px)': { slidesToScroll: 3 }
      }
    },
    [Autoplay({ delay: 4000, stopOnInteraction: false })]
  );

  const scrollPrev = React.useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);

  const scrollNext = React.useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);

  const testimonials = [
    {
      name: "Marcio Santana",
      text: "A GoTracker tem sido uma excelente parceira para a minha empresa de transporte. Com o rastreamento de frotas, consigo monitorar o comportamento dos motoristas.",
      role: "Empresário"
    },
    {
      name: "Sebastião Oliveira",
      text: "Estou impressionado com o nível de suporte que a GoTracker oferece aos seus clientes. Sempre que tenho alguma dúvida ou problema, a equipe está pronta para me ajudar.",
      role: "Gestor de Logística"
    },
    {
      name: "Coutinho Telecom",
      text: "A GoTracker tem sido uma ótima solução para a manutenção preventiva dos meus veículos. Com o monitoramento do desempenho, consigo evitar interrupções.",
      role: "Diretor de Operações"
    },
    {
      name: "Ricardo Mendes",
      text: "O sistema de bloqueio remoto nos deu uma tranquilidade que não tínhamos antes. A tecnologia da GoTracker é realmente de ponta.",
      role: "Proprietário de Frota"
    },
    {
      name: "Ana Paula",
      text: "A telemetria avançada nos ajudou a reduzir o consumo de combustível em 15% no primeiro trimestre. Excelente investimento.",
      role: "Gerente Operacional"
    }
  ];

  return (
    <section className="py-24 px-4 bg-slate-50 relative overflow-hidden" id="depoimentos">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-black text-gotracker-blue mb-4">Depoimentos</h2>
          <p className="text-slate-500 font-medium">
            Tenho o prazer de trabalhar com a GoTracker há mais de 3 anos. Durante esse tempo, a GoTracker<br />
            tem sido um parceiro valioso e confiável para nós. Eles são uma empresa que se preocupa com seus clientes<br />
            e sempre se esforçam para fornecer o melhor serviço possível.<br />
            Cliente: Barbara Pereira.
          </p>
        </div>

        <div className="relative">
          <div className="overflow-hidden" ref={emblaRef}>
            <div className="flex">
              {testimonials.map((item, idx) => (
                <div key={idx} className="flex-[0_0_100%] min-w-0 md:flex-[0_0_50%] lg:flex-[0_0_33.33%] px-4">
                  <div className="bg-white p-8 rounded-2xl shadow-lg border-b-4 border-gotracker-orange h-full flex flex-col">
                    <div className="flex gap-1 mb-6">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} size={16} fill="#f97316" className="text-gotracker-orange" />
                      ))}
                    </div>
                    <p className="text-slate-600 italic mb-8 font-medium leading-relaxed flex-grow">"{item.text}"</p>
                    <div>
                      <p className="font-black text-gotracker-blue text-lg">{item.name}</p>
                      <p className="text-gotracker-orange text-sm font-bold uppercase tracking-widest">{item.role}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Navigation Buttons */}
          <button
            onClick={scrollPrev}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 lg:-translate-x-12 w-12 h-12 rounded-full bg-white shadow-xl flex items-center justify-center text-gotracker-blue hover:text-gotracker-orange transition-colors z-20 border border-slate-100"
            aria-label="Anterior"
          >
            <ChevronLeft size={24} />
          </button>
          <button
            onClick={scrollNext}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 lg:translate-x-12 w-12 h-12 rounded-full bg-white shadow-xl flex items-center justify-center text-gotracker-blue hover:text-gotracker-orange transition-colors z-20 border border-slate-100"
            aria-label="Próximo"
          >
            <ChevronRight size={24} />
          </button>
        </div>
      </div>
    </section>
  );
};

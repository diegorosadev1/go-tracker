import React from "react";
import {
  Truck,
  ShieldCheck,
  Zap,
  Navigation,
  ChevronRight,
} from "lucide-react";
import { motion } from "motion/react";
import { Link } from "react-router-dom";

const solutions = [
  {
    title: "Rastreamento para frotas",
    desc: "Monitore a localização dos veículos em tempo real, aumente a segurança da operação e responda rapidamente a emergências ou desvios de rota.",
    icon: Truck,
    img: "https://www.shutterstock.com/image-photo/aerial-view-semi-truck-trailer-600nw-2668664849.jpg",
    slug: "rastreamento-frotas",
    imageAlt: "Caminhões e veículos de frota em operação logística",
  },
  {
    title: "Gestão de frotas",
    desc: "Centralize o gerenciamento da frota com controle de manutenção, abastecimento, desempenho operacional e redução de custos.",
    icon: ShieldCheck,
    img: "https://thumbs.dreamstime.com/b/frota-dos-carros-137538374.jpg?w=992",
    slug: "gestao-frotas",
    imageAlt: "Profissional analisando indicadores de gestão de frota",
  },
  {
    title: "Telemetria avançada",
    desc: "Acompanhe consumo de combustível, velocidade, comportamento do condutor e desempenho dos veículos com dados detalhados.",
    icon: Zap,
    img: "https://aiko.digital/wp-content/uploads/2023/12/73330066-21ba-4e6c-b283-153c576835e1.jpg",
    slug: "telemetria-avancada",
    imageAlt: "Painel com dados e indicadores de telemetria veicular",
  },
  {
    title: "Otimização de rotas",
    desc: "Planeje rotas mais eficientes para reduzir tempo de deslocamento, melhorar entregas e aumentar a produtividade da operação.",
    icon: Navigation,
    img: "https://estruturei.com.br/wp-content/uploads/2023/07/O-que-e-Otimizacao-de-Rotas-e-Como-Funciona-Atualizado-2023.jpg",
    slug: "otimizacao-rotas",
    imageAlt: "Mapa com planejamento e otimização de rotas logísticas",
  },
];

export const Solutions = () => {
  return (
    <section
      id="servicos"
      aria-labelledby="solutions-title"
      className="relative z-10 bg-zinc-100 py-24"
    >
      <div className="mx-auto max-w-7xl px-4">
        <header className="mb-16 text-center">
          <h2
            id="solutions-title"
            className="mb-4 text-4xl font-black text-[#2B3990]"
          >
            Nossas soluções
          </h2>

          <p className="mx-auto max-w-3xl text-zinc-700">
            Conheça nossas soluções para rastreamento veicular, telemetria, IOT
            e otimização de frotas para pequenas e grandes empresas, com
            equipamento homologado pela Anatel e sistema exclusivo de
            monitoramento.
          </p>
        </header>

        <ul className="grid gap-8 md:grid-cols-2" role="list">
          {solutions.map(({ title, desc, icon: Icon, img, slug, imageAlt }) => (
            <li key={slug} className="list-none">
              <motion.article
                whileHover={{ y: -10 }}
                className="group relative h-[250px] overflow-hidden rounded-2xl shadow-lg"
                aria-labelledby={`solution-${slug}-title`}
              >
                <img
                  src={img}
                  alt={imageAlt}
                  loading="lazy"
                  decoding="async"
                  referrerPolicy="no-referrer"
                  className="absolute inset-0 h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
                />

                <div className="absolute inset-0 flex flex-col justify-center bg-gradient-to-r from-[#7d86c5]/90 to-[#2B3990]/40 p-8">
                  <div className="mb-4">
                    <Icon
                      size={32}
                      className="text-[#F7941E]"
                      aria-hidden="true"
                      focusable="false"
                    />
                  </div>

                  <h3
                    id={`solution-${slug}-title`}
                    className="mb-2 text-xl font-bold text-white"
                  >
                    {title}
                  </h3>

                  <p className="mb-4 line-clamp-3 text-sm text-white/90">
                    {desc}
                  </p>

                  <div>
                    <Link
                      to={`/servicos/${slug}`}
                      aria-label={`Saiba mais sobre ${title}`}
                      className="inline-flex items-center gap-1 text-sm font-bold text-[#F7941E] transition-all hover:gap-2 focus:outline-none focus:ring-2 focus:ring-[#F7941E] focus:ring-offset-2 focus:ring-offset-[#2B3990]"
                    >
                      Saiba mais
                      <ChevronRight
                        size={16}
                        aria-hidden="true"
                        focusable="false"
                      />
                    </Link>
                  </div>
                </div>
              </motion.article>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

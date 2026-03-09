import React from "react";
import { TrendingUp, Clock, ShieldCheck, MapPin } from "lucide-react";
import { SectionHeader } from "../shared/SectionHeader ";

const benefits = [
  {
    title: "Redução de custos",
    description:
      "Economize até 20% em combustível e manutenção com mais controle operacional.",
    icon: TrendingUp,
  },
  {
    title: "Mais produtividade",
    description:
      "Acompanhe tempo de parada, rotas e execução das atividades da frota.",
    icon: Clock,
  },
  {
    title: "Mais segurança",
    description:
      "Aumente a proteção da operação com monitoramento e recuperação mais rápida de veículos.",
    icon: ShieldCheck,
  },
  {
    title: "Localização em tempo real",
    description:
      "Conte com rastreamento GPS preciso e cobertura para operações em todo o país.",
    icon: MapPin,
  },
];

export const WhyInvest = () => (
  <section
    aria-labelledby="why-invest-title"
    className="relative z-10 bg-zinc-100 py-24"
  >
    <div className="mx-auto max-w-7xl px-4">
      <div className="flex flex-col items-center gap-16 lg:flex-row">
        <div className="lg:w-1/2">
          <figure className="relative">
            <img
              src="https://storage.transportemoderno.com.br/uploads/2022/06/Scudo.jpeg"
              alt="Painel de tecnologia e monitoramento para rastreamento inteligente de veículos"
              loading="lazy"
              decoding="async"
              className="relative z-10 rounded-[40px] border-8 border-white shadow-2xl"
              referrerPolicy="no-referrer"
            />
            <div
              aria-hidden="true"
              className="absolute -bottom-6 -right-6 h-64 w-64 rounded-[40px] bg-[#F7941E] opacity-20"
            />
            <div
              aria-hidden="true"
              className="absolute -left-6 -top-6 h-32 w-32 rounded-full border-8 border-[#1e3a8a] opacity-10"
            />
          </figure>
        </div>

        <div className="lg:w-1/2">

          <SectionHeader
            theme="light"
            align="left"
            size="md"
            title={
              <>
                Por que investir em{" "}
                <span className="text-[#f0ac58]">Rastreamento veicular ?</span>
                
              </>
            }
            description="Investir em astreamento veicular inteligente traz ganhos reais para empresas de todos os portes. Nossa plataforma entrega dados e insights estratégicos para reduzir custos, aumentar a produtividade, reforçar a segurança e otimizar a gestão da sua frota."
          />

          <ul className="grid grid-cols-1 gap-8 sm:grid-cols-2" role="list">
            {benefits.map(({ title, description, icon: Icon }) => (
              <li key={title}>
                <article className="flex gap-4">
                  <div
                    className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-2xl bg-white text-[#F7941E] shadow-sm"
                    aria-hidden="true"
                  >
                    <Icon size={24} aria-hidden="true" focusable="false" />
                  </div>

                  <div>
                    <h3 className="mb-1 font-bold text-[#1e3a8a]">{title}</h3>
                    <p className="text-sm text-zinc-600">{description}</p>
                  </div>
                </article>
              </li>
            ))}
          </ul>

          <div className="mt-12">
            <a
              href="https://wa.me/5519920011550?text=Ol%C3%A1!%20Gostaria%20de%20falar%20com%20um%20especialista%20sobre%20rastreamento%20veicular."
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Falar com especialista pelo WhatsApp"
              className="inline-flex mt-12 bg-[#1e3a8a] text-white px-8 py-4 rounded-full font-bold hover:bg-[#1e2866] transition-all shadow-lg focus:outline-none focus:ring-2 focus:ring-[#1e3a8a] focus:ring-offset-2"
            >
              Falar com especialista
            </a>
          </div>
        </div>
      </div>
    </div>
  </section>
);

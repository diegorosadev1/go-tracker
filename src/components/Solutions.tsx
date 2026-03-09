import React from 'react';
import { Truck, ShieldCheck, Zap, Navigation, ChevronRight } from 'lucide-react';
import { motion } from 'motion/react';
import { Link } from 'react-router-dom';

export const Solutions = () => {
  const solutions = [
    {
      title: "RASTREAMENTO PARA FROTAS",
      desc: "Monitore a localização de seus veículos em tempo real e responda rapidamente a emergências ou problemas.",
      icon: <Truck className="text-[#F7941E]" size={32} />,
      img: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&q=80&w=800",
      slug: "rastreamento-frotas"
    },
    {
      title: "GESTÃO DE FROTAS",
      desc: "Gerenciamento completo dos veículos de uma empresa, incluindo manutenção, reparos e combustível.",
      icon: <ShieldCheck className="text-[#F7941E]" size={32} />,
      img: "https://images.unsplash.com/photo-1506784365847-bbad939e9335?auto=format&fit=crop&q=80&w=800",
      slug: "gestao-frotas"
    },
    {
      title: "TELEMETRIA AVANÇADA",
      desc: "Colete informações detalhadas sobre o desempenho de seus veículos, consumo de combustível e velocidade.",
      icon: <Zap className="text-[#F7941E]" size={32} />,
      img: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=800",
      slug: "telemetria-avancada"
    },
    {
      title: "OTIMIZAÇÃO DE ROTAS",
      desc: "Crie rotas personalizadas para seus motoristas com base nas necessidades específicas da sua empresa.",
      icon: <Navigation className="text-[#F7941E]" size={32} />,
      img: "https://images.unsplash.com/photo-1524661135-423995f22d0b?auto=format&fit=crop&q=80&w=800",
      slug: "otimizacao-rotas"
    }
  ];

  return (
    <section id="servicos" className="py-24 bg-zinc-100 relative z-10">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-black text-[#2B3990] mb-4">Nossas Soluções</h2>
          <p className="text-zinc-600 max-w-3xl mx-auto">
            Rastreamento, telemetria veicular e IOT para pequenas e grandes empresas, com aparelho homologado pela Anatel e sistema de rastreio exclusivo.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {solutions.map((sol, i) => (
            <motion.div 
              key={i}
              whileHover={{ y: -10 }}
              className="relative group h-[250px] rounded-2xl overflow-hidden shadow-lg"
            >
              <img 
                src={sol.img} 
                alt={sol.title} 
                className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-[#2B3990]/90 to-[#2B3990]/40 p-8 flex flex-col justify-center">
                <div className="mb-4">{sol.icon}</div>
                <h3 className="text-xl font-bold text-white mb-2">{sol.title}</h3>
                <p className="text-white/80 text-sm mb-4 line-clamp-2">{sol.desc}</p>
                <Link to={`/servicos/${sol.slug}`} className="text-[#F7941E] font-bold text-sm flex items-center gap-1 hover:gap-2 transition-all">
                  SAIBA MAIS <ChevronRight size={16} />
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

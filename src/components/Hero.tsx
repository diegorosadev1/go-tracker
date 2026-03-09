import React, { useState, useEffect } from 'react';
import { ChevronRight } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { Link } from 'react-router-dom';

export const Hero = () => {
  const slides = [
    {
      image: "https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?auto=format&fit=crop&q=80&w=1920",
      title: "Rastreamento de Frotas",
      subtitle: "Tecnologia de ponta para sua segurança e gestão em tempo real.",
      link: "/servicos/rastreamento-frotas"
    },
    {
      image: "https://images.unsplash.com/photo-1519003722824-194d4455a60c?auto=format&fit=crop&q=80&w=1920",
      title: "Gestão de Frotas",
      subtitle: "A gestão completa da sua frota na palma da sua mão.",
      link: "/servicos/gestao-frotas"
    },
    {
      image: "https://images.unsplash.com/photo-1580674684081-7617fbf3d745?auto=format&fit=crop&q=80&w=1920",
      title: "Telemetria Avançada",
      subtitle: "Reduza custos e aumente a vida útil dos seus veículos.",
      link: "/servicos/telemetria-avancada"
    },
    {
      image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&q=80&w=1920",
      title: "Otimização de Rotas",
      subtitle: "Rotas inteligentes para uma logística imbatível e econômica.",
      link: "/servicos/otimizacao-rotas"
    }
  ];

  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative h-[400px] md:h-[600px] overflow-hidden">
      <AnimatePresence mode="wait">
        <motion.div
          key={current}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1 }}
          className="absolute inset-0"
        >
          <div className="absolute inset-0 bg-black/40 z-10" />
          <img 
            src={slides[current].image} 
            alt={slides[current].title}
            className="w-full h-full object-cover"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 z-20 flex items-center">
            <div className="max-w-7xl mx-auto px-4 w-full">
              <motion.div 
                initial={{ x: -50, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: 0.5 }}
                className="max-w-xl bg-black/30 backdrop-blur-sm p-8 rounded-2xl border-l-4 border-gotracker-orange"
              >
                <h1 className="text-4xl md:text-6xl font-black text-white mb-4 leading-tight">
                  {slides[current].title}
                </h1>
                <p className="text-lg text-white/90 mb-8">
                  {slides[current].subtitle}
                </p>
                <Link 
                  to={slides[current].link}
                  className="bg-gotracker-orange text-white px-8 py-3 rounded-full font-bold hover:scale-105 transition-transform flex items-center gap-2 w-fit"
                >
                  SAIBA MAIS <ChevronRight size={20} />
                </Link>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </AnimatePresence>
      
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-30 flex gap-2">
        {slides.map((_, i) => (
          <button 
            key={i}
            onClick={() => setCurrent(i)}
            className={`w-3 h-3 rounded-full transition-all ${current === i ? 'bg-gotracker-orange w-8' : 'bg-white/50'}`}
          />
        ))}
      </div>
    </section>
  );
};

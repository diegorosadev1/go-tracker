import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import {
  HelpCircle,
  ChevronDown,
  PhoneCall,
  MessageCircle,
  UserCheck,
} from "lucide-react";
import Card from "../ui/Card";
import Button from "../ui/Button";

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      q: "Como funciona o rastreamento veicular?",
      a: "O rastreador utiliza tecnologia GPS para captar a localização do veículo e enviar os dados para nossos servidores, permitindo o acompanhamento em tempo real pelo aplicativo.",
    },
    {
      q: "Preciso instalar algum equipamento?",
      a: "Sim. Um pequeno rastreador é instalado no veículo para captar o sinal GPS.",
    },
    {
      q: "O rastreamento funciona em tempo real?",
      a: "Sim. A localização do veículo é atualizada constantemente no mapa.",
    },
    {
      q: "Posso bloquear o veículo pelo celular?",
      a: "Sim. O bloqueio remoto pode ser acionado diretamente pelo aplicativo em caso de emergência.",
    },
    {
      q: "Funciona em qualquer cidade?",
      a: "Sim. O sistema funciona em qualquer lugar com cobertura de sinal.",
    },
    {
      q: "Existe aplicativo para celular?",
      a: "Sim. Nosso aplicativo está disponível para Android e iOS.",
    },
    {
      q: "Quanto custa o serviço?",
      a: "Temos planos acessíveis a partir de valores mensais.",
    },
  ];

  return (
    <section className="py-16 sm:py-20 lg:py-24 relative overflow-hidden">
      <div className="container mx-auto px-6 max-w-4xl">
        {/* HEADER */}
        <div className="text-center mb-12 lg:mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-zinc-900 dark:text-zinc-100 mb-4">
            Dúvidas Frequentes
          </h2>

          <p className="text-zinc-500 dark:text-zinc-400 max-w-xl mx-auto text-base sm:text-lg">
            Tire suas principais dúvidas sobre nosso sistema de rastreamento
            veicular.
          </p>
        </div>

        {/* FAQ LIST */}
        <div className="space-y-4">
          {faqs.map((faq, i) => (
            <Card
              key={i}
              rounded="2xl"
              className="overflow-hidden border border-zinc-200 dark:border-white/10"
            >
              <button
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
                className="w-full p-5 sm:p-6 flex items-center justify-between gap-4 text-left group"
              >
                <div className="flex items-center gap-4">
                  <div
                    className={`w-9 h-9 rounded-xl flex items-center justify-center transition ${
                      openIndex === i
                        ? "bg-primary text-white"
                        : "bg-zinc-100 dark:bg-white/5 text-zinc-400"
                    }`}
                  >
                    <HelpCircle className="w-4 h-4" />
                  </div>

                  <span className="font-bold text-sm sm:text-base text-zinc-900 dark:text-zinc-100 group-hover:text-primary transition">
                    {faq.q}
                  </span>
                </div>

                <ChevronDown
                  className={`w-5 h-5 text-zinc-400 transition-transform duration-300 ${
                    openIndex === i ? "rotate-180 text-primary" : ""
                  }`}
                />
              </button>

              <AnimatePresence>
                {openIndex === i && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.25 }}
                    className="overflow-hidden"
                  >
                    <div className="px-6 pb-6 text-sm sm:text-base text-zinc-500 dark:text-zinc-400 leading-relaxed">
                      {faq.a}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;

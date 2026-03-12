import React from "react";
import {
  ChevronRight,
  Map,
  Lock,
  BarChart3,
  Gauge,
  Fuel,
  MapPin,
} from "lucide-react";
import { motion } from "motion/react";

const features = [
  {
    title: "Geofencing inteligente",
    description:
      "Crie perímetros virtuais e receba alertas instantâneos de entrada e saída dos veículos.",
    icon: Map,
  },
  {
    title: "Imobilização remota",
    description:
      "Aumente a segurança da frota com bloqueio de ignição remoto em situações suspeitas.",
    icon: Lock,
  },
  {
    title: "Análise de ociosidade",
    description:
      "Descubra quanto tempo os veículos permanecem ligados sem movimento e reduza desperdícios.",
    icon: BarChart3,
  },
];

const vehicleTypes = [
  "Sprinter",
  "Fiorino",
  "Vans",
  "Furgões",
  "Carros de passeio",
];

export const LightFleets = () => {
  return (
    <section
      aria-labelledby="light-fleets-title"
      className="theme-section relative overflow-hidden bg-slate-950 px-4 py-32 text-white"
    >
      <div aria-hidden="true" className="absolute inset-0 opacity-20">
        <div className="absolute left-0 top-0 h-full w-full bg-[radial-gradient(circle_at_50%_50%,#1e3a8a_0%,transparent_50%)]" />
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/stardust.png')]" />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl">
        <div className="flex flex-col items-center gap-24 lg:flex-row">
          <div className="lg:w-5/12">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <header>
                <div className="mb-8 inline-flex items-center gap-3 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-[11px] font-black uppercase tracking-[0.3em] text-gotracker-orange">
                  <span aria-hidden="true" className="relative flex h-2 w-2">
                    <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-gotracker-orange opacity-75" />
                    <span className="relative inline-flex h-2 w-2 rounded-full bg-gotracker-orange" />
                  </span>
                  Monitoramento em tempo real
                </div>

                <h2 className="text-6xl md:text-8xl font-black mb-10 leading-[0.85] tracking-tighter italic">
                  Controle <br />
                  <span className="text-gotracker-orange">Absoluto</span>
                </h2>

                <p className="mb-8 text-xl font-medium leading-relaxed text-slate-300">
                  Vá além do rastreamento veicular. Tenha mais controle
                  operacional com telemetria avançada para veículos leves,
                  utilitários e vans, como Sprinter, Fiorino e furgões,
                  reduzindo custos, aumentando a segurança e prolongando a vida
                  útil da frota.
                </p>
              </header>

              <ul
                aria-label="Tipos de veículos atendidos"
                className="mb-12 flex flex-wrap gap-3"
                role="list"
              >
                {vehicleTypes.map((vehicle) => (
                  <li key={vehicle} className="list-none">
                    <span className="rounded-lg border border-white/10 bg-white/5 px-3 py-1 text-[10px] font-bold uppercase tracking-wider text-slate-300">
                      {vehicle}
                    </span>
                  </li>
                ))}
              </ul>

              <ul className="space-y-10" role="list">
                {features.map(({ title, description, icon: Icon }) => (
                  <li key={title}>
                    <article className="group flex gap-8">
                      <div
                        aria-hidden="true"
                        className="flex h-16 w-16 flex-shrink-0 items-center justify-center rounded-3xl border border-white/10 bg-gradient-to-br from-white/10 to-transparent text-white shadow-xl transition-all duration-500 group-hover:border-gotracker-orange/50 group-hover:text-gotracker-orange"
                      >
                        <Icon size={24} aria-hidden="true" focusable="false" />
                      </div>

                      <div>
                        <h3 className="mb-2 text-2xl font-black tracking-tight text-white">
                          {title}
                        </h3>
                        <p className="font-medium leading-relaxed text-slate-400">
                          {description}
                        </p>
                      </div>
                    </article>
                  </li>
                ))}
              </ul>

              <div className="mt-16">
                <a
                  href="https://wa.me/19920011550?text=Ol%C3%A1!%20Gostaria%20de%20solicitar%20uma%20demo%20para%20rastreamento%20e%20telemetria%20de%20frotas%20leves."
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Solicitar demonstração pelo WhatsApp"
                  className="inline-flex items-center gap-4 rounded-2xl bg-gotracker-orange px-12 py-6 text-sm font-black uppercase tracking-widest text-white shadow-[0_20px_50px_rgba(249,115,22,0.4)] transition-all hover:scale-105 hover:bg-orange-600 focus:outline-none focus:ring-2 focus:ring-gotracker-orange focus:ring-offset-2 focus:ring-offset-slate-950"
                >
                  Solicitar demo
                  <ChevronRight
                    size={20}
                    aria-hidden="true"
                    focusable="false"
                  />
                </a>
              </div>
            </motion.div>
          </div>

          <div className="relative lg:w-7/12">
            <motion.figure
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1 }}
              className="relative"
              aria-labelledby="light-fleets-image-caption"
            >
              <div className="relative overflow-hidden rounded-[4rem] border-8 border-white/5 shadow-[0_50px_100px_rgba(0,0,0,0.8)]">
                <img
                  src="https://www.webmotors.com.br/wp-content/uploads/2020/03/26172016/Fiat-Argo-Trekking-1-7.jpeg"
                  alt="Veículo leve monitorado por tecnologia de rastreamento e telemetria"
                  loading="lazy"
                  decoding="async"
                  referrerPolicy="no-referrer"
                  className="aspect-[4/3] w-full object-cover opacity-80"
                />
                <div
                  aria-hidden="true"
                  className="absolute inset-0 bg-gradient-to-tr from-slate-950 via-transparent to-gotracker-blue/20"
                />

                <motion.div
                  initial={{ x: -20, opacity: 0 }}
                  whileInView={{ x: 0, opacity: 1 }}
                  transition={{ delay: 0.5 }}
                  className="absolute left-10 top-10 rounded-2xl border border-white/10 bg-black/40 p-6 backdrop-blur-md"
                  aria-label="Indicador de velocidade atual"
                >
                  <div className="mb-2 flex items-center gap-3 text-gotracker-orange">
                    <Gauge size={20} aria-hidden="true" focusable="false" />
                    <span className="text-xs font-black uppercase tracking-widest">
                      Velocidade atual
                    </span>
                  </div>
                  <p className="tabular-nums text-4xl font-black text-white">
                    112{" "}
                    <span className="text-sm font-bold text-white/40">
                      km/h
                    </span>
                  </p>
                </motion.div>

                <motion.div
                  initial={{ x: 20, opacity: 0 }}
                  whileInView={{ x: 0, opacity: 1 }}
                  transition={{ delay: 0.7 }}
                  className="absolute bottom-10 right-10 rounded-2xl bg-gotracker-orange/90 p-6 shadow-2xl backdrop-blur-md"
                  aria-label="Indicador de nível de combustível"
                >
                  <div className="mb-2 flex items-center gap-3 text-white">
                    <Fuel size={20} aria-hidden="true" focusable="false" />
                    <span className="text-xs font-black uppercase tracking-widest">
                      Nível de tanque
                    </span>
                  </div>
                  <p className="tabular-nums text-4xl font-black text-white">
                    74{" "}
                    <span className="text-sm font-bold text-white/60">%</span>
                  </p>
                </motion.div>
              </div>

              <figcaption id="light-fleets-image-caption" className="sr-only">
                Exemplo visual de monitoramento de veículos leves com
                telemetria, indicadores operacionais e rastreamento em tempo
                real.
              </figcaption>

              <motion.aside
                animate={{ x: [0, 20, 0], y: [0, -20, 0] }}
                transition={{
                  duration: 6,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="absolute -right-12 -top-12 hidden rounded-3xl bg-white p-6 shadow-[0_40px_80px_rgba(0,0,0,0.4)] xl:block"
                aria-label="Última posição registrada do veículo"
              >
                <div className="mb-4 flex items-center gap-4">
                  <div
                    aria-hidden="true"
                    className="flex h-10 w-10 items-center justify-center rounded-full bg-gotracker-blue text-white"
                  >
                    <MapPin size={20} />
                  </div>
                  <div>
                    <p className="text-[10px] font-black uppercase tracking-widest text-slate-400">
                      Última posição
                    </p>
                    <p className="font-black text-gotracker-blue">
                      São Luís, MA
                    </p>
                  </div>
                </div>
                <div className="relative h-24 w-40 overflow-hidden rounded-xl bg-slate-100">
                  <div
                    aria-hidden="true"
                    className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/gray-lines.png')] opacity-20"
                  />
                  <div
                    aria-hidden="true"
                    className="absolute left-1/2 top-1/2 h-4 w-4 -translate-x-1/2 -translate-y-1/2 animate-pulse rounded-full bg-gotracker-orange shadow-[0_0_15px_rgba(249,115,22,1)]"
                  />
                </div>
              </motion.aside>

              <aside
                className="absolute -bottom-16 left-1/2 flex -translate-x-1/2 items-center gap-8 rounded-full border border-white/20 bg-white/10 px-10 py-6 shadow-2xl backdrop-blur-xl"
                aria-label="Indicadores de desempenho da frota"
              >
                <div className="text-center">
                  <p className="mb-1 text-[10px] font-black uppercase tracking-widest text-white/40">
                    Economia
                  </p>
                  <p className="text-2xl font-black text-gotracker-orange">
                    +22%
                  </p>
                </div>
                <div aria-hidden="true" className="h-8 w-px bg-white/10" />
                <div className="text-center">
                  <p className="mb-1 text-[10px] font-black uppercase tracking-widest text-white/40">
                    Sinistros
                  </p>
                  <p className="text-2xl font-black text-green-400">-45%</p>
                </div>
              </aside>
            </motion.figure>
          </div>
        </div>
      </div>
    </section>
  );
};

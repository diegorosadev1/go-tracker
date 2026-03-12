import React from "react";
import { motion } from "motion/react";
import { SectionHeader } from "../shared/SectionHeader ";

export const AppShowcase = () => (
  <section
    id="quem-somos"
    aria-labelledby="app-showcase-title"
    className="bg-[#DEDEDE] dark:bg-slate-950 relative z-10 overflow-hidden py-24"
  >
    <div
      aria-hidden="true"
      className="absolute inset-0 opacity-[0.08] dark:opacity-[0.06]"
      style={{
        backgroundImage:
          "linear-gradient(#1e3a8a 1px, transparent 1px), linear-gradient(90deg, #1e3a8a 1px, transparent 1px)",
        backgroundSize: "50px 50px",
      }}
    />

    <div className="relative z-10 mx-auto max-w-7xl px-4">
      <div className="flex flex-col items-center gap-16 lg:flex-row">
        <div className="lg:w-1/2">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <SectionHeader
              align="left"
              theme="dark"
              size="md"
              title={
                <>
                  Sobre a
                  <span className="text-[#F7941E]">
                    <br />
                    Go Tracker
                  </span>
                </>
              }
              titleColor="dark:text-white"
              descriptionColor="text-zinc-700 dark:text-white/70"
              description="A GoTracker nasceu para oferecer rastreamento veicular com tecnologia avançada, preço justo e atendimento de qualidade. Somos especialistas em rastreamento e telemetria para veículos de passeio, utilitários e frotas empresariais em todo o território nacional."
              secondDescription="Trabalhamos com equipamentos homologados pela Anatel e um sistema exclusivo de monitoramento, acessível via web e aplicativo para Android e iOS, para dar mais controle, segurança e eficiência à sua operação."
            />
          </motion.div>

          <nav
            aria-label="Links para download do aplicativo"
            className="hidden gap-4 md:mt-12 md:flex"
          >
            <a
              href="https://play.google.com"
              target="_blank"
              rel="noopener noreferrer"
              className="transition-transform hover:scale-105"
            >
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/7/78/Google_Play_Store_badge_EN.svg"
                alt="Baixar aplicativo no Google Play"
                className="h-14"
              />
            </a>

            <a
              href="https://www.apple.com/app-store/"
              target="_blank"
              rel="noopener noreferrer"
              className="transition-transform hover:scale-105"
            >
              <img
                src="https://developer.apple.com/assets/elements/badges/download-on-the-app-store.svg"
                alt="Baixar aplicativo na App Store"
                className="h-14"
              />
            </a>
          </nav>
        </div>

        <div className="relative flex items-center justify-center lg:w-1/2">
          <motion.figure
            initial={{ opacity: 0, scale: 0.9, y: 30 }}
            whileInView={{ opacity: 1, scale: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, type: "spring" }}
            className="relative top-[-3rem] z-10 mx-auto md:mt-6"
            aria-labelledby="app-mockup-caption"
          >
            <div className="relative mx-auto h-[260px] w-[130px] overflow-hidden rounded-[2rem] border-[5px] border-[#1a1c2c] dark:border-[#353641] bg-[#1a1c2c] shadow-[0_20px_40px_-15px_rgba(0,0,0,0.45)] sm:h-[340px] sm:w-[170px] sm:rounded-[2.6rem] sm:border-[6px] lg:h-[620px] lg:w-[300px] lg:rounded-[3.5rem] lg:border-[10px] dark:border-[#0F1736] dark:bg-[#0F1736] dark:shadow-[0_24px_50px_-20px_rgba(0,0,0,0.65)]">
              <div className="relative h-full w-full overflow-hidden bg-[#eef2f7] dark:bg-[#b9bfdf]">
                <img
                  src="/assets/img/phone-bg.jpeg"
                  alt="Tela do aplicativo GoTracker exibida no mockup do celular"
                  className="h-full w-full object-cover"
                  loading="lazy"
                  decoding="async"
                />

                <div
                  aria-hidden="true"
                  className="absolute bottom-5 left-1/2 h-1 w-1/3 -translate-x-1/2 rounded-full bg-white/70 backdrop-blur-sm sm:bottom-8 sm:h-1.5 dark:bg-white/40"
                />
              </div>
            </div>

            <figcaption id="app-mockup-caption" className="sr-only">
              Exemplo visual do aplicativo de monitoramento veicular da
              GoTracker, disponível para acesso via web, Android e iOS.
            </figcaption>
          </motion.figure>
        </div>

        <nav
          aria-label="Links para download do aplicativo"
          className="mt-12 flex gap-4 sm:hidden"
        >
          <a
            href="https://play.google.com"
            target="_blank"
            rel="noopener noreferrer"
            className="transition-transform hover:scale-105"
          >
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/7/78/Google_Play_Store_badge_EN.svg"
              alt="Baixar aplicativo no Google Play"
              className="h-14"
            />
          </a>

          <a
            href="https://www.apple.com/app-store/"
            target="_blank"
            rel="noopener noreferrer"
            className="transition-transform hover:scale-105"
          >
            <img
              src="https://developer.apple.com/assets/elements/badges/download-on-the-app-store.svg"
              alt="Baixar aplicativo na App Store"
              className="h-14"
            />
          </a>
        </nav>
      </div>
    </div>
  </section>
);

import React from 'react';
import { motion } from 'motion/react';

export const AppShowcase = () => (
  <section className="py-24 bg-zinc-50 relative overflow-hidden z-10">
    {/* Grid Background Pattern */}
    <div 
      className="absolute inset-0 opacity-[0.1]" 
      style={{ 
        backgroundImage: `linear-gradient(#2B3990 1px, transparent 1px), linear-gradient(90deg, #2B3990 1px, transparent 1px)`,
        backgroundSize: '50px 50px'
      }}
    ></div>

    <div className="max-w-7xl mx-auto px-4 relative z-10">
      <div className="flex flex-col lg:flex-row items-center gap-16">
        <div className="lg:w-1/2">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-5xl font-black text-[#2B3990] mb-8 leading-tight">
              "Sistema de Monitoramento <br />
              Exclusivo em Todo o Brasil"
            </h2>
            
            <div className="space-y-6 text-zinc-600 leading-relaxed max-w-xl text-lg">
              <p>
                Fundada com a necessidade de oferecer uma opção de rastreamento veicular com qualidade avançada e preço justo. A GoTracker é especialista em rastreamento e telemetria, com atendimento para veículos de passeio e frotas de empresas em todo o território nacional.
              </p>
              <p>
                Nosso serviço é realizado com equipamentos homologados pela Anatel, além de fornecer um sistema de monitoramento exclusivo, acessível via web ou aplicativo para Android e iOS.
              </p>
            </div>

            <div className="flex flex-wrap gap-4 mt-12">
              <a href="#" className="hover:scale-105 transition-transform">
                <img 
                  src="https://upload.wikimedia.org/wikipedia/commons/7/78/Google_Play_Store_badge_EN.svg" 
                  alt="Get it on Google Play" 
                  className="h-14"
                  referrerPolicy="no-referrer"
                />
              </a>
              <a href="#" className="hover:scale-105 transition-transform">
                <img 
                  src="https://upload.wikimedia.org/wikipedia/commons/3/3c/Download_on_the_App_Store_Badge_US-UK_RGB_blk_092917.svg" 
                  alt="Download on the App Store" 
                  className="h-14"
                  referrerPolicy="no-referrer"
                />
              </a>
            </div>
          </motion.div>
        </div>

        <div className="lg:w-1/2 relative flex justify-center items-center">
          {/* Decorative Elements from the image */}
          <div className="absolute top-20 left-10 w-10 h-10 bg-[#F7941E] rounded-full shadow-xl flex items-center justify-center border-4 border-white z-20">
            <div className="w-2 h-2 bg-white rounded-full"></div>
          </div>
          <div className="absolute bottom-20 right-10 w-12 h-12 bg-[#2B3990] rounded-full shadow-xl flex items-center justify-center border-4 border-white z-20">
            <div className="w-3 h-3 bg-white rounded-full"></div>
          </div>

          {/* Smartphone Mockup */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 30 }}
            whileInView={{ opacity: 1, scale: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, type: "spring" }}
            className="relative z-10"
          >
            <div className="w-[300px] h-[620px] bg-[#1a1c2c] rounded-[3.5rem] border-[10px] border-[#1a1c2c] shadow-[0_50px_100px_-20px_rgba(0,0,0,0.5)] overflow-hidden relative">
              {/* Screen Content */}
              <div className="w-full h-full bg-[#eef2f7] flex flex-col items-center justify-center p-8 relative">
                {/* App Logo/Button in the middle */}
                <div className="w-24 h-24 bg-white rounded-full shadow-[0_10px_30px_rgba(0,0,0,0.1)] flex items-center justify-center mb-4 border border-zinc-100">
                  <span className="text-[#2B3990] font-black text-3xl tracking-tighter">GO</span>
                </div>
                
                {/* Placeholder UI elements */}
                <div className="w-full space-y-4 mt-8">
                  <div className="h-3 bg-zinc-200 rounded-full w-3/4 mx-auto"></div>
                  <div className="h-3 bg-zinc-200 rounded-full w-1/2 mx-auto"></div>
                  <div className="h-3 bg-zinc-200 rounded-full w-2/3 mx-auto"></div>
                </div>

                {/* Bottom Bar */}
                <div className="absolute bottom-8 left-1/2 -translate-x-1/2 w-1/3 h-1.5 bg-zinc-300 rounded-full"></div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  </section>
);

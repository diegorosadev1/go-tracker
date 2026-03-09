import React from 'react';
import { ChevronRight, Map, Lock, BarChart3, Gauge, Fuel, MapPin } from 'lucide-react';
import { motion } from 'motion/react';

export const LightFleets = () => {
  return (
    <section className="py-32 px-4 bg-slate-950 text-white overflow-hidden relative">
      {/* Immersive Background */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_50%_50%,#1e3a8a_0%,transparent_50%)]"></div>
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/stardust.png')]"></div>
      </div>
      
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-24">
          <div className="lg:w-5/12">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-white/5 border border-white/10 text-gotracker-orange text-[11px] font-black uppercase tracking-[0.3em] mb-8">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-gotracker-orange opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-gotracker-orange"></span>
                </span>
                Live Intelligence
              </div>
              
              <h2 className="text-6xl md:text-8xl font-black mb-10 leading-[0.85] tracking-tighter italic">
                Controle <br />
                <span className="text-gotracker-orange">Absoluto</span>
              </h2>
              
              <p className="text-xl text-slate-400 mb-8 leading-relaxed font-medium">
                Não apenas rastreie. Domine sua operação com telemetria avançada para veículos leves, utilitários e vans como <span className="text-white">Sprinter, Fiorino e furgões</span>, reduzindo custos invisíveis e aumentando a vida útil da sua frota.
              </p>

              <div className="flex flex-wrap gap-3 mb-12">
                {['Sprinter', 'Fiorino', 'Vans', 'Furgões', 'Carros de Passeio'].map((v) => (
                  <span key={v} className="px-3 py-1 bg-white/5 border border-white/10 rounded-lg text-[10px] font-bold text-slate-300 uppercase tracking-wider">
                    {v}
                  </span>
                ))}
              </div>
              
              <div className="space-y-10">
                {[
                  { 
                    icon: <Map size={24} />, 
                    title: "Geofencing Inteligente", 
                    desc: "Crie perímetros virtuais e receba alertas instantâneos de entrada e saída." 
                  },
                  { 
                    icon: <Lock size={24} />, 
                    title: "Imobilização Remota", 
                    desc: "Segurança máxima com bloqueio de ignição via satélite em caso de suspeita." 
                  },
                  { 
                    icon: <BarChart3 size={24} />, 
                    title: "Análise de Ociosidade", 
                    desc: "Saiba exatamente quanto tempo seus veículos ficam ligados sem movimento." 
                  }
                ].map((item, i) => (
                  <div key={i} className="flex gap-8 group">
                    <div className="flex-shrink-0 w-16 h-16 rounded-3xl bg-gradient-to-br from-white/10 to-transparent border border-white/10 flex items-center justify-center text-white group-hover:text-gotracker-orange group-hover:border-gotracker-orange/50 transition-all duration-500 shadow-xl">
                      {item.icon}
                    </div>
                    <div>
                      <h4 className="text-2xl font-black text-white mb-2 tracking-tight">{item.title}</h4>
                      <p className="text-slate-500 font-medium leading-relaxed">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-16">
                <button className="bg-gotracker-orange hover:bg-orange-600 text-white font-black py-6 px-12 rounded-2xl transition-all transform hover:scale-105 shadow-[0_20px_50px_rgba(249,115,22,0.4)] flex items-center gap-4 uppercase tracking-widest text-sm">
                  Solicitar Demo <ChevronRight size={20} />
                </button>
              </div>
            </motion.div>
          </div>

          <div className="lg:w-7/12 relative">
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1 }}
              className="relative"
            >
              {/* Main Visual: High-Tech Car Image */}
              <div className="relative rounded-[4rem] overflow-hidden border-8 border-white/5 shadow-[0_50px_100px_rgba(0,0,0,0.8)]">
                <img 
                  src="https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?auto=format&fit=crop&q=80&w=1200" 
                  alt="Fiat Argo Branco" 
                  className="w-full aspect-[4/3] object-cover opacity-80"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-tr from-slate-950 via-transparent to-gotracker-blue/20"></div>
                
                {/* Animated HUD Elements */}
                <motion.div 
                  initial={{ x: -20, opacity: 0 }}
                  whileInView={{ x: 0, opacity: 1 }}
                  transition={{ delay: 0.5 }}
                  className="absolute top-10 left-10 p-6 bg-black/40 backdrop-blur-md rounded-2xl border border-white/10"
                >
                  <div className="flex items-center gap-3 text-gotracker-orange mb-2">
                    <Gauge size={20} />
                    <span className="text-xs font-black uppercase tracking-widest">Velocidade Atual</span>
                  </div>
                  <div className="text-4xl font-black text-white tabular-nums">112 <span className="text-sm font-bold text-white/40">km/h</span></div>
                </motion.div>

                <motion.div 
                  initial={{ x: 20, opacity: 0 }}
                  whileInView={{ x: 0, opacity: 1 }}
                  transition={{ delay: 0.7 }}
                  className="absolute bottom-10 right-10 p-6 bg-gotracker-orange/90 backdrop-blur-md rounded-2xl shadow-2xl"
                >
                  <div className="flex items-center gap-3 text-white mb-2">
                    <Fuel size={20} />
                    <span className="text-xs font-black uppercase tracking-widest">Nível de Tanque</span>
                  </div>
                  <div className="text-4xl font-black text-white tabular-nums">74 <span className="text-sm font-bold text-white/60">%</span></div>
                </motion.div>
              </div>

              {/* Floating Map Card */}
              <motion.div 
                animate={{ x: [0, 20, 0], y: [0, -20, 0] }}
                transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -top-12 -right-12 bg-white p-6 rounded-3xl shadow-[0_40px_80px_rgba(0,0,0,0.4)] hidden xl:block"
              >
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-10 h-10 bg-gotracker-blue rounded-full flex items-center justify-center text-white">
                    <MapPin size={20} />
                  </div>
                  <div>
                    <p className="text-slate-400 text-[10px] font-black uppercase tracking-widest">Última Posição</p>
                    <p className="text-gotracker-blue font-black">São Luís, MA</p>
                  </div>
                </div>
                <div className="w-40 h-24 bg-slate-100 rounded-xl overflow-hidden relative">
                  <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/gray-lines.png')] opacity-20"></div>
                  <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-4 h-4 bg-gotracker-orange rounded-full animate-pulse shadow-[0_0_15px_rgba(249,115,22,1)]"></div>
                </div>
              </motion.div>

              {/* Performance Badge */}
              <div className="absolute -bottom-16 left-1/2 -translate-x-1/2 bg-white/10 backdrop-blur-xl px-10 py-6 rounded-full border border-white/20 flex items-center gap-8 shadow-2xl">
                <div className="text-center">
                  <p className="text-white/40 text-[10px] font-black uppercase tracking-widest mb-1">Economia</p>
                  <p className="text-2xl font-black text-gotracker-orange">+22%</p>
                </div>
                <div className="w-px h-8 bg-white/10"></div>
                <div className="text-center">
                  <p className="text-white/40 text-[10px] font-black uppercase tracking-widest mb-1">Sinistros</p>
                  <p className="text-2xl font-black text-green-400">-45%</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

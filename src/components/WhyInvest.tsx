import React from 'react';
import { TrendingUp, Clock, ShieldCheck, MapPin } from 'lucide-react';

export const WhyInvest = () => (
  <section className="py-24 bg-zinc-100 relative z-10">
    <div className="max-w-7xl mx-auto px-4">
      <div className="flex flex-col lg:flex-row items-center gap-16">
        <div className="lg:w-1/2">
          <div className="relative">
            <img 
              src="https://images.unsplash.com/photo-1506015391300-4802dc74de2e?auto=format&fit=crop&q=80&w=800" 
              alt="Tecnologia de Rastreamento"
              className="rounded-[40px] shadow-2xl relative z-10 border-8 border-white"
              referrerPolicy="no-referrer"
            />
            <div className="absolute -bottom-6 -right-6 w-64 h-64 bg-[#F7941E] rounded-[40px] -z-0 opacity-20"></div>
            <div className="absolute -top-6 -left-6 w-32 h-32 border-8 border-[#2B3990] rounded-full -z-0 opacity-10"></div>
          </div>
        </div>
        <div className="lg:w-1/2">
          <h2 className="text-4xl font-black text-[#2B3990] mb-6 leading-tight">
            Por que investir em <br />
            <span className="text-[#F7941E]">Rastreamento Inteligente?</span>
          </h2>
          <p className="text-zinc-600 mb-10 leading-relaxed">
            Investir em rastreamento veicular traz benefícios imediatos para empresas de todos os tamanhos. Nossa plataforma oferece insights que transformam sua operação.
          </p>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
            <div className="flex gap-4">
              <div className="flex-shrink-0 w-12 h-12 bg-white shadow-sm rounded-2xl flex items-center justify-center text-[#F7941E]">
                <TrendingUp size={24} />
              </div>
              <div>
                <h4 className="font-bold text-[#2B3990] mb-1">Redução de Custos</h4>
                <p className="text-xs text-zinc-500">Economize até 20% em combustível e manutenção.</p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="flex-shrink-0 w-12 h-12 bg-white shadow-sm rounded-2xl flex items-center justify-center text-[#F7941E]">
                <Clock size={24} />
              </div>
              <div>
                <h4 className="font-bold text-[#2B3990] mb-1">Produtividade</h4>
                <p className="text-xs text-zinc-500">Acompanhe o tempo de parada e execução de rotas.</p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="flex-shrink-0 w-12 h-12 bg-white shadow-sm rounded-2xl flex items-center justify-center text-[#F7941E]">
                <ShieldCheck size={24} />
              </div>
              <div>
                <h4 className="font-bold text-[#2B3990] mb-1">Mais Segurança</h4>
                <p className="text-xs text-zinc-500">Recuperação de veículos em tempo recorde.</p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="flex-shrink-0 w-12 h-12 bg-white shadow-sm rounded-2xl flex items-center justify-center text-[#F7941E]">
                <MapPin size={24} />
              </div>
              <div>
                <h4 className="font-bold text-[#2B3990] mb-1">Localização Real</h4>
                <p className="text-xs text-zinc-500">Precisão GPS de última geração em todo o país.</p>
              </div>
            </div>
          </div>

          <button className="mt-12 bg-[#2B3990] text-white px-8 py-4 rounded-full font-bold hover:bg-[#1e2866] transition-all shadow-lg">
            Falar com Especialista
          </button>
        </div>
      </div>
    </div>
  </section>
);

import React from 'react';
import { Facebook, Instagram, Mail, Phone, MapPin } from 'lucide-react';

export const Footer = () => (
  <footer className="bg-zinc-900 text-white pt-24 pb-12 relative z-10">
    <div className="max-w-7xl mx-auto px-4">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16 mb-20">
        <div>
          <div className="flex flex-col mb-8">
            <span className="text-3xl font-black tracking-tighter leading-none flex items-center">
              <span className="text-white">GO</span>
              <span className="text-[#F7941E] ml-1">TRACKER</span>
            </span>
            <span className="text-[10px] font-bold text-zinc-400 uppercase tracking-widest mt-1">
              Rastreamento Veicular
            </span>
          </div>
          <p className="text-zinc-500 text-sm leading-relaxed mb-8">
            Sua parceira estratégica em segurança e gestão de frotas. Tecnologia de ponta para quem não pode parar.
          </p>
          <div className="flex gap-4">
            <div className="w-10 h-10 rounded-full bg-zinc-800 flex items-center justify-center hover:bg-[#F7941E] transition-colors cursor-pointer">
              <Facebook size={18} />
            </div>
            <div className="w-10 h-10 rounded-full bg-zinc-800 flex items-center justify-center hover:bg-[#F7941E] transition-colors cursor-pointer">
              <Instagram size={18} />
            </div>
          </div>
        </div>

        <div>
          <h4 className="text-lg font-bold mb-8 border-l-4 border-[#F7941E] pl-4">Links Rápidos</h4>
          <ul className="space-y-4 text-zinc-500 text-sm">
            <li><a href="/" className="hover:text-white transition-colors">Home</a></li>
            <li><a href="/#quem-somos" className="hover:text-white transition-colors">Quem Somos</a></li>
            <li><a href="/#servicos" className="hover:text-white transition-colors">Nossas Soluções</a></li>
            <li><a href="#" className="hover:text-white transition-colors">Área do Cliente</a></li>
            <li><a href="#" className="hover:text-white transition-colors">Política de Privacidade</a></li>
          </ul>
        </div>

        <div>
          <h4 className="text-lg font-bold mb-8 border-l-4 border-[#F7941E] pl-4">Fale Conosco</h4>
          <ul className="space-y-6 text-zinc-500 text-sm">
            <li className="flex gap-4">
              <Mail size={20} className="text-[#F7941E] flex-shrink-0" />
              <span>contato@gotracker.com.br</span>
            </li>
            <li className="flex gap-4">
              <Phone size={20} className="text-[#F7941E] flex-shrink-0" />
              <span>(98) 99107-0105</span>
            </li>
            <li className="flex gap-4">
              <MapPin size={20} className="text-[#F7941E] flex-shrink-0" />
              <span>Av. Principal, 09 - Cohajap, São Luís - MA, 65072-580</span>
            </li>
          </ul>
        </div>

        <div>
          <h4 className="text-lg font-bold mb-8 border-l-4 border-[#F7941E] pl-4">Newsletter</h4>
          <p className="text-zinc-500 text-sm mb-6">Receba dicas de gestão e segurança no seu e-mail.</p>
          <div className="flex flex-col gap-3">
            <input 
              type="email" 
              placeholder="Seu melhor e-mail" 
              className="bg-zinc-800 border-none rounded-xl px-4 py-3 text-sm focus:ring-2 focus:ring-[#F7941E] outline-none"
            />
            <button className="bg-[#F7941E] text-white py-3 rounded-xl font-bold text-sm uppercase tracking-widest hover:bg-orange-600 transition-colors">
              Inscrever-se
            </button>
          </div>
        </div>
      </div>

      <div className="pt-12 border-t border-zinc-800 flex flex-col md:flex-row justify-between items-center gap-6 text-zinc-600 text-[10px] uppercase tracking-widest font-bold">
        <p>© 2024 GO TRACKER - TODOS OS DIREITOS RESERVADOS</p>
        <div className="flex gap-8">
          <a href="#" className="hover:text-white">Termos de Uso</a>
          <a href="#" className="hover:text-white">Privacidade</a>
        </div>
      </div>
    </div>
  </footer>
);

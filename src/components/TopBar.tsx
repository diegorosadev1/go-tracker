import React from 'react';
import { Mail, Phone, Facebook, Instagram } from 'lucide-react';

export const TopBar = () => (
  <div className="bg-[#2B3990] text-white py-2 px-4 hidden md:block relative z-10">
    <div className="max-w-7xl mx-auto flex justify-between items-center text-xs font-medium">
      <div className="flex gap-6">
        <a href="mailto:contato@gotracker.com.br" className="flex items-center gap-2 hover:text-orange-400 transition-colors">
          <Mail size={14} /> contato@gotracker.com.br
        </a>
        <a href="tel:0800000000" className="flex items-center gap-2 hover:text-orange-400 transition-colors">
          <Phone size={14} /> (98) 99107-0105
        </a>
      </div>
      <div className="flex gap-4 items-center">
        <div className="flex gap-3">
          <Facebook size={14} className="cursor-pointer hover:text-orange-400" />
          <Instagram size={14} className="cursor-pointer hover:text-orange-400" />
        </div>
      </div>
    </div>
  </div>
);

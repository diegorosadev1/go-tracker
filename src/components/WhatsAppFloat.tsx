import React from 'react';
import { MessageSquare } from 'lucide-react';

export const WhatsAppFloat = () => (
  <a 
    href="https://wa.me/5598991070105" 
    target="_blank" 
    rel="noopener noreferrer"
    className="fixed bottom-8 right-8 z-50 w-16 h-16 bg-[#25D366] text-white rounded-full flex items-center justify-center shadow-2xl hover:scale-110 transition-transform"
  >
    <MessageSquare size={32} fill="currentColor" />
  </a>
);

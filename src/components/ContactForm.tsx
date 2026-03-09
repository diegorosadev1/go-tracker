import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { CheckCircle2, AlertCircle, Loader2 } from 'lucide-react';

export const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    city: '',
    message: ''
  });
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('loading');

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.ok && data.success) {
        setStatus('success');
        setFormData({ name: '', email: '', phone: '', city: '', message: '' });
        setTimeout(() => setStatus('idle'), 5000);
      } else {
        throw new Error(data.message || 'Erro ao enviar mensagem');
      }
    } catch (error: any) {
      console.error('Erro no envio:', error);
      setStatus('error');
      setErrorMessage(error.message || 'Ocorreu um erro inesperado. Tente novamente mais tarde.');
      setTimeout(() => setStatus('idle'), 5000);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  return (
    <section id="contato" className="py-24 bg-[#2B3990] relative overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0 opacity-20">
        <img 
          src="https://images.unsplash.com/photo-1519003722824-194d4455a60c?auto=format&fit=crop&q=80&w=1920" 
          alt="Background"
          className="w-full h-full object-cover"
          referrerPolicy="no-referrer"
        />
      </div>

      <div className="relative z-10 max-w-4xl mx-auto px-4">
        <div className="text-center mb-12 text-white">
          <h2 className="text-4xl font-black mb-4 uppercase">Fale com a gente</h2>
          <p className="text-zinc-300">
            Você tem dúvidas sobre os nossos serviços? Entre em contato, responderemos o mais breve possível.
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="grid grid-cols-1 gap-4">
            <input 
              type="text" 
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Digite seu nome" 
              required
              className="w-full bg-white/10 border border-white/20 rounded-lg px-6 py-4 text-white placeholder:text-zinc-400 focus:outline-none focus:border-[#F7941E] transition-all"
            />
            <input 
              type="email" 
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Digite seu e-mail" 
              required
              className="w-full bg-white/10 border border-white/20 rounded-lg px-6 py-4 text-white placeholder:text-zinc-400 focus:outline-none focus:border-[#F7941E] transition-all"
            />
            <input 
              type="tel" 
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              placeholder="Digite seu celular" 
              required
              className="w-full bg-white/10 border border-white/20 rounded-lg px-6 py-4 text-white placeholder:text-zinc-400 focus:outline-none focus:border-[#F7941E] transition-all"
            />
            <input 
              type="text" 
              name="city"
              value={formData.city}
              onChange={handleChange}
              placeholder="Digite sua Cidade e Estado" 
              required
              className="w-full bg-white/10 border border-white/20 rounded-lg px-6 py-4 text-white placeholder:text-zinc-400 focus:outline-none focus:border-[#F7941E] transition-all"
            />
            <textarea 
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="Escreva sua mensagem" 
              rows={4}
              required
              className="w-full bg-white/10 border border-white/20 rounded-lg px-6 py-4 text-white placeholder:text-zinc-400 focus:outline-none focus:border-[#F7941E] transition-all resize-none"
            ></textarea>
          </div>
          
          <button 
            type="submit"
            disabled={status === 'loading'}
            className="w-full bg-[#8DC63F] hover:bg-[#7ab035] text-white font-black py-4 rounded-lg transition-all uppercase tracking-widest shadow-lg flex items-center justify-center gap-2 disabled:opacity-70 disabled:cursor-not-allowed"
          >
            {status === 'loading' ? (
              <>
                <Loader2 className="animate-spin" size={20} />
                Enviando...
              </>
            ) : 'Enviar Mensagem'}
          </button>

          <AnimatePresence>
            {status === 'success' && (
              <motion.div 
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0 }}
                className="bg-green-500/20 border border-green-500/50 text-green-200 p-4 rounded-lg flex items-center gap-3"
              >
                <CheckCircle2 size={20} />
                Mensagem enviada com sucesso! Entraremos em contato em breve.
              </motion.div>
            )}

            {status === 'error' && (
              <motion.div 
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0 }}
                className="bg-red-500/20 border border-red-500/50 text-red-200 p-4 rounded-lg flex items-center gap-3"
              >
                <AlertCircle size={20} />
                {errorMessage}
              </motion.div>
            )}
          </AnimatePresence>
        </form>
      </div>
    </section>
  );
};

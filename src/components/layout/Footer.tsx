import React from "react";
import { MapPin, Smartphone, Mail, Clock, ShieldCheck } from "lucide-react";
import Logo from "../ui/Logo";

const Footer = () => {
  return (
    <footer
      id="contato"
      className="pt-14 md:pt-20 pb-10 border-t border-zinc-200 dark:border-white/5 bg-white dark:bg-zinc-950"
    >
      <div className="container mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-14 text-center md:text-left">
          {/* LOGO + DESCRIÇÃO */}
          <div className="lg:col-span-2 flex flex-col items-center md:items-start">
            <Logo className="h-23 w-auto mb-6" />

            <p className="text-zinc-500 dark:text-zinc-400 mb-6 text-sm leading-relaxed">
              Líder em tecnologia de rastreamento veicular em Hortolândia e
              região. Monitoramento inteligente, segurança 24h e total controle
              do seu veículo.
            </p>

            {/* DIFERENCIAIS */}
            <div className="space-y-2 text-sm text-zinc-600 dark:text-zinc-400 flex flex-col items-center md:items-start">
              <div className="flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-primary" />
                Monitoramento 24 horas
              </div>

              <div className="flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-primary" />
                GPS de alta precisão
              </div>

              <div className="flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-primary" />
                Suporte especializado
              </div>
            </div>
          </div>

          {/* LINKS */}
          <div className="flex flex-col items-center md:items-start">
            <h5 className="font-bold mb-5 text-zinc-900 dark:text-zinc-100 uppercase tracking-widest text-xs">
              Navegação
            </h5>

            <ul className="space-y-3 text-zinc-500 dark:text-zinc-400 font-medium text-sm">
              <li>
                <a
                  href="#recursos"
                  className="hover:text-primary transition-colors"
                >
                  Recursos
                </a>
              </li>

              <li>
                <a
                  href="#planos"
                  className="hover:text-primary transition-colors"
                >
                  Planos
                </a>
              </li>

              <li>
                <a
                  href="https://gotracker.seeflex.com.br/users/login"
                  className="hover:text-primary transition-colors"
                >
                  Área do Cliente
                </a>
              </li>

              <li>
                <a
                  href="#contato"
                  className="hover:text-primary transition-colors"
                >
                  Contato
                </a>
              </li>
            </ul>
          </div>

          {/* CONTATO */}
          <div className="flex flex-col items-center md:items-start">
            <h5 className="font-bold mb-5 text-zinc-900 dark:text-zinc-100 uppercase tracking-widest text-xs">
              Contato
            </h5>

            <div className="space-y-4 text-zinc-500 dark:text-zinc-400 text-sm">
              <div className="flex gap-3 items-center md:items-start justify-center md:justify-start">
                <MapPin className="w-5 h-5 text-primary flex-shrink-0 mt-1" />
                <p>
                  Rua das Palmeiras, 123 <br />
                  Hortolândia - SP
                </p>
              </div>

              <div className="flex gap-3 items-center justify-center md:justify-start">
                <Smartphone className="w-5 h-5 text-primary flex-shrink-0" />
                <p>(19) 99577-8009</p>
              </div>

              <div className="flex gap-3 items-center justify-center md:justify-start">
                <Mail className="w-5 h-5 text-primary flex-shrink-0" />
                <p>contato@gotracker.com.br</p>
              </div>

              <div className="flex gap-3 items-center md:items-start justify-center md:justify-start">
                <Clock className="w-5 h-5 text-primary flex-shrink-0 mt-1" />
                <p>
                  Seg - Sex: 08h às 18h <br />
                  Plantão 24h
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* CTA WHATSAPP */}

        <div className="mb-12">
          <div className="bg-primary text-white rounded-xl p-6 flex flex-col md:flex-row items-center justify-center md:justify-between gap-4 text-center md:text-left">
            <div>
              <h4 className="font-bold text-lg">
                Precisa proteger seu veículo?
              </h4>

              <p className="text-sm opacity-90">
                Fale agora com um especialista
              </p>
            </div>

            <a
              href="https://wa.me/5519995778009"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white text-primary px-6 py-3 rounded-lg font-semibold hover:scale-105 transition-transform"
            >
              Falar no WhatsApp
            </a>
          </div>
        </div>

        {/* BOTTOM */}

        <div className="pt-6 border-t border-zinc-200 dark:border-white/5 flex flex-col md:flex-row items-center justify-center md:justify-between gap-4 text-xs text-zinc-500 text-center">
          <p>© 2024 GoTracker. Todos os direitos reservados.</p>

          <div className="flex gap-6">
            <a
              href="#"
              className="hover:text-zinc-700 dark:hover:text-zinc-300"
            >
              Política de Privacidade
            </a>

            <a
              href="#"
              className="hover:text-zinc-700 dark:hover:text-zinc-300"
            >
              Termos de Uso
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

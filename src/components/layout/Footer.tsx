import React from "react";
import {
  MapPin,
  Smartphone,
  Mail,
  Clock,
  ShieldCheck,
  Zap,
} from "lucide-react";
import Logo from "../ui/Logo";

const Footer = () => {
  return (
    <footer
      id="contato"
      className="pt-16 sm:pt-20 md:pt-24 pb-10 sm:pb-12 border-t border-zinc-200 dark:border-white/5 bg-white dark:bg-zinc-950"
    >
      <div className="container mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 md:gap-12 mb-14 md:mb-16">
          {/* LOGO + DESCRIÇÃO */}
          <div className="lg:col-span-2 relative">
            {/* LOGO ABSOLUTA */}
            <div className="absolute top-0 left/-15 z-20">
              <Logo className="h-14 sm:h-16 w-auto" />
            </div>

            {/* ESPAÇO PARA NÃO QUEBRAR O LAYOUT */}
            <div className="h-16 mb-6 mt-5"></div>

            <p className="text-zinc-500 dark:text-zinc-400 max-w-md mb-8 text-sm sm:text-base leading-relaxed">
              Líder em tecnologia de rastreamento veicular em Hortolândia e
              região. Monitoramento inteligente, segurança 24h e total controle
              do seu veículo.
            </p>

            {/* DIFERENCIAIS */}
            <div className="space-y-3 text-sm text-zinc-600 dark:text-zinc-400">
              <div className="flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-primary" />
                Monitoramento 24 horas
              </div>

              <div className="flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-primary" />
                Tecnologia GPS de alta precisão
              </div>

              <div className="flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-primary" />
                Suporte especializado
              </div>
            </div>

            {/* REDES */}
            <div className="flex gap-3 mt-8">
              {["Instagram", "Facebook", "LinkedIn"].map((social) => (
                <a
                  key={social}
                  href="#"
                  className="w-9 h-9 sm:w-10 sm:h-10 rounded-full glass flex items-center justify-center hover:bg-primary hover:text-white transition-all text-secondary dark:text-zinc-300"
                >
                  <Zap className="w-4 h-4 sm:w-5 sm:h-5" />
                </a>
              ))}
            </div>
          </div>

          {/* LINKS */}
          <div>
            <h5 className="font-bold mb-6 text-zinc-900 dark:text-zinc-100 uppercase tracking-widest text-xs sm:text-sm">
              Navegação
            </h5>

            <ul className="space-y-4 text-zinc-500 dark:text-zinc-400 font-medium text-sm sm:text-base">
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
          <div>
            <h5 className="font-bold mb-6 text-zinc-900 dark:text-zinc-100 uppercase tracking-widest text-xs sm:text-sm">
              Contato
            </h5>

            <div className="space-y-5 text-zinc-500 dark:text-zinc-400">
              <div className="flex gap-3">
                <MapPin className="w-5 h-5 text-primary flex-shrink-0 mt-1" />

                <p className="font-medium text-sm sm:text-base leading-relaxed">
                  Rua das Palmeiras, 123 <br />
                  Hortolândia - SP <br />
                  CEP: 13184-000
                </p>
              </div>

              <div className="flex gap-3 items-center">
                <Smartphone className="w-5 h-5 text-primary flex-shrink-0" />

                <p className="font-medium text-sm sm:text-base">
                  (19) 99577-8009
                </p>
              </div>

              <div className="flex gap-3 items-center">
                <Mail className="w-5 h-5 text-primary flex-shrink-0" />

                <p className="font-medium text-sm sm:text-base">
                  contato@gotracker.com.br
                </p>
              </div>

              <div className="flex gap-3 items-start">
                <Clock className="w-5 h-5 text-primary flex-shrink-0 mt-1" />

                <p className="font-medium text-sm sm:text-base leading-relaxed">
                  Seg - Sex: 08h às 18h <br />
                  Plantão 24h para emergências
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* CTA WHATSAPP */}

        <div className="mb-12">
          <div className="bg-primary/10 border border-primary/20 rounded-xl p-6 flex flex-col md:flex-row items-center justify-between gap-6 text-center md:text-left">
            <div>
              <h4 className="font-bold text-lg text-zinc-900 dark:text-zinc-100">
                Precisa proteger seu veículo?
              </h4>

              <p className="text-zinc-500 dark:text-zinc-400 text-sm">
                Fale agora com um especialista da GoTracker
              </p>
            </div>

            <a
              href="https://wa.me/5519995778009?text=Olá!%20Vim%20pelo%20site%20da%20GoTracker%20e%20gostaria%20de%20mais%20informações%20sobre%20o%20rastreamento%20veicular."
              target="_blank"
              rel="noopener noreferrer"
              className="bg-primary text-white px-6 py-3 rounded-lg font-semibold hover:scale-105 transition-transform"
            >
              Falar no WhatsApp
            </a>
          </div>
        </div>

        {/* BOTTOM */}

        <div className="pt-6 sm:pt-8 border-t border-zinc-200 dark:border-white/5 flex flex-col md:flex-row items-center justify-between gap-4 text-xs sm:text-sm text-zinc-500 text-center md:text-left">
          <p>© 2024 GoTracker. Todos os direitos reservados.</p>

          <div className="flex gap-6 sm:gap-8">
            <a
              href="#"
              className="hover:text-zinc-700 dark:hover:text-zinc-300 transition-colors"
            >
              Política de Privacidade
            </a>

            <a
              href="#"
              className="hover:text-zinc-700 dark:hover:text-zinc-300 transition-colors"
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

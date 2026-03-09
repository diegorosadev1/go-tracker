import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { Check, MapPin, BarChart3, TrendingUp, Shield, Zap, Clock, Navigation, Users, Activity } from 'lucide-react';
import { ContactForm } from '../components/ContactForm';

const serviceData: Record<string, any> = {
  'rastreamento-frotas': {
    title: 'Rastreamento de Frotas',
    heroTitle: 'Tenha Controle Total sobre a sua frota em Tempo Real',
    heroDesc: 'O Sistema de Rastreamento é exclusivo para a região e possui um conjunto de funcionalidades que o tornam completo para o serviço de rastreamento. Assim, o condutor ou gestor de frotas pode rastrear, bloquear, verificar o trajeto percorrido pelo veículo, se está ligado ou desligado, saber o local exato onde ele está, ter o controle de horas trafegadas, assim como o tempo de parada, horários de início e final de rota, histórico do sentido percorrido por até 1 ano e demais funcionalidades que deixam o veículo ou frotas cada vez mais protegidos, garantindo tranquilidade e redução de custos.',
    heroImage: 'https://www.shutterstock.com/image-photo/aerial-view-semi-truck-trailer-600nw-2668664849.jpg',
    benefits: [
      { icon: MapPin, title: 'Acompanhe, a qualquer momento, a localização dos veículos.' },
      { icon: BarChart3, title: 'Reduza gastos com consumo de combustível, desgaste do veículo e multas.' },
      { icon: TrendingUp, title: 'Aumento de produtividade no horário de trabalho, evitando desvios desnecessários.' },
      { icon: Shield, title: 'Crie cercas virtuais para ter mais controle sobre a movimentação de sua frota.' },
      { icon: Zap, title: 'Reduza a ocorrência de multas, receba alertas de excesso de velocidade.' }
    ],
    complementaryImage: 'https://plus.unsplash.com/premium_photo-1661962667495-c9dd5c790758?fm=jpg&q=60&w=3000&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fGZyb3RhJTIwZGUlMjBjYXJyb3N8ZW58MHx8MHx8fDA%3D'
  },
  'gestao-frotas': {
    title: 'Gestão de Frotas',
    heroTitle: 'A gestão de sua frota na Palma de sua mão!',
    heroDesc: 'A gestão de frotas é um dos serviços oferecidos pela Go Tracker, e consiste em monitorar e controlar a utilização de veículos em uma frota, permitindo uma visão completa e precisa do desempenho dos veículos, seus custos e sua utilização. Com a gestão de frotas da Go Tracker, é possível aumentar a eficiência e reduzir os custos de operação, além de melhorar a segurança dos veículos e seus motoristas.',
    heroImage: 'https://efmsitetlogbrs1storep.blob.core.windows.net/ticketlog/uploads/2020/03/frota-de-carros.jpg',
    benefits: [
      { icon: MapPin, title: 'Localização em tempo real de todos os veículos da frota.' },
      { icon: BarChart3, title: 'Relatórios detalhados de custos e manutenção.' },
      { icon: TrendingUp, title: 'Otimização do uso dos veículos e redução de ociosidade.' },
      { icon: Shield, title: 'Controle rigoroso de manutenções preventivas.' },
      { icon: Users, title: 'Gestão de comportamento e desempenho dos motoristas.' }
    ],
    complementaryImage: 'https://plus.unsplash.com/premium_photo-1661962667495-c9dd5c790758?fm=jpg&q=60&w=3000&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fGZyb3RhJTIwZGUlMjBjYXJyb3N8ZW58MHx8MHx8fDA%3D'
  },
  'telemetria-avancada': {
    title: 'Telemetria Avançada',
    heroTitle: 'A Telemetria Avançada pode ser a solução que a sua frota precisa.',
    heroDesc: 'A telemetria avançada é outro serviço oferecido pela Go Tracker, que permite o monitoramento em tempo real de diversos aspectos dos veículos, como consumo de combustível, velocidade, quilometragem e temperatura. Com a telemetria, é possível identificar problemas e falhas antes que eles se tornem grandes problemas, reduzir o consumo de combustível e aumentar a vida útil dos veículos.',
    heroImage: 'https://crearesistemas.com.br/wp-content/uploads/2025/04/salva-1-1024x503.webp',
    benefits: [
      { icon: Activity, title: 'Monitoramento detalhado de RPM e temperatura do motor.' },
      { icon: BarChart3, title: 'Análise precisa de consumo de combustível por trajeto.' },
      { icon: TrendingUp, title: 'Identificação de padrões de condução ineficientes.' },
      { icon: Zap, title: 'Alertas em tempo real de falhas mecânicas ou elétricas.' },
      { icon: Clock, title: 'Controle exato de horas trabalhadas e tempo de motor ligado.' }
    ],
    complementaryImage: 'https://plus.unsplash.com/premium_photo-1661962667495-c9dd5c790758?fm=jpg&q=60&w=3000&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fGZyb3RhJTIwZGUlMjBjYXJyb3N8ZW58MHx8MHx8fDA%3D'
  },
  'otimizacao-rotas': {
    title: 'Otimização de Rotas',
    heroTitle: 'Rotas Inteligentes para uma Logística Imbatível',
    heroDesc: 'A otimização de rotas da Go Tracker utiliza algoritmos avançados para calcular os trajetos mais eficientes para sua frota. Considerando variáveis como tráfego, distância e janelas de entrega, nosso sistema garante que seus motoristas percorram o menor caminho no menor tempo possível, resultando em economia direta de combustível e maior satisfação dos seus clientes finais.',
    heroImage: 'https://estruturei.com.br/wp-content/uploads/2023/07/O-que-e-Otimizacao-de-Rotas-e-Como-Funciona-Atualizado-2023.jpg',
    benefits: [
      { icon: Navigation, title: 'Cálculo automático das rotas mais rápidas e econômicas.' },
      { icon: Clock, title: 'Redução drástica no tempo médio de entrega.' },
      { icon: BarChart3, title: 'Economia significativa de combustível e pneus.' },
      { icon: MapPin, title: 'Sequenciamento inteligente de paradas e coletas.' },
      { icon: TrendingUp, title: 'Aumento da capacidade de atendimento da frota.' }
    ],
    complementaryImage: 'https://plus.unsplash.com/premium_photo-1661962667495-c9dd5c790758?fm=jpg&q=60&w=3000&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fGZyb3RhJTIwZGUlMjBjYXJyb3N8ZW58MHx8MHx8fDA%3D'
  }
};

const complementarySolutions = [
  'Telemetria avançada',
  'Sensor de Fadiga',
  'Relatório de Velocidade',
  'Relatório de Histórico de Trajetos',
  'Localização em tempo real',
  'Controle de horário',
  'Bloqueio do veículo',
  'Definição de rotas',
  'Cerca virtual',
  'Cadastro de motorista',
  'Driver Behavior',
  'Gerenciamento de Manutenção dos Veículos'
];

export const ServiceDetail = () => {
  const { slug } = useParams();
  const data = slug ? serviceData[slug] : null;

  if (!data) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-zinc-100">
        <div className="text-center">
          <h1 className="text-4xl font-black text-[#2B3990] mb-4">Serviço não encontrado</h1>
          <Link to="/" className="text-[#F7941E] font-bold hover:underline">Voltar para a Home</Link>
        </div>
      </div>
    );
  }

  return (
    <div className="pt-20">
      {/* Page Header */}
      <div className="bg-gradient-to-r from-[#2B3990] to-[#8DC63F] py-16">
        <div className="max-w-7xl mx-auto px-4">
          <h1 className="text-4xl font-black text-white uppercase tracking-tight">
            {data.title}
          </h1>
        </div>
      </div>

      {/* Hero Content */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl font-black text-[#2B3990] mb-8 leading-tight">
                {data.heroTitle.split(' ').map((word, i) => (
                  <span key={i} className={word === 'Controle' || word === 'Total' || word === 'solução' || word === 'frota' ? 'text-[#2B3990]' : ''}>
                    {word === 'Controle' || word === 'Total' || word === 'solução' || word === 'frota' ? <strong className="text-[#2B3990]">{word} </strong> : word + ' '}
                  </span>
                ))}
              </h2>
              <p className="text-zinc-600 leading-relaxed text-lg">
                {data.heroDesc}
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="absolute -inset-4 border-2 border-[#2B3990] rounded-[2rem] -z-10"></div>
              <img 
                src={data.heroImage} 
                alt={data.title}
                className="w-full h-[400px] object-cover rounded-[2rem] shadow-2xl"
                referrerPolicy="no-referrer"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-24 bg-zinc-100 relative overflow-hidden">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0 z-0 opacity-10 grayscale">
          <img 
            src="https://images.unsplash.com/photo-1586339949916-3e9457bef6d3?auto=format&fit=crop&q=80&w=1920" 
            alt="Background"
            className="w-full h-full object-cover"
            referrerPolicy="no-referrer"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-r from-[#2B3990]/10 to-[#8DC63F]/10 z-0"></div>

        <div className="relative z-10 max-w-7xl mx-auto px-4">
          <h2 className="text-4xl font-black text-[#2B3990] text-center mb-16 uppercase">
            Benefícios do Rastreio Online
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-8">
            {data.benefits.map((benefit: any, i: number) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="text-center"
              >
                <div className="w-16 h-16 bg-[#8DC63F] rounded-full flex items-center justify-center mx-auto mb-6 text-white shadow-lg">
                  <benefit.icon size={32} />
                </div>
                <p className="text-zinc-700 font-medium text-sm leading-relaxed">
                  {benefit.title.split(' ').map((word: string, j: number) => (
                    <span key={j} className={word === 'localização' || word === 'Reduza' || word === 'gastos' || word === 'Aumento' || word === 'produtividade' || word === 'cercas' || word === 'virtuais' || word === 'excesso' || word === 'velocidade' ? 'font-black text-zinc-900' : ''}>
                      {word + ' '}
                    </span>
                  ))}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Complementary Solutions */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="relative order-2 lg:order-1"
            >
              <div className="absolute -inset-4 border-2 border-[#2B3990] rounded-[2rem] -z-10"></div>
              <img 
                src={data.complementaryImage} 
                alt="Complementary Solutions"
                className="w-full h-[500px] object-cover rounded-[2rem] shadow-2xl"
                referrerPolicy="no-referrer"
              />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="order-1 lg:order-2"
            >
              <h2 className="text-4xl font-black text-[#2B3990] mb-8 uppercase">Soluções Complementares</h2>
              <p className="text-zinc-600 mb-8 text-lg">
                Além da Gestão de Frotas você terá acesso a mais de 15 soluções para aumentar a economia e eficiência de seu negócio.
              </p>
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-y-3 gap-x-8">
                {complementarySolutions.map((item, i) => (
                  <li key={i} className="flex items-center gap-3 text-zinc-700 font-medium">
                    <Check size={18} className="text-[#8DC63F]" strokeWidth={3} />
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <ContactForm />
    </div>
  );
};

import React from 'react';

const stats = [
  {
    value: '5 mil+',
    shortValue: '5k+',
    label: 'Veículos rastreados',
  },
  {
    value: '98%',
    shortValue: '98%',
    label: 'Taxa de recuperação',
  },
  {
    value: '24 horas por dia, 7 dias por semana',
    shortValue: '24/7',
    label: 'Monitoramento Ativo',
  },
  {
    value: '15 anos ou mais',
    shortValue: '500+',
    label: 'Clientes atendidas',
  },
];

export const Stats = () => (
  <section
    aria-labelledby="stats-title"
    className="relative z-10 bg-[#1e3a8a] py-20 text-white"
  >
    <div className="mx-auto max-w-7xl px-4">
      <header className="mb-12 text-center">
        <h2 id="stats-title" className="text-3xl font-black md:text-4xl">
          Resultados em rastreamento veicular e gestão de frotas
        </h2>
        <p className="mx-auto mt-4 max-w-3xl text-sm leading-relaxed text-white/80 md:text-base">
          Nossos indicadores mostram a eficiência das soluções de rastreamento,
          recuperação veicular, suporte técnico e experiência no mercado.
        </p>
      </header>

      <dl className="grid grid-cols-2 gap-12 text-center md:grid-cols-4">
        {stats.map((stat) => (
          <div key={stat.label}>
            <dt className="text-xs font-bold uppercase tracking-widest text-white/70">
              {stat.label}
            </dt>
            <dd
              className="mt-2 text-4xl font-black text-[#F7941E] md:text-5xl"
              aria-label={`${stat.label}: ${stat.value}`}
            >
              {stat.shortValue}
            </dd>
          </div>
        ))}
      </dl>
    </div>
  </section>
);
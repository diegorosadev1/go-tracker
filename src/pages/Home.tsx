import React from 'react';
import { Hero } from '../components/sections/Hero';
import { Solutions } from '../components/sections/Solutions';
import { WhyInvest } from '../components/sections/WhyInvest';
import { LightFleets } from '../components/sections/LightFleets';
import { Stats } from '../components/sections/Stats';
import { AppShowcase } from '../components/sections/AppShowcase';
import { Testimonials } from '../components/sections/Testimonials';
import { CTA } from '../components/sections/CTA';

export const Home = () => {
  return (
    <main>
      <Hero />
      <Solutions />
      <WhyInvest />
      <LightFleets />
      <Stats />
      <AppShowcase />
      <Testimonials />
      <CTA />
    </main>
  );
};

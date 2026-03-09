import React from 'react';
import { Hero } from '../components/Hero';
import { Solutions } from '../components/Solutions';
import { WhyInvest } from '../components/WhyInvest';
import { LightFleets } from '../components/LightFleets';
import { Stats } from '../components/Stats';
import { AppShowcase } from '../components/AppShowcase';
import { Testimonials } from '../components/Testimonials';
import { CTA } from '../components/CTA';

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

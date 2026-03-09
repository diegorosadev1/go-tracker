/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { TopBar } from './components/TopBar';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { WhatsAppFloat } from './components/WhatsAppFloat';
import { ScrollToTop } from './components/ScrollToTop';
import { Home } from './pages/Home';
import { ServiceDetail } from './pages/ServiceDetail';

export default function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <Router>
      <ScrollToTop />
      <div className="min-h-screen bg-zinc-100 font-sans text-zinc-900 selection:bg-[#F7941E]/30 relative">
        {/* Subtle Background Pattern */}
        <div className="absolute inset-0 z-0 opacity-[0.03] pointer-events-none" style={{ backgroundImage: 'radial-gradient(#2B3990 1px, transparent 1px)', backgroundSize: '40px 40px' }}></div>
        
        <TopBar />
        
        <Header 
          scrolled={scrolled} 
          isMenuOpen={isMenuOpen} 
          setIsMenuOpen={setIsMenuOpen} 
        />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/servicos/:slug" element={<ServiceDetail />} />
        </Routes>

        <Footer />
        
        <WhatsAppFloat />
      </div>
    </Router>
  );
}

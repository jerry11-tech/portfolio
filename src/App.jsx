import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Education from './components/Education';
import Certifications from './components/Certifications';
import Contact from './components/Contact';
import Footer from './components/Footer';
import RecruiterView from './components/RecruiterView';
import CommandPalette from './components/CommandPalette';
import AIAssistant from './components/AIAssistant';

export default function App() {
  const [executiveMode, setExecutiveMode] = useState(false);
  const [paletteOpen, setPaletteOpen] = useState(false);

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 font-sans selection:bg-blue-600 selection:text-white relative">
      
      {/* Formal Executive Header Navigation */}
      <Navbar
        onOpenExecutive={() => setExecutiveMode(true)}
        onOpenPalette={() => setPaletteOpen(true)}
      />

      {/* Main Portfolio Sections */}
      <main className="relative z-10">
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Education />
        <Certifications />
        <Contact />
      </main>

      {/* Formal Footer */}
      <Footer />

      {/* Interactive AI Assistant */}
      <AIAssistant />

      {/* Executive Summary Modal */}
      {executiveMode && (
        <RecruiterView onClose={() => setExecutiveMode(false)} />
      )}

      {/* Command Search Palette (Ctrl+K) */}
      <CommandPalette
        isOpen={paletteOpen}
        onClose={() => setPaletteOpen(false)}
        onOpenRecruiter={() => setExecutiveMode(true)}
        onOpenStudio={() => {}}
      />

    </div>
  );
}

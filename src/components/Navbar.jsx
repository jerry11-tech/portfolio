import React, { useState, useEffect } from 'react';
import { Menu, X, Download, FileText, Search } from 'lucide-react';

export default function Navbar({ onOpenExecutive, onOpenPalette }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Education', href: '#education' },
    { name: 'Certifications', href: '#certifications' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        isScrolled
          ? 'bg-white/90 backdrop-blur-md border-b border-slate-200 shadow-xs py-3.5 text-slate-900'
          : 'bg-white/70 backdrop-blur-xs py-5 text-slate-900 border-b border-slate-100'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          
          {/* Brand Logo */}
          <a href="#" className="flex items-center gap-3 group">
            <div className="w-9 h-9 rounded-lg bg-blue-700 flex items-center justify-center text-white font-bold text-sm tracking-wide shadow-xs">
              DN
            </div>
            <div className="flex flex-col text-left">
              <span className="font-bold text-slate-900 text-base leading-tight tracking-tight">
                Dhiraj Nimje
              </span>
              <span className="text-[11px] font-medium text-slate-500">
                AI & Machine Learning Engineer
              </span>
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-1 bg-slate-100/80 px-3 py-1.5 rounded-full border border-slate-200/80">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="px-3.5 py-1.5 text-xs font-semibold text-slate-600 hover:text-slate-900 hover:bg-white rounded-full transition-all"
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* Action Buttons */}
          <div className="hidden sm:flex items-center gap-2.5">
            
            {/* Quick Search */}
            <button
              onClick={onOpenPalette}
              className="px-3 py-2 rounded-lg bg-slate-100 hover:bg-slate-200/80 text-slate-600 border border-slate-200 transition-colors flex items-center gap-1.5 text-xs font-medium cursor-pointer"
              title="Search Portfolio (Ctrl+K)"
            >
              <Search className="w-3.5 h-3.5 text-slate-500" />
              <span className="hidden md:inline-block">Search (⌘K)</span>
            </button>

            {/* Executive Summary Button */}
            <button
              onClick={onOpenExecutive}
              className="px-3.5 py-2 rounded-lg bg-slate-900 hover:bg-slate-800 text-white font-semibold text-xs border border-slate-800 transition-all flex items-center gap-1.5 cursor-pointer shadow-xs"
            >
              <FileText className="w-3.5 h-3.5 text-blue-400" />
              <span>Executive Summary</span>
            </button>

            {/* Resume PDF */}
            <a
              href="./Nimje_Dhiraj_Resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-4 py-2 rounded-lg bg-blue-700 hover:bg-blue-800 text-white font-semibold text-xs shadow-xs transition-colors"
            >
              <Download className="w-3.5 h-3.5" />
              <span>Resume (PDF)</span>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 rounded-lg text-slate-700 hover:bg-slate-100 transition-colors"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation Dropdown */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-white border-b border-slate-200 px-4 pt-3 pb-6 space-y-3 shadow-xl text-left">
          <div className="grid grid-cols-2 gap-2 pb-2">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenExecutive();
              }}
              className="p-2.5 rounded-lg bg-slate-900 text-white font-semibold text-xs flex items-center justify-center gap-1.5"
            >
              <FileText className="w-3.5 h-3.5 text-blue-400" />
              <span>Executive Summary</span>
            </button>

            <a
              href="./Nimje_Dhiraj_Resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 rounded-lg bg-blue-700 text-white font-semibold text-xs flex items-center justify-center gap-1.5"
            >
              <Download className="w-3.5 h-3.5" />
              <span>Resume PDF</span>
            </a>
          </div>

          <div className="space-y-1">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="block px-3 py-2 rounded-md text-sm font-medium text-slate-700 hover:bg-slate-50 transition-colors"
              >
                {link.name}
              </a>
            ))}
          </div>
        </div>
      )}
    </header>
  );
}

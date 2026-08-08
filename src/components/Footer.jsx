import React from 'react';
import { Mail, Heart, ArrowUp } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './Icons';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-slate-900 text-slate-400 py-12 border-t border-slate-800 text-left">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center pb-8 border-b border-slate-800">
          
          {/* Logo & Info */}
          <div className="md:col-span-6 space-y-2">
            <div className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-lg bg-blue-600 flex items-center justify-center text-white font-bold text-sm">
                DN
              </div>
              <span className="font-bold text-white text-lg tracking-tight">Dhiraj Nimje</span>
            </div>
            <p className="text-xs text-slate-400 max-w-sm leading-relaxed">
              AI Engineer & Computer Vision Developer. MCA Candidate at K. J. Somaiya Institute of Management.
            </p>
          </div>

          {/* Social Links */}
          <div className="md:col-span-6 flex items-center justify-start md:justify-end gap-3">
            <a
              href="https://github.com/jerry11-tech"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 rounded-xl bg-slate-800 text-slate-300 hover:text-white hover:bg-slate-700 transition-colors"
              title="GitHub"
            >
              <GithubIcon className="w-5 h-5" />
            </a>
            <a
              href="https://www.linkedin.com/in/dhiraj-nimje-bb822139b"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 rounded-xl bg-slate-800 text-slate-300 hover:text-white hover:bg-slate-700 transition-colors"
              title="LinkedIn"
            >
              <LinkedinIcon className="w-5 h-5" />
            </a>
            <a
              href="mailto:dhirajnimje@somaiya.edu"
              className="p-2.5 rounded-xl bg-slate-800 text-slate-300 hover:text-white hover:bg-slate-700 transition-colors"
              title="Email"
            >
              <Mail className="w-5 h-5" />
            </a>

            <button
              onClick={scrollToTop}
              className="p-2.5 rounded-xl bg-blue-600 hover:bg-blue-500 text-white transition-colors ml-2"
              title="Scroll to Top"
            >
              <ArrowUp className="w-5 h-5" />
            </button>
          </div>

        </div>

        {/* Bottom copyright line */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-500 gap-4">
          <p>© {new Date().getFullYear()} Dhiraj Nimje. All rights reserved.</p>
          <p className="flex items-center gap-1">
            Built with React 18, Vite & Tailwind CSS
          </p>
        </div>
      </div>
    </footer>
  );
}

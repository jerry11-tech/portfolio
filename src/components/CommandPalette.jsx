import React, { useState, useEffect } from 'react';
import { Search, Zap, Laptop, Bot, FileText, FolderGit2, X, Terminal, ArrowRight } from 'lucide-react';

export default function CommandPalette({ isOpen, onClose, onOpenRecruiter, onOpenStudio }) {
  const [query, setQuery] = useState('');

  useEffect(() => {
    const handleKeyDown = (e) => {
      if ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === 'k') {
        e.preventDefault();
        if (isOpen) onClose();
        else {
          // Open palette
        }
      }
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const actions = [
    {
      id: 'recruiter',
      title: '⚡ Activate Recruiter Executive Mode (30s Overview)',
      category: 'Shortcut',
      action: () => {
        onClose();
        onOpenRecruiter();
      },
    },
    {
      id: 'studio',
      title: '💻 Open Interactive Dev Workstation',
      category: 'Room',
      action: () => {
        onClose();
        onOpenStudio();
      },
    },
    {
      id: 'resume',
      title: '📄 Download Official Resume PDF',
      category: 'Action',
      action: () => {
        window.open('./Nimje_Dhiraj_Resume.pdf', '_blank');
        onClose();
      },
    },
    {
      id: 'prakriti',
      title: '🌿 PrakritiAI — Ayurvedic Neural Network App',
      category: 'Project',
      action: () => {
        window.open('https://jerry11-tech.github.io/prakritiai/', '_blank');
        onClose();
      },
    },
    {
      id: 'legalsathi',
      title: '⚖️ LegalSathi AI — Multilingual Legal Chatbot',
      category: 'Project',
      action: () => {
        window.open('https://github.com/jerry11-tech/legal-sathi-ai', '_blank');
        onClose();
      },
    },
    {
      id: 'github',
      title: '🌐 GitHub Profile (@jerry11-tech)',
      category: 'External',
      action: () => {
        window.open('https://github.com/jerry11-tech', '_blank');
        onClose();
      },
    },
  ];

  const filtered = actions.filter((a) =>
    a.title.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <div className="fixed inset-0 z-50 bg-slate-950/80 backdrop-blur-sm flex items-start justify-center pt-20 px-4 animate-in fade-in">
      <div className="max-w-xl w-full bg-slate-900 border border-slate-800 rounded-2xl shadow-2xl overflow-hidden text-left text-white">
        
        {/* Search Header */}
        <div className="p-4 border-b border-slate-800 flex items-center gap-3">
          <Search className="w-5 h-5 text-slate-400 shrink-0" />
          <input
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Type a command or search (e.g. Recruiter, Resume, PrakritiAI)..."
            autoFocus
            className="w-full bg-transparent text-sm text-slate-100 placeholder-slate-500 outline-none font-sans"
          />
          <button onClick={onClose} className="p-1 rounded-md text-slate-500 hover:text-white">
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Results List */}
        <div className="p-2 max-h-80 overflow-y-auto space-y-1">
          {filtered.length === 0 ? (
            <div className="p-4 text-center text-xs text-slate-500">No matching commands found.</div>
          ) : (
            filtered.map((item) => (
              <button
                key={item.id}
                onClick={item.action}
                className="w-full p-3 rounded-xl hover:bg-blue-600/20 hover:border-blue-500/50 border border-transparent flex items-center justify-between group transition-colors text-xs font-semibold cursor-pointer"
              >
                <div className="flex items-center gap-3 text-slate-200 group-hover:text-white">
                  <span>{item.title}</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-[10px] uppercase font-mono px-2 py-0.5 rounded bg-slate-800 text-slate-400">{item.category}</span>
                  <ArrowRight className="w-3.5 h-3.5 text-slate-500 group-hover:text-blue-400 group-hover:translate-x-0.5 transition-transform" />
                </div>
              </button>
            ))
          )}
        </div>

        {/* Footer shortcuts */}
        <div className="p-3 bg-slate-950 border-t border-slate-800 flex items-center justify-between text-[11px] text-slate-500 font-mono">
          <span>Navigation: Use mouse or keyboard</span>
          <span>ESC to close</span>
        </div>

      </div>
    </div>
  );
}

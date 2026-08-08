import React, { useState } from 'react';
import { Laptop, Coffee, Keyboard, Monitor, StickyNote, BookOpen, X, Sparkles, Code2, ExternalLink } from 'lucide-react';
import { GithubIcon } from './Icons';

export default function DevStudioModal({ onClose }) {
  const [activeTab, setActiveTab] = useState('workstation');
  const [activeItem, setActiveItem] = useState('laptop');

  const items = {
    laptop: {
      title: "💻 Developer Laptop — Production Projects",
      icon: Laptop,
      color: "text-blue-500",
      content: (
        <div className="space-y-4">
          <p className="text-slate-300 text-sm">
            Primary workstation machine running Linux / macOS dev environments, Python 3.12, Node.js 20, PyTorch, and Docker containers.
          </p>
          <div className="p-4 rounded-xl bg-slate-900 border border-slate-800 space-y-2 text-xs font-mono">
            <div className="text-emerald-400">$ git status --short</div>
            <div className="text-slate-400">M src/ml/DoshaNet.ts</div>
            <div className="text-slate-400">M backend/api/routers/rag.py</div>
            <div className="text-blue-400">?? tests/test_accuracy.py</div>
          </div>
          <div className="pt-2 flex gap-3">
            <a href="#projects" onClick={onClose} className="px-4 py-2 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-bold text-xs transition-colors">
              Browse Active Projects
            </a>
          </div>
        </div>
      ),
    },
    coffee: {
      title: "☕ Coffee Mug — Fun Facts & Developer Rituals",
      icon: Coffee,
      color: "text-amber-500",
      content: (
        <div className="space-y-3 text-sm text-slate-300">
          <p>⚡ Powered by ~3 cups of dark roast coffee per research sprint.</p>
          <p>🧠 Solved the DoshaNet in-browser weight quantization bug at 2:00 AM.</p>
          <p>🎾 Plays competitive badminton when taking breaks from matrix algebra.</p>
          <p>🌐 Speaks English, Marathi, and Hindi fluently.</p>
        </div>
      ),
    },
    notebook: {
      title: "📓 Research Notebook — Learning Journey",
      icon: BookOpen,
      color: "text-emerald-500",
      content: (
        <div className="space-y-4">
          <div className="p-4 rounded-xl bg-slate-900 border border-slate-800 space-y-3 text-xs text-slate-300">
            <div className="flex justify-between font-bold text-emerald-400">
              <span>B.Sc. Mathematics (9.05 CGPA)</span>
              <span>2022 - 2024</span>
            </div>
            <p>Calculus, Linear Algebra, Probability Theory & Statistical Physics</p>

            <div className="flex justify-between font-bold text-blue-400 pt-2 border-t border-slate-800">
              <span>MCA Specialization (7.34 CGPA)</span>
              <span>Exp. Mar 2026</span>
            </div>
            <p>Deep Learning, Computer Vision (CNN), RAG Pipelines & Web Architecture</p>
          </div>
        </div>
      ),
    },
    monitor: {
      title: "🖥️ Dual Monitors — GitHub & Code Repos",
      icon: Monitor,
      color: "text-indigo-500",
      content: (
        <div className="space-y-4 text-sm text-slate-300">
          <p>Active repositories managed under <strong className="text-white">jerry11-tech</strong> & <strong className="text-white">buildwithdhiraj-afk</strong>.</p>
          <div className="p-4 rounded-xl bg-slate-900 border border-slate-800 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <GithubIcon className="w-6 h-6 text-white" />
              <div>
                <div className="font-bold text-white text-xs">github.com/jerry11-tech</div>
                <div className="text-[10px] text-slate-400">PrakritiAI, LegalSathi AI, Computer Vision</div>
              </div>
            </div>
            <a href="https://github.com/jerry11-tech" target="_blank" rel="noopener noreferrer" className="p-2 rounded-lg bg-blue-600 text-white">
              <ExternalLink className="w-4 h-4" />
            </a>
          </div>
        </div>
      ),
    },
    keyboard: {
      title: "⌨️ Mechanical Keyboard — Shortcuts",
      icon: Keyboard,
      color: "text-rose-500",
      content: (
        <div className="space-y-3 text-xs text-slate-300">
          <div className="grid grid-cols-2 gap-2 font-mono">
            <div className="p-2.5 rounded bg-slate-900 border border-slate-800 flex justify-between">
              <span>Recruiter Summary</span>
              <span className="text-amber-400 font-bold">⚡ Button</span>
            </div>
            <div className="p-2.5 rounded bg-slate-900 border border-slate-800 flex justify-between">
              <span>Command Palette</span>
              <span className="text-blue-400 font-bold">Ctrl + K</span>
            </div>
            <div className="p-2.5 rounded bg-slate-900 border border-slate-800 flex justify-between">
              <span>AI Assistant</span>
              <span className="text-indigo-400 font-bold">Bot Icon</span>
            </div>
            <div className="p-2.5 rounded bg-slate-900 border border-slate-800 flex justify-between">
              <span>Download Resume</span>
              <span className="text-emerald-400 font-bold">Top PDF</span>
            </div>
          </div>
        </div>
      ),
    },
    sticky: {
      title: "📌 Sticky Notes — Current Focus",
      icon: StickyNote,
      color: "text-yellow-400",
      content: (
        <div className="p-4 rounded-xl bg-amber-400/10 border border-amber-400/30 text-amber-200 text-xs space-y-2 font-mono">
          <div>[ ] Fine-tune LLaMA 3 embeddings for legal domain</div>
          <div>[x] Quantize DoshaNet weights to &lt; 500KB</div>
          <div>[ ] Benchmark TensorRT inference speedup</div>
          <div>[x] Finalize MCA Degree Capstone Architecture</div>
        </div>
      ),
    },
  };

  return (
    <div className="fixed inset-0 z-50 bg-slate-950/85 backdrop-blur-md overflow-y-auto p-4 sm:p-6 flex items-center justify-center animate-in fade-in">
      <div className="max-w-4xl w-full bg-slate-900 rounded-3xl border border-slate-800 shadow-2xl overflow-hidden text-left text-white my-auto">
        
        {/* Modal Header */}
        <div className="p-6 bg-slate-950 border-b border-slate-800 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-blue-600/20 border border-blue-500/30 flex items-center justify-center text-blue-400">
              <Laptop className="w-5 h-5" />
            </div>
            <div>
              <h3 className="font-bold text-lg text-white">DHIRAJ'S DEV WORKSTATION</h3>
              <p className="text-xs text-slate-400">Click desk objects to inspect developer tools & rituals</p>
            </div>
          </div>

          <button onClick={onClose} className="p-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-300 transition-colors">
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Workstation Interactive Layout */}
        <div className="p-6 sm:p-8 space-y-8">
          
          {/* Desk Items Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-3">
            {Object.entries(items).map(([key, item]) => {
              const Icon = item.icon;
              const isSelected = activeItem === key;
              return (
                <button
                  key={key}
                  onClick={() => setActiveItem(key)}
                  className={`p-4 rounded-2xl border transition-all flex flex-col items-center gap-2 cursor-pointer ${
                    isSelected
                      ? 'bg-blue-600/20 border-blue-500 shadow-lg shadow-blue-500/10 scale-105'
                      : 'bg-slate-950 border-slate-800 hover:border-slate-700 opacity-80 hover:opacity-100'
                  }`}
                >
                  <Icon className={`w-6 h-6 ${item.color}`} />
                  <span className="text-[11px] font-bold tracking-tight text-center capitalize">{key}</span>
                </button>
              );
            })}
          </div>

          {/* Active Item Detail Panel */}
          <div className="p-6 rounded-2xl bg-slate-950 border border-slate-800 space-y-4">
            <h4 className="font-bold text-base text-white border-b border-slate-800 pb-3 flex items-center gap-2">
              <Sparkles className="w-4 h-4 text-blue-400" />
              <span>{items[activeItem].title}</span>
            </h4>

            {items[activeItem].content}
          </div>

        </div>

      </div>
    </div>
  );
}

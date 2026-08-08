import React, { useState, useEffect } from 'react';
import { Terminal, Shield, Zap, FastForward } from 'lucide-react';

export default function BootSequence({ onComplete }) {
  const [lines, setLines] = useState([]);
  const [currentLineIndex, setCurrentLineIndex] = useState(0);
  const [isGlitching, setIsGlitching] = useState(false);

  const bootLogs = [
    "> Booting DHIRAJ.EXE_v4.2",
    "Initializing Neural Engine... [OK]",
    "Loading Computer Vision & CNN Models... [OK]",
    "Connecting RAG Knowledge Base... [OK]",
    "Compiling Experience & Projects... [OK]",
    "Mounting Digital Campus Headquarters...",
    "System Ready. Launching Interface..."
  ];

  useEffect(() => {
    if (currentLineIndex < bootLogs.length) {
      const timer = setTimeout(() => {
        setLines((prev) => [...prev, bootLogs[currentLineIndex]]);
        setCurrentLineIndex((prev) => prev + 1);
      }, 450);
      return () => clearTimeout(timer);
    } else {
      // Trigger glitch transition
      const glitchTimer = setTimeout(() => {
        setIsGlitching(true);
      }, 300);
      const finishTimer = setTimeout(() => {
        onComplete();
      }, 900);
      return () => {
        clearTimeout(glitchTimer);
        clearTimeout(finishTimer);
      };
    }
  }, [currentLineIndex, onComplete]);

  return (
    <div
      className={`fixed inset-0 z-50 bg-slate-950 text-emerald-400 font-mono flex flex-col justify-between p-6 sm:p-12 transition-all duration-500 ${
        isGlitching ? 'opacity-0 scale-105 filter blur-xs' : 'opacity-100'
      }`}
    >
      {/* Header bar */}
      <div className="flex items-center justify-between border-b border-emerald-900/50 pb-4 text-xs text-emerald-600">
        <div className="flex items-center gap-2">
          <Terminal className="w-4 h-4 text-emerald-400 animate-pulse" />
          <span className="font-bold tracking-wider text-emerald-400">DHIRAJ_OS // BOOT_SEQUENCE</span>
        </div>
        <div className="flex items-center gap-4">
          <span className="hidden sm:inline-block text-slate-500">SYSTEM ID: MCA_2026</span>
          <button
            onClick={onComplete}
            className="flex items-center gap-1.5 px-3 py-1 rounded bg-emerald-950 border border-emerald-800 text-emerald-300 hover:bg-emerald-900 text-xs font-sans transition-colors cursor-pointer"
          >
            <FastForward className="w-3.5 h-3.5" />
            <span>Skip Boot</span>
          </button>
        </div>
      </div>

      {/* Terminal Content Area */}
      <div className="max-w-3xl mx-auto w-full my-auto space-y-3 text-left">
        <div className="text-slate-500 text-xs mb-4">
          ******************************************************************<br />
          &nbsp; PROJECT ASCEND :: DHIRAJ NIMJE DIGITAL HEADQUARTERS<br />
          ******************************************************************
        </div>

        {lines.map((line, idx) => (
          <div key={idx} className="text-sm sm:text-base leading-relaxed flex items-center gap-2">
            <span className="text-blue-500 font-bold">&gt;</span>
            <span className={idx === lines.length - 1 ? 'text-emerald-300 font-semibold' : 'text-slate-300'}>
              {line}
            </span>
          </div>
        ))}

        {currentLineIndex < bootLogs.length && (
          <div className="inline-block w-2.5 h-5 bg-emerald-400 animate-ping ml-1" />
        )}
      </div>

      {/* Footer bar */}
      <div className="flex items-center justify-between border-t border-emerald-900/50 pt-4 text-xs text-slate-600">
        <div className="flex items-center gap-2">
          <Shield className="w-3.5 h-3.5 text-emerald-500" />
          <span>STATUS: INITIALIZING HIGH-PERFORMANCE EXPERIENCE</span>
        </div>
        <div className="text-slate-500">PRESS SPACE TO SKIP</div>
      </div>
    </div>
  );
}

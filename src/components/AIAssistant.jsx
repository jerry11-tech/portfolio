import React, { useState } from 'react';
import { Bot, X, Send, Sparkles, User, Brain, FileText, ChevronRight } from 'lucide-react';

export default function AIAssistant() {
  const [isOpen, setIsOpen] = useState(false);
  const [input, setInput] = useState('');
  const [messages, setMessages] = useState([
    {
      sender: 'ai',
      text: "Hello! I am Dhiraj's Neural Assistant 🤖. Ask me anything about his AI projects, technical skills, or academic background!"
    }
  ]);

  const quickPrompts = [
    "Who is Dhiraj?",
    "Show Computer Vision work",
    "Tell me about PrakritiAI",
    "Why should we hire Dhiraj?",
    "Download Resume"
  ];

  const handleQuery = (queryText) => {
    const text = queryText || input;
    if (!text.trim()) return;

    // Add user message
    const newMessages = [...messages, { sender: 'user', text }];
    setMessages(newMessages);
    setInput('');

    // Generate AI response
    setTimeout(() => {
      let response = "";
      const lower = text.toLowerCase();

      if (lower.includes("who is dhiraj") || lower.includes("about") || lower.includes("background")) {
        response = "Dhiraj Nimje is an AI Engineer and Computer Vision/NLP developer currently pursuing his Master of Computer Applications (MCA) at K. J. Somaiya Institute of Management (7.34 CGPA). He holds a B.Sc. in Mathematics from University of Mumbai (9.05 CGPA).";
      } else if (lower.includes("computer vision") || lower.includes("vision")) {
        response = "Dhiraj's Computer Vision work includes: 1) PrakritiAI — facial feature & skin tone diagnostic neural network running 100% in-browser (DoshaNet). 2) Real-Time Face Recognition — identity verification using NumPy and Pillow. 3) LabelIQ AI — food ingredient safety analysis via OCR.";
      } else if (lower.includes("prakritiai") || lower.includes("prakriti")) {
        response = "PrakritiAI is an Ayurvedic Prakruti detection platform powered by an in-browser neural network (DoshaNet). It analyzes facial images, classifies users into Vata/Pitta/Kapha doshas, and provides personalized health regimens with zero server latency. Live demo: https://jerry11-tech.github.io/prakritiai/";
      } else if (lower.includes("why") || lower.includes("hire") || lower.includes("interview")) {
        response = "Why hire Dhiraj? 1) Strong math foundation (9.05 CGPA) for deep understanding of machine learning algorithms. 2) End-to-end full-stack capabilities (Python, FastAPI, React, Next.js, RAG). 3) Proven track record building production-grade AI systems.";
      } else if (lower.includes("resume") || lower.includes("cv")) {
        response = "You can download Dhiraj's full resume PDF directly using the button in the header or by clicking 'Download Resume' above!";
      } else {
        response = `Thanks for asking! Dhiraj specializes in Python, Neural Networks (from scratch), Computer Vision (OpenCV), and RAG architectures (FastAPI/Next.js). Check out his GitHub repository at https://github.com/jerry11-tech!`;
      }

      setMessages((prev) => [...prev, { sender: 'ai', text: response }]);
    }, 400);
  };

  return (
    <>
      {/* Floating Launcher Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed bottom-6 right-6 z-40 p-4 rounded-2xl bg-gradient-to-r from-blue-600 to-indigo-600 text-white shadow-xl shadow-blue-600/30 hover:scale-105 transition-all flex items-center gap-2 font-semibold text-sm cursor-pointer border border-white/20"
      >
        <Bot className="w-5 h-5 animate-bounce" />
        <span className="hidden sm:inline-block">AI Assistant</span>
      </button>

      {/* Chat Window Popup */}
      {isOpen && (
        <div className="fixed bottom-24 right-6 z-50 w-full max-w-sm sm:max-w-md bg-slate-900 border border-slate-700/80 rounded-3xl shadow-2xl overflow-hidden flex flex-col text-left animate-in slide-in-from-bottom-4">
          
          {/* Assistant Header */}
          <div className="p-4 bg-gradient-to-r from-blue-900 to-indigo-950 border-b border-slate-700 flex items-center justify-between text-white">
            <div className="flex items-center gap-2.5">
              <div className="w-9 h-9 rounded-xl bg-blue-600/40 border border-blue-400/30 flex items-center justify-center text-blue-300">
                <Sparkles className="w-5 h-5" />
              </div>
              <div>
                <h4 className="font-bold text-sm leading-none">DHIRAJ_CORE // AI ASSISTANT</h4>
                <span className="text-[10px] text-emerald-400 flex items-center gap-1 mt-1">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" /> Online · Powered by Neural Net
                </span>
              </div>
            </div>
            <button onClick={() => setIsOpen(false)} className="p-1 rounded-lg text-slate-400 hover:text-white transition-colors">
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Quick Prompts Container */}
          <div className="p-3 bg-slate-950/60 border-b border-slate-800 flex gap-2 overflow-x-auto text-[11px] no-scrollbar">
            {quickPrompts.map((prompt, idx) => (
              <button
                key={idx}
                onClick={() => handleQuery(prompt)}
                className="px-2.5 py-1 rounded-full bg-slate-800 hover:bg-blue-600/30 border border-slate-700 text-slate-300 hover:text-white shrink-0 transition-colors"
              >
                {prompt}
              </button>
            ))}
          </div>

          {/* Messages Area */}
          <div className="p-4 space-y-3 h-72 overflow-y-auto font-sans text-xs bg-slate-950/80">
            {messages.map((m, idx) => (
              <div
                key={idx}
                className={`flex gap-2 ${m.sender === 'user' ? 'justify-end' : 'justify-start'}`}
              >
                {m.sender === 'ai' && (
                  <div className="w-6 h-6 rounded-full bg-blue-600 flex items-center justify-center text-white shrink-0 mt-0.5">
                    <Bot className="w-3.5 h-3.5" />
                  </div>
                )}
                <div
                  className={`p-3 rounded-2xl max-w-[85%] leading-relaxed ${
                    m.sender === 'user'
                      ? 'bg-blue-600 text-white rounded-br-none'
                      : 'bg-slate-800 border border-slate-700 text-slate-200 rounded-bl-none'
                  }`}
                >
                  {m.text}
                </div>
              </div>
            ))}
          </div>

          {/* Input Bar */}
          <form
            onSubmit={(e) => {
              e.preventDefault();
              handleQuery();
            }}
            className="p-3 bg-slate-900 border-t border-slate-800 flex gap-2"
          >
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Ask about Dhiraj's skills, CV work..."
              className="flex-1 px-3.5 py-2 rounded-xl bg-slate-800 border border-slate-700 text-slate-200 placeholder-slate-500 text-xs outline-none focus:border-blue-500"
            />
            <button
              type="submit"
              className="p-2 rounded-xl bg-blue-600 hover:bg-blue-500 text-white transition-colors"
            >
              <Send className="w-4 h-4" />
            </button>
          </form>

        </div>
      )}
    </>
  );
}

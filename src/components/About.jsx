import React from 'react';
import { User, Award, BookOpen, Target, Sparkles, CheckCircle2 } from 'lucide-react';

export default function About() {
  const highlights = [
    "Strong Mathematical background (9.05 CGPA in B.Sc. Mathematics) enabling deep understanding of ML algorithms & linear algebra.",
    "Specialized MCA training in Artificial Intelligence, Computer Vision, Deep Learning, and Natural Language Processing.",
    "Hands-on expertise deploying in-browser AI inference models (DoshaNet) and domain-specific Retrieval-Augmented Generation (RAG) platforms.",
    "Bilingual fluency in English, Hindi, and Marathi with strong problem-solving and analytical thinking skills."
  ];

  return (
    <section id="about" className="py-20 bg-white border-y border-slate-200/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 border border-blue-100 text-blue-700 text-xs font-semibold uppercase tracking-wider">
            <User className="w-3.5 h-3.5" />
            <span>About Me</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Bridging Mathematics & Modern Artificial Intelligence
          </h2>
          <p className="text-slate-600 text-base sm:text-lg">
            A passionate AI Engineer with solid mathematical foundations and proven experience building computer vision and NLP solutions.
          </p>
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Card Showcase Column */}
          <div className="lg:col-span-5 space-y-6">
            <div className="p-8 rounded-3xl bg-gradient-to-br from-blue-600 to-indigo-700 text-white shadow-xl shadow-blue-600/20 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-40 h-40 bg-white/10 rounded-full blur-2xl pointer-events-none" />
              
              <div className="relative z-10 space-y-6">
                <div className="w-14 h-14 rounded-2xl bg-white/20 backdrop-blur-md flex items-center justify-center text-white">
                  <Sparkles className="w-7 h-7" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold">Nimje Dhiraj Yeshwant</h3>
                  <p className="text-blue-100 font-medium text-sm mt-1">
                    AI Engineer & NLP Developer
                  </p>
                </div>
                <div className="pt-4 border-t border-white/20 grid grid-cols-2 gap-4 text-xs">
                  <div>
                    <span className="text-blue-200 block">MCA Expected</span>
                    <span className="font-bold text-sm text-white">March 2026</span>
                  </div>
                  <div>
                    <span className="text-blue-200 block">B.Sc. Math Score</span>
                    <span className="font-bold text-sm text-white">9.05 CGPA</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Quick Stat Pill Grid */}
            <div className="grid grid-cols-3 gap-4">
              <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200 text-center">
                <div className="text-2xl font-extrabold text-blue-600">9.05</div>
                <div className="text-xs font-medium text-slate-600 mt-1">B.Sc. CGPA</div>
              </div>
              <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200 text-center">
                <div className="text-2xl font-extrabold text-indigo-600">7.34</div>
                <div className="text-xs font-medium text-slate-600 mt-1">MCA CGPA</div>
              </div>
              <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200 text-center">
                <div className="text-2xl font-extrabold text-emerald-600">3+</div>
                <div className="text-xs font-medium text-slate-600 mt-1">Core Tech Languages</div>
              </div>
            </div>
          </div>

          {/* Description & List Column */}
          <div className="lg:col-span-7 space-y-6 text-left">
            <h3 className="text-2xl font-bold text-slate-900">
              Transforming Complex Algorithms into Real-World Software
            </h3>
            <p className="text-slate-600 leading-relaxed">
              My journey began with a Bachelor of Science in Mathematics from the University of Mumbai, where I developed strong analytical thinking and problem-solving skills. Currently pursuing my Master of Computer Applications (MCA) at K. J. Somaiya Institute of Management, I specialize in applying mathematical principles to Artificial Intelligence, Deep Learning, and Computer Vision.
            </p>

            {/* Bullet Highlights */}
            <div className="space-y-3 pt-2">
              {highlights.map((item, idx) => (
                <div key={idx} className="flex items-start gap-3 p-3.5 rounded-xl bg-slate-50 border border-slate-200/80 hover:bg-blue-50/50 transition-colors">
                  <CheckCircle2 className="w-5 h-5 text-blue-600 shrink-0 mt-0.5" />
                  <span className="text-slate-700 text-sm font-medium leading-normal">{item}</span>
                </div>
              ))}
            </div>

            {/* Personal Details Row */}
            <div className="pt-4 grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm">
              <div className="p-3.5 rounded-xl bg-white border border-slate-200">
                <span className="text-xs font-semibold text-slate-400 uppercase tracking-wider block">Languages</span>
                <span className="font-semibold text-slate-800">English, Marathi, Hindi</span>
              </div>
              <div className="p-3.5 rounded-xl bg-white border border-slate-200">
                <span className="text-xs font-semibold text-slate-400 uppercase tracking-wider block">Hobbies & Interests</span>
                <span className="font-semibold text-slate-800">Badminton, Traveling, AI Tech</span>
              </div>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}

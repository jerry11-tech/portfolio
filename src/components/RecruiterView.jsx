import React from 'react';
import { Zap, Download, ExternalLink, GraduationCap, Award, Mail, Phone, MapPin, CheckCircle2, Code2, Sparkles, X } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './Icons';

export default function RecruiterView({ onClose }) {
  const topProjects = [
    {
      title: "PrakritiAI — Ayurvedic Prakruti Detection System",
      badge: "In-Browser Neural Net",
      description: "FastAPI + React SPA running DoshaNet (custom neural net) directly in the browser to analyze facial features & recommend Ayurvedic regimens.",
      tags: ["Python", "Scikit-Learn", "Neural Net (from scratch)", "OpenCV", "FastAPI", "TypeScript"],
      github: "https://github.com/jerry11-tech/prakritiai",
      live: "https://jerry11-tech.github.io/prakritiai/",
    },
    {
      title: "LegalSathi AI — Multilingual Legal Guidance Platform",
      badge: "RAG & LLM Pipeline",
      description: "RAG architecture querying Indian Acts knowledge base with Gemini API + Sentence Transformers for multilingual legal guidance.",
      tags: ["Next.js 14", "FastAPI", "Python", "RAG", "PostgreSQL"],
      github: "https://github.com/jerry11-tech/legal-sathi-ai",
      live: "https://jerry11-tech.github.io/legal-sathi-ai/",
    },
    {
      title: "LabelIQ AI — Food Ingredient Analysis & Safety OCR",
      badge: "OCR + NLP",
      description: "Extracted food ingredients from packaging images via OCR, evaluating safety and detecting harmful additives with explainable AI.",
      tags: ["Python", "OCR", "NLP", "OpenCV", "FastAPI"],
      github: "https://github.com/jerry11-tech",
      live: null,
    },
    {
      title: "Real-Time Face Recognition System",
      badge: "Computer Vision",
      description: "Facial feature detection and identity verification pipeline built with NumPy and Pillow for real-time analysis.",
      tags: ["Python", "NumPy", "Pillow", "Computer Vision"],
      github: "https://github.com/jerry11-tech",
      live: null,
    },
  ];

  return (
    <div className="fixed inset-0 z-50 bg-slate-950/80 backdrop-blur-md overflow-y-auto p-4 sm:p-6 lg:p-8 animate-in fade-in">
      <div className="max-w-5xl mx-auto bg-white rounded-3xl border border-slate-200 shadow-2xl overflow-hidden my-6 text-left">
        
        {/* Top Executive Header Banner */}
        <div className="bg-gradient-to-r from-slate-900 via-blue-950 to-indigo-950 text-white p-6 sm:p-8 relative">
          <button
            onClick={onClose}
            className="absolute top-6 right-6 p-2 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors cursor-pointer"
            title="Close Recruiter Mode"
          >
            <X className="w-5 h-5" />
          </button>

          <div className="flex flex-wrap items-center gap-3 mb-3">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-400/20 border border-amber-400/40 text-amber-300 text-xs font-bold uppercase tracking-wider">
              <Zap className="w-3.5 h-3.5 fill-amber-300" />
              <span>Recruiter Executive Summary (30s Overview)</span>
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-end">
            <div className="md:col-span-8 space-y-2">
              <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight">Nimje Dhiraj Yeshwant</h1>
              <p className="text-blue-300 text-lg font-medium">AI Engineer | Computer Vision & NLP Developer</p>
              <p className="text-slate-300 text-xs sm:text-sm leading-relaxed max-w-xl">
                MCA student at K. J. Somaiya Institute of Management (9.29 CGPA, expected 2027) with B.Sc. Mathematics (73.13%). Specialized in Neural Networks, Computer Vision, and RAG systems.
              </p>
            </div>

            <div className="md:col-span-4 flex flex-col items-start md:items-end gap-3">
              <a
                href="./Nimje_Dhiraj_Resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-bold text-xs shadow-lg transition-all"
              >
                <Download className="w-4 h-4" />
                <span>Download Resume (PDF)</span>
              </a>
              <div className="flex items-center gap-3 text-xs text-slate-300">
                <span className="flex items-center gap-1"><MapPin className="w-3.5 h-3.5 text-rose-400" /> Kalyan, India</span>
                <span className="flex items-center gap-1"><GraduationCap className="w-3.5 h-3.5 text-blue-400" /> Exp. Mar 2026</span>
              </div>
            </div>
          </div>
        </div>

        {/* Quick Highlights Bar */}
        <div className="bg-slate-100 p-4 px-6 sm:px-8 border-b border-slate-200 grid grid-cols-2 sm:grid-cols-4 gap-4 text-xs font-semibold text-slate-700">
          <div>🎓 MCA Score: <span className="text-blue-700 font-bold">7.34 CGPA</span></div>
          <div>📐 B.Sc. Math Score: <span className="text-indigo-700 font-bold">9.05 CGPA</span></div>
          <div>💻 GitHub: <a href="https://github.com/jerry11-tech" target="_blank" rel="noopener noreferrer" className="text-blue-600 underline">jerry11-tech</a></div>
          <div>💼 LinkedIn: <a href="https://www.linkedin.com/in/dhiraj-nimje-bb822139b" target="_blank" rel="noopener noreferrer" className="text-blue-600 underline">dhiraj-nimje</a></div>
        </div>

        <div className="p-6 sm:p-8 space-y-8">
          
          {/* Key Skill Matrix */}
          <div>
            <h3 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-3">Core Technical Skills</h3>
            <div className="flex flex-wrap gap-2">
              {["Python", "Scikit-Learn", "Neural Net (from scratch)", "OpenCV", "NLP", "RAG Pipelines", "FastAPI", "React 18", "Next.js", "TypeScript", "MySQL", "PostgreSQL", "Git"].map((skill, idx) => (
                <span key={idx} className="px-3 py-1.5 rounded-lg bg-slate-100 border border-slate-200 text-slate-800 text-xs font-semibold">
                  {skill}
                </span>
              ))}
            </div>
          </div>

          {/* Top Projects */}
          <div>
            <h3 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-4">Core Portfolio Projects</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {topProjects.map((p, idx) => (
                <div key={idx} className="p-5 rounded-2xl bg-slate-50 border border-slate-200 flex flex-col justify-between hover:border-blue-300 transition-colors">
                  <div className="space-y-2">
                    <div className="flex items-center justify-between">
                      <span className="text-xs font-bold uppercase px-2.5 py-0.5 rounded bg-blue-100 text-blue-800">{p.badge}</span>
                      <div className="flex items-center gap-2">
                        {p.live && (
                          <a href={p.live} target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800" title="Live Web Demo">
                            <ExternalLink className="w-4 h-4" />
                          </a>
                        )}
                        <a href={p.github} target="_blank" rel="noopener noreferrer" className="text-slate-500 hover:text-slate-900" title="GitHub">
                          <GithubIcon className="w-4 h-4" />
                        </a>
                      </div>
                    </div>
                    <h4 className="font-bold text-slate-900 text-base">{p.title}</h4>
                    <p className="text-slate-600 text-xs leading-relaxed">{p.description}</p>
                  </div>
                  <div className="flex flex-wrap gap-1.5 pt-3 mt-3 border-t border-slate-200/60">
                    {p.tags.map((t, tIdx) => (
                      <span key={tIdx} className="text-[10px] font-semibold px-2 py-0.5 rounded bg-white border border-slate-200 text-slate-600">{t}</span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Certifications & Education */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200 space-y-2">
              <h4 className="font-bold text-slate-900 text-sm flex items-center gap-2">
                <Award className="w-4 h-4 text-emerald-600" />
                <span>Verified Certifications</span>
              </h4>
              <ul className="space-y-1.5 text-xs text-slate-700">
                <li className="flex items-center justify-between">
                  <span>IBM — Supervised Machine Learning</span>
                  <span className="font-bold text-slate-500">Classification</span>
                </li>
                <li className="flex items-center justify-between">
                  <span>Univ. of Colorado Boulder</span>
                  <span className="font-bold text-slate-500">Algorithms & Indexing</span>
                </li>
              </ul>
            </div>

            <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200 space-y-2">
              <h4 className="font-bold text-slate-900 text-sm flex items-center gap-2">
                <Mail className="w-4 h-4 text-blue-600" />
                <span>Direct Contact</span>
              </h4>
              <div className="space-y-1 text-xs text-slate-700">
                <p>Email: <a href="mailto:dhirajnimje@somaiya.edu" className="text-blue-600 font-semibold">dhirajnimje@somaiya.edu</a></p>
                <p>Phone: <a href="tel:+918454958714" className="text-blue-600 font-semibold">+91 8454958714</a></p>
              </div>
            </div>
          </div>

        </div>

        {/* Recruiter Action Footer */}
        <div className="p-4 px-8 bg-slate-900 text-white flex flex-wrap items-center justify-between text-xs gap-4">
          <span>Ready for Interview / AI Engineering Roles</span>
          <div className="flex items-center gap-3">
            <a href="mailto:dhirajnimje@somaiya.edu" className="px-4 py-2 rounded-lg bg-blue-600 hover:bg-blue-500 font-bold transition-colors">
              Schedule Interview
            </a>
            <button onClick={onClose} className="px-4 py-2 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-300 font-bold transition-colors">
              Return to Interactive Campus
            </button>
          </div>
        </div>

      </div>
    </div>
  );
}

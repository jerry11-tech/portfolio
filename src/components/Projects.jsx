import React from 'react';
import { FolderGit2, ExternalLink, Sparkles, Scale, Activity, Brain } from 'lucide-react';
import { GithubIcon } from './Icons';

export default function Projects() {
  const projects = [
    {
      id: "prakritiai",
      title: "PrakritiAI — Ayurvedic Prakruti Detection System",
      badge: "In-Browser Neural Net",
      icon: Activity,
      color: "from-emerald-500 to-teal-600",
      description: "An AI-driven Ayurvedic facial analysis and recommendation platform. Uses computer vision and a custom trained neural network (DoshaNet) running directly in the browser to analyze facial features, classify users into Vata/Pitta/Kapha doshas, and generate personalized Ayurvedic health & diet advice.",
      features: [
        "In-browser neural net inference (DoshaNet) with zero backend dependency",
        "Computer Vision facial feature & skin tone diagnostic pipeline",
        "Minified 422KB bundle optimized for fast load & offline execution",
        "Personalized Ayurvedic wellness & dietary recommendation engine"
      ],
      tags: ["Python", "TensorFlow", "OpenCV", "FastAPI", "CNN", "React 18", "TypeScript", "Tailwind CSS"],
      github: "https://github.com/jerry11-tech/prakritiai",
      live: "https://jerry11-tech.github.io/prakritiai/",
    },
    {
      id: "legalsathi",
      title: "LegalSathi AI — Multilingual Legal Guidance Platform",
      badge: "RAG & LLM Pipeline",
      icon: Scale,
      color: "from-blue-600 to-indigo-600",
      description: "An AI-powered legal guidance system tailored for Indian law. Features a Retrieval-Augmented Generation (RAG) pipeline querying an Indian acts and sections knowledge base to answer complex legal questions, explain rights, and assist with document navigation.",
      features: [
        "Multilingual RAG pipeline (Gemini API + Sentence Transformers)",
        "Knowledge base covering Indian Acts, Sections, and Case Laws",
        "Next.js 14 frontend + FastAPI backend architecture with JWT auth",
        "Interactive Legal Document Navigator & guest chat query limits"
      ],
      tags: ["Next.js 14", "FastAPI", "Python 3.12", "RAG", "Gemini API", "PostgreSQL", "TypeScript", "Tailwind CSS"],
      github: "https://github.com/jerry11-tech/legal-sathi-ai",
      live: "https://jerry11-tech.github.io/legal-sathi-ai/",
    },
  ];

  return (
    <section id="projects" className="py-20 bg-white border-y border-slate-200/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 border border-blue-100 text-blue-700 text-xs font-semibold uppercase tracking-wider">
            <FolderGit2 className="w-3.5 h-3.5" />
            <span>Featured Portfolio Projects</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            AI & Machine Learning Solutions
          </h2>
          <p className="text-slate-600 text-base sm:text-lg">
            Production-ready AI projects built with Computer Vision, Deep Learning, and Retrieval-Augmented Generation (RAG).
          </p>
        </div>

        {/* Projects List */}
        <div className="space-y-12">
          {projects.map((project, idx) => {
            const Icon = project.icon;
            return (
              <div
                key={project.id}
                className="p-8 sm:p-10 rounded-3xl bg-slate-50/80 border border-slate-200 shadow-xs hover:shadow-lg transition-all text-left relative overflow-hidden group"
              >
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
                  
                  {/* Info Column */}
                  <div className="lg:col-span-8 space-y-5">
                    
                    {/* Badge & Title */}
                    <div className="flex flex-wrap items-center gap-3">
                      <div className={`w-10 h-10 rounded-xl bg-gradient-to-tr ${project.color} flex items-center justify-center text-white shadow-md`}>
                        <Icon className="w-5 h-5" />
                      </div>
                      <span className="px-3 py-1 rounded-full bg-blue-100/80 border border-blue-200 text-blue-800 text-xs font-bold uppercase tracking-wider">
                        {project.badge}
                      </span>
                    </div>

                    <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900 leading-tight">
                      {project.title}
                    </h3>

                    <p className="text-slate-600 text-base leading-relaxed">
                      {project.description}
                    </p>

                    {/* Features List */}
                    <div className="space-y-2 pt-2">
                      <span className="text-xs font-semibold uppercase tracking-wider text-slate-500 block">Key Features & Architecture:</span>
                      <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs font-medium text-slate-700">
                        {project.features.map((feat, fIdx) => (
                          <li key={fIdx} className="flex items-center gap-2">
                            <span className="w-1.5 h-1.5 rounded-full bg-blue-600 shrink-0" />
                            <span>{feat}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Tech Tags */}
                    <div className="flex flex-wrap gap-2 pt-3">
                      {project.tags.map((tag, tIdx) => (
                        <span
                          key={tIdx}
                          className="px-2.5 py-1 rounded-md bg-white border border-slate-200 text-slate-700 text-xs font-semibold shadow-xs"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Actions Column */}
                  <div className="lg:col-span-4 flex flex-col sm:flex-row lg:flex-col gap-3 justify-center items-stretch lg:items-end lg:h-full lg:pt-4">
                    {project.live && (
                      <a
                        href={project.live}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-semibold text-sm shadow-md shadow-blue-600/20 transition-all hover:scale-[1.02] active:scale-100"
                      >
                        <ExternalLink className="w-4 h-4" />
                        <span>Live Web App Demo</span>
                      </a>
                    )}

                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-white hover:bg-slate-100 text-slate-900 border border-slate-300 font-semibold text-sm shadow-xs transition-all hover:scale-[1.02] active:scale-100"
                    >
                      <GithubIcon className="w-4 h-4 text-slate-700" />
                      <span>View GitHub Repository</span>
                    </a>
                  </div>

                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}

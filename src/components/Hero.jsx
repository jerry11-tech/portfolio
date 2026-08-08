import React from 'react';
import { ArrowRight, Download, Mail, MapPin, GraduationCap, Brain, CheckCircle2 } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './Icons';

export default function Hero() {
  return (
    <section className="relative pt-32 pb-20 md:pt-36 md:pb-24 bg-gradient-to-b from-slate-50 via-white to-slate-50 border-b border-slate-200/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Main Content Column */}
          <div className="lg:col-span-7 space-y-6 text-left">
            
            {/* Status Pill */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-md bg-blue-50 border border-blue-200 text-blue-800 text-xs font-semibold tracking-wide">
              <span className="w-2 h-2 rounded-full bg-blue-600" />
              <span>AI / Machine Learning Engineer & Computer Vision Developer</span>
            </div>

            {/* Main Headline */}
            <div className="space-y-2">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-slate-900 tracking-tight leading-[1.15]">
                Dhiraj Nimje
              </h1>
              <p className="text-xl sm:text-2xl font-bold text-blue-700">
                Master of Computer Applications Candidate
              </p>
            </div>

            {/* Sub-description */}
            <p className="text-base sm:text-lg text-slate-600 leading-relaxed max-w-2xl">
              Specialized in building end-to-end Machine Learning solutions, Computer Vision pipelines, and Retrieval-Augmented Generation (RAG) platforms. Strong mathematical foundation with <strong className="text-slate-900 font-semibold">9.05 CGPA in B.Sc. Mathematics</strong> and <strong className="text-slate-900 font-semibold">7.34 CGPA in MCA</strong> at K. J. Somaiya Institute of Management.
            </p>

            {/* Key Metrics Row */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 pt-2 max-w-xl">
              <div className="p-3.5 rounded-xl bg-white border border-slate-200 shadow-xs">
                <div className="text-xl font-extrabold text-blue-700">9.05 CGPA</div>
                <div className="text-xs text-slate-500 font-medium">B.Sc. Mathematics</div>
              </div>
              <div className="p-3.5 rounded-xl bg-white border border-slate-200 shadow-xs">
                <div className="text-xl font-extrabold text-indigo-700">7.34 CGPA</div>
                <div className="text-xs text-slate-500 font-medium">MCA Degree</div>
              </div>
              <div className="p-3.5 rounded-xl bg-white border border-slate-200 shadow-xs col-span-2 sm:col-span-1">
                <div className="text-xl font-extrabold text-slate-900">2 Live Demos</div>
                <div className="text-xs text-slate-500 font-medium">AI & RAG Apps</div>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center gap-4 pt-2">
              <a
                href="#projects"
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-lg bg-slate-900 hover:bg-slate-800 text-white font-semibold text-sm shadow-sm transition-colors"
              >
                <span>View Portfolio Projects</span>
                <ArrowRight className="w-4 h-4" />
              </a>

              <a
                href="./Nimje_Dhiraj_Resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-lg bg-white hover:bg-slate-50 text-slate-900 font-semibold text-sm border border-slate-300 shadow-xs transition-colors"
              >
                <Download className="w-4 h-4 text-slate-600" />
                <span>Download Resume (PDF)</span>
              </a>
            </div>

            {/* Contact Quick Bar */}
            <div className="flex items-center gap-4 pt-4 border-t border-slate-200/80 text-xs text-slate-600">
              <span className="font-semibold text-slate-500 uppercase tracking-wider">Profiles:</span>
              <a
                href="https://github.com/jerry11-tech"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 hover:text-blue-700 font-medium"
              >
                <GithubIcon className="w-4 h-4" />
                <span>GitHub (jerry11-tech)</span>
              </a>
              <a
                href="https://www.linkedin.com/in/dhiraj-nimje-bb822139b"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 hover:text-blue-700 font-medium"
              >
                <LinkedinIcon className="w-4 h-4 text-blue-600" />
                <span>LinkedIn</span>
              </a>
            </div>

          </div>

          {/* Formal Profile Feature Card */}
          <div className="lg:col-span-5">
            <div className="p-8 rounded-2xl bg-white border border-slate-200 shadow-md text-left space-y-6">
              
              <div className="flex items-center justify-between border-b border-slate-100 pb-4">
                <div>
                  <h3 className="text-xl font-bold text-slate-900">Engineering Profile</h3>
                  <p className="text-xs text-slate-500">Core Competencies & Stack</p>
                </div>
                <span className="px-2.5 py-1 rounded bg-blue-50 text-blue-700 text-xs font-bold border border-blue-100">
                  MCA 2026
                </span>
              </div>

              <div className="space-y-3 text-xs text-slate-700">
                <div className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-blue-600 shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-slate-900 font-semibold block">Computer Vision & CNN</strong>
                    Real-time face recognition, feature extraction & in-browser neural network inference (DoshaNet).
                  </div>
                </div>

                <div className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-indigo-600 shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-slate-900 font-semibold block">NLP & RAG Systems</strong>
                    Retrieval-Augmented Generation pipelines using Gemini API & Sentence Transformers for legal domain QA.
                  </div>
                </div>

                <div className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-slate-900 font-semibold block">Full-Stack Integration</strong>
                    FastAPI, React 18, Next.js 14, TypeScript, Tailwind CSS & SQL Databases.
                  </div>
                </div>
              </div>

              <div className="pt-4 border-t border-slate-100 flex items-center justify-between text-xs text-slate-500">
                <span className="flex items-center gap-1"><MapPin className="w-3.5 h-3.5 text-rose-500" /> Kalyan, MH, India</span>
                <span className="font-semibold text-slate-700">English, Marathi, Hindi</span>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

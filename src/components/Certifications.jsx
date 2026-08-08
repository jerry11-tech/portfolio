import React from 'react';
import { Award, CheckCircle, ExternalLink, ShieldCheck } from 'lucide-react';

export default function Certifications() {
  const certifications = [
    {
      title: "Supervised Machine Learning: Classification",
      issuer: "IBM",
      category: "Machine Learning & AI Specialization",
      description: "Advanced classification algorithms, model evaluation metrics, hyperparameter tuning, decision trees, random forests, and SVMs.",
      iconBg: "bg-blue-600",
    },
    {
      title: "Algorithms for Searching, Sorting, and Indexing",
      issuer: "University of Colorado Boulder",
      category: "Computer Science & Data Structures",
      description: "In-depth algorithmic analysis, time & space complexity, advanced search algorithms, balanced binary trees, heap structures, and indexing strategies.",
      iconBg: "bg-indigo-600",
    },
  ];

  return (
    <section id="certifications" className="py-20 bg-white border-y border-slate-200/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-50 border border-emerald-100 text-emerald-700 text-xs font-semibold uppercase tracking-wider">
            <Award className="w-3.5 h-3.5" />
            <span>Professional Verified Certifications</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Certifications & Training
          </h2>
          <p className="text-slate-600 text-base sm:text-lg">
            Industry & academic certifications verifying expertise in Machine Learning and Core Algorithms.
          </p>
        </div>

        {/* Certifications Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {certifications.map((cert, idx) => (
            <div
              key={idx}
              className="p-8 rounded-3xl bg-slate-50 border border-slate-200 hover:border-blue-300 shadow-sm hover:shadow-md transition-all text-left flex flex-col justify-between"
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="px-3 py-1 rounded-full bg-blue-100/80 text-blue-800 text-xs font-bold uppercase tracking-wider">
                    {cert.issuer}
                  </span>
                  <ShieldCheck className="w-6 h-6 text-emerald-600" />
                </div>

                <h3 className="text-xl font-bold text-slate-900 leading-snug">
                  {cert.title}
                </h3>

                <p className="text-slate-600 text-sm leading-relaxed">
                  {cert.description}
                </p>
              </div>

              <div className="pt-6 mt-6 border-t border-slate-200/80 flex items-center justify-between text-xs text-slate-500">
                <span className="font-semibold text-slate-700">{cert.category}</span>
                <span className="flex items-center gap-1 text-emerald-700 font-semibold">
                  <CheckCircle className="w-3.5 h-3.5" /> Verified Certificate
                </span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

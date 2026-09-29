import React from 'react';
import { Award, CheckCircle, ExternalLink, ShieldCheck } from 'lucide-react';

export default function Certifications() {
  const certifications = [
    {
      title: "Supervised Machine Learning: Classification",
      issuer: "IBM",
      category: "Machine Learning & AI Specialization · Jun 2026",
      description: "Advanced classification algorithms, model evaluation metrics, hyperparameter tuning, decision trees, random forests, and SVMs.",
      iconBg: "bg-blue-600",
      url: "https://www.coursera.org/account/accomplishments/verify/MJSYO59JX7WP",
    },
    {
      title: "Supervised Machine Learning: Regression",
      issuer: "IBM",
      category: "Machine Learning & AI Specialization · May 2026",
      description: "Linear and polynomial regression, regularization, gradient descent optimisation, tree-based regressors, and time-series forecasting fundamentals.",
      iconBg: "bg-blue-600",
      url: "https://www.coursera.org/account/accomplishments/verify/CQYI0ME04Y7I",
    },
    {
      title: "Software Testing, Deployment, and Maintenance Strategies",
      issuer: "IBM",
      category: "MLOps & Software Engineering · Mar 2026",
      description: "Test design, CI/CD-aligned deployment pipelines, release strategies, and production maintenance practices for reliable software delivery.",
      iconBg: "bg-blue-600",
      url: "https://www.coursera.org/account/accomplishments/verify/UNZWIGB97SLI",
    },
    {
      title: "Algorithms for Searching, Sorting, and Indexing",
      issuer: "University of Colorado Boulder",
      category: "Computer Science & Data Structures · Dec 2025",
      description: "In-depth algorithmic analysis, time & space complexity, advanced search algorithms, balanced binary trees, heap structures, and indexing strategies.",
      iconBg: "bg-indigo-600",
      url: "https://www.coursera.org/account/accomplishments/verify/8U3O2I75FQGY",
    },
    {
      title: "Fundamentals of Java Programming",
      issuer: "Board Infinity",
      category: "Programming Fundamentals · Dec 2025",
      description: "Core Java concepts including object-oriented programming, collections, exception handling, streams, and functional programming patterns.",
      iconBg: "bg-indigo-600",
      url: "https://www.coursera.org/account/accomplishments/verify/3MUCS330NQTW",
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
                {cert.url ? (
                  <a
                    href={cert.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1 text-blue-700 font-semibold hover:underline"
                  >
                    <CheckCircle className="w-3.5 h-3.5" /> Verified Certificate
                    <ExternalLink className="w-3 h-3" />
                  </a>
                ) : (
                  <span className="flex items-center gap-1 text-emerald-700 font-semibold">
                    <CheckCircle className="w-3.5 h-3.5" /> Verified Certificate
                  </span>
                )}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

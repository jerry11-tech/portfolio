import React from 'react';
import { GraduationCap, Calendar, Award, Building2 } from 'lucide-react';

export default function Education() {
  const educationList = [
    {
      degree: "Master of Computer Applications (MCA)",
      institution: "K. J. Somaiya Institute of Management",
      board: "K. J. Somaiya Institute of Management",
      score: "7.34 CGPA",
      period: "Expected March 2026",
      status: "Currently Pursuing",
      description: "Advanced curriculum focused on Machine Learning, Deep Learning, Software Architecture, Enterprise Application Development, Data Science, and Computer Vision.",
      highlight: true
    },
    {
      degree: "Bachelor of Science (Mathematics)",
      institution: "University of Mumbai",
      board: "University of Mumbai",
      score: "9.05 CGPA",
      period: "2022 - 2024",
      status: "Graduated with Distinction",
      description: "Comprehensive study of Linear Algebra, Multivariable Calculus, Numerical Methods, Probability, and Statistical Inference forming a rock-solid foundation for AI math.",
      highlight: false
    }
  ];

  return (
    <section id="education" className="py-20 bg-slate-50/70">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 border border-blue-100 text-blue-700 text-xs font-semibold uppercase tracking-wider">
            <GraduationCap className="w-3.5 h-3.5" />
            <span>Academic Qualifications</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Education & Background
          </h2>
          <p className="text-slate-600 text-base sm:text-lg">
            Solid academic credentials from premier institutions in Mumbai.
          </p>
        </div>

        {/* Education Timeline Cards */}
        <div className="max-w-4xl mx-auto space-y-8">
          {educationList.map((edu, idx) => (
            <div
              key={idx}
              className={`p-8 rounded-3xl border transition-all text-left relative overflow-hidden ${
                edu.highlight
                  ? 'bg-white border-blue-200 shadow-md ring-1 ring-blue-500/20'
                  : 'bg-white border-slate-200 shadow-xs'
              }`}
            >
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-slate-100">
                <div className="space-y-1">
                  <span className="inline-block px-2.5 py-0.5 rounded-full bg-blue-100 text-blue-800 text-xs font-semibold mb-1">
                    {edu.status}
                  </span>
                  <h3 className="text-xl sm:text-2xl font-bold text-slate-900">
                    {edu.degree}
                  </h3>
                  <div className="flex items-center gap-2 text-slate-600 text-sm font-medium">
                    <Building2 className="w-4 h-4 text-blue-600" />
                    <span>{edu.institution}</span>
                  </div>
                </div>

                {/* Score Pill */}
                <div className="flex flex-col items-start sm:items-end">
                  <div className="text-2xl font-extrabold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
                    {edu.score}
                  </div>
                  <div className="flex items-center gap-1 text-slate-500 text-xs mt-0.5">
                    <Calendar className="w-3.5 h-3.5" />
                    <span>{edu.period}</span>
                  </div>
                </div>
              </div>

              <p className="text-slate-600 text-sm leading-relaxed pt-4">
                {edu.description}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

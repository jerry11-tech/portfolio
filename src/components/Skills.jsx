import React from 'react';
import { Cpu, Code, Database, Wrench, Layers } from 'lucide-react';

export default function Skills() {
  const skillCategories = [
    {
      title: "AI & Machine Learning",
      icon: Cpu,
      color: "from-blue-500 to-indigo-600",
      bgColor: "bg-blue-50/60 border-blue-100",
      skills: [
        { name: "Scikit-Learn", level: "Advanced" },
        { name: "Neural Networks (from scratch)", level: "Advanced" },
        { name: "Natural Language Processing (NLP)", level: "Advanced" },
        { name: "RAG Architecture", level: "Intermediate" },
        { name: "Hugging Face / Sentence Transformers", level: "Intermediate" },
        { name: "OpenCV", level: "Advanced" },
        { name: "OCR Techniques", level: "Intermediate" },
        { name: "Feature Engineering", level: "Advanced" },
      ],
    },
    {
      title: "Programming Languages",
      icon: Code,
      color: "from-indigo-500 to-purple-600",
      bgColor: "bg-indigo-50/60 border-indigo-100",
      skills: [
        { name: "Python", level: "Expert" },
        { name: "TypeScript", level: "Advanced" },
        { name: "JavaScript", level: "Advanced" },
        { name: "SQL", level: "Advanced" },
        { name: "Java", level: "Intermediate" },
      ],
    },
    {
      title: "Frameworks & Web Backend",
      icon: Layers,
      color: "from-sky-500 to-blue-600",
      bgColor: "bg-sky-50/60 border-sky-100",
      skills: [
        { name: "FastAPI", level: "Advanced" },
        { name: "React 18", level: "Advanced" },
        { name: "Next.js 14", level: "Intermediate" },
        { name: "Tailwind CSS", level: "Advanced" },
        { name: "Node.js & Express", level: "Intermediate" },
      ],
    },
    {
      title: "Databases & Tools",
      icon: Database,
      color: "from-emerald-500 to-teal-600",
      bgColor: "bg-emerald-50/60 border-emerald-100",
      skills: [
        { name: "MySQL", level: "Advanced" },
        { name: "PostgreSQL", level: "Intermediate" },
        { name: "SQLite", level: "Advanced" },
        { name: "Git & GitHub", level: "Advanced" },
        { name: "Power BI", level: "Intermediate" },
      ],
    },
  ];

  return (
    <section id="skills" className="py-20 bg-slate-50/70">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-50 border border-indigo-100 text-indigo-700 text-xs font-semibold uppercase tracking-wider">
            <Wrench className="w-3.5 h-3.5" />
            <span>Technical Expertise</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Skills & Technical Stack
          </h2>
          <p className="text-slate-600 text-base sm:text-lg">
            Comprehensive skill set built across machine learning, computer vision, web backend, and database architectures.
          </p>
        </div>

        {/* Skill Category Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {skillCategories.map((cat, idx) => {
            const Icon = cat.icon;
            return (
              <div
                key={idx}
                className={`p-6 sm:p-8 rounded-3xl bg-white border ${cat.bgColor} shadow-sm hover:shadow-md transition-shadow relative overflow-hidden text-left`}
              >
                {/* Card Title */}
                <div className="flex items-center gap-3.5 mb-6">
                  <div className={`w-12 h-12 rounded-2xl bg-gradient-to-tr ${cat.color} flex items-center justify-center text-white shadow-md`}>
                    <Icon className="w-6 h-6" />
                  </div>
                  <h3 className="text-xl font-bold text-slate-900">{cat.title}</h3>
                </div>

                {/* Skill Pills Grid */}
                <div className="flex flex-wrap gap-2.5">
                  {cat.skills.map((skill, sIdx) => (
                    <div
                      key={sIdx}
                      className="px-3.5 py-2 rounded-xl bg-slate-100/90 border border-slate-200 text-slate-800 text-xs font-semibold flex items-center gap-2 hover:bg-slate-200/80 transition-colors"
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-blue-600" />
                      <span>{skill.name}</span>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}

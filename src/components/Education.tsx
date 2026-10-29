import React from 'react';
import { educationData } from '../data/portfolio';
import { GraduationCap, Calendar, Award, BookOpen } from 'lucide-react';

export const Education: React.FC = () => {
  return (
    <section id="education" className="py-20 border-b border-slate-900 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <span className="font-mono text-xs font-semibold text-cyan-400 tracking-wider uppercase bg-cyan-950/40 border border-cyan-800/40 px-3 py-1 rounded-full mb-3">
            Academic Background
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Education
          </h2>
          <p className="text-slate-400 text-sm sm:text-base max-w-xl mt-2">
            Rigorous undergraduate foundation in core computer science principles, discrete mathematics, and systems engineering.
          </p>
          <div className="w-12 h-1 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-full mt-3" />
        </div>

        {/* Timeline Container */}
        <div className="max-w-4xl mx-auto">
          {educationData.map((edu) => (
            <div
              key={edu.id}
              className="relative pl-8 sm:pl-10 pb-10 border-l-2 border-cyan-500/30 last:border-0 last:pb-0"
            >
              {/* Timeline Marker Icon */}
              <div className="absolute -left-[17px] top-0 w-8 h-8 rounded-full bg-slate-950 border-2 border-cyan-400 flex items-center justify-center text-cyan-400 shadow-md shadow-cyan-500/30">
                <GraduationCap className="w-4 h-4" />
              </div>

              {/* Education Content Card */}
              <div className="rounded-2xl bg-slate-900/50 border border-slate-800 p-6 sm:p-8 space-y-5">
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 border-b border-slate-800/80 pb-4">
                  <div>
                    <h3 className="text-xl sm:text-2xl font-bold text-white">
                      {edu.degree}
                    </h3>
                    <div className="text-cyan-400 font-semibold text-base">
                      {edu.field}
                    </div>
                    <div className="text-slate-400 text-sm mt-0.5">
                      {edu.institution}
                    </div>
                  </div>

                  <div className="flex flex-col sm:items-end gap-1.5 shrink-0">
                    <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg text-xs font-mono bg-slate-950 text-slate-300 border border-slate-800">
                      <Calendar className="w-3.5 h-3.5 text-cyan-400" />
                      <span>{edu.duration}</span>
                    </div>
                    <div className="text-xs font-mono font-semibold text-emerald-400 bg-emerald-950/40 px-2.5 py-0.5 rounded border border-emerald-800/40">
                      {edu.gpa}
                    </div>
                  </div>
                </div>

                {/* Relevant Coursework */}
                <div>
                  <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-slate-400 font-semibold mb-3">
                    <BookOpen className="w-4 h-4 text-cyan-400" />
                    <span>Relevant Coursework</span>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {edu.relevantCoursework.map((course) => (
                      <span
                        key={course}
                        className="px-2.5 py-1 rounded-md text-xs bg-slate-950 text-slate-300 border border-slate-800/90 font-medium"
                      >
                        {course}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Academic Achievements */}
                <div>
                  <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-slate-400 font-semibold mb-3">
                    <Award className="w-4 h-4 text-amber-400" />
                    <span>Academic Achievements</span>
                  </div>
                  <ul className="space-y-2">
                    {edu.achievements.map((item, idx) => (
                      <li key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-300">
                        <span className="w-1.5 h-1.5 rounded-full bg-amber-400 shrink-0 mt-2" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

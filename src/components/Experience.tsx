import React from 'react';
import { experienceData } from '../data/portfolio';
import { Briefcase, Calendar, MapPin, CheckCircle, Sparkles, Send } from 'lucide-react';

export const Experience: React.FC = () => {
  return (
    <section id="experience" className="py-20 border-b border-slate-900 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <span className="font-mono text-xs font-semibold text-cyan-400 tracking-wider uppercase bg-cyan-950/40 border border-cyan-800/40 px-3 py-1 rounded-full mb-3">
            Industry Practice
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Experience
          </h2>
          <p className="text-slate-400 text-sm sm:text-base max-w-xl mt-2">
            Practical engineering experience delivering software within cross-functional teams and active open-source ecosystems.
          </p>
          <div className="w-12 h-1 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-full mt-3" />
        </div>

        <div className="max-w-4xl mx-auto space-y-10">
          
          {/* Active Status Callout Banner */}
          <div className="p-5 rounded-2xl bg-gradient-to-r from-emerald-950/40 via-slate-900 to-cyan-950/30 border border-emerald-800/50 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <div className="flex items-center gap-3.5">
              <div className="w-10 h-10 rounded-xl bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center text-emerald-400 shrink-0">
                <Sparkles className="w-5 h-5" />
              </div>
              <div>
                <h4 className="text-sm sm:text-base font-bold text-white flex items-center gap-2">
                  <span>Software Developer Intern @ KodNest (BTM Layout, Bangalore)</span>
                  <span className="inline-block w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
                </h4>
                <p className="text-xs text-slate-400 mt-0.5">
                  Building with React, SpringBoot, Redis, Supabase &amp; SQL &bull; Open to Full-Time SDE &amp; Developer Roles
                </p>
              </div>
            </div>

            <a
              href="#contact"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-semibold bg-emerald-500 hover:bg-emerald-400 text-slate-950 transition-colors shrink-0"
            >
              <Send className="w-3.5 h-3.5" />
              <span>Discuss Opportunity</span>
            </a>
          </div>

          {/* Timeline */}
          <div className="space-y-8">
            {experienceData.map((exp) => (
              <div
                key={exp.id}
                className="relative pl-8 sm:pl-10 pb-4 border-l-2 border-slate-800 last:border-0"
              >
                {/* Timeline Node */}
                <div className="absolute -left-[17px] top-0 w-8 h-8 rounded-full bg-slate-950 border-2 border-cyan-400 flex items-center justify-center text-cyan-400 shadow-md shadow-cyan-500/20">
                  <Briefcase className="w-4 h-4" />
                </div>

                {/* Experience Card */}
                <div className="rounded-2xl bg-slate-900/50 border border-slate-800 p-6 sm:p-8 space-y-5">
                  
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 border-b border-slate-800/80 pb-4">
                    <div>
                      <h3 className="text-xl font-bold text-white">
                        {exp.role}
                      </h3>
                      <div className="text-cyan-400 font-medium text-base">
                        {exp.company}
                      </div>
                      <div className="flex items-center gap-2 text-xs text-slate-400 mt-1">
                        <MapPin className="w-3.5 h-3.5 text-slate-500" />
                        <span>{exp.location}</span>
                        <span>&bull;</span>
                        <span className="font-mono text-slate-300">{exp.type}</span>
                      </div>
                    </div>

                    <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg text-xs font-mono bg-slate-950 text-slate-300 border border-slate-800 shrink-0 self-start sm:self-auto">
                      <Calendar className="w-3.5 h-3.5 text-cyan-400" />
                      <span>{exp.duration}</span>
                    </div>
                  </div>

                  {/* Responsibilities & Achievements */}
                  <div className="space-y-2.5">
                    <div className="text-xs font-mono uppercase tracking-wider text-slate-400 font-semibold">
                      Key Contributions &amp; Results
                    </div>
                    <ul className="space-y-2">
                      {exp.description.map((bullet, idx) => (
                        <li key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-300 leading-relaxed">
                          <CheckCircle className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                          <span>{bullet}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Technologies utilized */}
                  <div className="pt-2">
                    <div className="text-xs font-mono uppercase tracking-wider text-slate-400 font-semibold mb-2">
                      Technologies Applied
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {exp.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="px-2.5 py-1 rounded-md text-xs font-mono bg-slate-950 text-cyan-300 border border-slate-800"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                </div>
              </div>
            ))}
          </div>

        </div>

      </div>
    </section>
  );
};

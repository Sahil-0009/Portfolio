import React from 'react';
import { Code2, Binary, Globe, Sparkles, GraduationCap, MapPin, Target, Database } from 'lucide-react';
import { personalInfo, whatIDoData } from '../data/portfolio';

const iconMap: Record<string, React.ReactNode> = {
  Code2: <Code2 className="w-6 h-6 text-cyan-400" />,
  Binary: <Binary className="w-6 h-6 text-blue-400" />,
  Globe: <Globe className="w-6 h-6 text-emerald-400" />,
  Sparkles: <Sparkles className="w-6 h-6 text-purple-400" />,
};

export const About: React.FC = () => {
  return (
    <section id="about" className="py-20 border-b border-slate-900 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <span className="font-mono text-xs font-semibold text-cyan-400 tracking-wider uppercase bg-cyan-950/40 border border-cyan-800/40 px-3 py-1 rounded-full mb-3">
            Background &amp; Focus
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            About Me
          </h2>
          <div className="w-12 h-1 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-full mt-3" />
        </div>

        {/* Top Story & Quick Details */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start mb-16">
          
          {/* Main Story (8 columns) */}
          <div className="lg:col-span-8 space-y-4 text-slate-300 text-base leading-relaxed">
            <p>
              I am a <strong className="text-white font-semibold">Computer Science Engineering graduate (Class of 2025)</strong> from <span className="text-cyan-300 font-medium">Assam Engineering College, Guwahati</span> with a 7.12 CGPA. Currently based in <strong className="text-emerald-300 font-medium">BTM Layout, Bangalore</strong>, I bring practical industry experience building modern full-stack web applications, dynamic frontend interfaces, and scalable backend REST APIs.
            </p>
            <p>
              Currently serving as a <strong className="text-white font-semibold">Software Developer Intern at KodNest</strong> (BTM Layout, Bangalore), I engineer responsive SPAs with <span className="text-cyan-300 font-medium">HTML, CSS, JavaScript, and React</span>, build performant microservices and REST APIs with <span className="text-emerald-300 font-medium">SpringBoot</span>, configure in-memory caching with <span className="text-rose-300 font-medium">Redis</span>, and manage persistent schemas with <span className="text-teal-300 font-medium">Supabase</span> and <span className="text-amber-300 font-medium">SQL</span>.
            </p>
            <p>
              Previously, as a <strong className="text-white font-semibold">Frontend Developer at Outingers</strong> and Summer Intern at LittleBox India, I engineered production interfaces with <span className="text-cyan-300 font-medium">Angular, TypeScript, and PostgreSQL</span>. My objective is to contribute as a high-performing Software Developer, continuously adopt emerging paradigms, and build reliable, scalable products.
            </p>
          </div>

          {/* Key Quick Facts Card (4 columns) */}
          <div className="lg:col-span-4 rounded-2xl bg-slate-900/60 border border-slate-800 p-6 space-y-5">
            <h3 className="text-xs font-mono uppercase tracking-wider text-slate-400 font-semibold border-b border-slate-800 pb-3">
              Quick Overview
            </h3>

            <div className="space-y-4 text-sm">
              <div className="flex items-start gap-3">
                <GraduationCap className="w-5 h-5 text-cyan-400 shrink-0 mt-0.5" />
                <div>
                  <div className="text-xs text-slate-400">Education</div>
                  <div className="font-medium text-white">B.Tech in Computer Science &amp; Engg</div>
                  <div className="text-xs text-slate-400">Assam Engineering College &bull; 2025 (7.12 CGPA)</div>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-blue-400 shrink-0 mt-0.5" />
                <div>
                  <div className="text-xs text-slate-400">Current Location</div>
                  <div className="font-medium text-white">{personalInfo.location}</div>
                  <div className="text-xs text-slate-400">Bangalore, Karnataka &bull; Open to Relocation</div>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Database className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
                <div>
                  <div className="text-xs text-slate-400">Primary Stack</div>
                  <div className="font-medium text-white">React &bull; SpringBoot &bull; SQL</div>
                  <div className="text-xs text-slate-400">Redis &bull; Supabase &bull; REST API &bull; Angular</div>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Target className="w-5 h-5 text-purple-400 shrink-0 mt-0.5" />
                <div>
                  <div className="text-xs text-slate-400">Target Role</div>
                  <div className="font-medium text-emerald-400">Software Developer / Full-Stack Engineer</div>
                  <div className="text-xs text-slate-400">React / SpringBoot / Java / SDE</div>
                </div>
              </div>
            </div>
          </div>

        </div>

        {/* "What I Do" Subsection */}
        <div>
          <div className="text-center mb-8">
            <h3 className="text-xl sm:text-2xl font-bold text-white tracking-tight">
              What I Do &amp; Focus On
            </h3>
            <p className="text-sm text-slate-400 mt-1">
              Core software engineering competencies practiced daily
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {whatIDoData.map((item) => (
              <div
                key={item.id}
                className="group relative rounded-xl bg-slate-900/40 border border-slate-800/80 p-6 hover:bg-slate-900/80 hover:border-slate-700 transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  <div className="w-12 h-12 rounded-lg bg-slate-800/80 border border-slate-700/60 flex items-center justify-center mb-4 group-hover:scale-105 transition-transform">
                    {iconMap[item.icon] || <Code2 className="w-6 h-6 text-cyan-400" />}
                  </div>

                  <h4 className="text-base font-bold text-white mb-2 group-hover:text-cyan-300 transition-colors">
                    {item.title}
                  </h4>

                  <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
                    {item.description}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-slate-800/60 flex flex-wrap gap-1.5">
                  {item.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2 py-0.5 rounded text-[11px] font-mono bg-slate-950 text-slate-400 border border-slate-800"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};

import React from 'react';
import { codingProfilesData } from '../data/portfolio';
import { ExternalLink, Github, Linkedin, Code, Terminal, Award, BookOpen } from 'lucide-react';

const platformIcons: Record<string, React.ReactNode> = {
  GitHub: <Github className="w-6 h-6 text-white" />,
  LinkedIn: <Linkedin className="w-6 h-6 text-sky-400" />,
  LeetCode: (
    <svg className="w-6 h-6 text-amber-500 fill-current" viewBox="0 0 24 24">
      <path d="M13.483 0a1.374 1.374 0 0 0-.961.438L7.116 6.226l-3.854 4.126a5.266 5.266 0 0 0-1.209 2.104 5.35 5.35 0 0 0-.125.513 5.527 5.527 0 0 0 .062 2.362 5.83 5.83 0 0 0 .349 1.017 5.938 5.938 0 0 0 1.271 1.818l4.277 4.193.039.038c2.248 2.165 5.852 2.133 8.063-.074l2.396-2.392c.54-.54.54-1.414.003-1.955a1.378 1.378 0 0 0-1.951-.003l-2.396 2.392a3.021 3.021 0 0 1-4.205.038l-.02-.019-4.276-4.193c-.652-.64-.972-1.469-.948-2.263a2.68 2.68 0 0 1 .666-1.794l3.774-4.039 5.322-5.706a1.376 1.376 0 0 0-.029-1.931A1.373 1.373 0 0 0 13.483 0zm-2.88 5.9a1.376 1.376 0 1 0-.293 2.738l5.242.557a1.377 1.377 0 0 0 .292-2.738L10.603 5.9z" />
    </svg>
  ),
  HackerRank: <Award className="w-6 h-6 text-emerald-400" />,
  CodeChef: <Terminal className="w-6 h-6 text-orange-400" />,
  GeeksforGeeks: <BookOpen className="w-6 h-6 text-green-400" />,
};

export const CodingProfiles: React.FC = () => {
  return (
    <section id="coding-profiles" className="py-20 border-b border-slate-900 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <span className="font-mono text-xs font-semibold text-cyan-400 tracking-wider uppercase bg-cyan-950/40 border border-cyan-800/40 px-3 py-1 rounded-full mb-3">
            Competitive &amp; Developer Profiles
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Coding Profiles
          </h2>
          <p className="text-slate-400 text-sm sm:text-base max-w-xl mt-2">
            Active developer hubs and problem-solving portals where I practice algorithms, review source code, and connect with engineers.
          </p>
          <div className="w-12 h-1 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-full mt-3" />
        </div>

        {/* Profiles Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {codingProfilesData.map((item) => (
            <div
              key={item.id}
              className="rounded-2xl bg-slate-900/40 border border-slate-800 hover:border-slate-700 hover:bg-slate-900/80 transition-all p-6 flex flex-col justify-between group"
            >
              <div>
                <div className="flex items-start justify-between gap-3 mb-4">
                  <div className="w-12 h-12 rounded-xl bg-slate-800 border border-slate-700/80 flex items-center justify-center group-hover:scale-105 transition-transform">
                    {platformIcons[item.platform] || <Code className="w-6 h-6 text-cyan-400" />}
                  </div>

                  {item.badge && (
                    <span className="px-2.5 py-0.5 rounded-full text-[11px] font-mono font-semibold bg-slate-950 text-cyan-400 border border-slate-800">
                      {item.badge}
                    </span>
                  )}
                </div>

                <h3 className="text-lg font-bold text-white mb-0.5 group-hover:text-cyan-300 transition-colors">
                  {item.platform}
                </h3>
                
                <div className="text-xs font-mono text-slate-400 mb-2">
                  @{item.username}
                </div>

                <div className="text-xs font-mono font-semibold text-emerald-400 bg-emerald-950/30 px-2.5 py-1 rounded-md border border-emerald-900/40 mb-3 inline-block">
                  {item.stat}
                </div>

                <p className="text-xs text-slate-400 leading-relaxed">
                  {item.description}
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-slate-800/80">
                <a
                  href={item.profileUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full inline-flex items-center justify-center gap-2 px-4 py-2 rounded-xl text-xs font-semibold bg-slate-800 hover:bg-slate-700 text-slate-200 hover:text-white border border-slate-700 hover:border-slate-600 transition-all"
                >
                  <span>Visit Profile</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

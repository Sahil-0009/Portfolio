import React from 'react';
import { achievementsData } from '../data/portfolio';
import { Trophy, Code2, Users, Star, Target, Sparkles } from 'lucide-react';

const categoryIcons: Record<string, React.ReactNode> = {
  'Competitive Programming': <Code2 className="w-5 h-5 text-cyan-400" />,
  'Hackathons & Contests': <Trophy className="w-5 h-5 text-amber-400" />,
  'Skill Verification': <Star className="w-5 h-5 text-emerald-400" />,
  'Community & Collaboration': <Users className="w-5 h-5 text-purple-400" />,
};

export const Achievements: React.FC = () => {
  return (
    <section id="achievements" className="py-20 border-b border-slate-900 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <span className="font-mono text-xs font-semibold text-cyan-400 tracking-wider uppercase bg-cyan-950/40 border border-cyan-800/40 px-3 py-1 rounded-full mb-3">
            Milestones &amp; Honors
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Achievements
          </h2>
          <p className="text-slate-400 text-sm sm:text-base max-w-xl mt-2">
            Measurable accomplishments across algorithmic problem-solving platforms, collegiate hackathons, and software projects.
          </p>
          <div className="w-12 h-1 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-full mt-3" />
        </div>

        {/* Achievement Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
          {achievementsData.map((item) => (
            <div
              key={item.id}
              className="rounded-2xl bg-slate-900/50 border border-slate-800 hover:border-slate-700 transition-all p-6 sm:p-7 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between gap-2 mb-4">
                  <div className="flex items-center gap-2.5">
                    <div className="p-2 rounded-xl bg-slate-800 border border-slate-700">
                      {categoryIcons[item.category] || <Trophy className="w-5 h-5 text-cyan-400" />}
                    </div>
                    <span className="text-xs font-mono font-medium text-slate-400">
                      {item.category}
                    </span>
                  </div>

                  {item.highlight && (
                    <span className="inline-flex items-center gap-1 text-[11px] font-mono font-semibold text-cyan-300 bg-cyan-950/60 px-2.5 py-0.5 rounded-full border border-cyan-800/60">
                      <Sparkles className="w-3 h-3" />
                      {item.highlight}
                    </span>
                  )}
                </div>

                <h3 className="text-lg font-bold text-white mb-2">
                  {item.title}
                </h3>

                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                  {item.description}
                </p>
              </div>

              <div className="mt-6 pt-3 border-t border-slate-800/60 flex items-center justify-between text-xs font-mono text-slate-400">
                <span>Timeline: {item.date}</span>
                <span className="text-emerald-400 font-semibold flex items-center gap-1">
                  <Target className="w-3.5 h-3.5" />
                  Verified
                </span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

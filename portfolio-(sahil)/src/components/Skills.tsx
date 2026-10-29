import React, { useState } from 'react';
import { skillsCategories } from '../data/portfolio';
import { Terminal, Layout, Server, Database, Wrench, Layers } from 'lucide-react';

const categoryIcons: Record<string, React.ReactNode> = {
  'Programming Languages': <Terminal className="w-4 h-4 text-cyan-400" />,
  'Frontend Development': <Layout className="w-4 h-4 text-blue-400" />,
  'Backend & APIs': <Server className="w-4 h-4 text-emerald-400" />,
  'Database Management': <Database className="w-4 h-4 text-amber-400" />,
  'Developer Tools & Platforms': <Wrench className="w-4 h-4 text-purple-400" />,
};

export const Skills: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');

  const categories = ['All', ...skillsCategories.map((c) => c.title)];

  const displayedCategories =
    selectedCategory === 'All'
      ? skillsCategories
      : skillsCategories.filter((c) => c.title === selectedCategory);

  return (
    <section id="skills" className="py-20 border-b border-slate-900 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="flex flex-col items-center text-center mb-12">
          <span className="font-mono text-xs font-semibold text-cyan-400 tracking-wider uppercase bg-cyan-950/40 border border-cyan-800/40 px-3 py-1 rounded-full mb-3">
            Technical Stack
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Technical Skills
          </h2>
          <p className="text-slate-400 text-sm sm:text-base max-w-xl mt-2">
            Structured proficiencies acquired through rigorous coursework, project development, and hands-on coding practice.
          </p>
          <div className="w-12 h-1 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-full mt-3" />
        </div>

        {/* Filter Pills */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-3.5 py-1.5 rounded-lg text-xs font-medium transition-all cursor-pointer ${
                selectedCategory === cat
                  ? 'bg-cyan-500 text-slate-950 font-semibold shadow-sm shadow-cyan-500/30'
                  : 'bg-slate-900/80 text-slate-300 hover:text-white hover:bg-slate-800 border border-slate-800'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Skills Category Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {displayedCategories.map((category) => (
            <div
              key={category.title}
              className="rounded-2xl bg-slate-900/40 border border-slate-800 hover:border-slate-700/80 transition-all p-6 flex flex-col justify-between"
            >
              <div>
                {/* Category Title & Icon */}
                <div className="flex items-center gap-2.5 mb-2 pb-3 border-b border-slate-800/80">
                  <div className="p-2 rounded-lg bg-slate-800/60 border border-slate-700/50">
                    {categoryIcons[category.title] || <Layers className="w-4 h-4 text-cyan-400" />}
                  </div>
                  <div>
                    <h3 className="text-base font-bold text-white">
                      {category.title}
                    </h3>
                  </div>
                </div>

                <p className="text-xs text-slate-400 mb-5 leading-relaxed">
                  {category.description}
                </p>

                {/* Skill Badges */}
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill) => (
                    <div
                      key={skill.name}
                      className={`inline-flex flex-col px-3 py-2 rounded-xl text-xs transition-all ${
                        skill.featured
                          ? 'bg-slate-800/90 text-white border border-slate-700 hover:border-cyan-500/40 hover:bg-slate-800'
                          : 'bg-slate-950 text-slate-300 border border-slate-800/80 hover:border-slate-700'
                      }`}
                    >
                      <span className="font-semibold text-white flex items-center gap-1.5">
                        {skill.featured && (
                          <span className="w-1.5 h-1.5 rounded-full bg-cyan-400" />
                        )}
                        {skill.name}
                      </span>
                      {skill.level && (
                        <span className="text-[10px] font-mono text-slate-400 mt-0.5">
                          {skill.level}
                        </span>
                      )}
                    </div>
                  ))}
                </div>
              </div>

              <div className="mt-6 pt-3 border-t border-slate-800/50 flex items-center justify-between text-[11px] font-mono text-slate-400">
                <span>{category.skills.length} competencies</span>
                <span className="text-cyan-400">Verified by projects</span>
              </div>
            </div>
          ))}
        </div>

        {/* Skill verification callout note */}
        <div className="mt-12 p-4 rounded-xl bg-slate-900/30 border border-slate-800/80 text-center max-w-2xl mx-auto">
          <p className="text-xs text-slate-400">
            <span className="text-cyan-400 font-semibold font-mono">No Arbitrary Percentages:</span> Skills represent actively practiced technologies validated in project codebases, lab exercises, and algorithmic problem-solving platforms.
          </p>
        </div>

      </div>
    </section>
  );
};

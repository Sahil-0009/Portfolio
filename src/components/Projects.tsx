import React, { useState } from 'react';
import { projectsData } from '../data/portfolio';
import { ProjectItem } from '../types/portfolio';
import { ProjectModal } from './ProjectModal';
import { Github, ExternalLink, Info, Code2, Sparkles, Terminal, Search, X } from 'lucide-react';

export const Projects: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [activeProject, setActiveProject] = useState<ProjectItem | null>(null);
  const [showAll, setShowAll] = useState<boolean>(false);

  const categories = ['All', 'Full Stack', 'Java / Spring Boot', 'Frontend'];

  const filteredProjects = projectsData.filter((p) => {
    const matchesCategory = selectedCategory === 'All' || p.category === selectedCategory;
    const query = searchQuery.toLowerCase().trim();
    const matchesQuery =
      !query ||
      p.name.toLowerCase().includes(query) ||
      p.shortDescription.toLowerCase().includes(query) ||
      p.technologies.some((t) => t.toLowerCase().includes(query));
    return matchesCategory && matchesQuery;
  });

  const displayedProjects = showAll ? filteredProjects : filteredProjects.slice(0, 3);

  return (
    <section id="projects" className="py-20 border-b border-slate-900 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-10">
          <span className="font-mono text-xs font-semibold text-cyan-400 tracking-wider uppercase bg-cyan-950/40 border border-cyan-800/40 px-3 py-1 rounded-full mb-3">
            Portfolio Showcase
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Featured Projects
          </h2>
          <p className="text-slate-400 text-sm sm:text-base max-w-2xl mt-2">
            Production-oriented software projects addressing real-world problem statements, built with strict engineering discipline and tested architectures.
          </p>
          <div className="w-12 h-1 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-full mt-3" />
        </div>

        {/* Category Filters & Tech Search Bar */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 mb-10 max-w-4xl mx-auto">
          {/* Category Filter Pills */}
          <div className="flex flex-wrap items-center justify-center gap-2">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => {
                  setSelectedCategory(cat);
                  setShowAll(false);
                }}
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

          {/* Quick Search Input */}
          <div className="relative w-full md:w-64">
            <Search className="w-3.5 h-3.5 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2 pointer-events-none" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search tech or project..."
              className="w-full pl-8 pr-8 py-1.5 rounded-lg bg-slate-900 border border-slate-800 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-cyan-500 transition-colors font-mono"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery('')}
                className="absolute right-2.5 top-1/2 -translate-y-1/2 text-slate-400 hover:text-white p-0.5 rounded cursor-pointer"
                title="Clear search"
              >
                <X className="w-3 h-3" />
              </button>
            )}
          </div>
        </div>

        {/* Empty state if search returns nothing */}
        {filteredProjects.length === 0 && (
          <div className="text-center py-12 bg-slate-900/40 rounded-2xl border border-slate-800 max-w-md mx-auto">
            <p className="text-sm text-slate-400">No projects match &quot;{searchQuery}&quot; in {selectedCategory}.</p>
            <button
              onClick={() => {
                setSearchQuery('');
                setSelectedCategory('All');
              }}
              className="mt-3 px-3 py-1.5 rounded-lg bg-cyan-500/10 border border-cyan-500/30 text-xs font-mono text-cyan-400 hover:bg-cyan-500/20 transition-colors cursor-pointer"
            >
              Reset Filters
            </button>
          </div>
        )}

        {/* Project Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {displayedProjects.map((project) => (
            <div
              key={project.id}
              className="group rounded-2xl bg-slate-900/50 border border-slate-800 hover:border-slate-700 hover:bg-slate-900/80 transition-all duration-300 flex flex-col justify-between overflow-hidden shadow-lg shadow-black/20"
            >
              <div>
                {/* Visual Thumbnail Banner */}
                <div
                  className={`h-44 bg-gradient-to-br ${project.imageGradient} p-4 border-b border-slate-800/80 flex flex-col justify-between relative overflow-hidden group-hover:brightness-105 transition-all`}
                >
                  {/* Subtle code pattern backdrop */}
                  <div className="absolute inset-0 opacity-10 font-mono text-[10px] p-2 select-none pointer-events-none overflow-hidden text-cyan-200">
                    &lt;div className=&quot;app-container&quot;&gt;<br />
                    &nbsp;&nbsp;const controller = new Service();<br />
                    &nbsp;&nbsp;await connection.query();<br />
                    &lt;/div&gt;
                  </div>

                  <div className="flex items-center justify-between relative z-10">
                    <span className="px-2.5 py-0.5 rounded text-[11px] font-mono font-semibold bg-slate-950/80 text-cyan-300 border border-slate-800 backdrop-blur-sm">
                      {project.category}
                    </span>
                    {project.featured && (
                      <span className="flex items-center gap-1 text-[11px] font-mono font-semibold text-amber-300 bg-amber-950/60 px-2 py-0.5 rounded border border-amber-800/60 backdrop-blur-sm">
                        <Sparkles className="w-3 h-3" />
                        Featured
                      </span>
                    )}
                  </div>

                  {/* Mock Window Visual Header */}
                  <div className="bg-slate-950/70 backdrop-blur-md rounded-lg p-2.5 border border-slate-800/90 relative z-10 flex items-center gap-2">
                    <div className="flex items-center gap-1">
                      <span className="w-2 h-2 rounded-full bg-rose-500/70" />
                      <span className="w-2 h-2 rounded-full bg-amber-500/70" />
                      <span className="w-2 h-2 rounded-full bg-emerald-500/70" />
                    </div>
                    <span className="text-[11px] font-mono text-slate-300 truncate">
                      {project.id}.service.ts
                    </span>
                  </div>
                </div>

                {/* Card Body */}
                <div className="p-6 space-y-4">
                  <h3 className="text-lg sm:text-xl font-bold text-white group-hover:text-cyan-300 transition-colors">
                    {project.name}
                  </h3>

                  <p className="text-xs sm:text-sm text-slate-300 leading-relaxed line-clamp-3">
                    {project.shortDescription}
                  </p>

                  {/* Problem Solved callout */}
                  <div className="p-3 rounded-xl bg-slate-950/60 border border-slate-800/80">
                    <div className="text-[11px] font-mono text-cyan-400 font-semibold mb-1">
                      Problem Solved:
                    </div>
                    <p className="text-xs text-slate-400 leading-relaxed line-clamp-2">
                      {project.problemSolved}
                    </p>
                  </div>

                  {/* Technologies tags */}
                  <div>
                    <div className="flex flex-wrap gap-1.5 pt-1">
                      {project.technologies.slice(0, 4).map((tech) => (
                        <span
                          key={tech}
                          className="px-2 py-0.5 rounded text-[11px] font-mono bg-slate-950 text-slate-300 border border-slate-800"
                        >
                          {tech}
                        </span>
                      ))}
                      {project.technologies.length > 4 && (
                        <span className="px-1.5 py-0.5 rounded text-[11px] font-mono text-slate-500">
                          +{project.technologies.length - 4}
                        </span>
                      )}
                    </div>
                  </div>
                </div>
              </div>

              {/* Card Footer Actions */}
              <div className="p-6 pt-0 border-t border-slate-800/60 mt-4 space-y-2.5">
                <div className="grid grid-cols-2 gap-2 pt-4">
                  <a
                    href={project.liveDemoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-1.5 px-3 py-2 rounded-lg text-xs font-semibold bg-cyan-500 hover:bg-cyan-400 text-slate-950 transition-colors"
                  >
                    <ExternalLink className="w-3.5 h-3.5" />
                    <span>Live Demo</span>
                  </a>

                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-1.5 px-3 py-2 rounded-lg text-xs font-semibold bg-slate-800 hover:bg-slate-700 text-slate-200 border border-slate-700 transition-colors"
                  >
                    <Github className="w-3.5 h-3.5" />
                    <span>GitHub</span>
                  </a>
                </div>

                <button
                  onClick={() => setActiveProject(project)}
                  className="w-full inline-flex items-center justify-center gap-1.5 px-3 py-2 rounded-lg text-xs font-medium text-slate-400 hover:text-white hover:bg-slate-800/60 border border-transparent hover:border-slate-800 transition-colors cursor-pointer"
                >
                  <Info className="w-3.5 h-3.5 text-cyan-400" />
                  <span>View Details &amp; Architecture</span>
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* View All Projects toggle button */}
        {filteredProjects.length > 3 && (
          <div className="mt-12 text-center">
            <button
              onClick={() => setShowAll(!showAll)}
              id="view-all-projects-btn"
              className="inline-flex items-center gap-2 px-6 py-2.5 rounded-xl text-sm font-semibold bg-slate-900 hover:bg-slate-800 text-slate-200 hover:text-white border border-slate-700 hover:border-slate-600 transition-all cursor-pointer"
            >
              <span>{showAll ? 'Show Fewer Projects' : 'View All Projects'}</span>
            </button>
          </div>
        )}

      </div>

      {/* Project Details Modal */}
      <ProjectModal
        project={activeProject}
        onClose={() => setActiveProject(null)}
      />
    </section>
  );
};

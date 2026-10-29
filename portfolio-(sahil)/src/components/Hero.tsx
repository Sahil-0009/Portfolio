import React, { useState } from 'react';
import { ArrowRight, Download, FolderGit2, Sparkles, Terminal, CheckCircle2 } from 'lucide-react';
import { personalInfo } from '../data/portfolio';

interface HeroProps {
  onOpenResume: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenResume }) => {
  const [terminalTab, setTerminalTab] = useState<'config' | 'dsa' | 'roles'>('config');

  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      id="home"
      className="relative pt-32 pb-16 md:pt-40 md:pb-24 overflow-hidden border-b border-slate-900"
    >
      {/* Subtle background ambient tech glow */}
      <div className="absolute top-12 left-1/2 -translate-x-1/2 w-[600px] h-[350px] bg-gradient-to-tr from-cyan-600/10 via-blue-600/10 to-purple-600/5 blur-3xl pointer-events-none rounded-full" />
      <div className="absolute top-40 right-10 w-72 h-72 bg-blue-500/5 blur-3xl pointer-events-none rounded-full" />

      {/* Floating subtle developer symbols */}
      <div className="absolute top-28 left-8 lg:left-24 text-slate-800 font-mono text-2xl select-none pointer-events-none opacity-40 animate-pulse">
        &lt;/&gt;
      </div>
      <div className="absolute top-64 left-1/3 text-slate-800 font-mono text-xl select-none pointer-events-none opacity-30">
        &#123; &#125;
      </div>
      <div className="absolute top-36 right-16 lg:right-32 text-slate-800 font-mono text-sm select-none pointer-events-none opacity-40">
        01001001
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Text & CTAs */}
          <div className="lg:col-span-7 flex flex-col items-start space-y-6">
            
            {/* Status pill badge */}
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-slate-900/90 border border-slate-800 shadow-sm">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
              </span>
              <span className="text-xs font-mono text-slate-300 font-medium tracking-wide">
                {personalInfo.status}
              </span>
            </div>

            {/* Title & Introduction */}
            <div className="space-y-2">
              <p className="font-mono text-cyan-400 text-sm sm:text-base font-semibold tracking-wide">
                {personalInfo.intro}
              </p>
              <h1 className="text-4xl sm:text-6xl font-extrabold tracking-tight text-white leading-tight">
                {personalInfo.name}
              </h1>
              <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold bg-gradient-to-r from-slate-200 via-cyan-200 to-blue-400 bg-clip-text text-transparent">
                {personalInfo.role}
              </h2>
            </div>

            {/* Description */}
            <p className="text-slate-400 text-base sm:text-lg max-w-2xl leading-relaxed">
              {personalInfo.bio}
            </p>

            {/* Action Buttons */}
            <div className="w-full sm:w-auto flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5 pt-2">
              <button
                onClick={() => scrollTo('projects')}
                id="hero-view-projects-btn"
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl font-semibold text-sm bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-slate-950 shadow-md shadow-cyan-500/20 hover:shadow-cyan-500/30 transition-all cursor-pointer group"
              >
                <FolderGit2 className="w-4 h-4 transition-transform group-hover:scale-110" />
                <span>View My Projects</span>
              </button>

              <button
                onClick={onOpenResume}
                id="hero-download-resume-btn"
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl font-semibold text-sm text-slate-200 hover:text-white bg-slate-900/90 hover:bg-slate-800 border border-slate-700 hover:border-slate-600 transition-all cursor-pointer group"
              >
                <Download className="w-4 h-4 transition-transform group-hover:-translate-y-0.5" />
                <span>Download Resume</span>
              </button>

              <button
                onClick={() => scrollTo('contact')}
                id="hero-connect-btn"
                className="inline-flex items-center justify-center gap-1.5 px-4 py-3.5 text-sm font-medium text-cyan-400 hover:text-cyan-300 transition-colors cursor-pointer group"
              >
                <span>Let's Connect</span>
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </button>
            </div>

            {/* Quick Tech Highlights */}
            <div className="pt-2 flex flex-wrap items-center gap-2 text-xs font-mono text-slate-400">
              <span className="text-slate-400 font-sans font-medium">Core Stack:</span>
              <span className="px-2.5 py-1 rounded-md bg-slate-900 border border-slate-800 text-sky-300">React</span>
              <span className="px-2.5 py-1 rounded-md bg-slate-900 border border-slate-800 text-emerald-300">SpringBoot</span>
              <span className="px-2.5 py-1 rounded-md bg-slate-900 border border-slate-800 text-rose-300">Redis</span>
              <span className="px-2.5 py-1 rounded-md bg-slate-900 border border-slate-800 text-teal-300">Supabase</span>
              <span className="px-2.5 py-1 rounded-md bg-slate-900 border border-slate-800 text-amber-300">SQL</span>
              <span className="px-2.5 py-1 rounded-md bg-slate-900 border border-slate-800 text-cyan-300">Angular</span>
              <span className="px-2.5 py-1 rounded-md bg-slate-900 border border-slate-800 text-blue-300">TypeScript</span>
              <span className="px-2.5 py-1 rounded-md bg-slate-900 border border-slate-800 text-purple-300">Java</span>
            </div>

          </div>

          {/* Right Column: Clean Developer-Style Visual Terminal */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              
              {/* Terminal Frame */}
              <div className="rounded-2xl bg-slate-900/95 border border-slate-800 shadow-2xl shadow-cyan-950/20 backdrop-blur-xl overflow-hidden">
                
                {/* Terminal Header with Interactive React Tabs */}
                <div className="bg-slate-950/90 px-3 py-2.5 border-b border-slate-800 flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <div className="flex items-center gap-1.5 mr-2">
                      <span className="w-3 h-3 rounded-full bg-rose-500/80" />
                      <span className="w-3 h-3 rounded-full bg-amber-500/80" />
                      <span className="w-3 h-3 rounded-full bg-emerald-500/80" />
                    </div>
                    {/* React Tab Buttons */}
                    <div className="flex items-center gap-1">
                      <button
                        onClick={() => setTerminalTab('config')}
                        className={`px-2 py-1 rounded text-xs font-mono transition-colors ${
                          terminalTab === 'config'
                            ? 'bg-slate-800 text-cyan-400 font-semibold'
                            : 'text-slate-400 hover:text-slate-200'
                        }`}
                      >
                        config.ts
                      </button>
                      <button
                        onClick={() => setTerminalTab('dsa')}
                        className={`px-2 py-1 rounded text-xs font-mono transition-colors ${
                          terminalTab === 'dsa'
                            ? 'bg-slate-800 text-cyan-400 font-semibold'
                            : 'text-slate-400 hover:text-slate-200'
                        }`}
                      >
                        dsa.java
                      </button>
                      <button
                        onClick={() => setTerminalTab('roles')}
                        className={`px-2 py-1 rounded text-xs font-mono transition-colors ${
                          terminalTab === 'roles'
                            ? 'bg-slate-800 text-cyan-400 font-semibold'
                            : 'text-slate-400 hover:text-slate-200'
                        }`}
                      >
                        goals.json
                      </button>
                    </div>
                  </div>
                  <div className="flex items-center gap-1 text-[11px] font-mono text-emerald-400 bg-emerald-950/40 px-2 py-0.5 rounded border border-emerald-800/40">
                    <CheckCircle2 className="w-3 h-3" />
                    <span>Active</span>
                  </div>
                </div>

                {/* Code Window Body - Dynamic based on React State */}
                <div className="p-5 font-mono text-xs sm:text-[13px] leading-relaxed text-slate-300 space-y-1.5 overflow-x-auto min-h-[260px]">
                  {terminalTab === 'config' && (
                    <>
                      <div>
                        <span className="text-purple-400">const</span>{' '}
                        <span className="text-blue-300">engineer</span>{' '}
                        <span className="text-slate-400">=</span> &#123;
                      </div>
                      <div className="pl-4">
                        <span className="text-slate-400">name:</span>{' '}
                        <span className="text-emerald-300">&quot;{personalInfo.name}&quot;</span>,
                      </div>
                      <div className="pl-4">
                        <span className="text-slate-400">currentLocation:</span>{' '}
                        <span className="text-amber-300">&quot;BTM Layout, Bangalore, Karnataka&quot;</span>,
                      </div>
                      <div className="pl-4">
                        <span className="text-slate-400">currentRole:</span>{' '}
                        <span className="text-emerald-300">&quot;Software Developer Intern @ KodNest&quot;</span>,
                      </div>
                      <div className="pl-4">
                        <span className="text-slate-400">coreStack:</span> &#123;
                      </div>
                      <div className="pl-8">
                        <span className="text-slate-400">frontend:</span>{' '}
                        <span className="text-cyan-300">&quot;React &bull; HTML/CSS/JS &bull; Angular&quot;</span>,
                      </div>
                      <div className="pl-8">
                        <span className="text-slate-400">backendAndDb:</span>{' '}
                        <span className="text-cyan-300">&quot;SpringBoot &bull; REST API &bull; SQL &bull; Supabase &bull; Redis&quot;</span>,
                      </div>
                      <div className="pl-8">
                        <span className="text-slate-400">languages:</span>{' '}
                        <span className="text-cyan-300">&quot;Java &bull; JavaScript &bull; TypeScript &bull; Python&quot;</span>,
                      </div>
                      <div className="pl-4">
                        &#125;,
                      </div>
                      <div className="pl-4">
                        <span className="text-slate-400">experiences:</span> [
                        <span className="text-emerald-300">&quot;KodNest&quot;</span>,{' '}
                        <span className="text-emerald-300">&quot;Outingers&quot;</span>,{' '}
                        <span className="text-emerald-300">&quot;LittleBox&quot;</span>],
                      </div>
                      <div className="pl-4">
                        <span className="text-slate-400">seekingOpportunities:</span>{' '}
                        <span className="text-purple-400 font-semibold">true</span>,
                      </div>
                      <div>&#125;;</div>
                      <div className="pt-2 text-slate-400 flex items-center gap-1.5">
                        <span className="text-cyan-400">&gt;</span> engineer.deploy();
                        <span className="inline-block w-2 h-4 bg-cyan-400 animate-pulse ml-1" />
                      </div>
                    </>
                  )}

                  {terminalTab === 'dsa' && (
                    <>
                      <div>
                        <span className="text-purple-400">export class</span>{' '}
                        <span className="text-amber-300">OutingersComponent</span> &#123;
                      </div>
                      <div className="pl-4">
                        <span className="text-purple-400">readonly</span> stack = [
                        <span className="text-emerald-300">&quot;Angular&quot;</span>,{' '}
                        <span className="text-emerald-300">&quot;TypeScript&quot;</span>,{' '}
                        <span className="text-emerald-300">&quot;Tailwind CSS&quot;</span>];
                      </div>
                      <div className="pl-4">
                        <span className="text-purple-400">readonly</span> database ={' '}
                        <span className="text-cyan-300">&quot;PostgreSQL&quot;</span>;
                      </div>
                      <div className="pl-4 text-slate-400">// Reusable UI components &amp; optimized SQL</div>
                      <div className="pl-4">
                        <span className="text-purple-400">async</span>{' '}
                        <span className="text-blue-300">loadUserExperience</span>() &#123;
                      </div>
                      <div className="pl-8 text-cyan-300">
                        const trips = await this.api.getDestinations();
                      </div>
                      <div className="pl-8 text-emerald-300">
                        this.renderResponsiveGrid(trips);
                      </div>
                      <div className="pl-4">&#125;</div>
                      <div>&#125;</div>
                      <div className="pt-2 text-emerald-400 flex items-center gap-1.5">
                        <span>&gt; ng build --configuration production [Success 0 errors]</span>
                      </div>
                    </>
                  )}

                  {terminalTab === 'roles' && (
                    <>
                      <div>&#123;</div>
                      <div className="pl-4">
                        <span className="text-cyan-300">&quot;objective&quot;</span>:{' '}
                        <span className="text-emerald-300">&quot;Contribute my best skills to the company&quot;</span>,
                      </div>
                      <div className="pl-4">
                        <span className="text-cyan-300">&quot;roles&quot;</span>: [
                      </div>
                      <div className="pl-8 text-amber-300">
                        &quot;Frontend Developer (Angular / React)&quot;,<br />
                        &quot;Full-Stack Software Developer&quot;,<br />
                        &quot;Software Engineer (Entry-Level)&quot;
                      </div>
                      <div className="pl-4">],</div>
                      <div className="pl-4">
                        <span className="text-cyan-300">&quot;location&quot;</span>:{' '}
                        <span className="text-slate-200">&quot;Bangalore, Karnataka / Open to Relocate&quot;</span>,
                      </div>
                      <div className="pl-4">
                        <span className="text-cyan-300">&quot;immediateJoiner&quot;</span>:{' '}
                        <span className="text-purple-400">true</span>
                      </div>
                      <div>&#125;</div>
                    </>
                  )}
                </div>

                {/* Terminal Footer Info */}
                <div className="bg-slate-950/60 px-4 py-2.5 border-t border-slate-800/80 flex items-center justify-between text-xs text-slate-400 font-mono">
                  <span className="flex items-center gap-1.5">
                    <Sparkles className="w-3.5 h-3.5 text-cyan-400" />
                    React &bull; SpringBoot &bull; Redis &bull; Supabase
                  </span>
                  <span className="text-emerald-400">{personalInfo.location}</span>
                </div>
              </div>

              {/* Decorative mini badges around terminal */}
              <div className="hidden sm:flex absolute -bottom-4 -left-4 items-center gap-2 px-3 py-1.5 rounded-lg bg-slate-900/90 border border-slate-700 text-xs font-mono text-cyan-300 shadow-lg backdrop-blur">
                <span className="w-2 h-2 rounded-full bg-cyan-400" />
                <span>KodNest &bull; Outingers &bull; LittleBox</span>
              </div>

              <div className="hidden sm:flex absolute -top-4 -right-4 items-center gap-2 px-3 py-1.5 rounded-lg bg-slate-900/90 border border-slate-700 text-xs font-mono text-emerald-300 shadow-lg backdrop-blur">
                <span>BTM Layout, Bangalore</span>
              </div>

            </div>
          </div>

        </div>

        {/* Section 5: Hero Statistics */}
        <div className="mt-16 pt-10 border-t border-slate-800/80">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6">
            
            <div className="p-4 sm:p-5 rounded-xl bg-slate-900/50 border border-slate-800 hover:border-slate-700 transition-colors">
              <div className="text-2xl sm:text-3xl font-extrabold text-white font-mono text-cyan-400">
                {personalInfo.stats.projectsCount}
              </div>
              <div className="text-sm font-semibold text-slate-200 mt-1">
                Featured Projects
              </div>
              <p className="text-xs text-slate-400 mt-0.5">
                Outingers, Assam Mart &amp; AI
              </p>
            </div>

            <div className="p-4 sm:p-5 rounded-xl bg-slate-900/50 border border-slate-800 hover:border-slate-700 transition-colors">
              <div className="text-2xl sm:text-3xl font-extrabold text-white font-mono text-blue-400">
                {personalInfo.stats.dsaProblemsCount}
              </div>
              <div className="text-sm font-semibold text-slate-200 mt-1">
                Industry Experiences
              </div>
              <p className="text-xs text-slate-400 mt-0.5">
                KodNest, Outingers &amp; LittleBox
              </p>
            </div>

            <div className="p-4 sm:p-5 rounded-xl bg-slate-900/50 border border-slate-800 hover:border-slate-700 transition-colors">
              <div className="text-2xl sm:text-3xl font-extrabold text-white font-mono text-emerald-400">
                {personalInfo.stats.technologiesCount}
              </div>
              <div className="text-sm font-semibold text-slate-200 mt-1">
                Technologies &amp; Tools
              </div>
              <p className="text-xs text-slate-400 mt-0.5">
                React, SpringBoot, Redis, SQL
              </p>
            </div>

            <div className="p-4 sm:p-5 rounded-xl bg-slate-900/50 border border-slate-800 hover:border-slate-700 transition-colors">
              <div className="text-2xl sm:text-3xl font-extrabold text-white font-mono text-purple-400">
                {personalInfo.stats.certificationsCount}
              </div>
              <div className="text-sm font-semibold text-slate-200 mt-1">
                Academic Background
              </div>
              <p className="text-xs text-slate-400 mt-0.5">
                7.12 CGPA &bull; Assam Engg College
              </p>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};

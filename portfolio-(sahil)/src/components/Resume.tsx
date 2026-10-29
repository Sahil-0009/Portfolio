import React from 'react';
import { FileText, Download, Sparkles, Send, CheckCircle2 } from 'lucide-react';
import { personalInfo } from '../data/portfolio';

interface ResumeProps {
  onOpenResume: () => void;
}

export const Resume: React.FC<ResumeProps> = ({ onOpenResume }) => {
  const handleDirectDownload = () => {
    onOpenResume();
  };

  return (
    <section id="resume" className="py-20 border-b border-slate-900 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="relative rounded-3xl bg-gradient-to-b from-slate-900 via-slate-900/90 to-slate-950 border border-slate-800 p-8 sm:p-12 md:p-16 text-center max-w-4xl mx-auto overflow-hidden shadow-2xl shadow-cyan-950/20">
          
          {/* Subtle accent glow */}
          <div className="absolute -top-24 left-1/2 -translate-x-1/2 w-96 h-48 bg-cyan-500/10 blur-3xl pointer-events-none rounded-full" />

          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyan-950/60 border border-cyan-800/60 text-cyan-400 text-xs font-mono font-semibold mb-6">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Opportunities &amp; Placement</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight mb-4">
            Interested in working with me?
          </h2>

          <p className="text-slate-300 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed mb-8">
            I'm currently looking for software development opportunities where I can apply my experience in React, SpringBoot, Redis, Supabase, SQL, and modern web frameworks to engineer impactful products.
          </p>

          {/* Highlights checklist */}
          <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-8 text-xs sm:text-sm text-slate-300 mb-10">
            <span className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-cyan-400" />
              Immediate Availability
            </span>
            <span className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-cyan-400" />
              Hands-On Industry Experience (KodNest)
            </span>
            <span className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-cyan-400" />
              React, SpringBoot, Redis &amp; SQL Proficient
            </span>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <button
              onClick={handleDirectDownload}
              id="resume-cta-download-btn"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-xl font-semibold text-sm bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-slate-950 shadow-md shadow-cyan-500/20 hover:shadow-cyan-500/30 transition-all cursor-pointer"
            >
              <Download className="w-4 h-4" />
              <span>Download Resume</span>
            </button>

            <button
              onClick={onOpenResume}
              id="resume-cta-view-btn"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-xl font-semibold text-sm text-slate-200 hover:text-white bg-slate-800/80 hover:bg-slate-800 border border-slate-700 hover:border-slate-600 transition-all cursor-pointer"
            >
              <FileText className="w-4 h-4 text-cyan-400" />
              <span>View Resume Online</span>
            </button>

            <a
              href="#contact"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-1.5 px-5 py-3.5 rounded-xl text-sm font-semibold text-slate-300 hover:text-cyan-400 transition-colors"
            >
              <Send className="w-4 h-4" />
              <span>Let's Talk</span>
            </a>
          </div>

          <div className="mt-8 text-xs font-mono text-slate-400">
            Resume file: <span className="text-slate-300">Abu_Jubair_Md_Sahil_Resume.pdf</span> &bull; Updated for 2025/2026 hiring cycle
          </div>

        </div>

      </div>
    </section>
  );
};

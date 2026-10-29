import React from 'react';
import { personalInfo } from '../data/portfolio';
import { ArrowUp, Github, Linkedin, Mail, Heart, Code } from 'lucide-react';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="py-12 bg-slate-950 border-t border-slate-900 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 pb-8 border-b border-slate-900">
          
          {/* Logo / Name */}
          <div className="flex items-center gap-2 font-mono text-base font-bold text-white">
            <span className="w-7 h-7 rounded-lg bg-cyan-500/10 border border-cyan-500/30 flex items-center justify-center text-cyan-400">
              <Code className="w-3.5 h-3.5" />
            </span>
            <span className="text-slate-400">&lt;</span>
            <span>{personalInfo.name}</span>
            <span className="text-cyan-400">&nbsp;/&gt;</span>
          </div>

          {/* Social Links */}
          <div className="flex items-center gap-3">
            <a
              href={personalInfo.github}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-lg text-slate-400 hover:text-white hover:bg-slate-900 border border-slate-800 transition-colors"
              aria-label="GitHub Profile"
              title="GitHub: Sahil-0009"
            >
              <Github className="w-4 h-4" />
            </a>
            <a
              href={personalInfo.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-lg text-slate-400 hover:text-sky-400 hover:bg-slate-900 border border-slate-800 transition-colors"
              aria-label="LinkedIn Profile"
              title="LinkedIn: ajmsahil"
            >
              <Linkedin className="w-4 h-4" />
            </a>
            <a
              href="https://leetcode.com/u/ajm_sahil/"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-lg text-slate-400 hover:text-amber-400 hover:bg-slate-900 border border-slate-800 transition-colors"
              aria-label="LeetCode Profile"
              title="LeetCode: ajm_sahil"
            >
              <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                <path d="M13.483 0a1.374 1.374 0 0 0-.961.438L7.116 6.226l-3.854 4.126a5.266 5.266 0 0 0-1.209 2.104 5.35 5.35 0 0 0-.125.513 5.527 5.527 0 0 0 .062 2.362 5.83 5.83 0 0 0 .349 1.017 5.938 5.938 0 0 0 1.271 1.818l4.277 4.193.039.038c2.248 2.165 5.852 2.133 8.063-.074l2.396-2.392c.54-.54.54-1.414.003-1.955a1.378 1.378 0 0 0-1.951-.003l-2.396 2.392a3.021 3.021 0 0 1-4.205.038l-.02-.019-4.276-4.193c-.652-.64-.972-1.469-.948-2.263a2.68 2.68 0 0 1 .666-1.794l3.774-4.039 5.322-5.706a1.376 1.376 0 0 0-.029-1.931A1.373 1.373 0 0 0 13.483 0zm-2.88 5.9a1.376 1.376 0 1 0-.293 2.738l5.242.557a1.377 1.377 0 0 0 .292-2.738L10.603 5.9z" />
              </svg>
            </a>
            <a
              href={`https://api.whatsapp.com/send?phone=91${personalInfo.whatsappNumber || '8811902440'}&text=${encodeURIComponent('Hi Sahil, I saw your portfolio and would like to connect.')}`}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-lg text-slate-400 hover:text-emerald-400 hover:bg-slate-900 border border-slate-800 transition-colors"
              aria-label="WhatsApp Direct SMS"
              title="WhatsApp: +91 8811902440"
            >
              <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.301-.15-1.78-.878-2.056-.978-.276-.1-.476-.15-.676.15-.2.301-.776.978-.952 1.179-.175.2-.351.226-.652.075-.301-.15-1.27-.468-2.42-1.493-.894-.799-1.498-1.786-1.674-2.087-.175-.3-.019-.462.132-.612.136-.135.301-.35.452-.525.15-.175.2-.3.301-.5.1-.2.05-.376-.025-.526-.075-.15-.676-1.63-.927-2.232-.244-.587-.492-.507-.676-.516-.175-.008-.376-.01-.577-.01-.2 0-.526.075-.802.376-.276.301-1.053 1.028-1.053 2.508 0 1.48 1.078 2.909 1.229 3.11.15.2 2.122 3.24 5.141 4.544.718.31 1.279.496 1.716.635.722.23 1.38.197 1.9.12.579-.087 1.78-.727 2.032-1.43.25-.702.25-1.303.175-1.43-.075-.125-.276-.2-.577-.35zM12.04 2C6.516 2 2.028 6.486 2.028 12.008c0 1.99.585 3.847 1.597 5.414L2 22l4.743-1.57c1.512.935 3.29 1.478 5.297 1.478 5.523 0 10.012-4.486 10.012-10.008C22.052 6.486 17.563 2 12.04 2zm0 18.293c-1.737 0-3.34-.492-4.708-1.344l-.337-.21-2.812.93.94-2.738-.23-.367c-.966-1.543-1.477-3.327-1.477-5.18 0-4.62 3.757-8.375 8.376-8.375 4.618 0 8.375 3.755 8.375 8.375 0 4.62-3.757 8.376-8.375 8.376z" />
              </svg>
            </a>
            <a
              href={`mailto:${personalInfo.email}`}
              className="p-2 rounded-lg text-slate-400 hover:text-cyan-400 hover:bg-slate-900 border border-slate-800 transition-colors"
              aria-label="Email Address"
              title="Email: sahil.dev2911@gmail.com"
            >
              <Mail className="w-4 h-4" />
            </a>
          </div>

          {/* Back to Top button */}
          <button
            onClick={scrollToTop}
            id="back-to-top-btn"
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-lg text-xs font-mono font-medium text-slate-300 hover:text-white bg-slate-900 hover:bg-slate-850 border border-slate-800 transition-colors cursor-pointer"
          >
            <span>Back to Top</span>
            <ArrowUp className="w-3.5 h-3.5 text-cyan-400" />
          </button>
        </div>

        {/* Bottom Line */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-400 font-mono text-center sm:text-left">
          <div>
            &copy; 2026 {personalInfo.name}. All rights reserved.
          </div>
          <div className="flex items-center gap-1.5">
            <span>Built with</span>
            <span className="text-cyan-400 font-semibold">React</span>
            <span>&amp;</span>
            <span className="text-sky-400 font-semibold">Tailwind CSS</span>
          </div>
        </div>

      </div>
    </footer>
  );
};

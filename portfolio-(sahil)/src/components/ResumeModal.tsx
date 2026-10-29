import React, { useEffect } from 'react';
import { X, Download, Printer, Mail, Phone, MapPin, Calendar, Award, BookOpen, Briefcase, Code, Terminal, Users } from 'lucide-react';
import { personalInfo, careerObjective, educationData, experienceData, projectsData, workshopsData, organizingActivitiesData } from '../data/portfolio';

interface ResumeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ResumeModal: React.FC<ResumeModalProps> = ({ isOpen, onClose }) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const handlePrint = () => {
    window.print();
  };

  const handleDownload = () => {
    const resumeText = `
================================================================================
                               ${personalInfo.name.toUpperCase()}
                       ${personalInfo.role}
================================================================================
Email: ${personalInfo.email} | Phone: ${personalInfo.phone}
Location: ${personalInfo.location}
LinkedIn: ${personalInfo.linkedin} | GitHub: ${personalInfo.github}
LeetCode: https://leetcode.com/u/ajm_sahil/

--------------------------------------------------------------------------------
CAREER OBJECTIVE
--------------------------------------------------------------------------------
${careerObjective}

--------------------------------------------------------------------------------
EDUCATION
--------------------------------------------------------------------------------
${educationData.map(edu => `• ${edu.degree} (${edu.field})
  ${edu.institution} | ${edu.duration}
  Score / CGPA: ${edu.gpa}
  Key Subjects: ${edu.relevantCoursework.join(', ')}`).join('\n\n')}

--------------------------------------------------------------------------------
TECHNICAL SKILLS
--------------------------------------------------------------------------------
• Frontend Frameworks & Libraries: React, HTML5, CSS3, JavaScript (ES6+), Angular, TypeScript, Tailwind CSS
• Backend & Databases: SpringBoot, RESTful APIs, Redis, Supabase, SQL, PostgreSQL, MySQL, Node.js
• Programming Languages: Java, C/C++, TypeScript, JavaScript, Python
• Tools & Platforms: Git, GitHub, VS Code, Postman, Linux CLI, Vite
• CS Fundamentals: Data Structures & Algorithms, Object-Oriented Programming (OOP), DBMS, Operating Systems, Computer Networks

--------------------------------------------------------------------------------
PROFESSIONAL EXPERIENCE
--------------------------------------------------------------------------------
${experienceData.map(exp => `• ${exp.role} @ ${exp.company}
  Type: ${exp.type} | Duration: ${exp.duration} | Location: ${exp.location}
  Tech Stack: ${exp.technologies.join(', ')}
${exp.description.map(d => `  - ${d}`).join('\n')}`).join('\n\n')}

--------------------------------------------------------------------------------
KEY PROJECTS
--------------------------------------------------------------------------------
${projectsData.map(proj => `• ${proj.name} [${proj.technologies.join(', ')}]
  Description: ${proj.shortDescription}
  Key Highlights:
${proj.solution ? `  - ${proj.solution}` : ''}
${proj.details?.keyFeatures?.length ? proj.details.keyFeatures.map(f => `  - ${f}`).join('\n') : ''}`).join('\n\n')}

--------------------------------------------------------------------------------
WORKSHOPS ATTENDED
--------------------------------------------------------------------------------
${workshopsData.map(ws => `• ${ws.title} (${ws.organizer})
  ${ws.description}`).join('\n')}

--------------------------------------------------------------------------------
CO-CURRICULAR & LEADERSHIP ACTIVITIES
--------------------------------------------------------------------------------
${organizingActivitiesData.map(act => `• ${act.title} - ${act.organization} (${act.duration})
  Role: ${act.role} | ${act.description}`).join('\n')}

--------------------------------------------------------------------------------
PERSONAL DETAILS
--------------------------------------------------------------------------------
• Date of Birth: ${personalInfo.dob}
• Branch: ${personalInfo.branch}
• Languages Known: English, Hindi, Assamese
• Location: ${personalInfo.location}
================================================================================
`;

    const blob = new Blob([resumeText], { type: 'text/plain;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = `${personalInfo.name.replace(/\s+/g, '_')}_Resume.txt`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
  };

  return (
    <div
      id="resume-modal-backdrop"
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/80 backdrop-blur-md animate-in fade-in duration-200"
      onClick={onClose}
    >
      <div
        id="resume-modal-content"
        className="relative w-full max-w-4xl max-h-[92vh] overflow-y-auto bg-slate-950 border border-slate-700/80 rounded-2xl shadow-2xl shadow-black text-slate-100 p-4 sm:p-8 space-y-6"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Controls Header */}
        <div className="flex items-center justify-between pb-4 border-b border-slate-800">
          <div className="flex items-center gap-2">
            <span className="w-3 h-3 rounded-full bg-emerald-500 animate-pulse" />
            <h2 className="text-sm sm:text-base font-bold text-white font-mono">
              Curriculum Vitae &bull; {personalInfo.name}
            </h2>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={handlePrint}
              className="p-2 rounded-lg text-slate-300 hover:text-white bg-slate-900 border border-slate-800 hover:border-slate-700 transition-colors"
              title="Print Resume"
            >
              <Printer className="w-4 h-4" />
            </button>
            <button
              onClick={handleDownload}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold bg-cyan-500 hover:bg-cyan-400 text-slate-950 transition-colors cursor-pointer"
            >
              <Download className="w-3.5 h-3.5" />
              <span>Download Resume</span>
            </button>
            <button
              onClick={onClose}
              className="p-2 rounded-lg text-slate-400 hover:text-white bg-slate-900 border border-slate-800 hover:bg-slate-800 transition-colors cursor-pointer"
              aria-label="Close"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* The Printable Resume Document Sheet */}
        <div className="bg-slate-900/90 rounded-xl p-6 sm:p-10 border border-slate-800 text-slate-200 space-y-7 shadow-inner">
          
          {/* Header */}
          <div className="text-center space-y-2 border-b border-slate-800 pb-6">
            <h1 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
              {personalInfo.name}
            </h1>
            <p className="inline-flex items-center justify-center gap-2 text-xs sm:text-sm font-semibold font-mono text-cyan-300 bg-cyan-950/70 border border-cyan-800/80 px-4 py-1.5 rounded-full tracking-wide shadow-sm shadow-cyan-950/40">
              <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-pulse" />
              <span>{personalInfo.role}</span>
            </p>
            <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-xs text-slate-300 pt-1">
              <a href={`mailto:${personalInfo.email}`} className="flex items-center gap-1.5 hover:text-cyan-400 transition-colors">
                <Mail className="w-3.5 h-3.5 text-slate-400" />
                {personalInfo.email}
              </a>
              <a href={`tel:${personalInfo.phone}`} className="flex items-center gap-1.5 hover:text-cyan-400 transition-colors">
                <Phone className="w-3.5 h-3.5 text-slate-400" />
                {personalInfo.phone}
              </a>
              <span className="flex items-center gap-1.5">
                <MapPin className="w-3.5 h-3.5 text-slate-400" />
                {personalInfo.location}
              </span>
            </div>
            <div className="flex justify-center flex-wrap gap-x-4 gap-y-1 text-xs font-mono text-cyan-400 pt-1">
              <a href={personalInfo.github} target="_blank" rel="noreferrer" className="hover:underline">GitHub: Sahil-0009</a>
              <span>&bull;</span>
              <a href={personalInfo.linkedin} target="_blank" rel="noreferrer" className="hover:underline">LinkedIn: ajmsahil</a>
              <span>&bull;</span>
              <a href="https://leetcode.com/u/ajm_sahil/" target="_blank" rel="noreferrer" className="hover:underline text-amber-400">LeetCode: ajm_sahil</a>
            </div>
          </div>

          {/* Career Objective */}
          <div className="space-y-2">
            <h3 className="text-xs font-mono uppercase tracking-widest text-cyan-400 font-bold border-b border-slate-800 pb-1 flex items-center gap-2">
              <Award className="w-3.5 h-3.5" />
              Career Objective
            </h3>
            <p className="text-xs text-slate-300 leading-relaxed">
              {careerObjective}
            </p>
          </div>

          {/* Education */}
          <div className="space-y-3">
            <h3 className="text-xs font-mono uppercase tracking-widest text-cyan-400 font-bold border-b border-slate-800 pb-1 flex items-center gap-2">
              <BookOpen className="w-3.5 h-3.5" />
              Education
            </h3>
            {educationData.map(edu => (
              <div key={edu.id} className="space-y-1">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between text-sm">
                  <span className="font-bold text-white">{edu.degree} — {edu.field}</span>
                  <span className="text-xs font-mono text-slate-400">{edu.duration}</span>
                </div>
                <div className="flex justify-between text-xs text-slate-300">
                  <span>{edu.institution}</span>
                  <span className="font-semibold text-emerald-400">{edu.gpa}</span>
                </div>
                <p className="text-xs text-slate-400 pt-0.5">
                  <strong className="text-slate-300">Relevant Coursework:</strong> {edu.relevantCoursework.join(', ')}
                </p>
              </div>
            ))}
          </div>

          {/* Technical Skills */}
          <div className="space-y-3">
            <h3 className="text-xs font-mono uppercase tracking-widest text-cyan-400 font-bold border-b border-slate-800 pb-1 flex items-center gap-2">
              <Code className="w-3.5 h-3.5" />
              Technical Proficiencies
            </h3>
            <div className="text-xs space-y-1.5">
              <div>
                <strong className="text-slate-200">Frontend Technologies:</strong> React, HTML5, CSS3, JavaScript (ES6+), Angular, TypeScript, Tailwind CSS, Component Architecture
              </div>
              <div>
                <strong className="text-slate-200">Backend &amp; Databases:</strong> SpringBoot, RESTful APIs, Redis, Supabase, SQL, PostgreSQL, MySQL, Node.js
              </div>
              <div>
                <strong className="text-slate-200">Programming Languages:</strong> Java, C, C++, TypeScript, JavaScript, Python
              </div>
              <div>
                <strong className="text-slate-200">Tools &amp; Environments:</strong> Git, GitHub, VS Code, Postman, Linux Command Line, Vite
              </div>
              <div>
                <strong className="text-slate-200">CS Pillars:</strong> Data Structures &amp; Algorithms, Object-Oriented Programming (OOP), DBMS, Operating Systems, Computer Networks
              </div>
            </div>
          </div>

          {/* Experience */}
          <div className="space-y-4">
            <h3 className="text-xs font-mono uppercase tracking-widest text-cyan-400 font-bold border-b border-slate-800 pb-1 flex items-center gap-2">
              <Briefcase className="w-3.5 h-3.5" />
              Work Experience
            </h3>
            {experienceData.map(exp => (
              <div key={exp.id} className="space-y-1.5">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between text-sm">
                  <div>
                    <span className="font-bold text-white">{exp.role}</span>
                    <span className="text-cyan-400 font-medium ml-2">@ {exp.company}</span>
                    <span className="text-xs text-slate-400 ml-2">({exp.type})</span>
                  </div>
                  <span className="text-xs font-mono text-slate-400">{exp.location}</span>
                </div>
                <div className="text-[11px] font-mono text-cyan-300">
                  Stack: {exp.technologies.join(' • ')}
                </div>
                <ul className="space-y-1 text-xs text-slate-300">
                  {exp.description.map((b, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <span className="text-cyan-400 mt-0.5">&bull;</span>
                      <span>{b}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* Key Projects */}
          <div className="space-y-4">
            <h3 className="text-xs font-mono uppercase tracking-widest text-cyan-400 font-bold border-b border-slate-800 pb-1 flex items-center gap-2">
              <Terminal className="w-3.5 h-3.5" />
              Key Engineering Projects
            </h3>
            <div className="space-y-3">
              {projectsData.map(proj => (
                <div key={proj.id} className="space-y-1">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between text-sm">
                    <span className="font-bold text-white">{proj.name}</span>
                    <span className="text-xs font-mono text-cyan-400">{proj.technologies.join(' &bull; ')}</span>
                  </div>
                  <p className="text-xs text-slate-300 leading-relaxed">
                    {proj.shortDescription}
                  </p>
                  {proj.solution && (
                    <p className="text-xs text-slate-400">
                      <strong className="text-slate-300">Highlight:</strong> {proj.solution}
                    </p>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Workshops */}
          <div className="space-y-3">
            <h3 className="text-xs font-mono uppercase tracking-widest text-cyan-400 font-bold border-b border-slate-800 pb-1 flex items-center gap-2">
              <Award className="w-3.5 h-3.5" />
              Technical Workshops
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
              {workshopsData.map(ws => (
                <div key={ws.id} className="p-3 rounded-lg bg-slate-950/60 border border-slate-800/80">
                  <div className="font-bold text-white">{ws.title}</div>
                  <div className="text-cyan-400 text-[11px] font-mono">{ws.organizer}</div>
                  <div className="text-slate-400 text-[11px] mt-1">{ws.description}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Activities & Leadership */}
          <div className="space-y-3">
            <h3 className="text-xs font-mono uppercase tracking-widest text-cyan-400 font-bold border-b border-slate-800 pb-1 flex items-center gap-2">
              <Users className="w-3.5 h-3.5" />
              Leadership &amp; Co-Curricular Activities
            </h3>
            <div className="space-y-2 text-xs">
              {organizingActivitiesData.map(act => (
                <div key={act.id} className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-1">
                  <div>
                    <span className="font-semibold text-white">{act.title}</span>
                    <span className="text-slate-400 ml-1.5">({act.organization})</span>
                    <p className="text-slate-400 text-[11px] mt-0.5">{act.description}</p>
                  </div>
                  <span className="text-xs font-mono text-cyan-400 shrink-0">{act.duration}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Personal Details */}
          <div className="pt-4 border-t border-slate-800 text-xs text-slate-400 grid grid-cols-1 sm:grid-cols-3 gap-2">
            <div><strong className="text-slate-300">Date of Birth:</strong> {personalInfo.dob}</div>
            <div><strong className="text-slate-300">Degree &amp; Branch:</strong> B.Tech CSE (2025)</div>
            <div><strong className="text-slate-300">Languages:</strong> English, Hindi, Assamese</div>
          </div>

        </div>

      </div>
    </div>
  );
};


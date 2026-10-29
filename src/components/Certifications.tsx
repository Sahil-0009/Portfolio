import React, { useState } from 'react';
import { certificationsData, workshopsData } from '../data/portfolio';
import { Award, ExternalLink, Calendar, ShieldCheck, Check, Copy, BookOpen, Layers } from 'lucide-react';

export const Certifications: React.FC = () => {
  const [copiedId, setCopiedId] = useState<string | null>(null);

  const handleCopy = (id: string, credentialId?: string) => {
    if (!credentialId) return;
    navigator.clipboard.writeText(credentialId);
    setCopiedId(id);
    setTimeout(() => setCopiedId(null), 2000);
  };

  return (
    <section id="certifications" className="py-20 border-b border-slate-900 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <span className="font-mono text-xs font-semibold text-cyan-400 tracking-wider uppercase bg-cyan-950/40 border border-cyan-800/40 px-3 py-1 rounded-full mb-3">
            Credentials &amp; Continuous Learning
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Certifications &amp; Workshops
          </h2>
          <p className="text-slate-400 text-sm sm:text-base max-w-xl mt-2">
            Professional certifications and hands-on technical workshops completed to substantiate practical engineering and foundational domain knowledge.
          </p>
          <div className="w-12 h-1 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-full mt-3" />
        </div>

        {/* Certifications Grid */}
        <div className="mb-14">
          <div className="flex items-center gap-2 mb-6 max-w-5xl mx-auto">
            <Award className="w-5 h-5 text-cyan-400" />
            <h3 className="text-xl font-bold text-white tracking-tight">
              Verified Certifications
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
            {certificationsData.map((cert) => (
              <div
                key={cert.id}
                className="rounded-2xl bg-slate-900/50 border border-slate-800 hover:border-slate-700/90 transition-all p-6 sm:p-7 flex flex-col justify-between"
              >
                <div>
                  {/* Header */}
                  <div className="flex items-start justify-between gap-4 mb-4">
                    <div className="w-12 h-12 rounded-xl bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center text-cyan-400 shrink-0">
                      <Award className="w-6 h-6" />
                    </div>

                    <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg text-xs font-mono bg-slate-950 text-slate-400 border border-slate-800">
                      <Calendar className="w-3.5 h-3.5 text-cyan-400" />
                      <span>{cert.date}</span>
                    </div>
                  </div>

                  <h4 className="text-lg font-bold text-white mb-1.5">
                    {cert.name}
                  </h4>
                  
                  <div className="text-sm font-semibold text-cyan-400 mb-3">
                    {cert.issuer}
                  </div>

                  {/* Credential ID */}
                  {cert.credentialId && (
                    <div className="flex items-center gap-2 mb-4 p-2.5 rounded-lg bg-slate-950/80 border border-slate-800/80 text-xs font-mono text-slate-300">
                      <ShieldCheck className="w-4 h-4 text-emerald-400 shrink-0" />
                      <span className="text-slate-400">ID:</span>
                      <span className="text-slate-200">{cert.credentialId}</span>
                      <button
                        onClick={() => handleCopy(cert.id, cert.credentialId)}
                        className="ml-auto p-1 rounded hover:bg-slate-800 text-slate-400 hover:text-white transition-colors cursor-pointer"
                        title="Copy Credential ID"
                      >
                        {copiedId === cert.id ? (
                          <Check className="w-3.5 h-3.5 text-emerald-400" />
                        ) : (
                          <Copy className="w-3.5 h-3.5" />
                        )}
                      </button>
                    </div>
                  )}

                  {/* Skills tags */}
                  <div className="flex flex-wrap gap-1.5 mb-6">
                    {cert.skills.map((skill) => (
                      <span
                        key={skill}
                        className="px-2 py-0.5 rounded text-[11px] font-mono bg-slate-950 text-slate-400 border border-slate-800"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Verify Action */}
                <div className="pt-4 border-t border-slate-800/80">
                  <a
                    href={cert.verifyUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl text-xs font-semibold bg-slate-800 hover:bg-slate-700 text-slate-200 hover:text-white border border-slate-700 hover:border-slate-600 transition-colors"
                  >
                    <span>Verify Credential</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                </div>

              </div>
            ))}
          </div>
        </div>

        {/* Technical Workshops Section */}
        <div className="max-w-5xl mx-auto pt-6 border-t border-slate-800/80">
          <div className="flex items-center gap-2 mb-6">
            <Layers className="w-5 h-5 text-blue-400" />
            <h3 className="text-xl font-bold text-white tracking-tight">
              Technical Workshops Attended
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {workshopsData.map((ws) => (
              <div
                key={ws.id}
                className="rounded-2xl bg-slate-900/40 border border-slate-800 hover:border-slate-700 transition-all p-6 space-y-3"
              >
                <div className="flex items-start justify-between gap-3">
                  <div className="w-10 h-10 rounded-xl bg-blue-500/10 border border-blue-500/20 flex items-center justify-center text-blue-400 shrink-0">
                    <BookOpen className="w-5 h-5" />
                  </div>
                  <span className="px-2.5 py-0.5 rounded-full text-[11px] font-mono font-medium text-cyan-300 bg-cyan-950/50 border border-cyan-800/50">
                    {ws.type}
                  </span>
                </div>

                <div>
                  <h4 className="text-base font-bold text-white">
                    {ws.title}
                  </h4>
                  <div className="text-xs font-mono text-cyan-400 mt-0.5">
                    {ws.organizer}
                  </div>
                </div>

                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                  {ws.description}
                </p>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};


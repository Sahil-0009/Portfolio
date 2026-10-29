import React, { useState } from 'react';
import { personalInfo } from '../data/portfolio';
import { Mail, Phone, MapPin, Send, Check, Copy, AlertCircle, Linkedin, Github, CheckCircle2, MessageSquare, ExternalLink, Sparkles } from 'lucide-react';

interface FormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

interface FormErrors {
  name?: string;
  email?: string;
  subject?: string;
  message?: string;
}

export const Contact: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);
  const [submittedSuccessfully, setSubmittedSuccessfully] = useState<boolean>(false);
  const [lastWhatsAppUrl, setLastWhatsAppUrl] = useState<string>('');
  const [copiedEmail, setCopiedEmail] = useState<boolean>(false);
  const [copiedPhone, setCopiedPhone] = useState<boolean>(false);

  const whatsappNumber = personalInfo.whatsappNumber || '8811902440';
  const formattedPhone = '+91 8811902440';

  const presets = [
    {
      label: '💼 SDE Opportunity',
      subject: 'Software Developer Opportunity at our company',
      message: 'Hi Sahil, we came across your developer portfolio and would love to discuss an engineering role with our team.',
    },
    {
      label: '🚀 Quick Interview',
      subject: 'Interview Invitation for Software Engineering',
      message: 'Hi Sahil, we would like to invite you for an interview to explore how your React and SpringBoot skills fit our upcoming projects.',
    },
    {
      label: '🤝 Tech Collaboration',
      subject: 'Full-Stack Project Collaboration',
      message: 'Hi Sahil, I have a project requirement and would like to discuss working together.',
    },
  ];

  const handleApplyPreset = (preset: typeof presets[0]) => {
    setFormData((prev) => ({
      ...prev,
      subject: preset.subject,
      message: preset.message,
    }));
  };

  const validate = (): boolean => {
    const errs: FormErrors = {};
    if (!formData.name.trim()) {
      errs.name = 'Please enter your name';
    }
    if (!formData.email.trim()) {
      errs.email = 'Please enter your email or contact handle';
    }
    if (!formData.subject.trim()) {
      errs.subject = 'Please enter a subject';
    }
    if (!formData.message.trim()) {
      errs.message = 'Please write a message';
    } else if (formData.message.trim().length < 5) {
      errs.message = 'Message must be at least 5 characters long';
    }

    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const constructWhatsAppUrl = (data: FormData): string => {
    const text = `👋 Hello Sahil,\n\nI am contacting you from your portfolio website:\n\n👤 Name: ${data.name || 'Visitor'}\n📧 Email: ${data.email || 'Not provided'}\n📌 Subject: ${data.subject || 'Portfolio Inquiry'}\n\n💬 Message:\n${data.message || 'Hello!'}`;
    return `https://api.whatsapp.com/send?phone=91${whatsappNumber}&text=${encodeURIComponent(text)}`;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);
    const targetUrl = constructWhatsAppUrl(formData);
    setLastWhatsAppUrl(targetUrl);

    setTimeout(() => {
      setIsSubmitting(false);
      setSubmittedSuccessfully(true);

      // Open WhatsApp directly with prefilled SMS
      window.open(targetUrl, '_blank', 'noopener,noreferrer');

      // Reset form after short delay
      setFormData({ name: '', email: '', subject: '', message: '' });
    }, 600);
  };

  const handleQuickWhatsAppChat = (customText?: string) => {
    const text = customText || 'Hi Sahil, I saw your portfolio and would like to connect regarding an opportunity.';
    const url = `https://api.whatsapp.com/send?phone=91${whatsappNumber}&text=${encodeURIComponent(text)}`;
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  const copyEmail = () => {
    navigator.clipboard.writeText(personalInfo.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2500);
  };

  const copyPhone = () => {
    navigator.clipboard.writeText(personalInfo.phone || '8811902440');
    setCopiedPhone(true);
    setTimeout(() => setCopiedPhone(false), 2500);
  };

  return (
    <section id="contact" className="py-20 border-b border-slate-900 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <span className="font-mono text-xs font-semibold text-cyan-400 tracking-wider uppercase bg-cyan-950/40 border border-cyan-800/40 px-3 py-1 rounded-full mb-3">
            Get In Touch
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Let's Connect
          </h2>
          <p className="text-slate-400 text-sm sm:text-base max-w-xl mt-2 leading-relaxed">
            Have an opportunity, interview invitation, or project? Send an instant message directly to my WhatsApp or inbox.
          </p>
          <div className="w-12 h-1 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-full mt-3" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 max-w-6xl mx-auto items-start">
          
          {/* Left Column: Direct Contact Details & WhatsApp Banner */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Highlighted WhatsApp Direct SMS Card */}
            <div className="rounded-2xl bg-gradient-to-br from-emerald-950/70 via-slate-900 to-slate-950 border-2 border-emerald-500/40 p-6 sm:p-7 shadow-xl shadow-emerald-950/20 relative overflow-hidden group">
              <div className="absolute top-0 right-0 w-32 h-32 bg-emerald-500/10 rounded-full blur-2xl pointer-events-none" />
              
              <div className="flex items-start justify-between gap-3 mb-4">
                <div className="flex items-center gap-3">
                  <div className="w-11 h-11 rounded-xl bg-emerald-500/20 border border-emerald-500/40 flex items-center justify-center text-emerald-400 shadow-md shadow-emerald-500/10">
                    {/* Authentic WhatsApp Icon SVG */}
                    <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24">
                      <path d="M17.472 14.382c-.301-.15-1.78-.878-2.056-.978-.276-.1-.476-.15-.676.15-.2.301-.776.978-.952 1.179-.175.2-.351.226-.652.075-.301-.15-1.27-.468-2.42-1.493-.894-.799-1.498-1.786-1.674-2.087-.175-.3-.019-.462.132-.612.136-.135.301-.35.452-.525.15-.175.2-.3.301-.5.1-.2.05-.376-.025-.526-.075-.15-.676-1.63-.927-2.232-.244-.587-.492-.507-.676-.516-.175-.008-.376-.01-.577-.01-.2 0-.526.075-.802.376-.276.301-1.053 1.028-1.053 2.508 0 1.48 1.078 2.909 1.229 3.11.15.2 2.122 3.24 5.141 4.544.718.31 1.279.496 1.716.635.722.23 1.38.197 1.9.12.579-.087 1.78-.727 2.032-1.43.25-.702.25-1.303.175-1.43-.075-.125-.276-.2-.577-.35zM12.04 2C6.516 2 2.028 6.486 2.028 12.008c0 1.99.585 3.847 1.597 5.414L2 22l4.743-1.57c1.512.935 3.29 1.478 5.297 1.478 5.523 0 10.012-4.486 10.012-10.008C22.052 6.486 17.563 2 12.04 2zm0 18.293c-1.737 0-3.34-.492-4.708-1.344l-.337-.21-2.812.93.94-2.738-.23-.367c-.966-1.543-1.477-3.327-1.477-5.18 0-4.62 3.757-8.375 8.376-8.375 4.618 0 8.375 3.755 8.375 8.375 0 4.62-3.757 8.376-8.375 8.376z" />
                    </svg>
                  </div>
                  <div>
                    <div className="flex items-center gap-1.5">
                      <span className="text-xs font-mono font-bold text-emerald-400 tracking-wider uppercase">
                        Direct WhatsApp SMS
                      </span>
                      <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                    </div>
                    <div className="text-base sm:text-lg font-bold text-white tracking-tight">
                      {formattedPhone}
                    </div>
                  </div>
                </div>

                <button
                  onClick={copyPhone}
                  className="p-2 rounded-lg bg-slate-950/70 border border-slate-800 text-slate-300 hover:text-emerald-400 transition-colors cursor-pointer"
                  title="Copy WhatsApp Number"
                >
                  {copiedPhone ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
                </button>
              </div>

              <p className="text-xs text-slate-300 leading-relaxed mb-4">
                Messages and SMS sent through this portfolio are delivered directly to my WhatsApp number (<strong className="text-emerald-300">8811902440</strong>) for immediate response.
              </p>

              <button
                type="button"
                onClick={() => handleQuickWhatsAppChat()}
                className="w-full inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl text-xs sm:text-sm font-semibold bg-emerald-500 hover:bg-emerald-400 text-slate-950 transition-all shadow-md shadow-emerald-500/20 hover:shadow-emerald-500/30 cursor-pointer"
              >
                <MessageSquare className="w-4 h-4" />
                <span>Chat Directly on WhatsApp</span>
                <ExternalLink className="w-3.5 h-3.5 ml-0.5" />
              </button>
            </div>

            {/* General Info Card */}
            <div className="rounded-2xl bg-slate-900/50 border border-slate-800 p-6 sm:p-7 space-y-5">
              <h3 className="text-base font-bold text-white tracking-tight flex items-center gap-2">
                <span>Contact Details</span>
              </h3>

              <div className="space-y-3.5">
                
                {/* Location Item */}
                <div className="flex items-start gap-3 p-3.5 rounded-xl bg-slate-950/70 border border-slate-800">
                  <div className="p-2 rounded-lg bg-emerald-500/10 text-emerald-400 shrink-0 mt-0.5">
                    <MapPin className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="text-[11px] font-mono text-slate-400">Current Location</div>
                    <div className="text-xs sm:text-sm font-semibold text-white">
                      {personalInfo.location}
                    </div>
                    <div className="text-[11px] text-slate-400 mt-0.5">
                      BTM Layout, Bangalore &bull; Available in-person &amp; remote
                    </div>
                  </div>
                </div>

                {/* Email Item */}
                <div className="flex items-center justify-between p-3.5 rounded-xl bg-slate-950/70 border border-slate-800">
                  <div className="flex items-center gap-3">
                    <div className="p-2 rounded-lg bg-cyan-500/10 text-cyan-400 shrink-0">
                      <Mail className="w-4 h-4" />
                    </div>
                    <div>
                      <div className="text-[11px] font-mono text-slate-400">Direct Email</div>
                      <a href={`mailto:${personalInfo.email}`} className="text-xs sm:text-sm font-medium text-white hover:text-cyan-400 transition-colors">
                        {personalInfo.email}
                      </a>
                    </div>
                  </div>
                  <button
                    onClick={copyEmail}
                    className="p-1.5 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800 transition-colors cursor-pointer"
                    title="Copy Email"
                  >
                    {copiedEmail ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
                  </button>
                </div>

                {/* Phone Item */}
                <div className="flex items-center justify-between p-3.5 rounded-xl bg-slate-950/70 border border-slate-800">
                  <div className="flex items-center gap-3">
                    <div className="p-2 rounded-lg bg-blue-500/10 text-blue-400 shrink-0">
                      <Phone className="w-4 h-4" />
                    </div>
                    <div>
                      <div className="text-[11px] font-mono text-slate-400">Mobile Phone</div>
                      <a href={`tel:${personalInfo.phone}`} className="text-xs sm:text-sm font-medium text-white hover:text-blue-400 transition-colors">
                        {personalInfo.phone}
                      </a>
                    </div>
                  </div>
                  <button
                    onClick={copyPhone}
                    className="p-1.5 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800 transition-colors cursor-pointer"
                    title="Copy Phone"
                  >
                    {copiedPhone ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
                  </button>
                </div>

              </div>

              {/* Social links row */}
              <div className="pt-2 border-t border-slate-800/80">
                <div className="text-xs font-mono text-slate-400 mb-2.5">Profiles &amp; Repositories</div>
                <div className="grid grid-cols-2 gap-2.5">
                  <a
                    href={personalInfo.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2 px-3 py-2 rounded-xl text-xs font-semibold bg-slate-950 hover:bg-slate-800 text-slate-200 hover:text-white border border-slate-800 hover:border-slate-700 transition-colors"
                  >
                    <Github className="w-4 h-4" />
                    <span>GitHub: Sahil-0009</span>
                  </a>
                  <a
                    href={personalInfo.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2 px-3 py-2 rounded-xl text-xs font-semibold bg-slate-950 hover:bg-slate-800 text-sky-300 hover:text-sky-200 border border-slate-800 hover:border-slate-700 transition-colors"
                  >
                    <Linkedin className="w-4 h-4" />
                    <span>LinkedIn: ajmsahil</span>
                  </a>
                </div>
              </div>

            </div>

          </div>

          {/* Right Column: Interactive Direct SMS / WhatsApp Form */}
          <div className="lg:col-span-7">
            <div className="rounded-2xl bg-slate-900/50 border border-slate-800 p-6 sm:p-8 space-y-6">
              
              <div>
                <div className="flex items-center justify-between flex-wrap gap-2 mb-1">
                  <h3 className="text-lg sm:text-xl font-bold text-white flex items-center gap-2">
                    <span>Send SMS to WhatsApp</span>
                    <span className="px-2 py-0.5 rounded text-[10px] font-mono font-semibold bg-emerald-950/80 text-emerald-300 border border-emerald-800">
                      Direct 8811902440
                    </span>
                  </h3>
                </div>
                <p className="text-xs sm:text-sm text-slate-400">
                  Type your message below. Submitting will format and dispatch your SMS straight to my WhatsApp number (<span className="text-emerald-400 font-medium">8811902440</span>).
                </p>
              </div>

              {/* Quick Template Presets */}
              <div>
                <div className="text-[11px] font-mono text-slate-400 mb-2 flex items-center gap-1.5">
                  <Sparkles className="w-3.5 h-3.5 text-cyan-400" />
                  <span>Quick Templates for Recruiters:</span>
                </div>
                <div className="flex flex-wrap gap-2">
                  {presets.map((preset, idx) => (
                    <button
                      key={idx}
                      type="button"
                      onClick={() => handleApplyPreset(preset)}
                      className="px-3 py-1.5 rounded-lg text-xs font-medium bg-slate-950 hover:bg-slate-800 text-slate-300 hover:text-cyan-300 border border-slate-800 hover:border-cyan-500/40 transition-colors cursor-pointer text-left"
                    >
                      {preset.label}
                    </button>
                  ))}
                </div>
              </div>

              {submittedSuccessfully ? (
                <div className="p-6 rounded-xl bg-emerald-950/40 border border-emerald-800/60 text-center space-y-4 animate-in fade-in duration-300">
                  <div className="w-12 h-12 rounded-full bg-emerald-500/20 border border-emerald-500/40 flex items-center justify-center mx-auto text-emerald-400">
                    <CheckCircle2 className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="text-base sm:text-lg font-bold text-white">
                      SMS Prepared for WhatsApp (+91 8811902440)!
                    </h4>
                    <p className="text-xs sm:text-sm text-slate-300 max-w-md mx-auto mt-1">
                      Your message has been formatted. If WhatsApp did not open automatically, click the button below to send it now:
                    </p>
                  </div>

                  <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-3">
                    {lastWhatsAppUrl && (
                      <a
                        href={lastWhatsAppUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl text-xs font-semibold bg-emerald-500 hover:bg-emerald-400 text-slate-950 transition-colors"
                      >
                        <MessageSquare className="w-4 h-4" />
                        <span>Open WhatsApp SMS Again</span>
                        <ExternalLink className="w-3.5 h-3.5" />
                      </a>
                    )}
                    <button
                      type="button"
                      onClick={() => setSubmittedSuccessfully(false)}
                      className="w-full sm:w-auto px-4 py-2.5 rounded-xl text-xs font-semibold bg-slate-800 hover:bg-slate-700 text-slate-200 transition-colors cursor-pointer"
                    >
                      Write Another Message
                    </button>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} noValidate className="space-y-4">
                  
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    
                    {/* Name */}
                    <div>
                      <label htmlFor="contact-name" className="block text-xs font-mono text-slate-300 font-semibold mb-1.5">
                        Your Name / Company <span className="text-rose-400">*</span>
                      </label>
                      <input
                        type="text"
                        id="contact-name"
                        value={formData.name}
                        onChange={(e) => {
                          setFormData({ ...formData, name: e.target.value });
                          if (errors.name) setErrors({ ...errors, name: undefined });
                        }}
                        placeholder="e.g. Rahul Sharma / Tech Recruiter"
                        className={`w-full px-3.5 py-2.5 rounded-xl bg-slate-950 text-white text-sm border focus:outline-none transition-colors ${
                          errors.name
                            ? 'border-rose-500 focus:border-rose-400'
                            : 'border-slate-800 focus:border-emerald-500'
                        }`}
                      />
                      {errors.name && (
                        <p className="text-[11px] text-rose-400 mt-1 flex items-center gap-1">
                          <AlertCircle className="w-3 h-3" />
                          {errors.name}
                        </p>
                      )}
                    </div>

                    {/* Email / Phone */}
                    <div>
                      <label htmlFor="contact-email" className="block text-xs font-mono text-slate-300 font-semibold mb-1.5">
                        Your Contact Email / Phone <span className="text-rose-400">*</span>
                      </label>
                      <input
                        type="text"
                        id="contact-email"
                        value={formData.email}
                        onChange={(e) => {
                          setFormData({ ...formData, email: e.target.value });
                          if (errors.email) setErrors({ ...errors, email: undefined });
                        }}
                        placeholder="e.g. recruiter@company.com or +91..."
                        className={`w-full px-3.5 py-2.5 rounded-xl bg-slate-950 text-white text-sm border focus:outline-none transition-colors ${
                          errors.email
                            ? 'border-rose-500 focus:border-rose-400'
                            : 'border-slate-800 focus:border-emerald-500'
                        }`}
                      />
                      {errors.email && (
                        <p className="text-[11px] text-rose-400 mt-1 flex items-center gap-1">
                          <AlertCircle className="w-3 h-3" />
                          {errors.email}
                        </p>
                      )}
                    </div>

                  </div>

                  {/* Subject */}
                  <div>
                    <label htmlFor="contact-subject" className="block text-xs font-mono text-slate-300 font-semibold mb-1.5">
                      Subject <span className="text-rose-400">*</span>
                    </label>
                    <input
                      type="text"
                      id="contact-subject"
                      value={formData.subject}
                      onChange={(e) => {
                        setFormData({ ...formData, subject: e.target.value });
                        if (errors.subject) setErrors({ ...errors, subject: undefined });
                      }}
                      placeholder="e.g. SDE Opportunity / Internship Discussion"
                      className={`w-full px-3.5 py-2.5 rounded-xl bg-slate-950 text-white text-sm border focus:outline-none transition-colors ${
                        errors.subject
                          ? 'border-rose-500 focus:border-rose-400'
                          : 'border-slate-800 focus:border-emerald-500'
                      }`}
                    />
                    {errors.subject && (
                      <p className="text-[11px] text-rose-400 mt-1 flex items-center gap-1">
                        <AlertCircle className="w-3 h-3" />
                        {errors.subject}
                      </p>
                    )}
                  </div>

                  {/* Message */}
                  <div>
                    <label htmlFor="contact-message" className="block text-xs font-mono text-slate-300 font-semibold mb-1.5">
                      Message / SMS Text <span className="text-rose-400">*</span>
                    </label>
                    <textarea
                      id="contact-message"
                      rows={4}
                      value={formData.message}
                      onChange={(e) => {
                        setFormData({ ...formData, message: e.target.value });
                        if (errors.message) setErrors({ ...errors, message: undefined });
                      }}
                      placeholder="Hi Sahil, we loved your background in React, SpringBoot, and Redis and would like to connect..."
                      className={`w-full px-3.5 py-2.5 rounded-xl bg-slate-950 text-white text-sm border focus:outline-none transition-colors resize-none ${
                        errors.message
                          ? 'border-rose-500 focus:border-rose-400'
                          : 'border-slate-800 focus:border-emerald-500'
                      }`}
                    />
                    {errors.message && (
                      <p className="text-[11px] text-rose-400 mt-1 flex items-center gap-1">
                        <AlertCircle className="w-3 h-3" />
                        {errors.message}
                      </p>
                    )}
                  </div>

                  {/* Submit via WhatsApp SMS Button */}
                  <div className="pt-2">
                    <button
                      type="submit"
                      id="contact-submit-btn"
                      disabled={isSubmitting}
                      className="w-full inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl font-bold text-sm bg-gradient-to-r from-emerald-500 to-teal-500 hover:from-emerald-400 hover:to-teal-400 text-slate-950 shadow-lg shadow-emerald-500/20 hover:shadow-emerald-500/30 transition-all cursor-pointer disabled:opacity-50"
                    >
                      {isSubmitting ? (
                        <span className="flex items-center gap-2">
                          <span className="w-4 h-4 border-2 border-slate-950 border-t-transparent rounded-full animate-spin" />
                          <span>Dispatching to WhatsApp...</span>
                        </span>
                      ) : (
                        <>
                          <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                            <path d="M17.472 14.382c-.301-.15-1.78-.878-2.056-.978-.276-.1-.476-.15-.676.15-.2.301-.776.978-.952 1.179-.175.2-.351.226-.652.075-.301-.15-1.27-.468-2.42-1.493-.894-.799-1.498-1.786-1.674-2.087-.175-.3-.019-.462.132-.612.136-.135.301-.35.452-.525.15-.175.2-.3.301-.5.1-.2.05-.376-.025-.526-.075-.15-.676-1.63-.927-2.232-.244-.587-.492-.507-.676-.516-.175-.008-.376-.01-.577-.01-.2 0-.526.075-.802.376-.276.301-1.053 1.028-1.053 2.508 0 1.48 1.078 2.909 1.229 3.11.15.2 2.122 3.24 5.141 4.544.718.31 1.279.496 1.716.635.722.23 1.38.197 1.9.12.579-.087 1.78-.727 2.032-1.43.25-.702.25-1.303.175-1.43-.075-.125-.276-.2-.577-.35zM12.04 2C6.516 2 2.028 6.486 2.028 12.008c0 1.99.585 3.847 1.597 5.414L2 22l4.743-1.57c1.512.935 3.29 1.478 5.297 1.478 5.523 0 10.012-4.486 10.012-10.008C22.052 6.486 17.563 2 12.04 2zm0 18.293c-1.737 0-3.34-.492-4.708-1.344l-.337-.21-2.812.93.94-2.738-.23-.367c-.966-1.543-1.477-3.327-1.477-5.18 0-4.62 3.757-8.375 8.376-8.375 4.618 0 8.375 3.755 8.375 8.375 0 4.62-3.757 8.376-8.375 8.376z" />
                          </svg>
                          <span>Send SMS Directly to WhatsApp (8811902440)</span>
                        </>
                      )}
                    </button>
                    <p className="text-[11px] text-slate-400 text-center mt-2">
                      Instant direct delivery to Sahil's personal WhatsApp: +91 8811902440
                    </p>
                  </div>

                </form>
              )}

            </div>
          </div>

        </div>

      </div>
    </section>
  );
};

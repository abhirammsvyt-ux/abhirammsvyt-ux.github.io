import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Github, Linkedin, Send, ArrowUpRight, CheckCircle2, AlertCircle } from 'lucide-react';
import { PERSONAL_INFO, SOCIAL_LINKS } from '../data/portfolioData';

export const Contact: React.FC = () => {
  const [status, setStatus] = useState<{ type: 'success' | 'error' | 'loading' | null; message: string }>({
    type: null,
    message: '',
  });

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const formData = new FormData(form);

    setStatus({ type: 'loading', message: 'TRANSMITTING MESSAGE...' });

    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: { Accept: 'application/json' },
        body: formData,
      });
      const data = await response.json();

      if (data.success) {
        setStatus({
          type: 'success',
          message: 'THANK YOU! YOUR MESSAGE HAS BEEN TRANSMITTED SUCCESSFULLY.',
        });
        form.reset();
      } else {
        setStatus({
          type: 'error',
          message: data.message || 'TRANSMISSION FAILED. PLEASE TRY AGAIN OR EMAIL DIRECTLY.',
        });
      }
    } catch (err) {
      setStatus({
        type: 'error',
        message: 'NETWORK ERROR. PLEASE EMAIL DIRECTLY TO ABHIRAMMSVYT@GMAIL.COM',
      });
    }
  };

  return (
    <section
      id="contact"
      className="relative bg-white text-black py-24 border-b border-black/10 select-none overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between border-b-2 border-black pb-8 mb-16">
          <div>
            <span className="font-mono text-xs font-bold uppercase tracking-widest text-crimson">
              [ 07 // INITIATE TRANSMISSION ]
            </span>
            <h2 className="font-display text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tighter uppercase mt-2">
              LET'S BUILD <br />
              <span className="text-black">SOMETHING INTELLIGENT.</span>
            </h2>
          </div>
          <div className="mt-4 md:mt-0 font-mono text-xs text-neutral-600 uppercase tracking-widest">
            (RECRUITERS / DEVELOPERS / COLLABORATORS)
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Column: Direct Links & Info */}
          <div className="lg:col-span-5 space-y-8">
            <p className="text-lg text-neutral-800 font-light leading-relaxed">
              Whether you have an upcoming AI/ML engineering role, a research project, or a technical inquiry, feel free to reach out directly.
            </p>

            <div className="space-y-4 border-t-2 border-black pt-6">
              {/* Direct Email with Copy to Clipboard & Gmail Webmail fallback */}
              <button
                type="button"
                onClick={() => {
                  navigator.clipboard.writeText(PERSONAL_INFO.email);
                  setStatus({
                    type: 'success',
                    message: `EMAIL COPIED TO CLIPBOARD: ${PERSONAL_INFO.email}`,
                  });
                  window.open(`https://mail.google.com/mail/?view=cm&fs=1&to=${PERSONAL_INFO.email}`, '_blank');
                }}
                className="w-full text-left group flex items-center justify-between p-4 border border-black/20 bg-neutral-50 hover:bg-black hover:text-white transition-all duration-300 cursor-pointer"
              >
                <div className="flex items-center space-x-3">
                  <Mail className="w-5 h-5 text-crimson" />
                  <div>
                    <div className="font-mono text-[10px] uppercase text-neutral-500 group-hover:text-neutral-400">EMAIL DIRECT (CLICK TO COPY & OPEN GMAIL)</div>
                    <div className="font-mono text-sm font-bold">{PERSONAL_INFO.email}</div>
                  </div>
                </div>
                <ArrowUpRight className="w-4 h-4 text-crimson group-hover:text-white" />
              </button>

              {/* GitHub */}
              <a
                href={PERSONAL_INFO.github}
                target="_blank"
                rel="noreferrer"
                className="group flex items-center justify-between p-4 border border-black/20 bg-neutral-50 hover:bg-black hover:text-white transition-all duration-300"
              >
                <div className="flex items-center space-x-3">
                  <Github className="w-5 h-5 text-crimson" />
                  <div>
                    <div className="font-mono text-[10px] uppercase text-neutral-500 group-hover:text-neutral-400">GITHUB REPOSITORIES</div>
                    <div className="font-mono text-sm font-bold">@abhirammsvyt-ux</div>
                  </div>
                </div>
                <ArrowUpRight className="w-4 h-4 text-crimson group-hover:text-white" />
              </a>

              {/* LinkedIn */}
              <a
                href={PERSONAL_INFO.linkedin}
                target="_blank"
                rel="noreferrer"
                className="group flex items-center justify-between p-4 border border-black/20 bg-neutral-50 hover:bg-black hover:text-white transition-all duration-300"
              >
                <div className="flex items-center space-x-3">
                  <Linkedin className="w-5 h-5 text-crimson" />
                  <div>
                    <div className="font-mono text-[10px] uppercase text-neutral-500 group-hover:text-neutral-400">LINKEDIN NETWORK</div>
                    <div className="font-mono text-sm font-bold">Abhiram M S</div>
                  </div>
                </div>
                <ArrowUpRight className="w-4 h-4 text-crimson group-hover:text-white" />
              </a>
            </div>

            <div className="p-4 border border-black/15 bg-neutral-100 font-mono text-xs text-neutral-700">
              <span className="text-crimson font-bold block mb-1">[CURRENT FOCUS]</span>
              Seeking AI/ML Engineering & Data Science Internships / Full-time Opportunities.
            </div>
          </div>

          {/* Right Column: Web3Forms Contact Form */}
          <div className="lg:col-span-7">
            <form onSubmit={handleSubmit} className="border-2 border-black p-8 bg-neutral-50 space-y-6">
              <input type="hidden" name="access_key" value={PERSONAL_INFO.web3FormsKey} />
              
              <div className="flex items-center justify-between border-b border-black/20 pb-4 mb-4">
                <span className="font-mono text-xs font-bold uppercase tracking-widest text-black">
                  [ DIRECT TRANSMISSION FORM ]
                </span>
                <span className="font-mono text-xs text-crimson font-bold">* ALL FIELDS MANDATORY</span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="font-mono text-xs font-bold uppercase text-black block">
                    FULL NAME
                  </label>
                  <input
                    type="text"
                    name="name"
                    required
                    placeholder="Jane Doe"
                    className="w-full p-3.5 bg-white border border-black/20 text-black font-mono text-sm focus:outline-none focus:border-crimson"
                  />
                </div>

                <div className="space-y-2">
                  <label className="font-mono text-xs font-bold uppercase text-black block">
                    EMAIL ADDRESS
                  </label>
                  <input
                    type="email"
                    name="email"
                    required
                    placeholder="jane@company.com"
                    className="w-full p-3.5 bg-white border border-black/20 text-black font-mono text-sm focus:outline-none focus:border-crimson"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label className="font-mono text-xs font-bold uppercase text-black block">
                  SUBJECT / ROLE
                </label>
                <input
                  type="text"
                  name="subject"
                  required
                  placeholder="AI Engineer Opportunity / Project Inquiry"
                  className="w-full p-3.5 bg-white border border-black/20 text-black font-mono text-sm focus:outline-none focus:border-crimson"
                />
              </div>

              <div className="space-y-2">
                <label className="font-mono text-xs font-bold uppercase text-black block">
                  MESSAGE BODY
                </label>
                <textarea
                  name="message"
                  required
                  rows={5}
                  placeholder="Describe your proposal or inquiry..."
                  className="w-full p-3.5 bg-white border border-black/20 text-black font-mono text-sm focus:outline-none focus:border-crimson resize-none"
                ></textarea>
              </div>

              <button
                type="submit"
                disabled={status.type === 'loading'}
                className="w-full py-4 bg-crimson text-white font-mono text-sm font-bold uppercase tracking-wider hover:bg-black transition-colors duration-300 flex items-center justify-center space-x-2 border border-crimson"
              >
                <Send className="w-4 h-4" />
                <span>{status.type === 'loading' ? 'TRANSMITTING...' : 'TRANSMIT MESSAGE'}</span>
              </button>

              {/* Status Alerts */}
              {status.type && (
                <div
                  className={`p-4 font-mono text-xs font-bold flex items-center space-x-2 ${
                    status.type === 'success'
                      ? 'bg-emerald-950 text-emerald-400 border border-emerald-500'
                      : status.type === 'error'
                      ? 'bg-crimson/10 text-crimson border border-crimson'
                      : 'bg-black text-white border border-black'
                  }`}
                >
                  {status.type === 'success' && <CheckCircle2 className="w-4 h-4 shrink-0 text-emerald-400" />}
                  {status.type === 'error' && <AlertCircle className="w-4 h-4 shrink-0 text-crimson" />}
                  <span>{status.message}</span>
                </div>
              )}
            </form>
          </div>

        </div>

      </div>
    </section>
  );
};

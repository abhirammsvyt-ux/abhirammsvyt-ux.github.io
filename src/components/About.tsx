import React from 'react';
import { motion } from 'framer-motion';
import { PERSONAL_INFO, SPECIALIZATION_PILLARS } from '../data/portfolioData';

export const About: React.FC = () => {
  return (
    <section
      id="about"
      className="relative bg-white text-black py-24 border-b border-black/10 select-none overflow-hidden"
    >
      {/* Corner Identifiers */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header Block */}
        <div className="flex flex-col md:flex-row md:items-end justify-between border-b-2 border-black pb-8 mb-16">
          <div>
            <span className="font-mono text-xs font-bold uppercase tracking-widest text-crimson">
              [ 02 // BACKGROUND & SPECIALIZATION ]
            </span>
            <h2 className="font-display text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tighter uppercase mt-2">
              ENGINEERING <br />
              <span className="text-black">INTELLECT & AI.</span>
            </h2>
          </div>
          <div className="mt-4 md:mt-0 font-mono text-xs text-neutral-600 uppercase tracking-widest">
            (SWISS PRECISION ARCHITECTURE)
          </div>
        </div>

        {/* Two-Column Grid Content */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Bio Text Left Column */}
          <div className="lg:col-span-6 space-y-6">
            <h3 className="font-display text-2xl sm:text-3xl font-bold tracking-tight uppercase leading-snug">
              B.Tech in Artificial Intelligence & Data Science at Vimal Jyothi Engineering College
            </h3>

            <div className="space-y-4 text-base sm:text-lg text-neutral-800 font-light leading-relaxed">
              {PERSONAL_INFO.detailedBio.map((paragraph, index) => (
                <p key={index}>{paragraph}</p>
              ))}
            </div>

            {/* Quick Metrics Grid */}
            <div className="grid grid-cols-2 gap-4 pt-6 border-t border-black/15 font-mono text-xs">
              <div className="p-4 border border-black/15 bg-neutral-50 hover:border-crimson transition-colors">
                <span className="text-crimson font-bold text-lg block">01</span>
                <span className="font-bold uppercase text-black block mt-1">ACADEMIC ALIGNMENT</span>
                <span className="text-neutral-600 text-[11px] block mt-0.5">Vimal Jyothi Engineering College</span>
              </div>
              <div className="p-4 border border-black/15 bg-neutral-50 hover:border-crimson transition-colors">
                <span className="text-crimson font-bold text-lg block">02</span>
                <span className="font-bold uppercase text-black block mt-1">LEADERSHIP ROLE</span>
                <span className="text-neutral-600 text-[11px] block mt-0.5">Secretary – IEEE Computer Society</span>
              </div>
            </div>
          </div>

          {/* Core Specialization Pillars Grid Right Column */}
          <div className="lg:col-span-6">
            <div className="border-2 border-black p-6 sm:p-8 bg-neutral-50">
              <div className="flex items-center justify-between border-b border-black/20 pb-4 mb-6">
                <span className="font-mono text-xs font-bold uppercase tracking-widest text-black">
                  [ CORE INTERESTS & DOMAINS ]
                </span>
                <span className="font-mono text-xs text-crimson font-bold">8 PILLARS</span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {SPECIALIZATION_PILLARS.map((pillar) => (
                  <div
                    key={pillar.count}
                    className="p-3.5 border border-black/15 bg-white hover:bg-black hover:text-white group transition-all duration-300 flex items-center justify-between cursor-default"
                  >
                    <span className="font-display font-bold text-sm sm:text-base tracking-tight uppercase">
                      {pillar.title}
                    </span>
                    <span className="font-mono text-xs text-crimson group-hover:text-white font-bold ml-2">
                      {pillar.count}
                    </span>
                  </div>
                ))}
              </div>

              {/* Bottom Note */}
              <div className="mt-6 pt-4 border-t border-black/15 font-mono text-[11px] text-neutral-600 uppercase flex items-center justify-between">
                <span>[STACK: PYTHON / DL / AGENTIC AI]</span>
                <span className="text-crimson font-bold">SWISS MINIMALISM</span>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

import React from 'react';
import { motion } from 'framer-motion';
import { EDUCATION } from '../data/portfolioData';
import { GraduationCap, CheckCircle2 } from 'lucide-react';

export const Education: React.FC = () => {
  return (
    <section
      id="education"
      className="relative bg-white text-black py-20 border-b border-black/10 select-none overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between border-b-2 border-black pb-8 mb-12">
          <div>
            <span className="font-mono text-xs font-bold uppercase tracking-widest text-crimson">
              [ ACADEMIC FOUNDATION ]
            </span>
            <h2 className="font-display text-4xl sm:text-5xl font-extrabold tracking-tighter uppercase mt-2">
              EDUCATION.
            </h2>
          </div>
          <div className="mt-4 md:mt-0 font-mono text-xs text-neutral-600 uppercase tracking-widest">
            (B.TECH ARTIFICIAL INTELLIGENCE & DATA SCIENCE)
          </div>
        </div>

        {/* Education Timeline Block */}
        <div className="space-y-8">
          {EDUCATION.map((edu, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="border-2 border-black p-8 bg-neutral-50 relative"
            >
              <div className="flex flex-col md:flex-row md:items-center justify-between border-b border-black/20 pb-6 mb-6">
                <div>
                  <div className="flex items-center space-x-2 font-mono text-xs text-crimson font-bold uppercase tracking-widest mb-1">
                    <GraduationCap className="w-4 h-4" />
                    <span>{edu.period}</span>
                  </div>
                  <h3 className="font-display text-2xl sm:text-3xl font-extrabold uppercase tracking-tight text-black">
                    {edu.degree}
                  </h3>
                  <p className="font-mono text-base font-bold text-neutral-800 mt-1">
                    {edu.institution} <span className="text-neutral-500 font-normal">| {edu.location}</span>
                  </p>
                </div>
              </div>

              {/* Coursework Focus */}
              <div className="space-y-3">
                <h4 className="font-mono text-xs font-bold uppercase tracking-widest text-black">
                  [ ACADEMIC FOCUS & SPECIALIZATION ]
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3 font-mono text-xs">
                  {edu.focusAreas.map((area, aIdx) => (
                    <div
                      key={aIdx}
                      className="p-3 bg-white border border-black/15 flex items-center space-x-2 text-neutral-900"
                    >
                      <CheckCircle2 className="w-3.5 h-3.5 text-crimson shrink-0" />
                      <span>{area}</span>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};

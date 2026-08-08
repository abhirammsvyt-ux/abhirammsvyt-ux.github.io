import React from 'react';
import { motion } from 'framer-motion';
import { EXPERIENCES } from '../data/portfolioData';
import { Briefcase, CheckCircle2 } from 'lucide-react';

export const Experience: React.FC = () => {
  return (
    <section
      id="experience"
      className="relative bg-white text-black py-24 border-b border-black/10 select-none overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between border-b-2 border-black pb-8 mb-16">
          <div>
            <span className="font-mono text-xs font-bold uppercase tracking-widest text-crimson">
              [ 05 // PROFESSIONAL EXPERIENCE ]
            </span>
            <h2 className="font-display text-4xl sm:text-6xl font-extrabold tracking-tighter uppercase mt-2">
              INDUSTRY INTERNSHIP.
            </h2>
          </div>
          <div className="mt-4 md:mt-0 font-mono text-xs text-neutral-600 uppercase tracking-widest">
            (PRACTICAL ENGINEERING)
          </div>
        </div>

        {/* Timeline Block Layout */}
        <div className="space-y-12">
          {EXPERIENCES.map((exp) => (
            <motion.div
              key={exp.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="border-2 border-black p-8 bg-neutral-50 hover:bg-neutral-100 transition-colors relative"
            >
              {/* Top Bar */}
              <div className="flex flex-col md:flex-row md:items-center justify-between border-b border-black/20 pb-6 mb-6">
                <div>
                  <div className="flex items-center space-x-2 font-mono text-xs text-crimson font-bold uppercase tracking-widest mb-1">
                    <Briefcase className="w-4 h-4" />
                    <span>{exp.type}</span>
                  </div>
                  <h3 className="font-display text-3xl font-extrabold uppercase tracking-tight text-black">
                    {exp.role}
                  </h3>
                  <p className="font-mono text-base font-bold text-neutral-800 mt-1">
                    {exp.company} <span className="text-neutral-500 font-normal">| {exp.location}</span>
                  </p>
                </div>

                <div className="mt-4 md:mt-0 px-4 py-2 bg-black text-white font-mono text-xs font-bold uppercase self-start md:self-auto">
                  {exp.period}
                </div>
              </div>

              {/* Responsibilities List */}
              <div className="space-y-3 font-mono text-xs sm:text-sm text-neutral-800">
                {exp.description.map((item, i) => (
                  <div key={i} className="flex items-start space-x-3">
                    <CheckCircle2 className="w-4 h-4 text-crimson shrink-0 mt-0.5" />
                    <span className="leading-relaxed">{item}</span>
                  </div>
                ))}
              </div>

              {/* Skills Tags */}
              <div className="mt-8 pt-6 border-t border-black/15 flex flex-wrap gap-2">
                {exp.skills.map((skill) => (
                  <span
                    key={skill}
                    className="px-3 py-1 bg-white border border-black/20 text-black font-mono text-xs font-semibold"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};

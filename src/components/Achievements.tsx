import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ACHIEVEMENTS } from '../data/portfolioData';
import { Award, ChevronDown, ChevronUp, ShieldCheck } from 'lucide-react';

export const Achievements: React.FC = () => {
  const [expandedIdx, setExpandedIdx] = useState<number | null>(0);

  const toggleExpand = (idx: number) => {
    setExpandedIdx(expandedIdx === idx ? null : idx);
  };

  return (
    <section
      id="achievements"
      className="relative bg-black text-white py-24 border-b border-white/10 crosshair overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between border-b border-white/20 pb-8 mb-12">
          <div>
            <span className="font-mono text-xs font-bold uppercase tracking-widest text-crimson">
              [ TECHNICAL LEADERSHIP & COMMUNITY ]
            </span>
            <h2 className="font-display text-4xl sm:text-6xl font-extrabold tracking-tighter uppercase mt-2">
              ACHIEVEMENTS.
            </h2>
          </div>
          <div className="mt-4 md:mt-0 font-mono text-xs text-neutral-400 uppercase tracking-widest">
            (IEEE LEADERSHIP & SPEAKER INITIATIVES)
          </div>
        </div>

        {/* Achievements Accordion Grid */}
        <div className="space-y-4">
          {ACHIEVEMENTS.map((item, idx) => {
            const isExpanded = expandedIdx === idx;
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.08 }}
                className="border border-white/15 bg-neutral-950 hover:border-crimson transition-all duration-300 overflow-hidden"
              >
                {/* Header Row */}
                <button
                  onClick={() => toggleExpand(idx)}
                  className="w-full p-6 text-left flex items-center justify-between focus:outline-none"
                >
                  <div className="flex items-center space-x-4">
                    <span className="font-mono text-xs text-crimson font-bold">
                      [{String(idx + 1).padStart(2, '0')}]
                    </span>
                    <div>
                      <div className="flex items-center space-x-2 font-mono text-[10px] text-neutral-400 uppercase tracking-widest">
                        <span>{item.tag}</span>
                        <span>•</span>
                        <span>{item.organization}</span>
                      </div>
                      <h3 className="font-display text-xl sm:text-2xl font-bold uppercase tracking-tight text-white mt-1">
                        {item.title}
                      </h3>
                    </div>
                  </div>

                  <div className="flex items-center space-x-3">
                    <span className="hidden sm:inline-block font-mono text-xs text-neutral-400 uppercase">
                      {item.role}
                    </span>
                    <div className="p-2 border border-white/10 text-neutral-400 hover:text-crimson">
                      {isExpanded ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
                    </div>
                  </div>
                </button>

                {/* Expanded Content */}
                {isExpanded && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.3 }}
                    className="px-6 pb-6 pt-2 border-t border-white/10 font-mono text-xs text-neutral-300 space-y-3"
                  >
                    <p className="leading-relaxed">{item.description}</p>
                    <div className="pt-2 flex items-center justify-between text-[10px] text-neutral-500 uppercase border-t border-white/5">
                      <span>ORGANIZATION: {item.organization}</span>
                      <span className="text-crimson font-bold">[VERIFIED IEEE RECORD]</span>
                    </div>
                  </motion.div>
                )}
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
};

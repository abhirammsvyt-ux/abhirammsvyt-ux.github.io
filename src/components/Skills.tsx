import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { SKILL_CATEGORIES } from '../data/portfolioData';

export const Skills: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<string>('All');

  const categories = ['All', ...SKILL_CATEGORIES.map((c) => c.category)];

  const filteredCategories =
    activeCategory === 'All'
      ? SKILL_CATEGORIES
      : SKILL_CATEGORIES.filter((c) => c.category === activeCategory);

  return (
    <section
      id="skills"
      className="relative bg-black text-white py-24 border-b border-white/10 crosshair overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between border-b border-white/20 pb-8 mb-12">
          <div>
            <span className="font-mono text-xs font-bold uppercase tracking-widest text-crimson">
              [ 03 // SKILLS & TECHNICAL PROFICIENCY ]
            </span>
            <h2 className="font-display text-4xl sm:text-6xl font-extrabold tracking-tighter uppercase mt-2">
              TECHNICAL MATRIX.
            </h2>
          </div>

          {/* Category Selector Tabs */}
          <div className="mt-6 md:mt-0 flex flex-wrap gap-2 font-mono text-xs">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-4 py-2 uppercase font-bold transition-all duration-200 border ${
                  activeCategory === cat
                    ? 'bg-crimson text-white border-crimson'
                    : 'bg-neutral-950 text-neutral-400 border-white/15 hover:border-white hover:text-white'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Skills Categories Display */}
        <div className="space-y-12">
          {filteredCategories.map((group) => (
            <div key={group.category} className="space-y-4">
              <div className="flex items-center space-x-3 font-mono text-xs uppercase tracking-widest text-neutral-400 border-b border-white/10 pb-2">
                <span className="text-crimson font-bold">///</span>
                <span className="text-white font-bold">{group.category}</span>
                <span className="text-neutral-600">({group.skills.length} MODULES)</span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                {group.skills.map((skill) => (
                  <motion.div
                    key={skill.name}
                    whileHover={{ y: -3 }}
                    transition={{ duration: 0.2 }}
                    className="p-5 bg-neutral-950 border border-white/10 hover:border-crimson transition-all duration-300 relative group flex flex-col justify-between"
                  >
                    {/* Corner Crosshair visual */}
                    <span className="absolute top-2 right-2 font-mono text-[10px] text-white/20 group-hover:text-crimson transition-colors">
                      +
                    </span>

                    <div>
                      <div className="flex items-center justify-between">
                        <h4 className="font-display text-lg font-bold tracking-tight text-white group-hover:text-crimson transition-colors">
                          {skill.name}
                        </h4>
                      </div>

                      {skill.tag && (
                        <p className="font-mono text-xs text-neutral-400 mt-1">
                          {skill.tag}
                        </p>
                      )}
                    </div>

                    <div className="mt-4 pt-3 border-t border-white/10 flex items-center justify-between font-mono text-[10px]">
                      <span className="text-neutral-500 uppercase">PROFICIENCY</span>
                      <span className="text-crimson font-bold uppercase">
                        {skill.level || 'ADVANCED'}
                      </span>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

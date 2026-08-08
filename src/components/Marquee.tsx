import React from 'react';

export const Marquee: React.FC = () => {
  const marqueeItems = [
    'AI & DATA SCIENCE ENGINEER',
    'MACHINE LEARNING',
    'DEEP LEARNING',
    'GENERATIVE AI',
    'AGENTIC AI',
    'PYTHON DEVELOPER',
    'NATURAL LANGUAGE PROCESSING',
    'COMPUTER VISION',
    'RAG & LLMS',
    'REACT & TAILWIND',
  ];

  return (
    <div className="w-full bg-crimson text-white py-3 overflow-hidden select-none border-y border-crimson-dark">
      <div className="flex w-max animate-marquee whitespace-nowrap">
        {[...marqueeItems, ...marqueeItems, ...marqueeItems, ...marqueeItems].map((item, idx) => (
          <div key={idx} className="flex items-center mx-6 font-mono text-xs sm:text-sm font-bold tracking-widest uppercase">
            <span>{item}</span>
            <span className="ml-6 text-black font-black">✦</span>
          </div>
        ))}
      </div>
    </div>
  );
};

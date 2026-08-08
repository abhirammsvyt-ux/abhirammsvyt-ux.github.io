import React from 'react';
import { ArrowUp } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative bg-black text-white py-12 crosshair overflow-hidden border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 font-mono text-xs text-neutral-400">
          
          {/* Copyright */}
          <div className="flex items-center space-x-3">
            <span className="w-2 h-2 bg-crimson inline-block"></span>
            <span>© {new Date().getFullYear()} ABHIRAM M S — ALL RIGHTS RESERVED</span>
          </div>

          {/* Quick Info */}
          <div className="text-center md:text-left text-[11px] text-neutral-500">
            <span>SWISS MINIMALIST SYSTEM // REACT + TYPESCRIPT + TAILWIND</span>
          </div>

          {/* Back to Top */}
          <button
            onClick={scrollToTop}
            className="flex items-center space-x-2 px-4 py-2 border border-white/15 bg-neutral-950 text-white font-bold uppercase hover:border-crimson hover:text-crimson transition-all"
          >
            <span>TOP OF PAGE</span>
            <ArrowUp className="w-3.5 h-3.5 text-crimson" />
          </button>

        </div>
      </div>
    </footer>
  );
};

import React from 'react';
import { motion } from 'framer-motion';
import { Github, ArrowUpRight, Code, GitCommit, Star, GitFork } from 'lucide-react';
import { GITHUB_STATS } from '../data/portfolioData';

export const GithubSection: React.FC = () => {
  // Generate 52 weeks * 7 days simulation grid for contribution visualization
  const generateContributionMatrix = () => {
    const matrix = [];
    for (let i = 0; i < 28; i++) {
      const row = [];
      for (let j = 0; j < 7; j++) {
        // Create realistic random distribution of contribution intensity
        const intensity = Math.random() > 0.4 ? Math.floor(Math.random() * 4) + 1 : 0;
        row.push(intensity);
      }
      matrix.push(row);
    }
    return matrix;
  };

  const contributionMatrix = generateContributionMatrix();

  const getCellColor = (level: number) => {
    switch (level) {
      case 1:
        return 'bg-neutral-800';
      case 2:
        return 'bg-crimson/40';
      case 3:
        return 'bg-crimson/70';
      case 4:
        return 'bg-crimson';
      default:
        return 'bg-neutral-950 border border-white/5';
    }
  };

  return (
    <section
      id="github"
      className="relative bg-black text-white py-24 border-b border-white/10 crosshair overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between border-b border-white/20 pb-8 mb-12">
          <div>
            <span className="font-mono text-xs font-bold uppercase tracking-widest text-crimson">
              [ 06 // OPEN SOURCE & REPOSITORIES ]
            </span>
            <h2 className="font-display text-4xl sm:text-6xl font-extrabold tracking-tighter uppercase mt-2">
              GITHUB ECOSYSTEM.
            </h2>
          </div>

          <a
            href={GITHUB_STATS.profileUrl}
            target="_blank"
            rel="noreferrer"
            className="mt-4 md:mt-0 inline-flex items-center space-x-2 px-6 py-3 bg-white text-black font-mono text-xs font-bold uppercase tracking-wider hover:bg-crimson hover:text-white transition-all duration-300"
          >
            <Github className="w-4 h-4" />
            <span>@abhirammsvyt-ux</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </a>
        </div>

        {/* Callout Quote Box */}
        <div className="p-8 border-2 border-white/20 bg-neutral-950 mb-8 relative">
          <span className="absolute -top-3 left-6 bg-black px-3 font-mono text-xs text-crimson font-bold">
            [ PHILOSOPHY ]
          </span>
          <p className="font-display text-2xl sm:text-4xl font-extrabold tracking-tight text-white uppercase italic">
            "{GITHUB_STATS.tagline}"
          </p>
          <div className="mt-4 font-mono text-xs text-neutral-400">
            CONTRIBUTING TO OPEN SOURCE, MACHINE LEARNING EXPERIMENTS & DEEP LEARNING ARCHITECTURES.
          </div>
        </div>

        {/* Contribution Visualization Card */}
        <div className="border border-white/15 bg-neutral-950 p-6 sm:p-8 space-y-6">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between border-b border-white/10 pb-4">
            <div className="flex items-center space-x-3 font-mono text-xs">
              <GitCommit className="w-4 h-4 text-crimson" />
              <span className="text-white font-bold">CONTRIBUTION ACTIVITY GRAPH</span>
              <span className="text-neutral-500">({GITHUB_STATS.contributionsThisYear}+ COMMITS)</span>
            </div>
            
            <div className="flex items-center space-x-2 font-mono text-[10px] text-neutral-400 mt-2 sm:mt-0">
              <span>LESS</span>
              <div className="w-2.5 h-2.5 bg-neutral-950 border border-white/10"></div>
              <div className="w-2.5 h-2.5 bg-neutral-800"></div>
              <div className="w-2.5 h-2.5 bg-crimson/40"></div>
              <div className="w-2.5 h-2.5 bg-crimson/70"></div>
              <div className="w-2.5 h-2.5 bg-crimson"></div>
              <span>MORE</span>
            </div>
          </div>

          {/* Matrix Grid Overflow Container */}
          <div className="overflow-x-auto pb-2">
            <div className="flex space-x-1.5 min-w-max">
              {contributionMatrix.map((col, cIdx) => (
                <div key={cIdx} className="flex flex-col space-y-1.5">
                  {col.map((intensity, rIdx) => (
                    <div
                      key={rIdx}
                      className={`w-3.5 h-3.5 ${getCellColor(intensity)} transition-colors duration-200 hover:border-white`}
                      title={`Activity level: ${intensity}`}
                    />
                  ))}
                </div>
              ))}
            </div>
          </div>

          {/* Favorite Stack Highlights */}
          <div className="pt-4 border-t border-white/10 flex flex-col sm:flex-row sm:items-center justify-between font-mono text-xs text-neutral-400">
            <span>CORE REPO STACK: {GITHUB_STATS.favoriteStack.join(' // ')}</span>
            <a
              href={GITHUB_STATS.profileUrl}
              target="_blank"
              rel="noreferrer"
              className="text-crimson font-bold hover:underline mt-2 sm:mt-0"
            >
              VISIT FULL GITHUB PROFILE →
            </a>
          </div>
        </div>

      </div>
    </section>
  );
};

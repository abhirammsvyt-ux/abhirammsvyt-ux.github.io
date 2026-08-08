import React from 'react';
import { motion } from 'framer-motion';
import { ArrowDownRight, Github, Linkedin, Mail, Code, Terminal, Sparkles } from 'lucide-react';
import { PERSONAL_INFO, SOCIAL_LINKS } from '../data/portfolioData';

export const Hero: React.FC = () => {
  const scrollToProjects = () => {
    document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section
      id="home"
      className="relative min-h-screen pt-28 pb-16 bg-black text-white flex flex-col justify-between crosshair overflow-hidden border-b border-white/10"
    >
      {/* Corner Crosshairs */}
      <div className="absolute top-6 left-6 text-white/30 font-mono text-xs hidden sm:block">+ 01 / 06</div>
      <div className="absolute top-6 right-6 text-white/30 font-mono text-xs hidden sm:block">+ KERALA, IN</div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full my-auto py-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Main Typography Column */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-8 space-y-6"
          >
            {/* Micro-copy tag */}
            <div className="inline-flex items-center space-x-2 font-mono text-xs uppercase tracking-widest text-neutral-400 border border-white/15 px-3 py-1 bg-neutral-950">
              <span className="w-2 h-2 bg-crimson inline-block"></span>
              <span>[ AI & DATA SCIENCE ENGINEER ]</span>
            </div>

            {/* Oversized Main Title */}
            <div className="space-y-2">
              <h1 className="font-display text-5xl sm:text-7xl md:text-8xl lg:text-9xl font-black tracking-tighter leading-[0.95] text-white">
                Hi, I'm <br />
                <span className="text-white relative inline-block">
                  Abhiram.
                  <span className="absolute bottom-1 left-0 w-full h-2 bg-crimson -z-10 opacity-80"></span>
                </span>
              </h1>
            </div>

            {/* Sub-headline */}
            <p className="font-mono text-xl sm:text-2xl font-bold text-crimson uppercase tracking-wide">
              {PERSONAL_INFO.title}
            </p>

            {/* Intro text */}
            <p className="text-lg sm:text-xl text-neutral-300 max-w-2xl font-light leading-relaxed">
              {PERSONAL_INFO.subtitle}
            </p>

            {/* Call To Action Buttons */}
            <div className="pt-6 flex flex-wrap items-center gap-4">
              <button
                onClick={scrollToProjects}
                className="group relative inline-flex items-center space-x-3 px-8 py-4 bg-crimson text-white font-mono text-sm font-bold tracking-wider uppercase overflow-hidden transition-all duration-300 hover:bg-white hover:text-black border border-crimson"
              >
                <span>View Projects</span>
                <ArrowDownRight className="w-4 h-4 transition-transform group-hover:translate-x-1 group-hover:translate-y-1" />
              </button>

              <button
                onClick={scrollToContact}
                className="inline-flex items-center space-x-2 px-8 py-4 bg-transparent text-white font-mono text-sm font-bold tracking-wider uppercase border border-white/20 hover:border-crimson hover:text-crimson transition-all duration-300"
              >
                <span>Get In Touch</span>
              </button>
            </div>

            {/* Social Icons Bar */}
            <div className="pt-8 flex items-center space-x-6 border-t border-white/10 font-mono text-xs text-neutral-400">
              <span className="text-neutral-500 uppercase tracking-widest">[CONNECT]</span>
              <a
                href={PERSONAL_INFO.github}
                target="_blank"
                rel="noreferrer"
                className="flex items-center space-x-1 hover:text-crimson transition-colors"
              >
                <Github className="w-4 h-4" />
                <span>GITHUB</span>
              </a>
              <a
                href={PERSONAL_INFO.linkedin}
                target="_blank"
                rel="noreferrer"
                className="flex items-center space-x-1 hover:text-crimson transition-colors"
              >
                <Linkedin className="w-4 h-4" />
                <span>LINKEDIN</span>
              </a>
              <a
                href={`mailto:${PERSONAL_INFO.email}`}
                className="flex items-center space-x-1 hover:text-crimson transition-colors"
              >
                <Mail className="w-4 h-4" />
                <span>EMAIL</span>
              </a>
            </div>
          </motion.div>

          {/* Moody Cinematic Portrait Box */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.9, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-4 relative"
          >
            <div className="relative border-2 border-white/20 bg-neutral-950 p-3 group hover:border-crimson transition-colors duration-500">
              {/* Corner crosshairs on card */}
              <span className="absolute -top-3 -left-3 font-mono text-xs text-crimson">+</span>
              <span className="absolute -bottom-3 -right-3 font-mono text-xs text-crimson">+</span>

              <div className="relative aspect-[3/4] overflow-hidden bg-neutral-900 filter grayscale contrast-125 hover:grayscale-0 transition-all duration-700">
                <img
                  src={PERSONAL_INFO.avatarImage}
                  alt={PERSONAL_INFO.name}
                  className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700"
                  onError={(e) => {
                    // Fallback visual if image load fails
                    e.currentTarget.src = 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=800&q=80';
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-80"></div>
                
                {/* Overlay Badge */}
                <div className="absolute bottom-4 left-4 right-4 p-3 bg-black/90 border border-white/10 backdrop-blur-sm font-mono text-xs">
                  <div className="text-crimson font-bold uppercase">{PERSONAL_INFO.name}</div>
                  <div className="text-neutral-400 text-[10px]">Vimal Jyothi Eng. College</div>
                </div>
              </div>

              {/* Bottom Card Copy */}
              <div className="mt-3 flex items-center justify-between font-mono text-[10px] text-neutral-400 uppercase tracking-widest px-1">
                <span>[B.TECH AI & DS]</span>
                <span className="text-crimson font-bold">FOCUS: ML / GEN AI</span>
              </div>
            </div>
          </motion.div>

        </div>
      </div>

      {/* Scroll Down Indicator */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full pt-4 flex justify-between items-center font-mono text-xs text-neutral-500 border-t border-white/10">
        <span>[01 / SCROLL TO EXPLORE]</span>
        <span className="animate-bounce">↓</span>
      </div>
    </section>
  );
};

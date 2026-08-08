import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ArrowUpRight } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

interface NavbarProps {
  activeSection: string;
}

export const Navbar: React.FC<NavbarProps> = ({ activeSection }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [currentTime, setCurrentTime] = useState('');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);
    };
    window.addEventListener('scroll', handleScroll);

    const updateClock = () => {
      const now = new Date();
      const timeStr = now.toLocaleTimeString('en-US', {
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        hour12: false,
      });
      setCurrentTime(`${timeStr} IST`);
    };
    updateClock();
    const interval = setInterval(updateClock, 1000);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      clearInterval(interval);
    };
  }, []);

  const navItems = [
    { id: 'home', label: '01 // HOME' },
    { id: 'about', label: '02 // ABOUT' },
    { id: 'skills', label: '03 // SKILLS' },
    { id: 'projects', label: '04 // PROJECTS' },
    { id: 'experience', label: '05 // EXP' },
    { id: 'contact', label: '06 // CONTACT' },
  ];

  const scrollToSection = (id: string) => {
    setMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? 'bg-black/90 backdrop-blur-md border-b border-white/10 py-3'
            : 'bg-transparent py-5'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          {/* Logo & Status */}
          <button
            onClick={() => scrollToSection('home')}
            className="flex items-center space-x-3 text-left group"
          >
            <span className="font-display text-lg font-extrabold tracking-tighter text-white group-hover:text-crimson transition-colors">
              ABHIRAM <span className="text-crimson font-mono">M S</span>
            </span>
            <div className="hidden sm:flex items-center space-x-2 border-l border-white/15 pl-3">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-crimson opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-crimson"></span>
              </span>
              <span className="font-mono text-[10px] uppercase tracking-widest text-neutral-400">
                {PERSONAL_INFO.status}
              </span>
            </div>
          </button>

          {/* Desktop Nav Items */}
          <nav className="hidden lg:flex items-center space-x-6 font-mono text-xs tracking-wider">
            {navItems.map((item) => {
              const isActive = activeSection === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`transition-colors duration-200 py-1 ${
                    isActive
                      ? 'text-crimson font-bold border-b border-crimson'
                      : 'text-neutral-400 hover:text-white'
                  }`}
                >
                  {item.label}
                </button>
              );
            })}
          </nav>

          {/* Clock & Action */}
          <div className="hidden md:flex items-center space-x-4">
            <span className="font-mono text-xs text-neutral-400 border border-white/10 px-2.5 py-1 rounded-none">
              {currentTime || 'KERALA, IN'}
            </span>
            <a
              href={PERSONAL_INFO.github}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center space-x-1 font-mono text-xs uppercase px-3 py-1 bg-white text-black font-semibold hover:bg-crimson hover:text-white transition-all duration-200"
            >
              <span>GitHub</span>
              <ArrowUpRight className="w-3 h-3" />
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 text-neutral-300 hover:text-white focus:outline-none"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6 text-crimson" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </header>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: '-100%' }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: '-100%' }}
            transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="fixed inset-0 z-40 bg-black flex flex-col justify-between p-6 pt-24 border-b border-white/20"
          >
            <div className="flex flex-col space-y-6">
              <span className="font-mono text-xs text-crimson uppercase tracking-widest">
                [ NAVIGATION MENU ]
              </span>
              <div className="flex flex-col space-y-4">
                {navItems.map((item) => (
                  <button
                    key={item.id}
                    onClick={() => scrollToSection(item.id)}
                    className="text-left font-display text-2xl font-bold text-white hover:text-crimson tracking-tight transition-colors"
                  >
                    {item.label}
                  </button>
                ))}
              </div>
            </div>

            <div className="border-t border-white/10 pt-6 flex flex-col space-y-4 font-mono text-xs text-neutral-400">
              <div className="flex items-center justify-between">
                <span>STATUS</span>
                <span className="text-crimson font-bold">{PERSONAL_INFO.status}</span>
              </div>
              <div className="flex justify-between items-center pt-2">
                <a
                  href={PERSONAL_INFO.github}
                  target="_blank"
                  rel="noreferrer"
                  className="text-white hover:text-crimson"
                >
                  GitHub →
                </a>
                <a
                  href={PERSONAL_INFO.linkedin}
                  target="_blank"
                  rel="noreferrer"
                  className="text-white hover:text-crimson"
                >
                  LinkedIn →
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

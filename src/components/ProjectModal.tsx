import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ExternalLink, Github, CheckCircle2, Layers } from 'lucide-react';
import { Project } from '../types';

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({ project, onClose }) => {
  if (!project) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 lg:p-8 bg-black/80 backdrop-blur-md">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.95 }}
          transition={{ duration: 0.2 }}
          className="relative w-full max-w-4xl max-h-[90vh] overflow-y-auto bg-neutral-950 border-2 border-white/20 p-6 sm:p-8 text-white shadow-2xl"
        >
          {/* Close Button */}
          <button
            onClick={onClose}
            className="absolute top-4 right-4 p-2 bg-neutral-900 border border-white/20 text-neutral-400 hover:text-white hover:border-crimson hover:bg-crimson transition-all"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>

          {/* Modal Header */}
          <div className="space-y-3 pr-8 border-b border-white/10 pb-6">
            <div className="flex items-center space-x-3 font-mono text-xs text-crimson font-bold uppercase tracking-widest">
              <span>[ PROJECT SPECIFICATION ]</span>
              <span>•</span>
              <span className="text-white">{project.category}</span>
            </div>
            <h3 className="font-display text-2xl sm:text-4xl font-extrabold uppercase tracking-tight text-white">
              {project.title}
            </h3>
            {project.metrics && (
              <div className="inline-block px-3 py-1 bg-crimson/20 border border-crimson text-crimson font-mono text-xs font-bold">
                METRIC: {project.metrics}
              </div>
            )}
          </div>

          {/* Project Image */}
          <div className="my-6 relative aspect-video overflow-hidden border border-white/15 bg-neutral-900">
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-full object-cover"
              onError={(e) => {
                e.currentTarget.src = 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=1200&q=80';
              }}
            />
          </div>

          {/* Project Details Grid */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 my-6">
            <div className="md:col-span-8 space-y-4">
              <h4 className="font-mono text-xs text-neutral-400 uppercase tracking-widest">
                [ OVERVIEW & ARCHITECTURE ]
              </h4>
              <p className="text-neutral-300 font-light text-base leading-relaxed">
                {project.fullDescription}
              </p>

              {/* Key Features List */}
              <div className="pt-4 space-y-3">
                <h4 className="font-mono text-xs text-crimson uppercase tracking-widest font-bold flex items-center space-x-2">
                  <Layers className="w-4 h-4" />
                  <span>KEY SYSTEM FEATURES</span>
                </h4>
                <ul className="space-y-2 font-mono text-xs text-neutral-300">
                  {project.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start space-x-2 bg-neutral-900/60 p-2.5 border border-white/5">
                      <CheckCircle2 className="w-4 h-4 text-crimson shrink-0 mt-0.5" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Tech Stack Sidebar */}
            <div className="md:col-span-4 space-y-6 bg-neutral-900/50 p-5 border border-white/10">
              <div>
                <h4 className="font-mono text-xs text-neutral-400 uppercase tracking-widest mb-3">
                  [ TECHNOLOGIES USED ]
                </h4>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-2.5 py-1 bg-black border border-white/15 text-white font-mono text-xs"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Action Buttons */}
              <div className="space-y-3 pt-4 border-t border-white/10">
                {project.githubUrl && (
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center justify-center space-x-2 w-full py-3 bg-white text-black font-mono text-xs font-bold uppercase hover:bg-crimson hover:text-white transition-all"
                  >
                    <Github className="w-4 h-4" />
                    <span>Explore Codebase</span>
                  </a>
                )}
                {project.liveUrl && (
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center justify-center space-x-2 w-full py-3 bg-crimson text-white font-mono text-xs font-bold uppercase hover:bg-white hover:text-black transition-all"
                  >
                    <ExternalLink className="w-4 h-4" />
                    <span>Launch Live Demo</span>
                  </a>
                )}
              </div>
            </div>
          </div>

          {/* Footer Note */}
          <div className="pt-4 border-t border-white/10 flex items-center justify-between font-mono text-[10px] text-neutral-500">
            <span>[ABHIRAM M S PORTFOLIO SPEC]</span>
            <button onClick={onClose} className="hover:text-crimson">
              [CLOSE WINDOW]
            </button>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};

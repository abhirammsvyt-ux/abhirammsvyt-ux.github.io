import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Github, ExternalLink, ArrowUpRight, CheckCircle2, Eye } from 'lucide-react';
import { PROJECTS } from '../data/portfolioData';
import { Project } from '../types';
import { ProjectModal } from './ProjectModal';

export const Projects: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState<string>('All');
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const filterOptions = ['All', 'AI / NLP', 'Machine Learning'];

  const filteredProjects =
    activeFilter === 'All'
      ? PROJECTS
      : PROJECTS.filter((p) => p.category === activeFilter);

  return (
    <section
      id="projects"
      className="relative bg-black text-white py-24 border-b border-white/10 crosshair overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header Block */}
        <div className="flex flex-col md:flex-row md:items-end justify-between border-b border-white/20 pb-8 mb-12">
          <div>
            <span className="font-mono text-xs font-bold uppercase tracking-widest text-crimson">
              [ 04 // FEATURED ENGINEERING PROJECTS ]
            </span>
            <h2 className="font-display text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tighter uppercase mt-2">
              SELECTED WORKS.
            </h2>
          </div>

          {/* Filter Buttons */}
          <div className="mt-6 md:mt-0 flex flex-wrap gap-2 font-mono text-xs">
            {filterOptions.map((filter) => (
              <button
                key={filter}
                onClick={() => setActiveFilter(filter)}
                className={`px-4 py-2 uppercase font-bold transition-all duration-200 border ${
                  activeFilter === filter
                    ? 'bg-crimson text-white border-crimson'
                    : 'bg-neutral-950 text-neutral-400 border-white/15 hover:border-white hover:text-white'
                }`}
              >
                {filter}
              </button>
            ))}
          </div>
        </div>

        {/* Featured Project Showcase Grid */}
        <div className="space-y-12">
          {filteredProjects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group relative border-2 border-white/15 bg-neutral-950 hover:border-crimson transition-all duration-500 overflow-hidden"
            >
              {/* Corner indicators */}
              <div className="absolute top-3 right-3 font-mono text-xs text-white/30 group-hover:text-crimson font-bold z-10">
                + [{String(index + 1).padStart(2, '0')}]
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-12 gap-0 items-stretch">
                
                {/* Project Image Column */}
                <div className="lg:col-span-6 relative aspect-video lg:aspect-auto overflow-hidden bg-neutral-900 border-b lg:border-b-0 lg:border-r border-white/15">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700 filter grayscale group-hover:grayscale-0"
                    onError={(e) => {
                      e.currentTarget.src = 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=1200&q=80';
                    }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent"></div>
                  
                  {project.metrics && (
                    <div className="absolute bottom-4 left-4 px-3 py-1 bg-black/90 border border-crimson font-mono text-xs text-crimson font-bold">
                      {project.metrics}
                    </div>
                  )}
                </div>

                {/* Project Info Column */}
                <div className="lg:col-span-6 p-6 sm:p-8 flex flex-col justify-between space-y-6">
                  <div>
                    {/* Category pill */}
                    <div className="flex items-center space-x-2 font-mono text-xs text-neutral-400 uppercase tracking-widest mb-3">
                      <span className="w-2 h-2 bg-crimson inline-block"></span>
                      <span>{project.category}</span>
                    </div>

                    <h3 className="font-display text-2xl sm:text-3xl font-extrabold uppercase tracking-tight text-white group-hover:text-crimson transition-colors">
                      {project.title}
                    </h3>

                    <p className="text-neutral-300 font-light text-base mt-4 leading-relaxed">
                      {project.shortDescription}
                    </p>

                    {/* Features Preview */}
                    <div className="mt-4 pt-4 border-t border-white/10 space-y-1.5 font-mono text-xs text-neutral-400">
                      {project.features.slice(0, 3).map((feat, fIdx) => (
                        <div key={fIdx} className="flex items-center space-x-2">
                          <CheckCircle2 className="w-3.5 h-3.5 text-crimson shrink-0" />
                          <span>{feat}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Tech stack badges & links */}
                  <div className="space-y-4 pt-4 border-t border-white/10">
                    <div className="flex flex-wrap gap-1.5">
                      {project.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="px-2.5 py-1 bg-black border border-white/15 text-neutral-300 font-mono text-[11px]"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>

                    <div className="flex flex-wrap items-center gap-3 pt-2">
                      <button
                        onClick={() => setSelectedProject(project)}
                        className="inline-flex items-center space-x-2 px-5 py-2.5 bg-crimson text-white font-mono text-xs font-bold uppercase tracking-wider hover:bg-white hover:text-black transition-all"
                      >
                        <Eye className="w-4 h-4" />
                        <span>View Specifications</span>
                      </button>

                      {project.githubUrl && (
                        <a
                          href={project.githubUrl}
                          target="_blank"
                          rel="noreferrer"
                          className="inline-flex items-center space-x-2 px-5 py-2.5 bg-transparent border border-white/20 text-white font-mono text-xs font-bold uppercase tracking-wider hover:border-crimson hover:text-crimson transition-all"
                        >
                          <Github className="w-4 h-4" />
                          <span>GitHub</span>
                        </a>
                      )}
                    </div>
                  </div>

                </div>

              </div>
            </motion.div>
          ))}
        </div>

      </div>

      {/* Project Detail Modal */}
      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </section>
  );
};

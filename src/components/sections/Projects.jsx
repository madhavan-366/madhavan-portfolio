import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiExternalLink, FiGithub, FiX, FiCheck } from 'react-icons/fi';
import { projects } from '../../data';
import SectionHeader from '../ui/SectionHeader';
import { staggerContainer, staggerItem, viewportConfig } from '../../utils/animations';

function ProjectModal({ project, onClose }) {
  useEffect(() => {
    if (!project) return;
    const handleKey = (e) => {
      if (e.key === 'Escape') onClose();
    };
    document.addEventListener('keydown', handleKey);
    document.body.style.overflow = 'hidden';
    return () => {
      document.removeEventListener('keydown', handleKey);
      document.body.style.overflow = '';
    };
  }, [project, onClose]);

  if (!project) return null;

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm"
        onClick={onClose}
        role="presentation"
      >
        <motion.div
          initial={{ opacity: 0, scale: 0.9, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.9, y: 20 }}
          transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
          className="relative w-full max-w-2xl rounded-3xl glass border border-black/10 dark:border-white/10 shadow-2xl p-8 max-h-[90vh] overflow-y-auto"
          onClick={(e) => e.stopPropagation()}
          role="dialog"
          aria-modal="true"
          aria-label={`${project.title} project details`}
        >
          <button
            onClick={onClose}
            aria-label="Close project details"
            className="absolute top-4 right-4 p-2 rounded-xl text-slate-500 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white hover:bg-black/5 dark:hover:bg-white/10 transition-all"
          >
            <FiX className="w-5 h-5" />
          </button>

          <div className="mb-6">
            <span className="inline-block text-xs font-semibold tracking-widest uppercase text-indigo-500 dark:text-indigo-400 px-3 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/20 mb-3">
              {project.badge}
            </span>
            <div className="flex items-center gap-3 mb-1">
              <span className="text-3xl">{project.icon}</span>
              <div>
                <h3 className={`text-xl font-black font-poppins bg-gradient-to-r ${project.titleGradient} bg-clip-text text-transparent`}>{project.title}</h3>
                <p className="text-slate-500 dark:text-slate-400 text-xs">{project.subtitle}</p>
              </div>
            </div>
            <p className="text-slate-600 dark:text-slate-400 text-sm mt-2">{project.tagline}</p>
          </div>

          <div className="space-y-5">
            <div>
              <p className="text-xs font-semibold tracking-widest uppercase text-slate-500 dark:text-slate-500 mb-2">Problem Solved</p>
              <p className="text-slate-700 dark:text-slate-300 text-sm leading-relaxed">{project.problem}</p>
            </div>

            <div>
              <p className="text-xs font-semibold tracking-widest uppercase text-slate-500 dark:text-slate-500 mb-2">Description</p>
              <p className="text-slate-700 dark:text-slate-300 text-sm leading-relaxed">{project.description}</p>
            </div>

            <div>
              <p className="text-xs font-semibold tracking-widest uppercase text-slate-500 dark:text-slate-500 mb-3">Key Features</p>
              <ul className="space-y-2">
                {project.features.map((f, i) => (
                  <li key={i} className="flex items-start gap-2 text-sm text-slate-700 dark:text-slate-300">
                    <FiCheck className="w-4 h-4 text-indigo-500 dark:text-indigo-400 mt-0.5 flex-shrink-0" />
                    {f}
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <p className="text-xs font-semibold tracking-widest uppercase text-slate-500 dark:text-slate-500 mb-3">Tech Stack</p>
              <div className="flex flex-wrap gap-2">
                {project.tech.map((t) => (
                  <span key={t} className="text-xs px-3 py-1.5 rounded-lg bg-indigo-500/10 text-indigo-600 dark:text-indigo-300 border border-indigo-500/20">
                    {t}
                  </span>
                ))}
              </div>
            </div>
          </div>

          <div className="flex gap-3 mt-8 pt-6 border-t border-black/10 dark:border-white/10">
            <a
              href={project.liveDemo}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary flex-1 justify-center"
            >
              <FiExternalLink className="w-4 h-4" />
              Live Demo
            </a>
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-secondary flex-1 justify-center"
            >
              <FiGithub className="w-4 h-4" />
              GitHub
            </a>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}

function ProjectCard({ project, onSelect }) {
  const handleKeyDown = (e) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      onSelect(project);
    }
  };

  return (
    <motion.div
      variants={staggerItem}
      whileHover={{ y: -10, scale: 1.015 }}
      transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
      className="group relative p-6 rounded-2xl glass border border-black/5 dark:border-white/5 hover:border-indigo-500/30 transition-colors duration-300 cursor-pointer hover:shadow-2xl hover:shadow-indigo-500/10"
      onClick={() => onSelect(project)}
      onKeyDown={handleKeyDown}
      role="button"
      tabIndex={0}
      aria-label={`View details for ${project.title}`}
    >
      {/* Top accent */}
      <div className={`absolute top-0 left-6 right-6 h-px bg-gradient-to-r ${project.color} opacity-0 group-hover:opacity-60 transition-opacity`} />

      <div className="flex items-start justify-between mb-4">
        <div className="flex-1">
          <span className="inline-block text-xs font-semibold tracking-wide uppercase text-indigo-500 dark:text-indigo-400 px-2 py-0.5 rounded bg-indigo-500/10 border border-indigo-500/20 mb-3">
            {project.badge}
          </span>
          <div className="flex items-center gap-2 mb-0.5">
            <motion.span
              className="text-2xl"
              whileHover={{ scale: 1.2, rotate: 8 }}
              transition={{ duration: 0.2 }}
            >
              {project.icon}
            </motion.span>
            <h3 className={`font-poppins font-black text-lg bg-gradient-to-r ${project.titleGradient} bg-clip-text text-transparent leading-tight`}>
              {project.title}
            </h3>
          </div>
          <p className="text-slate-500 dark:text-slate-400 text-xs ml-8">{project.subtitle}</p>
        </div>
        <div className="flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
          <a
            href={project.liveDemo}
            target="_blank"
            rel="noopener noreferrer"
            onClick={(e) => e.stopPropagation()}
            className="p-2 rounded-lg bg-black/5 dark:bg-white/5 text-slate-500 dark:text-slate-400 hover:text-indigo-600 dark:hover:text-white hover:bg-indigo-500/20 transition-all"
          >
            <FiExternalLink className="w-4 h-4" />
          </a>
          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            onClick={(e) => e.stopPropagation()}
            className="p-2 rounded-lg bg-black/5 dark:bg-white/5 text-slate-500 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white hover:bg-black/10 dark:hover:bg-white/10 transition-all"
          >
            <FiGithub className="w-4 h-4" />
          </a>
        </div>
      </div>

      <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed mb-5 line-clamp-3">
        {project.description}
      </p>

      <div className="flex flex-wrap gap-1.5 mb-5">
        {project.tech.slice(0, 4).map((t) => (
          <span key={t} className="text-xs px-2.5 py-1 rounded-md bg-black/5 dark:bg-white/5 text-slate-600 dark:text-slate-400 border border-black/5 dark:border-white/5">
            {t}
          </span>
        ))}
        {project.tech.length > 4 && (
          <span className="text-xs px-2.5 py-1 rounded-md bg-black/5 dark:bg-white/5 text-slate-500 border border-black/5 dark:border-white/5">
            +{project.tech.length - 4}
          </span>
        )}
      </div>

      <div className="flex items-center justify-between">
        <button className="text-xs text-indigo-500 dark:text-indigo-400 hover:text-indigo-600 dark:hover:text-indigo-300 font-medium transition-colors flex items-center gap-1">
          View Details
          <span className="group-hover:translate-x-1 transition-transform inline-block">→</span>
        </button>
        <a
          href={project.liveDemo}
          target="_blank"
          rel="noopener noreferrer"
          onClick={(e) => e.stopPropagation()}
          className="text-xs text-slate-500 dark:text-slate-500 hover:text-slate-900 dark:hover:text-white transition-colors flex items-center gap-1"
        >
          <span className="w-1.5 h-1.5 rounded-full bg-green-400" />
          Live
        </a>
      </div>
    </motion.div>
  );
}

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState(null);

  return (
    <section id="projects" className="relative section-padding overflow-hidden">
      <div className="absolute top-1/2 right-0 w-80 h-80 bg-indigo-600/5 rounded-full blur-3xl" />

      <div className="max-w-6xl mx-auto">
        <SectionHeader
          eyebrow="Portfolio"
          title="Featured Projects"
          subtitle="Production-ready applications built to solve real problems — from AI to full-stack."
        />

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewportConfig}
          className="grid md:grid-cols-2 xl:grid-cols-3 gap-6"
        >
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} onSelect={setSelectedProject} />
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={viewportConfig}
          transition={{ delay: 0.3 }}
          className="text-center mt-12"
        >
          <a
            href="https://github.com/madhavan-366"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-secondary inline-flex"
          >
            <FiGithub className="w-4 h-4" />
            View All on GitHub
          </a>
        </motion.div>
      </div>

      <ProjectModal project={selectedProject} onClose={() => setSelectedProject(null)} />
    </section>
  );
}

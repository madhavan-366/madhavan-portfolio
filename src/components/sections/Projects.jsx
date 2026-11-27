import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiExternalLink, FiGithub, FiX, FiCheck, FiLayers } from 'react-icons/fi';
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
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#1B1714]/80 backdrop-blur-md overflow-y-auto"
      onClick={onClose}
      role="presentation"
    >
      <motion.div
        initial={{ opacity: 0, scale: 0.96, y: 16 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.96, y: 16 }}
        transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
        className="relative w-full max-w-3xl bg-[var(--bg-card)] rounded-3xl p-6 sm:p-8 my-8 shadow-warm-lg border border-[var(--border-strong)]"
        onClick={(e) => e.stopPropagation()}
        role="dialog"
        aria-modal="true"
        aria-label={`${project.title} technical architecture details`}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          aria-label="Close project modal"
          className="absolute top-5 right-5 p-2 rounded-xl text-[var(--text-muted)] hover:text-[var(--text-primary)] hover:bg-[var(--bg-elevated)] transition-colors"
        >
          <FiX className="w-5 h-5" />
        </button>

        {/* Modal Header */}
        <div className="mb-6 pr-8">
          <span className="badge-subtle mb-3">
            {project.category}
          </span>
          <h3 className="text-2xl sm:text-3xl font-extrabold text-[var(--text-primary)] font-heading">
            {project.title}
          </h3>
          <p className="text-sm font-semibold text-[var(--accent)] mt-1">
            {project.subtitle}
          </p>
          <p className="text-sm text-[var(--text-secondary)] mt-2">
            {project.tagline}
          </p>
        </div>

        <div className="space-y-6 text-sm text-[var(--text-secondary)]">
          {/* Architecture Pipeline */}
          <div className="p-4 rounded-xl bg-[var(--accent-tint)] border border-[var(--accent-border)] space-y-1.5">
            <span className="flex items-center gap-1.5 text-xs font-mono font-bold uppercase tracking-wider text-[var(--accent)]">
              <FiLayers className="w-3.5 h-3.5" />
              System Architecture
            </span>
            <p className="font-mono text-xs text-[var(--text-primary)]">
              {project.architecture}
            </p>
          </div>

          {/* Problem & Solution */}
          <div className="grid sm:grid-cols-2 gap-4">
            <div className="space-y-1.5">
              <span className="text-xs font-mono uppercase text-[var(--text-muted)] font-semibold tracking-wider">
                The Problem
              </span>
              <p className="text-xs sm:text-sm leading-relaxed text-[var(--text-secondary)]">
                {project.problem}
              </p>
            </div>
            <div className="space-y-1.5">
              <span className="text-xs font-mono uppercase text-[var(--text-muted)] font-semibold tracking-wider">
                Engineered Solution
              </span>
              <p className="text-xs sm:text-sm leading-relaxed text-[var(--text-secondary)]">
                {project.solution}
              </p>
            </div>
          </div>

          {/* Key Features */}
          <div>
            <span className="block text-xs font-mono uppercase text-[var(--text-muted)] font-semibold tracking-wider mb-2.5">
              Key Engineering Highlights
            </span>
            <ul className="space-y-2">
              {project.features.map((feat, i) => (
                <li key={i} className="flex items-start gap-2.5 text-xs sm:text-sm text-[var(--text-secondary)]">
                  <FiCheck className="w-4 h-4 text-[var(--accent)] mt-0.5 flex-shrink-0" />
                  <span>{feat}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Technologies */}
          <div>
            <span className="block text-xs font-mono uppercase text-[var(--text-muted)] font-semibold tracking-wider mb-2">
              Technology Stack
            </span>
            <div className="flex flex-wrap gap-1.5">
              {project.tech.map((t) => (
                <span
                  key={t}
                  className="text-xs font-mono px-3 py-1 rounded-md bg-[var(--bg-elevated)]/55 border border-[var(--border-subtle)] text-[var(--text-secondary)]"
                >
                  {t}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Action Links */}
        <div className="flex flex-wrap gap-3 mt-8 pt-6 border-t border-[var(--border-subtle)]">
          {project.liveDemo && (
            <a
              href={project.liveDemo}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary flex-1 justify-center"
            >
              <FiExternalLink className="w-4 h-4" />
              <span>Launch Live Application</span>
            </a>
          )}
          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-secondary flex-1 justify-center"
          >
            <FiGithub className="w-4 h-4" />
            <span>GitHub Profile</span>
          </a>
        </div>
      </motion.div>
    </div>
  );
}

function ProjectCard({ project, onSelect }) {
  return (
    <motion.div
      variants={staggerItem}
      className="card-surface rounded-2xl p-6 sm:p-7 flex flex-col justify-between group relative overflow-hidden"
    >
      <div>
        {/* Top Meta Bar */}
        <div className="flex items-center justify-between gap-2 mb-4">
          <span className="badge-subtle text-[11px]">
            {project.badge}
          </span>
          <div className="flex items-center gap-1.5">
            {project.liveDemo && (
              <a
                href={project.liveDemo}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg text-[var(--text-muted)] hover:text-[var(--accent)] hover:bg-[var(--accent-tint)] transition-colors"
                title="Live Application Demo"
                aria-label={`Open live demo for ${project.title}`}
              >
                <FiExternalLink className="w-4 h-4" />
              </a>
            )}
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-lg text-[var(--text-muted)] hover:text-[var(--accent)] hover:bg-[var(--accent-tint)] transition-colors"
              title="GitHub Source Repository"
              aria-label={`Open GitHub for ${project.title}`}
            >
              <FiGithub className="w-4 h-4" />
            </a>
          </div>
        </div>

        {/* Title & Tagline */}
        <h3 className="text-xl font-bold text-[var(--text-primary)] font-heading group-hover:text-[var(--accent)] transition-colors">
          {project.title}
        </h3>
        <p className="text-xs font-semibold text-[var(--accent)] mb-2">
          {project.subtitle}
        </p>
        <p className="text-xs sm:text-sm text-[var(--text-secondary)] leading-relaxed line-clamp-3 mb-5">
          {project.description}
        </p>

        {/* Highlight bullets */}
        <div className="space-y-1.5 mb-5 border-l-2 border-[var(--accent-border)] pl-3">
          {project.features.slice(0, 2).map((feat, i) => (
            <p key={i} className="text-xs text-[var(--text-secondary)] leading-snug truncate">
              • {feat}
            </p>
          ))}
        </div>

        {/* Tech Stack Pills */}
        <div className="flex flex-wrap gap-1.5 mb-6">
          {project.tech.slice(0, 5).map((t) => (
            <span
              key={t}
              className="text-[11px] font-mono px-2.5 py-1 rounded-md bg-[var(--bg-elevated)]/45 text-[var(--text-secondary)] border border-[var(--border-subtle)]"
            >
              {t}
            </span>
          ))}
          {project.tech.length > 5 && (
            <span className="text-[11px] font-mono px-2 py-1 rounded-md bg-[var(--bg-elevated)]/45 text-[var(--text-muted)] border border-[var(--border-subtle)]">
              +{project.tech.length - 5}
            </span>
          )}
        </div>
      </div>

      {/* Card Footer Actions */}
      <div className="pt-4 border-t border-[var(--border-subtle)] flex items-center justify-between gap-3">
        <button
          onClick={() => onSelect(project)}
          className="text-xs font-semibold text-[var(--accent)] hover:text-[var(--accent-hover)] transition-colors flex items-center gap-1"
        >
          <span>Architecture Details</span>
          <span className="group-hover:translate-x-0.5 transition-transform">→</span>
        </button>

        {project.liveDemo && (
          <a
            href={project.liveDemo}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 text-xs font-medium text-[var(--accent)] hover:text-[var(--accent-hover)] hover:underline"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-[var(--accent)]" />
            Live App
          </a>
        )}
      </div>
    </motion.div>
  );
}

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState(null);

  return (
    <section id="projects" className="section-wrapper relative section-alt">
      <div className="section-container">
        <SectionHeader
          eyebrow="Portfolio & Systems"
          title="Featured Projects"
          subtitle="End-to-end engineering projects solving real-world challenges in computer vision, customer lifetime value prediction, and AI travel agents."
        />

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewportConfig}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {projects.map((project) => (
            <ProjectCard
              key={project.id}
              project={project}
              onSelect={setSelectedProject}
            />
          ))}
        </motion.div>

        {/* GitHub Direct Link CTA */}
        <div className="mt-12 text-center">
          <a
            href="https://github.com/madhavan-366"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-secondary"
          >
            <FiGithub className="w-4 h-4 text-[var(--accent)]" />
            <span>Explore All Repositories on GitHub</span>
            <FiExternalLink className="w-3.5 h-3.5 text-[var(--text-muted)]" />
          </a>
        </div>
      </div>

      <AnimatePresence>
        {selectedProject && (
          <ProjectModal
            project={selectedProject}
            onClose={() => setSelectedProject(null)}
          />
        )}
      </AnimatePresence>
    </section>
  );
}

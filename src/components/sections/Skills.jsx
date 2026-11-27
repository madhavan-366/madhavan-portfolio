import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { skillCategories, allSkillsList } from '../../data';
import SectionHeader from '../ui/SectionHeader';
import { staggerContainer, staggerItem } from '../../utils/animations';
import { FiCpu, FiCode, FiDatabase, FiTool, FiCheckCircle } from 'react-icons/fi';

const categoryIcons = {
  aiml: FiCpu,
  engineering: FiCode,
  database: FiDatabase,
  analytics_tools: FiTool
};

export default function Skills() {
  const [activeTab, setActiveTab] = useState('all');

  const filteredCategories = activeTab === 'all'
    ? skillCategories
    : skillCategories.filter((cat) => cat.id === activeTab);

  const tabs = [
    { id: 'all', label: 'All Technologies' },
    { id: 'aiml', label: 'AI & Machine Learning' },
    { id: 'engineering', label: 'Full-Stack & Backend' },
    { id: 'database', label: 'Data, BI & Databases' },
    { id: 'analytics_tools', label: 'Tools & Deployment' }
  ];

  return (
    <section id="skills" className="section-wrapper relative">
      <div className="section-container">
        <SectionHeader
          eyebrow="Technical Stack"
          title="Skills & Technologies"
          subtitle="A structured overview of the tools, frameworks, and algorithms I use to build scalable applications and intelligent systems."
        />

        {/* Filter Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-10">
          {tabs.map((tab) => {
            const isActive = activeTab === tab.id;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all duration-200 ${
                  isActive
                    ? 'bg-[var(--accent)] text-[var(--accent-text-on)] shadow-warm-sm'
                    : 'bg-[var(--bg-card)] text-[var(--text-secondary)] border border-[var(--border-subtle)] hover:text-[var(--text-primary)] hover:bg-[var(--bg-elevated)]'
                }`}
              >
                {tab.label}
              </button>
            );
          })}
        </div>

        {/* Categories Grid */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            variants={staggerContainer}
            initial="hidden"
            animate="visible"
            className="grid sm:grid-cols-2 lg:grid-cols-2 gap-6"
          >
            {filteredCategories.map((category) => {
              const Icon = categoryIcons[category.id] || FiCode;
              return (
                <motion.div
                  key={category.id}
                  variants={staggerItem}
                  className="card-surface rounded-2xl p-6 sm:p-7 flex flex-col justify-between"
                >
                  <div>
                    {/* Header */}
                    <div className="flex items-start gap-4 mb-5">
                      <div className="w-12 h-12 rounded-xl bg-[var(--accent-tint)] border border-[var(--accent-border)] text-[var(--accent)] flex items-center justify-center flex-shrink-0">
                        <Icon className="w-6 h-6" />
                      </div>
                      <div>
                        <h3 className="text-base sm:text-lg font-bold text-[var(--text-primary)] font-heading">
                          {category.title}
                        </h3>
                        <p className="text-xs text-[var(--text-muted)] mt-0.5">
                          {category.subtitle}
                        </p>
                      </div>
                    </div>

                    {/* Skill Tags */}
                    <div className="flex flex-wrap gap-2 pt-2">
                      {category.skills.map((skill) => (
                        <div
                          key={skill.name}
                          className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium bg-[var(--bg-elevated)]/45 border border-[var(--border-subtle)] text-[var(--text-secondary)] hover:border-[var(--accent-border)] hover:text-[var(--text-primary)] transition-colors"
                        >
                          <FiCheckCircle className="w-3.5 h-3.5 text-[var(--accent)]" />
                          <span>{skill.name}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Category Footer Indicator */}
                  <div className="mt-6 pt-4 border-t border-[var(--border-subtle)] flex items-center justify-between text-[11px] text-[var(--text-muted)] font-mono">
                    <span>{category.skills.length} competencies</span>
                    <span className="text-[var(--accent)]">Projects &amp; Internship</span>
                  </div>
                </motion.div>
              );
            })}
          </motion.div>
        </AnimatePresence>

        {/* Tech Marquee Bar */}
        <div className="mt-12 card-surface rounded-2xl p-5 overflow-hidden">
          <div className="flex items-center gap-4">
            <span className="text-xs font-mono uppercase text-[var(--text-muted)] font-semibold tracking-wider whitespace-nowrap hidden sm:block">
              Rapid Stack:
            </span>
            <div className="relative w-full overflow-hidden mask-gradient-x">
              <div className="flex gap-3 w-max animate-marquee-smooth hover:[animation-play-state:paused]">
                {[...allSkillsList, ...allSkillsList].map((tech, index) => (
                  <span
                    key={`${tech}-${index}`}
                    className="px-3 py-1 rounded-md text-xs font-mono bg-[var(--bg-elevated)]/45 text-[var(--text-secondary)] border border-[var(--border-subtle)] whitespace-nowrap"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}

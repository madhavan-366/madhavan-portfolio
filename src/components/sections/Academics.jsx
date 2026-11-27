import { motion } from 'framer-motion';
import { education } from '../../data';
import SectionHeader from '../ui/SectionHeader';
import { staggerContainer, staggerItem, viewportConfig } from '../../utils/animations';
import { FiBookOpen, FiCalendar, FiMapPin, FiAward, FiCheck } from 'react-icons/fi';

export default function Academics() {
  return (
    <section id="academics" className="section-wrapper relative section-alt">
      <div className="section-container">
        <SectionHeader
          eyebrow="Academic Background"
          title="Education & Coursework"
          subtitle="Formal academic grounding in Artificial Intelligence, Data Science, and core computer science fundamentals."
        />

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewportConfig}
          className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto"
        >
          {education.map((edu) => (
            <motion.div
              key={edu.id}
              variants={staggerItem}
              className="card-surface rounded-3xl p-6 sm:p-8 flex flex-col justify-between border border-[var(--border-subtle)] relative overflow-hidden"
            >
              <div>
                {/* Header Badge & Period */}
                <div className="flex items-center justify-between gap-2 mb-4">
                  <div className="p-2.5 rounded-xl bg-[var(--accent-tint)] text-[var(--accent)] border border-[var(--accent-border)]">
                    <FiBookOpen className="w-5 h-5" />
                  </div>
                  <div className="flex items-center gap-1.5 text-xs font-mono text-[var(--text-secondary)] bg-[var(--bg-elevated)]/55 border border-[var(--border-subtle)] px-3 py-1 rounded-full">
                    <FiCalendar className="w-3.5 h-3.5 text-[var(--accent)]" />
                    <span>{edu.period}</span>
                  </div>
                </div>

                {/* Degree & Institution */}
                <h3 className="text-xl font-bold text-[var(--text-primary)] font-heading leading-snug mb-1">
                  {edu.degree}
                </h3>
                <p className="text-sm font-semibold text-[var(--accent)] mb-2">
                  {edu.institution}
                </p>

                <div className="flex flex-wrap items-center gap-1.5 text-xs text-[var(--text-muted)] mb-5">
                  <FiMapPin className="w-3.5 h-3.5" />
                  <span>{edu.location}</span>
                  <span>·</span>
                  <span className="text-[var(--accent)] font-medium">{edu.status}</span>
                </div>

                {/* Score Showcase */}
                <div className="mb-6 p-4 rounded-2xl bg-[var(--accent-tint)] border border-[var(--accent-border)] flex items-center justify-between">
                  <div>
                    <span className="block text-[11px] font-mono uppercase text-[var(--text-muted)] font-semibold">
                      Performance Score
                    </span>
                    <span className="text-2xl font-black text-[var(--text-primary)] font-heading">
                      {edu.score}
                    </span>
                  </div>
                  <div className="text-right">
                    <span className="inline-flex items-center gap-1 text-xs font-semibold px-2.5 py-1 rounded-full bg-[var(--bg-card)] text-[var(--accent)] border border-[var(--accent-border)]">
                      <FiAward className="w-3.5 h-3.5" />
                      {edu.scoreLabel}
                    </span>
                  </div>
                </div>

                {/* Coursework / Focus Areas */}
                <div className="space-y-2 mb-6">
                  <span className="block text-xs font-mono uppercase text-[var(--text-muted)] font-semibold tracking-wider">
                    Core Focus Areas
                  </span>
                  <div className="flex flex-wrap gap-1.5">
                    {edu.coursework.map((course) => (
                      <span
                        key={course}
                        className="inline-flex items-center gap-1 text-[11px] font-medium px-2.5 py-1 rounded-md bg-[var(--bg-elevated)]/45 text-[var(--text-secondary)] border border-[var(--border-subtle)]"
                      >
                        <FiCheck className="w-3 h-3 text-[var(--accent)]" />
                        {course}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Highlights Note */}
              <p className="text-xs text-[var(--text-muted)] pt-4 border-t border-[var(--border-subtle)] leading-relaxed">
                {edu.highlights}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

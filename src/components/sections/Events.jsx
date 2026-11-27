import { motion } from 'framer-motion';
import { events } from '../../data';
import SectionHeader from '../ui/SectionHeader';
import { staggerContainer, staggerItem, viewportConfig } from '../../utils/animations';
import { FiExternalLink, FiCalendar, FiCheckCircle } from 'react-icons/fi';

export default function Events() {
  return (
    <section id="events" className="section-wrapper relative section-alt">
      <div className="section-container">
        <SectionHeader
          eyebrow="Competitions"
          title="Hackathons & Challenges"
          subtitle="Building rapid prototypes, collaborating in competitive environments, and solving real-world challenges."
        />

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewportConfig}
          className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto"
        >
          {events.map((evt) => (
            <motion.div
              key={evt.id}
              variants={staggerItem}
              className="card-surface rounded-2xl p-6 flex flex-col justify-between border border-[var(--border-subtle)] group"
            >
              <div>
                <div className="flex items-center justify-between gap-2 mb-3">
                  <span className="badge-subtle text-[11px]">
                    {evt.badge}
                  </span>
                  <span className="flex items-center gap-1 text-[11px] font-mono text-[var(--text-muted)]">
                    <FiCalendar className="w-3 h-3 text-[var(--accent)]" />
                    {evt.date}
                  </span>
                </div>

                <h3 className="text-base font-bold text-[var(--text-primary)] font-heading mb-1 group-hover:text-[var(--accent)] transition-colors">
                  {evt.title}
                </h3>
                <p className="text-xs font-semibold text-[var(--accent)] mb-3">
                  {evt.organizer}
                </p>

                <p className="text-xs text-[var(--text-secondary)] leading-relaxed mb-5">
                  {evt.description}
                </p>
              </div>

              <div className="pt-4 border-t border-[var(--border-subtle)]">
                {evt.file ? (
                  <a
                    href={`/hackathons/${evt.file}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-between w-full text-xs font-semibold text-[var(--accent)] hover:text-[var(--accent-hover)] py-1 transition-colors"
                  >
                    <span>View Participation Certificate</span>
                    <FiExternalLink className="w-3.5 h-3.5" />
                  </a>
                ) : (
                  <div className="flex items-center gap-1.5 text-xs text-[var(--accent)] font-medium py-1">
                    <FiCheckCircle className="w-3.5 h-3.5" />
                    <span>Project &amp; Team Submission</span>
                  </div>
                )}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

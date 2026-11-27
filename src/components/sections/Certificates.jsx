import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { certificates, events } from '../../data';
import SectionHeader from '../ui/SectionHeader';
import { staggerContainer, staggerItem } from '../../utils/animations';
import { FiExternalLink, FiFileText, FiCalendar, FiCheckCircle } from 'react-icons/fi';

export default function Certificates() {
  const [filter, setFilter] = useState('all');

  const allItems = [
    ...certificates.map(c => ({ ...c, type: 'certification', link: `/certificates/${c.file}` })),
    ...events.map(e => ({
      ...e,
      type: 'event',
      link: e.file ? `/hackathons/${e.file}` : null,
      skillsCovered: e.description
    }))
  ];

  const filteredItems = filter === 'all'
    ? allItems
    : filter === 'certifications'
    ? allItems.filter(i => i.type === 'certification')
    : allItems.filter(i => i.type === 'event');

  const filterTabs = [
    { id: 'all', label: `All Credentials (${allItems.length})` },
    { id: 'certifications', label: `Certifications (${certificates.length})` },
    { id: 'events', label: `Hackathons & Competitions (${events.length})` }
  ];

  return (
    <section id="credentials" className="section-wrapper relative">
      <div id="certificates" className="absolute -top-20" />
      <div id="events" className="absolute -top-20" />

      <div className="section-container">
        <SectionHeader
          eyebrow="Verified Credentials"
          title="Certifications & Hackathons"
          subtitle="Industry certifications, university accreditations, and national hackathon participation records."
        />

        {/* Filter Controls */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-10">
          {filterTabs.map((tab) => {
            const isActive = filter === tab.id;
            return (
              <button
                key={tab.id}
                onClick={() => setFilter(tab.id)}
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

        {/* Credentials Grid */}
        <AnimatePresence mode="wait">
          <motion.div
            key={filter}
            variants={staggerContainer}
            initial="hidden"
            animate="visible"
            className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {filteredItems.map((item, idx) => (
              <motion.div
                key={`${item.title}-${idx}`}
                variants={staggerItem}
                className="card-surface rounded-2xl p-6 flex flex-col justify-between border border-[var(--border-subtle)] relative group"
              >
                <div>
                  {/* Card Header */}
                  <div className="flex items-center justify-between gap-2 mb-3">
                    <span className="badge-subtle text-[11px]">
                      {item.type === 'certification' ? (item.category || 'Certification') : (item.badge || 'Hackathon')}
                    </span>
                    {item.date && (
                      <span className="flex items-center gap-1 text-[11px] font-mono text-[var(--text-muted)]">
                        <FiCalendar className="w-3 h-3 text-[var(--accent)]" />
                        {item.date}
                      </span>
                    )}
                  </div>

                  {/* Title & Issuer */}
                  <h3 className="text-base font-bold text-[var(--text-primary)] font-heading mb-1 group-hover:text-[var(--accent)] transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-xs font-semibold text-[var(--accent)] mb-3">
                    {item.issuer || item.organizer}
                  </p>

                  {/* Description / Competencies */}
                  <p className="text-xs text-[var(--text-secondary)] leading-relaxed mb-5">
                    {item.skillsCovered}
                  </p>
                </div>

                {/* Footer Link / Verification */}
                <div className="pt-4 border-t border-[var(--border-subtle)]">
                  {item.link ? (
                    <a
                      href={item.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-between w-full text-xs font-semibold text-[var(--accent)] hover:text-[var(--accent-hover)] py-1 transition-colors group/btn"
                    >
                      <span className="flex items-center gap-1.5">
                        <FiFileText className="w-3.5 h-3.5" />
                        <span>View Verified Certificate</span>
                      </span>
                      <FiExternalLink className="w-3.5 h-3.5 opacity-70 group-hover/btn:opacity-100 group-hover/btn:translate-x-0.5 transition-all" />
                    </a>
                  ) : (
                    <div className="flex items-center gap-1.5 text-xs text-[var(--accent)] font-medium py-1">
                      <FiCheckCircle className="w-3.5 h-3.5" />
                      <span>Event Participant</span>
                    </div>
                  )}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}

import { useState } from 'react';
import { motion } from 'framer-motion';
import { FiLinkedin, FiGithub, FiCopy, FiCheck } from 'react-icons/fi';
import { personalInfo } from '../../data';
import SectionHeader from '../ui/SectionHeader';
import { staggerContainer, staggerItem, viewportConfig } from '../../utils/animations';

export default function Contact() {
  const [copied, setCopied] = useState(false);

  const copyEmail = () => {
    navigator.clipboard.writeText(personalInfo.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <section id="contact" className="section-wrapper relative section-alt">
      <div className="section-container">
        <SectionHeader
          eyebrow="Get In Touch"
          title="Let's Connect"
          subtitle="Interested in hiring, collaborating, or discussing potential opportunities? My inbox is always open."
        />

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewportConfig}
          className="grid md:grid-cols-2 gap-6 items-stretch max-w-4xl mx-auto"
        >
          {/* Left Column: Direct Email, Phone & Location */}
          <div className="space-y-4">
            {/* Quick Email Card with 1-Click Copy */}
            <motion.div variants={staggerItem} className="card-surface rounded-2xl p-6 border border-[var(--border-subtle)]">
              <div className="flex items-center justify-between gap-3 mb-2">
                <span className="text-xs font-mono font-bold uppercase tracking-wider text-[var(--text-muted)]">
                  Direct Email
                </span>
                <button
                  onClick={copyEmail}
                  className="inline-flex items-center gap-1.5 text-xs font-semibold px-2.5 py-1 rounded-md bg-[var(--accent-tint)] text-[var(--accent)] border border-[var(--accent-border)] hover:bg-[var(--accent)] hover:text-[var(--accent-text-on)] transition-colors"
                  aria-label="Copy email address"
                >
                  {copied ? (
                    <>
                      <FiCheck className="w-3.5 h-3.5" />
                      <span>Copied!</span>
                    </>
                  ) : (
                    <>
                      <FiCopy className="w-3.5 h-3.5" />
                      <span>Copy Email</span>
                    </>
                  )}
                </button>
              </div>

              <a
                href={`mailto:${personalInfo.email}`}
                className="text-base sm:text-lg font-bold text-[var(--text-primary)] hover:text-[var(--accent)] transition-colors block truncate"
              >
                {personalInfo.email}
              </a>
              <p className="text-xs text-[var(--text-muted)] mt-1">
                Typical response time: Within 24 hours
              </p>
            </motion.div>

            {/* Phone & Location Grid */}
            <div className="grid sm:grid-cols-2 gap-4">
              <motion.div variants={staggerItem} className="card-surface rounded-2xl p-5 border border-[var(--border-subtle)]">
                <span className="text-xs font-mono font-bold uppercase tracking-wider text-[var(--text-muted)] block mb-1">
                  Phone
                </span>
                <a
                  href={`tel:+91${personalInfo.phone}`}
                  className="text-sm font-semibold text-[var(--text-primary)] hover:text-[var(--accent)] transition-colors"
                >
                  +91 {personalInfo.phone}
                </a>
              </motion.div>

              <motion.div variants={staggerItem} className="card-surface rounded-2xl p-5 border border-[var(--border-subtle)]">
                <span className="text-xs font-mono font-bold uppercase tracking-wider text-[var(--text-muted)] block mb-1">
                  Location
                </span>
                <span className="text-sm font-semibold text-[var(--text-primary)] block">
                  {personalInfo.location}
                </span>
              </motion.div>
            </div>
          </div>

          {/* Right Column: Social Channels */}
          <motion.div
            variants={staggerItem}
            className="card-surface rounded-2xl p-6 border border-[var(--border-subtle)] flex flex-col justify-between space-y-4"
          >
            <div className="space-y-3">
              <span className="text-xs font-mono font-bold uppercase tracking-wider text-[var(--text-muted)] block">
                Professional Profiles
              </span>

              <div className="flex flex-col gap-2.5">
                <a
                  href={personalInfo.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between p-3.5 rounded-xl bg-[var(--bg-elevated)]/40 border border-[var(--border-subtle)] hover:bg-[var(--accent-tint)] hover:border-[var(--accent-border)] text-sm font-medium text-[var(--text-primary)] transition-colors"
                >
                  <span className="flex items-center gap-2.5">
                    <FiLinkedin className="w-4 h-4 text-[var(--accent)]" />
                    <span>LinkedIn / madhavankm366</span>
                  </span>
                  <span className="text-xs text-[var(--text-muted)]">Connect →</span>
                </a>

                <a
                  href={personalInfo.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between p-3.5 rounded-xl bg-[var(--bg-elevated)]/40 border border-[var(--border-subtle)] hover:bg-[var(--accent-tint)] hover:border-[var(--accent-border)] text-sm font-medium text-[var(--text-primary)] transition-colors"
                >
                  <span className="flex items-center gap-2.5">
                    <FiGithub className="w-4 h-4 text-[var(--accent)]" />
                    <span>GitHub / madhavan-366</span>
                  </span>
                  <span className="text-xs text-[var(--text-muted)]">Repositories →</span>
                </a>
              </div>
            </div>

            <p className="text-xs text-[var(--text-muted)] pt-3 border-t border-[var(--border-subtle)]">
              Open to Software Engineering, AI/ML, and Data Analytics opportunities.
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

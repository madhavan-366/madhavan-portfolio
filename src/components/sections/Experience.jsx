import { motion } from 'framer-motion';
import { FiBriefcase, FiCalendar, FiMapPin, FiCheckCircle, FiFileText, FiArrowRight } from 'react-icons/fi';
import { experience } from '../../data';
import SectionHeader from '../ui/SectionHeader';
import { staggerItem, viewportConfig } from '../../utils/animations';

export default function Experience() {
  const scrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="experience" className="section-wrapper relative">
      <div className="section-container">
        <SectionHeader
          eyebrow="Work History"
          title="Industry Experience"
          subtitle="Hands-on experience in data cleaning, analytical reporting, and interactive Power BI dashboard development."
        />

        <div className="max-w-4xl mx-auto space-y-8">
          {experience.map((exp) => (
            <motion.div
              key={exp.id}
              variants={staggerItem}
              initial="hidden"
              whileInView="visible"
              viewport={viewportConfig}
              className="card-surface rounded-3xl p-6 sm:p-8 relative border border-[var(--border-subtle)]"
            >
              {/* Top Meta Bar */}
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-5 mb-5 border-b border-[var(--border-subtle)]">
                <div>
                  <div className="flex items-center gap-2.5 mb-1">
                    <span className="p-2 rounded-xl bg-[var(--accent-tint)] text-[var(--accent)] border border-[var(--accent-border)]">
                      <FiBriefcase className="w-4 h-4" />
                    </span>
                    <h3 className="text-xl sm:text-2xl font-extrabold text-[var(--text-primary)] font-heading">
                      {exp.role}
                    </h3>
                  </div>
                  <p className="text-base font-bold text-[var(--accent)]">
                    {exp.company}
                  </p>
                </div>

                <div className="flex flex-wrap sm:flex-col sm:items-end gap-2 text-xs font-mono text-[var(--text-secondary)]">
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[var(--bg-elevated)]/55 border border-[var(--border-subtle)]">
                    <FiCalendar className="w-3.5 h-3.5 text-[var(--accent)]" />
                    {exp.period}
                  </span>
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[var(--bg-elevated)]/55 border border-[var(--border-subtle)]">
                    <FiMapPin className="w-3.5 h-3.5 text-[var(--accent)]" />
                    {exp.type}
                  </span>
                </div>
              </div>

              {/* Summary */}
              <p className="text-sm sm:text-base text-[var(--text-secondary)] leading-relaxed mb-6">
                {exp.summary}
              </p>

              {/* Key Deliverables */}
              <div className="space-y-3 mb-6">
                <span className="block text-xs font-mono uppercase text-[var(--text-muted)] font-semibold tracking-wider">
                  Key Responsibilities & Deliverables
                </span>
                <ul className="space-y-2.5">
                  {exp.contributions.map((item, idx) => (
                    <li key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-[var(--text-secondary)]">
                      <FiCheckCircle className="w-4 h-4 text-[var(--accent)] mt-0.5 flex-shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Technologies Applied */}
              <div className="mb-6">
                <span className="block text-xs font-mono uppercase text-[var(--text-muted)] font-semibold tracking-wider mb-2.5">
                  Technologies & Competencies Applied
                </span>
                <div className="flex flex-wrap gap-1.5">
                  {exp.skills.map((skill) => (
                    <span
                      key={skill}
                      className="text-xs font-medium px-3 py-1 rounded-lg bg-[var(--accent-tint)] text-[var(--accent)] border border-[var(--accent-border)]"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

              {/* Certificate Verification Button */}
              {exp.certFile && (
                <div className="pt-5 border-t border-[var(--border-subtle)]">
                  <a
                    href={exp.certFile}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-secondary text-xs sm:text-sm"
                  >
                    <FiFileText className="w-4 h-4 text-[var(--accent)]" />
                    <span>View Verified Internship Certificate (PDF)</span>
                  </a>
                </div>
              )}
            </motion.div>
          ))}

          {/* Target Role & Recruiter Callout */}
          <motion.div
            variants={staggerItem}
            initial="hidden"
            whileInView="visible"
            viewport={viewportConfig}
            className="card-surface rounded-3xl p-6 sm:p-8 border border-[var(--accent-border)]"
          >
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
              <div className="space-y-2 max-w-xl">
                <div className="flex items-center gap-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-[var(--accent)]" />
                  <span className="text-xs font-mono font-bold uppercase tracking-wider text-[var(--accent)]">
                    Actively Seeking New Opportunities
                  </span>
                </div>
                <h4 className="text-lg sm:text-xl font-bold text-[var(--text-primary)] font-heading">
                  Open for Software Engineering, AI/ML &amp; Data Roles
                </h4>
                <p className="text-xs sm:text-sm text-[var(--text-secondary)] leading-relaxed">
                  B.Tech AI &amp; Data Science (2023–2027, 8.4 CGPA) seeking internships and graduate engineer trainee / entry-level roles in Software Engineering, Machine Learning, and Data Analytics.
                </p>
              </div>

              <button
                onClick={scrollToContact}
                className="btn-primary whitespace-nowrap text-xs sm:text-sm"
              >
                <span>Connect for Roles</span>
                <FiArrowRight className="w-4 h-4" />
              </button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

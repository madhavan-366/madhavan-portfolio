import { motion } from 'framer-motion';
import { hackathons } from '../../data';
import SectionHeader from '../ui/SectionHeader';
import { staggerContainer, staggerItem, viewportConfig } from '../../utils/animations';

export default function Hackathons() {
  return (
    <section id="hackathons" className="relative section-wrapper overflow-hidden">
      <div className="absolute top-1/2 left-0 -translate-y-1/2 w-80 h-80 bg-[#C49A6C]/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-6xl mx-auto">
        <SectionHeader
          eyebrow="Competitions"
          title="Hackathons"
          subtitle="Participating in hackathons to build, learn, and compete under real constraints."
        />

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewportConfig}
          className="grid sm:grid-cols-2 gap-6 max-w-2xl mx-auto"
        >
          {hackathons.map((hack) => (
            <motion.div
              key={hack.id}
              variants={staggerItem}
              whileHover={{ y: -5, scale: 1.01 }}
              transition={{ duration: 0.25 }}
              className="group relative p-6 rounded-2xl card-surface border border-[var(--border-subtle)] hover:border-[var(--accent-border)] transition-all flex flex-col overflow-hidden"
            >
              {/* Top accent bar */}
              <div className="absolute top-0 left-0 right-0 h-1 bg-[var(--accent)] opacity-60 group-hover:opacity-100 transition-opacity" />

              {/* Icon */}
              <div className="w-14 h-14 rounded-2xl bg-[var(--accent-tint)] border border-[var(--accent-border)] flex items-center justify-center text-2xl mb-5">
                {hack.icon}
              </div>

              {/* Content */}
              <h3 className="font-heading font-bold text-[var(--text-primary)] text-base mb-2">{hack.title}</h3>

              {/* Badge */}
              <span className="badge-subtle mb-5 w-fit">
                <span className="w-1.5 h-1.5 rounded-full bg-[var(--accent)]" />
                {hack.badge}
              </span>

              {/* View Certificate button */}
              <a
                href={`/hackathons/${hack.file}`}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-auto btn-secondary w-full justify-center py-2.5 text-sm"
              >
                View Certificate
              </a>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

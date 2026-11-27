import { motion } from 'framer-motion';
import { fadeInUp, viewportConfig } from '../../utils/animations';

export default function SectionHeader({ eyebrow, title, subtitle, centered = true }) {
  return (
    <motion.div
      className={`mb-12 md:mb-16 ${centered ? 'text-center max-w-2xl mx-auto' : 'max-w-2xl'}`}
      variants={fadeInUp}
      initial="hidden"
      whileInView="visible"
      viewport={viewportConfig}
    >
      {eyebrow && (
        <div className="mb-3">
          <span className="badge-subtle">
            <span className="w-1.5 h-1.5 rounded-full bg-[var(--accent)]" />
            {eyebrow}
          </span>
        </div>
      )}
      <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-[var(--text-primary)]">
        {title}
      </h2>
      {subtitle && (
        <p className="mt-4 text-base sm:text-lg text-[var(--text-secondary)] leading-relaxed font-normal">
          {subtitle}
        </p>
      )}
    </motion.div>
  );
}

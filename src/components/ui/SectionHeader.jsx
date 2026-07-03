import { motion } from 'framer-motion';
import { fadeInUp, viewportConfig } from '../../utils/animations';

export default function SectionHeader({ eyebrow, title, subtitle, centered = true }) {
  return (
    <motion.div
      className={`mb-16 ${centered ? 'text-center' : ''}`}
      variants={fadeInUp}
      initial="hidden"
      whileInView="visible"
      viewport={viewportConfig}
    >
      {eyebrow && (
        <span className="inline-block text-xs font-semibold tracking-widest uppercase text-indigo-500 dark:text-indigo-400 mb-3 px-3 py-1 rounded-full border border-indigo-500/30 bg-indigo-500/10">
          {eyebrow}
        </span>
      )}
      <h2 className="section-title gradient-text mb-4">{title}</h2>
      {subtitle && (
        <p className={`section-subtitle ${centered ? 'mx-auto' : ''} mt-3 text-slate-500 dark:text-slate-500`}>
          {subtitle}
        </p>
      )}
    </motion.div>
  );
}

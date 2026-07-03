import { motion } from 'framer-motion';
import { FiBriefcase, FiCalendar, FiMapPin } from 'react-icons/fi';
import { experience } from '../../data';
import SectionHeader from '../ui/SectionHeader';
import { staggerItem, viewportConfig } from '../../utils/animations';

export default function Experience() {
  return (
    <section id="experience" className="relative section-padding overflow-hidden">
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-purple-600/5 rounded-full blur-3xl" />

      <div className="max-w-6xl mx-auto">
        <SectionHeader
          eyebrow="Work History"
          title="Experience"
          subtitle="Real-world experience applying data analytics to solve business challenges."
        />

        <div className="relative max-w-3xl mx-auto">
          {/* Timeline line */}
          <div className="absolute left-6 top-0 bottom-0 w-px bg-gradient-to-b from-indigo-500/50 via-purple-500/30 to-transparent" />

          {experience.map((exp) => (
            <motion.div
              key={exp.id}
              variants={staggerItem}
              initial="hidden"
              whileInView="visible"
              viewport={viewportConfig}
              className="relative pl-16 pb-12 last:pb-0"
            >
              {/* Timeline dot */}
              <motion.div
                whileHover={{ scale: 1.1, rotate: 5 }}
                className="absolute left-0 top-0 w-12 h-12 rounded-2xl bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center shadow-lg shadow-indigo-500/20 z-10"
              >
                <FiBriefcase className="w-5 h-5 text-white" />
              </motion.div>

              {/* Content card */}
              <motion.div
                whileHover={{ x: 6, y: -2 }}
                transition={{ duration: 0.25 }}
                className="p-6 rounded-2xl glass border border-black/5 dark:border-white/5 hover:border-indigo-500/25 hover:shadow-lg hover:shadow-indigo-500/10 transition-all"
              >
                <div className="flex flex-wrap items-start justify-between gap-3 mb-4">
                  <div>
                    <h3 className="font-poppins font-bold text-slate-900 dark:text-white text-lg">{exp.role}</h3>
                    <p className="text-indigo-500 dark:text-indigo-400 font-semibold text-sm mt-0.5">{exp.company}</p>
                  </div>
                  <div className="flex flex-col gap-1 text-right">
                    <span className="flex items-center justify-end gap-1.5 text-xs text-slate-500 dark:text-slate-400 font-mono">
                      <FiCalendar className="w-3.5 h-3.5" />
                      {exp.period}
                    </span>
                    <span className="flex items-center justify-end gap-1.5 text-xs text-slate-500 dark:text-slate-500">
                      <FiMapPin className="w-3.5 h-3.5" />
                      {exp.type}
                    </span>
                  </div>
                </div>

                <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed mb-5">{exp.description}</p>

                <div className="mb-5">
                  <p className="text-xs font-semibold tracking-widest uppercase text-slate-500 dark:text-slate-500 mb-2.5">Skills Applied</p>
                  <div className="flex flex-wrap gap-2">
                    {exp.skills.map((skill) => (
                      <span
                        key={skill}
                        className="text-xs px-3 py-1.5 rounded-lg bg-indigo-500/10 text-indigo-600 dark:text-indigo-300 border border-indigo-500/20 hover:bg-indigo-500/20 transition-colors"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>

                <motion.a
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.97 }}
                  href={exp.certFile}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-xl text-sm font-medium bg-indigo-500/10 border border-indigo-500/20 text-indigo-600 dark:text-indigo-300 hover:bg-indigo-500/20 hover:border-indigo-500/40 transition-all"
                >
                  <span>📄</span>
                  View Certificate
                </motion.a>
              </motion.div>
            </motion.div>
          ))}

          {/* Future marker */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={viewportConfig}
            transition={{ delay: 0.5 }}
            className="relative pl-16"
          >
            <div className="absolute left-0 w-12 h-12 rounded-2xl border-2 border-dashed border-indigo-500/30 flex items-center justify-center">
              <span className="text-indigo-500/50 text-lg">✨</span>
            </div>
            <div className="py-4">
              <p className="text-slate-500 dark:text-slate-600 text-sm italic">Next opportunity...</p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

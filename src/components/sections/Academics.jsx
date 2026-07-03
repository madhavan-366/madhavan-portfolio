import { motion } from 'framer-motion';
import { education } from '../../data';
import SectionHeader from '../ui/SectionHeader';
import { staggerContainer, staggerItem, viewportConfig } from '../../utils/animations';

export default function Academics() {
  return (
    <section id="academics" className="relative section-padding overflow-hidden">
      <div className="absolute top-0 left-0 w-80 h-80 bg-cyan-600/5 rounded-full blur-3xl" />

      <div className="max-w-6xl mx-auto">
        <SectionHeader
          eyebrow="Education"
          title="Academics"
          subtitle="My academic journey from school to my specialization in Artificial Intelligence and Data Science."
        />

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewportConfig}
          className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto"
        >
          {education.map((edu) => (
            <motion.div
              key={edu.id}
              variants={staggerItem}
              whileHover={{ y: -8, scale: 1.015 }}
              transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
              className="group relative p-7 rounded-2xl glass border border-black/5 dark:border-white/5 hover:border-indigo-500/30 hover:shadow-xl hover:shadow-indigo-500/10 transition-all overflow-hidden"
            >
              {/* Top gradient accent */}
              <div className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${edu.color} opacity-70 group-hover:opacity-100 transition-opacity`} />

              {/* Icon */}
              <motion.div
                whileHover={{ rotate: 8, scale: 1.1 }}
                transition={{ duration: 0.3 }}
                className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${edu.color} flex items-center justify-center text-2xl mb-5 shadow-lg`}
              >
                {edu.icon}
              </motion.div>

              {/* Content */}
              <h3 className="font-poppins font-bold text-slate-900 dark:text-white text-base leading-snug mb-2">
                {edu.degree}
              </h3>
              <p className="text-indigo-500 dark:text-indigo-400 font-semibold text-sm mb-1">{edu.institution}</p>
              <p className="text-slate-500 dark:text-slate-500 text-xs font-mono mb-5">{edu.period}</p>

              {/* Score badge */}
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-indigo-500/10 border border-indigo-500/10">
                <span className={`text-xl font-black bg-gradient-to-r ${edu.color} bg-clip-text text-transparent`}>
                  {edu.score}
                </span>
              </div>

              {/* Bottom glow on hover */}
              <div className={`absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t ${edu.color} opacity-0 group-hover:opacity-5 transition-opacity pointer-events-none`} />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

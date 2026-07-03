import { motion } from 'framer-motion';
import { events } from '../../data';
import SectionHeader from '../ui/SectionHeader';
import { staggerContainer, staggerItem, viewportConfig } from '../../utils/animations';

export default function Events() {
  return (
    <section id="events" className="relative section-padding overflow-hidden">
      <div className="absolute top-1/2 left-0 -translate-y-1/2 w-80 h-80 bg-violet-600/5 rounded-full blur-3xl" />

      <div className="max-w-6xl mx-auto">
        <SectionHeader
          eyebrow="Competitions"
          title="Events & Participation"
          subtitle="Participating in hackathons and challenges to build, learn, and compete under real constraints."
        />

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewportConfig}
          className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {events.map((evt) => (
            <motion.div
              key={evt.id}
              variants={staggerItem}
              whileHover={{ y: -8, scale: 1.015 }}
              transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
              className="group relative p-6 rounded-2xl glass border border-black/5 dark:border-white/5 hover:border-indigo-500/30 hover:shadow-xl hover:shadow-indigo-500/10 transition-all flex flex-col overflow-hidden"
            >
              {/* Top gradient accent */}
              <div className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${evt.color} opacity-60 group-hover:opacity-100 transition-opacity`} />

              {/* Icon */}
              <motion.div
                whileHover={{ rotate: 10, scale: 1.1 }}
                transition={{ duration: 0.3 }}
                className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${evt.color} flex items-center justify-center text-2xl mb-5 shadow-lg`}
              >
                {evt.icon}
              </motion.div>

              {/* Content */}
              <h3 className="font-poppins font-bold text-slate-900 dark:text-white text-base mb-1">{evt.title}</h3>
              {evt.subtitle && (
                <p className="text-indigo-500 dark:text-indigo-400 text-xs font-medium mb-3">{evt.subtitle}</p>
              )}

              {/* Badge */}
              <span className="inline-flex items-center gap-1.5 text-xs font-semibold px-3 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-600 dark:text-indigo-300 mb-5 w-fit">
                <span className="w-1.5 h-1.5 rounded-full bg-indigo-400" />
                {evt.badge}
              </span>

              {/* View Certificate button */}
              <motion.a
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                href={`/hackathons/${evt.file}`}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-auto inline-flex items-center justify-center gap-2 w-full py-2.5 rounded-xl text-sm font-semibold bg-gradient-to-r from-indigo-500/10 to-purple-500/10 border border-indigo-500/20 text-indigo-600 dark:text-indigo-300 hover:from-indigo-500/20 hover:to-purple-500/20 hover:border-indigo-500/40 transition-all"
              >
                <span>📄</span>
                View Certificate
              </motion.a>

              {/* Bottom glow */}
              <div className={`absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t ${evt.color} opacity-0 group-hover:opacity-5 transition-opacity pointer-events-none`} />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

import { motion } from 'framer-motion';
import { hackathons } from '../../data';
import SectionHeader from '../ui/SectionHeader';
import { staggerContainer, staggerItem, viewportConfig } from '../../utils/animations';

export default function Hackathons() {
  return (
    <section id="hackathons" className="relative section-padding overflow-hidden">
      <div className="absolute top-1/2 left-0 -translate-y-1/2 w-80 h-80 bg-violet-600/5 rounded-full blur-3xl" />

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
              className="group relative p-6 rounded-2xl glass border border-white/5 hover:border-indigo-500/25 transition-all flex flex-col overflow-hidden"
            >
              {/* Top gradient accent */}
              <div className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${hack.color} opacity-60 group-hover:opacity-100 transition-opacity`} />

              {/* Icon */}
              <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${hack.color} flex items-center justify-center text-2xl mb-5 shadow-lg`}>
                {hack.icon}
              </div>

              {/* Content */}
              <h3 className="font-poppins font-bold text-white text-base mb-2">{hack.title}</h3>

              {/* Badge */}
              <span className="inline-flex items-center gap-1.5 text-xs font-semibold px-3 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-300 mb-5 w-fit">
                <span className="w-1.5 h-1.5 rounded-full bg-indigo-400" />
                {hack.badge}
              </span>

              {/* View Certificate button */}
              <a
                href={`/hackathons/${hack.file}`}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-auto inline-flex items-center justify-center gap-2 w-full py-2.5 rounded-xl text-sm font-semibold bg-gradient-to-r from-indigo-500/10 to-purple-500/10 border border-indigo-500/20 text-indigo-300 hover:from-indigo-500/20 hover:to-purple-500/20 hover:border-indigo-500/40 transition-all"
              >
                <span>📄</span>
                View Certificate
              </a>

              {/* Bottom glow */}
              <div className={`absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t ${hack.color} opacity-0 group-hover:opacity-5 transition-opacity pointer-events-none`} />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

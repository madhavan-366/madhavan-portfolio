import { motion } from 'framer-motion';
import { skills, alsoFamiliar } from '../../data';
import SectionHeader from '../ui/SectionHeader';
import TechMarquee from '../ui/TechMarquee';
import { staggerContainer, staggerItem, viewportConfig } from '../../utils/animations';

const colorMap = {
  indigo: {
    bg: 'bg-indigo-500/10', border: 'border-indigo-500/20', text: 'text-indigo-600 dark:text-indigo-400',
    hover: 'hover:border-indigo-500/50 hover:bg-indigo-500/20', glow: 'hover:shadow-indigo-500/20',
    dot: 'bg-indigo-500', header: 'from-indigo-500 to-purple-500',
  },
  purple: {
    bg: 'bg-purple-500/10', border: 'border-purple-500/20', text: 'text-purple-600 dark:text-purple-400',
    hover: 'hover:border-purple-500/50 hover:bg-purple-500/20', glow: 'hover:shadow-purple-500/20',
    dot: 'bg-purple-500', header: 'from-purple-500 to-pink-500',
  },
  cyan: {
    bg: 'bg-cyan-500/10', border: 'border-cyan-500/20', text: 'text-cyan-600 dark:text-cyan-400',
    hover: 'hover:border-cyan-500/50 hover:bg-cyan-500/20', glow: 'hover:shadow-cyan-500/20',
    dot: 'bg-cyan-500', header: 'from-cyan-500 to-blue-500',
  },
  blue: {
    bg: 'bg-blue-500/10', border: 'border-blue-500/20', text: 'text-blue-600 dark:text-blue-400',
    hover: 'hover:border-blue-500/50 hover:bg-blue-500/20', glow: 'hover:shadow-blue-500/20',
    dot: 'bg-blue-500', header: 'from-blue-500 to-cyan-500',
  },
  violet: {
    bg: 'bg-violet-500/10', border: 'border-violet-500/20', text: 'text-violet-600 dark:text-violet-400',
    hover: 'hover:border-violet-500/50 hover:bg-violet-500/20', glow: 'hover:shadow-violet-500/20',
    dot: 'bg-violet-500', header: 'from-violet-500 to-indigo-500',
  },
  emerald: {
    bg: 'bg-emerald-500/10', border: 'border-emerald-500/20', text: 'text-emerald-600 dark:text-emerald-400',
    hover: 'hover:border-emerald-500/50 hover:bg-emerald-500/20', glow: 'hover:shadow-emerald-500/20',
    dot: 'bg-emerald-500', header: 'from-emerald-500 to-teal-500',
  },
  amber: {
    bg: 'bg-amber-500/10', border: 'border-amber-500/20', text: 'text-amber-600 dark:text-amber-400',
    hover: 'hover:border-amber-500/50 hover:bg-amber-500/20', glow: 'hover:shadow-amber-500/20',
    dot: 'bg-amber-500', header: 'from-amber-500 to-orange-500',
  },
};

function SkillTag({ name, color }) {
  const c = colorMap[color] || colorMap.indigo;
  return (
    <motion.div
      whileHover={{ scale: 1.06, y: -2 }}
      whileTap={{ scale: 0.98 }}
      transition={{ type: 'spring', stiffness: 400, damping: 17 }}
      className={`px-3 py-1.5 rounded-lg text-xs sm:text-sm font-medium border cursor-default
        ${c.bg} ${c.border} ${c.text} ${c.hover}
        transition-all duration-200 hover:shadow-lg ${c.glow}`}
    >
      <span className="flex items-center gap-1.5">
        <span className={`w-1.5 h-1.5 rounded-full flex-shrink-0 ${c.dot}`} />
        <span>{name}</span>
      </span>
    </motion.div>
  );
}

function SkillCategory({ data }) {
  const c = colorMap[data.color] || colorMap.indigo;

  return (
    <motion.div
      variants={staggerItem}
      whileHover={{ y: -5 }}
      transition={{ duration: 0.25 }}
      className="h-full p-5 rounded-2xl glass border border-black/5 dark:border-white/5 hover:border-indigo-500/20 hover:shadow-lg hover:shadow-indigo-500/5 transition-all flex flex-col"
    >
      <div className="flex items-center gap-2.5 mb-4">
        <span className="text-base flex-shrink-0">{data.icon}</span>
        <div className={`w-7 h-1 rounded-full bg-gradient-to-r ${c.header} flex-shrink-0`} />
        <h3 className="font-poppins font-bold text-slate-900 dark:text-white text-xs tracking-wide uppercase leading-tight">{data.label}</h3>
      </div>
      <div className="flex flex-wrap gap-2 content-start">
        {data.items.map((skill) => (
          <SkillTag key={skill} name={skill} color={data.color} />
        ))}
      </div>
    </motion.div>
  );
}

export default function Skills() {
  return (
    <section id="skills" className="relative section-padding overflow-hidden">
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-cyan-600/5 rounded-full blur-3xl" />

      <div className="max-w-7xl mx-auto">
        <SectionHeader
          eyebrow="Technical Skills"
          title="What I Work With"
          subtitle="From machine learning pipelines to production web apps — here's my toolkit."
        />

        {/* Responsive balanced grid: 1 col mobile → 2 sm → 3 md → 4 lg → 7 xl (single row) */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewportConfig}
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-7 gap-4 items-stretch"
        >
          {Object.entries(skills).map(([key, data]) => (
            <SkillCategory key={key} data={data} />
          ))}
        </motion.div>

        {/* Also Familiar With — infinite marquee */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={viewportConfig}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="mt-8 py-6 rounded-2xl glass border border-black/5 dark:border-white/5"
        >
          <p className="text-xs font-semibold tracking-widest uppercase text-slate-500 dark:text-slate-500 mb-5 text-center">Also Familiar With</p>
          <TechMarquee items={alsoFamiliar} />
        </motion.div>
      </div>
    </section>
  );
}

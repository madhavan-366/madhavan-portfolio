import { motion } from 'framer-motion';
import { certificates } from '../../data';
import SectionHeader from '../ui/SectionHeader';
import { staggerContainer, staggerItem, viewportConfig } from '../../utils/animations';

function CertCard({ cert }) {
  return (
    <motion.div
      variants={staggerItem}
      whileHover={{ y: -5, scale: 1.02 }}
      transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
      className="group relative p-5 rounded-2xl glass border border-black/5 dark:border-white/5 hover:border-indigo-500/25 hover:shadow-lg hover:shadow-indigo-500/10 transition-all flex flex-col h-full"
    >
      {/* Gradient top line */}
      <div className={`absolute top-0 left-5 right-5 h-px bg-gradient-to-r ${cert.color} opacity-0 group-hover:opacity-70 transition-opacity`} />

      {/* Icon */}
      <motion.div
        whileHover={{ rotate: 8, scale: 1.1 }}
        transition={{ duration: 0.25 }}
        className={`w-11 h-11 rounded-xl bg-gradient-to-br ${cert.color} flex items-center justify-center text-lg mb-4 shadow-lg flex-shrink-0`}
      >
        {cert.icon}
      </motion.div>

      {/* Content */}
      <h4 className="font-semibold text-slate-900 dark:text-white text-sm leading-tight mb-2 group-hover:text-indigo-600 dark:group-hover:text-indigo-300 transition-colors flex-1">
        {cert.title}
      </h4>
      <p className="text-indigo-500 dark:text-indigo-400 text-xs font-medium mb-4">{cert.issuer}</p>

      {/* View Certificate button */}
      <motion.a
        whileHover={{ scale: 1.03 }}
        whileTap={{ scale: 0.97 }}
        href={`/certificates/${cert.file}`}
        target="_blank"
        rel="noopener noreferrer"
        className="mt-auto inline-flex items-center justify-center gap-1.5 w-full py-2 rounded-xl text-xs font-semibold bg-indigo-500/10 border border-indigo-500/20 text-indigo-600 dark:text-indigo-300 hover:bg-indigo-500/20 hover:border-indigo-500/40 transition-all"
      >
        <span>📄</span>
        View Certificate
      </motion.a>
    </motion.div>
  );
}

export default function Certificates() {
  return (
    <section id="certificates" className="relative section-padding overflow-hidden">
      <div className="absolute bottom-0 right-1/4 w-64 h-64 bg-indigo-600/5 rounded-full blur-3xl" />

      <div className="max-w-5xl mx-auto">
        <SectionHeader
          eyebrow="Credentials"
          title="Certificates"
          subtitle="A compact collection of learning credentials in AI and data analytics."
        />

        {/* Grid */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewportConfig}
          className="grid sm:grid-cols-2 md:grid-cols-3 gap-4 items-stretch"
        >
          {certificates.map((cert) => (
            <CertCard key={cert.id} cert={cert} />
          ))}
        </motion.div>
      </div>
    </section>
  );
}

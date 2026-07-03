import { motion } from 'framer-motion';
import { FiMail, FiPhone, FiLinkedin, FiGithub, FiMapPin } from 'react-icons/fi';
import { personalInfo } from '../../data';
import SectionHeader from '../ui/SectionHeader';
import { staggerContainer, staggerItem, viewportConfig } from '../../utils/animations';

const leftCards = [
  {
    label: 'Location',
    value: 'Chennai, Tamil Nadu, India',
    href: null,
    icon: FiMapPin,
    color: 'from-violet-500 to-purple-600',
  },
  {
    label: 'Email',
    value: personalInfo.email,
    href: `mailto:${personalInfo.email}`,
    icon: FiMail,
    color: 'from-indigo-500 to-purple-600',
    external: false,
  },
  {
    label: 'Phone',
    value: `+91 ${personalInfo.phone}`,
    href: `tel:+91${personalInfo.phone}`,
    icon: FiPhone,
    color: 'from-cyan-500 to-blue-600',
    external: false,
  },
];

const rightCards = [
  {
    label: 'LinkedIn',
    value: 'madhavankm366',
    href: personalInfo.linkedin,
    icon: FiLinkedin,
    color: 'from-blue-500 to-indigo-600',
    external: true,
  },
  {
    label: 'GitHub',
    value: 'madhavan-366',
    href: personalInfo.github,
    icon: FiGithub,
    color: 'from-slate-500 to-slate-700',
    external: true,
  },
];

function ContactCard({ card, extraPadding = false }) {
  const inner = (
    <div className={`flex items-center gap-4 ${extraPadding ? 'p-7' : 'p-5'}`}>
      <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${card.color} flex items-center justify-center shadow-lg flex-shrink-0`}>
        <card.icon className="w-5 h-5 text-white" />
      </div>
      <div className="min-w-0">
        <p className="text-xs text-slate-500 dark:text-slate-500 font-semibold tracking-widest uppercase mb-0.5">
          {card.label}
        </p>
        <p className="font-medium text-sm text-slate-900 dark:text-white truncate group-hover:text-indigo-500 dark:group-hover:text-indigo-400 transition-colors">
          {card.value}
        </p>
      </div>
      {card.href && (
        <div className="ml-auto opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all text-slate-400 dark:text-slate-500 flex-shrink-0">
          →
        </div>
      )}
    </div>
  );

  const cls = "group w-full rounded-2xl glass border border-black/5 dark:border-white/5 hover:border-indigo-500/25 hover:shadow-lg hover:shadow-indigo-500/10 transition-all";

  if (card.href) {
    return (
      <motion.a
        variants={staggerItem}
        whileHover={{ y: -3 }}
        transition={{ duration: 0.2 }}
        href={card.href}
        target={card.external ? '_blank' : undefined}
        rel={card.external ? 'noopener noreferrer' : undefined}
        className={cls}
      >
        {inner}
      </motion.a>
    );
  }

  return (
    <motion.div
      variants={staggerItem}
      className={cls}
    >
      {inner}
    </motion.div>
  );
}

export default function Contact() {
  return (
    <section id="contact" className="relative section-padding overflow-hidden">
      <div className="absolute top-1/2 left-0 -translate-y-1/2 w-80 h-80 bg-indigo-600/5 rounded-full blur-3xl" />

      <div className="max-w-6xl mx-auto">
        <SectionHeader
          eyebrow="Get In Touch"
          title="Let's Connect"
          subtitle="Open to internships, collaborations, and interesting conversations."
        />

        {/* Two-column card grid */}
        <div className="grid lg:grid-cols-2 gap-6 items-start">

          {/* Left column — 3 cards */}
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={viewportConfig}
            className="flex flex-col gap-4"
          >
            {leftCards.map((card) => (
              <ContactCard key={card.label} card={card} />
            ))}
          </motion.div>

          {/* Right column — 2 cards with extra vertical padding to match height */}
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={viewportConfig}
            className="flex flex-col gap-4"
          >
            {rightCards.map((card) => (
              <ContactCard key={card.label} card={card} extraPadding />
            ))}
          </motion.div>

        </div>
      </div>
    </section>
  );
}

import { motion } from 'framer-motion';
import { FiGithub, FiLinkedin, FiMail, FiArrowUp, FiInstagram } from 'react-icons/fi';
import { personalInfo } from '../../data';

export default function Footer() {
  const scrollTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });

  const socials = [
    { href: personalInfo.github, icon: FiGithub, external: true, label: 'GitHub' },
    { href: personalInfo.linkedin, icon: FiLinkedin, external: true, label: 'LinkedIn' },
    { href: `mailto:${personalInfo.email}`, icon: FiMail, external: false, label: 'Email' },
    { href: personalInfo.instagram, icon: FiInstagram, external: true, label: 'Instagram' },
  ];

  return (
    <footer className="relative border-t border-black/5 dark:border-white/5 py-10 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-indigo-500 to-cyan-500 flex items-center justify-center text-white font-bold text-sm">
              M
            </div>
            <p className="gradient-text font-semibold text-sm">
              Madhavan K M
            </p>
          </div>

          <div className="flex items-center gap-4">
            {socials.map((s) => (
              <motion.a
                key={s.label}
                href={s.href}
                target={s.external ? '_blank' : undefined}
                rel={s.external ? 'noopener noreferrer' : undefined}
                aria-label={s.label}
                whileHover={{ y: -3, scale: 1.08 }}
                whileTap={{ scale: 0.95 }}
                transition={{ type: 'spring', stiffness: 400, damping: 17 }}
                className="text-slate-500 dark:text-slate-500 hover:text-indigo-500 dark:hover:text-indigo-400 transition-colors p-2 rounded-lg hover:bg-indigo-500/10"
              >
                <s.icon className="w-5 h-5" />
              </motion.a>
            ))}

            <motion.button
              onClick={scrollTop}
              whileHover={{ y: -3 }}
              whileTap={{ scale: 0.95 }}
              className="ml-2 p-2.5 rounded-xl bg-indigo-500/10 border border-indigo-500/20 text-indigo-500 dark:text-indigo-400 hover:bg-indigo-500/20 transition-all"
              aria-label="Back to top"
            >
              <FiArrowUp className="w-4 h-4" />
            </motion.button>
          </div>
        </div>
      </div>
    </footer>
  );
}

import { motion } from 'framer-motion';
import { TypeAnimation } from 'react-type-animation';
import { FiGithub, FiLinkedin, FiMail, FiArrowDown } from 'react-icons/fi';
import { HiDownload } from 'react-icons/hi';
import { personalInfo } from '../../data';
import { fadeInRight, staggerContainer, staggerItem } from '../../utils/animations';
import MagneticButton from '../ui/MagneticButton';

export default function Hero() {
  const scrollToProjects = () => {
    document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' });
  };

  const typeSequence = personalInfo.typingStrings.flatMap(s => [s, 2000]);

  const socials = [
    { href: personalInfo.github, icon: FiGithub, external: true, label: 'GitHub' },
    { href: personalInfo.linkedin, icon: FiLinkedin, external: true, label: 'LinkedIn' },
    { href: `mailto:${personalInfo.email}`, icon: FiMail, external: false, label: 'Email' },
  ];

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center overflow-hidden"
    >
      {/* Background elements */}
      <div className="absolute inset-0 bg-grid opacity-30" />
      <div className="absolute top-1/4 right-1/4 w-72 h-72 bg-indigo-600/15 rounded-full blur-3xl animate-pulse-slow" />
      <div className="absolute bottom-1/4 left-1/4 w-96 h-96 bg-purple-600/10 rounded-full blur-3xl animate-pulse-slow" style={{ animationDelay: '2s' }} />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-cyan-600/5 rounded-full blur-3xl" />

      <div className="relative z-10 max-w-6xl mx-auto px-6 py-24 w-full">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Column */}
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            animate="visible"
            className="space-y-6"
          >
            <motion.div variants={staggerItem}>
              <span className="inline-flex items-center gap-2 text-xs font-semibold tracking-widest uppercase text-indigo-500 dark:text-indigo-400 px-3 py-1.5 rounded-full border border-indigo-500/30 bg-indigo-500/10">
                <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" />
                Open to Opportunities
              </span>
            </motion.div>

            <motion.h1
              variants={staggerItem}
              className="font-poppins font-black leading-none"
            >
              <span className="block text-5xl sm:text-6xl xl:text-7xl text-slate-900 dark:text-white">
                Madhavan
              </span>
              <span className="block text-5xl sm:text-6xl xl:text-7xl gradient-text">
                K M
              </span>
            </motion.h1>

            <motion.div variants={staggerItem} className="flex items-center gap-3">
              <span className="text-slate-600 dark:text-slate-400 text-lg font-medium">
                {personalInfo.title}
              </span>
            </motion.div>

            <motion.div variants={staggerItem} className="h-8">
              <span className="text-indigo-500 dark:text-indigo-400 font-mono text-base">
                &gt;{' '}
                <TypeAnimation
                  sequence={typeSequence}
                  repeat={Infinity}
                  speed={60}
                  deletionSpeed={80}
                />
              </span>
            </motion.div>

            <motion.p
              variants={staggerItem}
              className="text-slate-600 dark:text-slate-400 text-base leading-relaxed max-w-md"
            >
              {personalInfo.bio}
            </motion.p>

            <motion.div variants={staggerItem} className="flex flex-wrap gap-3 pt-2">
              <MagneticButton onClick={scrollToProjects} className="btn-primary">
                Explore Projects
                <FiArrowDown className="w-4 h-4" />
              </MagneticButton>
              <MagneticButton as="a" href="/resume.pdf" download="Madhavan_K_M_Resume.pdf" className="btn-secondary">
                <HiDownload className="w-4 h-4" />
                Download Resume
              </MagneticButton>
            </motion.div>

            <motion.div variants={staggerItem} className="flex items-center gap-4 pt-2">
              {socials.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target={s.external ? '_blank' : undefined}
                  rel={s.external ? 'noopener noreferrer' : undefined}
                  aria-label={s.label}
                  className="text-slate-500 dark:text-slate-500 hover:text-indigo-500 dark:hover:text-indigo-400 transition-colors p-2 rounded-lg hover:bg-indigo-500/10"
                >
                  <s.icon className="w-5 h-5" />
                </a>
              ))}
              <div className="w-px h-5 bg-black/10 dark:bg-white/10" />
              <span className="text-sm font-medium text-indigo-500 dark:text-indigo-400 tracking-wide">
                Chennai, Tamil Nadu, India
              </span>
            </motion.div>
          </motion.div>

          {/* Right Column — Profile visual */}
          <motion.div
            variants={fadeInRight}
            initial="hidden"
            animate="visible"
            className="flex justify-center lg:justify-end"
          >
            <div className="relative">
              {/* Orbital rings */}
              <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                <div className="w-[320px] h-[320px] rounded-full border border-indigo-500/20 absolute" />
                <div className="w-[380px] h-[380px] rounded-full border border-purple-500/10 absolute" />
                <div className="w-[440px] h-[440px] rounded-full border border-cyan-500/5 absolute" />
              </div>

              {/* Profile image container */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.3, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                whileHover={{ scale: 1.02 }}
                className="relative w-64 h-64 sm:w-72 sm:h-72"
              >
                {/* Glow behind avatar */}
                <div className="absolute inset-0 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-full blur-2xl opacity-30 scale-110" />

                {/* Avatar */}
                <div className="relative w-full h-full rounded-full overflow-hidden border-2 border-indigo-500/30 shadow-2xl shadow-indigo-500/20 bg-gradient-to-br from-[#111827] to-[#1e1b4b] flex items-center justify-center">
                  <img
                    src="/profile.jpeg"
                    alt="Madhavan K M — AI/ML Engineer and Data Analyst"
                    className="w-full h-full object-cover"
                    loading="eager"
                    fetchPriority="high"
                    decoding="async"
                    onError={(e) => {
                      e.target.style.display = 'none';
                      e.target.nextSibling.style.display = 'flex';
                    }}
                  />
                  {/* Fallback */}
                  <div className="hidden w-full h-full flex-col items-center justify-center gap-3 text-center px-4">
                    <div className="text-6xl font-black gradient-text font-poppins">MK</div>
                    <p className="text-xs text-slate-500 font-mono">Add profile.jpeg to /public</p>
                  </div>
                </div>

                {/* Decorative dots */}
                <div className="absolute -bottom-2 -right-2 w-6 h-6 bg-gradient-to-br from-indigo-500 to-cyan-500 rounded-full shadow-lg shadow-indigo-500/50" />
                <div className="absolute -top-2 -left-2 w-4 h-4 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full shadow-lg" />
              </motion.div>
            </div>
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
        >
          <span className="text-xs text-slate-500 dark:text-slate-600 tracking-widest uppercase font-mono">Scroll</span>
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
          >
            <FiArrowDown className="w-4 h-4 text-indigo-500 dark:text-indigo-400" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

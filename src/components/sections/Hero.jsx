import { motion } from 'framer-motion';
import { TypeAnimation } from 'react-type-animation';
import { FiGithub, FiLinkedin, FiMail, FiArrowDown, FiMapPin } from 'react-icons/fi';
import { HiDownload } from 'react-icons/hi';
import { personalInfo } from '../../data';
import { staggerContainer, staggerItem, fadeInRight } from '../../utils/animations';

export default function Hero() {
  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  const typeSequence = personalInfo.typingStrings.flatMap((s) => [s, 2200]);

  const socials = [
    { href: personalInfo.github, icon: FiGithub, label: 'GitHub', external: true },
    { href: personalInfo.linkedin, icon: FiLinkedin, label: 'LinkedIn', external: true },
    { href: `mailto:${personalInfo.email}`, icon: FiMail, label: 'Email', external: false },
  ];

  return (
    <section
      id="home"
      className="relative min-h-[92vh] flex items-center pt-24 pb-16 overflow-hidden bg-grid-subtle"
    >
      {/* Subtle warm ambient illumination */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[560px] h-[360px] bg-[#C49A6C]/[0.06] rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute top-1/3 right-10 w-[320px] h-[320px] bg-[#40332A]/25 rounded-full blur-[110px] pointer-events-none" />

      <div className="section-container relative z-10 w-full">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Hero Column */}
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            animate="visible"
            className="lg:col-span-7 space-y-6 text-left"
          >
            {/* Status Pill */}
            <motion.div variants={staggerItem}>
              <span className="badge-subtle">
                <span className="w-2 h-2 rounded-full bg-[var(--accent)]" />
                {personalInfo.availability}
              </span>
            </motion.div>

            {/* Name & Headline */}
            <motion.div variants={staggerItem} className="space-y-2">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight leading-[1.1] text-[var(--text-primary)]">
                Hi, I&apos;m{' '}
                <span className="block text-gradient-primary whitespace-nowrap">
                  {personalInfo.name}
                </span>
              </h1>
              <p className="text-xl sm:text-2xl font-semibold text-[var(--text-secondary)]">
                {personalInfo.headline}
              </p>
            </motion.div>

            {/* Dynamic Typewriter Sequence */}
            <motion.div variants={staggerItem} className="min-h-[28px] flex items-center">
              <span className="font-mono text-sm sm:text-base text-[var(--accent)] font-medium bg-[var(--accent-tint)] px-3 py-1 rounded-md border border-[var(--accent-border)]">
                &gt;{' '}
                <TypeAnimation
                  sequence={typeSequence}
                  repeat={Infinity}
                  speed={55}
                  deletionSpeed={75}
                />
              </span>
            </motion.div>

            {/* Professional Summary */}
            <motion.p
              variants={staggerItem}
              className="text-base sm:text-lg text-[var(--text-secondary)] leading-relaxed max-w-2xl font-normal"
            >
              {personalInfo.summary}
            </motion.p>

            {/* Primary Action Buttons */}
            <motion.div variants={staggerItem} className="flex flex-wrap items-center gap-3 pt-2">
              <button
                onClick={() => scrollTo('projects')}
                className="btn-primary"
              >
                <span>View Projects</span>
                <FiArrowDown className="w-4 h-4" />
              </button>

              <a
                href="/resume.pdf"
                download="Madhavan_K_M_Resume.pdf"
                className="btn-secondary"
              >
                <HiDownload className="w-4 h-4 text-[var(--accent)]" />
                <span>Download Resume</span>
              </a>

              <button
                onClick={() => scrollTo('contact')}
                className="px-4 py-2.5 rounded-xl text-xs sm:text-sm font-semibold text-[var(--text-secondary)] hover:text-[var(--accent)] transition-colors"
              >
                Get In Touch →
              </button>
            </motion.div>

            {/* Quick Stats Grid */}
            <motion.div
              variants={staggerItem}
              className="pt-6 border-t border-[var(--border-subtle)] grid grid-cols-2 sm:grid-cols-4 gap-4"
            >
              {personalInfo.stats.map((stat, i) => (
                <div key={i} className="space-y-0.5">
                  <div className="text-xl sm:text-2xl font-black text-[var(--text-primary)] font-heading">
                    {stat.value}
                  </div>
                  <div className="text-xs font-semibold text-[var(--accent)]">
                    {stat.label}
                  </div>
                  <div className="text-[11px] text-[var(--text-muted)] truncate">
                    {stat.detail}
                  </div>
                </div>
              ))}
            </motion.div>

            {/* Social Links & Location */}
            <motion.div variants={staggerItem} className="flex items-center gap-4 pt-2">
              <div className="flex items-center gap-2">
                {socials.map((s) => (
                  <a
                    key={s.label}
                    href={s.href}
                    target={s.external ? '_blank' : undefined}
                    rel={s.external ? 'noopener noreferrer' : undefined}
                    aria-label={s.label}
                    className="p-2.5 rounded-xl card-surface text-[var(--text-secondary)] hover:text-[var(--accent)] transition-colors"
                  >
                    <s.icon className="w-4 h-4" />
                  </a>
                ))}
              </div>

              <div className="w-px h-5 bg-[var(--border-subtle)]" />

              <span className="inline-flex items-center gap-1.5 text-xs text-[var(--text-muted)] font-medium">
                <FiMapPin className="w-3.5 h-3.5 text-[var(--accent)]" />
                {personalInfo.location}
              </span>
            </motion.div>

          </motion.div>

          {/* Right Column: Sleek Profile Card */}
          <motion.div
            variants={fadeInRight}
            initial="hidden"
            animate="visible"
            className="lg:col-span-5 flex justify-center lg:justify-end"
          >
            <div className="relative w-full max-w-sm">
              {/* Subtle warm card depth */}
              <div className="absolute inset-0 bg-[#40332A]/30 rounded-3xl blur-2xl -z-10 transform scale-95" />

              {/* Main Profile Showcase Card */}
              <div className="card-surface rounded-3xl p-6 sm:p-7 relative overflow-hidden border border-[var(--border-subtle)] shadow-warm-lg">
                
                {/* Header tag */}
                <div className="flex items-center gap-2 mb-5">
                  <span className="w-2.5 h-2.5 rounded-full bg-[var(--accent)]" />
                  <span className="text-xs font-mono font-medium text-[var(--text-muted)] uppercase tracking-wider">
                    Student Engineer
                  </span>
                </div>

                {/* Profile Image Frame */}
                <div className="relative aspect-square w-full rounded-2xl overflow-hidden mb-5 bg-[#1B1714] border border-[var(--border-subtle)] shadow-inner group">
                  <img
                    src="/profile.jpeg"
                    alt="Madhavan K M — AI/ML Engineer and Software Developer"
                    className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
                    loading="eager"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#1B1714]/85 via-transparent to-transparent opacity-70" />
                  
                  <div className="absolute bottom-3 left-3 right-3 flex items-center text-[#F3EBDD] text-xs">
                    <span className="font-semibold bg-[#1B1714]/80 backdrop-blur-md px-2.5 py-1 rounded-md border border-[#F3EBDD]/15">
                      Madhavan K M
                    </span>
                  </div>
                </div>

                {/* Tech Pills Footer */}
                <div className="space-y-3">
                  <div className="text-xs font-semibold text-[var(--text-muted)] tracking-wider uppercase">
                    Core Specializations
                  </div>
                  <div className="flex flex-wrap gap-1.5">
                    {["Applied AI & ML", "React.js", "Python", "FastAPI", "Node.js", "Power BI", "SQL"].map((tag) => (
                      <span
                        key={tag}
                        className="text-[11px] px-2.5 py-1 rounded-lg bg-[var(--bg-elevated)]/45 border border-[var(--border-subtle)] text-[var(--text-secondary)] font-medium"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

              </div>

            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}

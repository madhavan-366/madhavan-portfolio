import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { HiSun, HiMoon, HiMenuAlt3, HiX } from 'react-icons/hi';
import { FiDownload, FiExternalLink } from 'react-icons/fi';
import { navLinks, personalInfo } from '../../data';
import { useActiveSection } from '../../hooks/useActiveSection';

export default function Navbar({ isDark, toggleTheme }) {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const sectionIds = navLinks.map(l => l.id);
  const activeSection = useActiveSection(sectionIds);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on resize to desktop
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) setMenuOpen(false);
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const scrollTo = (id) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
    setMenuOpen(false);
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? 'bg-[var(--bg-main)]/90 backdrop-blur-md border-b border-[var(--border-subtle)] py-3 shadow-warm-sm'
            : 'bg-transparent py-5'
        }`}
      >
        <div className="section-container flex items-center justify-between gap-3 lg:gap-4">
          {/* Brand Logo */}
          <button
            onClick={() => scrollTo('home')}
            className="flex items-center gap-3 group shrink-0"
            aria-label="Go to home"
          >
            <div className="w-10 h-10 shrink-0 rounded-xl bg-[var(--accent)] flex items-center justify-center text-[var(--accent-text-on)] font-bold text-base shadow-warm-sm group-hover:bg-[var(--accent-hover)] group-hover:scale-105 transition-all duration-200">
              MK
            </div>
            <div className="text-left hidden sm:block">
              <span className="block font-heading font-bold text-base text-[var(--text-primary)] leading-tight whitespace-nowrap">
                Madhavan K M
              </span>
              <span className="block text-xs text-[var(--accent)] font-medium whitespace-nowrap">
                AI/ML &amp; Full-Stack
              </span>
            </div>
          </button>

          {/* Desktop Navigation Links */}
          <nav
            aria-label="Primary navigation"
            className="hidden lg:flex items-center gap-0.5 xl:gap-1 shrink-0 bg-[var(--bg-card)]/85 p-1.5 rounded-full border border-[var(--border-subtle)] backdrop-blur-md"
          >
            {navLinks.map((link) => {
              const isActive = activeSection === link.id;
              return (
                <button
                  key={link.id}
                  onClick={() => scrollTo(link.id)}
                  className={`relative px-2.5 xl:px-3.5 py-1.5 text-xs font-semibold rounded-full whitespace-nowrap transition-colors duration-200 ${
                    isActive
                      ? 'text-[var(--accent-text-on)] font-bold'
                      : 'text-[var(--text-secondary)] hover:text-[var(--text-primary)]'
                  }`}
                >
                  {isActive && (
                    <motion.span
                      layoutId="nav-pill"
                      className="absolute inset-0 bg-[var(--accent)] rounded-full shadow-sm"
                      transition={{ type: 'spring', bounce: 0.2, duration: 0.35 }}
                    />
                  )}
                  <span className="relative z-10">{link.label}</span>
                </button>
              );
            })}
          </nav>

          {/* Right Action Controls */}
          <div className="flex items-center gap-3 shrink-0">
            {/* Theme Toggle */}
            <button
              onClick={toggleTheme}
              className="p-2.5 rounded-xl border bg-[var(--bg-card)] border-[var(--border-subtle)] text-[var(--text-secondary)] hover:text-[var(--accent)] hover:bg-[var(--bg-elevated)] hover:border-[var(--accent-border)] transition-all duration-200"
              aria-label={isDark ? "Switch to light theme" : "Switch to dark theme"}
            >
              {isDark ? <HiSun className="w-4 h-4 text-[var(--accent)]" /> : <HiMoon className="w-4 h-4 text-[var(--accent)]" />}
            </button>

            {/* Resume Button */}
            <a
              href="/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="hidden sm:inline-flex btn-primary py-2 px-4 text-xs tracking-wide"
            >
              <FiDownload className="w-3.5 h-3.5" />
              <span>Resume</span>
            </a>

            {/* Mobile Menu Toggle */}
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              aria-label={menuOpen ? 'Close navigation menu' : 'Open navigation menu'}
              aria-expanded={menuOpen}
              className="lg:hidden p-2.5 rounded-xl border bg-[var(--bg-card)] border-[var(--border-subtle)] text-[var(--text-secondary)] hover:text-[var(--text-primary)] hover:bg-[var(--bg-elevated)] transition-colors"
            >
              {menuOpen ? <HiX className="w-5 h-5" /> : <HiMenuAlt3 className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Drawer Navigation */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -16 }}
            transition={{ duration: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="fixed top-[74px] left-4 right-4 z-40 lg:hidden card-surface rounded-2xl p-5 shadow-warm-lg border border-[var(--border-strong)]"
          >
            <div className="flex flex-col gap-1.5">
              {navLinks.map((link) => {
                const isActive = activeSection === link.id;
                return (
                  <button
                    key={link.id}
                    onClick={() => scrollTo(link.id)}
                    className={`w-full text-left px-4 py-2.5 rounded-xl text-sm font-semibold transition-all ${
                      isActive
                        ? 'bg-[var(--accent)] text-[var(--accent-text-on)] font-bold'
                        : 'text-[var(--text-secondary)] hover:text-[var(--text-primary)] hover:bg-[var(--bg-elevated)]/60'
                    }`}
                  >
                    {link.label}
                  </button>
                );
              })}
            </div>

            <div className="mt-4 pt-4 border-t border-[var(--border-subtle)] flex flex-col gap-2">
              <a
                href="/resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary w-full justify-center py-2.5 text-xs font-semibold"
              >
                <FiDownload className="w-4 h-4" />
                View & Download Resume
              </a>
              <div className="flex justify-center gap-4 pt-2 text-xs text-[var(--text-muted)]">
                <a
                  href={personalInfo.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-[var(--accent)] transition-colors inline-flex items-center gap-1"
                >
                  GitHub <FiExternalLink className="w-3 h-3" />
                </a>
                <span>·</span>
                <a
                  href={personalInfo.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-[var(--accent)] transition-colors inline-flex items-center gap-1"
                >
                  LinkedIn <FiExternalLink className="w-3 h-3" />
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

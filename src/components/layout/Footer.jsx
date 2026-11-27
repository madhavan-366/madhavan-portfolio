import { FiGithub, FiLinkedin, FiMail, FiArrowUp, FiInstagram } from 'react-icons/fi';
import { personalInfo, navLinks } from '../../data';

export default function Footer() {
  const scrollTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });

  const scrollTo = (id) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  const socials = [
    { href: personalInfo.github, icon: FiGithub, label: 'GitHub', external: true },
    { href: personalInfo.linkedin, icon: FiLinkedin, label: 'LinkedIn', external: true },
    { href: `mailto:${personalInfo.email}`, icon: FiMail, label: 'Email', external: false },
    { href: personalInfo.instagram, icon: FiInstagram, label: 'Instagram', external: true },
  ];

  return (
    <footer className="border-t border-[var(--border-subtle)] py-12 bg-[var(--bg-footer)] text-[var(--text-secondary)] text-xs">
      <div className="section-container space-y-8">
        
        {/* Top Row: Brand & Quick Links */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 pb-6 border-b border-[var(--border-subtle)]">
          {/* Brand */}
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-xl bg-[var(--accent)] flex items-center justify-center text-[var(--accent-text-on)] font-bold text-sm shadow-warm-sm">
              MK
            </div>
            <div className="text-left">
              <span className="block font-heading font-bold text-sm text-[var(--text-primary)]">
                {personalInfo.name}
              </span>
              <span className="block text-[11px] text-[var(--text-muted)]">
                {personalInfo.title}
              </span>
            </div>
          </div>

          {/* Nav Links */}
          <div className="flex flex-wrap items-center justify-center gap-4 text-xs">
            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => scrollTo(link.id)}
                className="text-[var(--text-secondary)] hover:text-[var(--accent)] transition-colors"
              >
                {link.label}
              </button>
            ))}
          </div>

          {/* Back to top */}
          <button
            onClick={scrollTop}
            className="p-2.5 rounded-xl card-surface text-[var(--text-secondary)] hover:text-[var(--accent)] transition-colors flex items-center gap-1.5"
            aria-label="Back to top"
          >
            <span>Back to top</span>
            <FiArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>

        {/* Bottom Row: Socials & Copyright */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-[var(--text-muted)] text-center sm:text-left">
            © {new Date().getFullYear()} {personalInfo.name}. All rights reserved.
          </p>

          <div className="flex items-center gap-3">
            {socials.map((s) => (
              <a
                key={s.label}
                href={s.href}
                target={s.external ? '_blank' : undefined}
                rel={s.external ? 'noopener noreferrer' : undefined}
                aria-label={s.label}
                className="p-2 rounded-lg card-surface text-[var(--text-secondary)] hover:text-[var(--accent)] transition-colors"
              >
                <s.icon className="w-4 h-4" />
              </a>
            ))}
          </div>
        </div>

      </div>
    </footer>
  );
}

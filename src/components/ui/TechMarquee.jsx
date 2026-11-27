export default function TechMarquee({ items }) {
  // Duplicate items for seamless looping
  const looped = [...items, ...items];

  return (
    <div className="relative w-full overflow-hidden mask-gradient-x">
      <div
        className="flex gap-3 w-max animate-marquee-smooth hover:[animation-play-state:paused]"
      >
        {looped.map((t, i) => (
          <span
            key={`${t}-${i}`}
            className="flex-shrink-0 text-xs sm:text-sm px-4 py-2 rounded-full bg-[var(--bg-card)] border border-[var(--border-subtle)] text-[var(--text-secondary)] hover:border-[var(--accent-border)] hover:text-[var(--accent)] hover:-translate-y-0.5 transition-all cursor-default whitespace-nowrap"
          >
            {t}
          </span>
        ))}
      </div>
    </div>
  );
}

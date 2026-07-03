export default function TechMarquee({ items }) {
  // Duplicate items for seamless looping
  const looped = [...items, ...items];

  return (
    <div className="relative w-full overflow-hidden mask-fade">
      <div
        className="flex gap-3 w-max animate-marquee hover:[animation-play-state:paused]"
      >
        {looped.map((t, i) => (
          <span
            key={`${t}-${i}`}
            className="flex-shrink-0 text-xs sm:text-sm px-4 py-2 rounded-full glass border border-black/5 dark:border-white/5 text-slate-600 dark:text-slate-400 hover:border-indigo-500/30 hover:text-indigo-600 dark:hover:text-indigo-300 hover:-translate-y-0.5 transition-all cursor-default whitespace-nowrap"
          >
            {t}
          </span>
        ))}
      </div>
    </div>
  );
}

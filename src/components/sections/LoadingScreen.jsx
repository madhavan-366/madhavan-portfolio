import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const loadingSteps = [
  { text: "Initializing Portfolio...", progress: 12 },
  { text: "Loading AI Models...", progress: 28 },
  { text: "Loading Projects...", progress: 48 },
  { text: "Loading Experience...", progress: 64 },
  { text: "Loading Skills...", progress: 80 },
  { text: "Loading Complete", progress: 96 },
  { text: "Welcome.", progress: 100 },
];

function GradientOrb() {
  return (
    <div className="relative w-28 h-28 flex items-center justify-center">
      {/* Outer spinning ring */}
      <motion.div
        animate={{ rotate: 360 }}
        transition={{ duration: 3, repeat: Infinity, ease: 'linear' }}
        className="absolute inset-0 rounded-full"
        style={{
          background: 'conic-gradient(from 0deg, transparent 70%, #6366f1, #8b5cf6, #06b6d4, transparent)',
        }}
      />
      {/* Inner ring counter-spin */}
      <motion.div
        animate={{ rotate: -360 }}
        transition={{ duration: 2, repeat: Infinity, ease: 'linear' }}
        className="absolute inset-2 rounded-full"
        style={{
          background: 'conic-gradient(from 180deg, transparent 60%, #06b6d4, #6366f1, transparent)',
        }}
      />
      {/* Core glow */}
      <motion.div
        animate={{ scale: [0.9, 1.1, 0.9], opacity: [0.7, 1, 0.7] }}
        transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute inset-4 rounded-full bg-gradient-to-br from-indigo-600 via-purple-600 to-cyan-500 blur-sm"
      />
      <div className="absolute inset-5 rounded-full bg-gradient-to-br from-indigo-500 via-purple-500 to-cyan-400" />
      {/* Center dot */}
      <motion.div
        animate={{ scale: [1, 1.3, 1] }}
        transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
        className="relative z-10 w-3 h-3 rounded-full bg-white shadow-lg"
      />
    </div>
  );
}

export default function LoadingScreen({ onComplete }) {
  const [step, setStep] = useState(0);
  const [progress, setProgress] = useState(0);
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    let i = 0;
    const run = () => {
      if (i < loadingSteps.length) {
        setStep(i);
        const target = loadingSteps[i].progress;
        const start = i === 0 ? 0 : loadingSteps[i - 1].progress;
        let current = start;
        const interval = setInterval(() => {
          current += 2;
          if (current >= target) { current = target; clearInterval(interval); }
          setProgress(current);
        }, 12);
        i++;
        const delay = i === loadingSteps.length ? 600 : 360;
        setTimeout(run, delay);
      } else {
        setTimeout(() => {
          setVisible(false);
          setTimeout(onComplete, 600);
        }, 400);
      }
    };
    run();
  }, [onComplete]);

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          exit={{ opacity: 0, scale: 1.04 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-[#050816]"
        >
          {/* Ambient glow */}
          <div className="absolute inset-0 overflow-hidden">
            <motion.div
              animate={{ scale: [1, 1.2, 1], opacity: [0.15, 0.25, 0.15] }}
              transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-indigo-600/20 rounded-full blur-3xl"
            />
            <motion.div
              animate={{ scale: [1.2, 1, 1.2], opacity: [0.1, 0.2, 0.1] }}
              transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-72 h-72 bg-purple-600/20 rounded-full blur-3xl"
            />
          </div>

          <div className="relative z-10 flex flex-col items-center gap-10 w-full max-w-xs px-8">
            {/* Orb */}
            <motion.div
              initial={{ scale: 0, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            >
              <GradientOrb />
            </motion.div>

            {/* Status text */}
            <div className="text-center min-h-[28px]">
              <motion.p
                key={step}
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3 }}
                className={`font-mono text-sm tracking-widest ${
                  step === loadingSteps.length - 1
                    ? 'gradient-text font-bold text-base'
                    : 'text-slate-400'
                }`}
              >
                {loadingSteps[step]?.text}
              </motion.p>
            </div>

            {/* Progress bar */}
            <div className="w-full space-y-2">
              <div className="w-full h-px bg-white/5 rounded-full overflow-hidden">
                <motion.div
                  className="h-full bg-gradient-to-r from-indigo-500 via-purple-500 to-cyan-500 rounded-full"
                  style={{ width: `${progress}%` }}
                  transition={{ duration: 0.15 }}
                />
              </div>
              <div className="flex justify-between">
                <span className="text-xs text-slate-700 font-mono">madhavankm.dev</span>
                <span className="text-xs text-indigo-400 font-mono">{progress}%</span>
              </div>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

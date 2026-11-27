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
          background: 'conic-gradient(from 0deg, transparent 70%, #C49A6C, #D4AD83, #8F6339, transparent)',
        }}
      />
      {/* Inner ring counter-spin */}
      <motion.div
        animate={{ rotate: -360 }}
        transition={{ duration: 2, repeat: Infinity, ease: 'linear' }}
        className="absolute inset-2 rounded-full"
        style={{
          background: 'conic-gradient(from 180deg, transparent 60%, #D4AD83, #C49A6C, transparent)',
        }}
      />
      {/* Core surface */}
      <motion.div
        animate={{ scale: [0.94, 1.06, 0.94], opacity: [0.75, 1, 0.75] }}
        transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute inset-4 rounded-full bg-gradient-to-br from-[#C49A6C] to-[#8F6339] blur-sm"
      />
      <div className="absolute inset-5 rounded-full bg-gradient-to-br from-[#D4AD83] to-[#C49A6C]" />
      {/* Center dot */}
      <motion.div
        animate={{ scale: [1, 1.25, 1] }}
        transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
        className="relative z-10 w-3 h-3 rounded-full bg-[#F3EBDD] shadow-warm-sm"
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
          className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-[#1B1714]"
        >
          {/* Ambient glow */}
          <div className="absolute inset-0 overflow-hidden">
            <motion.div
              animate={{ scale: [1, 1.15, 1], opacity: [0.1, 0.18, 0.1] }}
              transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-[#C49A6C]/15 rounded-full blur-3xl"
            />
            <motion.div
              animate={{ scale: [1.15, 1, 1.15], opacity: [0.1, 0.18, 0.1] }}
              transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-72 h-72 bg-[#40332A]/35 rounded-full blur-3xl"
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
                    ? 'text-gradient-primary font-bold text-base'
                    : 'text-[#C8BBA9]'
                }`}
              >
                {loadingSteps[step]?.text}
              </motion.p>
            </div>

            {/* Progress bar */}
            <div className="w-full space-y-2">
              <div className="w-full h-px bg-[#F3EBDD]/10 rounded-full overflow-hidden">
                <motion.div
                  className="h-full bg-gradient-to-r from-[#C49A6C] to-[#D4AD83] rounded-full"
                  style={{ width: `${progress}%` }}
                  transition={{ duration: 0.15 }}
                />
              </div>
              <div className="flex justify-between">
                <span className="text-xs text-[#A39584] font-mono">madhavankm.dev</span>
                <span className="text-xs text-[#C49A6C] font-mono">{progress}%</span>
              </div>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

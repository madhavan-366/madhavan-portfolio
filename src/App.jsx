import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useTheme } from './hooks/useTheme';

import LoadingScreen from './components/sections/LoadingScreen';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import ScrollProgress from './components/ui/ScrollProgress';
import CustomCursor from './components/ui/CustomCursor';
import ParticleBackground from './components/ui/ParticleBackground';

import Hero from './components/sections/Hero';
import About from './components/sections/About';
import Academics from './components/sections/Academics';
import Skills from './components/sections/Skills';
import Projects from './components/sections/Projects';
import Experience from './components/sections/Experience';
import Events from './components/sections/Events';
import Certificates from './components/sections/Certificates';
import Contact from './components/sections/Contact';

export default function App() {
  const [loading, setLoading] = useState(true);
  const [ready, setReady] = useState(false);
  const { isDark, toggleTheme } = useTheme();

  const handleLoadComplete = () => {
    setLoading(false);
    setTimeout(() => setReady(true), 100);
  };

  return (
    <>
      <CustomCursor />
      <ScrollProgress />

      <AnimatePresence>
        {loading && <LoadingScreen onComplete={handleLoadComplete} />}
      </AnimatePresence>

      {ready && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          className="relative min-h-screen"
        >
          <ParticleBackground />

          <Navbar isDark={isDark} toggleTheme={toggleTheme} />

          <main className="relative z-10">
            <Hero />
            <About />
            <Academics />
            <Skills />
            <Projects />
            <Experience />
            <Events />
            <Certificates />
            <Contact />
          </main>

          <Footer />
        </motion.div>
      )}
    </>
  );
}

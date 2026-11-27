import { useTheme } from './hooks/useTheme';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import ScrollProgress from './components/ui/ScrollProgress';

import Hero from './components/sections/Hero';
import About from './components/sections/About';
import Skills from './components/sections/Skills';
import Projects from './components/sections/Projects';
import Experience from './components/sections/Experience';
import Academics from './components/sections/Academics';
import Certificates from './components/sections/Certificates';
import Contact from './components/sections/Contact';

export default function App() {
  const { isDark, toggleTheme } = useTheme();

  return (
    <div className="relative min-h-screen bg-[var(--bg-main)] text-[var(--text-primary)] selection:bg-[#C49A6C]/25 selection:text-[#F3EBDD]">
      <ScrollProgress />
      <Navbar isDark={isDark} toggleTheme={toggleTheme} />

      <main className="relative z-10">
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Experience />
        <Academics />
        <Certificates />
        <Contact />
      </main>

      <Footer />
    </div>
  );
}

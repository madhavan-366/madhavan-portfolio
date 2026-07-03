import { motion } from 'framer-motion';
import SectionHeader from '../ui/SectionHeader';
import { fadeInUp, viewportConfig } from '../../utils/animations';

const softSkills = ["Problem Solving", "Analytical Thinking", "Technical Communication", "Team Collaboration", "Data Storytelling"];

const bioParagraphs = [
  "I am an AI/ML Engineer and Data Analyst who loves building smart systems with beautiful, easy-to-use interfaces. My hands-on experience spans deep learning, data analytics, and responsive web development. I focus on building tools that are both technically strong and visually clear.",
  "My toolkit bridges frontend frameworks like React.js with robust AI/ML backends built using Flask and Node.js. I care deeply about writing clean code, designing solid architecture, and making complex AI insights simple for users to understand. My work covers everything from training custom computer vision models to deploying full-stack, AI-powered applications.",
  "I firmly believe in learning by building. Every project in my portfolio started with a real-world problem I wanted to solve, and I built and shipped each one from start to finish."
];

export default function About() {
  return (
    <section id="about" className="relative section-padding overflow-hidden">
      <div className="absolute top-0 right-0 w-96 h-96 bg-purple-600/5 rounded-full blur-3xl" />

      <div className="max-w-4xl mx-auto">
        <SectionHeader
          eyebrow="About Me"
          title="Who I Am"
          subtitle="A brief introduction to the person behind the projects."
        />

        <motion.div
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={viewportConfig}
          className="space-y-6"
        >
          {/* Bio paragraphs */}
          <div className="space-y-5">
            {bioParagraphs.map((para, i) => (
              <p key={i} className="text-slate-600 dark:text-slate-400 text-base leading-relaxed">
                {para}
              </p>
            ))}
          </div>

          {/* Soft skill chips */}
          <div className="flex flex-wrap gap-2.5 pt-2">
            {softSkills.map(skill => (
              <motion.span
                key={skill}
                whileHover={{ scale: 1.05, y: -2 }}
                transition={{ type: 'spring', stiffness: 400, damping: 17 }}
                className="text-sm px-4 py-2 rounded-full bg-indigo-500/10 text-indigo-600 dark:text-indigo-300 border border-indigo-500/20 hover:bg-indigo-500/20 hover:border-indigo-500/40 transition-all cursor-default"
              >
                {skill}
              </motion.span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}

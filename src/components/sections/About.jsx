import { motion } from 'framer-motion';
import SectionHeader from '../ui/SectionHeader';
import { fadeInUp, staggerContainer, staggerItem, viewportConfig } from '../../utils/animations';
import { FiCode, FiCpu, FiDatabase, FiAward } from 'react-icons/fi';

const highlights = [
  {
    icon: FiCpu,
    title: "Applied AI & Machine Learning",
    description: "Experience with custom CNN vision models (Xception), NLP, and multi-agent workflows using LangGraph & Gemini API."
  },
  {
    icon: FiCode,
    title: "Full-Stack Web Engineering",
    description: "Building responsive, modern user interfaces with React.js & Tailwind CSS, backed by REST APIs built with Node.js, Express, and FastAPI."
  },
  {
    icon: FiDatabase,
    title: "Data Analytics & BI Pipelines",
    description: "Translating raw multi-currency transactions and operational data into dynamic Power BI dashboards and predictive customer lifetime value models."
  },
  {
    icon: FiAward,
    title: "Academic & Industry Track Record",
    description: "8.4 CGPA in B.Tech Artificial Intelligence & Data Science, Best Performer in Data Analyst internship at Elevate Labs, and 6 verified certifications."
  }
];

const softSkills = [
  "Problem Solving",
  "Analytical Reasoning",
  "Technical Communication",
  "Data Storytelling",
  "Rapid Prototyping",
  "Team Collaboration"
];

export default function About() {
  return (
    <section id="about" className="section-wrapper relative section-alt">
      <div className="section-container">
        <SectionHeader
          eyebrow="About Me"
          title="Bridging AI Models & Full-Stack Systems"
          subtitle="A passionate engineering student focused on turning complex algorithms into practical, user-friendly software solutions."
        />

        <div className="grid lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Narrative Column */}
          <motion.div
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={viewportConfig}
            className="lg:col-span-6 space-y-5"
          >
            <div className="card-surface rounded-2xl p-6 sm:p-8 space-y-4">
              <h3 className="text-xl font-bold text-[var(--text-primary)] font-heading">
                My Background & Approach
              </h3>

              <p className="text-[var(--text-secondary)] text-sm sm:text-base leading-relaxed">
                I am an Artificial Intelligence and Data Science undergraduate at <strong className="text-[var(--text-primary)] font-semibold">Rajalakshmi Institute of Technology</strong>, Chennai. My passion lies at the intersection of applied machine learning, predictive analytics, and modern full-stack web development.
              </p>

              <p className="text-[var(--text-secondary)] text-sm sm:text-base leading-relaxed">
                Rather than treating AI models as isolated Jupyter experiments, I focus on building <strong className="text-[var(--text-primary)] font-semibold">end-to-end software applications</strong>. Whether integrating an Xception CNN to highlight manipulated media with an AI explanation chatbot, or building multi-modal travel itineraries with LangGraph and Gemini, I strive to make technology accessible and practical.
              </p>

              <p className="text-[var(--text-secondary)] text-sm sm:text-base leading-relaxed">
                During my internship at <strong className="text-[var(--text-primary)] font-semibold">Elevate Labs</strong>, I applied Python and SQL for end-to-end data cleaning and analysis while designing dynamic Power BI dashboards. I am actively seeking software engineering and AI/ML internship or entry-level opportunities where I can contribute and grow.
              </p>

              {/* Core Attributes */}
              <div className="pt-3 border-t border-[var(--border-subtle)]">
                <span className="block text-xs font-semibold uppercase tracking-wider text-[var(--text-muted)] mb-2.5">
                  Professional Attributes
                </span>
                <div className="flex flex-wrap gap-2">
                  {softSkills.map((skill) => (
                    <span
                      key={skill}
                      className="text-xs px-3 py-1.5 rounded-lg bg-[var(--accent-tint)] text-[var(--accent)] border border-[var(--accent-border)] font-medium"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right Highlights Bento Cards */}
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={viewportConfig}
            className="lg:col-span-6 grid sm:grid-cols-2 gap-4"
          >
            {highlights.map((item, idx) => (
              <motion.div
                key={idx}
                variants={staggerItem}
                className="card-surface rounded-2xl p-5 sm:p-6 flex flex-col justify-between"
              >
                <div>
                  <div className="w-10 h-10 rounded-xl bg-[var(--accent-tint)] border border-[var(--accent-border)] text-[var(--accent)] flex items-center justify-center mb-4">
                    <item.icon className="w-5 h-5" />
                  </div>
                  <h4 className="text-base font-bold text-[var(--text-primary)] font-heading mb-2">
                    {item.title}
                  </h4>
                  <p className="text-xs sm:text-sm text-[var(--text-secondary)] leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </motion.div>

        </div>
      </div>
    </section>
  );
}

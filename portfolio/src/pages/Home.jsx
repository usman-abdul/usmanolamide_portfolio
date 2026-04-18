import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import ProjectCard from '../components/ProjectCard';
import projects from '../data/projects';
import { skills } from '../data/skills';
import '../styles/Home.scss';

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  show: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay: i * 0.1, ease: 'easeOut' },
  }),
};

export default function Home() {
  return (
    <main>
      {/* Hero */}
      <section className="hero">
        <div className="hero__content">
          <motion.span
            className="hero__eyebrow"
            variants={fadeUp}
            initial="hidden"
            animate="show"
            custom={0}
          >
            Usman Olamide
          </motion.span>

          <motion.h1
            className="hero__name"
            variants={fadeUp}
            initial="hidden"
            animate="show"
            custom={1}
          >
            Mechatronics Engineer.<br />Data Analyst. AI/ML Enthusiast.
          </motion.h1>

          <motion.p
            className="hero__tagline"
            variants={fadeUp}
            initial="hidden"
            animate="show"
            custom={2}
          >
            I sit at the intersection of engineering, robotics, and data — turning complex
            systems and datasets into decisions that drive real-world impact.
          </motion.p>

          <motion.div
            className="hero__cta"
            variants={fadeUp}
            initial="hidden"
            animate="show"
            custom={3}
          >
            <Link to="/projects" className="btn btn-primary">View My Work →</Link>
            <a href="/cv.pdf" target="_blank" rel="noopener noreferrer" className="btn btn-outline">
              Download CV
            </a>
          </motion.div>
        </div>
      </section>

      {/* Value Proposition */}
      <section className="value-prop">
        <div className="value-prop__inner">
          <motion.div
            className="value-prop__text"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="section-label">What I Do</span>
            <h2>From Raw Data to<br />Real Business Value</h2>
            <p>
              With a foundation in Mechatronics Engineering and a passion for AI/ML and Robotics,
              I bring a systems-thinking approach to every dataset — understanding not just
              what the numbers say, but why they matter and what to do next.
            </p>
          </motion.div>

          <motion.div
            className="value-prop__stats"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            {[
              { value: '3+', label: 'End-to-End Projects' },
              { value: '5+', label: 'Tools & Technologies' },
              { value: '1K+', label: 'Records Analysed' },
              { value: '2', label: 'Domains: Business & Health' },
            ].map((stat) => (
              <div key={stat.label} className="value-prop__stat">
                <span className="value">{stat.value}</span>
                <span className="label">{stat.label}</span>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Featured Projects */}
      <section className="featured">
        <div className="featured__header">
          <div>
            <span className="section-label">Selected Work</span>
            <h2 className="section-title">Featured Projects</h2>
          </div>
          <Link to="/projects" className="btn btn-outline">View All →</Link>
        </div>

        <div className="featured__grid">
          {projects.map((project, i) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
            >
              <ProjectCard project={project} />
            </motion.div>
          ))}
        </div>
      </section>

      {/* Skills Snapshot */}
      <section className="skills-snapshot">
        <div className="skills-snapshot__inner">
          <span className="section-label">Toolkit</span>
          <h2 className="section-title">Skills & Tools</h2>
          <div className="skills-snapshot__grid">
            {skills.map((skill, i) => (
              <motion.span
                key={skill.name}
                className="skills-snapshot__badge"
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: i * 0.04 }}
              >
                {skill.name}
              </motion.span>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="home-cta">
        <div className="home-cta__inner">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="section-label">Let's Connect</span>
            <h2>Open to Opportunities</h2>
            <p>
              Looking for a data analyst who can communicate insights clearly and drive
              decisions with evidence? Let's talk.
            </p>
            <a href="mailto:your@email.com" className="btn btn-primary">Get In Touch →</a>
          </motion.div>
        </div>
      </section>
    </main>
  );
}

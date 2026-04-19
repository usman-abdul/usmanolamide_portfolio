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
          <div className="hero__layout">
            <div className="hero__text">
              <motion.span
                className="hero__eyebrow"
                variants={fadeUp}
                initial="hidden"
                animate="show"
                custom={0}
              >
                Usman Olamide, Data Analyst
              </motion.span>

              <motion.h1
                className="hero__name"
                variants={fadeUp}
                initial="hidden"
                animate="show"
                custom={1}
              >
                I turn messy data into<br />clear decisions.
              </motion.h1>

              <motion.p
                className="hero__tagline"
                variants={fadeUp}
                initial="hidden"
                animate="show"
                custom={2}
              >
                Mechatronics Engineer, Data Analyst, and AI/ML Enthusiast. I combine engineering
                precision, data analysis, and machine learning to build solutions that solve
                real business problems.
              </motion.p>

              <motion.div
                className="hero__cta"
                variants={fadeUp}
                initial="hidden"
                animate="show"
                custom={3}
              >
                <Link to="/projects" className="btn btn-primary">View My Work →</Link>
                <a href="/UsmanOlamide_CV.pdf" target="_blank" rel="noopener noreferrer" className="btn btn-outline">
                  Download CV
                </a>
              </motion.div>
            </div>

            <motion.div
              className="hero__avatar-wrap"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.7, delay: 0.3 }}
            >
              <img src="/images/avatar.jpeg" alt="Usman Olamide" className="hero__avatar" />
            </motion.div>
          </div>
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
              I combine Mechatronics Engineering, Data Analytics, and AI/ML to build
              solutions that solve real business problems. Systems thinking from engineering,
              pattern recognition from data, and predictive power from machine learning.
              Each discipline makes the others sharper.
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
                className={`skills-snapshot__badge${skill.core ? ' skills-snapshot__badge--core' : ''}`}
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
            <h2>Open to New Roles</h2>
            <p>
              Looking to work with someone who brings engineering thinking, data skills, and
              ML capability to the table? I am actively seeking entry-level roles in Data Analysis,
              Business Intelligence, and AI/ML Engineering. Let's talk.
            </p>
            <Link to="/contact" className="btn btn-primary">Get In Touch →</Link>
          </motion.div>
        </div>
      </section>
    </main>
  );
}

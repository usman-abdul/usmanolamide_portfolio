import { motion } from 'framer-motion';
import { skills, workProcess } from '../data/skills';
import '../styles/About.scss';

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, delay: i * 0.08, ease: 'easeOut' },
  }),
};

export default function About() {
  return (
    <main>
      <div className="about">
        {/* Intro */}
        <div className="about__hero">
          <motion.div
            className="about__intro"
            variants={fadeUp}
            initial="hidden"
            animate="show"
            custom={0}
          >
            <span className="section-label">About Me</span>
            <h1>Engineer by Training.<br />Analyst by Passion.</h1>
            <p>
              My journey started in Mechatronics Engineering — a discipline that taught me
              to think in systems, diagnose problems, and optimise for outcomes. That same
              mindset now drives how I approach data.
            </p>
            <p>
              I transitioned into Data Analytics because I saw how much value was locked
              inside data that organisations couldn't read. I build the tools and tell the
              stories that unlock that value.
            </p>
          </motion.div>

          <motion.div
            className="about__background"
            variants={fadeUp}
            initial="hidden"
            animate="show"
            custom={1}
          >
            <span className="section-label">Background</span>
            <h3>Mechatronics → Data Analytics</h3>
            <p>
              Mechatronics gave me a foundation in systems thinking, problem decomposition,
              and precision — skills that translate directly into data work. Where engineers
              debug machines, I debug datasets.
            </p>
            <p>
              I specialise in business intelligence, data visualisation, and exploratory
              analysis — with hands-on experience in Python, SQL, Power BI, and Tableau.
              My work spans retail analytics, regional performance analysis, and healthcare
              data research.
            </p>
          </motion.div>
        </div>
      </div>

      {/* Skills */}
      <section className="skills-section">
        <div className="skills-section__inner">
          <span className="section-label">Toolkit</span>
          <h2 className="section-title">Skills & Technologies</h2>
          <div className="skills-section__grid">
            {skills.map((skill, i) => (
              <motion.div
                key={skill.name}
                className="skills-section__item"
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.05 }}
              >
                <span className="skill-name">{skill.name}</span>
                <span className="skill-category">{skill.category}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* How I Work */}
      <section className="how-i-work">
        <div className="how-i-work__inner">
          <span className="section-label">Process</span>
          <h2 className="section-title">How I Work</h2>

          <div className="how-i-work__steps">
            {workProcess.map((step, i) => (
              <motion.div
                key={step.step}
                className="how-i-work__step"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
              >
                <div className="how-i-work__number">{step.step}</div>
                <div className="how-i-work__content">
                  <h4>{step.title}</h4>
                  <p>{step.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}

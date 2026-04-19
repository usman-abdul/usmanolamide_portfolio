import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import '../../styles/ProjectDetail.scss';

const sectionVariant = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } },
};

export default function ProjectDetailTemplate({ project }) {
  return (
    <main className="project-detail">
      <div className="project-detail__inner">

        {/* Back */}
        <Link to="/projects" className="project-detail__back">
          ← Back to Projects
        </Link>

        {/* Domain + Tool Tags */}
        <motion.div
          className="project-detail__tags"
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.45 }}
        >
          <span className="project-detail__tag project-detail__tag--domain">{project.domain}</span>
          {project.tools.map((t) => (
            <span key={t} className="project-detail__tag project-detail__tag--tool">{t}</span>
          ))}
        </motion.div>

        {/* Title */}
        <motion.h1
          className="project-detail__title"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, delay: 0.08 }}
        >
          {project.title}
        </motion.h1>

        <motion.p
          className="project-detail__tagline"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.15 }}
        >
          {project.tagline}
        </motion.p>

        {/* Hero image / placeholder */}
        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          {project.image ? (
            <img src={project.image} alt={project.title} className="project-detail__hero-image" />
          ) : (
            <div className="project-detail__hero-placeholder">📊</div>
          )}
        </motion.div>

        {/* ── Quantified Results (top — most prominent) ── */}
        <motion.div
          className="project-detail__results-block"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.28 }}
        >
          <span className="project-detail__results-label">Quantified Results</span>
          <div className="project-detail__metrics">
            {project.metrics.map((m) => (
              <div key={m.label} className="project-detail__metric">
                <span className="metric-value">{m.value}</span>
                <span className="metric-label">{m.label}</span>
              </div>
            ))}
          </div>
        </motion.div>

        {/* ── Problem ── */}
        <motion.div
          className="project-detail__section"
          variants={sectionVariant}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
        >
          <h2>The Problem</h2>
          <p>{project.problem}</p>
        </motion.div>

        {/* ── Approach ── */}
        <motion.div
          className="project-detail__section"
          variants={sectionVariant}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
        >
          <h2>Approach</h2>
          <p>{project.approach}</p>
        </motion.div>

        {/* ── Tools ── */}
        <motion.div
          className="project-detail__section"
          variants={sectionVariant}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
        >
          <h2>Tools Used</h2>
          <div className="project-detail__tools">
            {project.tools.map((tool) => (
              <span key={tool} className="project-detail__tool-badge">{tool}</span>
            ))}
          </div>
        </motion.div>

        {/* ── Key Insights ── */}
        <motion.div
          className="project-detail__section"
          variants={sectionVariant}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
        >
          <h2>Key Insights</h2>
          <ul>
            {project.insights.map((insight, i) => (
              <li key={i}>{insight}</li>
            ))}
          </ul>
        </motion.div>

        {/* ── Business Impact ── */}
        <motion.div
          className="project-detail__section project-detail__impact"
          variants={sectionVariant}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
        >
          <h2>Business Impact</h2>
          <p>{project.impact}</p>
        </motion.div>

        {/* ── Dashboard Preview ── */}
        <motion.div
          className="project-detail__preview"
          variants={sectionVariant}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
        >
          <div className="project-detail__preview-header">
            <span className="section-label">{project.slug === 'health' ? 'App Demo' : 'Dashboard Preview'}</span>
            <h3>{project.slug === 'health' ? 'Watch It in Action' : 'Interactive Dashboard'}</h3>
            <p>{project.slug === 'health' ? 'A walkthrough of the Blood Pressure Predictor web app.' : 'Explore the full interactive version of this analysis.'}</p>
          </div>
          {project.demo ? (
            <img
              src={project.demo}
              alt={`${project.title} demo`}
              className="project-detail__preview-image"
            />
          ) : project.image ? (
            <img
              src={project.image}
              alt={`${project.title} preview`}
              className="project-detail__preview-image"
            />
          ) : null}
          {project.link && project.link !== '#' && (
            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-primary"
            >
              {project.slug === 'health' ? 'View Full Project on GitHub →' : 'View Interactive Dashboard →'}
            </a>
          )}
        </motion.div>

      </div>
    </main>
  );
}

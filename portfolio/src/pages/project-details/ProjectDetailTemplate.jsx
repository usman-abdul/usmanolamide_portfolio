import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import '../../styles/ProjectDetail.scss';

export default function ProjectDetailTemplate({ project }) {
  return (
    <main className="project-detail">
      <div className="project-detail__inner">
        {/* Back */}
        <Link to="/projects" className="project-detail__back">
          ← Back to Projects
        </Link>

        {/* Tags */}
        <motion.div
          className="project-detail__tags"
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <span className="project-detail__tag">{project.domain}</span>
          {project.tools.map((t) => (
            <span key={t} className="project-detail__tag" style={{ opacity: 0.7 }}>{t}</span>
          ))}
        </motion.div>

        {/* Title */}
        <motion.h1
          className="project-detail__title"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, delay: 0.1 }}
        >
          {project.title}
        </motion.h1>

        <motion.p
          className="project-detail__tagline"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          {project.tagline}
        </motion.p>

        {/* Hero image */}
        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.25 }}
        >
          {project.image ? (
            <img
              src={project.image}
              alt={project.title}
              className="project-detail__hero-image"
            />
          ) : (
            <div className="project-detail__hero-placeholder">📊</div>
          )}
        </motion.div>

        {/* Metrics */}
        <motion.div
          className="project-detail__metrics"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          {project.metrics.map((m) => (
            <div key={m.label} className="project-detail__metric">
              <span className="metric-value">{m.value}</span>
              <span className="metric-label">{m.label}</span>
            </div>
          ))}
        </motion.div>

        {/* Problem */}
        <motion.div
          className="project-detail__section"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2>The Problem</h2>
          <p>{project.problem}</p>
        </motion.div>

        {/* Approach */}
        <motion.div
          className="project-detail__section"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2>Approach</h2>
          <p>{project.approach}</p>
        </motion.div>

        {/* Tools */}
        <motion.div
          className="project-detail__section"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2>Tools Used</h2>
          <div className="project-detail__tools">
            {project.tools.map((tool) => (
              <span key={tool} className="project-detail__tool-badge">{tool}</span>
            ))}
          </div>
        </motion.div>

        {/* Key Insights */}
        <motion.div
          className="project-detail__section"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2>Key Insights</h2>
          <ul>
            {project.insights.map((insight, i) => (
              <li key={i}>{insight}</li>
            ))}
          </ul>
        </motion.div>

        {/* Quantified Results */}
        <motion.div
          className="project-detail__section"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2>Quantified Results</h2>
          <div className="project-detail__metrics" style={{ marginBottom: 0 }}>
            {project.metrics.map((m) => (
              <div key={m.label} className="project-detail__metric">
                <span className="metric-value">{m.value}</span>
                <span className="metric-label">{m.label}</span>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Business Impact */}
        <motion.div
          className="project-detail__section project-detail__impact"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2>Business Impact</h2>
          <p>{project.impact}</p>
        </motion.div>

        {/* Dashboard Preview */}
        <motion.div
          className="project-detail__preview"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <p>View the interactive dashboard for this project</p>
          <a
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-primary"
          >
            View Interactive Dashboard →
          </a>
        </motion.div>
      </div>
    </main>
  );
}

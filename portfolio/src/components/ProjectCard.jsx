import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import '../styles/ProjectCard.scss';

export default function ProjectCard({ project }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, ease: 'easeOut' }}
      style={{ display: 'flex', flexDirection: 'column', height: '100%' }}
    >
      <Link to={`/projects/${project.slug}`} className="project-card" style={{ flex: 1 }}>
        <div className="project-card__image">
          {project.image ? (
            <img src={project.image} alt={project.title} />
          ) : (
            <div className="project-card__image--placeholder">
              <span className="placeholder-icon">📊</span>
            </div>
          )}
        </div>

        <div className="project-card__body">
          <div className="project-card__tags">
            <span className="project-card__tag">{project.domain}</span>
          </div>

          <h3 className="project-card__title">{project.title}</h3>
          <p className="project-card__description">{project.tagline}</p>

          <div className="project-card__footer">
            <div className="project-card__tools">
              {project.tools.map((tool) => (
                <span key={tool} className="project-card__tool">{tool}</span>
              ))}
            </div>
            <span className="project-card__arrow">→</span>
          </div>
        </div>
      </Link>
    </motion.div>
  );
}

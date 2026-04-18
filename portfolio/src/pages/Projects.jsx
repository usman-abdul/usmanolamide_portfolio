import { motion } from 'framer-motion';
import ProjectCard from '../components/ProjectCard';
import projects from '../data/projects';
import '../styles/Projects.scss';

export default function Projects() {
  return (
    <main className="projects-page">
      <div className="projects-page__header">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <span className="section-label">My Work</span>
          <h1 className="section-title">Projects & Case Studies</h1>
          <p style={{ color: 'var(--text-secondary, #8892a4)', maxWidth: '520px' }}>
            Each project follows a full analytical lifecycle — from raw data to business-ready insights.
          </p>
        </motion.div>
      </div>

      <div className="projects-page__grid">
        {projects.map((project, i) => (
          <motion.div
            key={project.id}
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: i * 0.12 }}
          >
            <ProjectCard project={project} />
          </motion.div>
        ))}
      </div>
    </main>
  );
}

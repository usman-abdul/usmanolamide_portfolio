import projects from '../../data/projects';
import ProjectDetailTemplate from './ProjectDetailTemplate';

export default function HealthData() {
  const project = projects.find((p) => p.slug === 'health');
  return <ProjectDetailTemplate project={project} />;
}

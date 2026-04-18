import projects from '../../data/projects';
import ProjectDetailTemplate from './ProjectDetailTemplate';

export default function RetailSales() {
  const project = projects.find((p) => p.slug === 'retail');
  return <ProjectDetailTemplate project={project} />;
}

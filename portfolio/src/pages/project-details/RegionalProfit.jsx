import projects from '../../data/projects';
import ProjectDetailTemplate from './ProjectDetailTemplate';

export default function RegionalProfit() {
  const project = projects.find((p) => p.slug === 'profit');
  return <ProjectDetailTemplate project={project} />;
}

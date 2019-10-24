import { h } from 'preact';
import Link from '~components/link';
import ProjectModel from '~models/project';
import { project, projectName, root } from './styles.scss';

const SingleProject = ({ name, link, tagline, what }: ProjectModel) => (
  <div className={project}>
    {link ? (
      <Link target="_blank" rel="noopener noreferrer" href={link}>
        {name}
      </Link>
    ) : (
      <span class={projectName}>{name}</span>
    )}{' '}
    &mdash; <span style={{ fontStyle: 'cursive' }}>{tagline}</span>
    {what && (
      <ul>
        {what.map(thing => (
          <li key={thing}>{thing}</li>
        ))}
      </ul>
    )}
  </div>
);

interface Props {
  projects: ProjectModel[];
}

const Projects = ({ projects }: Props) => (
  <ul class={root}>
    {projects.map(project => (
      <SingleProject key={project.name} {...project} />
    ))}
  </ul>
);

export default Projects;

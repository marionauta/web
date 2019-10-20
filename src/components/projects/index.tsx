import React, { FC } from 'react';
import Link from '~components/link';
import ProjectModel from '~models/project';
import { root } from './styles.scss';

const SingleProject: FC<ProjectModel> = ({ name, link, tagline, what }) => (
  <div className={root}>
    <Link target="_blank" rel="noopener noreferrer" href={link}>
      {name}
    </Link>{' '}
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

const Projects: FC<Props> = ({ projects }) => (
  <ul>
    {projects.map(project => (
      <SingleProject key={project.name} {...project} />
    ))}
  </ul>
);

export default Projects;

import React, { FC } from 'react';
import styled from 'styled-components';
import Link from '~components/link';
import ProjectModel from '~models/project';

const Root = styled.li`
  line-height: 1.3rem;

  :not(:last-child) {
    margin-bottom: 1rem;
  }
`;

const SingleProject: FC<ProjectModel> = ({ name, link, tagline, what }) => (
  <Root>
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
  </Root>
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

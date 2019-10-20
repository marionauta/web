import React, { FC } from 'react';
import Link from '~components/link';
import SocialMedia from '~components/socialmedia';
import { socialmedia } from '~data';
import { Header, PageWrapper, Paragraph, SectionHeader } from './styles';

const Main: FC = () => {
  return (
    <PageWrapper>
      <Header>Mario Nachbaur</Header>

      <Paragraph>
        Full Stack software developer at{' '}
        <Link target="_blank" rel="noopener noreferrer" href="https://z1.digital">
          Z1 Digital Studio
        </Link>
        , mainly focused on building great web & mobile apps.
      </Paragraph>

      <Paragraph>Artificial Inteligence, Functional Programming & Rubik Cubes.</Paragraph>

      <SectionHeader>See Also</SectionHeader>
      <SocialMedia sites={socialmedia} />
    </PageWrapper>
  );
};

export default Main;

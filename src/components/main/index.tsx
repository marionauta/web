import { Fragment, h } from 'preact';
import Articles from '~components/articles';
import Link from '~components/link';
import Projects from '~components/projects';
import SocialMedia from '~components/socialmedia';
import { articles, projects, socialmedia } from '~data';
import { header, pageWrapper, sectionHeader } from './styles.scss';

const Main = () => {
  return (
    <div className={pageWrapper}>
      <h1 className={header}>Mario Nachbaur</h1>

      <p>
        Full Stack software developer at{' '}
        <Link target="_blank" rel="noopener noreferrer" href="https://z1.digital">
          Z1 Digital Studio
        </Link>
        , mainly focused on building great web & mobile apps.
      </p>

      <p>Artificial Inteligence, Functional Programming & Rubik Cubes.</p>

      <h2 className={sectionHeader}>See Also</h2>
      <SocialMedia sites={socialmedia} />

      {articles.length > 0 && (
        <Fragment>
          <h2 class={sectionHeader}>Words</h2>
          <Articles articles={articles} />
        </Fragment>
      )}

      <h2 class={sectionHeader}>Projects</h2>
      <Projects projects={projects} />
    </div>
  );
};

export default Main;

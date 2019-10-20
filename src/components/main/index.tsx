import { h } from 'preact';
import Link from '~components/link';
import SocialMedia from '~components/socialmedia';
import { socialmedia } from '~data';
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
    </div>
  );
};

export default Main;

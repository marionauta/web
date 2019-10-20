import { h } from 'preact';
import Site from '~models/site';
import SocialMediaModel from '~models/socialmedia';
import Link from '../link';

const SingleSocialMedia = ({ name, link }: Site) => (
  <li>
    <Link target="_blank" rel="me noopener noreferrer" href={link}>
      {name}
    </Link>
  </li>
);

const SocialMedia = ({ sites }: SocialMediaModel) => (
  <ul>
    {sites.map(site => (
      <SingleSocialMedia key={site.name} {...site} />
    ))}
  </ul>
);

export default SocialMedia;

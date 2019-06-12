import Site from 'models/site';
import SocialMediaModel from 'models/socialmedia';
import React, { FC } from 'react';
import Link from '../link';

const SingleSocialMedia: FC<Site> = ({ name, link }) => (
  <li>
    <Link target="_blank" rel="noopener noreferrer" href={link}>
      {name}
    </Link>
  </li>
);

const SocialMedia: FC<SocialMediaModel> = ({ sites }) => (
  <ul>
    {sites.map(site => (
      <SingleSocialMedia key={site.name} {...site} />
    ))}
  </ul>
);

export default SocialMedia;

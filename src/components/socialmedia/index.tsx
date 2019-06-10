import SocialMediaModel from 'models/socialmedia'
import React, {FC} from "react";
import Link from "../link";
import Site from "models/site";

const SingleSocialMedia: FC<Site> = ({ name, link }) => (
  <li>
    <Link href={link}>{name}</Link>
  </li>
);

const SocialMedia: FC<SocialMediaModel> = ({ sites }) => (
  <ul>
    {sites.map(site => <SingleSocialMedia key={site.name} {...site} />)}
  </ul>
);

export default SocialMedia
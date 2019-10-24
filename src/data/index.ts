import Project from '~models/project';
import Site from '~models/site';

export const socialmedia: Site[] = [
  {
    name: 'github/marionauta',
    link: 'https://github.com/marionauta',
  },
  {
    name: 'twitter/marionauta',
    link: 'https://twitter.com/marionauta',
  },
];

export const projects: Project[] = [
  {
    name: 'Less',
    tagline: 'Your guide to drinking mindfully.',
    what: ['An iPhone app written completely in Swift', 'Backend using Firebase cloud functions'],
  },
  {
    name: 'Rah Rah',
    tagline: 'Student life, simplified',
    what: ['A Progressive Web App written in React', 'styled-components for the styling'],
  },
  {
    name: 'LoftSmart',
    link: 'https://loftsmart.com',
    tagline: "College is hard - leasing an appartment shouldn't be",
    what: ['Backend with Django and REST Framework', 'Frontend written in React'],
  },
];

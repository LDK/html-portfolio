export type ExperienceEntry = {
  title: string;
  company: string;
  date: string;
  description: string[];
};

export type OtherExperienceEntry = {
  title: string;
  company: string;
  date: string;
  description: string;
};

export const experiences:ExperienceEntry[] = [
  {
    title: 'Web Developer',
    company: 'Furiae Interactive',
    date: '2016-2023',
    description: [
      'Worked on an expansive Drupal site for a leading network infrastructure/telecommunications company, as an affiliate through Furiae Interactive.',
      'Contributed to site-wide styling/SASS policies',
      'Created and maintained custom Drupal modules and React apps',
      'Created and maintained custom components in Layout Builder',
      'Had hands in nearly every area of maintaining and building site through several revisions and themes',
    ]
  },
  {
    title: 'Web Developer',
    company: 'Raven Internet Marketing Tools',
    date: '2014-2016',
    description: [
      'As a web developer, worked in a stack primarily built on CodeIgniter and Backbone.js.',
      'Created, updated and maintained reporting tools for services such as Google Analytics, Google Webmaster Tools, Google AdWords, Bing Ads, Facebook, LinkedIn, YouTube, Twitter, as well as in-house reports that compiled various SEO rankings data.',
      'Worked extensively in Google Analytics and Google Charts.',
    ]
  },
];

export const otherExperiences:OtherExperienceEntry[] = [
  {
    title: 'Web Developer',
    company: 'School of the Legends, LLC',
    date: '2010-2013',
    description: 'Web developer on an online education site focused on sports.'
  },
  {
    title: 'Junior Developer',
    company: 'Athlon Sports',
    date: '2007-2010',
    description: 'Junior developer for the interactive division of a major sports publishing company.'
  },
];


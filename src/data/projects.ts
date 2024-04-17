import { ProjectProps } from "../section/Projects";

const projects:ProjectProps[] = [
  {
    title: 'pyGroove',
    images: [
      {
        original: '/images/full/pygroove-1.png',
        thumbnail: '/images/thumbnails/pygroove-1.png'
      },
      {
        original: '/images/full/pygroove-2.png',
        thumbnail: '/images/thumbnails/pygroove-2.png'
      },
      {
        original: '/images/full/pygroove-3.png',
        thumbnail: '/images/thumbnails/pygroove-3.png'
      },
    ],
    description: 'pyGroove is an online groovebox powered by React and Python.  The React interface allows the creation of entire songs within a web browser, with a GUI similar to DAW software such as FL Studio or Ableton Live.  The Python backend generates audio files and waveform imagery from a preset pack of samples with a generous amount of editing options.',
    skills: ['react', 'python', 'django', 'mysql', 'aws', 'heroku'],
    github: 'https://github.com/LDK/pygroove',
    url: 'https://pygroove.electric-bungalow.com',
    features: [
      'Step sequencer',
      'Piano roll',
      'Sample editor',
      'Filtering',
      'Save songs to cloud',
      'Export songs to MP3'
    ]
  },
  {
    title: 'javaScriv',
    url: 'https://javascriv.electric-bungalow.com',
    skills: ['react', 'express', 'postgresql', 'sass', 'aws', 'heroku'],
    features: [
      'WYSIWYG editing',
      'Folder structure allowing for chapter-by-chapter editing',
      'Import from Scrivener',
      'Export to PDF',
      'Import/Export to/from JSON',
      'Store work in the cloud',
      'Collaborate with others on the same project',
    ],
    images: [
      {
        original: '/images/full/javascriv-1.png',
        thumbnail: '/images/thumbnails/javascriv-1.png'
      },
      {
        original: '/images/full/javascriv-2.png',
        thumbnail: '/images/thumbnails/javascriv-2.png'
      },
    ],
    description: 'javaScriv is a fully-featured online word processor with helpful organizational and collaborative features.  Organize your writing by chapter/section, and invite others to collaborate on your work.  Export your work to PDF, or import/export to/from JSON for easy backup and sharing, or save your work to the cloud for safe keeping.',
  },
  {
    title: 'Wordle Clone',
    url: 'https://wordle.electric-bungalow.com',
    description: 'A Wordle clone built in React',
    images: [
      {
        original: '/images/full/wordle-1.png',
        thumbnail: '/images/thumbnails/wordle-1.png'
      },
    ],
    github: 'https://github.com/LDK/react-wordle',
    features: [
      'Full dictionary of words',
      'Play as many games as you like for practice',
      'Streak-tracking like the original game'
    ],
    skills: ['react', 'sass']
  }
];

export default projects;
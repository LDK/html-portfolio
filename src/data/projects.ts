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
    description: 'javaScriv is a web-based text editor for writing JavaScript code.  It features a dark mode, syntax highlighting, and a built-in console for testing code.  It is built with React and uses the Monaco Editor for code editing.',
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
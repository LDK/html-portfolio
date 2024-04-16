import { Box, Divider, Grid, Typography } from "@mui/material";
import SectionHeader from "../component/SectionHeader";
import { skillIcons } from "./Skills";
import ImageGallery from "react-image-gallery";

export interface ProjectProps {
  title: string;
  images: { original: string, thumbnail: string }[];
  description: string;
  url?: string;
  github?: string;
  skills?: (keyof typeof skillIcons)[];
  features?: string[];
};

const Project = ({ title, description, url, images, skills, github, features }: ProjectProps) => {

  return (
    <Box className="project" mx="auto" pl={2}>
      <Typography variant="h4" component="p" pl={0} ml={0} mb={2} color={'white'}>
        {title} {url && <Typography color="white" component="a" href={url} target="_blank" rel="noreferrer noopener">({url})</Typography>}
      </Typography>

      <Typography variant="body2" component="p" pl={0} ml={0} mb={2} color={'white'}>
        {description}
      </Typography>

      <ImageGallery items={images} />

      <Grid container spacing={1}>

          {features && (
        <Grid item xs={12} md={6}>
          <Typography variant="h6" component="p" pl={0} ml={0} pb={0} color={'white'}>
            Features:
          </Typography>

          <Box component="ul" color={"#fff"} display="flex" flexDirection="column" flexWrap="wrap" justifyContent="start" alignItems="start" pt={0} mt={0}>
            {features.map((feature, index) => (
              <Box component="li" key={index} pt={1}>
                <Typography variant="body2" component="p" pl={0} ml={0} color={'white'}>
                  {feature}
                </Typography>
              </Box>
            ))}
          </Box>
        </Grid>
      )}   

{ skills &&
          <Grid item xs={12} md={6}>
            <Typography variant="h6" component="p" pl={0} ml={0} color={'white'}>
              Skills and Technologies:
            </Typography>

            <Box display="block">
              {skills.map((skill, index) => (
                <Box height={20} width={20} key={index} p={"4px"} display="inline-block">
                  {skillIcons[skill]}
                </Box>
              ))}
            </Box>
          </Grid>
          }


      </Grid>

    </Box>
  );
}

const Projects = () => {
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
      skills: ['react', 'express', 'postgresql'],
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
      ]
    }
  ];

  return (
    <Grid container spacing={0} sx={{
      margin: 'auto',
      width: '100vw', pr: { lg: 4 }, maxWidth: { xs: '100%', sm: '50%', md: '70%', lg: '80%', xl: '100%'}
    }}>
      <SectionHeader label="Solo Projects" />
      {projects.map((project, index) => (
        <Grid container item xs={12} key={index} spacing={0}>
          <Grid item xs={12}>
            <Project {...project} />
          </Grid>

          { index < projects.length - 1 &&
            <Grid item xs={12} sx={{ my: 4 }}>
              <Divider sx={{ background: 'white' }} />
            </Grid>
          }
        </Grid>
      ))}
    </Grid>
  );

};

export default Projects;
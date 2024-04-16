import { Box, Grid, Typography } from "@mui/material";
import SectionHeader from "../component/SectionHeader";
import { sectionSx } from "../App";

const About = () => {
  return (
    <Grid container spacing={0} sx={sectionSx}>
      <SectionHeader label="About Me" />

      <Box mb={2}>
        <Typography color="white">
          Experienced and versatile web developer, specializing in front-end but with a depth of knowledge about back-end systems.  I have experience in creating front-end interfaces, particularly in React, and have also created RESTful APIs in NodeJS and Python, as well as such back-end pieces as custom Drupal modules and various PHP frameworks.  I am well-versed in React, TypeScript, CSS, general JavaScript, and can generally do a little bit of everything and a lot of some things.
        </Typography>
      </Box>

      <Box mb={2}>
        <Typography color="white">
          For more information about my skills and expertise, please see the&nbsp;<Typography component="a" href="/skills" color="secondary" fontWeight="bold">Skills</Typography>
          &nbsp;section of this site.
        </Typography>
      </Box>

      <Box>
        <Typography color="white">
          To learn more about my ongoing and recent projects, please see the&nbsp;<Typography component="a" href="/projects" color="secondary" fontWeight="bold">Projects</Typography>
          &nbsp;section of this site.
        </Typography>
      </Box>

      
    </Grid>
  );
}

export default About;
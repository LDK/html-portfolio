import { Box, Divider, Grid, List, Typography } from "@mui/material";
import SectionHeader from "../component/SectionHeader";
import { sectionSx } from "../App";
import { experiences, otherExperiences } from "../data/experience";

const Experience = () => {
  return (
    <Grid container spacing={0} sx={sectionSx}>
      <SectionHeader label="Previous Work Experience" />

      {experiences.map((experience, index) => (
        <Box key={index} mb={2}>
          <Typography color="white" variant="h5">{experience.title}</Typography>
          <Typography color="white" variant="h6" component="span">{experience.company} ◦ {experience.date}</Typography>

          <List sx={{ mb: 2}}>
            {experience.description.map((point, idx) => (
              <List key={idx}>
                <Typography color="white">◦ {point}</Typography>
              </List>
            ))}
          </List>

          <Divider sx={{ background: 'white' }} />
        </Box>
      ))}

      <Box>
        <List sx={{ mb: 2}}>
          <List>
            <Typography color="white" variant="h5" mt={0}>Other Experience</Typography>
            {otherExperiences.map((experience, index) => (
              <List key={index}>
                <Typography color="white">{experience.company} ◦ {experience.date}</Typography>
                <Typography color="white">{experience.description}</Typography>
              </List>
            ))}
          </List>
        </List>
      </Box>

    </Grid>
  );
}

export default Experience;
import { Box, Grid, Typography } from "@mui/material";
import SectionHeader from "../component/SectionHeader";
import { sectionSx } from "../App";
import { SkillProps, skillIcons } from "../data/skills";

const Skill = ({ icon, description }:SkillProps) => {
  return (
    <Box className="skill" my={3} mx="auto">
      {skillIcons[icon]}
      <Typography variant="body2" component="p">
        {description}
      </Typography>
    </Box>
  );
}

const Skills = () => {
  const skills:SkillProps[] = [
    { icon: 'react', description: 'React' },
    { icon: 'typescript', description: 'TypeScript' },
    { icon: 'nodejs', description: 'Node JS' },
    { icon: 'php', description: 'PHP' },
    { icon: 'drupal', description: 'Drupal' },
    { icon: 'github', description: 'GitHub' },
    { icon: 'sass', description: 'SASS' },
    { icon: 'express', description: 'Express' },
    { icon: 'mysql', description: 'MySQL' },
    { icon: 'postgresql', description: 'PostgreSQL' },
    { icon: 'python', description: 'Python' },
    { icon: 'django', description: 'Django' },
    { icon: 'aws', description: 'AWS' },
    { icon: 'heroku', description: 'Heroku' },
  ];

  return (
    <Grid container spacing={0}  sx={sectionSx}>
      <SectionHeader label="Select Skills & Expertise" />

      {skills.map((skill, idx) => (
        <Grid item xs={4} key={`skill-${idx}`} sx={{ textAlign: 'center' }}>
          <Skill {...skill} />
        </Grid>
      ))}
    </Grid>
  );

};

export default Skills;
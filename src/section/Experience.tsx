import { Box, Divider, Grid, List, Typography } from "@mui/material";
import SectionHeader from "../component/SectionHeader";

const Experience = () => {
  return (
    <Grid container spacing={0} sx={{
       margin: 'auto', width: '100vw', pr: { lg: 4 }, maxWidth: { xs: '100%', sm: '50%', md: '70%', lg: '80%', xl: '100%'}
      }}>
      <SectionHeader label="Previous Work Experience" />

      <Box mb={2}>
        <Typography color="white" variant="h5">Web Developer</Typography>
        <Typography color="white" variant="h6" component="span">Furiae Interactive ◦ 2016-2023</Typography>

        <List sx={{ mb: 2}}>
          <List>
            <Typography color="white">◦ Worked on an expansive Drupal site for a leading network infrastructure/telecommunications company, as an affiliate through Furiae Interactive.</Typography>
          </List>
          <List>
            <Typography color="white">◦ Contributed to site-wide styling/SASS policies</Typography>
          </List>
          <List>
            <Typography color="white">◦ Created and maintained custom Drupal modules and React apps</Typography>
          </List>
          <List>
            <Typography color="white">◦ Created and maintained custom components in Layout Builder</Typography>
          </List>
          <List>
            <Typography color="white">◦ Had hands in nearly every area of maintaining and building site through several revisions and themes</Typography>
          </List>
        </List>

        <Divider sx={{ background: 'white' }} />

      </Box>
      
      <Box>
        <List sx={{ mb: 2}}>
          <List>
            <Typography color="white" variant="h5" mt={0}>Web Developer</Typography>
            <Typography color="white" variant="h6" component="span">Raven Internet Marketing Tools ◦ 2014-2016</Typography>
          </List>
          <List>
            <Typography color="white">◦ As a web developer, worked in a stack primarily built on CodeIgniter and Backbone.js.</Typography>
          </List>
          <List>
            <Typography color="white">◦ Created, updated and maintained reporting tools for services such as Google Analytics, Google Webmaster Tools, Google AdWords, Bing Ads, Facebook, LinkedIn, YouTube, Twitter, as well as in-house reports that compiled various SEO rankings data.</Typography>
          </List>
          <List>
            <Typography color="white">◦ Worked extensively in Google Analytics and Google Charts.</Typography>
          </List>
        </List>

        <Divider sx={{ background: 'white' }} />

      </Box>

      <Box>
        <List sx={{ mb: 2}}>
          <List>
            <Typography color="white" variant="h5" my={2}>Other Experience</Typography>
            <Typography color="white">School of the Legends, LLC ◦ 2010-2013</Typography>
            <Typography color="white">Web developer on an online education site focused on sports.</Typography>
          </List>
          <List>
            <Typography color="white">Athlon Sports ◦ 2007-2010</Typography>
            <Typography color="white">Junior developer for the interactive division of a major sports publishing company.</Typography>
          </List>
        </List>
      </Box>

      
    </Grid>
  );
}

export default Experience;
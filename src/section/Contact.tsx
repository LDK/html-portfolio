import { Box, Divider, Grid, List, Typography } from "@mui/material";
import SectionHeader from "../component/SectionHeader";

const Contact = () => {
  return (
    <Grid container spacing={0} sx={{
       margin: 'auto', width: '100vw', pr: { lg: 4 }, maxWidth: { xs: '100%', sm: '50%', md: '70%', lg: '80%', xl: '100%'}
      }}>
  
      <Grid item xs={12}>
        <SectionHeader label="Contact Me" />
      </Grid>

      <Grid item xs={12}>
        <Typography color="white" component="span">E-mail: </Typography>
        <Typography color="white" component="a" href="mailto:daniel.swinney@gmail.com">daniel.swinney@gmail.com</Typography>
      </Grid>

      <Grid item xs={12}>
        <Typography color="white" component="span">LinkedIn: </Typography>
        <Typography color="white" component="a" href="https://www.linkedin.com/in/daniel-swinney-8a0b2989/">View Profile</Typography>
      </Grid>

      <Grid item xs={12}>
        <Typography color="white" component="span">GitHub: </Typography>
        <Typography color="white" component="a" href="https://github.com/LDK">View Profile</Typography>
      </Grid>
    </Grid>
  );
}

export default Contact;
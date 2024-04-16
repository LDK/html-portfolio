import { Grid, Typography } from "@mui/material";
import SectionHeader from "../component/SectionHeader";
import { sectionSx } from "../App";

const Contact = () => {
  return (
    <Grid container spacing={0} sx={sectionSx}>  
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
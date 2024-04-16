import { Grid, Typography, Divider } from "@mui/material";

const SectionHeader = ({ label }:{ label:string }) => (
  <Grid item xs={12} sx={{ textAlign: 'center' }}>
    <Typography fontStyle={'italic'} variant="h5" component="h2" gutterBottom color="#fff" fontWeight={300}>
      { label }
    </Typography>

    <Divider sx={{ width: '50%', margin: 'auto', borderColor: 'rgba(255,255,255,.5)', borderWidth: '0.25px', my: 2 }} />
  </Grid>
);

export default SectionHeader;
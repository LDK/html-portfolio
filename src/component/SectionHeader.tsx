import { Grid, Typography, Divider, Box } from "@mui/material";

const NameHeader = () => (
  <Box width="100%" textAlign={'center'} alignItems={'center'} justifyContent={'center'}>
    <Typography variant="h3" component="h1" gutterBottom color="white" fontWeight={400} my={2} display={{ xs: 'none', md: 'block' }}>
      Daniel Swinney
    </Typography>

    <Typography variant="h5" component="h1" gutterBottom color="white" fontWeight={400} mb={2} display={{ xs: 'block', sm: 'none' }}>
      Daniel Swinney
    </Typography>
  </Box>
);

const SectionHeader = ({ label }:{ label:string }) => (
  <Grid container p={0} m={0} spacing={0} id="section-header"
  sx={{ textAlign: 'center', position: 'fixed', width: '100%', zIndex: 1000, top: { xs: '40px', md: '0' }, 
  left: 0, pointerEvents: 'none',
  height: 185
  }}>
    <Grid item xs={12}>
      <Grid container sx={{ maxWidth: '992px', mx: 'auto' }}>
        <Grid item xs={12} md={3} xl={2}></Grid>
        <Grid item xs={12} md={9} xl={10} pt={{ xs: 1, md: 0 }} sx={{
    backgroundColor: 'transparent', color: 'white', position: 'relative', backdropFilter: 'blur(10px)', zIndex: 1000, pointerEvents: 'none', padding: '0',
        }}>
          <Box position="absolute" top={0} left={0} width="100%" height="100%" sx={{ backgroundColor: 'rgba(0,30,55,.4)', zIndex: -1
            
           }}></Box>
          <NameHeader />

          <Typography fontStyle={'italic'} variant="h5" component="h2" gutterBottom color="#fff" fontWeight={300}>
            { label }
          </Typography>

          <Divider sx={{ width: '50%', margin: 'auto', borderColor: 'rgba(255,255,255,.5)', borderWidth: '0.25px', my: 2 }} />
        </Grid>
      </Grid>
    </Grid>
  </Grid>
);

export default SectionHeader;
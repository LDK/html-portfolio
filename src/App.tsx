import './App.css';
import { Box, Container, Grid, ThemeProvider, Typography } from '@mui/material';
import Skills from './section/Skills';
import Projects from './section/Projects';
import About from './section/About';
import Experience from './section/Experience';
import Contact from './section/Contact';
import useOrbitMenu from './hook/useOrbitMenu';
import { theme } from './theme';

function App({ active }:{ active?:string }) {
  const { OrbitMenu, activeLink } = useOrbitMenu(active);

  return (
    <ThemeProvider theme={theme}>
      <Container>
        <OrbitMenu />
        <Grid container>
          <Grid item xs={2}>
          </Grid>
          <Grid item xs={10}>
            <Box width="100%" textAlign={'center'} alignItems={'center'} justifyContent={'center'}>
              <Typography variant="h3" component="h1" gutterBottom color="white" fontWeight={400} my={2}>
                Daniel Swinney
              </Typography>
            </Box>

            {activeLink === 'Skills' && <Skills />}
            {activeLink === 'Projects' && <Projects />}
            {activeLink === 'About' && <About />}
            {activeLink === 'Experience' && <Experience />}
            {activeLink === 'Contact' && <Contact />}

          </Grid>
        </Grid>
      </Container>
    </ThemeProvider>
  );
}

export default App;

import './App.css';
import { Container, Grid, ThemeProvider } from '@mui/material';
import Skills from './section/Skills';
import Projects from './section/Projects';
import About from './section/About';
import Experience from './section/Experience';
import Contact from './section/Contact';
import useOrbitMenu from './hook/useOrbitMenu';
import { theme } from './theme';

export const sectionSx = {
  position: 'relative', margin: 'auto', px: 4, pt: { xs: '114px', sm: '64px', md: '0' }
};

function App({ active }:{ active?:string }) {
  const { OrbitMenu, activeLink, MobileMenu } = useOrbitMenu(active);

  return (
    <ThemeProvider theme={theme}>
      <Container>
        <OrbitMenu />
        <MobileMenu />
        <Grid container sx={{ pt: { xs: '4rem', md: 0 }, mb: 6}}>
          <Grid item md={3} xl={2}>
          </Grid>

          <Grid item xs={12} md={9} xl={10} sx={{mt: { md: '150px' }}}>
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

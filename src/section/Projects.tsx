import { Box, Divider, Grid, SxProps, Typography, TypographyOwnProps } from "@mui/material";
import SectionHeader from "../component/SectionHeader";
import ImageGallery from "react-image-gallery";
import { sectionSx } from "../App";
import projects from "../data/projects";
import { skillIcons } from "../data/skills";

export interface ProjectProps {
  title: string;
  images: { original: string, thumbnail: string }[];
  description: string;
  url?: string;
  github?: string;
  skills?: (keyof typeof skillIcons)[];
  features?: string[];
  sx?: SxProps;
  titleVariant?: TypographyOwnProps['variant'];
};

export const Project = ({ title, description, url, images, skills, github, features, sx, titleVariant }: ProjectProps) => {
  return (
    <Box className="project" sx={{ ...(sx || {}) }}>
      <Typography variant={titleVariant || 'h4'} component="p" pl={0} ml={0} mb={2} color={'white'}>
        {title} {url && <Typography color="white" component="a" href={url} target="_blank" rel="noreferrer noopener">({url})</Typography>}
      </Typography>

      <Typography variant="body2" component="p" pl={0} ml={0} mb={2} color={'white'}>
        {description}
      </Typography>

      <ImageGallery items={images} />

      <Grid container spacing={1}>

          {features && (
        <Grid item xs={12} md={6}>
          <Typography variant="h6" component="p" pl={0} ml={0} pb={0} color={'white'}>
            Features:
          </Typography>

          <Box component="ul" color={"#fff"} display="flex" flexDirection="column" flexWrap="wrap" justifyContent="start" alignItems="start" pt={0} mt={0}>
            {features.map((feature, index) => (
              <Box component="li" key={index} pt={1}>
                <Typography variant="body2" component="p" pl={0} ml={0} color={'white'}>
                  {feature}
                </Typography>
              </Box>
            ))}
          </Box>
        </Grid>
      )}   

{ skills &&
          <Grid item xs={12} md={6}>
            <Typography variant="h6" component="p" pl={0} ml={0} color={'white'}>
              Skills and Technologies:
            </Typography>

            <Box display="block">
              {skills.map((skill, index) => (
                <Box height={20} width={20} key={index} p={"4px"} display="inline-block">
                  {skillIcons[skill]}
                </Box>
              ))}
            </Box>
          </Grid>
          }

          { github &&
          <Grid item xs={12} md={6}>
            <Typography variant="h6" component="span" pl={0} ml={0} color={'white'}>
              GitHub:
            </Typography>

            <Box pl={1} width="1.25rem" height="1.25rem" display="inline-block">
              <Typography color="white" sx={{ cursor: 'pointer' }} component="a" href={github} target="_blank" rel="noreferrer noopener">
                {skillIcons.github}
              </Typography>
            </Box>
          </Grid>
          }


      </Grid>

    </Box>
  );
}

const Projects = () => (
  <Grid container spacing={0} sx={sectionSx}>
    <SectionHeader label="Solo Projects" />
    {projects.map((project, index) => (
      <Grid container item xs={12} key={index} spacing={0}>
        <Grid item xs={12}>
          <Project {...project} sx={{ mx: 'auto', pl: 2 }} />
        </Grid>

        { index < projects.length - 1 &&
          <Grid item xs={12} sx={{ my: 4 }}>
            <Divider sx={{ background: 'white' }} />
          </Grid>
        }
      </Grid>
    ))}
  </Grid>
);


export default Projects;
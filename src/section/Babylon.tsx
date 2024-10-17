import { Grid } from "@mui/material";
import SectionHeader from "../component/SectionHeader";
import { sectionSx } from "../App";
import { useBabylon } from "../hook/useBabylon";
import BabylonScene from "../component/BabylonScene";
import Matrix from "../component/Matrix/Matrix";

const Babylon = () => {
  const { canvasRef, scene, addBox, addEmpty, addLight, rotateEmptyNode } = useBabylon();

  return (
    <Grid container spacing={0}  sx={sectionSx}>
      <SectionHeader label="Babylon.js Matrix Demo" />
      <BabylonScene canvasRef={canvasRef} />
      {scene && <Matrix size={6} {...{ scene, addBox, addEmpty, addLight, rotateEmptyNode }} cubeSize={1} />}
    </Grid>
  );

};

export default Babylon;
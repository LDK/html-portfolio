// /app/games/babylon/components/Matrix.tsx
import { useEffect } from "react";
import { LightProps, MaterialProps, ObjectProps, Vector3 } from "../../hook/useBabylon";
import * as BABYLON from "babylonjs";
import MatrixInnerChaser from "./InnerChaser";
import { ChaserPlaylist, defaultPlaylist } from "./sequence";
import MatrixSliceRotator from "./SliceRotator";

interface MatrixProps {
  size?: number;
  cubeSize?: number;
  inner?: MaterialProps;
  outer?: MaterialProps;
  addEmpty: (props: Omit<ObjectProps, 'material'>) => BABYLON.TransformNode | undefined;
  addBox: (props: Omit<ObjectProps, 'type'>) => BABYLON.Mesh | undefined;
  addLight: (props: LightProps) => BABYLON.Light | undefined;
  rotateEmptyNode: (node: BABYLON.TransformNode, scene: BABYLON.Scene) => void;
  scene: BABYLON.Scene;
  playlist?: ChaserPlaylist;
}
const matrixOuterMaterial:MaterialProps = {
  name: 'outer',
  type: 'standard',
  color: [1, 1, 1],
  alpha: .1
};

const matrixInnerMaterial:MaterialProps = {
  name: 'inner',
  type: 'standard',
  color: [0, 0, 1],
  alpha: .6
};

const materialColorMorph = (mesh: BABYLON.Mesh, scene: BABYLON.Scene, frames: number = 100) => {
  // Define the colors for the smooth transition
  const color1 = new BABYLON.Color3(1, 0, 0); // Red
  const color2 = new BABYLON.Color3(0, 1, 0); // Green
  const color3 = new BABYLON.Color3(0, .3, 1); // Blue

  // Set keyframes for continuous color transition
  const colorAnimationKeys = [
      { frame: 0, value: color1 },             // Start with red
      { frame: Math.floor(frames / 3), value: color2 },    // Transition to green
      { frame: Math.floor((frames / 3) * 2), value: color3 }, // Transition to blue
      { frame: frames, value: color1 },        // Loop smoothly back to red
  ];

  // console.log('colorAnimationKeys:', colorAnimationKeys);

  // Create a material animation for color morphing
  const meshAnimation = new BABYLON.Animation(
      `${mesh.name}-color`,        // Name of the animation
      "material.diffuseColor",          // Property to animate
      30,                      // Frames per second
      BABYLON.Animation.ANIMATIONTYPE_COLOR3, // Color animation type
      BABYLON.Animation.ANIMATIONLOOPMODE_CYCLE, // Enable looping
      true
  );

  // Set the keyframes
  meshAnimation.setKeys(colorAnimationKeys);
  meshAnimation.setEasingFunction(new BABYLON.CubicEase());

  // Attach the animation to the material
  mesh.animations = mesh.animations || [];
  mesh.animations.push(meshAnimation);

  // Start the animation
  scene.beginAnimation(mesh, 0, frames, true); // Enable looping
};

const Matrix = ({ addBox, addEmpty, addLight, rotateEmptyNode, scene, size = 6, cubeSize = 1, inner = matrixInnerMaterial, outer = matrixOuterMaterial, playlist = defaultPlaylist }:MatrixProps) => {
  // Draw an NxNxN matrix of cubes
  useEffect(() => {
    const drawMatrix = () => {
      console.log('Drawing matrix');
      const existingMatrix = scene.getTransformNodeByName('matrixParent');
      if (existingMatrix) {
        existingMatrix.dispose();
      }
      const matrixRoot = addEmpty({ name: 'matrixParent', position: [0,0,0] });
  
      addLight({ type: 'point', position: [0,0,0], intensity: .8, parent: matrixRoot });
  
      for (let n = 0; n < size; n++) {
        const existingRow = scene.getTransformNodeByName(`matrix-row-${n}`);
        if (existingRow) {
          existingRow.dispose();
        }
  
        const existingCol = scene.getTransformNodeByName(`matrix-col-${n}`);
        if (existingCol) {
          existingCol.dispose();
        }
  
        addEmpty({ name: `matrix-row-${n}`, position: [0,0,0], parent: matrixRoot }); 
        addEmpty({ name: `matrix-col-${n}`, position: [0,0,0], parent: matrixRoot });
      }
  
      // Calculate the offset needed to center the matrix
      const offset = (size % 2 === 0) ? (cubeSize / 2) : 0;
  
      let i = 0;
  
      for (let x = (size / -2); x < (size / 2); x++) {
        i++;
        let j=0;
  
        for (let y = (size / -2); y < (size / 2); y++) {
          j++;
          let k=0;
          
          for (let z = (size / -2); z < (size / 2); z++) {
            k++;
  
            if (i > 2 && i < (size - 2) && j > 2 && j < (size - 2) && k > 2 && k < (size - 2)) {
              continue;
            }
  
            const boxName = `matrix-${i}-${j}-${k}`;
            const existingBox = scene.getMeshByName(boxName);
            if (existingBox) {
              existingBox.dispose();
              // continue;
            }
  
            const type = (x === (size / -2) || y === (size / -2) || z === (size / -2) || x === ( size / 2 - 1) || y === ( size / 2 - 1) || z === ( size / 2 - 1)) ? 'outer' : 'inner';
  
            const material = type === 'inner' ? inner : outer;
  
            // Adjust position to account for the offset if the matrix size is even
            const position = [
              x * cubeSize + offset, // Shift along X-axis
              y * cubeSize + offset, // Shift along Y-axis
              z * cubeSize + offset  // Shift along Z-axis
            ] as Vector3;
  
            const box = addBox({ name: `matrix-${i}-${j}-${k}`, parent: matrixRoot, material: material, position: position });
  
            if (type !== 'inner') {
              // Add a light inside each outer cube
              addLight({ type: 'point', position: [x*cubeSize, y*cubeSize, z*cubeSize], intensity: .8, parent: box });
              if (box && scene && box.material) {
                materialColorMorph(box, scene, 450);
              }
            }
  
          }
        }
      }
  
      if (matrixRoot && scene) {
        rotateEmptyNode(matrixRoot, scene);
      }
    }
  
    drawMatrix();
  }, [addBox, addEmpty, addLight, rotateEmptyNode, scene, size, cubeSize, inner, outer]);
  
  return <>
    <MatrixInnerChaser size={size} interval={90} scene={scene} playlist={playlist} />
    <MatrixSliceRotator size={size} cubeSize={cubeSize} frames={60} scene={scene} />
    </>;
}

export default Matrix;
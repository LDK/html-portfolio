// /app/games/babylon/components/Matrix/SliceRotator.tsx
import * as BABYLON from "babylonjs";
import { columnCubes, rowCubes } from "./sequence";
import { useEffect, useState } from "react";

const MatrixSliceRotator = ({ size, frames, scene, cubeSize }:{ size:number, frames:number, scene?:BABYLON.Scene, cubeSize: number }) => {
  const [next, setNext] = useState<'column' | 'row'>('row');

  useEffect(() => {
    const rotateColumn = (column: number, frames: number, reverse: boolean = false) => {
      if (!scene) { return; }
      const cubeNames = columnCubes(column, size);
      const columnEmpty = scene.getTransformNodeByName(`matrix-col-${column}`) || undefined;
      const rootEmpty = scene.getTransformNodeByName('matrixParent') || undefined;
  
      if (!columnEmpty || !rootEmpty || !cubeNames || !cubeNames.length || !column) {
        setNext('row');
        return; 
      }
  
      columnEmpty.parent = rootEmpty;
      columnEmpty.rotation.x = 0;
  
      for (let i = 0; i < cubeNames.length; i++) {
        const cube = scene.getMeshByName(cubeNames[i]) || undefined;
        if (!cube) { continue; }
  
        // setTimeout(() => {
          cube.parent = columnEmpty;
        // }, 100);
      }
  
      const rotateColumnEmpty = new BABYLON.Animation(
        `rotate-column-${column}`,
        "rotation.x",
        30,
        BABYLON.Animation.ANIMATIONTYPE_FLOAT,
        BABYLON.Animation.ANIMATIONLOOPMODE_CONSTANT
      );
  
      rotateColumnEmpty.setEasingFunction(new BABYLON.BezierCurveEase(0.02, 0.01, 0.98, 0.99));
  
      const keys = [
        { frame: 0, value: 0 },
        { frame: frames * 2, value: Math.PI * (reverse ? 1 : -1) }
      ];
  
      rotateColumnEmpty.setKeys(keys);
      columnEmpty.animations = columnEmpty.animations || [];
      columnEmpty.animations = [rotateColumnEmpty];
  
      scene.beginAnimation(columnEmpty, 0, frames, false, 1, () => {
        for (let i = 0; i < cubeNames.length; i++) {
          const cube = scene.getMeshByName(cubeNames[i]) || undefined;
          if (!cube) { continue; }
  
          columnEmpty.animations = [];
          cube.parent = rootEmpty;
          setNext('row');
        }
        columnEmpty.rotation = BABYLON.Vector3.Zero();
      });
    }
  
    const rotateRow = (row: number, frames: number, reverse: boolean = false) => {
      if (!scene) { return; }
      const cubeNames = rowCubes(row, size);
      const rowEmpty = scene.getTransformNodeByName(`matrix-row-${row}`) || undefined;
      const rootEmpty = scene.getTransformNodeByName('matrixParent') || undefined;
  
      if (!rowEmpty || !rootEmpty || !cubeNames || !cubeNames.length || !row) {
        setNext('column');
        return; 
      }
  
      rowEmpty.parent = rootEmpty;
      rowEmpty.rotation.y = 0;
  
      for (let i = 0; i < cubeNames.length; i++) {
        const cube = scene.getMeshByName(cubeNames[i]) || undefined;
        if (!cube) { continue; }
  
        // setTimeout(() => {
          cube.parent = rowEmpty;
        // }, 100);
      }
  
      const rotateRowEmpty = new BABYLON.Animation(
        `rotate-row-${row}`,
        "rotation.y",
        30,
        BABYLON.Animation.ANIMATIONTYPE_FLOAT,
        BABYLON.Animation.ANIMATIONLOOPMODE_CONSTANT
      );
  
      const keys = [
        { frame: 0, value: 0 },
        { frame: frames * 2, value: Math.PI * (reverse ? 1 : -1) }
      ];
  
      rotateRowEmpty.setKeys(keys);
      rowEmpty.animations = rowEmpty.animations || [];
      rowEmpty.animations = [rotateRowEmpty];
  
      scene.beginAnimation(rowEmpty, 0, frames, false, 1, () => {
        for (let i = 0; i < cubeNames.length; i++) {
          const cube = scene.getMeshByName(cubeNames[i]) || undefined;
          if (!cube) { continue; }
  
          rowEmpty.animations = [];
          cube.parent = rootEmpty;
          setNext('column');
        }
      });
    };
  
    const yesNo = Math.random() < 0.5;

    if (next === 'row') {
      // Random number from 1 to size
      const row = Math.floor(Math.random() * size - 1) + 1;
      console.log('row',row);
      rotateRow(row, frames, yesNo);
    } else if (next === 'column') {
      const column = Math.floor(Math.random() * size - 1) + 1;
      rotateColumn(column, frames, yesNo);
    } 
  }, [next, frames, size, scene]);

  if (!scene) { return null; }

  return <></>;
};

export default MatrixSliceRotator;

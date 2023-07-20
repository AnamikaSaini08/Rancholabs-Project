import { createSlice } from "@reduxjs/toolkit";
import { IGameConfig } from "../../Interface/IGameConfig";
import * as GridThemes from "../Themes/GridThemes";
import * as EnvironmentThemes from "../Themes/EnvironmentThemes";

const initialState: IGameConfig[] = [
  {
    row: 7,
    col: 7,
    robotStartPosition: [2,4 ],
    robotEndPosition: [7, 7],
    obstaclePosition: [
      [4, 7],
     
      [2,7]
    ],
    batteryPosition: [
      [3, 2],
      [4, 4],
      [4, 3],
    ],
    initialDirectionRobot: "TOP",
    hintArray: ["LEFT", "FORWARD"],
    gridTheme: GridThemes.whiteBlue,
    environment: EnvironmentThemes.SpaceCraft,
    blocks: ["move_block"],
  },
  {
    row: 7,
    col: 7,
    robotStartPosition: [2, 4],
    robotEndPosition: [7, 7],
    obstaclePosition: [
      [4, 7],
      [2, 7],
      
      [5, 3],
    ],
    batteryPosition: [
      [2, 2],
      [4, 4],
      [4, 3],
    ],
    initialDirectionRobot: "TOP",
    hintArray: ["LEFT", "FORWARD"],
    gridTheme: GridThemes.whiteBlue,
    environment: EnvironmentThemes.SpaceCraft,
    blocks: ["move_block", "turn_block"],
  },
  {
    row: 10,
    col: 10,
    robotStartPosition: [4, 2],
    robotEndPosition: [7, 7],
    obstaclePosition: [
      [4, 7],
      [7, 7],
      [2, 2],
      [5, 3],
    ],
    batteryPosition: [
      [3, 2],
      [4, 4],
      [4, 3],
    ],
    initialDirectionRobot: "TOP",
    hintArray: ["LEFT", "FORWARD"],
    gridTheme: GridThemes.orangeBrown,
    environment: EnvironmentThemes.ParkNight,
    blocks: ["move_block", "turn_block", "repeat_block"],
  },
];

const matrixConfigSlice = createSlice({
  name: "matrixConfig",
  initialState,
  reducers: {},
});

export default matrixConfigSlice.reducer;

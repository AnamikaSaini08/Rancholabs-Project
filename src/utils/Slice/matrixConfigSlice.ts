import { createSlice } from "@reduxjs/toolkit";
import { IGameConfig } from "../../Interface/IGameConfig";

const initialState: IGameConfig[] = [
  {
    row: 10,
    col: 10,
    robotStartPosition: { x: 4, y: 2 },
    robotEndPosition: { x: 10, y: 10 },
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
    environment: "space",
    blocks: ["move_block"],
  },
  {
    row: 10,
    col: 10,
    robotStartPosition: { x: 4, y: 2 },
    robotEndPosition: { x: 10, y: 10 },
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
    environment: "space",
    blocks: ["move_block", "turn_block"],
  },
  {
    row: 10,
    col: 10,
    robotStartPosition: { x: 4, y: 2 },
    robotEndPosition: { x: 10, y: 10 },
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
    environment: "space",
    blocks: ["move_block", "turn_block", "repeat_block"],
  },
];

const matrixConfigSlice = createSlice({
  name: "matrixConfig",
  initialState,
  reducers: {},
});

export default matrixConfigSlice.reducer;

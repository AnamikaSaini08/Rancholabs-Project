import { IGameConfig } from "../../Interface/IGameConfig";
import * as GridThemes from "../Themes/GridThemes";
import * as EnvironmentThemes from "../Themes/EnvironmentThemes";

export const levelThree:IGameConfig={
    row: 7,
    col: 7,
    robotStartPosition: [6,6 ],
    robotEndPosition: [7, 7],
    obstaclePosition: [
      [4, 7],
     
      [2,7]
    ],
    batteryPosition: [
      [2, 5],
      [2,6],
    ],
    initialDirectionRobot: "TOP",
    hintArray: ["LEFT", "FORWARD"],
    gridTheme: GridThemes.whiteBlue,
    environment: EnvironmentThemes.SpaceCraft,
    blocks: ["move_block", "turn_block", "repeat_block"],
  };
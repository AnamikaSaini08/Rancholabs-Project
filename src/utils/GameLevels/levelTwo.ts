import { IGameConfig } from "../../Interface/IGameConfig";
import * as GridThemes from "../Themes/GridThemes";
import * as EnvironmentThemes from "../Themes/EnvironmentThemes";

export const levelTwo:IGameConfig={
    row: 7,
    col: 7,
    robotStartPosition: [2,2 ],
    robotEndPosition: [7, 7],
    obstaclePosition: [
      [4, 7],
      [4,4],
      [4,5],
      [2,7]
    ],
    batteryPosition: [
      [2, 5],
      [2,6],
    ],
    initialDirectionRobot: "TOP",
    hintArray: ["LEFT", "FORWARD"],
    gridTheme: GridThemes.whiteBlue,
    environment: EnvironmentThemes.NightForest,
    blocks: ["move_block", "turn_block"],
  };
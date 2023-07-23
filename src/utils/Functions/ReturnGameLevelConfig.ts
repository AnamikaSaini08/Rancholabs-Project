import { IGameConfig } from "../../Interface/IGameConfig";
// import { levelOne } from "../GameLevels/levelOne";
// import { levelThree } from "../GameLevels/levelThree";
// import { levelTwo } from "../GameLevels/levelTwo";


export function gameLevelConfig(level: number): Promise<IGameConfig> {
  switch (level) {
    case 1:
      return import("../GameLevels/levelOne").then((module) => module.levelOne);
    case 2:
      return import("../GameLevels/levelTwo").then((module) => module.levelTwo);
    default:
      return import("../GameLevels/levelThree").then(
        (module) => module.levelThree
      );
  }
}

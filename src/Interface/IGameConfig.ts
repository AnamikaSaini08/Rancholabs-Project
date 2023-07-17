export interface IGameConfig {
    row: number;
    col: number;
    robotStartPosition: { x: number; y: number };
    robotEndPosition: { x: number; y: number };
    obstaclePosition?: [number, number][];
    batteryPosition?: [number, number][];
    initialDirectionRobot: "TOP" | "BOTTOM" | "LEFT" | "RIGHT";
    hintArray?: ("LEFT" | "RIGHT" | "FORWARD" | "TOP")[];
    environment: string;
  }
  
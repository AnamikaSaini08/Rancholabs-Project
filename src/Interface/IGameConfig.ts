export interface IGameConfig {
  row: number;
  col: number;
  robotStartPosition: [number, number];
  robotEndPosition: [number, number];
  obstaclePosition?: [number, number][];
  batteryPosition?: [number, number][];
  initialDirectionRobot: "TOP" | "BOTTOM" | "LEFT" | "RIGHT";
  hintArray?: ("LEFT" | "RIGHT" | "FORWARD" | "TOP")[];
  gridTheme: {
    gridLines: string;
    gridTop: string;
    gridBottom: string;
    obstacle: string;
  };
  environment: () => JSX.Element;
  blocks: string[];
}

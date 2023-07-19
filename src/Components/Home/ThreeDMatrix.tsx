import { Canvas } from "@react-three/fiber";
import {
  OrbitControls,
  PerspectiveCamera,
  Environment,
  RoundedBox,
} from "@react-three/drei";
import { IGameConfig } from "../../Interface/IGameConfig";
import { useRef } from "react";
import { Star } from "../GltfModels/Star";
import { Robot } from "../GltfModels/Robot";
import { CameraHandler } from "../3d/CameraHandler";

const ThreeDMatrix = ({
  levelConfig,
  showHint,
  setShowHint,
}: {
  levelConfig: IGameConfig;
  showHint: boolean;
  setShowHint: React.Dispatch<React.SetStateAction<boolean>>;
}) => {
  const cameraRef = useRef();
  const orbit = useRef<any>();
  const {
    row,
    col,
    robotStartPosition,
    robotEndPosition,
    obstaclePosition,
    batteryPosition,
    initialDirectionRobot,
    gridTheme,
    environment,
  } = levelConfig;
  const boxOffeset = row / 2 + 0.5;

  return (
    <div className="h-screen w-full bg-blue-700">
      <Canvas>
        <ambientLight intensity={0.9} />
        <spotLight
          intensity={0.9}
          angle={0.4}
          penumbra={1}
          position={[10, 10, 10]}
          castShadow
        />
        <CameraHandler />
        <gridHelper
          args={[row, col, gridTheme.gridLines, gridTheme.gridLines]}
        />
        <RoundedBox
          args={[row + 0.2, col + 0.2, 0.15]}
          rotation={[Math.PI / 2, 0, 0]}
          radius={0.1}
          position={[0, -0.08, 0]}
        >
          <meshLambertMaterial attach="material" color={gridTheme.gridTop} />
        </RoundedBox>
        <RoundedBox
          args={[row + 0.2, col + 0.2, 0.35]}
          rotation={[Math.PI / 2, 0, 0]}
          radius={0.1}
          position={[0, -0.28, 0]}
        >
          <meshLambertMaterial attach="material" color={gridTheme.gridBottom} />
        </RoundedBox>
        {/*environment */ environment()}
        {obstaclePosition?.map((pos, i) => {
          return (
            <mesh
              key={i}
              position={[boxOffeset - pos[1], 0.25, -boxOffeset + pos[0]]}
            >
              <boxGeometry args={[1, 0.5, 1]} />
              <meshStandardMaterial color={gridTheme.obstacle} />
            </mesh>
          );
        })}
        {batteryPosition?.map((pos, i) => {
          return (
            <Star
              key={i}
              position={[
                boxOffeset - pos[1] - 0.1,
                0,
                -boxOffeset + pos[0] + 0.6,
              ]}
            />
          );
        })}
        <Robot
          startPos={[
            boxOffeset - robotStartPosition[1],
            -0.1,
            -boxOffeset + robotStartPosition[0],
          ]}
          endPos={[0, 0, 0]}
          face={initialDirectionRobot}
        />
      </Canvas>
    </div>
  );
};

export default ThreeDMatrix;

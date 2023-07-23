import { Canvas } from "@react-three/fiber";
import {
  OrbitControls,
  PerspectiveCamera,
  Environment,
  RoundedBox,
} from "@react-three/drei";
import { IGameConfig } from "../../Interface/IGameConfig";
import { useEffect, useRef } from "react";
import { Star } from "../GltfModels/Star";
import { Robot } from "../GltfModels/Robot";
import { useState } from "react";
import { ThreeDProps } from "../../Interface/ThreeDMatrixProps";

const ThreeDMatrix = ({
  levelConfig,
  showHint,
  setShowHint,
  isReset,
  setIsReset,
  nextLevelUpdated,
  setNextLevelUpdated,
}: ThreeDProps) => {
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
  const [filterBatteryPosition, setFilterBatteryPosition] =
    useState(batteryPosition);
  const [deleteCoorBattery, setDeleteCoorBattery] = useState([]);
  const [isNextLevel, setIsNextLevel] = useState(false);
  const [startPos, setStartPos] = useState([
    boxOffeset - robotStartPosition[0],
    -0.1,
    -boxOffeset + robotStartPosition[1],
  ]);

  useEffect(() => {
    //First this useEffect execute then children useEffect call
    if (isReset) {
      setFilterBatteryPosition(batteryPosition);
      setDeleteCoorBattery([]);
    }
  }, [isReset]);
  useEffect(() => {
    setFilterBatteryPosition(batteryPosition);
    setDeleteCoorBattery([]);
    setStartPos([
      boxOffeset - robotStartPosition[0],
      -0.1,
      -boxOffeset + robotStartPosition[1],
    ]);
    console.log(startPos);
  }, [levelConfig]);

  return (
    <div className="h-screen w-full bg-blue-600">
      <Canvas>
        <ambientLight intensity={0.9} />
        <spotLight
          intensity={0.9}
          angle={0.4}
          penumbra={1}
          position={[10, 10, 10]}
          castShadow
        />
        <PerspectiveCamera
          ref={cameraRef}
          makeDefault
          position={[0, 5, -13]}
          fov={40}
        />
        <OrbitControls
          ref={orbit}
          minDistance={3}
          maxDistance={30}
          minPolarAngle={0}
          maxPolarAngle={Math.PI / 2.3}
        />
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
              position={[boxOffeset - pos[0], 0.25, -boxOffeset + pos[1]]}
            >
              <boxGeometry args={[1, 0.5, 1]} />
              <meshStandardMaterial color={gridTheme.obstacle} />
            </mesh>
          );
        })}
        {batteryPosition?.map((pos, i) => {
          const starPosition = [boxOffeset - pos[0], 0, -boxOffeset + pos[1]];
          return (
            <Star
              key={i}
              position={[
                boxOffeset - pos[0] - 0.1,
                0,
                -boxOffeset + pos[1] + 0.6,
              ]}
              starPosition={starPosition}
              deleteCoorBattery={deleteCoorBattery}
              isReset={isReset}
              nextLevelUpdated={nextLevelUpdated}
              setNextLevelUpdated={setNextLevelUpdated}
            />
          );
        })}
        <Robot
          startPos={startPos}
          endPos={[0, 0, 0]}
          face={initialDirectionRobot}
          obstaclePosition={obstaclePosition}
          boxOffset={boxOffeset}
          filterBatteryPosition={filterBatteryPosition}
          batteryPosition={batteryPosition}
          setFilterBatteryPosition={setFilterBatteryPosition}
          setDeleteCoorBattery={setDeleteCoorBattery}
          isReset={isReset}
          setIsReset={setIsReset}
          isNextLevel={isNextLevel}
          setIsNextLevel={setIsNextLevel}
          orbitRef={orbit}
          cameraRef={cameraRef}
        />
      </Canvas>
    </div>
  );
};

export default ThreeDMatrix;
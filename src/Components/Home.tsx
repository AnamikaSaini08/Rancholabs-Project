import React, { useState, useEffect, useRef } from "react";
import { useSelector } from "react-redux";
import { GameLevel } from "./GameLevel";
import { IGameConfig } from "../Interface/IGameConfig";

const Home = () => {
  const gamesConfig = useSelector((store: any) => store.matrixConfig);
  const gameLevel = useSelector((store: any) => store.gameLevel.gameLevel);
  const [levelConfig, setLevelConfig] = useState<IGameConfig>(
    gamesConfig[gameLevel - 1]
  );
  const [nextLevelUpdated, setNextLevelUpdated] = useState(false);
  useEffect(() => {
    setLevelConfig(gamesConfig[gameLevel - 1]);
    setNextLevelUpdated(true);
  }, [gameLevel, gamesConfig]);

  return (
    <section className="h-[100vh] w-[100vw] grid grid-cols-2">
      {
        <GameLevel
          levelConfig={levelConfig}
          nextLevelUpdated={nextLevelUpdated}
          setNextLevelUpdated={setNextLevelUpdated}
        />
      }
    </section>
  );
};

export default Home;

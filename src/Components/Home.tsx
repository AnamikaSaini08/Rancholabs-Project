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
  useEffect(()=>{
    setLevelConfig(gamesConfig[gameLevel - 1]);
  },[gameLevel,gamesConfig]);

  return (
    <section className="h-[100vh] w-[100vw] grid grid-cols-2">
      <GameLevel levelConfig={levelConfig} />
    </section>
  );
};

export default Home;

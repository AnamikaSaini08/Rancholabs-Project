import { IGameConfig } from "../Interface/IGameConfig";
import React, { useState, useEffect, useRef } from "react";
import BlocklyComponent, { Block } from "../Blockly";
import "../blocks/customblocks";
import "../generator/generator";
import { useSelector } from "react-redux";
import ThreeDMatrix from "./Home/ThreeDMatrix";
import HintComponent from "./Home/Hint";
import { resetAlert } from "../utils/constant";

export const GameLevel = ({ levelConfig }: { levelConfig: IGameConfig }) => {
  console.log(levelConfig);
  const [showHint, setShowHint] = useState(false);

  return (
    <>
      <div className="bg-slate-700">
        <BlocklyComponent>
          {levelConfig.blocks.map((block, i) => {
            return <Block key={i} type={block} />;
          })}
        </BlocklyComponent>
      </div>
      <div className="bg-red-300">
        <ThreeDMatrix
          levelConfig={levelConfig}
          showHint={showHint}
          setShowHint={setShowHint}
        />
      </div>
    </>
  );
};

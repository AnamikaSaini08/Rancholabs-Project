import { IGameConfig } from "../Interface/IGameConfig";
import { useState, useEffect} from "react";
import BlocklyComponent, { Block } from "../Blockly";
import "../blocks/customblocks";
import "../generator/generator";
import ThreeDMatrix from "./Home/ThreeDMatrix";

export const GameLevel = ({ levelConfig ,nextLevelUpdated,setNextLevelUpdated}: 
  { levelConfig: IGameConfig;
    nextLevelUpdated: boolean;
    setNextLevelUpdated:any;
  }) => {
  const [showHint, setShowHint] = useState(false);
  const [full3DScreen, setFull3DScreen] = useState(true);
  const [isReset, setIsReset] = useState(false);
  const [blocklyKey, setBlocklyKey] = useState(0);

  useEffect(()=>{
    setIsReset(false);
    setShowHint(false);
    setFull3DScreen(true);
    setBlocklyKey((prevKey) => prevKey + 1);
  },[levelConfig])

  return (
    <div className="flex w-screen">
     {!full3DScreen && <div className="w-1/2">
     <BlocklyComponent key={blocklyKey}>
            {levelConfig.blocks.map((block, i) => (
              <Block key={i} type={block} />
            ))}
          </BlocklyComponent>
      </div>}
      <div className={`${full3DScreen ? "w-screen" : " w-1/2"}`}>
        <div className="flex mr-8 absolute top-0 right-0 z-50 ">
          <button
            onClick={() => setFull3DScreen(!full3DScreen)}
            className="bg-white hover:bg-gray-300-300 mx-3 focus:outline-none focus:border-none rounded-full float-right p-2"
          >
            <img
              className="h-8 w-8 bg-white focus:outline-none focus:border-none"
              src={` ${full3DScreen ? 'https://cdn-icons-png.flaticon.com/128/7398/7398301.png' :' https://static.thenounproject.com/png/577796-200.png'}`}
              alt="size"
            />
          </button>
          <button
            className="rounded-full"
             onClick={()=>setIsReset(true)}
          >
          <img src="https://cdn-icons-png.flaticon.com/128/2618/2618245.png" alt="reset"
            className="h-10 w-10 bg-white rounded-full"
          />
          </button>
        </div>
       <ThreeDMatrix
          levelConfig={levelConfig}
          showHint={showHint}
          setShowHint={setShowHint}
          isReset = {isReset}
          setIsReset = {setIsReset}
          nextLevelUpdated={nextLevelUpdated}
          setNextLevelUpdated={setNextLevelUpdated}
        />
      </div>
    </div>
  );
};

import React, { useEffect, useRef } from "react";
import Blockly from "blockly/core";
import "blockly/javascript";
import { javascriptGenerator } from "blockly/javascript";
import locale from "blockly/msg/en";
import "blockly/blocks";
import { IBlocklyConfig } from "../Interface/IBlockyConfig";
import { useDispatch, useSelector } from "react-redux";
import { addBlockInstruction } from "../utils/Slice/blocklyInstructionSlice";
import { generateCode } from "../utils/generateBlocklyCode";
import { changeGameState } from "../utils/Slice/gameLevelSlice";

Blockly.setLocale(locale);
const initialBlocklyValues = {
  readOnly: false,
  trashcan: true,
  move: {
    scrollbars: true,
    drag: true,
    wheel: true,
  },
};
function BlocklyComponent(props: IBlocklyConfig): JSX.Element {
  const { readOnly, trashcan, move } = initialBlocklyValues;
  const blocklyDiv = useRef<HTMLDivElement>(null);
  const toolbox = useRef<HTMLDivElement>(null);
  const primaryWorkspace = useRef<Blockly.WorkspaceSvg | null>(null);
  const dispatch = useDispatch();
  let commandArray: string[] = [];

  const generateBlocklyCode = () => {
    if (primaryWorkspace.current) {
      commandArray = generateCode(
        primaryWorkspace.current,
        javascriptGenerator
      );
      dispatch(addBlockInstruction(commandArray));
      dispatch(changeGameState("PLAY"));
    }
  };

  useEffect(() => {
    if (blocklyDiv.current && toolbox.current) {
      const workspace = Blockly.inject(blocklyDiv.current, {
        toolbox: toolbox.current,
        readOnly,
        trashcan,
        move,
      });

      workspace.addChangeListener((event) => {
        if (
          event.type === Blockly.Events.CREATE ||
          event.type === Blockly.Events.MOVE ||
          event.type === Blockly.Events.BLOCK_MOVE
        ) {
          // Handle block connections and movements
          try {
            // Handle code generation
          } catch (error) {
            console.error("An error occurred during code generation:", error);
            // Handle the error gracefully (e.g., show a notification, display an error message)
          }
        }
      });

      primaryWorkspace.current = workspace;
    }
  }, [readOnly, trashcan, move]);

  return (
    <div className="">
      <div className="flex flex-col">
        <button
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded z-20"
          onClick={generateBlocklyCode}
        >
          Play
        </button>
        <div ref={blocklyDiv} className="h-screen w-1/2 absolute" />
        <div style={{ display: "none" }} ref={toolbox}>
          {props.children}
        </div>
      </div>
    </div>
  );
}

export default BlocklyComponent;

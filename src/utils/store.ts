import { configureStore } from "@reduxjs/toolkit";
import blocklyInstructionSlice from "./Slice/blocklyInstructionSlice";
import matrixConfigSlice from "./Slice/matrixConfigSlice";
import gameLevelSlice from "./Slice/gameLevelSlice";

const store = configureStore({
  reducer: {
    blocklyInstruction: blocklyInstructionSlice,
    matrixConfig: matrixConfigSlice,
    gameLevel: gameLevelSlice,
  },
});
export default store;

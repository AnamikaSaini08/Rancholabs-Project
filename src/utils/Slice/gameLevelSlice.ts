import { createSlice } from "@reduxjs/toolkit";

const gameLevelSlice = createSlice({
  name: "gameLevel",
  initialState: {
    gameLevel: 2,
    gameState: "start",
    robotSpeed: 0.02,
  },
  reducers: {
    increaseGameLevel: (state, action) => {
      state.gameLevel = state.gameLevel + 1;
    },
    changeGameState: (state, action) => {
      state.gameState = action.payload;
    },
  },
});

export const { increaseGameLevel } = gameLevelSlice.actions;
export const { changeGameState } = gameLevelSlice.actions;
export default gameLevelSlice.reducer;

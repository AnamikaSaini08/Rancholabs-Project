import { createSlice } from "@reduxjs/toolkit";

const gameLevelSlice = createSlice({
  name: "gameLevel",
  initialState: {
    gameLevel: 3,
    gameState: "START",
    robotSpeed: 0.02,
  },
  reducers: {
    increaseGameLevel: (state) => {
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

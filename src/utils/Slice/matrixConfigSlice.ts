import { createSlice } from "@reduxjs/toolkit";
import { IGameConfig } from "../../Interface/IGameConfig";

const matrixConfigSlice = createSlice({
  name: "matrixConfig",
  initialState: IGameConfig[]
});

export default matrixConfigSlice.reducer;

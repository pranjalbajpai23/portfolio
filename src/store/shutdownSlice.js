import { createSlice } from "@reduxjs/toolkit";

const shutdownSlice = createSlice({
  name: "shutdown",
  initialState: true,
  reducers: {
    toggleShutdown: (state, actions) => {
      return !state;
    },
  },
});
export const shutdownAction = shutdownSlice.actions;
export default shutdownSlice;

import { createSlice } from "@reduxjs/toolkit";
const maximizeSlice=createSlice({
    name:"maximize",
    initialState:false,
    reducers:{
        toggleMaximize:(state,action)=>{
            return !state;
        }
    }
})
export const maximizeAction=maximizeSlice.actions;
export default maximizeSlice;
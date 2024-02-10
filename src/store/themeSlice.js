import { createSlice } from "@reduxjs/toolkit";

const themeSlice=createSlice({
    name:"theme",
    initialState:true,
    reducers:{
        toggleTheme:(state,action)=>{
            return !state;
        }
    }
})
export const themeAction=themeSlice.actions;
export default themeSlice;
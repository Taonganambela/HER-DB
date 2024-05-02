import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { RootState } from "../store";

export interface AnnouncementCreationI {
    dept: String;
    deptto: String;
    message: String;
}

  const initialState :  AnnouncementCreationI ={
    dept: "",
    deptto: "",
    message: "",
  }

  export const AnnouncementCreationSlice  =  createSlice({
    name:"AnnouncementCreation",
    initialState,
    reducers:{
        setAnnouncementCreationState:(state, action: PayloadAction<AnnouncementCreationI>)=> {
        return {...state, ...action.payload };
        },
    },

 });

 export const {setAnnouncementCreationState } = AnnouncementCreationSlice . actions;

export default AnnouncementCreationSlice.reducer;

export const selectAnnouncementCreation = (state: RootState) => state.AnnouncementCreation;




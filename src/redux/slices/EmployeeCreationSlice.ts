import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { RootState } from "../store";

export interface EmployeeCreationI {
    username: String ;
    otherName: String ;
    lastName: String ;
    dob:String ;
    gender:String ;
    nrc:String ;
    email:String ;
    qualification:String ;
    dept:String ;
    station:String ;
    gn:String ;
    date:String ;
    doc:String ;
    grade:String ;
    docType:String ;
    upload:String ;
}

  const initialState: EmployeeCreationI = {
    username: "",
    otherName: "",
    lastName: "",
    dob:"",
    gender:"",
    nrc:"",
    email:"",
    qualification:"",
    dept:"",
    station:"",
    gn:"",
    date:"",
    doc:"",
    grade:"",
    docType:"",
    upload:""

}

  export const EmployeeCreationSlice  =  createSlice({
    name:"EmployeeCreation",
    initialState,
    reducers:{
        setEmployeeCreationState:(state, action: PayloadAction<EmployeeCreationI>)=> {
        return {...state, ...action.payload };
        },
    },

 });

 export const {setEmployeeCreationState } = EmployeeCreationSlice . actions;

export default EmployeeCreationSlice.reducer;

export const selectEmployeeCreation = (state: RootState) => state.EmployeeCreation;



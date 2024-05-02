import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { RootState } from "../store";
 
export interface ExitInterviewI {
    primaryReason:String;
    mostStisfying:String;
    mostFrustrating:String;
    policies:String;
    considering:String;
    companyRecomendation:String;
    PreventYouFromleaving:String;
    EmployeeComments:String;
    ManagerComment:String;
    comments:String;
}

const initialState : ExitInterviewI = {
    primaryReason:"",
    mostStisfying:"",
    mostFrustrating:"",
    policies:"",
    considering:"",
    companyRecomendation:"",
    PreventYouFromleaving:"",
    EmployeeComments:"",
    ManagerComment:"",
    comments:"",
}


export const ExitInterviewSlice  =  createSlice({
    name:"ExitInterview",
    initialState,
    reducers:{
        setExitInterviewState:(state, action: PayloadAction<ExitInterviewI>)=> {
        return {...state, ...action.payload };
        },
    },

 });

 export const {setExitInterviewState } = ExitInterviewSlice . actions;

export default ExitInterviewSlice.reducer;

export const selectExitInterview = (state: RootState) => state.ExitInterview;


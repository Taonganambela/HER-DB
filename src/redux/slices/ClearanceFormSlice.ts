import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { RootState } from "../store";

export interface ClearanceFormI{
	employeeName:String;
		gn:String;
		section:String;
		department:String;
		check1:String;
		check2:String;
		check3:String;
		check4:String;
		check5:String;
		check6:String;
		coments1:String;
		confirmedBy:String;
		check8:String;
		check9:String;
		check10:String;
		check11:String;
		check12:String;
		check13:String;
		check14:String;
		coments2:String;
		confirmedBy2:String;
		check15:String;
		check16:String;
		check17:String;
		comments3:String;
		confirmedBy3:String;
		check18:String;
		comments4:String;
		confirmedBy4:String;
		check19:String;
		check20:String;
		check21:String;
		comments5:String;
		confirmedBy5:String;
		check22:String;
		comments6:String;
		confirmedBy6:String;
}


const initialState : ClearanceFormI = {
    employeeName:"",
		gn:"",
		section:"",
		department:"",
		check1:"",
		check2:"",
		check3:"",
		check4:"",
		check5:"",
		check6:"",
		coments1:"",
		confirmedBy:"",
		check8:"",
		check9:"",
		check10:"",
		check11:"",
		check12:"",
		check13:"",
		check14:"",
		coments2:"",
		confirmedBy2:"",
		check15:"",
		check16:"",
		check17:"",
		comments3:"",
		confirmedBy3:"",
		check18:"",
		comments4:"",
		confirmedBy4:"",
		check19:"",
		check20:"",
		check21:"",
		comments5:"",
		confirmedBy5:"",
		check22:"",
		comments6:"",
		confirmedBy6:"",
}

export const ClearanceFormSlice  =  createSlice({
    name:"ClearanceForm",
    initialState,
    reducers:{
        setClearanceFormState:(state, action: PayloadAction<ClearanceFormI>)=> {
        return {...state, ...action.payload };
        },
    },

 });

 export const {setClearanceFormState } = ClearanceFormSlice.actions;

export default ClearanceFormSlice.reducer;

export const selectClearanceForm = (state: RootState) => state.ClearanceForm;


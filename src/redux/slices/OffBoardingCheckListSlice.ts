import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { RootState } from "../store";

export interface OffBoardingcheckListI{
	employeeName :String;
	gn :String;
	dayofservice :String;
	email :String;
	residentiolAddress :String;
	mobileNumbers :String;
	nextOfKinName :String;
	nextofKinNumber :String;
	department :String;
	LineManagersName :String;
	Check1:String;
	Check2:String;
	Check3:String;
	Check4:String;
	Check5:String;
	Check6:String;
	Check7:String;
	other1:String;
	check11:String;
	check12:String;
	check13:String;
	check14:String;
	check15:String;
	check16:String;
	check17:String;
	other2:String;
	Managersname:String;
}

const initialState : OffBoardingcheckListI ={
    employeeName :"",
	gn :"",
	dayofservice :"",
	email :"",
	residentiolAddress :"",
	mobileNumbers :"",
	nextOfKinName :"",
	nextofKinNumber :"",
	department :"",
	LineManagersName :"",
	Check1:"",
	Check2:"",
	Check3:"",
	Check4:"",
	Check5:"",
	Check6:"",
	Check7:"",
	other1:"",
	check11:"",
	check12:"",
	check13:"",
	check14:"",
	check15:"",
	check16:"",
	check17:"",
	other2:"",
	Managersname:"",
  }


  export const OffBoardingcheckListSlice  =  createSlice({
    name:"OffBoardingcheckList",
    initialState,
    reducers:{
        setOffBoardingcheckListState:(state, action: PayloadAction<OffBoardingcheckListI>)=> {
        return {...state, ...action.payload };
        },
    },

 });

 export const {setOffBoardingcheckListState } = OffBoardingcheckListSlice . actions;

export default OffBoardingcheckListSlice.reducer;

export const selectOffBoardingcheckList = (state: RootState) => state.OffBoardingcheckList;

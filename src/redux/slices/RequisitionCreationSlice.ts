import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { RootState } from "../store";

export interface RequisitionCreationI {
	    department: String;
		section: String;
		jobTitle: String;
		jobPosition:String;
		budgetstrength:String;
		actualStrength:String;
		variance:String;
		numberrequired:String;
		grade:String;
		basicpay:String;
		dateRequired:String;
		contractduration:String;
		employeegn:String;
		preferedEducation:String;
		professionalQualification:String;
		preferedExperience:String;
		justification:String;
		requisitionedBy:String;
}
const initialState: RequisitionCreationI = {

    department: "",
    section: "",
    jobTitle: "",
    jobPosition:"",
    budgetstrength:"",
    actualStrength:"",
    variance:"",
    numberrequired:"",
    grade:"",
    basicpay:"",
    dateRequired:"",
    contractduration:"",
    employeegn:"",
    preferedEducation:"",
    professionalQualification:"",
    preferedExperience:"",
    justification:"",
    requisitionedBy:"",
}

export const RequisitionCreationSlice = createSlice({
    name: "RequisitionCreation",
    initialState,
    reducers: {
      setRequisitionCreationState: (state, action: PayloadAction<RequisitionCreationI>) => {
        return { ...state, ...action.payload };
      },
    },
  });
  
  export const { setRequisitionCreationState } = RequisitionCreationSlice.actions;
  
  export default RequisitionCreationSlice.reducer;
  
  export const selectPersonalInfo = (state: RootState): RequisitionCreationI =>
    state.RequisitionCreation;
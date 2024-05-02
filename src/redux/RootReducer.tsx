
import { combineReducers } from "redux";
import counterReducer from './slices/counterSlice';
import themeSwitcherReducer from "./slices/ThemeSwitcherSlice"
import RequisitionCreationReducer from './slices/RequisitionCreationSlice'
import EmployeeCreationReducer from './slices/RequisitionCreationSlice'
import AnnouncementCreationReducer from './slices/RequisitionCreationSlice'
import LoginReducer from './slices/LoginSlice'
import OffBoardingcheckListReducer from './slices/OffBoardingCheckListSlice'
import ClearanceFormReducer from './slices/ClearanceFormSlice'
import ExitInterviewReducer from './slices/ExitInterviewSlice'

const rootReducer = combineReducers({
   counter: counterReducer,
   themeSwitcher: themeSwitcherReducer,
   RequisitionCreation:RequisitionCreationReducer,
   EmployeeCreation:EmployeeCreationReducer,
   AnnouncementCreation:AnnouncementCreationReducer,
   Login:LoginReducer,
   OffBoardingcheckList:OffBoardingcheckListReducer,
   ClearanceForm:ClearanceFormReducer,
   ExitInterview:ExitInterviewReducer,
})

export default rootReducer

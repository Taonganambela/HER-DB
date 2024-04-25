
import { combineReducers } from "redux";
import counterReducer from './slices/counterSlice';
import themeSwitcherReducer from "./slices/ThemeSwitcherSlice"
import RequisitionCreationReducer from './slices/RequisitionCreationSlice'

const rootReducer = combineReducers({
   counter: counterReducer,
   themeSwitcher: themeSwitcherReducer,
   RequisitionCreation:RequisitionCreationReducer
})

export default rootReducer

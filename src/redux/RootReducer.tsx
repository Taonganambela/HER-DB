
import { combineReducers } from "redux";
import counterReducer from './slices/counterSlice';
import themeSwitcherReducer from "./slices/ThemeSwitcherSlice"

const rootReducer = combineReducers({
   counter: counterReducer,
   themeSwitcher: themeSwitcherReducer
})

export default rootReducer

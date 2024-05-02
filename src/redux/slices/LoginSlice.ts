import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { RootState } from "../store";

export interface LoginI {
    gn : String;
    password: String;
}

const initialState :  LoginI = {
    gn : "",
    password :"",
}
export const LoginSlice  =  createSlice({
    name:"Login",
    initialState,
    reducers:{
        setLoginState:(state, action: PayloadAction<LoginI>)=> {
        return {...state, ...action.payload };
        },
    },

 });

 export const {setLoginState } = LoginSlice . actions;

export default LoginSlice.reducer;

export const selectLogin = (state: RootState) => state.Login;



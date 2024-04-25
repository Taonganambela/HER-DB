import { Action, ThunkAction, configureStore } from "@reduxjs/toolkit";
import RequisitionCreationReducer from "./slices/RequisitionCreationSlice"


//Nash so here we create the new store

 export const store = configureStore({
    reducer:{
        RequisitionCreation:RequisitionCreationReducer,

    } 
})

export type AppDispatch = typeof store.dispatch;

export type RootState = ReturnType<typeof store.getState>;

export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;

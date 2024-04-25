import { configureStore } from "@reduxjs/toolkit";
import rootReducer from  './RootReducer';

//Nash so here we create the new store

const store = configureStore({
    reducer: rootReducer,
    

})

export type RootState = ReturnType<typeof store.getState>

export type AppDispatch = typeof store.dispatch

export default store;





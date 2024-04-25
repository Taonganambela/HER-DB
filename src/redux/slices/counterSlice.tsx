import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import { RootState } from "../store";

//Create an interface
export interface CounterState {
    value: number;
}
// Define initial state
export const initialState: CounterState = {
    value: 0
}

export const counterSlice = createSlice({
    name: "counter",
     initialState,
     reducers: {
        add: (state, action: PayloadAction<number>) => {
            state.value + action.payload;
        },
        addOne: (state) => {
            state.value += 1;
        },
        subtract: (state, action: PayloadAction<number>) => {
            state.value - action.payload;
     },
     subtractOne: (state) => {
        state.value -= 1;
 }
    }
})

export const {add, addOne, subtract, subtractOne} = counterSlice.actions;

export default counterSlice.reducer

export const selectCount = (state: RootState) => state.counter.value;

import { createSlice } from "@reduxjs/toolkit";

const incomesReducer = createSlice({
    name: "incomes",
    initialState: [],
    reducers: {}
});

export const { insertOne, makeDone } = incomesReducer.actions;

export default incomesReducer.reducer;
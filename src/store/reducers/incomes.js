import { createSlice } from "@reduxjs/toolkit";

import initialValue from "./initial-states";

const incomesReducer = createSlice({
    name: "incomes",
    initialState: [...initialValue.incomes],
    reducers: {}
});

export default incomesReducer.reducer;

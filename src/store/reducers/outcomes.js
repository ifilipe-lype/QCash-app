import { createSlice } from "@reduxjs/toolkit";

import initialValue from "./initial-states";

const outcomesReducer = createSlice({
    name: "outcomes",
    initialState: [...initialValue.outcomes],
    reducers: {}
});

export default outcomesReducer.reducer;

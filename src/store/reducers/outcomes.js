import 'react-native-get-random-values';
import { v4 as uuid } from 'uuid';

import { createSlice } from "@reduxjs/toolkit";

const outcomesReducer = createSlice({
    name: "outcomes",
    initialState: [],
    reducers: {
        addOutcome: (state, { payload }) => {
            const newOutcome = { ...payload, id: uuid()}
            state.push(newOutcome);
        }
    }
});

export const { addOutcome } = outcomesReducer.actions;

export default outcomesReducer.reducer;

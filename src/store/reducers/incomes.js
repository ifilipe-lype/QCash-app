import 'react-native-get-random-values';
import { v4 as uuid } from 'uuid';

import { createSlice } from "@reduxjs/toolkit";

const incomesReducer = createSlice({
    name: "incomes",
    initialState: [],
    reducers: {
        addIncome: (state, { payload }) => {
            const newIncome = { ...payload, id: uuid()}
            state.push(newIncome);
        }
    }
});

export const { addIncome } = incomesReducer.actions;

export default incomesReducer.reducer;

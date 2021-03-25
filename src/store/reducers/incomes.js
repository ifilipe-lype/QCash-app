import 'react-native-get-random-values';
import { v4 as uuid } from 'uuid';

import { createSlice } from "@reduxjs/toolkit";

import initialValue from "./initial-states";

const incomesReducer = createSlice({
    name: "incomes",
    initialState: [...initialValue.incomes],
    reducers: {
        addIncome: (state, { playload }) => {
            const newIncome = { ...playload, id: uuid()}
            state.push(newIncome);
        }
    }
});

export const { addIncome } = incomesReducer.actions;

export default incomesReducer.reducer;

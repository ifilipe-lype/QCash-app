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
        },
        makeIncomeDone: (state, { payload }) => {
            const { id } = payload;
            
            for(let income of state){
                if(income.id === id){
                    income.done = true;
                    break;
                }
            }
        }
    }
});

export const { addIncome, makeIncomeDone } = incomesReducer.actions;

export default incomesReducer.reducer;

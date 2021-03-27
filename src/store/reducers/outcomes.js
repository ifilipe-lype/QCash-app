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
        },
        makeOutcomeDone: (state, { payload }) => {
            const { id } = payload;
            
            for(let outcome of state){
                if(outcome.id === id){
                    outcome.done = true;
                    break;
                }
            }
        }
    }
});

export const { addOutcome, makeOutcomeDone } = outcomesReducer.actions;

export default outcomesReducer.reducer;

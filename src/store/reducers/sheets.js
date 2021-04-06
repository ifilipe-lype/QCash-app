import 'react-native-get-random-values';
import { createSlice } from "@reduxjs/toolkit";

import { generateId } from "../../utils";
import initStt from "./initial-states";

const d = new Date();
const currentDate = `${d.getMonth()}-${d.getFullYear()}`;

const sheetsReducer = createSlice({
    name: "sheets",
    initialState: {
        active: null,
        sheets: {
            [currentDate]: {
                id: generateId(),
                month: d.getMonth(),
                year: d.getFullYear(),
                incomes: initStt.incomes,
                outcomes: initStt.outcomes
            }
        }
    },
    reducers: {
        addActiveSheet: (state, { payload }) => {
            const { month, year } = payload;
            state.sheets[`${month}-${year}`] = { id: generateId(), ...payload };
            state.active = payload;
            console.log("States: ", state.sheets);
        },
        setActiveSheetByDate: (state, { payload }) => {
            const { month, year } = payload;
            state.active = state.sheets[`${month}-${year}`];
        }
    }
});

export const { addActiveSheet, setActiveSheetByDate } = sheetsReducer.actions;

export default sheetsReducer.reducer;

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
            state.active = `${month}-${year}`;
        },
        // CRUD OPERATIONS
        addEntryToSheet: (state, { payload }) => {
            const entry = { id: generateId(), ...payload.entry };

            if (payload.isIncome) {
                state.sheets[state.active].incomes.push(entry);
            } else {
                state.sheets[state.active].outcomes.push(entry);
            }
        },
        makeEntryDone: (state, { payload }) => {
            const { id } = payload.entry;

            for (let entry of state.sheets[state.active][payload.isIncome ? "incomes" : "outcomes"]) {
                if (entry.id === id) {
                    entry.done = true;
                    break;
                }
            }
        },
        updateEntry: (state, { payload }) => {
            const { id } = payload.entry;

            for (let entry of state.sheets[state.active][payload.isIncome ? "incomes" : "outcomes"]) {
                if (entry.id === id) {
                    entry.description = payload.entry.description;
                    entry.amount = payload.entry.amount;
                    entry.done = payload.entry.done;

                    break;
                }
            }
        },
        deleteEntry: (state, { payload }) => {
            const type = payload.isIncome ? "incomes" : "outcomes";
            let activeSheet = state.sheets[state.active];

            const entryIndexToRemove = activeSheet[type].findIndex(entry => entry.id === payload.id);
            activeSheet[type].splice(entryIndexToRemove, 1);
        }
    }
});

export const {
    addActiveSheet,
    setActiveSheetByDate,
    addEntryToSheet,
    makeEntryDone,
    updateEntry,
    deleteEntry
} = sheetsReducer.actions;

export default sheetsReducer.reducer;

import 'react-native-get-random-values';

import { createSlice } from "@reduxjs/toolkit";

const sheetsReducer = createSlice({
    name: "sheets",
    initialState: {
        activeSheet: null,
        currentSheet: null,
        sheets: {
            "04-2021": {
                date: Date.now(),
                incomes: [],
                outcomes: []
            }
        }
    },
    reducers: {}
});

export default sheetsReducer.reducer;

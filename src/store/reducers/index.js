import { combineReducers } from "@reduxjs/toolkit";
import IncomesReducer from "./incomes";
import OutcomesReducer from "./outcomes";

export default combineReducers({
    incomes: IncomesReducer,
    outcomes: OutcomesReducer
});

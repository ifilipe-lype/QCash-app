import { combineReducers } from "@reduxjs/toolkit";
import IncomesReducer from "./incomes";

export default combineReducers({
    incomes: IncomesReducer
});

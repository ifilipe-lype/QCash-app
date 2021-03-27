import { combineReducers } from "@reduxjs/toolkit";
import AsyncStorage from '@react-native-community/async-storage';
import { persistReducer } from "redux-persist"

import outcomesReducer from "./outcomes";
import incomesReducer from "./incomes";

const rootReducer = combineReducers({
    outcomes: outcomesReducer,
    incomes: incomesReducer
});

const persistConfig = {
    key: 'root',
    version: 1,
    storage: AsyncStorage,
}

export default persistReducer(persistConfig, rootReducer);

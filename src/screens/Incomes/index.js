import React from "react";

import { useSelector, useDispatch } from "react-redux";

import EntriesSharedScreen from "../../components/EntriesSharedScreen";

import { addIncome } from "../../store/reducers/incomes";

export default function IncomeScreen() {

    const dispatch = useDispatch();

    const incomes = useSelector(store => store.incomes);

    function saveEntry(entry){
        dispatch(addIncome(entry));
    }

    return (
        <EntriesSharedScreen
            isIncome
            entries={incomes}
            title={"Ganhos de Março, 2021"}
            saveEntry={saveEntry}
        />
    )
}

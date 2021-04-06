import React from "react";

import { useSelector, useDispatch } from "react-redux";

import EntriesSharedScreen from "../../components/EntriesSharedScreen";

import { addIncome, makeIncomeDone, updateIncome, deleteIncome } from "../../store/reducers/incomes";
import { addEntryToSheet } from "../../store/reducers/sheets";

export default function IncomeScreen() {

    const dispatch = useDispatch();

    const { active, sheets } = useSelector(store => store.monthlySheets)

    const incomes = sheets[active].incomes;

    function saveEntry(entry){
        dispatch(addEntryToSheet({ isIncome: true, entry }));
    }

    function markEntryAsDone(entry){
        dispatch(makeIncomeDone(entry));
    }

    function updateEntry(entry){
        dispatch(updateIncome(entry));
    }

    function deleteEntry(entry){
        dispatch(deleteIncome(entry));
    }

    return (
        <EntriesSharedScreen
            isIncome
            entries={incomes}
            title={"Ganhos de Março, 2021"}
            saveEntry={saveEntry}
            markEntryAsDone={markEntryAsDone}
            updateEntry={updateEntry}
            deleteEntry={deleteEntry}
        />
    )
}
